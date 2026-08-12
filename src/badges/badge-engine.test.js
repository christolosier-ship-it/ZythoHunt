import test from "node:test";
import assert from "node:assert/strict";
import { BADGE_DEFINITIONS } from "./badge-definitions.js";
import { createBadgeEngine, isBadgeConditionMet } from "./badge-engine.js";
import { createBadgeStore } from "./badge-storage.js";
import { BADGE_EVENT_TYPES, createBadgeEvent } from "./badge-events.js";
import { collectionCatalog } from "../data/collection-catalog.js";
function memoryStorage(){const data=new Map();return{getItem:(k)=>data.get(k)??null,setItem:(k,v)=>data.set(k,v),removeItem:(k)=>data.delete(k)}}
const smallCatalog=[{collection:{id:"a",expectedCardCount:10}},{collection:{id:"b",expectedCardCount:10}},{collection:{id:"bizarre-et-insolite",expectedCardCount:42,secret:{enabled:true}}}];
function makeRegistry(values={}){return{getCollectionProgress(id){const expected=smallCatalog.find((entry)=>entry.collection.id===id)?.collection.expectedCardCount||0;const value=values[id]||{discovered:0,total:expected};return{discovered:value.discovered||0,total:value.total??expected,ratio:value.ratio??((value.total??expected)?(value.discovered||0)/(value.total??expected):0)}}}}
function conditionContext({values={},stats={},event=null,previousRevealStats=null}={}){return{collectionCatalog:smallCatalog,discoveryRegistry:makeRegistry(values),revealStats:stats,event,previousRevealStats}}
const cases=[
["totalDiscoveredAtLeast",{type:"totalDiscoveredAtLeast",count:3},{values:{a:{discovered:3,total:10}}}],
["totalDiscoveredEquals",{type:"totalDiscoveredEquals",count:3},{values:{a:{discovered:3,total:10}}}],
["collectionDiscoveredAtLeast",{type:"collectionDiscoveredAtLeast",collectionId:"a",count:3},{values:{a:{discovered:3,total:10}}}],
["collectionComplete",{type:"collectionComplete",collectionId:"a"},{values:{a:{discovered:10,total:10}}}],
["allCollectionsDiscoveredAtLeast",{type:"allCollectionsDiscoveredAtLeast",count:2},{values:{a:{discovered:2,total:10},b:{discovered:2,total:10}}}],
["allCollectionsRatioAtLeast",{type:"allCollectionsRatioAtLeast",ratio:.5},{values:{a:{discovered:5,total:10},b:{discovered:5,total:10}}}],
["unknownAttemptsAtLeast",{type:"unknownAttemptsAtLeast",count:10},{stats:{unknownAttempts:10}}],
["unknownStreakAtLeast",{type:"unknownStreakAtLeast",count:5},{stats:{bestUnknownStreak:5}}],
["alreadyDiscoveredAttemptsAtLeast",{type:"alreadyDiscoveredAttemptsAtLeast",count:10},{stats:{alreadyDiscoveredAttempts:10}}],
["externalCollectionMatchesAtLeast",{type:"externalCollectionMatchesAtLeast",count:5},{stats:{externalCollectionMatches:5}}],
["unknownStreakThenValid",{type:"unknownStreakThenValid",count:3},{event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"a"}),previousRevealStats:{currentUnknownStreak:3}}],
["alreadyDiscoveredAfterNewDiscovery",{type:"alreadyDiscoveredAfterNewDiscovery"},{event:createBadgeEvent({type:BADGE_EVENT_TYPES.ALREADY_DISCOVERED,collectionId:"a"}),previousRevealStats:{lastDiscoveryWasNew:true}}],
["lastCardInCollection",{type:"lastCardInCollection"},{values:{a:{discovered:10,total:10}},event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"a"})}],
["revealedAfterMidnight",{type:"revealedAfterMidnight"},{event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"a",at:"2026-08-12T02:00:00"})}],
["revealedBeforeHour",{type:"revealedBeforeHour",hour:8},{event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"a",at:"2026-08-12T07:00:00"})}],
["backAfterDaysWithoutDiscovery",{type:"backAfterDaysWithoutDiscovery",days:7},{event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"a",at:"2026-08-09T12:00:00Z"}),previousRevealStats:{lastDiscoveryAt:"2026-08-01T12:00:00Z"}}],
["collectionsInSessionAtLeast",{type:"collectionsInSessionAtLeast",count:2},{stats:{sessionCollectionIds:["a","b"]}}],
["allCollectionsInSession",{type:"allCollectionsInSession"},{stats:{sessionCollectionIds:["a","b"]}}],
["finalCardDiscovered",{type:"finalCardDiscovered"},{values:{a:{discovered:10,total:10},b:{discovered:10,total:10}},event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"b"})}]
];
for(const [name,condition,ctx] of cases)test(`condition ${name}`,()=>assert.equal(isBadgeConditionMet({condition},conditionContext(ctx)),true));
test("la dernière carte doit appartenir à la collection qui vient réellement d'être complétée",()=>{const ctx=conditionContext({values:{a:{discovered:10,total:10},b:{discovered:1,total:10}},event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"b"})});assert.equal(isBadgeConditionMet({condition:{type:"lastCardInCollection"}},ctx),false)});
test("C10 est exclue des totaux même lors d'une réconciliation sans événement",()=>{const badgeStore=createBadgeStore({storage:memoryStorage()});const registry={getCollectionProgress(id){if(id==="bizarre-et-insolite")return{discovered:42,total:42,ratio:1};return{discovered:0,total:10,ratio:0}}};const engine=createBadgeEngine({badgeStore,discoveryRegistry:registry,revealStatsStore:{getState:()=>({})},collectionCatalog:smallCatalog});assert.deepEqual(engine.evaluate({archive:true}),[]);assert.equal(Object.keys(badgeStore.getState().unlocked).length,0)});
test("matrice C10 : 42 découvertes produisent exactement zéro effet badge",()=>{let c10=0;const badgeStore=createBadgeStore({storage:memoryStorage()});const registry={getCollectionProgress(id){if(id==="bizarre-et-insolite")return{discovered:c10,total:42,ratio:c10/42};return{discovered:0,total:10,ratio:0}}};const engine=createBadgeEngine({badgeStore,discoveryRegistry:registry,revealStatsStore:{getState:()=>({})},collectionCatalog:smallCatalog});for(let i=1;i<=42;i+=1){c10=i;assert.deepEqual(engine.evaluate({event:createBadgeEvent({type:BADGE_EVENT_TYPES.NEW_DISCOVERY,collectionId:"bizarre-et-insolite",cardId:`C10-${String(i).padStart(3,"0")}`}),previousRevealStats:{}}),[])}assert.equal(Object.keys(badgeStore.getState().unlocked).length,0)});
test("le badge 013 reste fondé sur les 251 cartes classiques",()=>{const badge013=BADGE_DEFINITIONS.find((badge)=>badge.number===13);const badgeStore=createBadgeStore({storage:memoryStorage()});const registry={getCollectionProgress(id){const entry=collectionCatalog.find((item)=>item.collection.id===id);const total=entry?.collection.expectedCardCount||0;return{discovered:total,total,ratio:total?1:0}}};const engine=createBadgeEngine({badgeStore,discoveryRegistry:registry,revealStatsStore:{getState:()=>({})},collectionCatalog,definitions:[badge013]});assert.equal(engine.evaluate({archive:true}).length,1)});

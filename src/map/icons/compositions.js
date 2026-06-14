export function compositionSlots(vessel, name){const s=vessel.accessorySlots; const map={
 'left-right':[s.backLeft,s.backRight], 'back-left':[s.backLeft,null], 'back-right':[null,s.backRight], 'low-crown':[s.left,s.right], 'single-left':[s.left,null], 'single-right':[null,s.right], symmetric:[s.backLeft,s.backRight], 'behind-vessel':[s.top,null]
}; return map[name]||map['left-right'];}

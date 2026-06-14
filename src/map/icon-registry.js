export function drawIcon(ctx, key, x, y, size, colors = {}) {
  const s = size / 100;
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const ink = colors.ink || '#09283b', foam = colors.foam || '#fff7df', beer = colors.beer || '#f4b33d', green = colors.green || '#76ae4b';
  function roundedRect(x,y,w,h,r){const rr=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath();}
  function glass(w=44,h=66){ctx.strokeStyle=ink;ctx.lineWidth=6;ctx.fillStyle='rgba(239,253,255,.55)';roundedRect(-w/2,-h/2,w,h,10);ctx.fill();ctx.stroke();ctx.fillStyle=beer;ctx.fillRect(-w/2+7,-h/2+26,w-14,h-34);}
  if (key === 'hop') { ctx.fillStyle=green; ctx.strokeStyle=ink; ctx.lineWidth=5; for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3;ctx.beginPath();ctx.ellipse(Math.cos(a)*18,Math.sin(a)*16,14,24,a,0,Math.PI*2);ctx.fill();ctx.stroke();} ctx.beginPath();ctx.moveTo(0,-34);ctx.lineTo(0,38);ctx.stroke(); }
  else if (key === 'wheat') { ctx.strokeStyle='#a87420';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(0,38);ctx.lineTo(0,-38);ctx.stroke();ctx.fillStyle='#f4d96a'; for(let i=0;i<5;i++){ctx.beginPath();ctx.ellipse(-14,-24+i*14,8,18,-.7,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(14,-18+i*14,8,18,.7,0,Math.PI*2);ctx.fill();ctx.stroke();} }
  else if (key === 'beer-mug') { glass(52,66); ctx.fillStyle=foam; ctx.beginPath();ctx.arc(-18,-38,16,0,Math.PI*2);ctx.arc(2,-43,20,0,Math.PI*2);ctx.arc(24,-36,15,0,Math.PI*2);ctx.fill();ctx.strokeStyle=ink;ctx.lineWidth=6;ctx.stroke();ctx.beginPath();ctx.arc(33,-5,18,-Math.PI/2,Math.PI/2);ctx.stroke(); }
  else if (key === 'bottle') { ctx.fillStyle='#c7475a';ctx.strokeStyle=ink;ctx.lineWidth=6;roundedRect(-17,-38,34,76,12);ctx.fill();ctx.stroke();ctx.fillStyle='#f4d96a';ctx.fillRect(-11,-12,22,22); }
  else if (key === 'dark-glass') { colors.beer='#4a2b22'; glass(40,66); }
  else if (key === 'tulip') { ctx.strokeStyle=ink;ctx.lineWidth=6;ctx.fillStyle='rgba(239,253,255,.55)';ctx.beginPath();ctx.moveTo(-25,-34);ctx.quadraticCurveTo(-20,20,0,24);ctx.quadraticCurveTo(20,20,25,-34);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle=beer;ctx.beginPath();ctx.moveTo(-17,-4);ctx.quadraticCurveTo(0,16,17,-4);ctx.lineTo(20,-28);ctx.lineTo(-20,-28);ctx.closePath();ctx.fill(); }
  else if (key === 'pint' || key === 'ale-glass' || key === 'lager-glass') glass(key==='lager-glass'?34:42,66);
  else { ctx.fillStyle=ink;ctx.font='800 70px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('?',0,0); }
  ctx.restore();
}

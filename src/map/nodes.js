function lines(text, max = 14) {
  const words = text.split(' ');
  const out = [];
  let current = '';
  for (const word of words) {
    if (`${current} ${word}`.trim().length > max) {
      if (current) out.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  }
  if (current) out.push(current);
  return out;
}

export function renderNodes(group, nodes) {
  group.replaceChildren();
  for (const node of nodes) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', `map-node ${node.functionalType === 'structure' ? 'is-structure' : 'is-style'} family-${node.visualFamily}`);
    g.setAttribute('transform', `translate(${node.position.x} ${node.position.y})`);
    g.dataset.nodeId = node.id;

    const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    desc.textContent = node.functionalType === 'capturable' ? `Style découvert : ${node.name}` : `Nœud structurel : ${node.name}`;
    g.append(desc);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', node.functionalType === 'structure' ? 54 : 38);
    g.append(circle);

    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    title.setAttribute('text-anchor', 'middle');
    title.setAttribute('class', 'node-label');
    for (const [index, part] of lines(node.shortName || node.name).entries()) {
      const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tspan.setAttribute('x', '0');
      tspan.setAttribute('dy', index === 0 ? '-0.15em' : '1.1em');
      tspan.textContent = part;
      title.append(tspan);
    }
    g.append(title);

    if (node.subtitle) {
      const subtitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      subtitle.setAttribute('text-anchor', 'middle');
      subtitle.setAttribute('y', '76');
      subtitle.setAttribute('class', 'node-subtitle');
      subtitle.textContent = node.subtitle;
      g.append(subtitle);
    }
    group.append(g);
  }
}

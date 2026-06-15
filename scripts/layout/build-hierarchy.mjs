import { stratify } from 'd3-hierarchy';
export function buildHierarchy(nodes) {
  const ordered = [...nodes].sort((a, b) => (a.parentId || '').localeCompare(b.parentId || '') || a.id.localeCompare(b.id));
  const root = stratify().id(d => d.id).parentId(d => d.parentId || null)(ordered);
  const all = [];
  (function walk(n){ all.push(n); n.descendants = () => all; n.children ||= []; n.children.sort((a,b)=>a.data.id.localeCompare(b.data.id)); n.children.forEach(walk); })(root);
  root.eachBefore = fn => { (function w(n){ fn(n); n.children.forEach(w); })(root); };
  return root;
}

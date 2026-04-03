// Module: wR1
// Params: w_A

Object.defineProperty(w_A, '__esModule', { value: !0 });
w_A.createMemoKey = w_A.MemoPrefix = void 0;
w_A.MemoPrefix = {
  _gate: 'g',
  _dynamicConfig: 'c',
  _experiment: 'e',
  _layer: 'l',
  _paramStore: 'p',
};
var ag9 = new Set([]),
  sg9 = new Set(['userPersistedValues']);
function rg9(A, B, Q) {
  let I = `${A}|${B}`;
  if (!Q) return I;
  for (let G of Object.keys(Q)) {
    if (sg9.has(G)) return;
    if (ag9.has(G)) I += `|${G}=true`;
    else I += `|${G}=${Q[G]}`;
  }
  return I;
}
w_A.createMemoKey = rg9;

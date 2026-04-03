// Module: L61
// Params: mSA

Object.defineProperty(mSA, '__esModule', { value: !0 });
mSA.getUUID = void 0;
function Sg9() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
    return crypto.randomUUID();
  let A = new Date().getTime(),
    B = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return `xxxxxxxx-xxxx-4xxx-${'89ab'[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(
    /[xy]/g,
    (I) => {
      let G = Math.random() * 16;
      if (A > 0) ((G = ((A + G) % 16) | 0), (A = Math.floor(A / 16)));
      else ((G = ((B + G) % 16) | 0), (B = Math.floor(B / 16)));
      return (I === 'x' ? G : (G & 7) | 8).toString(16);
    }
  );
}
mSA.getUUID = Sg9;

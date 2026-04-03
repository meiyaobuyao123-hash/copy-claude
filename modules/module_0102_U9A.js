// Module: U9A
// Params: E9A

Object.defineProperty(E9A, '__esModule', { value: !0 });
var VE1 = tA(),
  z9A = new Map(),
  H9A = new Set();
function kh2(A) {
  if (!VE1.GLOBAL_OBJ._sentryModuleMetadata) return;
  for (let B of Object.keys(VE1.GLOBAL_OBJ._sentryModuleMetadata)) {
    let Q = VE1.GLOBAL_OBJ._sentryModuleMetadata[B];
    if (H9A.has(B)) continue;
    H9A.add(B);
    let I = A(B);
    for (let G of I.reverse())
      if (G.filename) {
        z9A.set(G.filename, Q);
        break;
      }
  }
}
function w9A(A, B) {
  return (kh2(A), z9A.get(B));
}
function xh2(A, B) {
  try {
    B.exception.values.forEach((Q) => {
      if (!Q.stacktrace) return;
      for (let I of Q.stacktrace.frames || []) {
        if (!I.filename) continue;
        let G = w9A(A, I.filename);
        if (G) I.module_metadata = G;
      }
    });
  } catch (Q) {}
}
function fh2(A) {
  try {
    A.exception.values.forEach((B) => {
      if (!B.stacktrace) return;
      for (let Q of B.stacktrace.frames || []) delete Q.module_metadata;
    });
  } catch (B) {}
}
E9A.addMetadataToStackFrames = xh2;
E9A.getMetadataForUrl = w9A;
E9A.stripMetadataFromStackFrames = fh2;

// Module: XoA
// Params: JoA

Object.defineProperty(JoA, '__esModule', { value: !0 });
JoA.fromBase64 = void 0;
var sD4 = lG(),
  rD4 = /^[A-Za-z0-9+/]*={0,2}$/,
  oD4 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!rD4.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = sD4.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
JoA.fromBase64 = oD4;

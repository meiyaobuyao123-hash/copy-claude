// Module: RA0
// Params: MA0

Object.defineProperty(MA0, '__esModule', { value: !0 });
MA0.fromBase64 = void 0;
var CX4 = lG(),
  XX4 = /^[A-Za-z0-9+/]*={0,2}$/,
  VX4 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!XX4.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = CX4.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
MA0.fromBase64 = VX4;

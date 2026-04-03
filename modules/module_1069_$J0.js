// Module: $J0
// Params: UJ0

Object.defineProperty(UJ0, '__esModule', { value: !0 });
UJ0.fromBase64 = void 0;
var xf4 = lG(),
  ff4 = /^[A-Za-z0-9+/]*={0,2}$/,
  vf4 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!ff4.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = xf4.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
UJ0.fromBase64 = vf4;

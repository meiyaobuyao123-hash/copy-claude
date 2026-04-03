// Module: rN0
// Params: aN0

Object.defineProperty(aN0, '__esModule', { value: !0 });
aN0.fromBase64 = void 0;
var _a4 = lG(),
  ja4 = /^[A-Za-z0-9+/]*={0,2}$/,
  ya4 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!ja4.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = _a4.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
aN0.fromBase64 = ya4;

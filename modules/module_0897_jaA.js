// Module: jaA
// Params: SaA

Object.defineProperty(SaA, '__esModule', { value: !0 });
SaA.fromBase64 = void 0;
var w74 = lG(),
  E74 = /^[A-Za-z0-9+/]*={0,2}$/,
  U74 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!E74.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = w74.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
SaA.fromBase64 = U74;

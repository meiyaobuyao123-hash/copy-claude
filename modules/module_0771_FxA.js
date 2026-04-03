// Module: FxA
// Params: YxA

Object.defineProperty(YxA, '__esModule', { value: !0 });
YxA.fromBase64 = void 0;
var Xc9 = lG(),
  Vc9 = /^[A-Za-z0-9+/]*={0,2}$/,
  Kc9 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!Vc9.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = Xc9.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
YxA.fromBase64 = Kc9;

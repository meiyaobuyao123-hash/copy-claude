// Module: Az0
// Params: tH0

Object.defineProperty(tH0, '__esModule', { value: !0 });
tH0.fromBase64 = void 0;
var $d4 = WD1(),
  qd4 = /^[A-Za-z0-9+/]*={0,2}$/,
  Md4 = (A) => {
    if ((A.length * 3) % 4 !== 0) throw new TypeError('Incorrect padding on base64 string.');
    if (!qd4.exec(A)) throw new TypeError('Invalid base64 string.');
    let B = $d4.fromString(A, 'base64');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength);
  };
tH0.fromBase64 = Md4;

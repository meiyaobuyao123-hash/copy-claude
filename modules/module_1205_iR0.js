// Module: iR0
// Params: cR0

Object.defineProperty(cR0, '__esModule', { value: !0 });
cR0.NodeCrypto = void 0;
var Hg = D1('crypto');
class pR0 {
  async sha256DigestBase64(A) {
    return Hg.createHash('sha256').update(A).digest('base64');
  }
  randomBytesBase64(A) {
    return Hg.randomBytes(A).toString('base64');
  }
  async verify(A, B, Q) {
    let I = Hg.createVerify('RSA-SHA256');
    return (I.update(B), I.end(), I.verify(A, Q, 'base64'));
  }
  async sign(A, B) {
    let Q = Hg.createSign('RSA-SHA256');
    return (Q.update(B), Q.end(), Q.sign(A, 'base64'));
  }
  decodeBase64StringUtf8(A) {
    return Buffer.from(A, 'base64').toString('utf-8');
  }
  encodeBase64StringUtf8(A) {
    return Buffer.from(A, 'utf-8').toString('base64');
  }
  async sha256DigestHex(A) {
    return Hg.createHash('sha256').update(A).digest('hex');
  }
  async signWithHmacSha256(A, B) {
    let Q = typeof A === 'string' ? A : aA6(A);
    return nA6(Hg.createHmac('sha256', Q).update(B).digest());
  }
}
cR0.NodeCrypto = pR0;
function nA6(A) {
  return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
}
function aA6(A) {
  return Buffer.from(A);
}

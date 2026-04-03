// Module: uR0
// Params: mR0

Object.defineProperty(mR0, '__esModule', { value: !0 });
mR0.BrowserCrypto = void 0;
var Vg = $g1(),
  iA6 = Kg();
class cZ1 {
  constructor() {
    if (
      typeof window === 'undefined' ||
      window.crypto === void 0 ||
      window.crypto.subtle === void 0
    )
      throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
  }
  async sha256DigestBase64(A) {
    let B = new TextEncoder().encode(A),
      Q = await window.crypto.subtle.digest('SHA-256', B);
    return Vg.fromByteArray(new Uint8Array(Q));
  }
  randomBytesBase64(A) {
    let B = new Uint8Array(A);
    return (window.crypto.getRandomValues(B), Vg.fromByteArray(B));
  }
  static padBase64(A) {
    while (A.length % 4 !== 0) A += '=';
    return A;
  }
  async verify(A, B, Q) {
    let I = { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } },
      G = new TextEncoder().encode(B),
      D = Vg.toByteArray(cZ1.padBase64(Q)),
      Z = await window.crypto.subtle.importKey('jwk', A, I, !0, ['verify']);
    return await window.crypto.subtle.verify(I, Z, D, G);
  }
  async sign(A, B) {
    let Q = { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } },
      I = new TextEncoder().encode(B),
      G = await window.crypto.subtle.importKey('jwk', A, Q, !0, ['sign']),
      D = await window.crypto.subtle.sign(Q, G, I);
    return Vg.fromByteArray(new Uint8Array(D));
  }
  decodeBase64StringUtf8(A) {
    let B = Vg.toByteArray(cZ1.padBase64(A));
    return new TextDecoder().decode(B);
  }
  encodeBase64StringUtf8(A) {
    let B = new TextEncoder().encode(A);
    return Vg.fromByteArray(B);
  }
  async sha256DigestHex(A) {
    let B = new TextEncoder().encode(A),
      Q = await window.crypto.subtle.digest('SHA-256', B);
    return iA6.fromArrayBufferToHex(Q);
  }
  async signWithHmacSha256(A, B) {
    let Q = typeof A === 'string' ? A : String.fromCharCode(...new Uint16Array(A)),
      I = new TextEncoder(),
      G = await window.crypto.subtle.importKey(
        'raw',
        I.encode(Q),
        { name: 'HMAC', hash: { name: 'SHA-256' } },
        !1,
        ['sign']
      );
    return window.crypto.subtle.sign('HMAC', G, I.encode(B));
  }
}
mR0.BrowserCrypto = cZ1;

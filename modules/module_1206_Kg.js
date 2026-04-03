// Module: Kg
// Params: aR0

Object.defineProperty(aR0, '__esModule', { value: !0 });
aR0.createCrypto = oA6;
aR0.hasBrowserCrypto = nR0;
aR0.fromArrayBufferToHex = tA6;
var sA6 = uR0(),
  rA6 = iR0();
function oA6() {
  if (nR0()) return new sA6.BrowserCrypto();
  return new rA6.NodeCrypto();
}
function nR0() {
  return (
    typeof window !== 'undefined' &&
    typeof window.crypto !== 'undefined' &&
    typeof window.crypto.subtle !== 'undefined'
  );
}
function tA6(A) {
  return Array.from(new Uint8Array(A))
    .map((Q) => {
      return Q.toString(16).padStart(2, '0');
    })
    .join('');
}

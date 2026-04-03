// Module: oV0
// Params: sV0

Object.defineProperty(sV0, '__esModule', { value: !0 });
sV0.toUtf8 = sV0.fromUtf8 = void 0;
var $h4 = (A) => {
  let B = [];
  for (let Q = 0, I = A.length; Q < I; Q++) {
    let G = A.charCodeAt(Q);
    if (G < 128) B.push(G);
    else if (G < 2048) B.push((G >> 6) | 192, (G & 63) | 128);
    else if (Q + 1 < A.length && (G & 64512) === 55296 && (A.charCodeAt(Q + 1) & 64512) === 56320) {
      let D = 65536 + ((G & 1023) << 10) + (A.charCodeAt(++Q) & 1023);
      B.push((D >> 18) | 240, ((D >> 12) & 63) | 128, ((D >> 6) & 63) | 128, (D & 63) | 128);
    } else B.push((G >> 12) | 224, ((G >> 6) & 63) | 128, (G & 63) | 128);
  }
  return Uint8Array.from(B);
};
sV0.fromUtf8 = $h4;
var qh4 = (A) => {
  let B = '';
  for (let Q = 0, I = A.length; Q < I; Q++) {
    let G = A[Q];
    if (G < 128) B += String.fromCharCode(G);
    else if (192 <= G && G < 224) {
      let D = A[++Q];
      B += String.fromCharCode(((G & 31) << 6) | (D & 63));
    } else if (240 <= G && G < 365) {
      let Z = '%' + [G, A[++Q], A[++Q], A[++Q]].map((Y) => Y.toString(16)).join('%');
      B += decodeURIComponent(Z);
    } else B += String.fromCharCode(((G & 15) << 12) | ((A[++Q] & 63) << 6) | (A[++Q] & 63));
  }
  return B;
};
sV0.toUtf8 = qh4;

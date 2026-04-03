// Module: lu
// Params: q2A

Object.defineProperty(q2A, '__esModule', { value: !0 });
var hb2 = tA();
function mb2(A, B, Q, I) {
  let G = Object.entries(hb2.dropUndefinedKeys(I)).sort((D, Z) => D[0].localeCompare(Z[0]));
  return `${A}${B}${Q}${G}`;
}
function db2(A) {
  let B = 0;
  for (let Q = 0; Q < A.length; Q++) {
    let I = A.charCodeAt(Q);
    ((B = (B << 5) - B + I), (B &= B));
  }
  return B >>> 0;
}
function ub2(A) {
  let B = '';
  for (let Q of A) {
    let I = Object.entries(Q.tags),
      G = I.length > 0 ? `|#${I.map(([D, Z]) => `${D}:${Z}`).join(',')}` : '';
    B += `${Q.name}@${Q.unit}:${Q.metric}|${Q.metricType}${G}|T${Q.timestamp}
`;
  }
  return B;
}
function pb2(A) {
  return A.replace(/[^\w]+/gi, '_');
}
function cb2(A) {
  return A.replace(/[^\w\-.]+/gi, '_');
}
function lb2(A) {
  return A.replace(/[^\w\-./]+/gi, '');
}
var ib2 = [
  [
    `
`,
    '\\n',
  ],
  ['\r', '\\r'],
  ['\t', '\\t'],
  ['\\', '\\\\'],
  ['|', '\\u{7c}'],
  [',', '\\u{2c}'],
];
function nb2(A) {
  for (let [B, Q] of ib2) if (A === B) return Q;
  return A;
}
function ab2(A) {
  return [...A].reduce((B, Q) => B + nb2(Q), '');
}
function sb2(A) {
  let B = {};
  for (let Q in A)
    if (Object.prototype.hasOwnProperty.call(A, Q)) {
      let I = lb2(Q);
      B[I] = ab2(String(A[Q]));
    }
  return B;
}
q2A.getBucketKey = mb2;
q2A.sanitizeMetricKey = cb2;
q2A.sanitizeTags = sb2;
q2A.sanitizeUnit = pb2;
q2A.serializeMetricBuckets = ub2;
q2A.simpleHash = db2;

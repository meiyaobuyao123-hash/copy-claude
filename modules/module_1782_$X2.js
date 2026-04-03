// Module: $X2
// Params: j05

var UX2 = $g1(),
  T05 = EX2();
j05.build = _05;
function P05(A) {
  function B(Q) {
    return Q < 10 ? '0' + Q : Q;
  }
  return (
    A.getUTCFullYear() +
    '-' +
    B(A.getUTCMonth() + 1) +
    '-' +
    B(A.getUTCDate()) +
    'T' +
    B(A.getUTCHours()) +
    ':' +
    B(A.getUTCMinutes()) +
    ':' +
    B(A.getUTCSeconds()) +
    'Z'
  );
}
var S05 = Object.prototype.toString;
function NX2(A) {
  var B = S05.call(A).match(/\[object (.*)\]/);
  return B ? B[1] : B;
}
function _05(A, B) {
  var Q = { version: '1.0', encoding: 'UTF-8' },
    I = {
      pubid: '-//Apple//DTD PLIST 1.0//EN',
      sysid: 'http://www.apple.com/DTDs/PropertyList-1.0.dtd',
    },
    G = T05.create('plist');
  if (
    (G.dec(Q.version, Q.encoding, Q.standalone),
    G.dtd(I.pubid, I.sysid),
    G.att('version', '1.0'),
    ss1(A, G),
    !B)
  )
    B = {};
  return ((B.pretty = B.pretty !== !1), G.end(B));
}
function ss1(A, B) {
  var Q,
    I,
    G,
    D = NX2(A);
  if (D == 'Undefined') return;
  else if (Array.isArray(A)) {
    B = B.ele('array');
    for (I = 0; I < A.length; I++) ss1(A[I], B);
  } else if (Buffer.isBuffer(A)) B.ele('data').raw(A.toString('base64'));
  else if (D == 'Object') {
    B = B.ele('dict');
    for (G in A) if (A.hasOwnProperty(G)) (B.ele('key').txt(G), ss1(A[G], B));
  } else if (D == 'Number') ((Q = A % 1 === 0 ? 'integer' : 'real'), B.ele(Q).txt(A.toString()));
  else if (D == 'BigInt') B.ele('integer').txt(A);
  else if (D == 'Date') B.ele('date').txt(P05(new Date(A)));
  else if (D == 'Boolean') B.ele(A ? 'true' : 'false');
  else if (D == 'String') B.ele('string').txt(A);
  else if (D == 'ArrayBuffer') B.ele('data').raw(UX2.fromByteArray(A));
  else if (A && A.buffer && NX2(A.buffer) == 'ArrayBuffer')
    B.ele('data').raw(UX2.fromByteArray(new Uint8Array(A.buffer), B));
  else if (D === 'Null') B.ele('null').txt('');
}

// Module: Kw1
// Params: $AA

Object.defineProperty($AA, '__esModule', { value: !0 });
var QP2 = Tz1(),
  IP2 = Tu(),
  UAA = IJ();
function GP2(A, B = []) {
  return [A, B];
}
function DP2(A, B) {
  let [Q, I] = A;
  return [Q, [...I, B]];
}
function NAA(A, B) {
  let Q = A[1];
  for (let I of Q) {
    let G = I[0].type;
    if (B(I, G)) return !0;
  }
  return !1;
}
function ZP2(A, B) {
  return NAA(A, (Q, I) => B.includes(I));
}
function Vw1(A, B) {
  return (B || new TextEncoder()).encode(A);
}
function YP2(A, B) {
  let [Q, I] = A,
    G = JSON.stringify(Q);
  function D(Z) {
    if (typeof G === 'string') G = typeof Z === 'string' ? G + Z : [Vw1(G, B), Z];
    else G.push(typeof Z === 'string' ? Vw1(Z, B) : Z);
  }
  for (let Z of I) {
    let [Y, W] = Z;
    if (
      (D(`
${JSON.stringify(Y)}
`),
      typeof W === 'string' || W instanceof Uint8Array)
    )
      D(W);
    else {
      let F;
      try {
        F = JSON.stringify(W);
      } catch (J) {
        F = JSON.stringify(IP2.normalize(W));
      }
      D(F);
    }
  }
  return typeof G === 'string' ? G : WP2(G);
}
function WP2(A) {
  let B = A.reduce((G, D) => G + D.length, 0),
    Q = new Uint8Array(B),
    I = 0;
  for (let G of A) (Q.set(G, I), (I += G.length));
  return Q;
}
function FP2(A, B, Q) {
  let I = typeof A === 'string' ? B.encode(A) : A;
  function G(W) {
    let F = I.subarray(0, W);
    return ((I = I.subarray(W + 1)), F);
  }
  function D() {
    let W = I.indexOf(10);
    if (W < 0) W = I.length;
    return JSON.parse(Q.decode(G(W)));
  }
  let Z = D(),
    Y = [];
  while (I.length) {
    let W = D(),
      F = typeof W.length === 'number' ? W.length : void 0;
    Y.push([W, F ? G(F) : D()]);
  }
  return [Z, Y];
}
function JP2(A, B) {
  let Q = typeof A.data === 'string' ? Vw1(A.data, B) : A.data;
  return [
    UAA.dropUndefinedKeys({
      type: 'attachment',
      length: Q.length,
      filename: A.filename,
      content_type: A.contentType,
      attachment_type: A.attachmentType,
    }),
    Q,
  ];
}
var CP2 = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor',
  feedback: 'feedback',
  span: 'span',
  statsd: 'metric_bucket',
};
function XP2(A) {
  return CP2[A];
}
function VP2(A) {
  if (!A || !A.sdk) return;
  let { name: B, version: Q } = A.sdk;
  return { name: B, version: Q };
}
function KP2(A, B, Q, I) {
  let G = A.sdkProcessingMetadata && A.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: A.event_id,
    sent_at: new Date().toISOString(),
    ...(B && { sdk: B }),
    ...(!!Q && I && { dsn: QP2.dsnToString(I) }),
    ...(G && { trace: UAA.dropUndefinedKeys({ ...G }) }),
  };
}
$AA.addItemToEnvelope = DP2;
$AA.createAttachmentEnvelopeItem = JP2;
$AA.createEnvelope = GP2;
$AA.createEventEnvelopeHeaders = KP2;
$AA.envelopeContainsItemType = ZP2;
$AA.envelopeItemTypeToDataCategory = XP2;
$AA.forEachEnvelopeItem = NAA;
$AA.getSdkMetadataForEnvelopeHeader = VP2;
$AA.parseEnvelope = FP2;
$AA.serializeEnvelope = YP2;

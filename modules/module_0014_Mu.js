// Module: Mu
// Params: I1A

Object.defineProperty(I1A, '__esModule', { value: !0 });
var LL2 = IJ(),
  xz1 = $u(),
  RL2 = fG();
function OL2() {
  let A = RL2.GLOBAL_OBJ,
    B = A.crypto || A.msCrypto,
    Q = () => Math.random() * 16;
  try {
    if (B && B.randomUUID) return B.randomUUID().replace(/-/g, '');
    if (B && B.getRandomValues)
      Q = () => {
        let I = new Uint8Array(1);
        return (B.getRandomValues(I), I[0]);
      };
  } catch (I) {}
  return ([1e7] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, (I) =>
    (I ^ ((Q() & 15) >> (I / 4))).toString(16)
  );
}
function Q1A(A) {
  return A.exception && A.exception.values ? A.exception.values[0] : void 0;
}
function TL2(A) {
  let { message: B, event_id: Q } = A;
  if (B) return B;
  let I = Q1A(A);
  if (I) {
    if (I.type && I.value) return `${I.type}: ${I.value}`;
    return I.type || I.value || Q || '<unknown>';
  }
  return Q || '<unknown>';
}
function PL2(A, B, Q) {
  let I = (A.exception = A.exception || {}),
    G = (I.values = I.values || []),
    D = (G[0] = G[0] || {});
  if (!D.value) D.value = B || '';
  if (!D.type) D.type = Q || 'Error';
}
function SL2(A, B) {
  let Q = Q1A(A);
  if (!Q) return;
  let I = { type: 'generic', handled: !0 },
    G = Q.mechanism;
  if (((Q.mechanism = { ...I, ...G, ...B }), B && 'data' in B)) {
    let D = { ...(G && G.data), ...B.data };
    Q.mechanism.data = D;
  }
}
var _L2 =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function jL2(A) {
  let B = A.match(_L2) || [],
    Q = parseInt(B[1], 10),
    I = parseInt(B[2], 10),
    G = parseInt(B[3], 10);
  return {
    buildmetadata: B[5],
    major: isNaN(Q) ? void 0 : Q,
    minor: isNaN(I) ? void 0 : I,
    patch: isNaN(G) ? void 0 : G,
    prerelease: B[4],
  };
}
function yL2(A, B, Q = 5) {
  if (B.lineno === void 0) return;
  let I = A.length,
    G = Math.max(Math.min(I - 1, B.lineno - 1), 0);
  ((B.pre_context = A.slice(Math.max(0, G - Q), G).map((D) => xz1.snipLine(D, 0))),
    (B.context_line = xz1.snipLine(A[Math.min(I - 1, G)], B.colno || 0)),
    (B.post_context = A.slice(Math.min(G + 1, I), G + 1 + Q).map((D) => xz1.snipLine(D, 0))));
}
function kL2(A) {
  if (A && A.__sentry_captured__) return !0;
  try {
    LL2.addNonEnumerableProperty(A, '__sentry_captured__', !0);
  } catch (B) {}
  return !1;
}
function xL2(A) {
  return Array.isArray(A) ? A : [A];
}
I1A.addContextToFrame = yL2;
I1A.addExceptionMechanism = SL2;
I1A.addExceptionTypeValue = PL2;
I1A.arrayify = xL2;
I1A.checkOrSetAlreadyCaught = kL2;
I1A.getEventDescription = TL2;
I1A.parseSemver = jL2;
I1A.uuid4 = OL2;

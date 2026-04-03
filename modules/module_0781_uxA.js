// Module: uxA
// Params: mxA

Object.defineProperty(mxA, '__esModule', { value: !0 });
mxA.modeOf =
  mxA.sizeOf =
  mxA.flush =
  mxA.merge =
  mxA.createBufferedReadable =
  mxA.createBufferedReadableStream =
    void 0;
var cc9 = FO1();
function bxA(A, B, Q) {
  let I = A.getReader(),
    G = !1,
    D = 0,
    Z = ['', new cc9.ByteArrayCollector((F) => new Uint8Array(F))],
    Y = -1,
    W = async (F) => {
      let { value: J, done: C } = await I.read(),
        X = J;
      if (C) {
        if (Y !== -1) {
          let V = q51(Z, Y);
          if ($f(V) > 0) F.enqueue(V);
        }
        F.close();
      } else {
        let V = hxA(X, !1);
        if (Y !== V) {
          if (Y >= 0) F.enqueue(q51(Z, Y));
          Y = V;
        }
        if (Y === -1) {
          F.enqueue(X);
          return;
        }
        let K = $f(X);
        D += K;
        let U = $f(Z[Y]);
        if (K >= B && U === 0) F.enqueue(X);
        else {
          let N = gxA(Z, Y, X);
          if (!G && D > B * 2)
            ((G = !0),
              Q === null ||
                Q === void 0 ||
                Q.warn(
                  `@smithy/util-stream - stream chunk size ${K} is below threshold of ${B}, automatically buffering.`
                ));
          if (N >= B) F.enqueue(q51(Z, Y));
          else await W(F);
        }
      }
    };
  return new ReadableStream({ pull: W });
}
mxA.createBufferedReadableStream = bxA;
mxA.createBufferedReadable = bxA;
function gxA(A, B, Q) {
  switch (B) {
    case 0:
      return ((A[0] += Q), $f(A[0]));
    case 1:
    case 2:
      return (A[B].push(Q), $f(A[B]));
  }
}
mxA.merge = gxA;
function q51(A, B) {
  switch (B) {
    case 0:
      let Q = A[0];
      return ((A[0] = ''), Q);
    case 1:
    case 2:
      return A[B].flush();
  }
  throw new Error(`@smithy/util-stream - invalid index ${B} given to flush()`);
}
mxA.flush = q51;
function $f(A) {
  var B, Q;
  return (Q =
    (B = A === null || A === void 0 ? void 0 : A.byteLength) !== null && B !== void 0
      ? B
      : A === null || A === void 0
        ? void 0
        : A.length) !== null && Q !== void 0
    ? Q
    : 0;
}
mxA.sizeOf = $f;
function hxA(A, B = !0) {
  if (B && typeof Buffer !== 'undefined' && A instanceof Buffer) return 2;
  if (A instanceof Uint8Array) return 1;
  if (typeof A === 'string') return 0;
  return -1;
}
mxA.modeOf = hxA;

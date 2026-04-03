// Module: ixA
// Params: cxA

Object.defineProperty(cxA, '__esModule', { value: !0 });
cxA.createBufferedReadable = void 0;
var rc9 = D1('node:stream'),
  pxA = FO1(),
  IU = uxA(),
  oc9 = tq();
function tc9(A, B, Q) {
  if (oc9.isReadableStream(A)) return IU.createBufferedReadableStream(A, B, Q);
  let I = new rc9.Readable({ read() {} }),
    G = !1,
    D = 0,
    Z = [
      '',
      new pxA.ByteArrayCollector((W) => new Uint8Array(W)),
      new pxA.ByteArrayCollector((W) => Buffer.from(new Uint8Array(W))),
    ],
    Y = -1;
  return (
    A.on('data', (W) => {
      let F = IU.modeOf(W, !0);
      if (Y !== F) {
        if (Y >= 0) I.push(IU.flush(Z, Y));
        Y = F;
      }
      if (Y === -1) {
        I.push(W);
        return;
      }
      let J = IU.sizeOf(W);
      D += J;
      let C = IU.sizeOf(Z[Y]);
      if (J >= B && C === 0) I.push(W);
      else {
        let X = IU.merge(Z, Y, W);
        if (!G && D > B * 2)
          ((G = !0),
            Q === null ||
              Q === void 0 ||
              Q.warn(
                `@smithy/util-stream - stream chunk size ${J} is below threshold of ${B}, automatically buffering.`
              ));
        if (X >= B) I.push(IU.flush(Z, Y));
      }
    }),
    A.on('end', () => {
      if (Y !== -1) {
        let W = IU.flush(Z, Y);
        if (IU.sizeOf(W) > 0) I.push(W);
      }
      I.push(null);
    }),
    I
  );
}
cxA.createBufferedReadable = tc9;

// Module: _xA
// Params: PxA

Object.defineProperty(PxA, '__esModule', { value: !0 });
PxA.createChecksumStream = void 0;
var vc9 = Nf(),
  bc9 = tq(),
  gc9 = TxA(),
  hc9 = ({
    expectedChecksum: A,
    checksum: B,
    source: Q,
    checksumSourceLocation: I,
    base64Encoder: G,
  }) => {
    var D, Z;
    if (!bc9.isReadableStream(Q))
      throw new Error(
        `@smithy/util-stream: unsupported source type ${(Z = (D = Q === null || Q === void 0 ? void 0 : Q.constructor) === null || D === void 0 ? void 0 : D.name) !== null && Z !== void 0 ? Z : Q} in ChecksumStream.`
      );
    let Y = G !== null && G !== void 0 ? G : vc9.toBase64;
    if (typeof TransformStream !== 'function')
      throw new Error(
        '@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.'
      );
    let W = new TransformStream({
      start() {},
      async transform(J, C) {
        (B.update(J), C.enqueue(J));
      },
      async flush(J) {
        let C = await B.digest(),
          X = Y(C);
        if (A !== X) {
          let V = new Error(
            `Checksum mismatch: expected "${A}" but received "${X}" in response header "${I}".`
          );
          J.error(V);
        } else J.terminate();
      },
    });
    Q.pipeThrough(W);
    let F = W.readable;
    return (Object.setPrototypeOf(F, gc9.ChecksumStream.prototype), F);
  };
PxA.createChecksumStream = hc9;

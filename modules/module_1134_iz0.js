// Module: iz0
// Params: cz0

Object.defineProperty(cz0, '__esModule', { value: !0 });
cz0.getAwsChunkedEncodingStream = void 0;
var du4 = D1('stream'),
  uu4 = (A, B) => {
    let {
        base64Encoder: Q,
        bodyLengthChecker: I,
        checksumAlgorithmFn: G,
        checksumLocationName: D,
        streamHasher: Z,
      } = B,
      Y = Q !== void 0 && G !== void 0 && D !== void 0 && Z !== void 0,
      W = Y ? Z(G, A) : void 0,
      F = new du4.Readable({ read: () => {} });
    return (
      A.on('data', (J) => {
        let C = I(J) || 0;
        (F.push(`${C.toString(16)}\r
`),
          F.push(J),
          F.push(`\r
`));
      }),
      A.on('end', async () => {
        if (
          (F.push(`0\r
`),
          Y)
        ) {
          let J = Q(await W);
          (F.push(`${D}:${J}\r
`),
            F.push(`\r
`));
        }
        F.push(null);
      }),
      F
    );
  };
cz0.getAwsChunkedEncodingStream = uu4;

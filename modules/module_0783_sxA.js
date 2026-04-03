// Module: sxA
// Params: nxA

Object.defineProperty(nxA, '__esModule', { value: !0 });
nxA.getAwsChunkedEncodingStream = void 0;
var ec9 = D1('stream'),
  Al9 = (A, B) => {
    let {
        base64Encoder: Q,
        bodyLengthChecker: I,
        checksumAlgorithmFn: G,
        checksumLocationName: D,
        streamHasher: Z,
      } = B,
      Y = Q !== void 0 && G !== void 0 && D !== void 0 && Z !== void 0,
      W = Y ? Z(G, A) : void 0,
      F = new ec9.Readable({ read: () => {} });
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
nxA.getAwsChunkedEncodingStream = Al9;

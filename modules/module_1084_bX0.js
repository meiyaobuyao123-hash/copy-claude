// Module: bX0
// Params: fX0

Object.defineProperty(fX0, '__esModule', { value: !0 });
fX0.fromInstanceMetadata = void 0;
var Ug4 = bX(),
  Ng4 = UP(),
  $g4 = (A) => {
    return (
      A?.logger?.debug('@smithy/credential-provider-imds', 'fromInstanceMetadata'),
      async () =>
        Ng4.fromInstanceMetadata(A)().then((B) =>
          Ug4.setCredentialFeature(B, 'CREDENTIALS_IMDS', '0')
        )
    );
  };
fX0.fromInstanceMetadata = $g4;

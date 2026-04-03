// Module: rfA
// Params: Jm5,sfA

var { defineProperty: P51, getOwnPropertyDescriptor: Ci9, getOwnPropertyNames: Xi9 } = Object,
  Vi9 = Object.prototype.hasOwnProperty,
  S51 = (A, B) => P51(A, 'name', { value: B, configurable: !0 }),
  Ki9 = (A, B) => {
    for (var Q in B) P51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Hi9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Xi9(B))
        if (!Vi9.call(A, G) && G !== Q)
          P51(A, G, { get: () => B[G], enumerable: !(I = Ci9(B, G)) || I.enumerable });
    }
    return A;
  },
  zi9 = (A) => Hi9(P51({}, '__esModule', { value: !0 }), A),
  dfA = {};
Ki9(dfA, {
  AlgorithmId: () => lfA,
  EndpointURLScheme: () => cfA,
  FieldPosition: () => ifA,
  HttpApiKeyAuthLocation: () => pfA,
  HttpAuthLocation: () => ufA,
  IniSectionType: () => nfA,
  RequestHandlerProtocol: () => afA,
  SMITHY_CONTEXT_KEY: () => $i9,
  getDefaultClientConfiguration: () => Ui9,
  resolveDefaultRuntimeConfig: () => Ni9,
});
sfA.exports = zi9(dfA);
var ufA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(ufA || {}),
  pfA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(pfA || {}),
  cfA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(cfA || {}),
  lfA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(lfA || {}),
  wi9 = S51((A) => {
    let B = [];
    if (A.sha256 !== void 0)
      B.push({ algorithmId: () => 'sha256', checksumConstructor: () => A.sha256 });
    if (A.md5 != null) B.push({ algorithmId: () => 'md5', checksumConstructor: () => A.md5 });
    return {
      addChecksumAlgorithm(Q) {
        B.push(Q);
      },
      checksumAlgorithms() {
        return B;
      },
    };
  }, 'getChecksumConfiguration'),
  Ei9 = S51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Ui9 = S51((A) => {
    return wi9(A);
  }, 'getDefaultClientConfiguration'),
  Ni9 = S51((A) => {
    return Ei9(A);
  }, 'resolveDefaultRuntimeConfig'),
  ifA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(ifA || {}),
  $i9 = '__smithy_context',
  nfA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(nfA || {}),
  afA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(afA || {});

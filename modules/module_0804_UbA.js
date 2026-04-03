// Module: UbA
// Params: jm5,EbA

var { defineProperty: m51, getOwnPropertyDescriptor: Ya9, getOwnPropertyNames: Wa9 } = Object,
  Fa9 = Object.prototype.hasOwnProperty,
  d51 = (A, B) => m51(A, 'name', { value: B, configurable: !0 }),
  Ja9 = (A, B) => {
    for (var Q in B) m51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ca9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Wa9(B))
        if (!Fa9.call(A, G) && G !== Q)
          m51(A, G, { get: () => B[G], enumerable: !(I = Ya9(B, G)) || I.enumerable });
    }
    return A;
  },
  Xa9 = (A) => Ca9(m51({}, '__esModule', { value: !0 }), A),
  JbA = {};
Ja9(JbA, {
  AlgorithmId: () => KbA,
  EndpointURLScheme: () => VbA,
  FieldPosition: () => HbA,
  HttpApiKeyAuthLocation: () => XbA,
  HttpAuthLocation: () => CbA,
  IniSectionType: () => zbA,
  RequestHandlerProtocol: () => wbA,
  SMITHY_CONTEXT_KEY: () => wa9,
  getDefaultClientConfiguration: () => Ha9,
  resolveDefaultRuntimeConfig: () => za9,
});
EbA.exports = Xa9(JbA);
var CbA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(CbA || {}),
  XbA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(XbA || {}),
  VbA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(VbA || {}),
  KbA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(KbA || {}),
  Va9 = d51((A) => {
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
  Ka9 = d51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Ha9 = d51((A) => {
    return Va9(A);
  }, 'getDefaultClientConfiguration'),
  za9 = d51((A) => {
    return Ka9(A);
  }, 'resolveDefaultRuntimeConfig'),
  HbA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(HbA || {}),
  wa9 = '__smithy_context',
  zbA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(zbA || {}),
  wbA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(wbA || {});

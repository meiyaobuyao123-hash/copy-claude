// Module: PT1
// Params: id5,nuA

var { defineProperty: h81, getOwnPropertyDescriptor: N24, getOwnPropertyNames: $24 } = Object,
  q24 = Object.prototype.hasOwnProperty,
  m81 = (A, B) => h81(A, 'name', { value: B, configurable: !0 }),
  M24 = (A, B) => {
    for (var Q in B) h81(A, Q, { get: B[Q], enumerable: !0 });
  },
  L24 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of $24(B))
        if (!q24.call(A, G) && G !== Q)
          h81(A, G, { get: () => B[G], enumerable: !(I = N24(B, G)) || I.enumerable });
    }
    return A;
  },
  R24 = (A) => L24(h81({}, '__esModule', { value: !0 }), A),
  huA = {};
M24(huA, {
  AlgorithmId: () => puA,
  EndpointURLScheme: () => uuA,
  FieldPosition: () => cuA,
  HttpApiKeyAuthLocation: () => duA,
  HttpAuthLocation: () => muA,
  IniSectionType: () => luA,
  RequestHandlerProtocol: () => iuA,
  SMITHY_CONTEXT_KEY: () => _24,
  getDefaultClientConfiguration: () => P24,
  resolveDefaultRuntimeConfig: () => S24,
});
nuA.exports = R24(huA);
var muA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(muA || {}),
  duA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(duA || {}),
  uuA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(uuA || {}),
  puA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(puA || {}),
  O24 = m81((A) => {
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
  T24 = m81((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  P24 = m81((A) => {
    return O24(A);
  }, 'getDefaultClientConfiguration'),
  S24 = m81((A) => {
    return T24(A);
  }, 'resolveDefaultRuntimeConfig'),
  cuA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(cuA || {}),
  _24 = '__smithy_context',
  luA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(luA || {}),
  iuA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(iuA || {});

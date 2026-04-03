// Module: Ib1
// Params: uF8,SN0

var { defineProperty: aD1, getOwnPropertyDescriptor: Wn4, getOwnPropertyNames: Fn4 } = Object,
  Jn4 = Object.prototype.hasOwnProperty,
  sD1 = (A, B) => aD1(A, 'name', { value: B, configurable: !0 }),
  Cn4 = (A, B) => {
    for (var Q in B) aD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Xn4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Fn4(B))
        if (!Jn4.call(A, G) && G !== Q)
          aD1(A, G, { get: () => B[G], enumerable: !(I = Wn4(B, G)) || I.enumerable });
    }
    return A;
  },
  Vn4 = (A) => Xn4(aD1({}, '__esModule', { value: !0 }), A),
  $N0 = {};
Cn4($N0, {
  AlgorithmId: () => RN0,
  EndpointURLScheme: () => LN0,
  FieldPosition: () => ON0,
  HttpApiKeyAuthLocation: () => MN0,
  HttpAuthLocation: () => qN0,
  IniSectionType: () => TN0,
  RequestHandlerProtocol: () => PN0,
  SMITHY_CONTEXT_KEY: () => En4,
  getDefaultClientConfiguration: () => zn4,
  resolveDefaultRuntimeConfig: () => wn4,
});
SN0.exports = Vn4($N0);
var qN0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(qN0 || {}),
  MN0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(MN0 || {}),
  LN0 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(LN0 || {}),
  RN0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(RN0 || {}),
  Kn4 = sD1((A) => {
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
  Hn4 = sD1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  zn4 = sD1((A) => {
    return Kn4(A);
  }, 'getDefaultClientConfiguration'),
  wn4 = sD1((A) => {
    return Hn4(A);
  }, 'resolveDefaultRuntimeConfig'),
  ON0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(ON0 || {}),
  En4 = '__smithy_context',
  TN0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(TN0 || {}),
  PN0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(PN0 || {});

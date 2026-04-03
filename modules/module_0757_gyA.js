// Module: gyA
// Params: Hh5,byA

var { defineProperty: A51, getOwnPropertyDescriptor: gd9, getOwnPropertyNames: hd9 } = Object,
  md9 = Object.prototype.hasOwnProperty,
  B51 = (A, B) => A51(A, 'name', { value: B, configurable: !0 }),
  dd9 = (A, B) => {
    for (var Q in B) A51(A, Q, { get: B[Q], enumerable: !0 });
  },
  ud9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of hd9(B))
        if (!md9.call(A, G) && G !== Q)
          A51(A, G, { get: () => B[G], enumerable: !(I = gd9(B, G)) || I.enumerable });
    }
    return A;
  },
  pd9 = (A) => ud9(A51({}, '__esModule', { value: !0 }), A),
  SyA = {};
dd9(SyA, {
  AlgorithmId: () => kyA,
  EndpointURLScheme: () => yyA,
  FieldPosition: () => xyA,
  HttpApiKeyAuthLocation: () => jyA,
  HttpAuthLocation: () => _yA,
  IniSectionType: () => fyA,
  RequestHandlerProtocol: () => vyA,
  SMITHY_CONTEXT_KEY: () => ad9,
  getDefaultClientConfiguration: () => id9,
  resolveDefaultRuntimeConfig: () => nd9,
});
byA.exports = pd9(SyA);
var _yA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(_yA || {}),
  jyA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(jyA || {}),
  yyA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(yyA || {}),
  kyA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(kyA || {}),
  cd9 = B51((A) => {
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
  ld9 = B51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  id9 = B51((A) => {
    return cd9(A);
  }, 'getDefaultClientConfiguration'),
  nd9 = B51((A) => {
    return ld9(A);
  }, 'resolveDefaultRuntimeConfig'),
  xyA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(xyA || {}),
  ad9 = '__smithy_context',
  fyA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(fyA || {}),
  vyA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(vyA || {});

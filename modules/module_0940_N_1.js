// Module: N_1
// Params: Mc5,GA0

var { defineProperty: W31, getOwnPropertyDescriptor: pJ4, getOwnPropertyNames: cJ4 } = Object,
  lJ4 = Object.prototype.hasOwnProperty,
  F31 = (A, B) => W31(A, 'name', { value: B, configurable: !0 }),
  iJ4 = (A, B) => {
    for (var Q in B) W31(A, Q, { get: B[Q], enumerable: !0 });
  },
  nJ4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of cJ4(B))
        if (!lJ4.call(A, G) && G !== Q)
          W31(A, G, { get: () => B[G], enumerable: !(I = pJ4(B, G)) || I.enumerable });
    }
    return A;
  },
  aJ4 = (A) => nJ4(W31({}, '__esModule', { value: !0 }), A),
  r10 = {};
iJ4(r10, {
  AlgorithmId: () => AA0,
  EndpointURLScheme: () => e10,
  FieldPosition: () => BA0,
  HttpApiKeyAuthLocation: () => t10,
  HttpAuthLocation: () => o10,
  IniSectionType: () => QA0,
  RequestHandlerProtocol: () => IA0,
  SMITHY_CONTEXT_KEY: () => eJ4,
  getDefaultClientConfiguration: () => oJ4,
  resolveDefaultRuntimeConfig: () => tJ4,
});
GA0.exports = aJ4(r10);
var o10 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(o10 || {}),
  t10 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(t10 || {}),
  e10 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(e10 || {}),
  AA0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(AA0 || {}),
  sJ4 = F31((A) => {
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
  rJ4 = F31((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  oJ4 = F31((A) => {
    return sJ4(A);
  }, 'getDefaultClientConfiguration'),
  tJ4 = F31((A) => {
    return rJ4(A);
  }, 'resolveDefaultRuntimeConfig'),
  BA0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(BA0 || {}),
  eJ4 = '__smithy_context',
  QA0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(QA0 || {}),
  IA0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(IA0 || {});

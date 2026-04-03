// Module: DuA
// Params: bd5,GuA

var { defineProperty: S81, getOwnPropertyDescriptor: cA4, getOwnPropertyNames: lA4 } = Object,
  iA4 = Object.prototype.hasOwnProperty,
  _81 = (A, B) => S81(A, 'name', { value: B, configurable: !0 }),
  nA4 = (A, B) => {
    for (var Q in B) S81(A, Q, { get: B[Q], enumerable: !0 });
  },
  aA4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of lA4(B))
        if (!iA4.call(A, G) && G !== Q)
          S81(A, G, { get: () => B[G], enumerable: !(I = cA4(B, G)) || I.enumerable });
    }
    return A;
  },
  sA4 = (A) => aA4(S81({}, '__esModule', { value: !0 }), A),
  rdA = {};
nA4(rdA, {
  AlgorithmId: () => AuA,
  EndpointURLScheme: () => edA,
  FieldPosition: () => BuA,
  HttpApiKeyAuthLocation: () => tdA,
  HttpAuthLocation: () => odA,
  IniSectionType: () => QuA,
  RequestHandlerProtocol: () => IuA,
  SMITHY_CONTEXT_KEY: () => A04,
  getDefaultClientConfiguration: () => tA4,
  resolveDefaultRuntimeConfig: () => eA4,
});
GuA.exports = sA4(rdA);
var odA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(odA || {}),
  tdA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(tdA || {}),
  edA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(edA || {}),
  AuA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(AuA || {}),
  rA4 = _81((A) => {
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
  oA4 = _81((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  tA4 = _81((A) => {
    return rA4(A);
  }, 'getDefaultClientConfiguration'),
  eA4 = _81((A) => {
    return oA4(A);
  }, 'resolveDefaultRuntimeConfig'),
  BuA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(BuA || {}),
  A04 = '__smithy_context',
  QuA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(QuA || {}),
  IuA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(IuA || {});

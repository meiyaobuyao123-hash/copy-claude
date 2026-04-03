// Module: FkA
// Params: qh5,WkA

var { defineProperty: Z51, getOwnPropertyDescriptor: qu9, getOwnPropertyNames: Mu9 } = Object,
  Lu9 = Object.prototype.hasOwnProperty,
  Y51 = (A, B) => Z51(A, 'name', { value: B, configurable: !0 }),
  Ru9 = (A, B) => {
    for (var Q in B) Z51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ou9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Mu9(B))
        if (!Lu9.call(A, G) && G !== Q)
          Z51(A, G, { get: () => B[G], enumerable: !(I = qu9(B, G)) || I.enumerable });
    }
    return A;
  },
  Tu9 = (A) => Ou9(Z51({}, '__esModule', { value: !0 }), A),
  AkA = {};
Ru9(AkA, {
  AlgorithmId: () => GkA,
  EndpointURLScheme: () => IkA,
  FieldPosition: () => DkA,
  HttpApiKeyAuthLocation: () => QkA,
  HttpAuthLocation: () => BkA,
  IniSectionType: () => ZkA,
  RequestHandlerProtocol: () => YkA,
  SMITHY_CONTEXT_KEY: () => yu9,
  getDefaultClientConfiguration: () => _u9,
  resolveDefaultRuntimeConfig: () => ju9,
});
WkA.exports = Tu9(AkA);
var BkA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(BkA || {}),
  QkA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(QkA || {}),
  IkA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(IkA || {}),
  GkA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(GkA || {}),
  Pu9 = Y51((A) => {
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
  Su9 = Y51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  _u9 = Y51((A) => {
    return Pu9(A);
  }, 'getDefaultClientConfiguration'),
  ju9 = Y51((A) => {
    return Su9(A);
  }, 'resolveDefaultRuntimeConfig'),
  DkA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(DkA || {}),
  yu9 = '__smithy_context',
  ZkA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(ZkA || {}),
  YkA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(YkA || {});

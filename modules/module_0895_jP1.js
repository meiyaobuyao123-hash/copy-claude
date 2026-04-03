// Module: jP1
// Params: Ip5,JaA

var { defineProperty: qB1, getOwnPropertyDescriptor: s34, getOwnPropertyNames: r34 } = Object,
  o34 = Object.prototype.hasOwnProperty,
  MB1 = (A, B) => qB1(A, 'name', { value: B, configurable: !0 }),
  t34 = (A, B) => {
    for (var Q in B) qB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  e34 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of r34(B))
        if (!o34.call(A, G) && G !== Q)
          qB1(A, G, { get: () => B[G], enumerable: !(I = s34(B, G)) || I.enumerable });
    }
    return A;
  },
  AQ4 = (A) => e34(qB1({}, '__esModule', { value: !0 }), A),
  QaA = {};
t34(QaA, {
  AlgorithmId: () => ZaA,
  EndpointURLScheme: () => DaA,
  FieldPosition: () => YaA,
  HttpApiKeyAuthLocation: () => GaA,
  HttpAuthLocation: () => IaA,
  IniSectionType: () => WaA,
  RequestHandlerProtocol: () => FaA,
  SMITHY_CONTEXT_KEY: () => DQ4,
  getDefaultClientConfiguration: () => IQ4,
  resolveDefaultRuntimeConfig: () => GQ4,
});
JaA.exports = AQ4(QaA);
var IaA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(IaA || {}),
  GaA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(GaA || {}),
  DaA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(DaA || {}),
  ZaA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(ZaA || {}),
  BQ4 = MB1((A) => {
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
  QQ4 = MB1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  IQ4 = MB1((A) => {
    return BQ4(A);
  }, 'getDefaultClientConfiguration'),
  GQ4 = MB1((A) => {
    return QQ4(A);
  }, 'resolveDefaultRuntimeConfig'),
  YaA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(YaA || {}),
  DQ4 = '__smithy_context',
  WaA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(WaA || {}),
  FaA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(FaA || {});

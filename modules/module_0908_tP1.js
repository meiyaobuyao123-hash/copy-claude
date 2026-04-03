// Module: tP1
// Params: _p5,HrA

var { defineProperty: gB1, getOwnPropertyDescriptor: EG4, getOwnPropertyNames: UG4 } = Object,
  NG4 = Object.prototype.hasOwnProperty,
  hB1 = (A, B) => gB1(A, 'name', { value: B, configurable: !0 }),
  $G4 = (A, B) => {
    for (var Q in B) gB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  qG4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of UG4(B))
        if (!NG4.call(A, G) && G !== Q)
          gB1(A, G, { get: () => B[G], enumerable: !(I = EG4(B, G)) || I.enumerable });
    }
    return A;
  },
  MG4 = (A) => qG4(gB1({}, '__esModule', { value: !0 }), A),
  YrA = {};
$G4(YrA, {
  AlgorithmId: () => CrA,
  EndpointURLScheme: () => JrA,
  FieldPosition: () => XrA,
  HttpApiKeyAuthLocation: () => FrA,
  HttpAuthLocation: () => WrA,
  IniSectionType: () => VrA,
  RequestHandlerProtocol: () => KrA,
  SMITHY_CONTEXT_KEY: () => PG4,
  getDefaultClientConfiguration: () => OG4,
  resolveDefaultRuntimeConfig: () => TG4,
});
HrA.exports = MG4(YrA);
var WrA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(WrA || {}),
  FrA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(FrA || {}),
  JrA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(JrA || {}),
  CrA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(CrA || {}),
  LG4 = hB1((A) => {
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
  RG4 = hB1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  OG4 = hB1((A) => {
    return LG4(A);
  }, 'getDefaultClientConfiguration'),
  TG4 = hB1((A) => {
    return RG4(A);
  }, 'resolveDefaultRuntimeConfig'),
  XrA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(XrA || {}),
  PG4 = '__smithy_context',
  VrA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(VrA || {}),
  KrA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(KrA || {});

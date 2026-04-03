// Module: XfA
// Params: eh5,CfA

var { defineProperty: M51, getOwnPropertyDescriptor: Zl9, getOwnPropertyNames: Yl9 } = Object,
  Wl9 = Object.prototype.hasOwnProperty,
  L51 = (A, B) => M51(A, 'name', { value: B, configurable: !0 }),
  Fl9 = (A, B) => {
    for (var Q in B) M51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Jl9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Yl9(B))
        if (!Wl9.call(A, G) && G !== Q)
          M51(A, G, { get: () => B[G], enumerable: !(I = Zl9(B, G)) || I.enumerable });
    }
    return A;
  },
  Cl9 = (A) => Jl9(M51({}, '__esModule', { value: !0 }), A),
  IfA = {};
Fl9(IfA, {
  AlgorithmId: () => YfA,
  EndpointURLScheme: () => ZfA,
  FieldPosition: () => WfA,
  HttpApiKeyAuthLocation: () => DfA,
  HttpAuthLocation: () => GfA,
  IniSectionType: () => FfA,
  RequestHandlerProtocol: () => JfA,
  SMITHY_CONTEXT_KEY: () => zl9,
  getDefaultClientConfiguration: () => Kl9,
  resolveDefaultRuntimeConfig: () => Hl9,
});
CfA.exports = Cl9(IfA);
var GfA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(GfA || {}),
  DfA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(DfA || {}),
  ZfA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(ZfA || {}),
  YfA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(YfA || {}),
  Xl9 = L51((A) => {
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
  Vl9 = L51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Kl9 = L51((A) => {
    return Xl9(A);
  }, 'getDefaultClientConfiguration'),
  Hl9 = L51((A) => {
    return Vl9(A);
  }, 'resolveDefaultRuntimeConfig'),
  WfA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(WfA || {}),
  zl9 = '__smithy_context',
  FfA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(FfA || {}),
  JfA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(JfA || {});

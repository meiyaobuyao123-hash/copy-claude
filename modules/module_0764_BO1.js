// Module: BO1
// Params: Ph5,PkA

var { defineProperty: C51, getOwnPropertyDescriptor: Bp9, getOwnPropertyNames: Qp9 } = Object,
  Ip9 = Object.prototype.hasOwnProperty,
  X51 = (A, B) => C51(A, 'name', { value: B, configurable: !0 }),
  Gp9 = (A, B) => {
    for (var Q in B) C51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Dp9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Qp9(B))
        if (!Ip9.call(A, G) && G !== Q)
          C51(A, G, { get: () => B[G], enumerable: !(I = Bp9(B, G)) || I.enumerable });
    }
    return A;
  },
  Zp9 = (A) => Dp9(C51({}, '__esModule', { value: !0 }), A),
  NkA = {};
Gp9(NkA, {
  AlgorithmId: () => LkA,
  EndpointURLScheme: () => MkA,
  FieldPosition: () => RkA,
  HttpApiKeyAuthLocation: () => qkA,
  HttpAuthLocation: () => $kA,
  IniSectionType: () => OkA,
  RequestHandlerProtocol: () => TkA,
  SMITHY_CONTEXT_KEY: () => Cp9,
  getDefaultClientConfiguration: () => Fp9,
  resolveDefaultRuntimeConfig: () => Jp9,
});
PkA.exports = Zp9(NkA);
var $kA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })($kA || {}),
  qkA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(qkA || {}),
  MkA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(MkA || {}),
  LkA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(LkA || {}),
  Yp9 = X51((A) => {
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
  Wp9 = X51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Fp9 = X51((A) => {
    return Yp9(A);
  }, 'getDefaultClientConfiguration'),
  Jp9 = X51((A) => {
    return Wp9(A);
  }, 'resolveDefaultRuntimeConfig'),
  RkA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(RkA || {}),
  Cp9 = '__smithy_context',
  OkA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(OkA || {}),
  TkA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(TkA || {});

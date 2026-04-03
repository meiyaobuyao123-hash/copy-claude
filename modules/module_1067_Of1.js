// Module: Of1
// Params: sZ8,AJ0

var { defineProperty: SG1, getOwnPropertyDescriptor: Xx4, getOwnPropertyNames: Vx4 } = Object,
  Kx4 = Object.prototype.hasOwnProperty,
  _G1 = (A, B) => SG1(A, 'name', { value: B, configurable: !0 }),
  Hx4 = (A, B) => {
    for (var Q in B) SG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  zx4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Vx4(B))
        if (!Kx4.call(A, G) && G !== Q)
          SG1(A, G, { get: () => B[G], enumerable: !(I = Xx4(B, G)) || I.enumerable });
    }
    return A;
  },
  wx4 = (A) => zx4(SG1({}, '__esModule', { value: !0 }), A),
  iF0 = {};
Hx4(iF0, {
  AlgorithmId: () => rF0,
  EndpointURLScheme: () => sF0,
  FieldPosition: () => oF0,
  HttpApiKeyAuthLocation: () => aF0,
  HttpAuthLocation: () => nF0,
  IniSectionType: () => tF0,
  RequestHandlerProtocol: () => eF0,
  SMITHY_CONTEXT_KEY: () => qx4,
  getDefaultClientConfiguration: () => Nx4,
  resolveDefaultRuntimeConfig: () => $x4,
});
AJ0.exports = wx4(iF0);
var nF0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(nF0 || {}),
  aF0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(aF0 || {}),
  sF0 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(sF0 || {}),
  rF0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(rF0 || {}),
  Ex4 = _G1((A) => {
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
  Ux4 = _G1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Nx4 = _G1((A) => {
    return Ex4(A);
  }, 'getDefaultClientConfiguration'),
  $x4 = _G1((A) => {
    return Ux4(A);
  }, 'resolveDefaultRuntimeConfig'),
  oF0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(oF0 || {}),
  qx4 = '__smithy_context',
  tF0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(tF0 || {}),
  eF0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(eF0 || {});

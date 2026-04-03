// Module: cY0
// Params: vZ8,pY0

var { defineProperty: FG1, getOwnPropertyDescriptor: wy4, getOwnPropertyNames: Ey4 } = Object,
  Uy4 = Object.prototype.hasOwnProperty,
  JG1 = (A, B) => FG1(A, 'name', { value: B, configurable: !0 }),
  Ny4 = (A, B) => {
    for (var Q in B) FG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  $y4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ey4(B))
        if (!Uy4.call(A, G) && G !== Q)
          FG1(A, G, { get: () => B[G], enumerable: !(I = wy4(B, G)) || I.enumerable });
    }
    return A;
  },
  qy4 = (A) => $y4(FG1({}, '__esModule', { value: !0 }), A),
  fY0 = {};
Ny4(fY0, {
  AlgorithmId: () => hY0,
  EndpointURLScheme: () => gY0,
  FieldPosition: () => mY0,
  HttpApiKeyAuthLocation: () => bY0,
  HttpAuthLocation: () => vY0,
  IniSectionType: () => dY0,
  RequestHandlerProtocol: () => uY0,
  SMITHY_CONTEXT_KEY: () => Ty4,
  getDefaultClientConfiguration: () => Ry4,
  resolveDefaultRuntimeConfig: () => Oy4,
});
pY0.exports = qy4(fY0);
var vY0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(vY0 || {}),
  bY0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(bY0 || {}),
  gY0 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(gY0 || {}),
  hY0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(hY0 || {}),
  My4 = JG1((A) => {
    let B = [];
    if (A.sha256 !== void 0)
      B.push({ algorithmId: () => 'sha256', checksumConstructor: () => A.sha256 });
    if (A.md5 != null) B.push({ algorithmId: () => 'md5', checksumConstructor: () => A.md5 });
    return {
      _checksumAlgorithms: B,
      addChecksumAlgorithm(Q) {
        this._checksumAlgorithms.push(Q);
      },
      checksumAlgorithms() {
        return this._checksumAlgorithms;
      },
    };
  }, 'getChecksumConfiguration'),
  Ly4 = JG1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Ry4 = JG1((A) => {
    return { ...My4(A) };
  }, 'getDefaultClientConfiguration'),
  Oy4 = JG1((A) => {
    return { ...Ly4(A) };
  }, 'resolveDefaultRuntimeConfig'),
  mY0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(mY0 || {}),
  Ty4 = '__smithy_context',
  dY0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(dY0 || {}),
  uY0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(uY0 || {});

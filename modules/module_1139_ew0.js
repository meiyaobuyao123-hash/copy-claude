// Module: ew0
// Params: GF8,tw0

var { defineProperty: OD1, getOwnPropertyDescriptor: Sc4, getOwnPropertyNames: _c4 } = Object,
  jc4 = Object.prototype.hasOwnProperty,
  TD1 = (A, B) => OD1(A, 'name', { value: B, configurable: !0 }),
  yc4 = (A, B) => {
    for (var Q in B) OD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  kc4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of _c4(B))
        if (!jc4.call(A, G) && G !== Q)
          OD1(A, G, { get: () => B[G], enumerable: !(I = Sc4(B, G)) || I.enumerable });
    }
    return A;
  },
  xc4 = (A) => kc4(OD1({}, '__esModule', { value: !0 }), A),
  cw0 = {};
yc4(cw0, {
  AlgorithmId: () => aw0,
  EndpointURLScheme: () => nw0,
  FieldPosition: () => sw0,
  HttpApiKeyAuthLocation: () => iw0,
  HttpAuthLocation: () => lw0,
  IniSectionType: () => rw0,
  RequestHandlerProtocol: () => ow0,
  SMITHY_CONTEXT_KEY: () => hc4,
  getDefaultClientConfiguration: () => bc4,
  resolveDefaultRuntimeConfig: () => gc4,
});
tw0.exports = xc4(cw0);
var lw0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(lw0 || {}),
  iw0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(iw0 || {}),
  nw0 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(nw0 || {}),
  aw0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(aw0 || {}),
  fc4 = TD1((A) => {
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
  vc4 = TD1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  bc4 = TD1((A) => {
    return fc4(A);
  }, 'getDefaultClientConfiguration'),
  gc4 = TD1((A) => {
    return vc4(A);
  }, 'resolveDefaultRuntimeConfig'),
  sw0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(sw0 || {}),
  hc4 = '__smithy_context',
  rw0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(rw0 || {}),
  ow0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(ow0 || {});

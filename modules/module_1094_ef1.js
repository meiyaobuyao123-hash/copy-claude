// Module: ef1
// Params: GW8,HV0

var { defineProperty: cG1, getOwnPropertyDescriptor: ig4, getOwnPropertyNames: ng4 } = Object,
  ag4 = Object.prototype.hasOwnProperty,
  lG1 = (A, B) => cG1(A, 'name', { value: B, configurable: !0 }),
  sg4 = (A, B) => {
    for (var Q in B) cG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  rg4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ng4(B))
        if (!ag4.call(A, G) && G !== Q)
          cG1(A, G, { get: () => B[G], enumerable: !(I = ig4(B, G)) || I.enumerable });
    }
    return A;
  },
  og4 = (A) => rg4(cG1({}, '__esModule', { value: !0 }), A),
  YV0 = {};
sg4(YV0, {
  AlgorithmId: () => CV0,
  EndpointURLScheme: () => JV0,
  FieldPosition: () => XV0,
  HttpApiKeyAuthLocation: () => FV0,
  HttpAuthLocation: () => WV0,
  IniSectionType: () => VV0,
  RequestHandlerProtocol: () => KV0,
  SMITHY_CONTEXT_KEY: () => Qh4,
  getDefaultClientConfiguration: () => Ah4,
  resolveDefaultRuntimeConfig: () => Bh4,
});
HV0.exports = og4(YV0);
var WV0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(WV0 || {}),
  FV0 = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(FV0 || {}),
  JV0 = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(JV0 || {}),
  CV0 = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(CV0 || {}),
  tg4 = lG1((A) => {
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
  eg4 = lG1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Ah4 = lG1((A) => {
    return { ...tg4(A) };
  }, 'getDefaultClientConfiguration'),
  Bh4 = lG1((A) => {
    return { ...eg4(A) };
  }, 'resolveDefaultRuntimeConfig'),
  XV0 = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(XV0 || {}),
  Qh4 = '__smithy_context',
  VV0 = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(VV0 || {}),
  KV0 = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(KV0 || {});

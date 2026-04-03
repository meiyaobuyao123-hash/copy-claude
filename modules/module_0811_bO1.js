// Module: bO1
// Params: pm5,ugA

var { defineProperty: t51, getOwnPropertyDescriptor: _s9, getOwnPropertyNames: js9 } = Object,
  ys9 = Object.prototype.hasOwnProperty,
  e51 = (A, B) => t51(A, 'name', { value: B, configurable: !0 }),
  ks9 = (A, B) => {
    for (var Q in B) t51(A, Q, { get: B[Q], enumerable: !0 });
  },
  xs9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of js9(B))
        if (!ys9.call(A, G) && G !== Q)
          t51(A, G, { get: () => B[G], enumerable: !(I = _s9(B, G)) || I.enumerable });
    }
    return A;
  },
  fs9 = (A) => xs9(t51({}, '__esModule', { value: !0 }), A),
  xgA = {};
ks9(xgA, {
  AlgorithmId: () => ggA,
  EndpointURLScheme: () => bgA,
  FieldPosition: () => hgA,
  HttpApiKeyAuthLocation: () => vgA,
  HttpAuthLocation: () => fgA,
  IniSectionType: () => mgA,
  RequestHandlerProtocol: () => dgA,
  SMITHY_CONTEXT_KEY: () => ms9,
  getDefaultClientConfiguration: () => gs9,
  resolveDefaultRuntimeConfig: () => hs9,
});
ugA.exports = fs9(xgA);
var fgA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(fgA || {}),
  vgA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(vgA || {}),
  bgA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(bgA || {}),
  ggA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(ggA || {}),
  vs9 = e51((A) => {
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
  bs9 = e51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  gs9 = e51((A) => {
    return vs9(A);
  }, 'getDefaultClientConfiguration'),
  hs9 = e51((A) => {
    return bs9(A);
  }, 'resolveDefaultRuntimeConfig'),
  hgA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(hgA || {}),
  ms9 = '__smithy_context',
  mgA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(mgA || {}),
  dgA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(dgA || {});

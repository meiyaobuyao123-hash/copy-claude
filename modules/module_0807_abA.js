// Module: abA
// Params: vm5,nbA

var { defineProperty: l51, getOwnPropertyDescriptor: As9, getOwnPropertyNames: Bs9 } = Object,
  Qs9 = Object.prototype.hasOwnProperty,
  i51 = (A, B) => l51(A, 'name', { value: B, configurable: !0 }),
  Is9 = (A, B) => {
    for (var Q in B) l51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Gs9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Bs9(B))
        if (!Qs9.call(A, G) && G !== Q)
          l51(A, G, { get: () => B[G], enumerable: !(I = As9(B, G)) || I.enumerable });
    }
    return A;
  },
  Ds9 = (A) => Gs9(l51({}, '__esModule', { value: !0 }), A),
  hbA = {};
Is9(hbA, {
  AlgorithmId: () => pbA,
  EndpointURLScheme: () => ubA,
  FieldPosition: () => cbA,
  HttpApiKeyAuthLocation: () => dbA,
  HttpAuthLocation: () => mbA,
  IniSectionType: () => lbA,
  RequestHandlerProtocol: () => ibA,
  SMITHY_CONTEXT_KEY: () => Js9,
  getDefaultClientConfiguration: () => Ws9,
  resolveDefaultRuntimeConfig: () => Fs9,
});
nbA.exports = Ds9(hbA);
var mbA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(mbA || {}),
  dbA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(dbA || {}),
  ubA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(ubA || {}),
  pbA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(pbA || {}),
  Zs9 = i51((A) => {
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
  Ys9 = i51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Ws9 = i51((A) => {
    return Zs9(A);
  }, 'getDefaultClientConfiguration'),
  Fs9 = i51((A) => {
    return Ys9(A);
  }, 'resolveDefaultRuntimeConfig'),
  cbA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(cbA || {}),
  Js9 = '__smithy_context',
  lbA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(lbA || {}),
  ibA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(ibA || {});

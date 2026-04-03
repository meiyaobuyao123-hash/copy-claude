// Module: RP
// Params: zp5,KsA

var {
    create: h74,
    defineProperty: nl,
    getOwnPropertyDescriptor: m74,
    getOwnPropertyNames: d74,
    getPrototypeOf: u74,
  } = Object,
  p74 = Object.prototype.hasOwnProperty,
  sP1 = (A, B) => nl(A, 'name', { value: B, configurable: !0 }),
  c74 = (A, B) => {
    for (var Q in B) nl(A, Q, { get: B[Q], enumerable: !0 });
  },
  XsA = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of d74(B))
        if (!p74.call(A, G) && G !== Q)
          nl(A, G, { get: () => B[G], enumerable: !(I = m74(B, G)) || I.enumerable });
    }
    return A;
  },
  l74 = (A, B, Q) => (
    (Q = A != null ? h74(u74(A)) : {}),
    XsA(B || !A || !A.__esModule ? nl(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  i74 = (A) => XsA(nl({}, '__esModule', { value: !0 }), A),
  VsA = {};
c74(VsA, { resolveDefaultsModeConfig: () => QI4 });
KsA.exports = i74(VsA);
var n74 = QZ(),
  FsA = hX(),
  a74 = t7(),
  s74 = 'AWS_EXECUTION_ENV',
  JsA = 'AWS_REGION',
  CsA = 'AWS_DEFAULT_REGION',
  r74 = 'AWS_EC2_METADATA_DISABLED',
  o74 = ['in-region', 'cross-region', 'mobile', 'standard', 'legacy'],
  t74 = '/latest/meta-data/placement/region',
  e74 = 'AWS_DEFAULTS_MODE',
  AI4 = 'defaults_mode',
  BI4 = {
    environmentVariableSelector: (A) => {
      return A[e74];
    },
    configFileSelector: (A) => {
      return A[AI4];
    },
    default: 'legacy',
  },
  QI4 = sP1(
    ({
      region: A = FsA.loadConfig(n74.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode: B = FsA.loadConfig(BI4),
    } = {}) =>
      a74.memoize(async () => {
        let Q = typeof B === 'function' ? await B() : B;
        switch (Q?.toLowerCase()) {
          case 'auto':
            return II4(A);
          case 'in-region':
          case 'cross-region':
          case 'mobile':
          case 'standard':
          case 'legacy':
            return Promise.resolve(Q?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve('legacy');
          default:
            throw new Error(
              `Invalid parameter for "defaultsMode", expect ${o74.join(', ')}, got ${Q}`
            );
        }
      }),
    'resolveDefaultsModeConfig'
  ),
  II4 = sP1(async (A) => {
    if (A) {
      let B = typeof A === 'function' ? await A() : A,
        Q = await GI4();
      if (!Q) return 'standard';
      if (B === Q) return 'in-region';
      else return 'cross-region';
    }
    return 'standard';
  }, 'resolveNodeDefaultsModeAuto'),
  GI4 = sP1(async () => {
    if (process.env[s74] && (process.env[JsA] || process.env[CsA]))
      return process.env[JsA] ?? process.env[CsA];
    if (!process.env[r74])
      try {
        let { getInstanceMetadataEndpoint: A, httpRequest: B } = await Promise.resolve().then(() =>
            l74(UP())
          ),
          Q = await A();
        return (await B({ ...Q, path: t74 })).toString();
      } catch (A) {}
  }, 'inferPhysicalRegion');

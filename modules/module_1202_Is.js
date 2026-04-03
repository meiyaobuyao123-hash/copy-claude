// Module: Is
// Params: a9

var $A6 =
    (a9 && a9.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  qA6 =
    (a9 && a9.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) $A6(B, A, Q);
    };
Object.defineProperty(a9, '__esModule', { value: !0 });
a9.gcpResidencyCache =
  a9.METADATA_SERVER_DETECTION =
  a9.HEADERS =
  a9.HEADER_VALUE =
  a9.HEADER_NAME =
  a9.SECONDARY_HOST_ADDRESS =
  a9.HOST_ADDRESS =
  a9.BASE_PATH =
    void 0;
a9.instance = PA6;
a9.project = SA6;
a9.universe = _A6;
a9.bulk = jA6;
a9.isAvailable = kA6;
a9.resetIsAvailableCache = xA6;
a9.getGCPResidency = Eg1;
a9.setGCPResidency = bR0;
a9.requestTimeout = gR0;
var zg1 = EV(),
  MA6 = ER0(),
  LA6 = Xg1(),
  RA6 = fR0();
a9.BASE_PATH = '/computeMetadata/v1';
a9.HOST_ADDRESS = 'http://169.254.169.254';
a9.SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';
a9.HEADER_NAME = 'Metadata-Flavor';
a9.HEADER_VALUE = 'Google';
a9.HEADERS = Object.freeze({ [a9.HEADER_NAME]: a9.HEADER_VALUE });
var vR0 = RA6.log('gcp metadata');
a9.METADATA_SERVER_DETECTION = Object.freeze({
  'assume-present': "don't try to ping the metadata server, but assume it's present",
  none: "don't try to ping the metadata server, but don't try to use it either",
  'bios-only': "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
  'ping-only': 'skip the BIOS probe, and go straight to pinging',
});
function wg1(A) {
  if (!A) A = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || a9.HOST_ADDRESS;
  if (!/^https?:\/\//.test(A)) A = `http://${A}`;
  return new URL(a9.BASE_PATH, A).href;
}
function OA6(A) {
  Object.keys(A).forEach((B) => {
    switch (B) {
      case 'params':
      case 'property':
      case 'headers':
        break;
      case 'qs':
        throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
      default:
        throw new Error(`'${B}' is not a valid configuration option.`);
    }
  });
}
async function Qs(A, B = {}, Q = 3, I = !1) {
  let G = '',
    D = {},
    Z = {};
  if (typeof A === 'object') {
    let J = A;
    ((G = J.metadataKey),
      (D = J.params || D),
      (Z = J.headers || Z),
      (Q = J.noResponseRetries || Q),
      (I = J.fastFail || I));
  } else G = A;
  if (typeof B === 'string') G += `/${B}`;
  else {
    if ((OA6(B), B.property)) G += `/${B.property}`;
    ((Z = B.headers || Z), (D = B.params || D));
  }
  let Y = I ? TA6 : zg1.request,
    W = {
      url: `${wg1()}/${G}`,
      headers: { ...a9.HEADERS, ...Z },
      retryConfig: { noResponseRetries: Q },
      params: D,
      responseType: 'text',
      timeout: gR0(),
    };
  vR0.info('instance request %j', W);
  let F = await Y(W);
  if (
    (vR0.info('instance metadata is %s', F.data),
    F.headers[a9.HEADER_NAME.toLowerCase()] !== a9.HEADER_VALUE)
  )
    throw new Error(
      `Invalid response from metadata service: incorrect ${a9.HEADER_NAME} header. Expected '${a9.HEADER_VALUE}', got ${F.headers[a9.HEADER_NAME.toLowerCase()] ? `'${F.headers[a9.HEADER_NAME.toLowerCase()]}'` : 'no header'}`
    );
  if (typeof F.data === 'string')
    try {
      return MA6.parse(F.data);
    } catch (J) {}
  return F.data;
}
async function TA6(A) {
  var B;
  let Q = {
      ...A,
      url:
        (B = A.url) === null || B === void 0
          ? void 0
          : B.toString().replace(wg1(), wg1(a9.SECONDARY_HOST_ADDRESS)),
    },
    I = !1,
    G = zg1
      .request(A)
      .then((Z) => {
        return ((I = !0), Z);
      })
      .catch((Z) => {
        if (I) return D;
        else throw ((I = !0), Z);
      }),
    D = zg1
      .request(Q)
      .then((Z) => {
        return ((I = !0), Z);
      })
      .catch((Z) => {
        if (I) return G;
        else throw ((I = !0), Z);
      });
  return Promise.race([G, D]);
}
function PA6(A) {
  return Qs('instance', A);
}
function SA6(A) {
  return Qs('project', A);
}
function _A6(A) {
  return Qs('universe', A);
}
async function jA6(A) {
  let B = {};
  return (
    await Promise.all(
      A.map((Q) => {
        return (async () => {
          let I = await Qs(Q),
            G = Q.metadataKey;
          B[G] = I;
        })();
      })
    ),
    B
  );
}
function yA6() {
  return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
}
var pZ1;
async function kA6() {
  if (process.env.METADATA_SERVER_DETECTION) {
    let A = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
    if (!(A in a9.METADATA_SERVER_DETECTION))
      throw new RangeError(
        `Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${A}\`, but it should be \`${Object.keys(a9.METADATA_SERVER_DETECTION).join('`, `')}\`, or unset`
      );
    switch (A) {
      case 'assume-present':
        return !0;
      case 'none':
        return !1;
      case 'bios-only':
        return Eg1();
      case 'ping-only':
    }
  }
  try {
    if (pZ1 === void 0)
      pZ1 = Qs(
        'instance',
        void 0,
        yA6(),
        !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST)
      );
    return (await pZ1, !0);
  } catch (A) {
    let B = A;
    if (process.env.DEBUG_AUTH) console.info(B);
    if (B.type === 'request-timeout') return !1;
    if (B.response && B.response.status === 404) return !1;
    else {
      if (
        !(B.response && B.response.status === 404) &&
        (!B.code ||
          ![
            'EHOSTDOWN',
            'EHOSTUNREACH',
            'ENETUNREACH',
            'ENOENT',
            'ENOTFOUND',
            'ECONNREFUSED',
          ].includes(B.code))
      ) {
        let Q = 'UNKNOWN';
        if (B.code) Q = B.code;
        process.emitWarning(
          `received unexpected error = ${B.message} code = ${Q}`,
          'MetadataLookupWarning'
        );
      }
      return !1;
    }
  }
}
function xA6() {
  pZ1 = void 0;
}
a9.gcpResidencyCache = null;
function Eg1() {
  if (a9.gcpResidencyCache === null) bR0();
  return a9.gcpResidencyCache;
}
function bR0(A = null) {
  a9.gcpResidencyCache = A !== null ? A : LA6.detectGCPResidency();
}
function gR0() {
  return Eg1() ? 0 : 3000;
}
qA6(Xg1(), a9);

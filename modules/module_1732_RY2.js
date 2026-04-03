// Module: RY2
// Params: MY2

Object.defineProperty(MY2, '__esModule', { value: !0 });
MY2.getOtlpGrpcDefaultConfiguration =
  MY2.mergeOtlpGrpcConfigurationWithDefaults =
  MY2.validateAndNormalizeUrl =
    void 0;
var $Y2 = PJ1(),
  Jt = Ft(),
  Po6 = EY2(),
  So6 = D1('url'),
  UY2 = C4();
function qY2(A) {
  if (((A = A.trim()), !A.match(/^([\w]{1,8}):\/\//))) A = `https://${A}`;
  let Q = new So6.URL(A);
  if (Q.protocol === 'unix:') return A;
  if (Q.pathname && Q.pathname !== '/')
    UY2.diag.warn(
      'URL path should not be set when using grpc, the path part of the URL will be ignored.'
    );
  if (Q.protocol !== '' && !Q.protocol?.match(/^(http)s?:$/))
    UY2.diag.warn('URL protocol should be http(s)://. Using http://.');
  return Q.host;
}
MY2.validateAndNormalizeUrl = qY2;
function NY2(A, B) {
  for (let [Q, I] of Object.entries(B.getMap())) if (A.get(Q).length < 1) A.set(Q, I);
}
function _o6(A, B, Q) {
  let I = A.url ?? B.url ?? Q.url;
  return {
    ...$Y2.mergeOtlpSharedConfigurationWithDefaults(A, B, Q),
    metadata: () => {
      let G = Q.metadata();
      return (
        NY2(G, A.metadata?.().clone() ?? Jt.createEmptyMetadata()),
        NY2(G, B.metadata?.() ?? Jt.createEmptyMetadata()),
        G
      );
    },
    url: qY2(I),
    credentials: A.credentials ?? B.credentials?.(I) ?? Q.credentials(I),
  };
}
MY2.mergeOtlpGrpcConfigurationWithDefaults = _o6;
function jo6() {
  return {
    ...$Y2.getSharedConfigurationDefaults(),
    metadata: () => {
      let A = Jt.createEmptyMetadata();
      return (A.set('User-Agent', `OTel-OTLP-Exporter-JavaScript/${Po6.VERSION}`), A);
    },
    url: 'http://localhost:4317',
    credentials: (A) => {
      if (A.startsWith('http://')) return () => Jt.createInsecureCredentials();
      else return () => Jt.createSslCredentials();
    },
  };
}
MY2.getOtlpGrpcDefaultConfiguration = jo6;

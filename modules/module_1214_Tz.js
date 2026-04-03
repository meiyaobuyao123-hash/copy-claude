// Module: Tz
// Params: HO0

Object.defineProperty(HO0, '__esModule', { value: !0 });
HO0.AuthClient = HO0.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = HO0.DEFAULT_UNIVERSE = void 0;
var w06 = D1('events'),
  XO0 = EV(),
  VO0 = Ds(),
  E06 = NL();
HO0.DEFAULT_UNIVERSE = 'googleapis.com';
HO0.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;
class KO0 extends w06.EventEmitter {
  constructor(A = {}) {
    var B, Q, I, G, D;
    super();
    ((this.credentials = {}),
      (this.eagerRefreshThresholdMillis = HO0.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS),
      (this.forceRefreshOnFailure = !1),
      (this.universeDomain = HO0.DEFAULT_UNIVERSE));
    let Z = E06.originalOrCamelOptions(A);
    if (
      ((this.apiKey = A.apiKey),
      (this.projectId = (B = Z.get('project_id')) !== null && B !== void 0 ? B : null),
      (this.quotaProjectId = Z.get('quota_project_id')),
      (this.credentials = (Q = Z.get('credentials')) !== null && Q !== void 0 ? Q : {}),
      (this.universeDomain =
        (I = Z.get('universe_domain')) !== null && I !== void 0 ? I : HO0.DEFAULT_UNIVERSE),
      (this.transporter =
        (G = A.transporter) !== null && G !== void 0 ? G : new VO0.DefaultTransporter()),
      A.transporterOptions)
    )
      this.transporter.defaults = A.transporterOptions;
    if (A.eagerRefreshThresholdMillis)
      this.eagerRefreshThresholdMillis = A.eagerRefreshThresholdMillis;
    this.forceRefreshOnFailure = (D = A.forceRefreshOnFailure) !== null && D !== void 0 ? D : !1;
  }
  get gaxios() {
    if (this.transporter instanceof XO0.Gaxios) return this.transporter;
    else if (this.transporter instanceof VO0.DefaultTransporter) return this.transporter.instance;
    else if ('instance' in this.transporter && this.transporter.instance instanceof XO0.Gaxios)
      return this.transporter.instance;
    return null;
  }
  setCredentials(A) {
    this.credentials = A;
  }
  addSharedMetadataHeaders(A) {
    if (!A['x-goog-user-project'] && this.quotaProjectId)
      A['x-goog-user-project'] = this.quotaProjectId;
    return A;
  }
  static get RETRY_CONFIG() {
    return {
      retry: !0,
      retryConfig: { httpMethodsToRetry: ['GET', 'PUT', 'POST', 'HEAD', 'OPTIONS', 'DELETE'] },
    };
  }
}
HO0.AuthClient = KO0;

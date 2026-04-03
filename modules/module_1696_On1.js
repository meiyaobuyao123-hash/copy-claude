// Module: On1
// Params: UG2

Object.defineProperty(UG2, '__esModule', { value: !0 });
UG2.DEFAULT_PORT = void 0;
UG2.setup = An6;
var HG2 = Iw(),
  Mn1 = D1('dns'),
  ai6 = wi1(),
  Ln1 = O6(),
  Rn1 = XD(),
  si6 = r8(),
  ri6 = O6(),
  OR = xY(),
  zG2 = D1('net'),
  oi6 = So(),
  wG2 = KG2(),
  ti6 = 'dns_resolver';
function Vw(A) {
  si6.trace(ri6.LogVerbosity.DEBUG, ti6, A);
}
UG2.DEFAULT_PORT = 443;
var ei6 = 30000;
class EG2 {
  constructor(A, B, Q) {
    var I, G, D;
    if (
      ((this.target = A),
      (this.listener = B),
      (this.pendingLookupPromise = null),
      (this.pendingTxtPromise = null),
      (this.latestLookupResult = null),
      (this.latestServiceConfig = null),
      (this.latestServiceConfigError = null),
      (this.continueResolving = !1),
      (this.isNextResolutionTimerRunning = !1),
      (this.isServiceConfigEnabled = !0),
      (this.returnedIpResult = !1),
      (this.alternativeResolver = new Mn1.promises.Resolver()),
      Vw('Resolver constructed for target ' + OR.uriToString(A)),
      A.authority)
    )
      this.alternativeResolver.setServers([A.authority]);
    let Z = OR.splitHostPort(A.path);
    if (Z === null) ((this.ipResult = null), (this.dnsHostname = null), (this.port = null));
    else if (zG2.isIPv4(Z.host) || zG2.isIPv6(Z.host))
      ((this.ipResult = [
        {
          addresses: [
            { host: Z.host, port: (I = Z.port) !== null && I !== void 0 ? I : UG2.DEFAULT_PORT },
          ],
        },
      ]),
        (this.dnsHostname = null),
        (this.port = null));
    else
      ((this.ipResult = null),
        (this.dnsHostname = Z.host),
        (this.port = (G = Z.port) !== null && G !== void 0 ? G : UG2.DEFAULT_PORT));
    if (
      ((this.percentage = Math.random() * 100), Q['grpc.service_config_disable_resolution'] === 1)
    )
      this.isServiceConfigEnabled = !1;
    this.defaultResolutionError = {
      code: Ln1.Status.UNAVAILABLE,
      details: `Name resolution failed for target ${OR.uriToString(this.target)}`,
      metadata: new Rn1.Metadata(),
    };
    let Y = {
      initialDelay: Q['grpc.initial_reconnect_backoff_ms'],
      maxDelay: Q['grpc.max_reconnect_backoff_ms'],
    };
    ((this.backoff = new oi6.BackoffTimeout(() => {
      if (this.continueResolving) this.startResolutionWithBackoff();
    }, Y)),
      this.backoff.unref(),
      (this.minTimeBetweenResolutionsMs =
        (D = Q['grpc.dns_min_time_between_resolutions_ms']) !== null && D !== void 0 ? D : ei6),
      (this.nextResolutionTimer = setTimeout(() => {}, 0)),
      clearTimeout(this.nextResolutionTimer));
  }
  startResolution() {
    if (this.ipResult !== null) {
      if (!this.returnedIpResult)
        (Vw('Returning IP address for target ' + OR.uriToString(this.target)),
          setImmediate(() => {
            this.listener.onSuccessfulResolution(this.ipResult, null, null, null, {});
          }),
          (this.returnedIpResult = !0));
      (this.backoff.stop(), this.backoff.reset(), this.stopNextResolutionTimer());
      return;
    }
    if (this.dnsHostname === null)
      (Vw('Failed to parse DNS address ' + OR.uriToString(this.target)),
        setImmediate(() => {
          this.listener.onError({
            code: Ln1.Status.UNAVAILABLE,
            details: `Failed to parse DNS address ${OR.uriToString(this.target)}`,
            metadata: new Rn1.Metadata(),
          });
        }),
        this.stopNextResolutionTimer());
    else {
      if (this.pendingLookupPromise !== null) return;
      (Vw('Looking up DNS hostname ' + this.dnsHostname), (this.latestLookupResult = null));
      let A = this.dnsHostname;
      if (
        ((this.pendingLookupPromise = this.lookup(A)),
        this.pendingLookupPromise.then(
          (B) => {
            if (this.pendingLookupPromise === null) return;
            ((this.pendingLookupPromise = null),
              this.backoff.reset(),
              this.backoff.stop(),
              (this.latestLookupResult = B.map((I) => ({ addresses: [I] }))));
            let Q = '[' + B.map((I) => I.host + ':' + I.port).join(',') + ']';
            if (
              (Vw('Resolved addresses for target ' + OR.uriToString(this.target) + ': ' + Q),
              this.latestLookupResult.length === 0)
            ) {
              this.listener.onError(this.defaultResolutionError);
              return;
            }
            this.listener.onSuccessfulResolution(
              this.latestLookupResult,
              this.latestServiceConfig,
              this.latestServiceConfigError,
              null,
              {}
            );
          },
          (B) => {
            if (this.pendingLookupPromise === null) return;
            (Vw('Resolution error for target ' + OR.uriToString(this.target) + ': ' + B.message),
              (this.pendingLookupPromise = null),
              this.stopNextResolutionTimer(),
              this.listener.onError(this.defaultResolutionError));
          }
        ),
        this.isServiceConfigEnabled && this.pendingTxtPromise === null)
      )
        ((this.pendingTxtPromise = this.resolveTxt(A)),
          this.pendingTxtPromise.then(
            (B) => {
              if (this.pendingTxtPromise === null) return;
              this.pendingTxtPromise = null;
              try {
                this.latestServiceConfig = ai6.extractAndSelectServiceConfig(B, this.percentage);
              } catch (Q) {
                this.latestServiceConfigError = {
                  code: Ln1.Status.UNAVAILABLE,
                  details: `Parsing service config failed with error ${Q.message}`,
                  metadata: new Rn1.Metadata(),
                };
              }
              if (this.latestLookupResult !== null)
                this.listener.onSuccessfulResolution(
                  this.latestLookupResult,
                  this.latestServiceConfig,
                  this.latestServiceConfigError,
                  null,
                  {}
                );
            },
            (B) => {}
          ));
    }
  }
  async lookup(A) {
    if (wG2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
      Vw('Using alternative DNS resolver.');
      let Q = await Promise.allSettled([
        this.alternativeResolver.resolve4(A),
        this.alternativeResolver.resolve6(A),
      ]);
      if (Q.every((I) => I.status === 'rejected')) throw new Error(Q[0].reason);
      return Q.reduce((I, G) => {
        return G.status === 'fulfilled' ? [...I, ...G.value] : I;
      }, []).map((I) => ({ host: I, port: +this.port }));
    }
    return (await Mn1.promises.lookup(A, { all: !0 })).map((Q) => ({
      host: Q.address,
      port: +this.port,
    }));
  }
  async resolveTxt(A) {
    if (wG2.GRPC_NODE_USE_ALTERNATIVE_RESOLVER)
      return (Vw('Using alternative DNS resolver.'), this.alternativeResolver.resolveTxt(A));
    return Mn1.promises.resolveTxt(A);
  }
  startNextResolutionTimer() {
    var A, B;
    (clearTimeout(this.nextResolutionTimer),
      (this.nextResolutionTimer = setTimeout(() => {
        if ((this.stopNextResolutionTimer(), this.continueResolving))
          this.startResolutionWithBackoff();
      }, this.minTimeBetweenResolutionsMs)),
      (B = (A = this.nextResolutionTimer).unref) === null || B === void 0 || B.call(A),
      (this.isNextResolutionTimerRunning = !0));
  }
  stopNextResolutionTimer() {
    (clearTimeout(this.nextResolutionTimer), (this.isNextResolutionTimerRunning = !1));
  }
  startResolutionWithBackoff() {
    if (this.pendingLookupPromise === null)
      ((this.continueResolving = !1),
        this.backoff.runOnce(),
        this.startNextResolutionTimer(),
        this.startResolution());
  }
  updateResolution() {
    if (this.pendingLookupPromise === null)
      if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
        if (this.isNextResolutionTimerRunning)
          Vw('resolution update delayed by "min time between resolutions" rate limit');
        else
          Vw(
            'resolution update delayed by backoff timer until ' +
              this.backoff.getEndTime().toISOString()
          );
        this.continueResolving = !0;
      } else this.startResolutionWithBackoff();
  }
  destroy() {
    ((this.continueResolving = !1),
      this.backoff.reset(),
      this.backoff.stop(),
      this.stopNextResolutionTimer(),
      (this.pendingLookupPromise = null),
      (this.pendingTxtPromise = null),
      (this.latestLookupResult = null),
      (this.latestServiceConfig = null),
      (this.latestServiceConfigError = null),
      (this.returnedIpResult = !1));
  }
  static getDefaultAuthority(A) {
    return A.path;
  }
}
function An6() {
  (HG2.registerResolver('dns', EG2), HG2.registerDefaultScheme('dns'));
}

// Module: jZ2
// Params: SZ2

Object.defineProperty(SZ2, '__esModule', { value: !0 });
SZ2.FileWatcherCertificateProvider = void 0;
var ss6 = D1('fs'),
  rs6 = r8(),
  os6 = O6(),
  ts6 = D1('util'),
  es6 = 'certificate_provider';
function QX1(A) {
  rs6.trace(os6.LogVerbosity.DEBUG, es6, A);
}
var Fa1 = ts6.promisify(ss6.readFile);
class PZ2 {
  constructor(A) {
    if (
      ((this.config = A),
      (this.refreshTimer = null),
      (this.fileResultPromise = null),
      (this.latestCaUpdate = void 0),
      (this.caListeners = new Set()),
      (this.latestIdentityUpdate = void 0),
      (this.identityListeners = new Set()),
      (this.lastUpdateTime = null),
      (A.certificateFile === void 0) !== (A.privateKeyFile === void 0))
    )
      throw new Error('certificateFile and privateKeyFile must be set or unset together');
    if (A.certificateFile === void 0 && A.caCertificateFile === void 0)
      throw new Error('At least one of certificateFile and caCertificateFile must be set');
    QX1('File watcher constructed with config ' + JSON.stringify(A));
  }
  updateCertificates() {
    if (this.fileResultPromise) return;
    ((this.fileResultPromise = Promise.allSettled([
      this.config.certificateFile ? Fa1(this.config.certificateFile) : Promise.reject(),
      this.config.privateKeyFile ? Fa1(this.config.privateKeyFile) : Promise.reject(),
      this.config.caCertificateFile ? Fa1(this.config.caCertificateFile) : Promise.reject(),
    ])),
      this.fileResultPromise.then(([A, B, Q]) => {
        if (!this.refreshTimer) return;
        if (
          (QX1(
            'File watcher read certificates certificate ' +
              A.status +
              ', privateKey ' +
              B.status +
              ', CA certificate ' +
              Q.status
          ),
          (this.lastUpdateTime = new Date()),
          (this.fileResultPromise = null),
          A.status === 'fulfilled' && B.status === 'fulfilled')
        )
          this.latestIdentityUpdate = { certificate: A.value, privateKey: B.value };
        else this.latestIdentityUpdate = null;
        if (Q.status === 'fulfilled') this.latestCaUpdate = { caCertificate: Q.value };
        else this.latestCaUpdate = null;
        for (let I of this.identityListeners) I(this.latestIdentityUpdate);
        for (let I of this.caListeners) I(this.latestCaUpdate);
      }),
      QX1('File watcher initiated certificate update'));
  }
  maybeStartWatchingFiles() {
    if (!this.refreshTimer) {
      let A = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : 1 / 0;
      if (A > this.config.refreshIntervalMs) this.updateCertificates();
      if (A > this.config.refreshIntervalMs * 2)
        ((this.latestCaUpdate = void 0), (this.latestIdentityUpdate = void 0));
      ((this.refreshTimer = setInterval(
        () => this.updateCertificates(),
        this.config.refreshIntervalMs
      )),
        QX1('File watcher started watching'));
    }
  }
  maybeStopWatchingFiles() {
    if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
      if (((this.fileResultPromise = null), this.refreshTimer))
        (clearInterval(this.refreshTimer), (this.refreshTimer = null));
    }
  }
  addCaCertificateListener(A) {
    if ((this.caListeners.add(A), this.maybeStartWatchingFiles(), this.latestCaUpdate !== void 0))
      process.nextTick(A, this.latestCaUpdate);
  }
  removeCaCertificateListener(A) {
    (this.caListeners.delete(A), this.maybeStopWatchingFiles());
  }
  addIdentityCertificateListener(A) {
    if (
      (this.identityListeners.add(A),
      this.maybeStartWatchingFiles(),
      this.latestIdentityUpdate !== void 0)
    )
      process.nextTick(A, this.latestIdentityUpdate);
  }
  removeIdentityCertificateListener(A) {
    (this.identityListeners.delete(A), this.maybeStopWatchingFiles());
  }
}
SZ2.FileWatcherCertificateProvider = PZ2;

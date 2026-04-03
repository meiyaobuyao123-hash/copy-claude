// Module: oC1
// Params: lD2

Object.defineProperty(lD2, '__esModule', { value: !0 });
lD2.ServerCredentials = void 0;
lD2.createCertificateProviderServerCredentials = As6;
lD2.createServerCredentialsWithInterceptors = Bs6;
var an1 = Ci1();
class jm {
  constructor(A, B) {
    ((this.serverConstructorOptions = A),
      (this.watchers = new Set()),
      (this.latestContextOptions = null),
      (this.latestContextOptions = B !== null && B !== void 0 ? B : null));
  }
  _addWatcher(A) {
    this.watchers.add(A);
  }
  _removeWatcher(A) {
    this.watchers.delete(A);
  }
  getWatcherCount() {
    return this.watchers.size;
  }
  updateSecureContextOptions(A) {
    this.latestContextOptions = A;
    for (let B of this.watchers) B(this.latestContextOptions);
  }
  _isSecure() {
    return this.serverConstructorOptions !== null;
  }
  _getSecureContextOptions() {
    return this.latestContextOptions;
  }
  _getConstructorOptions() {
    return this.serverConstructorOptions;
  }
  _getInterceptors() {
    return [];
  }
  static createInsecure() {
    return new sn1();
  }
  static createSsl(A, B, Q = !1) {
    var I;
    if (A !== null && !Buffer.isBuffer(A))
      throw new TypeError('rootCerts must be null or a Buffer');
    if (!Array.isArray(B)) throw new TypeError('keyCertPairs must be an array');
    if (typeof Q !== 'boolean') throw new TypeError('checkClientCertificate must be a boolean');
    let G = [],
      D = [];
    for (let Z = 0; Z < B.length; Z++) {
      let Y = B[Z];
      if (Y === null || typeof Y !== 'object')
        throw new TypeError(`keyCertPair[${Z}] must be an object`);
      if (!Buffer.isBuffer(Y.private_key))
        throw new TypeError(`keyCertPair[${Z}].private_key must be a Buffer`);
      if (!Buffer.isBuffer(Y.cert_chain))
        throw new TypeError(`keyCertPair[${Z}].cert_chain must be a Buffer`);
      (G.push(Y.cert_chain), D.push(Y.private_key));
    }
    return new rn1(
      { requestCert: Q, ciphers: an1.CIPHER_SUITES },
      {
        ca:
          (I = A !== null && A !== void 0 ? A : an1.getDefaultRootsData()) !== null && I !== void 0
            ? I
            : void 0,
        cert: G,
        key: D,
      }
    );
  }
}
lD2.ServerCredentials = jm;
class sn1 extends jm {
  constructor() {
    super(null);
  }
  _getSettings() {
    return null;
  }
  _equals(A) {
    return A instanceof sn1;
  }
}
class rn1 extends jm {
  constructor(A, B) {
    super(A, B);
    this.options = Object.assign(Object.assign({}, A), B);
  }
  _equals(A) {
    if (this === A) return !0;
    if (!(A instanceof rn1)) return !1;
    if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(A.options.ca)) {
      if (!this.options.ca.equals(A.options.ca)) return !1;
    } else if (this.options.ca !== A.options.ca) return !1;
    if (Array.isArray(this.options.cert) && Array.isArray(A.options.cert)) {
      if (this.options.cert.length !== A.options.cert.length) return !1;
      for (let B = 0; B < this.options.cert.length; B++) {
        let Q = this.options.cert[B],
          I = A.options.cert[B];
        if (Buffer.isBuffer(Q) && Buffer.isBuffer(I)) {
          if (!Q.equals(I)) return !1;
        } else if (Q !== I) return !1;
      }
    } else if (this.options.cert !== A.options.cert) return !1;
    if (Array.isArray(this.options.key) && Array.isArray(A.options.key)) {
      if (this.options.key.length !== A.options.key.length) return !1;
      for (let B = 0; B < this.options.key.length; B++) {
        let Q = this.options.key[B],
          I = A.options.key[B];
        if (Buffer.isBuffer(Q) && Buffer.isBuffer(I)) {
          if (!Q.equals(I)) return !1;
        } else if (Q !== I) return !1;
      }
    } else if (this.options.key !== A.options.key) return !1;
    if (this.options.requestCert !== A.options.requestCert) return !1;
    return !0;
  }
}
class on1 extends jm {
  constructor(A, B, Q) {
    super({ requestCert: B !== null, rejectUnauthorized: Q, ciphers: an1.CIPHER_SUITES });
    ((this.identityCertificateProvider = A),
      (this.caCertificateProvider = B),
      (this.requireClientCertificate = Q),
      (this.latestCaUpdate = null),
      (this.latestIdentityUpdate = null),
      (this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this)),
      (this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this)));
  }
  _addWatcher(A) {
    var B;
    if (this.getWatcherCount() === 0)
      ((B = this.caCertificateProvider) === null ||
        B === void 0 ||
        B.addCaCertificateListener(this.caCertificateUpdateListener),
        this.identityCertificateProvider.addIdentityCertificateListener(
          this.identityCertificateUpdateListener
        ));
    super._addWatcher(A);
  }
  _removeWatcher(A) {
    var B;
    if ((super._removeWatcher(A), this.getWatcherCount() === 0))
      ((B = this.caCertificateProvider) === null ||
        B === void 0 ||
        B.removeCaCertificateListener(this.caCertificateUpdateListener),
        this.identityCertificateProvider.removeIdentityCertificateListener(
          this.identityCertificateUpdateListener
        ));
  }
  _equals(A) {
    if (this === A) return !0;
    if (!(A instanceof on1)) return !1;
    return (
      this.caCertificateProvider === A.caCertificateProvider &&
      this.identityCertificateProvider === A.identityCertificateProvider &&
      this.requireClientCertificate === A.requireClientCertificate
    );
  }
  calculateSecureContextOptions() {
    var A;
    if (this.latestIdentityUpdate === null) return null;
    if (this.caCertificateProvider !== null && this.latestCaUpdate === null) return null;
    return {
      ca: (A = this.latestCaUpdate) === null || A === void 0 ? void 0 : A.caCertificate,
      cert: [this.latestIdentityUpdate.certificate],
      key: [this.latestIdentityUpdate.privateKey],
    };
  }
  finalizeUpdate() {
    let A = this.calculateSecureContextOptions();
    this.updateSecureContextOptions(A);
  }
  handleCaCertificateUpdate(A) {
    ((this.latestCaUpdate = A), this.finalizeUpdate());
  }
  handleIdentityCertitificateUpdate(A) {
    ((this.latestIdentityUpdate = A), this.finalizeUpdate());
  }
}
function As6(A, B, Q) {
  return new on1(A, B, Q);
}
class tn1 extends jm {
  constructor(A, B) {
    super({});
    ((this.childCredentials = A), (this.interceptors = B));
  }
  _isSecure() {
    return this.childCredentials._isSecure();
  }
  _equals(A) {
    if (!(A instanceof tn1)) return !1;
    if (!this.childCredentials._equals(A.childCredentials)) return !1;
    if (this.interceptors.length !== A.interceptors.length) return !1;
    for (let B = 0; B < this.interceptors.length; B++)
      if (this.interceptors[B] !== A.interceptors[B]) return !1;
    return !0;
  }
  _getInterceptors() {
    return this.interceptors;
  }
  _addWatcher(A) {
    this.childCredentials._addWatcher(A);
  }
  _removeWatcher(A) {
    this.childCredentials._removeWatcher(A);
  }
  _getConstructorOptions() {
    return this.childCredentials._getConstructorOptions();
  }
  _getSecureContextOptions() {
    return this.childCredentials._getSecureContextOptions();
  }
}
function Bs6(A, B) {
  return new tn1(A, B);
}

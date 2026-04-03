// Module: To
// Params: _32

Object.defineProperty(_32, '__esModule', { value: !0 });
_32.ChannelCredentials = void 0;
_32.createCertificateProviderChannelCredentials = vd6;
var Oo = D1('tls'),
  eJ1 = sJ1(),
  Hi1 = Ci1(),
  rJ1 = xY(),
  T32 = Iw(),
  xd6 = r8(),
  fd6 = O6();
function Ki1(A, B) {
  if (A && !(A instanceof Buffer)) throw new TypeError(`${B}, if provided, must be a Buffer.`);
}
class Xm {
  compose(A) {
    return new tJ1(this, A);
  }
  static createSsl(A, B, Q, I) {
    var G;
    if ((Ki1(A, 'Root certificate'), Ki1(B, 'Private key'), Ki1(Q, 'Certificate chain'), B && !Q))
      throw new Error('Private key must be given with accompanying certificate chain');
    if (!B && Q) throw new Error('Certificate chain must be given with accompanying private key');
    let D = Oo.createSecureContext({
      ca:
        (G = A !== null && A !== void 0 ? A : Hi1.getDefaultRootsData()) !== null && G !== void 0
          ? G
          : void 0,
      key: B !== null && B !== void 0 ? B : void 0,
      cert: Q !== null && Q !== void 0 ? Q : void 0,
      ciphers: Hi1.CIPHER_SUITES,
    });
    return new oJ1(D, I !== null && I !== void 0 ? I : {});
  }
  static createFromSecureContext(A, B) {
    return new oJ1(A, B !== null && B !== void 0 ? B : {});
  }
  static createInsecure() {
    return new zi1();
  }
}
_32.ChannelCredentials = Xm;
class zi1 extends Xm {
  constructor() {
    super();
  }
  compose(A) {
    throw new Error('Cannot compose insecure credentials');
  }
  _isSecure() {
    return !1;
  }
  _equals(A) {
    return A instanceof zi1;
  }
  _createSecureConnector(A, B, Q) {
    return {
      connect(I) {
        return Promise.resolve({ socket: I, secure: !1 });
      },
      waitForReady: () => {
        return Promise.resolve();
      },
      getCallCredentials: () => {
        return Q !== null && Q !== void 0 ? Q : eJ1.CallCredentials.createEmpty();
      },
      destroy() {},
    };
  }
}
function P32(A, B, Q, I) {
  var G, D, Z, Y;
  let W = { secureContext: A };
  if (B.checkServerIdentity) W.checkServerIdentity = B.checkServerIdentity;
  if (B.rejectUnauthorized !== void 0) W.rejectUnauthorized = B.rejectUnauthorized;
  if (((W.ALPNProtocols = ['h2']), I['grpc.ssl_target_name_override'])) {
    let V = I['grpc.ssl_target_name_override'],
      K = (G = W.checkServerIdentity) !== null && G !== void 0 ? G : Oo.checkServerIdentity;
    ((W.checkServerIdentity = (U, N) => {
      return K(V, N);
    }),
      (W.servername = V));
  } else if ('grpc.http_connect_target' in I) {
    let V = T32.getDefaultAuthority(
        (D = rJ1.parseUri(I['grpc.http_connect_target'])) !== null && D !== void 0
          ? D
          : { path: 'localhost' }
      ),
      K = rJ1.splitHostPort(V);
    W.servername =
      (Z = K === null || K === void 0 ? void 0 : K.host) !== null && Z !== void 0 ? Z : V;
  }
  if (I['grpc-node.tls_enable_trace']) W.enableTrace = !0;
  let F = Q;
  if ('grpc.http_connect_target' in I) {
    let V = rJ1.parseUri(I['grpc.http_connect_target']);
    if (V) F = V;
  }
  let J = T32.getDefaultAuthority(F),
    C = rJ1.splitHostPort(J),
    X = (Y = C === null || C === void 0 ? void 0 : C.host) !== null && Y !== void 0 ? Y : J;
  return ((W.host = X), (W.servername = X), W);
}
class S32 {
  constructor(A, B) {
    ((this.connectionOptions = A), (this.callCredentials = B));
  }
  connect(A) {
    let B = Object.assign({ socket: A }, this.connectionOptions);
    return new Promise((Q, I) => {
      let G = Oo.connect(B, () => {
        var D;
        if (
          ((D = this.connectionOptions.rejectUnauthorized) !== null && D !== void 0 ? D : !0) &&
          !G.authorized
        ) {
          I(G.authorizationError);
          return;
        }
        Q({ socket: G, secure: !0 });
      });
      G.on('error', (D) => {
        I(D);
      });
    });
  }
  waitForReady() {
    return Promise.resolve();
  }
  getCallCredentials() {
    return this.callCredentials;
  }
  destroy() {}
}
class oJ1 extends Xm {
  constructor(A, B) {
    super();
    ((this.secureContext = A), (this.verifyOptions = B));
  }
  _isSecure() {
    return !0;
  }
  _equals(A) {
    if (this === A) return !0;
    if (A instanceof oJ1)
      return (
        this.secureContext === A.secureContext &&
        this.verifyOptions.checkServerIdentity === A.verifyOptions.checkServerIdentity
      );
    else return !1;
  }
  _createSecureConnector(A, B, Q) {
    let I = P32(this.secureContext, this.verifyOptions, A, B);
    return new S32(I, Q !== null && Q !== void 0 ? Q : eJ1.CallCredentials.createEmpty());
  }
}
class Ro extends Xm {
  constructor(A, B, Q) {
    super();
    ((this.caCertificateProvider = A),
      (this.identityCertificateProvider = B),
      (this.verifyOptions = Q),
      (this.refcount = 0),
      (this.latestCaUpdate = void 0),
      (this.latestIdentityUpdate = void 0),
      (this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this)),
      (this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this)),
      (this.secureContextWatchers = []));
  }
  _isSecure() {
    return !0;
  }
  _equals(A) {
    var B, Q;
    if (this === A) return !0;
    if (A instanceof Ro)
      return (
        this.caCertificateProvider === A.caCertificateProvider &&
        this.identityCertificateProvider === A.identityCertificateProvider &&
        ((B = this.verifyOptions) === null || B === void 0 ? void 0 : B.checkServerIdentity) ===
          ((Q = A.verifyOptions) === null || Q === void 0 ? void 0 : Q.checkServerIdentity)
      );
    else return !1;
  }
  ref() {
    var A;
    if (this.refcount === 0)
      (this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener),
        (A = this.identityCertificateProvider) === null ||
          A === void 0 ||
          A.addIdentityCertificateListener(this.identityCertificateUpdateListener));
    this.refcount += 1;
  }
  unref() {
    var A;
    if (((this.refcount -= 1), this.refcount === 0))
      (this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener),
        (A = this.identityCertificateProvider) === null ||
          A === void 0 ||
          A.removeIdentityCertificateListener(this.identityCertificateUpdateListener));
  }
  _createSecureConnector(A, B, Q) {
    return (
      this.ref(),
      new Ro.SecureConnectorImpl(
        this,
        A,
        B,
        Q !== null && Q !== void 0 ? Q : eJ1.CallCredentials.createEmpty()
      )
    );
  }
  maybeUpdateWatchers() {
    if (this.hasReceivedUpdates()) {
      for (let A of this.secureContextWatchers) A(this.getLatestSecureContext());
      this.secureContextWatchers = [];
    }
  }
  handleCaCertificateUpdate(A) {
    ((this.latestCaUpdate = A), this.maybeUpdateWatchers());
  }
  handleIdentityCertitificateUpdate(A) {
    ((this.latestIdentityUpdate = A), this.maybeUpdateWatchers());
  }
  hasReceivedUpdates() {
    if (this.latestCaUpdate === void 0) return !1;
    if (this.identityCertificateProvider && this.latestIdentityUpdate === void 0) return !1;
    return !0;
  }
  getSecureContext() {
    if (this.hasReceivedUpdates()) return Promise.resolve(this.getLatestSecureContext());
    else
      return new Promise((A) => {
        this.secureContextWatchers.push(A);
      });
  }
  getLatestSecureContext() {
    var A, B;
    if (!this.latestCaUpdate) return null;
    if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) return null;
    try {
      return Oo.createSecureContext({
        ca: this.latestCaUpdate.caCertificate,
        key: (A = this.latestIdentityUpdate) === null || A === void 0 ? void 0 : A.privateKey,
        cert: (B = this.latestIdentityUpdate) === null || B === void 0 ? void 0 : B.certificate,
        ciphers: Hi1.CIPHER_SUITES,
      });
    } catch (Q) {
      return (
        xd6.log(fd6.LogVerbosity.ERROR, 'Failed to createSecureContext with error ' + Q.message),
        null
      );
    }
  }
}
Ro.SecureConnectorImpl = class {
  constructor(A, B, Q, I) {
    ((this.parent = A), (this.channelTarget = B), (this.options = Q), (this.callCredentials = I));
  }
  connect(A) {
    return new Promise((B, Q) => {
      let I = this.parent.getLatestSecureContext();
      if (!I) {
        Q(new Error('Failed to load credentials'));
        return;
      }
      if (A.closed) Q(new Error('Socket closed while loading credentials'));
      let G = P32(I, this.parent.verifyOptions, this.channelTarget, this.options),
        D = Object.assign({ socket: A }, G),
        Z = () => {
          Q(new Error('Socket closed'));
        },
        Y = (F) => {
          Q(F);
        },
        W = Oo.connect(D, () => {
          var F;
          if (
            (W.removeListener('close', Z),
            W.removeListener('error', Y),
            ((F = this.parent.verifyOptions.rejectUnauthorized) !== null && F !== void 0
              ? F
              : !0) && !W.authorized)
          ) {
            Q(W.authorizationError);
            return;
          }
          B({ socket: W, secure: !0 });
        });
      (W.once('close', Z), W.once('error', Y));
    });
  }
  async waitForReady() {
    await this.parent.getSecureContext();
  }
  getCallCredentials() {
    return this.callCredentials;
  }
  destroy() {
    this.parent.unref();
  }
};
function vd6(A, B, Q) {
  return new Ro(A, B, Q !== null && Q !== void 0 ? Q : {});
}
class tJ1 extends Xm {
  constructor(A, B) {
    super();
    if (((this.channelCredentials = A), (this.callCredentials = B), !A._isSecure()))
      throw new Error('Cannot compose insecure credentials');
  }
  compose(A) {
    let B = this.callCredentials.compose(A);
    return new tJ1(this.channelCredentials, B);
  }
  _isSecure() {
    return !0;
  }
  _equals(A) {
    if (this === A) return !0;
    if (A instanceof tJ1)
      return (
        this.channelCredentials._equals(A.channelCredentials) &&
        this.callCredentials._equals(A.callCredentials)
      );
    else return !1;
  }
  _createSecureConnector(A, B, Q) {
    let I = this.callCredentials.compose(
      Q !== null && Q !== void 0 ? Q : eJ1.CallCredentials.createEmpty()
    );
    return this.channelCredentials._createSecureConnector(A, B, I);
  }
}

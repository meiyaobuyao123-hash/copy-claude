// Module: qPA
// Params: Nx5,fL1

var ic = D1('url'),
  lc = ic.URL,
  Tv9 = D1('http'),
  Pv9 = D1('https'),
  PL1 = D1('stream').Writable,
  SL1 = D1('assert'),
  EPA = wPA();
(function A() {
  var B = typeof process !== 'undefined',
    Q = typeof window !== 'undefined' && typeof document !== 'undefined',
    I = pT(Error.captureStackTrace);
  if (!B && (Q || !I))
    console.warn('The follow-redirects package should be excluded from browser builds.');
})();
var _L1 = !1;
try {
  SL1(new lc(''));
} catch (A) {
  _L1 = A.code === 'ERR_INVALID_URL';
}
var Sv9 = [
    'auth',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'hash',
  ],
  jL1 = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
  yL1 = Object.create(null);
jL1.forEach(function (A) {
  yL1[A] = function (B, Q, I) {
    this._redirectable.emit(A, B, Q, I);
  };
});
var RL1 = nc('ERR_INVALID_URL', 'Invalid URL', TypeError),
  OL1 = nc('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
  _v9 = nc('ERR_FR_TOO_MANY_REDIRECTS', 'Maximum number of redirects exceeded', OL1),
  jv9 = nc('ERR_FR_MAX_BODY_LENGTH_EXCEEDED', 'Request body larger than maxBodyLength limit'),
  yv9 = nc('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
  kv9 = PL1.prototype.destroy || NPA;
function DY(A, B) {
  if (
    (PL1.call(this),
    this._sanitizeOptions(A),
    (this._options = A),
    (this._ended = !1),
    (this._ending = !1),
    (this._redirectCount = 0),
    (this._redirects = []),
    (this._requestBodyLength = 0),
    (this._requestBodyBuffers = []),
    B)
  )
    this.on('response', B);
  var Q = this;
  ((this._onNativeResponse = function (I) {
    try {
      Q._processResponse(I);
    } catch (G) {
      Q.emit('error', G instanceof OL1 ? G : new OL1({ cause: G }));
    }
  }),
    this._performRequest());
}
DY.prototype = Object.create(PL1.prototype);
DY.prototype.abort = function () {
  (xL1(this._currentRequest), this._currentRequest.abort(), this.emit('abort'));
};
DY.prototype.destroy = function (A) {
  return (xL1(this._currentRequest, A), kv9.call(this, A), this);
};
DY.prototype.write = function (A, B, Q) {
  if (this._ending) throw new yv9();
  if (!uT(A) && !vv9(A)) throw new TypeError('data should be a string, Buffer or Uint8Array');
  if (pT(B)) ((Q = B), (B = null));
  if (A.length === 0) {
    if (Q) Q();
    return;
  }
  if (this._requestBodyLength + A.length <= this._options.maxBodyLength)
    ((this._requestBodyLength += A.length),
      this._requestBodyBuffers.push({ data: A, encoding: B }),
      this._currentRequest.write(A, B, Q));
  else (this.emit('error', new jv9()), this.abort());
};
DY.prototype.end = function (A, B, Q) {
  if (pT(A)) ((Q = A), (A = B = null));
  else if (pT(B)) ((Q = B), (B = null));
  if (!A) ((this._ended = this._ending = !0), this._currentRequest.end(null, null, Q));
  else {
    var I = this,
      G = this._currentRequest;
    (this.write(A, B, function () {
      ((I._ended = !0), G.end(null, null, Q));
    }),
      (this._ending = !0));
  }
};
DY.prototype.setHeader = function (A, B) {
  ((this._options.headers[A] = B), this._currentRequest.setHeader(A, B));
};
DY.prototype.removeHeader = function (A) {
  (delete this._options.headers[A], this._currentRequest.removeHeader(A));
};
DY.prototype.setTimeout = function (A, B) {
  var Q = this;
  function I(Z) {
    (Z.setTimeout(A), Z.removeListener('timeout', Z.destroy), Z.addListener('timeout', Z.destroy));
  }
  function G(Z) {
    if (Q._timeout) clearTimeout(Q._timeout);
    ((Q._timeout = setTimeout(function () {
      (Q.emit('timeout'), D());
    }, A)),
      I(Z));
  }
  function D() {
    if (Q._timeout) (clearTimeout(Q._timeout), (Q._timeout = null));
    if (
      (Q.removeListener('abort', D),
      Q.removeListener('error', D),
      Q.removeListener('response', D),
      Q.removeListener('close', D),
      B)
    )
      Q.removeListener('timeout', B);
    if (!Q.socket) Q._currentRequest.removeListener('socket', G);
  }
  if (B) this.on('timeout', B);
  if (this.socket) G(this.socket);
  else this._currentRequest.once('socket', G);
  return (
    this.on('socket', I),
    this.on('abort', D),
    this.on('error', D),
    this.on('response', D),
    this.on('close', D),
    this
  );
};
['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(function (A) {
  DY.prototype[A] = function (B, Q) {
    return this._currentRequest[A](B, Q);
  };
});
['aborted', 'connection', 'socket'].forEach(function (A) {
  Object.defineProperty(DY.prototype, A, {
    get: function () {
      return this._currentRequest[A];
    },
  });
});
DY.prototype._sanitizeOptions = function (A) {
  if (!A.headers) A.headers = {};
  if (A.host) {
    if (!A.hostname) A.hostname = A.host;
    delete A.host;
  }
  if (!A.pathname && A.path) {
    var B = A.path.indexOf('?');
    if (B < 0) A.pathname = A.path;
    else ((A.pathname = A.path.substring(0, B)), (A.search = A.path.substring(B)));
  }
};
DY.prototype._performRequest = function () {
  var A = this._options.protocol,
    B = this._options.nativeProtocols[A];
  if (!B) throw new TypeError('Unsupported protocol ' + A);
  if (this._options.agents) {
    var Q = A.slice(0, -1);
    this._options.agent = this._options.agents[Q];
  }
  var I = (this._currentRequest = B.request(this._options, this._onNativeResponse));
  I._redirectable = this;
  for (var G of jL1) I.on(G, yL1[G]);
  if (
    ((this._currentUrl = /^\//.test(this._options.path)
      ? ic.format(this._options)
      : this._options.path),
    this._isRedirect)
  ) {
    var D = 0,
      Z = this,
      Y = this._requestBodyBuffers;
    (function W(F) {
      if (I === Z._currentRequest) {
        if (F) Z.emit('error', F);
        else if (D < Y.length) {
          var J = Y[D++];
          if (!I.finished) I.write(J.data, J.encoding, W);
        } else if (Z._ended) I.end();
      }
    })();
  }
};
DY.prototype._processResponse = function (A) {
  var B = A.statusCode;
  if (this._options.trackRedirects)
    this._redirects.push({ url: this._currentUrl, headers: A.headers, statusCode: B });
  var Q = A.headers.location;
  if (!Q || this._options.followRedirects === !1 || B < 300 || B >= 400) {
    ((A.responseUrl = this._currentUrl),
      (A.redirects = this._redirects),
      this.emit('response', A),
      (this._requestBodyBuffers = []));
    return;
  }
  if ((xL1(this._currentRequest), A.destroy(), ++this._redirectCount > this._options.maxRedirects))
    throw new _v9();
  var I,
    G = this._options.beforeRedirect;
  if (G) I = Object.assign({ Host: A.req.getHeader('host') }, this._options.headers);
  var D = this._options.method;
  if (
    ((B === 301 || B === 302) && this._options.method === 'POST') ||
    (B === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))
  )
    ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      LL1(/^content-/i, this._options.headers));
  var Z = LL1(/^host$/i, this._options.headers),
    Y = kL1(this._currentUrl),
    W = Z || Y.host,
    F = /^\w+:/.test(Q) ? this._currentUrl : ic.format(Object.assign(Y, { host: W })),
    J = xv9(Q, F);
  if (
    (EPA('redirecting to', J.href),
    (this._isRedirect = !0),
    TL1(J, this._options),
    (J.protocol !== Y.protocol && J.protocol !== 'https:') || (J.host !== W && !fv9(J.host, W)))
  )
    LL1(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
  if (pT(G)) {
    var C = { headers: A.headers, statusCode: B },
      X = { url: F, method: D, headers: I };
    (G(this._options, C, X), this._sanitizeOptions(this._options));
  }
  this._performRequest();
};
function UPA(A) {
  var B = { maxRedirects: 21, maxBodyLength: 10485760 },
    Q = {};
  return (
    Object.keys(A).forEach(function (I) {
      var G = I + ':',
        D = (Q[G] = A[I]),
        Z = (B[I] = Object.create(D));
      function Y(F, J, C) {
        if (bv9(F)) F = TL1(F);
        else if (uT(F)) F = TL1(kL1(F));
        else ((C = J), (J = $PA(F)), (F = { protocol: G }));
        if (pT(J)) ((C = J), (J = null));
        if (
          ((J = Object.assign(
            { maxRedirects: B.maxRedirects, maxBodyLength: B.maxBodyLength },
            F,
            J
          )),
          (J.nativeProtocols = Q),
          !uT(J.host) && !uT(J.hostname))
        )
          J.hostname = '::1';
        return (SL1.equal(J.protocol, G, 'protocol mismatch'), EPA('options', J), new DY(J, C));
      }
      function W(F, J, C) {
        var X = Z.request(F, J, C);
        return (X.end(), X);
      }
      Object.defineProperties(Z, {
        request: { value: Y, configurable: !0, enumerable: !0, writable: !0 },
        get: { value: W, configurable: !0, enumerable: !0, writable: !0 },
      });
    }),
    B
  );
}
function NPA() {}
function kL1(A) {
  var B;
  if (_L1) B = new lc(A);
  else if (((B = $PA(ic.parse(A))), !uT(B.protocol))) throw new RL1({ input: A });
  return B;
}
function xv9(A, B) {
  return _L1 ? new lc(A, B) : kL1(ic.resolve(B, A));
}
function $PA(A) {
  if (/^\[/.test(A.hostname) && !/^\[[:0-9a-f]+\]$/i.test(A.hostname))
    throw new RL1({ input: A.href || A });
  if (/^\[/.test(A.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(A.host))
    throw new RL1({ input: A.href || A });
  return A;
}
function TL1(A, B) {
  var Q = B || {};
  for (var I of Sv9) Q[I] = A[I];
  if (Q.hostname.startsWith('[')) Q.hostname = Q.hostname.slice(1, -1);
  if (Q.port !== '') Q.port = Number(Q.port);
  return ((Q.path = Q.search ? Q.pathname + Q.search : Q.pathname), Q);
}
function LL1(A, B) {
  var Q;
  for (var I in B) if (A.test(I)) ((Q = B[I]), delete B[I]);
  return Q === null || typeof Q === 'undefined' ? void 0 : String(Q).trim();
}
function nc(A, B, Q) {
  function I(G) {
    if (pT(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
    (Object.assign(this, G || {}),
      (this.code = A),
      (this.message = this.cause ? B + ': ' + this.cause.message : B));
  }
  return (
    (I.prototype = new (Q || Error)()),
    Object.defineProperties(I.prototype, {
      constructor: { value: I, enumerable: !1 },
      name: { value: 'Error [' + A + ']', enumerable: !1 },
    }),
    I
  );
}
function xL1(A, B) {
  for (var Q of jL1) A.removeListener(Q, yL1[Q]);
  (A.on('error', NPA), A.destroy(B));
}
function fv9(A, B) {
  SL1(uT(A) && uT(B));
  var Q = A.length - B.length - 1;
  return Q > 0 && A[Q] === '.' && A.endsWith(B);
}
function uT(A) {
  return typeof A === 'string' || A instanceof String;
}
function pT(A) {
  return typeof A === 'function';
}
function vv9(A) {
  return typeof A === 'object' && 'length' in A;
}
function bv9(A) {
  return lc && A instanceof lc;
}
fL1.exports = UPA({ http: Tv9, https: Pv9 });
fL1.exports.wrap = UPA;

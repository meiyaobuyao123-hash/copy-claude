// Module: Ok
// Params: NX

var bZA =
  (NX && NX.__extends) ||
  (function () {
    var A = function (B, Q) {
      return (
        (A =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (I, G) {
              I.__proto__ = G;
            }) ||
          function (I, G) {
            for (var D in G) if (Object.prototype.hasOwnProperty.call(G, D)) I[D] = G[D];
          }),
        A(B, Q)
      );
    };
    return function (B, Q) {
      if (typeof Q !== 'function' && Q !== null)
        throw new TypeError('Class extends value ' + String(Q) + ' is not a constructor or null');
      A(B, Q);
      function I() {
        this.constructor = B;
      }
      B.prototype = Q === null ? Object.create(Q) : ((I.prototype = Q.prototype), new I());
    };
  })();
Object.defineProperty(NX, '__esModule', { value: !0 });
NX.EMPTY_OBSERVER = NX.SafeSubscriber = NX.Subscriber = void 0;
var qI9 = l5(),
  fZA = _W(),
  VN1 = Rk(),
  MI9 = FN1(),
  vZA = cI(),
  JN1 = jZA(),
  LI9 = WN1(),
  RI9 = C91(),
  gZA = (function (A) {
    bZA(B, A);
    function B(Q) {
      var I = A.call(this) || this;
      if (((I.isStopped = !1), Q)) {
        if (((I.destination = Q), fZA.isSubscription(Q))) Q.add(I);
      } else I.destination = NX.EMPTY_OBSERVER;
      return I;
    }
    return (
      (B.create = function (Q, I, G) {
        return new hZA(Q, I, G);
      }),
      (B.prototype.next = function (Q) {
        if (this.isStopped) XN1(JN1.nextNotification(Q), this);
        else this._next(Q);
      }),
      (B.prototype.error = function (Q) {
        if (this.isStopped) XN1(JN1.errorNotification(Q), this);
        else ((this.isStopped = !0), this._error(Q));
      }),
      (B.prototype.complete = function () {
        if (this.isStopped) XN1(JN1.COMPLETE_NOTIFICATION, this);
        else ((this.isStopped = !0), this._complete());
      }),
      (B.prototype.unsubscribe = function () {
        if (!this.closed)
          ((this.isStopped = !0), A.prototype.unsubscribe.call(this), (this.destination = null));
      }),
      (B.prototype._next = function (Q) {
        this.destination.next(Q);
      }),
      (B.prototype._error = function (Q) {
        try {
          this.destination.error(Q);
        } finally {
          this.unsubscribe();
        }
      }),
      (B.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      B
    );
  })(fZA.Subscription);
NX.Subscriber = gZA;
var OI9 = Function.prototype.bind;
function CN1(A, B) {
  return OI9.call(A, B);
}
var TI9 = (function () {
    function A(B) {
      this.partialObserver = B;
    }
    return (
      (A.prototype.next = function (B) {
        var Q = this.partialObserver;
        if (Q.next)
          try {
            Q.next(B);
          } catch (I) {
            X91(I);
          }
      }),
      (A.prototype.error = function (B) {
        var Q = this.partialObserver;
        if (Q.error)
          try {
            Q.error(B);
          } catch (I) {
            X91(I);
          }
        else X91(B);
      }),
      (A.prototype.complete = function () {
        var B = this.partialObserver;
        if (B.complete)
          try {
            B.complete();
          } catch (Q) {
            X91(Q);
          }
      }),
      A
    );
  })(),
  hZA = (function (A) {
    bZA(B, A);
    function B(Q, I, G) {
      var D = A.call(this) || this,
        Z;
      if (qI9.isFunction(Q) || !Q)
        Z = {
          next: Q !== null && Q !== void 0 ? Q : void 0,
          error: I !== null && I !== void 0 ? I : void 0,
          complete: G !== null && G !== void 0 ? G : void 0,
        };
      else {
        var Y;
        if (D && VN1.config.useDeprecatedNextContext)
          ((Y = Object.create(Q)),
            (Y.unsubscribe = function () {
              return D.unsubscribe();
            }),
            (Z = {
              next: Q.next && CN1(Q.next, Y),
              error: Q.error && CN1(Q.error, Y),
              complete: Q.complete && CN1(Q.complete, Y),
            }));
        else Z = Q;
      }
      return ((D.destination = new TI9(Z)), D);
    }
    return B;
  })(gZA);
NX.SafeSubscriber = hZA;
function X91(A) {
  if (VN1.config.useDeprecatedSynchronousErrorHandling) RI9.captureError(A);
  else MI9.reportUnhandledError(A);
}
function PI9(A) {
  throw A;
}
function XN1(A, B) {
  var Q = VN1.config.onStoppedNotification;
  Q &&
    LI9.timeoutProvider.setTimeout(function () {
      return Q(A, B);
    });
}
NX.EMPTY_OBSERVER = { closed: !0, next: vZA.noop, error: PI9, complete: vZA.noop };

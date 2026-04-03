// Module: iI
// Params: qH

var HYA =
    (qH && qH.__extends) ||
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
    })(),
  WG9 =
    (qH && qH.__values) ||
    function (A) {
      var B = typeof Symbol === 'function' && Symbol.iterator,
        Q = B && A[B],
        I = 0;
      if (Q) return Q.call(A);
      if (A && typeof A.length === 'number')
        return {
          next: function () {
            if (A && I >= A.length) A = void 0;
            return { value: A && A[I++], done: !A };
          },
        };
      throw new TypeError(B ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    };
Object.defineProperty(qH, '__esModule', { value: !0 });
qH.AnonymousSubject = qH.Subject = void 0;
var KYA = G8(),
  NN1 = _W(),
  FG9 = EN1(),
  JG9 = gE(),
  UN1 = C91(),
  zYA = (function (A) {
    HYA(B, A);
    function B() {
      var Q = A.call(this) || this;
      return (
        (Q.closed = !1),
        (Q.currentObservers = null),
        (Q.observers = []),
        (Q.isStopped = !1),
        (Q.hasError = !1),
        (Q.thrownError = null),
        Q
      );
    }
    return (
      (B.prototype.lift = function (Q) {
        var I = new $N1(this, this);
        return ((I.operator = Q), I);
      }),
      (B.prototype._throwIfClosed = function () {
        if (this.closed) throw new FG9.ObjectUnsubscribedError();
      }),
      (B.prototype.next = function (Q) {
        var I = this;
        UN1.errorContext(function () {
          var G, D;
          if ((I._throwIfClosed(), !I.isStopped)) {
            if (!I.currentObservers) I.currentObservers = Array.from(I.observers);
            try {
              for (var Z = WG9(I.currentObservers), Y = Z.next(); !Y.done; Y = Z.next()) {
                var W = Y.value;
                W.next(Q);
              }
            } catch (F) {
              G = { error: F };
            } finally {
              try {
                if (Y && !Y.done && (D = Z.return)) D.call(Z);
              } finally {
                if (G) throw G.error;
              }
            }
          }
        });
      }),
      (B.prototype.error = function (Q) {
        var I = this;
        UN1.errorContext(function () {
          if ((I._throwIfClosed(), !I.isStopped)) {
            ((I.hasError = I.isStopped = !0), (I.thrownError = Q));
            var G = I.observers;
            while (G.length) G.shift().error(Q);
          }
        });
      }),
      (B.prototype.complete = function () {
        var Q = this;
        UN1.errorContext(function () {
          if ((Q._throwIfClosed(), !Q.isStopped)) {
            Q.isStopped = !0;
            var I = Q.observers;
            while (I.length) I.shift().complete();
          }
        });
      }),
      (B.prototype.unsubscribe = function () {
        ((this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null));
      }),
      Object.defineProperty(B.prototype, 'observed', {
        get: function () {
          var Q;
          return ((Q = this.observers) === null || Q === void 0 ? void 0 : Q.length) > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (B.prototype._trySubscribe = function (Q) {
        return (this._throwIfClosed(), A.prototype._trySubscribe.call(this, Q));
      }),
      (B.prototype._subscribe = function (Q) {
        return (this._throwIfClosed(), this._checkFinalizedStatuses(Q), this._innerSubscribe(Q));
      }),
      (B.prototype._innerSubscribe = function (Q) {
        var I = this,
          G = this,
          D = G.hasError,
          Z = G.isStopped,
          Y = G.observers;
        if (D || Z) return NN1.EMPTY_SUBSCRIPTION;
        return (
          (this.currentObservers = null),
          Y.push(Q),
          new NN1.Subscription(function () {
            ((I.currentObservers = null), JG9.arrRemove(Y, Q));
          })
        );
      }),
      (B.prototype._checkFinalizedStatuses = function (Q) {
        var I = this,
          G = I.hasError,
          D = I.thrownError,
          Z = I.isStopped;
        if (G) Q.error(D);
        else if (Z) Q.complete();
      }),
      (B.prototype.asObservable = function () {
        var Q = new KYA.Observable();
        return ((Q.source = this), Q);
      }),
      (B.create = function (Q, I) {
        return new $N1(Q, I);
      }),
      B
    );
  })(KYA.Observable);
qH.Subject = zYA;
var $N1 = (function (A) {
  HYA(B, A);
  function B(Q, I) {
    var G = A.call(this) || this;
    return ((G.destination = Q), (G.source = I), G);
  }
  return (
    (B.prototype.next = function (Q) {
      var I, G;
      (G = (I = this.destination) === null || I === void 0 ? void 0 : I.next) === null ||
        G === void 0 ||
        G.call(I, Q);
    }),
    (B.prototype.error = function (Q) {
      var I, G;
      (G = (I = this.destination) === null || I === void 0 ? void 0 : I.error) === null ||
        G === void 0 ||
        G.call(I, Q);
    }),
    (B.prototype.complete = function () {
      var Q, I;
      (I = (Q = this.destination) === null || Q === void 0 ? void 0 : Q.complete) === null ||
        I === void 0 ||
        I.call(Q);
    }),
    (B.prototype._subscribe = function (Q) {
      var I, G;
      return (G = (I = this.source) === null || I === void 0 ? void 0 : I.subscribe(Q)) !== null &&
        G !== void 0
        ? G
        : NN1.EMPTY_SUBSCRIPTION;
    }),
    B
  );
})(zYA);
qH.AnonymousSubject = $N1;

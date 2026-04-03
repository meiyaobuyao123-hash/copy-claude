// Module: G8
// Params: aZA

Object.defineProperty(aZA, '__esModule', { value: !0 });
aZA.Observable = void 0;
var HN1 = Ok(),
  kI9 = _W(),
  xI9 = ip(),
  fI9 = np(),
  vI9 = Rk(),
  KN1 = l5(),
  bI9 = C91(),
  gI9 = (function () {
    function A(B) {
      if (B) this._subscribe = B;
    }
    return (
      (A.prototype.lift = function (B) {
        var Q = new A();
        return ((Q.source = this), (Q.operator = B), Q);
      }),
      (A.prototype.subscribe = function (B, Q, I) {
        var G = this,
          D = mI9(B) ? B : new HN1.SafeSubscriber(B, Q, I);
        return (
          bI9.errorContext(function () {
            var Z = G,
              Y = Z.operator,
              W = Z.source;
            D.add(Y ? Y.call(D, W) : W ? G._subscribe(D) : G._trySubscribe(D));
          }),
          D
        );
      }),
      (A.prototype._trySubscribe = function (B) {
        try {
          return this._subscribe(B);
        } catch (Q) {
          B.error(Q);
        }
      }),
      (A.prototype.forEach = function (B, Q) {
        var I = this;
        return (
          (Q = nZA(Q)),
          new Q(function (G, D) {
            var Z = new HN1.SafeSubscriber({
              next: function (Y) {
                try {
                  B(Y);
                } catch (W) {
                  (D(W), Z.unsubscribe());
                }
              },
              error: D,
              complete: G,
            });
            I.subscribe(Z);
          })
        );
      }),
      (A.prototype._subscribe = function (B) {
        var Q;
        return (Q = this.source) === null || Q === void 0 ? void 0 : Q.subscribe(B);
      }),
      (A.prototype[xI9.observable] = function () {
        return this;
      }),
      (A.prototype.pipe = function () {
        var B = [];
        for (var Q = 0; Q < arguments.length; Q++) B[Q] = arguments[Q];
        return fI9.pipeFromArray(B)(this);
      }),
      (A.prototype.toPromise = function (B) {
        var Q = this;
        return (
          (B = nZA(B)),
          new B(function (I, G) {
            var D;
            Q.subscribe(
              function (Z) {
                return (D = Z);
              },
              function (Z) {
                return G(Z);
              },
              function () {
                return I(D);
              }
            );
          })
        );
      }),
      (A.create = function (B) {
        return new A(B);
      }),
      A
    );
  })();
aZA.Observable = gI9;
function nZA(A) {
  var B;
  return (B = A !== null && A !== void 0 ? A : vI9.config.Promise) !== null && B !== void 0
    ? B
    : Promise;
}
function hI9(A) {
  return A && KN1.isFunction(A.next) && KN1.isFunction(A.error) && KN1.isFunction(A.complete);
}
function mI9(A) {
  return (A && A instanceof HN1.Subscriber) || (hI9(A) && kI9.isSubscription(A));
}

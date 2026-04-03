// Module: _W
// Params: BY

var zZA =
    (BY && BY.__values) ||
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
    },
  wZA =
    (BY && BY.__read) ||
    function (A, B) {
      var Q = typeof Symbol === 'function' && A[Symbol.iterator];
      if (!Q) return A;
      var I = Q.call(A),
        G,
        D = [],
        Z;
      try {
        while ((B === void 0 || B-- > 0) && !(G = I.next()).done) D.push(G.value);
      } catch (Y) {
        Z = { error: Y };
      } finally {
        try {
          if (G && !G.done && (Q = I.return)) Q.call(I);
        } finally {
          if (Z) throw Z.error;
        }
      }
      return D;
    },
  EZA =
    (BY && BY.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(BY, '__esModule', { value: !0 });
BY.isSubscription = BY.EMPTY_SUBSCRIPTION = BY.Subscription = void 0;
var lp = l5(),
  ZN1 = DN1(),
  UZA = gE(),
  YN1 = (function () {
    function A(B) {
      ((this.initialTeardown = B),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null));
    }
    return (
      (A.prototype.unsubscribe = function () {
        var B, Q, I, G, D;
        if (!this.closed) {
          this.closed = !0;
          var Z = this._parentage;
          if (Z)
            if (((this._parentage = null), Array.isArray(Z)))
              try {
                for (var Y = zZA(Z), W = Y.next(); !W.done; W = Y.next()) {
                  var F = W.value;
                  F.remove(this);
                }
              } catch (U) {
                B = { error: U };
              } finally {
                try {
                  if (W && !W.done && (Q = Y.return)) Q.call(Y);
                } finally {
                  if (B) throw B.error;
                }
              }
            else Z.remove(this);
          var J = this.initialTeardown;
          if (lp.isFunction(J))
            try {
              J();
            } catch (U) {
              D = U instanceof ZN1.UnsubscriptionError ? U.errors : [U];
            }
          var C = this._finalizers;
          if (C) {
            this._finalizers = null;
            try {
              for (var X = zZA(C), V = X.next(); !V.done; V = X.next()) {
                var K = V.value;
                try {
                  NZA(K);
                } catch (U) {
                  if (
                    ((D = D !== null && D !== void 0 ? D : []),
                    U instanceof ZN1.UnsubscriptionError)
                  )
                    D = EZA(EZA([], wZA(D)), wZA(U.errors));
                  else D.push(U);
                }
              }
            } catch (U) {
              I = { error: U };
            } finally {
              try {
                if (V && !V.done && (G = X.return)) G.call(X);
              } finally {
                if (I) throw I.error;
              }
            }
          }
          if (D) throw new ZN1.UnsubscriptionError(D);
        }
      }),
      (A.prototype.add = function (B) {
        var Q;
        if (B && B !== this)
          if (this.closed) NZA(B);
          else {
            if (B instanceof A) {
              if (B.closed || B._hasParent(this)) return;
              B._addParent(this);
            }
            (this._finalizers = (Q = this._finalizers) !== null && Q !== void 0 ? Q : []).push(B);
          }
      }),
      (A.prototype._hasParent = function (B) {
        var Q = this._parentage;
        return Q === B || (Array.isArray(Q) && Q.includes(B));
      }),
      (A.prototype._addParent = function (B) {
        var Q = this._parentage;
        this._parentage = Array.isArray(Q) ? (Q.push(B), Q) : Q ? [Q, B] : B;
      }),
      (A.prototype._removeParent = function (B) {
        var Q = this._parentage;
        if (Q === B) this._parentage = null;
        else if (Array.isArray(Q)) UZA.arrRemove(Q, B);
      }),
      (A.prototype.remove = function (B) {
        var Q = this._finalizers;
        if ((Q && UZA.arrRemove(Q, B), B instanceof A)) B._removeParent(this);
      }),
      (A.EMPTY = (function () {
        var B = new A();
        return ((B.closed = !0), B);
      })()),
      A
    );
  })();
BY.Subscription = YN1;
BY.EMPTY_SUBSCRIPTION = YN1.EMPTY;
function FI9(A) {
  return (
    A instanceof YN1 ||
    (A &&
      'closed' in A &&
      lp.isFunction(A.remove) &&
      lp.isFunction(A.add) &&
      lp.isFunction(A.unsubscribe))
  );
}
BY.isSubscription = FI9;
function NZA(A) {
  if (lp.isFunction(A)) A();
  else A.unsubscribe();
}

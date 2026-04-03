// Module: kk
// Params: yk

var LG9 =
  (yk && yk.__extends) ||
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
Object.defineProperty(yk, '__esModule', { value: !0 });
yk.AsyncAction = void 0;
var RG9 = EYA(),
  qYA = $YA(),
  OG9 = gE(),
  TG9 = (function (A) {
    LG9(B, A);
    function B(Q, I) {
      var G = A.call(this, Q, I) || this;
      return ((G.scheduler = Q), (G.work = I), (G.pending = !1), G);
    }
    return (
      (B.prototype.schedule = function (Q, I) {
        var G;
        if (I === void 0) I = 0;
        if (this.closed) return this;
        this.state = Q;
        var D = this.id,
          Z = this.scheduler;
        if (D != null) this.id = this.recycleAsyncId(Z, D, I);
        return (
          (this.pending = !0),
          (this.delay = I),
          (this.id =
            (G = this.id) !== null && G !== void 0 ? G : this.requestAsyncId(Z, this.id, I)),
          this
        );
      }),
      (B.prototype.requestAsyncId = function (Q, I, G) {
        if (G === void 0) G = 0;
        return qYA.intervalProvider.setInterval(Q.flush.bind(Q, this), G);
      }),
      (B.prototype.recycleAsyncId = function (Q, I, G) {
        if (G === void 0) G = 0;
        if (G != null && this.delay === G && this.pending === !1) return I;
        if (I != null) qYA.intervalProvider.clearInterval(I);
        return;
      }),
      (B.prototype.execute = function (Q, I) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = !1;
        var G = this._execute(Q, I);
        if (G) return G;
        else if (this.pending === !1 && this.id != null)
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }),
      (B.prototype._execute = function (Q, I) {
        var G = !1,
          D;
        try {
          this.work(Q);
        } catch (Z) {
          ((G = !0), (D = Z ? Z : new Error('Scheduled action threw falsy error')));
        }
        if (G) return (this.unsubscribe(), D);
      }),
      (B.prototype.unsubscribe = function () {
        if (!this.closed) {
          var Q = this,
            I = Q.id,
            G = Q.scheduler,
            D = G.actions;
          if (
            ((this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            OG9.arrRemove(D, this),
            I != null)
          )
            this.id = this.recycleAsyncId(G, I, null);
          ((this.delay = null), A.prototype.unsubscribe.call(this));
        }
      }),
      B
    );
  })(RG9.Action);
yk.AsyncAction = TG9;

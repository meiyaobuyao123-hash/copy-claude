// Module: IWA
// Params: Yq

var BWA =
  (Yq && Yq.__extends) ||
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
Object.defineProperty(Yq, '__esModule', { value: !0 });
Yq.VirtualAction = Yq.VirtualTimeScheduler = void 0;
var JD9 = kk(),
  CD9 = _W(),
  XD9 = vk(),
  VD9 = (function (A) {
    BWA(B, A);
    function B(Q, I) {
      if (Q === void 0) Q = QWA;
      if (I === void 0) I = 1 / 0;
      var G =
        A.call(this, Q, function () {
          return G.frame;
        }) || this;
      return ((G.maxFrames = I), (G.frame = 0), (G.index = -1), G);
    }
    return (
      (B.prototype.flush = function () {
        var Q = this,
          I = Q.actions,
          G = Q.maxFrames,
          D,
          Z;
        while ((Z = I[0]) && Z.delay <= G)
          if ((I.shift(), (this.frame = Z.delay), (D = Z.execute(Z.state, Z.delay)))) break;
        if (D) {
          while ((Z = I.shift())) Z.unsubscribe();
          throw D;
        }
      }),
      (B.frameTimeFactor = 10),
      B
    );
  })(XD9.AsyncScheduler);
Yq.VirtualTimeScheduler = VD9;
var QWA = (function (A) {
  BWA(B, A);
  function B(Q, I, G) {
    if (G === void 0) G = Q.index += 1;
    var D = A.call(this, Q, I) || this;
    return (
      (D.scheduler = Q),
      (D.work = I),
      (D.index = G),
      (D.active = !0),
      (D.index = Q.index = G),
      D
    );
  }
  return (
    (B.prototype.schedule = function (Q, I) {
      if (I === void 0) I = 0;
      if (Number.isFinite(I)) {
        if (!this.id) return A.prototype.schedule.call(this, Q, I);
        this.active = !1;
        var G = new B(this.scheduler, this.work);
        return (this.add(G), G.schedule(Q, I));
      } else return CD9.Subscription.EMPTY;
    }),
    (B.prototype.requestAsyncId = function (Q, I, G) {
      if (G === void 0) G = 0;
      this.delay = Q.frame + G;
      var D = Q.actions;
      return (D.push(this), D.sort(B.sortActions), 1);
    }),
    (B.prototype.recycleAsyncId = function (Q, I, G) {
      if (G === void 0) G = 0;
      return;
    }),
    (B.prototype._execute = function (Q, I) {
      if (this.active === !0) return A.prototype._execute.call(this, Q, I);
    }),
    (B.sortActions = function (Q, I) {
      if (Q.delay === I.delay)
        if (Q.index === I.index) return 0;
        else if (Q.index > I.index) return 1;
        else return -1;
      else if (Q.delay > I.delay) return 1;
      else return -1;
    }),
    B
  );
})(JD9.AsyncAction);
Yq.VirtualAction = QWA;

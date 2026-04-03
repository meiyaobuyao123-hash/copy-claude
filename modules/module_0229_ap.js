// Module: ap
// Params: Tk

var rI9 =
  (Tk && Tk.__extends) ||
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
Object.defineProperty(Tk, '__esModule', { value: !0 });
Tk.ConnectableObservable = void 0;
var oI9 = G8(),
  QYA = _W(),
  tI9 = V91(),
  eI9 = t2(),
  AG9 = w2(),
  BG9 = (function (A) {
    rI9(B, A);
    function B(Q, I) {
      var G = A.call(this) || this;
      if (
        ((G.source = Q),
        (G.subjectFactory = I),
        (G._subject = null),
        (G._refCount = 0),
        (G._connection = null),
        AG9.hasLift(Q))
      )
        G.lift = Q.lift;
      return G;
    }
    return (
      (B.prototype._subscribe = function (Q) {
        return this.getSubject().subscribe(Q);
      }),
      (B.prototype.getSubject = function () {
        var Q = this._subject;
        if (!Q || Q.isStopped) this._subject = this.subjectFactory();
        return this._subject;
      }),
      (B.prototype._teardown = function () {
        this._refCount = 0;
        var Q = this._connection;
        ((this._subject = this._connection = null), Q === null || Q === void 0 || Q.unsubscribe());
      }),
      (B.prototype.connect = function () {
        var Q = this,
          I = this._connection;
        if (!I) {
          I = this._connection = new QYA.Subscription();
          var G = this.getSubject();
          if (
            (I.add(
              this.source.subscribe(
                eI9.createOperatorSubscriber(
                  G,
                  void 0,
                  function () {
                    (Q._teardown(), G.complete());
                  },
                  function (D) {
                    (Q._teardown(), G.error(D));
                  },
                  function () {
                    return Q._teardown();
                  }
                )
              )
            ),
            I.closed)
          )
            ((this._connection = null), (I = QYA.Subscription.EMPTY));
        }
        return I;
      }),
      (B.prototype.refCount = function () {
        return tI9.refCount()(this);
      }),
      B
    );
  })(oI9.Observable);
Tk.ConnectableObservable = BG9;

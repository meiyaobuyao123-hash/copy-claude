// Module: m4A
// Params: h4A

var { _optionalChain: dp2 } = tA();
Object.defineProperty(h4A, '__esModule', { value: !0 });
var su = tA(),
  ME1 = sZ(),
  up2 = b$();
class Z01 {
  static __initStatic() {
    this.id = 'Mysql';
  }
  constructor() {
    this.name = Z01.id;
  }
  loadDependency() {
    return (this._module = this._module || su.loadModule('mysql/lib/Connection.js'));
  }
  setupOnce(A, B) {
    if (up2.shouldDisableAutoInstrumentation(B)) {
      ME1.DEBUG_BUILD &&
        su.logger.log('Mysql Integration is skipped because of instrumenter configuration.');
      return;
    }
    let Q = this.loadDependency();
    if (!Q) {
      ME1.DEBUG_BUILD &&
        su.logger.error('Mysql Integration was unable to require `mysql` package.');
      return;
    }
    let I = void 0;
    try {
      Q.prototype.connect = new Proxy(Q.prototype.connect, {
        apply(Z, Y, W) {
          if (!I) I = Y.config;
          return Z.apply(Y, W);
        },
      });
    } catch (Z) {
      ME1.DEBUG_BUILD &&
        su.logger.error('Mysql Integration was unable to instrument `mysql` config.');
    }
    function G() {
      if (!I) return {};
      return { 'server.address': I.host, 'server.port': I.port, 'db.user': I.user };
    }
    function D(Z) {
      if (!Z) return;
      let Y = G();
      (Object.keys(Y).forEach((W) => {
        Z.setAttribute(W, Y[W]);
      }),
        Z.end());
    }
    su.fill(Q, 'createQuery', function (Z) {
      return function (Y, W, F) {
        let C = B().getScope().getSpan(),
          X = dp2([
            C,
            'optionalAccess',
            (K) => K.startChild,
            'call',
            (K) =>
              K({
                description: typeof Y === 'string' ? Y : Y.sql,
                op: 'db',
                origin: 'auto.db.mysql',
                data: { 'db.system': 'mysql' },
              }),
          ]);
        if (typeof F === 'function')
          return Z.call(this, Y, W, function (K, U, N) {
            (D(X), F(K, U, N));
          });
        if (typeof W === 'function')
          return Z.call(this, Y, function (K, U, N) {
            (D(X), W(K, U, N));
          });
        let V = Z.call(this, Y, W);
        return (
          V.on('end', () => {
            D(X);
          }),
          V
        );
      };
    });
  }
}
Z01.__initStatic();
h4A.Mysql = Z01;

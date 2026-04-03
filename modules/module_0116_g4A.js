// Module: g4A
// Params: b4A

var { _optionalChain: yy } = tA();
Object.defineProperty(b4A, '__esModule', { value: !0 });
var ky = tA(),
  qE1 = sZ(),
  hp2 = b$();
class D01 {
  static __initStatic() {
    this.id = 'Postgres';
  }
  constructor(A = {}) {
    ((this.name = D01.id), (this._usePgNative = !!A.usePgNative), (this._module = A.module));
  }
  loadDependency() {
    return (this._module = this._module || ky.loadModule('pg'));
  }
  setupOnce(A, B) {
    if (hp2.shouldDisableAutoInstrumentation(B)) {
      qE1.DEBUG_BUILD &&
        ky.logger.log('Postgres Integration is skipped because of instrumenter configuration.');
      return;
    }
    let Q = this.loadDependency();
    if (!Q) {
      qE1.DEBUG_BUILD &&
        ky.logger.error('Postgres Integration was unable to require `pg` package.');
      return;
    }
    let I = this._usePgNative
      ? yy([Q, 'access', (G) => G.native, 'optionalAccess', (G) => G.Client])
      : Q.Client;
    if (!I) {
      qE1.DEBUG_BUILD &&
        ky.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
      return;
    }
    ky.fill(I.prototype, 'query', function (G) {
      return function (D, Z, Y) {
        let F = B().getScope().getSpan(),
          J = { 'db.system': 'postgresql' };
        try {
          if (this.database) J['db.name'] = this.database;
          if (this.host) J['server.address'] = this.host;
          if (this.port) J['server.port'] = this.port;
          if (this.user) J['db.user'] = this.user;
        } catch (V) {}
        let C = yy([
          F,
          'optionalAccess',
          (V) => V.startChild,
          'call',
          (V) =>
            V({
              description: typeof D === 'string' ? D : D.text,
              op: 'db',
              origin: 'auto.db.postgres',
              data: J,
            }),
        ]);
        if (typeof Y === 'function')
          return G.call(this, D, Z, function (V, K) {
            (yy([C, 'optionalAccess', (U) => U.end, 'call', (U) => U()]), Y(V, K));
          });
        if (typeof Z === 'function')
          return G.call(this, D, function (V, K) {
            (yy([C, 'optionalAccess', (U) => U.end, 'call', (U) => U()]), Z(V, K));
          });
        let X = typeof Z !== 'undefined' ? G.call(this, D, Z) : G.call(this, D);
        if (ky.isThenable(X))
          return X.then((V) => {
            return (yy([C, 'optionalAccess', (K) => K.end, 'call', (K) => K()]), V);
          });
        return (yy([C, 'optionalAccess', (V) => V.end, 'call', (V) => V()]), X);
      };
    });
  }
}
D01.__initStatic();
b4A.Postgres = D01;

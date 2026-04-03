// Module: s4A
// Params: a4A

var { _optionalChain: xy } = tA();
Object.defineProperty(a4A, '__esModule', { value: !0 });
var ou = tA(),
  n4A = sZ(),
  ep2 = b$();
class F01 {
  static __initStatic() {
    this.id = 'GraphQL';
  }
  constructor() {
    this.name = F01.id;
  }
  loadDependency() {
    return (this._module = this._module || ou.loadModule('graphql/execution/execute.js'));
  }
  setupOnce(A, B) {
    if (ep2.shouldDisableAutoInstrumentation(B)) {
      n4A.DEBUG_BUILD &&
        ou.logger.log('GraphQL Integration is skipped because of instrumenter configuration.');
      return;
    }
    let Q = this.loadDependency();
    if (!Q) {
      n4A.DEBUG_BUILD &&
        ou.logger.error('GraphQL Integration was unable to require graphql/execution package.');
      return;
    }
    ou.fill(Q, 'execute', function (I) {
      return function (...G) {
        let D = B().getScope(),
          Z = D.getSpan(),
          Y = xy([
            Z,
            'optionalAccess',
            (F) => F.startChild,
            'call',
            (F) =>
              F({ description: 'execute', op: 'graphql.execute', origin: 'auto.graphql.graphql' }),
          ]);
        xy([D, 'optionalAccess', (F) => F.setSpan, 'call', (F) => F(Y)]);
        let W = I.call(this, ...G);
        if (ou.isThenable(W))
          return W.then((F) => {
            return (
              xy([Y, 'optionalAccess', (J) => J.end, 'call', (J) => J()]),
              xy([D, 'optionalAccess', (J) => J.setSpan, 'call', (J) => J(Z)]),
              F
            );
          });
        return (
          xy([Y, 'optionalAccess', (F) => F.end, 'call', (F) => F()]),
          xy([D, 'optionalAccess', (F) => F.setSpan, 'call', (F) => F(Z)]),
          W
        );
      };
    });
  }
}
F01.__initStatic();
a4A.GraphQL = F01;

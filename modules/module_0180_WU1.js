// Module: WU1
// Params: yBA

var { _optionalChain: _BA } = tA();
Object.defineProperty(yBA, '__esModule', { value: !0 });
var cy = I4(),
  jBA = tA();
function At2(A = {}) {
  return function ({ path: B, type: Q, next: I, rawInput: G }) {
    let D = _BA([
        cy.getClient,
        'call',
        (F) => F(),
        'optionalAccess',
        (F) => F.getOptions,
        'call',
        (F) => F(),
      ]),
      Z = cy.getCurrentScope().getTransaction();
    if (Z) {
      (Z.updateName(`trpc/${B}`),
        Z.setAttribute(cy.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, 'route'),
        (Z.op = 'rpc.server'));
      let F = { procedure_type: Q };
      if (
        A.attachRpcInput !== void 0
          ? A.attachRpcInput
          : _BA([D, 'optionalAccess', (J) => J.sendDefaultPii])
      )
        F.input = jBA.normalize(G);
      Z.setContext('trpc', F);
    }
    function Y(F) {
      if (!F.ok)
        cy.captureException(F.error, {
          mechanism: { handled: !1, data: { function: 'trpcMiddleware' } },
        });
    }
    let W;
    try {
      W = I();
    } catch (F) {
      throw (
        cy.captureException(F, {
          mechanism: { handled: !1, data: { function: 'trpcMiddleware' } },
        }),
        F
      );
    }
    if (jBA.isThenable(W))
      Promise.resolve(W).then(
        (F) => {
          Y(F);
        },
        (F) => {
          cy.captureException(F, {
            mechanism: { handled: !1, data: { function: 'trpcMiddleware' } },
          });
        }
      );
    else Y(W);
    return W;
  };
}
yBA.trpcMiddleware = At2;

// Module: WP
// Params: Nh5,syA

var { defineProperty: G51, getOwnPropertyDescriptor: Yu9, getOwnPropertyNames: Wu9 } = Object,
  Fu9 = Object.prototype.hasOwnProperty,
  I51 = (A, B) => G51(A, 'name', { value: B, configurable: !0 }),
  Ju9 = (A, B) => {
    for (var Q in B) G51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Cu9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Wu9(B))
        if (!Fu9.call(A, G) && G !== Q)
          G51(A, G, { get: () => B[G], enumerable: !(I = Yu9(B, G)) || I.enumerable });
    }
    return A;
  },
  Xu9 = (A) => Cu9(G51({}, '__esModule', { value: !0 }), A),
  lyA = {};
Ju9(lyA, {
  getHostHeaderPlugin: () => Ku9,
  hostHeaderMiddleware: () => nyA,
  hostHeaderMiddlewareOptions: () => ayA,
  resolveHostHeaderConfig: () => iyA,
});
syA.exports = Xu9(lyA);
var Vu9 = cyA();
function iyA(A) {
  return A;
}
I51(iyA, 'resolveHostHeaderConfig');
var nyA = I51(
    (A) => (B) => async (Q) => {
      if (!Vu9.HttpRequest.isInstance(Q.request)) return B(Q);
      let { request: I } = Q,
        { handlerProtocol: G = '' } = A.requestHandler.metadata || {};
      if (G.indexOf('h2') >= 0 && !I.headers[':authority'])
        (delete I.headers.host,
          (I.headers[':authority'] = I.hostname + (I.port ? ':' + I.port : '')));
      else if (!I.headers.host) {
        let D = I.hostname;
        if (I.port != null) D += `:${I.port}`;
        I.headers.host = D;
      }
      return B(Q);
    },
    'hostHeaderMiddleware'
  ),
  ayA = {
    name: 'hostHeaderMiddleware',
    step: 'build',
    priority: 'low',
    tags: ['HOST'],
    override: !0,
  },
  Ku9 = I51(
    (A) => ({
      applyToStack: I51((B) => {
        B.add(nyA(A), ayA);
      }, 'applyToStack'),
    }),
    'getHostHeaderPlugin'
  );

// Module: I9A
// Params: Q9A

Object.defineProperty(Q9A, '__esModule', { value: !0 });
var CE1 = tA(),
  Hh2 = cA1();
function XE1(A, B) {
  let Q;
  return (
    CE1.forEachEnvelopeItem(A, (I, G) => {
      if (B.includes(G)) Q = Array.isArray(I) ? I[1] : void 0;
      return !!Q;
    }),
    Q
  );
}
function zh2(A, B) {
  return (Q) => {
    let I = A(Q);
    return {
      ...I,
      send: async (G) => {
        let D = XE1(G, ['event', 'transaction', 'profile', 'replay_event']);
        if (D) D.release = B;
        return I.send(G);
      },
    };
  };
}
function wh2(A, B) {
  return CE1.createEnvelope(B ? { ...A[0], dsn: B } : A[0], A[1]);
}
function Eh2(A, B) {
  return (Q) => {
    let I = A(Q),
      G = new Map();
    function D(W, F) {
      let J = F ? `${W}:${F}` : W,
        C = G.get(J);
      if (!C) {
        let X = CE1.dsnFromString(W);
        if (!X) return;
        let V = Hh2.getEnvelopeEndpointWithUrlEncodedAuth(X, Q.tunnel);
        ((C = F ? zh2(A, F)({ ...Q, url: V }) : A({ ...Q, url: V })), G.set(J, C));
      }
      return [W, C];
    }
    async function Z(W) {
      function F(X) {
        let V = X && X.length ? X : ['event'];
        return XE1(W, V);
      }
      let J = B({ envelope: W, getEvent: F })
        .map((X) => {
          if (typeof X === 'string') return D(X, void 0);
          else return D(X.dsn, X.release);
        })
        .filter((X) => !!X);
      if (J.length === 0) J.push(['', I]);
      return (await Promise.all(J.map(([X, V]) => V.send(wh2(W, X)))))[0];
    }
    async function Y(W) {
      let F = [await I.flush(W)];
      for (let [, J] of G) F.push(await J.flush(W));
      return F.every((J) => J);
    }
    return { send: Z, flush: Y };
  };
}
Q9A.eventFromEnvelope = XE1;
Q9A.makeMultiplexedTransport = Eh2;

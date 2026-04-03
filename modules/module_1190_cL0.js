// Module: cL0
// Params: Cg

var T16 =
  (Cg && Cg.__importDefault) ||
  function (A) {
    return A && A.__esModule ? A : { default: A };
  };
Object.defineProperty(Cg, '__esModule', { value: !0 });
Cg.parseProxyResponse = void 0;
var P16 = T16(Ic()),
  kZ1 = P16.default('https-proxy-agent:parse-proxy-response');
function S16(A) {
  return new Promise((B, Q) => {
    let I = 0,
      G = [];
    function D() {
      let J = A.read();
      if (J) F(J);
      else A.once('readable', D);
    }
    function Z() {
      (A.removeListener('end', Y), A.removeListener('error', W), A.removeListener('readable', D));
    }
    function Y() {
      (Z(), kZ1('onend'), Q(new Error('Proxy connection ended before receiving CONNECT response')));
    }
    function W(J) {
      (Z(), kZ1('onerror %o', J), Q(J));
    }
    function F(J) {
      (G.push(J), (I += J.length));
      let C = Buffer.concat(G, I),
        X = C.indexOf(`\r
\r
`);
      if (X === -1) {
        (kZ1('have not received end of HTTP headers yet...'), D());
        return;
      }
      let V = C.slice(0, X).toString('ascii').split(`\r
`),
        K = V.shift();
      if (!K) return (A.destroy(), Q(new Error('No header received from proxy CONNECT response')));
      let U = K.split(' '),
        N = +U[1],
        q = U.slice(2).join(' '),
        M = {};
      for (let R of V) {
        if (!R) continue;
        let T = R.indexOf(':');
        if (T === -1)
          return (A.destroy(), Q(new Error(`Invalid header from proxy CONNECT response: "${R}"`)));
        let O = R.slice(0, T).toLowerCase(),
          S = R.slice(T + 1).trimStart(),
          f = M[O];
        if (typeof f === 'string') M[O] = [f, S];
        else if (Array.isArray(f)) f.push(S);
        else M[O] = S;
      }
      (kZ1('got proxy server response: %o %o', K, M),
        Z(),
        B({ connect: { statusCode: N, statusText: q, headers: M }, buffered: C }));
    }
    (A.on('error', W), A.on('end', Y), D());
  });
}
Cg.parseProxyResponse = S16;

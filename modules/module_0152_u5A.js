// Module: u5A
// Params: d5A

Object.defineProperty(d5A, '__esModule', { value: !0 });
var Wa2 = tA();
function q01(...A) {
  Wa2.logger.log('[https-proxy-agent:parse-proxy-response]', ...A);
}
function Fa2(A) {
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
      (Z(), q01('onend'), Q(new Error('Proxy connection ended before receiving CONNECT response')));
    }
    function W(J) {
      (Z(), q01('onerror %o', J), Q(J));
    }
    function F(J) {
      (G.push(J), (I += J.length));
      let C = Buffer.concat(G, I),
        X = C.indexOf(`\r
\r
`);
      if (X === -1) {
        (q01('have not received end of HTTP headers yet...'), D());
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
      (q01('got proxy server response: %o %o', K, M),
        Z(),
        B({ connect: { statusCode: N, statusText: q, headers: M }, buffered: C }));
    }
    (A.on('error', W), A.on('end', Y), D());
  });
}
d5A.parseProxyResponse = Fa2;

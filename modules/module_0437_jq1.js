// Module: jq1
// Params: cO5,cHA

function rq9(A) {
  ((Q.debug = Q),
    (Q.default = Q),
    (Q.coerce = W),
    (Q.disable = Z),
    (Q.enable = G),
    (Q.enabled = Y),
    (Q.humanize = pHA()),
    (Q.destroy = F),
    Object.keys(A).forEach((J) => {
      Q[J] = A[J];
    }),
    (Q.names = []),
    (Q.skips = []),
    (Q.formatters = {}));
  function B(J) {
    let C = 0;
    for (let X = 0; X < J.length; X++) ((C = (C << 5) - C + J.charCodeAt(X)), (C |= 0));
    return Q.colors[Math.abs(C) % Q.colors.length];
  }
  Q.selectColor = B;
  function Q(J) {
    let C,
      X = null,
      V,
      K;
    function U(...N) {
      if (!U.enabled) return;
      let q = U,
        M = Number(new Date()),
        R = M - (C || M);
      if (
        ((q.diff = R),
        (q.prev = C),
        (q.curr = M),
        (C = M),
        (N[0] = Q.coerce(N[0])),
        typeof N[0] !== 'string')
      )
        N.unshift('%O');
      let T = 0;
      ((N[0] = N[0].replace(/%([a-zA-Z%])/g, (S, f) => {
        if (S === '%%') return '%';
        T++;
        let a = Q.formatters[f];
        if (typeof a === 'function') {
          let g = N[T];
          ((S = a.call(q, g)), N.splice(T, 1), T--);
        }
        return S;
      })),
        Q.formatArgs.call(q, N),
        (q.log || Q.log).apply(q, N));
    }
    if (
      ((U.namespace = J),
      (U.useColors = Q.useColors()),
      (U.color = Q.selectColor(J)),
      (U.extend = I),
      (U.destroy = Q.destroy),
      Object.defineProperty(U, 'enabled', {
        enumerable: !0,
        configurable: !1,
        get: () => {
          if (X !== null) return X;
          if (V !== Q.namespaces) ((V = Q.namespaces), (K = Q.enabled(J)));
          return K;
        },
        set: (N) => {
          X = N;
        },
      }),
      typeof Q.init === 'function')
    )
      Q.init(U);
    return U;
  }
  function I(J, C) {
    let X = Q(this.namespace + (typeof C === 'undefined' ? ':' : C) + J);
    return ((X.log = this.log), X);
  }
  function G(J) {
    (Q.save(J), (Q.namespaces = J), (Q.names = []), (Q.skips = []));
    let C = (typeof J === 'string' ? J : '').trim().replace(' ', ',').split(',').filter(Boolean);
    for (let X of C)
      if (X[0] === '-') Q.skips.push(X.slice(1));
      else Q.names.push(X);
  }
  function D(J, C) {
    let X = 0,
      V = 0,
      K = -1,
      U = 0;
    while (X < J.length)
      if (V < C.length && (C[V] === J[X] || C[V] === '*'))
        if (C[V] === '*') ((K = V), (U = X), V++);
        else (X++, V++);
      else if (K !== -1) ((V = K + 1), U++, (X = U));
      else return !1;
    while (V < C.length && C[V] === '*') V++;
    return V === C.length;
  }
  function Z() {
    let J = [...Q.names, ...Q.skips.map((C) => '-' + C)].join(',');
    return (Q.enable(''), J);
  }
  function Y(J) {
    for (let C of Q.skips) if (D(J, C)) return !1;
    for (let C of Q.names) if (D(J, C)) return !0;
    return !1;
  }
  function W(J) {
    if (J instanceof Error) return J.stack || J.message;
    return J;
  }
  function F() {
    console.warn(
      'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
    );
  }
  return (Q.enable(Q.load()), Q);
}
cHA.exports = rq9;

// Module: SE2
// Params: Gr8,PE2

var { warn: pB5, debug: cB5 } = UK1(),
  Dt1 = OE2(),
  { ColSpanCell: lB5, RowSpanCell: iB5 } = Dt1;
(function () {
  function A(V, K) {
    if (V[K] > 0) return A(V, K + 1);
    return K;
  }
  function B(V) {
    let K = {};
    V.forEach(function (U, N) {
      let q = 0;
      (U.forEach(function (M) {
        ((M.y = N), (M.x = N ? A(K, q) : q));
        let R = M.rowSpan || 1,
          T = M.colSpan || 1;
        if (R > 1) for (let O = 0; O < T; O++) K[M.x + O] = R;
        q = M.x + T;
      }),
        Object.keys(K).forEach((M) => {
          if ((K[M]--, K[M] < 1)) delete K[M];
        }));
    });
  }
  function Q(V) {
    let K = 0;
    return (
      V.forEach(function (U) {
        U.forEach(function (N) {
          K = Math.max(K, N.x + (N.colSpan || 1));
        });
      }),
      K
    );
  }
  function I(V) {
    return V.length;
  }
  function G(V, K) {
    let U = V.y,
      N = V.y - 1 + (V.rowSpan || 1),
      q = K.y,
      M = K.y - 1 + (K.rowSpan || 1),
      R = !(U > M || q > N),
      T = V.x,
      O = V.x - 1 + (V.colSpan || 1),
      S = K.x,
      f = K.x - 1 + (K.colSpan || 1),
      a = !(T > f || S > O);
    return R && a;
  }
  function D(V, K, U) {
    let N = Math.min(V.length - 1, U),
      q = { x: K, y: U };
    for (let M = 0; M <= N; M++) {
      let R = V[M];
      for (let T = 0; T < R.length; T++) if (G(q, R[T])) return !0;
    }
    return !1;
  }
  function Z(V, K, U, N) {
    for (let q = U; q < N; q++) if (D(V, q, K)) return !1;
    return !0;
  }
  function Y(V) {
    V.forEach(function (K, U) {
      K.forEach(function (N) {
        for (let q = 1; q < N.rowSpan; q++) {
          let M = new iB5(N);
          ((M.x = N.x), (M.y = N.y + q), (M.colSpan = N.colSpan), F(M, V[U + q]));
        }
      });
    });
  }
  function W(V) {
    for (let K = V.length - 1; K >= 0; K--) {
      let U = V[K];
      for (let N = 0; N < U.length; N++) {
        let q = U[N];
        for (let M = 1; M < q.colSpan; M++) {
          let R = new lB5();
          ((R.x = q.x + M), (R.y = q.y), U.splice(N + 1, 0, R));
        }
      }
    }
  }
  function F(V, K) {
    let U = 0;
    while (U < K.length && K[U].x < V.x) U++;
    K.splice(U, 0, V);
  }
  function J(V) {
    let K = I(V),
      U = Q(V);
    cB5(`Max rows: ${K}; Max cols: ${U}`);
    for (let N = 0; N < K; N++)
      for (let q = 0; q < U; q++)
        if (!D(V, q, N)) {
          let M = { x: q, y: N, colSpan: 1, rowSpan: 1 };
          q++;
          while (q < U && !D(V, q, N)) (M.colSpan++, q++);
          let R = N + 1;
          while (R < K && Z(V, R, M.x, M.x + M.colSpan)) (M.rowSpan++, R++);
          let T = new Dt1(M);
          ((T.x = M.x), (T.y = M.y), pB5(`Missing cell at ${T.y}-${T.x}.`), F(T, V[N]));
        }
  }
  function C(V) {
    return V.map(function (K) {
      if (!Array.isArray(K)) {
        let U = Object.keys(K)[0];
        if (((K = K[U]), Array.isArray(K))) ((K = K.slice()), K.unshift(U));
        else K = [U, K];
      }
      return K.map(function (U) {
        return new Dt1(U);
      });
    });
  }
  function X(V) {
    let K = C(V);
    return (B(K), J(K), Y(K), W(K), K);
  }
  PE2.exports = {
    makeTableLayout: X,
    layoutTable: B,
    addRowSpanCells: Y,
    maxWidth: Q,
    fillInTable: J,
    computeWidths: TE2('colSpan', 'desiredWidth', 'x', 1),
    computeHeights: TE2('rowSpan', 'desiredHeight', 'y', 1),
  };
})();
function TE2(A, B, Q, I) {
  return function (G, D) {
    let Z = [],
      Y = [],
      W = {};
    (D.forEach(function (F) {
      F.forEach(function (J) {
        if ((J[A] || 1) > 1) Y.push(J);
        else Z[J[Q]] = Math.max(Z[J[Q]] || 0, J[B] || 0, I);
      });
    }),
      G.forEach(function (F, J) {
        if (typeof F === 'number') Z[J] = F;
      }));
    for (let F = Y.length - 1; F >= 0; F--) {
      let J = Y[F],
        C = J[A],
        X = J[Q],
        V = Z[X],
        K = typeof G[X] === 'number' ? 0 : 1;
      if (typeof V === 'number') {
        for (let U = 1; U < C; U++) if (((V += 1 + Z[X + U]), typeof G[X + U] !== 'number')) K++;
      } else if (((V = B === 'desiredWidth' ? J.desiredWidth - 1 : 1), !W[X] || W[X] < V)) W[X] = V;
      if (J[B] > V) {
        let U = 0;
        while (K > 0 && J[B] > V) {
          if (typeof G[X + U] !== 'number') {
            let N = Math.round((J[B] - V) / K);
            ((V += N), (Z[X + U] += N), K--);
          }
          U++;
        }
      }
    }
    Object.assign(G, Z, W);
    for (let F = 0; F < G.length; F++) G[F] = Math.max(I, G[F] || 0);
  };
}

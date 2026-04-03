// Module: yz0
// Params: aW8,jz0

var { defineProperty: HD1, getOwnPropertyDescriptor: Ju4, getOwnPropertyNames: Cu4 } = Object,
  Xu4 = Object.prototype.hasOwnProperty,
  iJ = (A, B) => HD1(A, 'name', { value: B, configurable: !0 }),
  Vu4 = (A, B) => {
    for (var Q in B) HD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ku4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Cu4(B))
        if (!Xu4.call(A, G) && G !== Q)
          HD1(A, G, { get: () => B[G], enumerable: !(I = Ju4(B, G)) || I.enumerable });
    }
    return A;
  },
  Hu4 = (A) => Ku4(HD1({}, '__esModule', { value: !0 }), A),
  _z0 = {};
Vu4(_z0, { constructStack: () => $v1 });
jz0.exports = Hu4(_z0);
var HS = iJ((A, B) => {
    let Q = [];
    if (A) Q.push(A);
    if (B) for (let I of B) Q.push(I);
    return Q;
  }, 'getAllAliases'),
  WL = iJ((A, B) => {
    return `${A || 'anonymous'}${B && B.length > 0 ? ` (a.k.a. ${B.join(',')})` : ''}`;
  }, 'getMiddlewareNameWithAliases'),
  $v1 = iJ(() => {
    let A = [],
      B = [],
      Q = !1,
      I = new Set(),
      G = iJ(
        (C) =>
          C.sort(
            (X, V) =>
              Pz0[V.step] - Pz0[X.step] || Sz0[V.priority || 'normal'] - Sz0[X.priority || 'normal']
          ),
        'sort'
      ),
      D = iJ((C) => {
        let X = !1,
          V = iJ((K) => {
            let U = HS(K.name, K.aliases);
            if (U.includes(C)) {
              X = !0;
              for (let N of U) I.delete(N);
              return !1;
            }
            return !0;
          }, 'filterCb');
        return ((A = A.filter(V)), (B = B.filter(V)), X);
      }, 'removeByName'),
      Z = iJ((C) => {
        let X = !1,
          V = iJ((K) => {
            if (K.middleware === C) {
              X = !0;
              for (let U of HS(K.name, K.aliases)) I.delete(U);
              return !1;
            }
            return !0;
          }, 'filterCb');
        return ((A = A.filter(V)), (B = B.filter(V)), X);
      }, 'removeByReference'),
      Y = iJ((C) => {
        var X;
        return (
          A.forEach((V) => {
            C.add(V.middleware, { ...V });
          }),
          B.forEach((V) => {
            C.addRelativeTo(V.middleware, { ...V });
          }),
          (X = C.identifyOnResolve) == null || X.call(C, J.identifyOnResolve()),
          C
        );
      }, 'cloneTo'),
      W = iJ((C) => {
        let X = [];
        return (
          C.before.forEach((V) => {
            if (V.before.length === 0 && V.after.length === 0) X.push(V);
            else X.push(...W(V));
          }),
          X.push(C),
          C.after.reverse().forEach((V) => {
            if (V.before.length === 0 && V.after.length === 0) X.push(V);
            else X.push(...W(V));
          }),
          X
        );
      }, 'expandRelativeMiddlewareList'),
      F = iJ((C = !1) => {
        let X = [],
          V = [],
          K = {};
        return (
          A.forEach((N) => {
            let q = { ...N, before: [], after: [] };
            for (let M of HS(q.name, q.aliases)) K[M] = q;
            X.push(q);
          }),
          B.forEach((N) => {
            let q = { ...N, before: [], after: [] };
            for (let M of HS(q.name, q.aliases)) K[M] = q;
            V.push(q);
          }),
          V.forEach((N) => {
            if (N.toMiddleware) {
              let q = K[N.toMiddleware];
              if (q === void 0) {
                if (C) return;
                throw new Error(
                  `${N.toMiddleware} is not found when adding ${WL(N.name, N.aliases)} middleware ${N.relation} ${N.toMiddleware}`
                );
              }
              if (N.relation === 'after') q.after.push(N);
              if (N.relation === 'before') q.before.push(N);
            }
          }),
          G(X)
            .map(W)
            .reduce((N, q) => {
              return (N.push(...q), N);
            }, [])
        );
      }, 'getMiddlewareList'),
      J = {
        add: (C, X = {}) => {
          let { name: V, override: K, aliases: U } = X,
            N = { step: 'initialize', priority: 'normal', middleware: C, ...X },
            q = HS(V, U);
          if (q.length > 0) {
            if (q.some((M) => I.has(M))) {
              if (!K) throw new Error(`Duplicate middleware name '${WL(V, U)}'`);
              for (let M of q) {
                let R = A.findIndex((O) => {
                  var S;
                  return (
                    O.name === M || ((S = O.aliases) == null ? void 0 : S.some((f) => f === M))
                  );
                });
                if (R === -1) continue;
                let T = A[R];
                if (T.step !== N.step || N.priority !== T.priority)
                  throw new Error(
                    `"${WL(T.name, T.aliases)}" middleware with ${T.priority} priority in ${T.step} step cannot be overridden by "${WL(V, U)}" middleware with ${N.priority} priority in ${N.step} step.`
                  );
                A.splice(R, 1);
              }
            }
            for (let M of q) I.add(M);
          }
          A.push(N);
        },
        addRelativeTo: (C, X) => {
          let { name: V, override: K, aliases: U } = X,
            N = { middleware: C, ...X },
            q = HS(V, U);
          if (q.length > 0) {
            if (q.some((M) => I.has(M))) {
              if (!K) throw new Error(`Duplicate middleware name '${WL(V, U)}'`);
              for (let M of q) {
                let R = B.findIndex((O) => {
                  var S;
                  return (
                    O.name === M || ((S = O.aliases) == null ? void 0 : S.some((f) => f === M))
                  );
                });
                if (R === -1) continue;
                let T = B[R];
                if (T.toMiddleware !== N.toMiddleware || T.relation !== N.relation)
                  throw new Error(
                    `"${WL(T.name, T.aliases)}" middleware ${T.relation} "${T.toMiddleware}" middleware cannot be overridden by "${WL(V, U)}" middleware ${N.relation} "${N.toMiddleware}" middleware.`
                  );
                B.splice(R, 1);
              }
            }
            for (let M of q) I.add(M);
          }
          B.push(N);
        },
        clone: () => Y($v1()),
        use: (C) => {
          C.applyToStack(J);
        },
        remove: (C) => {
          if (typeof C === 'string') return D(C);
          else return Z(C);
        },
        removeByTag: (C) => {
          let X = !1,
            V = iJ((K) => {
              let { tags: U, name: N, aliases: q } = K;
              if (U && U.includes(C)) {
                let M = HS(N, q);
                for (let R of M) I.delete(R);
                return ((X = !0), !1);
              }
              return !0;
            }, 'filterCb');
          return ((A = A.filter(V)), (B = B.filter(V)), X);
        },
        concat: (C) => {
          var X;
          let V = Y($v1());
          return (
            V.use(C),
            V.identifyOnResolve(
              Q ||
                V.identifyOnResolve() ||
                (((X = C.identifyOnResolve) == null ? void 0 : X.call(C)) ?? !1)
            ),
            V
          );
        },
        applyToStack: Y,
        identify: () => {
          return F(!0).map((C) => {
            let X = C.step ?? C.relation + ' ' + C.toMiddleware;
            return WL(C.name, C.aliases) + ' - ' + X;
          });
        },
        identifyOnResolve(C) {
          if (typeof C === 'boolean') Q = C;
          return Q;
        },
        resolve: (C, X) => {
          for (let V of F()
            .map((K) => K.middleware)
            .reverse())
            C = V(C, X);
          if (Q) console.log(J.identify());
          return C;
        },
      };
    return J;
  }, 'constructStack'),
  Pz0 = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
  Sz0 = { high: 3, normal: 2, low: 1 };

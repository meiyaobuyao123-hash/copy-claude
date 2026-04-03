// Module: ZU
// Params: Gd5,chA

var { defineProperty: V81, getOwnPropertyDescriptor: Co9, getOwnPropertyNames: Xo9 } = Object,
  Vo9 = Object.prototype.hasOwnProperty,
  MJ = (A, B) => V81(A, 'name', { value: B, configurable: !0 }),
  Ko9 = (A, B) => {
    for (var Q in B) V81(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ho9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Xo9(B))
        if (!Vo9.call(A, G) && G !== Q)
          V81(A, G, { get: () => B[G], enumerable: !(I = Co9(B, G)) || I.enumerable });
    }
    return A;
  },
  zo9 = (A) => Ho9(V81({}, '__esModule', { value: !0 }), A),
  phA = {};
Ko9(phA, { constructStack: () => oO1 });
chA.exports = zo9(phA);
var VP = MJ((A, B) => {
    let Q = [];
    if (A) Q.push(A);
    if (B) for (let I of B) Q.push(I);
    return Q;
  }, 'getAllAliases'),
  YM = MJ((A, B) => {
    return `${A || 'anonymous'}${B && B.length > 0 ? ` (a.k.a. ${B.join(',')})` : ''}`;
  }, 'getMiddlewareNameWithAliases'),
  oO1 = MJ(() => {
    let A = [],
      B = [],
      Q = !1,
      I = new Set(),
      G = MJ(
        (C) =>
          C.sort(
            (X, V) =>
              dhA[V.step] - dhA[X.step] || uhA[V.priority || 'normal'] - uhA[X.priority || 'normal']
          ),
        'sort'
      ),
      D = MJ((C) => {
        let X = !1,
          V = MJ((K) => {
            let U = VP(K.name, K.aliases);
            if (U.includes(C)) {
              X = !0;
              for (let N of U) I.delete(N);
              return !1;
            }
            return !0;
          }, 'filterCb');
        return ((A = A.filter(V)), (B = B.filter(V)), X);
      }, 'removeByName'),
      Z = MJ((C) => {
        let X = !1,
          V = MJ((K) => {
            if (K.middleware === C) {
              X = !0;
              for (let U of VP(K.name, K.aliases)) I.delete(U);
              return !1;
            }
            return !0;
          }, 'filterCb');
        return ((A = A.filter(V)), (B = B.filter(V)), X);
      }, 'removeByReference'),
      Y = MJ((C) => {
        return (
          A.forEach((X) => {
            C.add(X.middleware, { ...X });
          }),
          B.forEach((X) => {
            C.addRelativeTo(X.middleware, { ...X });
          }),
          C.identifyOnResolve?.(J.identifyOnResolve()),
          C
        );
      }, 'cloneTo'),
      W = MJ((C) => {
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
      F = MJ((C = !1) => {
        let X = [],
          V = [],
          K = {};
        return (
          A.forEach((N) => {
            let q = { ...N, before: [], after: [] };
            for (let M of VP(q.name, q.aliases)) K[M] = q;
            X.push(q);
          }),
          B.forEach((N) => {
            let q = { ...N, before: [], after: [] };
            for (let M of VP(q.name, q.aliases)) K[M] = q;
            V.push(q);
          }),
          V.forEach((N) => {
            if (N.toMiddleware) {
              let q = K[N.toMiddleware];
              if (q === void 0) {
                if (C) return;
                throw new Error(
                  `${N.toMiddleware} is not found when adding ${YM(N.name, N.aliases)} middleware ${N.relation} ${N.toMiddleware}`
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
            q = VP(V, U);
          if (q.length > 0) {
            if (q.some((M) => I.has(M))) {
              if (!K) throw new Error(`Duplicate middleware name '${YM(V, U)}'`);
              for (let M of q) {
                let R = A.findIndex((O) => O.name === M || O.aliases?.some((S) => S === M));
                if (R === -1) continue;
                let T = A[R];
                if (T.step !== N.step || N.priority !== T.priority)
                  throw new Error(
                    `"${YM(T.name, T.aliases)}" middleware with ${T.priority} priority in ${T.step} step cannot be overridden by "${YM(V, U)}" middleware with ${N.priority} priority in ${N.step} step.`
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
            q = VP(V, U);
          if (q.length > 0) {
            if (q.some((M) => I.has(M))) {
              if (!K) throw new Error(`Duplicate middleware name '${YM(V, U)}'`);
              for (let M of q) {
                let R = B.findIndex((O) => O.name === M || O.aliases?.some((S) => S === M));
                if (R === -1) continue;
                let T = B[R];
                if (T.toMiddleware !== N.toMiddleware || T.relation !== N.relation)
                  throw new Error(
                    `"${YM(T.name, T.aliases)}" middleware ${T.relation} "${T.toMiddleware}" middleware cannot be overridden by "${YM(V, U)}" middleware ${N.relation} "${N.toMiddleware}" middleware.`
                  );
                B.splice(R, 1);
              }
            }
            for (let M of q) I.add(M);
          }
          B.push(N);
        },
        clone: () => Y(oO1()),
        use: (C) => {
          C.applyToStack(J);
        },
        remove: (C) => {
          if (typeof C === 'string') return D(C);
          else return Z(C);
        },
        removeByTag: (C) => {
          let X = !1,
            V = MJ((K) => {
              let { tags: U, name: N, aliases: q } = K;
              if (U && U.includes(C)) {
                let M = VP(N, q);
                for (let R of M) I.delete(R);
                return ((X = !0), !1);
              }
              return !0;
            }, 'filterCb');
          return ((A = A.filter(V)), (B = B.filter(V)), X);
        },
        concat: (C) => {
          let X = Y(oO1());
          return (
            X.use(C),
            X.identifyOnResolve(Q || X.identifyOnResolve() || (C.identifyOnResolve?.() ?? !1)),
            X
          );
        },
        applyToStack: Y,
        identify: () => {
          return F(!0).map((C) => {
            let X = C.step ?? C.relation + ' ' + C.toMiddleware;
            return YM(C.name, C.aliases) + ' - ' + X;
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
  dhA = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
  uhA = { high: 3, normal: 2, low: 1 };

// Module: YZ0
// Params: VG8,ZZ0

var Nb =
    process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys',
  BZ0 = D1('path'),
  rS4 = Nb ? ';' : ':',
  QZ0 = AZ0(),
  IZ0 = (A) => Object.assign(new Error(`not found: ${A}`), { code: 'ENOENT' }),
  GZ0 = (A, B) => {
    let Q = B.colon || rS4,
      I =
        A.match(/\//) || (Nb && A.match(/\\/))
          ? ['']
          : [...(Nb ? [process.cwd()] : []), ...(B.path || process.env.PATH || '').split(Q)],
      G = Nb ? B.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '',
      D = Nb ? G.split(Q) : [''];
    if (Nb) {
      if (A.indexOf('.') !== -1 && D[0] !== '') D.unshift('');
    }
    return { pathEnv: I, pathExt: D, pathExtExe: G };
  },
  DZ0 = (A, B, Q) => {
    if (typeof B === 'function') ((Q = B), (B = {}));
    if (!B) B = {};
    let { pathEnv: I, pathExt: G, pathExtExe: D } = GZ0(A, B),
      Z = [],
      Y = (F) =>
        new Promise((J, C) => {
          if (F === I.length) return B.all && Z.length ? J(Z) : C(IZ0(A));
          let X = I[F],
            V = /^".*"$/.test(X) ? X.slice(1, -1) : X,
            K = BZ0.join(V, A),
            U = !V && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + K : K;
          J(W(U, F, 0));
        }),
      W = (F, J, C) =>
        new Promise((X, V) => {
          if (C === G.length) return X(Y(J + 1));
          let K = G[C];
          QZ0(F + K, { pathExt: D }, (U, N) => {
            if (!U && N)
              if (B.all) Z.push(F + K);
              else return X(F + K);
            return X(W(F, J, C + 1));
          });
        });
    return Q ? Y(0).then((F) => Q(null, F), Q) : Y(0);
  },
  oS4 = (A, B) => {
    B = B || {};
    let { pathEnv: Q, pathExt: I, pathExtExe: G } = GZ0(A, B),
      D = [];
    for (let Z = 0; Z < Q.length; Z++) {
      let Y = Q[Z],
        W = /^".*"$/.test(Y) ? Y.slice(1, -1) : Y,
        F = BZ0.join(W, A),
        J = !W && /^\.[\\\/]/.test(A) ? A.slice(0, 2) + F : F;
      for (let C = 0; C < I.length; C++) {
        let X = J + I[C];
        try {
          if (QZ0.sync(X, { pathExt: G }))
            if (B.all) D.push(X);
            else return X;
        } catch (V) {}
      }
    }
    if (B.all && D.length) return D;
    if (B.nothrow) return null;
    throw IZ0(A);
  };
ZZ0.exports = DZ0;
DZ0.sync = oS4;

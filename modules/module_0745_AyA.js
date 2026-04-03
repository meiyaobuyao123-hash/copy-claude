// Module: AyA
// Params: kg5,ejA

var iq = D1('constants'),
  cm9 = process.cwd,
  p61 = null,
  lm9 = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function () {
  if (!p61) p61 = cm9.call(process);
  return p61;
};
try {
  process.cwd();
} catch (A) {}
if (typeof process.chdir === 'function') {
  if (
    ((c61 = process.chdir),
    (process.chdir = function (A) {
      ((p61 = null), c61.call(process, A));
    }),
    Object.setPrototypeOf)
  )
    Object.setPrototypeOf(process.chdir, c61);
}
var c61;
ejA.exports = im9;
function im9(A) {
  if (iq.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) B(A);
  if (!A.lutimes) Q(A);
  if (
    ((A.chown = D(A.chown)),
    (A.fchown = D(A.fchown)),
    (A.lchown = D(A.lchown)),
    (A.chmod = I(A.chmod)),
    (A.fchmod = I(A.fchmod)),
    (A.lchmod = I(A.lchmod)),
    (A.chownSync = Z(A.chownSync)),
    (A.fchownSync = Z(A.fchownSync)),
    (A.lchownSync = Z(A.lchownSync)),
    (A.chmodSync = G(A.chmodSync)),
    (A.fchmodSync = G(A.fchmodSync)),
    (A.lchmodSync = G(A.lchmodSync)),
    (A.stat = Y(A.stat)),
    (A.fstat = Y(A.fstat)),
    (A.lstat = Y(A.lstat)),
    (A.statSync = W(A.statSync)),
    (A.fstatSync = W(A.fstatSync)),
    (A.lstatSync = W(A.lstatSync)),
    A.chmod && !A.lchmod)
  )
    ((A.lchmod = function (J, C, X) {
      if (X) process.nextTick(X);
    }),
      (A.lchmodSync = function () {}));
  if (A.chown && !A.lchown)
    ((A.lchown = function (J, C, X, V) {
      if (V) process.nextTick(V);
    }),
      (A.lchownSync = function () {}));
  if (lm9 === 'win32')
    A.rename =
      typeof A.rename !== 'function'
        ? A.rename
        : (function (J) {
            function C(X, V, K) {
              var U = Date.now(),
                N = 0;
              J(X, V, function q(M) {
                if (
                  M &&
                  (M.code === 'EACCES' || M.code === 'EPERM' || M.code === 'EBUSY') &&
                  Date.now() - U < 60000
                ) {
                  if (
                    (setTimeout(function () {
                      A.stat(V, function (R, T) {
                        if (R && R.code === 'ENOENT') J(X, V, q);
                        else K(M);
                      });
                    }, N),
                    N < 100)
                  )
                    N += 10;
                  return;
                }
                if (K) K(M);
              });
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(C, J);
            return C;
          })(A.rename);
  ((A.read =
    typeof A.read !== 'function'
      ? A.read
      : (function (J) {
          function C(X, V, K, U, N, q) {
            var M;
            if (q && typeof q === 'function') {
              var R = 0;
              M = function (T, O, S) {
                if (T && T.code === 'EAGAIN' && R < 10) return (R++, J.call(A, X, V, K, U, N, M));
                q.apply(this, arguments);
              };
            }
            return J.call(A, X, V, K, U, N, M);
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(C, J);
          return C;
        })(A.read)),
    (A.readSync =
      typeof A.readSync !== 'function'
        ? A.readSync
        : (function (J) {
            return function (C, X, V, K, U) {
              var N = 0;
              while (!0)
                try {
                  return J.call(A, C, X, V, K, U);
                } catch (q) {
                  if (q.code === 'EAGAIN' && N < 10) {
                    N++;
                    continue;
                  }
                  throw q;
                }
            };
          })(A.readSync)));
  function B(J) {
    ((J.lchmod = function (C, X, V) {
      J.open(C, iq.O_WRONLY | iq.O_SYMLINK, X, function (K, U) {
        if (K) {
          if (V) V(K);
          return;
        }
        J.fchmod(U, X, function (N) {
          J.close(U, function (q) {
            if (V) V(N || q);
          });
        });
      });
    }),
      (J.lchmodSync = function (C, X) {
        var V = J.openSync(C, iq.O_WRONLY | iq.O_SYMLINK, X),
          K = !0,
          U;
        try {
          ((U = J.fchmodSync(V, X)), (K = !1));
        } finally {
          if (K)
            try {
              J.closeSync(V);
            } catch (N) {}
          else J.closeSync(V);
        }
        return U;
      }));
  }
  function Q(J) {
    if (iq.hasOwnProperty('O_SYMLINK') && J.futimes)
      ((J.lutimes = function (C, X, V, K) {
        J.open(C, iq.O_SYMLINK, function (U, N) {
          if (U) {
            if (K) K(U);
            return;
          }
          J.futimes(N, X, V, function (q) {
            J.close(N, function (M) {
              if (K) K(q || M);
            });
          });
        });
      }),
        (J.lutimesSync = function (C, X, V) {
          var K = J.openSync(C, iq.O_SYMLINK),
            U,
            N = !0;
          try {
            ((U = J.futimesSync(K, X, V)), (N = !1));
          } finally {
            if (N)
              try {
                J.closeSync(K);
              } catch (q) {}
            else J.closeSync(K);
          }
          return U;
        }));
    else if (J.futimes)
      ((J.lutimes = function (C, X, V, K) {
        if (K) process.nextTick(K);
      }),
        (J.lutimesSync = function () {}));
  }
  function I(J) {
    if (!J) return J;
    return function (C, X, V) {
      return J.call(A, C, X, function (K) {
        if (F(K)) K = null;
        if (V) V.apply(this, arguments);
      });
    };
  }
  function G(J) {
    if (!J) return J;
    return function (C, X) {
      try {
        return J.call(A, C, X);
      } catch (V) {
        if (!F(V)) throw V;
      }
    };
  }
  function D(J) {
    if (!J) return J;
    return function (C, X, V, K) {
      return J.call(A, C, X, V, function (U) {
        if (F(U)) U = null;
        if (K) K.apply(this, arguments);
      });
    };
  }
  function Z(J) {
    if (!J) return J;
    return function (C, X, V) {
      try {
        return J.call(A, C, X, V);
      } catch (K) {
        if (!F(K)) throw K;
      }
    };
  }
  function Y(J) {
    if (!J) return J;
    return function (C, X, V) {
      if (typeof X === 'function') ((V = X), (X = null));
      function K(U, N) {
        if (N) {
          if (N.uid < 0) N.uid += 4294967296;
          if (N.gid < 0) N.gid += 4294967296;
        }
        if (V) V.apply(this, arguments);
      }
      return X ? J.call(A, C, X, K) : J.call(A, C, K);
    };
  }
  function W(J) {
    if (!J) return J;
    return function (C, X) {
      var V = X ? J.call(A, C, X) : J.call(A, C);
      if (V) {
        if (V.uid < 0) V.uid += 4294967296;
        if (V.gid < 0) V.gid += 4294967296;
      }
      return V;
    };
  }
  function F(J) {
    if (!J) return !0;
    if (J.code === 'ENOSYS') return !0;
    var C = !process.getuid || process.getuid() !== 0;
    if (C) {
      if (J.code === 'EINVAL' || J.code === 'EPERM') return !0;
    }
    return !1;
  }
}

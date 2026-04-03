// Module: v3A
// Params: f3A

Object.defineProperty(f3A, '__esModule', { value: !0 });
var y3A = I4(),
  j3A = tA(),
  k3A = 'RewriteFrames',
  pe2 = (A = {}) => {
    let B = A.root,
      Q = A.prefix || 'app:///',
      I =
        A.iteratee ||
        ((Z) => {
          if (!Z.filename) return Z;
          let Y =
              /^[a-zA-Z]:\\/.test(Z.filename) ||
              (Z.filename.includes('\\') && !Z.filename.includes('/')),
            W = /^\//.test(Z.filename);
          if (Y || W) {
            let F = Y ? Z.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : Z.filename,
              J = B ? j3A.relative(B, F) : j3A.basename(F);
            Z.filename = `${Q}${J}`;
          }
          return Z;
        });
    function G(Z) {
      try {
        return {
          ...Z,
          exception: {
            ...Z.exception,
            values: Z.exception.values.map((Y) => ({
              ...Y,
              ...(Y.stacktrace && { stacktrace: D(Y.stacktrace) }),
            })),
          },
        };
      } catch (Y) {
        return Z;
      }
    }
    function D(Z) {
      return { ...Z, frames: Z && Z.frames && Z.frames.map((Y) => I(Y)) };
    }
    return {
      name: k3A,
      setupOnce() {},
      processEvent(Z) {
        let Y = Z;
        if (Z.exception && Array.isArray(Z.exception.values)) Y = G(Y);
        return Y;
      },
    };
  },
  x3A = y3A.defineIntegration(pe2),
  ce2 = y3A.convertIntegrationFnToClass(k3A, x3A);
f3A.RewriteFrames = ce2;
f3A.rewriteFramesIntegration = x3A;

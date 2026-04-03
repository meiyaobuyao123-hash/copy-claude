// Module: NyA
// Params: zd9,Vl

var Jd9 = D1('path'),
  lR1 = bR1(),
  Cd9 = CyA(),
  Xd9 = VyA(),
  zyA = HyA(),
  AU = {};
function Xl(A, B) {
  return B.lockfilePath || `${A}.lock`;
}
function iR1(A, B, Q) {
  if (!B.realpath) return Q(null, Jd9.resolve(A));
  B.fs.realpath(A, Q);
}
function cR1(A, B, Q) {
  let I = Xl(A, B);
  B.fs.mkdir(I, (G) => {
    if (!G)
      return zyA.probe(I, B.fs, (D, Z, Y) => {
        if (D) return (B.fs.rmdir(I, () => {}), Q(D));
        Q(null, Z, Y);
      });
    if (G.code !== 'EEXIST') return Q(G);
    if (B.stale <= 0)
      return Q(
        Object.assign(new Error('Lock file is already being held'), { code: 'ELOCKED', file: A })
      );
    B.fs.stat(I, (D, Z) => {
      if (D) {
        if (D.code === 'ENOENT') return cR1(A, { ...B, stale: 0 }, Q);
        return Q(D);
      }
      if (!wyA(Z, B))
        return Q(
          Object.assign(new Error('Lock file is already being held'), { code: 'ELOCKED', file: A })
        );
      EyA(A, B, (Y) => {
        if (Y) return Q(Y);
        cR1(A, { ...B, stale: 0 }, Q);
      });
    });
  });
}
function wyA(A, B) {
  return A.mtime.getTime() < Date.now() - B.stale;
}
function EyA(A, B, Q) {
  B.fs.rmdir(Xl(A, B), (I) => {
    if (I && I.code !== 'ENOENT') return Q(I);
    Q();
  });
}
function o61(A, B) {
  let Q = AU[A];
  if (Q.updateTimeout) return;
  if (
    ((Q.updateDelay = Q.updateDelay || B.update),
    (Q.updateTimeout = setTimeout(() => {
      ((Q.updateTimeout = null),
        B.fs.stat(Q.lockfilePath, (I, G) => {
          let D = Q.lastUpdate + B.stale < Date.now();
          if (I) {
            if (I.code === 'ENOENT' || D)
              return pR1(A, Q, Object.assign(I, { code: 'ECOMPROMISED' }));
            return ((Q.updateDelay = 1000), o61(A, B));
          }
          if (Q.mtime.getTime() !== G.mtime.getTime())
            return pR1(
              A,
              Q,
              Object.assign(new Error('Unable to update lock within the stale threshold'), {
                code: 'ECOMPROMISED',
              })
            );
          let Y = zyA.getMtime(Q.mtimePrecision);
          B.fs.utimes(Q.lockfilePath, Y, Y, (W) => {
            let F = Q.lastUpdate + B.stale < Date.now();
            if (Q.released) return;
            if (W) {
              if (W.code === 'ENOENT' || F)
                return pR1(A, Q, Object.assign(W, { code: 'ECOMPROMISED' }));
              return ((Q.updateDelay = 1000), o61(A, B));
            }
            ((Q.mtime = Y), (Q.lastUpdate = Date.now()), (Q.updateDelay = null), o61(A, B));
          });
        }));
    }, Q.updateDelay)),
    Q.updateTimeout.unref)
  )
    Q.updateTimeout.unref();
}
function pR1(A, B, Q) {
  if (((B.released = !0), B.updateTimeout)) clearTimeout(B.updateTimeout);
  if (AU[A] === B) delete AU[A];
  B.options.onCompromised(Q);
}
function Vd9(A, B, Q) {
  ((B = {
    stale: 1e4,
    update: null,
    realpath: !0,
    retries: 0,
    fs: lR1,
    onCompromised: (I) => {
      throw I;
    },
    ...B,
  }),
    (B.retries = B.retries || 0),
    (B.retries = typeof B.retries === 'number' ? { retries: B.retries } : B.retries),
    (B.stale = Math.max(B.stale || 0, 2000)),
    (B.update = B.update == null ? B.stale / 2 : B.update || 0),
    (B.update = Math.max(Math.min(B.update, B.stale / 2), 1000)),
    iR1(A, B, (I, G) => {
      if (I) return Q(I);
      let D = Cd9.operation(B.retries);
      D.attempt(() => {
        cR1(G, B, (Z, Y, W) => {
          if (D.retry(Z)) return;
          if (Z) return Q(D.mainError());
          let F = (AU[G] = {
            lockfilePath: Xl(G, B),
            mtime: Y,
            mtimePrecision: W,
            options: B,
            lastUpdate: Date.now(),
          });
          (o61(G, B),
            Q(null, (J) => {
              if (F.released)
                return (
                  J &&
                  J(Object.assign(new Error('Lock is already released'), { code: 'ERELEASED' }))
                );
              UyA(G, { ...B, realpath: !1 }, J);
            }));
        });
      });
    }));
}
function UyA(A, B, Q) {
  ((B = { fs: lR1, realpath: !0, ...B }),
    iR1(A, B, (I, G) => {
      if (I) return Q(I);
      let D = AU[G];
      if (!D)
        return Q(
          Object.assign(new Error('Lock is not acquired/owned by you'), { code: 'ENOTACQUIRED' })
        );
      (D.updateTimeout && clearTimeout(D.updateTimeout),
        (D.released = !0),
        delete AU[G],
        EyA(G, B, Q));
    }));
}
function Kd9(A, B, Q) {
  ((B = { stale: 1e4, realpath: !0, fs: lR1, ...B }),
    (B.stale = Math.max(B.stale || 0, 2000)),
    iR1(A, B, (I, G) => {
      if (I) return Q(I);
      B.fs.stat(Xl(G, B), (D, Z) => {
        if (D) return D.code === 'ENOENT' ? Q(null, !1) : Q(D);
        return Q(null, !wyA(Z, B));
      });
    }));
}
function Hd9() {
  return AU;
}
Xd9(() => {
  for (let A in AU) {
    let B = AU[A].options;
    try {
      B.fs.rmdirSync(Xl(A, B));
    } catch (Q) {}
  }
});
zd9.lock = Vd9;
zd9.unlock = UyA;
zd9.check = Kd9;
zd9.getLocks = Hd9;

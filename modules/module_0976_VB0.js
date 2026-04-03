// Module: VB0
// Params: Eo5,cv

var gB = global.process,
  sP = function (A) {
    return (
      A &&
      typeof A === 'object' &&
      typeof A.removeListener === 'function' &&
      typeof A.emit === 'function' &&
      typeof A.reallyExit === 'function' &&
      typeof A.listeners === 'function' &&
      typeof A.kill === 'function' &&
      typeof A.pid === 'number' &&
      typeof A.on === 'function'
    );
  };
if (!sP(gB))
  cv.exports = function () {
    return function () {};
  };
else {
  if (
    ((py1 = D1('assert')),
    (rP = XB0()),
    (cy1 = /^win/i.test(gB.platform)),
    (pv = D1('events')),
    typeof pv !== 'function')
  )
    pv = pv.EventEmitter;
  if (gB.__signal_exit_emitter__) q7 = gB.__signal_exit_emitter__;
  else ((q7 = gB.__signal_exit_emitter__ = new pv()), (q7.count = 0), (q7.emitted = {}));
  if (!q7.infinite) (q7.setMaxListeners(1 / 0), (q7.infinite = !0));
  ((cv.exports = function (A, B) {
    if (!sP(global.process)) return function () {};
    if (
      (py1.equal(typeof A, 'function', 'a callback must be provided for exit handler'), oP === !1)
    )
      rQ1();
    var Q = 'exit';
    if (B && B.alwaysLast) Q = 'afterexit';
    var I = function () {
      if (
        (q7.removeListener(Q, A),
        q7.listeners('exit').length === 0 && q7.listeners('afterexit').length === 0)
      )
        ei();
    };
    return (q7.on(Q, A), I);
  }),
    (ei = function A() {
      if (!oP || !sP(global.process)) return;
      ((oP = !1),
        rP.forEach(function (B) {
          try {
            gB.removeListener(B, An[B]);
          } catch (Q) {}
        }),
        (gB.emit = Bn),
        (gB.reallyExit = oQ1),
        (q7.count -= 1));
    }),
    (cv.exports.unload = ei),
    (mM = function A(B, Q, I) {
      if (q7.emitted[B]) return;
      ((q7.emitted[B] = !0), q7.emit(B, Q, I));
    }),
    (An = {}),
    rP.forEach(function (A) {
      An[A] = function B() {
        if (!sP(global.process)) return;
        var Q = gB.listeners(A);
        if (Q.length === q7.count) {
          if ((ei(), mM('exit', null, A), mM('afterexit', null, A), cy1 && A === 'SIGHUP'))
            A = 'SIGINT';
          gB.kill(gB.pid, A);
        }
      };
    }),
    (cv.exports.signals = function () {
      return rP;
    }),
    (oP = !1),
    (rQ1 = function A() {
      if (oP || !sP(global.process)) return;
      ((oP = !0),
        (q7.count += 1),
        (rP = rP.filter(function (B) {
          try {
            return (gB.on(B, An[B]), !0);
          } catch (Q) {
            return !1;
          }
        })),
        (gB.emit = iy1),
        (gB.reallyExit = ly1));
    }),
    (cv.exports.load = rQ1),
    (oQ1 = gB.reallyExit),
    (ly1 = function A(B) {
      if (!sP(global.process)) return;
      ((gB.exitCode = B || 0),
        mM('exit', gB.exitCode, null),
        mM('afterexit', gB.exitCode, null),
        oQ1.call(gB, gB.exitCode));
    }),
    (Bn = gB.emit),
    (iy1 = function A(B, Q) {
      if (B === 'exit' && sP(global.process)) {
        if (Q !== void 0) gB.exitCode = Q;
        var I = Bn.apply(this, arguments);
        return (mM('exit', gB.exitCode, null), mM('afterexit', gB.exitCode, null), I);
      } else return Bn.apply(this, arguments);
    }));
}
var py1, rP, cy1, pv, q7, ei, mM, An, oP, rQ1, oQ1, ly1, Bn, iy1;

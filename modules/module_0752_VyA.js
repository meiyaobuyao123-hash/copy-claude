// Module: VyA
// Params: mg5,wf

var jB = global.process,
  BP = function (A) {
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
if (!BP(jB))
  wf.exports = function () {
    return function () {};
  };
else {
  if (
    ((gR1 = D1('assert')),
    (QP = XyA()),
    (hR1 = /^win/i.test(jB.platform)),
    (zf = D1('events')),
    typeof zf !== 'function')
  )
    zf = zf.EventEmitter;
  if (jB.__signal_exit_emitter__) N7 = jB.__signal_exit_emitter__;
  else ((N7 = jB.__signal_exit_emitter__ = new zf()), (N7.count = 0), (N7.emitted = {}));
  if (!N7.infinite) (N7.setMaxListeners(1 / 0), (N7.infinite = !0));
  ((wf.exports = function (A, B) {
    if (!BP(global.process)) return function () {};
    if (
      (gR1.equal(typeof A, 'function', 'a callback must be provided for exit handler'), IP === !1)
    )
      s61();
    var Q = 'exit';
    if (B && B.alwaysLast) Q = 'afterexit';
    var I = function () {
      if (
        (N7.removeListener(Q, A),
        N7.listeners('exit').length === 0 && N7.listeners('afterexit').length === 0)
      )
        Fl();
    };
    return (N7.on(Q, A), I);
  }),
    (Fl = function A() {
      if (!IP || !BP(global.process)) return;
      ((IP = !1),
        QP.forEach(function (B) {
          try {
            jB.removeListener(B, Jl[B]);
          } catch (Q) {}
        }),
        (jB.emit = Cl),
        (jB.reallyExit = r61),
        (N7.count -= 1));
    }),
    (wf.exports.unload = Fl),
    (nq = function A(B, Q, I) {
      if (N7.emitted[B]) return;
      ((N7.emitted[B] = !0), N7.emit(B, Q, I));
    }),
    (Jl = {}),
    QP.forEach(function (A) {
      Jl[A] = function B() {
        if (!BP(global.process)) return;
        var Q = jB.listeners(A);
        if (Q.length === N7.count) {
          if ((Fl(), nq('exit', null, A), nq('afterexit', null, A), hR1 && A === 'SIGHUP'))
            A = 'SIGINT';
          jB.kill(jB.pid, A);
        }
      };
    }),
    (wf.exports.signals = function () {
      return QP;
    }),
    (IP = !1),
    (s61 = function A() {
      if (IP || !BP(global.process)) return;
      ((IP = !0),
        (N7.count += 1),
        (QP = QP.filter(function (B) {
          try {
            return (jB.on(B, Jl[B]), !0);
          } catch (Q) {
            return !1;
          }
        })),
        (jB.emit = dR1),
        (jB.reallyExit = mR1));
    }),
    (wf.exports.load = s61),
    (r61 = jB.reallyExit),
    (mR1 = function A(B) {
      if (!BP(global.process)) return;
      ((jB.exitCode = B || 0),
        nq('exit', jB.exitCode, null),
        nq('afterexit', jB.exitCode, null),
        r61.call(jB, jB.exitCode));
    }),
    (Cl = jB.emit),
    (dR1 = function A(B, Q) {
      if (B === 'exit' && BP(global.process)) {
        if (Q !== void 0) jB.exitCode = Q;
        var I = Cl.apply(this, arguments);
        return (nq('exit', jB.exitCode, null), nq('afterexit', jB.exitCode, null), I);
      } else return Cl.apply(this, arguments);
    }));
}
var gR1, QP, hR1, zf, N7, Fl, nq, Jl, IP, s61, r61, mR1, Cl, dR1;

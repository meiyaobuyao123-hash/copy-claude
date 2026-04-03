// Module: hy
// Params: p6A

Object.defineProperty(p6A, '__esModule', { value: !0 });
var f6A = tA(),
  ql2 = sZ(),
  Ml2 = w6A(),
  Ll2 = N6A(),
  Rl2 = S6A(),
  Ol2 = y6A(),
  Tl2 = QT(),
  Pl2 = x6A(),
  Ap = {},
  w01 = {},
  v6A,
  b6A,
  g6A,
  h6A,
  m6A;
function Sl2(A, B = !1) {
  return Bp('cls', A, fl2, v6A, B);
}
function _l2(A, B = !1) {
  return Bp('lcp', A, bl2, g6A, B);
}
function jl2(A) {
  return Bp('ttfb', A, gl2, h6A);
}
function yl2(A) {
  return Bp('fid', A, vl2, b6A);
}
function kl2(A) {
  return Bp('inp', A, hl2, m6A);
}
function xl2(A, B) {
  if ((d6A(A, B), !w01[A])) (ml2(A), (w01[A] = !0));
  return u6A(A, B);
}
function gy(A, B) {
  let Q = Ap[A];
  if (!Q || !Q.length) return;
  for (let I of Q)
    try {
      I(B);
    } catch (G) {
      ql2.DEBUG_BUILD &&
        f6A.logger.error(
          `Error while triggering instrumentation handler.
Type: ${A}
Name: ${f6A.getFunctionName(I)}
Error:`,
          G
        );
    }
}
function fl2() {
  return Ml2.onCLS(
    (A) => {
      (gy('cls', { metric: A }), (v6A = A));
    },
    { reportAllChanges: !0 }
  );
}
function vl2() {
  return Ll2.onFID((A) => {
    (gy('fid', { metric: A }), (b6A = A));
  });
}
function bl2() {
  return Ol2.onLCP((A) => {
    (gy('lcp', { metric: A }), (g6A = A));
  });
}
function gl2() {
  return Pl2.onTTFB((A) => {
    (gy('ttfb', { metric: A }), (h6A = A));
  });
}
function hl2() {
  return Rl2.onINP((A) => {
    (gy('inp', { metric: A }), (m6A = A));
  });
}
function Bp(A, B, Q, I, G = !1) {
  d6A(A, B);
  let D;
  if (!w01[A]) ((D = Q()), (w01[A] = !0));
  if (I) B({ metric: I });
  return u6A(A, B, G ? D : void 0);
}
function ml2(A) {
  let B = {};
  if (A === 'event') B.durationThreshold = 0;
  Tl2.observe(
    A,
    (Q) => {
      gy(A, { entries: Q });
    },
    B
  );
}
function d6A(A, B) {
  ((Ap[A] = Ap[A] || []), Ap[A].push(B));
}
function u6A(A, B, Q) {
  return () => {
    if (Q) Q();
    let I = Ap[A];
    if (!I) return;
    let G = I.indexOf(B);
    if (G !== -1) I.splice(G, 1);
  };
}
p6A.addClsInstrumentationHandler = Sl2;
p6A.addFidInstrumentationHandler = yl2;
p6A.addInpInstrumentationHandler = kl2;
p6A.addLcpInstrumentationHandler = _l2;
p6A.addPerformanceInstrumentationHandler = xl2;
p6A.addTtfbInstrumentationHandler = jl2;

// Module: y6A
// Params: j6A

Object.defineProperty(j6A, '__esModule', { value: !0 });
var Yl2 = LW(),
  Wl2 = fy(),
  Fl2 = X01(),
  Jl2 = H01(),
  Cl2 = vy(),
  Xl2 = QT(),
  Vl2 = by(),
  _6A = {},
  Kl2 = (A) => {
    let B = Jl2.getVisibilityWatcher(),
      Q = Cl2.initMetric('LCP'),
      I,
      G = (Z) => {
        let Y = Z[Z.length - 1];
        if (Y) {
          let W = Math.max(Y.startTime - Fl2.getActivationStart(), 0);
          if (W < B.firstHiddenTime) ((Q.value = W), (Q.entries = [Y]), I());
        }
      },
      D = Xl2.observe('largest-contentful-paint', G);
    if (D) {
      I = Wl2.bindReporter(A, Q);
      let Z = () => {
        if (!_6A[Q.id]) (G(D.takeRecords()), D.disconnect(), (_6A[Q.id] = !0), I(!0));
      };
      return (
        ['keydown', 'click'].forEach((Y) => {
          if (Yl2.WINDOW.document) addEventListener(Y, Z, { once: !0, capture: !0 });
        }),
        Vl2.onHidden(Z, !0),
        Z
      );
    }
    return;
  };
j6A.onLCP = Kl2;

// Module: x6A
// Params: k6A

Object.defineProperty(k6A, '__esModule', { value: !0 });
var jE1 = LW(),
  zl2 = fy(),
  wl2 = X01(),
  El2 = eu(),
  Ul2 = vy(),
  yE1 = (A) => {
    if (!jE1.WINDOW.document) return;
    if (jE1.WINDOW.document.prerendering) addEventListener('prerenderingchange', () => yE1(A), !0);
    else if (jE1.WINDOW.document.readyState !== 'complete')
      addEventListener('load', () => yE1(A), !0);
    else setTimeout(A, 0);
  },
  Nl2 = (A, B) => {
    B = B || {};
    let Q = Ul2.initMetric('TTFB'),
      I = zl2.bindReporter(A, Q, B.reportAllChanges);
    yE1(() => {
      let G = El2.getNavigationEntry();
      if (G) {
        if (
          ((Q.value = Math.max(G.responseStart - wl2.getActivationStart(), 0)),
          Q.value < 0 || Q.value > performance.now())
        )
          return;
        ((Q.entries = [G]), I(!0));
      }
    });
  };
k6A.onTTFB = Nl2;

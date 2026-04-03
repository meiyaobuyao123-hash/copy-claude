// Module: N6A
// Params: U6A

Object.defineProperty(U6A, '__esModule', { value: !0 });
var dc2 = fy(),
  uc2 = H01(),
  pc2 = vy(),
  cc2 = QT(),
  lc2 = by(),
  ic2 = (A) => {
    let B = uc2.getVisibilityWatcher(),
      Q = pc2.initMetric('FID'),
      I,
      G = (Y) => {
        if (Y.startTime < B.firstHiddenTime)
          ((Q.value = Y.processingStart - Y.startTime), Q.entries.push(Y), I(!0));
      },
      D = (Y) => {
        Y.forEach(G);
      },
      Z = cc2.observe('first-input', D);
    if (((I = dc2.bindReporter(A, Q)), Z))
      lc2.onHidden(() => {
        (D(Z.takeRecords()), Z.disconnect());
      }, !0);
  };
U6A.onFID = ic2;

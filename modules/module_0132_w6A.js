// Module: w6A
// Params: z6A

Object.defineProperty(z6A, '__esModule', { value: !0 });
var _c2 = fy(),
  jc2 = vy(),
  yc2 = QT(),
  kc2 = by(),
  xc2 = (A, B = {}) => {
    let Q = jc2.initMetric('CLS', 0),
      I,
      G = 0,
      D = [],
      Z = (W) => {
        W.forEach((F) => {
          if (!F.hadRecentInput) {
            let J = D[0],
              C = D[D.length - 1];
            if (
              G &&
              D.length !== 0 &&
              F.startTime - C.startTime < 1000 &&
              F.startTime - J.startTime < 5000
            )
              ((G += F.value), D.push(F));
            else ((G = F.value), (D = [F]));
            if (G > Q.value) {
              if (((Q.value = G), (Q.entries = D), I)) I();
            }
          }
        });
      },
      Y = yc2.observe('layout-shift', Z);
    if (Y) {
      I = _c2.bindReporter(A, Q, B.reportAllChanges);
      let W = () => {
        (Z(Y.takeRecords()), I(!0));
      };
      return (kc2.onHidden(W), W);
    }
    return;
  };
z6A.onCLS = xc2;

// Module: im0
// Params: Sw8,lm0

var cm0 = D1('fs'),
  uK6 = (A) => cm0.readFileSync(A, 'utf-8'),
  pK6 = (A) =>
    new Promise((B, Q) => {
      cm0.readFile(A, 'utf-8', (I, G) => {
        if (I) Q(I);
        else B(G);
      });
    });
lm0.exports = { LDD_PATH: '/usr/bin/ldd', readFileSync: uK6, readFile: pK6 };

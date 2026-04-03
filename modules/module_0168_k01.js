// Module: k01
// Params: a8A

Object.defineProperty(a8A, '__esModule', { value: !0 });
var p8A = D1('fs'),
  c8A = D1('path'),
  l8A = I4(),
  AU1,
  i8A = 'Modules';
function zr2() {
  try {
    return D1.cache ? Object.keys(D1.cache) : [];
  } catch (A) {
    return [];
  }
}
function wr2() {
  let A = (D1.main && D1.main.paths) || [],
    B = zr2(),
    Q = {},
    I = {};
  return (
    B.forEach((G) => {
      let D = G,
        Z = () => {
          let Y = D;
          if (((D = c8A.dirname(Y)), !D || Y === D || I[Y])) return;
          if (A.indexOf(D) < 0) return Z();
          let W = c8A.join(Y, 'package.json');
          if (((I[Y] = !0), !p8A.existsSync(W))) return Z();
          try {
            let F = JSON.parse(p8A.readFileSync(W, 'utf8'));
            Q[F.name] = F.version;
          } catch (F) {}
        };
      Z();
    }),
    Q
  );
}
function Er2() {
  if (!AU1) AU1 = wr2();
  return AU1;
}
var Ur2 = () => {
    return {
      name: i8A,
      setupOnce() {},
      processEvent(A) {
        return ((A.modules = { ...A.modules, ...Er2() }), A);
      },
    };
  },
  n8A = l8A.defineIntegration(Ur2),
  Nr2 = l8A.convertIntegrationFnToClass(i8A, n8A);
a8A.Modules = Nr2;
a8A.modulesIntegration = n8A;

// Module: R5A
// Params: L5A,Yp

Object.defineProperty(L5A, '__esModule', { value: !0 });
var M5A = I4(),
  my = tA();
function Fn2() {
  let A = M5A.getMainCarrier();
  if (!A.__SENTRY__) return;
  let B = {
      mongodb() {
        return new (my.dynamicRequire(Yp, './node/integrations/mongo').Mongo)();
      },
      mongoose() {
        return new (my.dynamicRequire(Yp, './node/integrations/mongo').Mongo)();
      },
      mysql() {
        return new (my.dynamicRequire(Yp, './node/integrations/mysql').Mysql)();
      },
      pg() {
        return new (my.dynamicRequire(Yp, './node/integrations/postgres').Postgres)();
      },
    },
    Q = Object.keys(B)
      .filter((I) => !!my.loadModule(I))
      .map((I) => {
        try {
          return B[I]();
        } catch (G) {
          return;
        }
      })
      .filter((I) => I);
  if (Q.length > 0) A.__SENTRY__.integrations = [...(A.__SENTRY__.integrations || []), ...Q];
}
function Jn2() {
  if ((M5A.addTracingExtensions(), my.isNodeEnv())) Fn2();
}
L5A.addExtensionMethods = Jn2;

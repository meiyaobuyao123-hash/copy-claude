// Module: zE1
// Params: d9A

Object.defineProperty(d9A, '__esModule', { value: !0 });
var Xm2 = tA(),
  Vm2 = DJ(),
  g9A = qE(),
  v9A,
  h9A = 'FunctionToString',
  b9A = new WeakMap(),
  Km2 = () => {
    return {
      name: h9A,
      setupOnce() {
        v9A = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...A) {
            let B = Xm2.getOriginalFunction(this),
              Q = b9A.has(Vm2.getClient()) && B !== void 0 ? B : this;
            return v9A.apply(Q, A);
          };
        } catch (A) {}
      },
      setup(A) {
        b9A.set(A, !0);
      },
    };
  },
  m9A = g9A.defineIntegration(Km2),
  Hm2 = g9A.convertIntegrationFnToClass(h9A, m9A);
d9A.FunctionToString = Hm2;
d9A.functionToStringIntegration = m9A;

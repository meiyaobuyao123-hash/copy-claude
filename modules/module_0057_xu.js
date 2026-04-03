// Module: xu
// Params: Y0A

Object.defineProperty(Y0A, '__esModule', { value: !0 });
var $A1 = tA(),
  ry2 = vQ();
function Z0A() {
  return $A1.getGlobalSingleton('globalEventProcessors', () => []);
}
function oy2(A) {
  Z0A().push(A);
}
function Ow1(A, B, Q, I = 0) {
  return new $A1.SyncPromise((G, D) => {
    let Z = A[I];
    if (B === null || typeof Z !== 'function') G(B);
    else {
      let Y = Z({ ...B }, Q);
      if (
        (ry2.DEBUG_BUILD &&
          Z.id &&
          Y === null &&
          $A1.logger.log(`Event processor "${Z.id}" dropped event`),
        $A1.isThenable(Y))
      )
        Y.then((W) => Ow1(A, W, Q, I + 1).then(G)).then(null, D);
      else
        Ow1(A, Y, Q, I + 1)
          .then(G)
          .then(null, D);
    }
  });
}
Y0A.addGlobalEventProcessor = oy2;
Y0A.getGlobalEventProcessors = Z0A;
Y0A.notifyEventProcessors = Ow1;

// Module: NJA
// Params: EJA

Object.defineProperty(EJA, '__esModule', { value: !0 });
EJA.connectable = void 0;
var RW9 = iI(),
  OW9 = G8(),
  TW9 = ep(),
  PW9 = {
    connector: function () {
      return new RW9.Subject();
    },
    resetOnDisconnect: !0,
  };
function SW9(A, B) {
  if (B === void 0) B = PW9;
  var Q = null,
    I = B.connector,
    G = B.resetOnDisconnect,
    D = G === void 0 ? !0 : G,
    Z = I(),
    Y = new OW9.Observable(function (W) {
      return Z.subscribe(W);
    });
  return (
    (Y.connect = function () {
      if (!Q || Q.closed) {
        if (
          ((Q = TW9.defer(function () {
            return A;
          }).subscribe(Z)),
          D)
        )
          Q.add(function () {
            return (Z = I());
          });
      }
      return Q;
    }),
    Y
  );
}
EJA.connectable = SW9;

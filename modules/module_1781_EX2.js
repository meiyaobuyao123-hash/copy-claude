// Module: EX2
// Params: wX2,gR

(function () {
  var A, B, Q, I, G, D, Z, Y, W;
  (({ assign: Y, isFunction: W } = $w()),
    (Q = ps1()),
    (I = as1()),
    (G = VX2()),
    (Z = zV1()),
    (D = zX2()),
    (A = LQ()),
    (B = Ie()),
    (wX2.create = function (F, J, C, X) {
      var V, K;
      if (F == null) throw new Error('Root element needs a name.');
      if (((X = Y({}, J, C, X)), (V = new I(X)), (K = V.element(F)), !X.headless)) {
        if ((V.declaration(X), X.pubID != null || X.sysID != null)) V.dtd(X);
      }
      return K;
    }),
    (wX2.begin = function (F, J, C) {
      if (W(F)) (([J, C] = [F, J]), (F = {}));
      if (J) return new G(F, J, C);
      else return new I(F);
    }),
    (wX2.stringWriter = function (F) {
      return new Z(F);
    }),
    (wX2.streamWriter = function (F, J) {
      return new D(F, J);
    }),
    (wX2.implementation = new Q()),
    (wX2.nodeType = A),
    (wX2.writerState = B));
}).call(wX2);

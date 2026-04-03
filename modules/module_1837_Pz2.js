// Module: Pz2
// Params: P55

var Lz2 = _e(),
  Rz2 = GK1(),
  dl8 = So1(),
  Oz2 = Po1();
P55.createDOMImplementation = function () {
  return new Lz2(null);
};
P55.createDocument = function (A, B) {
  if (A || B) {
    var Q = new Rz2();
    return (Q.parse(A || '', !0), Q.document());
  }
  return new Lz2(null).createHTMLDocument('');
};
P55.createIncrementalHTMLParser = function () {
  var A = new Rz2();
  return {
    write: function (B) {
      if (B.length > 0)
        A.parse(B, !1, function () {
          return !0;
        });
    },
    end: function (B) {
      A.parse(B || '', !0, function () {
        return !0;
      });
    },
    process: function (B) {
      return A.parse('', !1, B);
    },
    document: function () {
      return A.document();
    },
  };
};
P55.createWindow = function (A, B) {
  var Q = P55.createDocument(A);
  if (B !== void 0) Q._address = B;
  return new Oz2.Window(Q);
};
P55.impl = Oz2;

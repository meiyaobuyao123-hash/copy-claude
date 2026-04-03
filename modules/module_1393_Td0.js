// Module: Td0
// Params: gw8,Od0

var TH6 = Ld0(),
  PH6 = Array.prototype.concat,
  SH6 = Array.prototype.slice,
  Rd0 = (Od0.exports = function A(B) {
    var Q = [];
    for (var I = 0, G = B.length; I < G; I++) {
      var D = B[I];
      if (TH6(D)) Q = PH6.call(Q, SH6.call(D));
      else Q.push(D);
    }
    return Q;
  });
Rd0.wrap = function (A) {
  return function () {
    return A(Rd0(arguments));
  };
};

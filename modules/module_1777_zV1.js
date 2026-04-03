// Module: zV1
// Params: YX2,WX2

(function () {
  var A, B;
  ((B = ns1()),
    (WX2.exports = A =
      class Q extends B {
        constructor(I) {
          super(I);
        }
        document(I, G) {
          var D, Z, Y, W, F;
          ((G = this.filterOptions(G)), (W = ''), (F = I.children));
          for (Z = 0, Y = F.length; Z < Y; Z++) ((D = F[Z]), (W += this.writeChildNode(D, G, 0)));
          if (G.pretty && W.slice(-G.newline.length) === G.newline)
            W = W.slice(0, -G.newline.length);
          return W;
        }
      }));
}).call(YX2);

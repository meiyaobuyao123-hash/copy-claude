// Module: iM1
// Params: Ly5,KOA

var VOA = XOA();
KOA.exports = Px9;
function Px9(A) {
  var B = !1;
  return (
    VOA(function () {
      B = !0;
    }),
    function Q(I, G) {
      if (B) A(I, G);
      else
        VOA(function D() {
          A(I, G);
        });
    }
  );
}

// Module: N72
// Params: pO8,U72

U72.exports = bo;
var Rc6 = El1(),
  Oc6 = Nl1(),
  xi1 = Oc6('fs');
function bo(A, B, Q) {
  if (typeof B === 'function') ((Q = B), (B = {}));
  else if (!B) B = {};
  if (!Q) return Rc6(bo, this, A, B);
  if (!B.xhr && xi1 && xi1.readFile)
    return xi1.readFile(A, function I(G, D) {
      return G && typeof XMLHttpRequest !== 'undefined'
        ? bo.xhr(A, B, Q)
        : G
          ? Q(G)
          : Q(null, B.binary ? D : D.toString('utf8'));
    });
  return bo.xhr(A, B, Q);
}
bo.xhr = function A(B, Q, I) {
  var G = new XMLHttpRequest();
  if (
    ((G.onreadystatechange = function D() {
      if (G.readyState !== 4) return;
      if (G.status !== 0 && G.status !== 200) return I(Error('status ' + G.status));
      if (Q.binary) {
        var Z = G.response;
        if (!Z) {
          Z = [];
          for (var Y = 0; Y < G.responseText.length; ++Y)
            Z.push(G.responseText.charCodeAt(Y) & 255);
        }
        return I(null, typeof Uint8Array !== 'undefined' ? new Uint8Array(Z) : Z);
      }
      return I(null, G.responseText);
    }),
    Q.binary)
  ) {
    if ('overrideMimeType' in G) G.overrideMimeType('text/plain; charset=x-user-defined');
    G.responseType = 'arraybuffer';
  }
  (G.open('GET', B), G.send());
};

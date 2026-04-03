// Module: gi0
// Params: vi0

Object.defineProperty(vi0, '__esModule', { value: !0 });
vi0.W3CBaggagePropagator = void 0;
var Nc1 = C4(),
  P$6 = Io(),
  X_ = Ec1(),
  $c1 = Uc1();
class fi0 {
  inject(A, B, Q) {
    let I = Nc1.propagation.getBaggage(A);
    if (!I || P$6.isTracingSuppressed(A)) return;
    let G = $c1
        .getKeyPairs(I)
        .filter((Z) => {
          return Z.length <= X_.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        })
        .slice(0, X_.BAGGAGE_MAX_NAME_VALUE_PAIRS),
      D = $c1.serializeKeyPairs(G);
    if (D.length > 0) Q.set(B, X_.BAGGAGE_HEADER, D);
  }
  extract(A, B, Q) {
    let I = Q.get(B, X_.BAGGAGE_HEADER),
      G = Array.isArray(I) ? I.join(X_.BAGGAGE_ITEMS_SEPARATOR) : I;
    if (!G) return A;
    let D = {};
    if (G.length === 0) return A;
    if (
      (G.split(X_.BAGGAGE_ITEMS_SEPARATOR).forEach((Y) => {
        let W = $c1.parsePairKeyValue(Y);
        if (W) {
          let F = { value: W.value };
          if (W.metadata) F.metadata = W.metadata;
          D[W.key] = F;
        }
      }),
      Object.entries(D).length === 0)
    )
      return A;
    return Nc1.propagation.setBaggage(A, Nc1.propagation.createBaggage(D));
  }
  fields() {
    return [X_.BAGGAGE_HEADER];
  }
}
vi0.W3CBaggagePropagator = fi0;

// Module: NA2
// Params: EA2

Object.defineProperty(EA2, '__esModule', { value: !0 });
EA2.CompositePropagator = void 0;
var zA2 = C4();
class wA2 {
  _propagators;
  _fields;
  constructor(A = {}) {
    ((this._propagators = A.propagators ?? []),
      (this._fields = Array.from(
        new Set(
          this._propagators
            .map((B) => (typeof B.fields === 'function' ? B.fields() : []))
            .reduce((B, Q) => B.concat(Q), [])
        )
      )));
  }
  inject(A, B, Q) {
    for (let I of this._propagators)
      try {
        I.inject(A, B, Q);
      } catch (G) {
        zA2.diag.warn(`Failed to inject with ${I.constructor.name}. Err: ${G.message}`);
      }
  }
  extract(A, B, Q) {
    return this._propagators.reduce((I, G) => {
      try {
        return G.extract(I, B, Q);
      } catch (D) {
        zA2.diag.warn(`Failed to extract with ${G.constructor.name}. Err: ${D.message}`);
      }
      return I;
    }, A);
  }
  fields() {
    return this._fields.slice();
  }
}
EA2.CompositePropagator = wA2;

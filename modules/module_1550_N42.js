// Module: N42
// Params: E42

Object.defineProperty(E42, '__esModule', { value: !0 });
E42.MetricStorageRegistry = void 0;
var Uv6 = Ko(),
  w42 = C4(),
  MJ1 = z42();
class Yl1 {
  _sharedRegistry = new Map();
  _perCollectorRegistry = new Map();
  static create() {
    return new Yl1();
  }
  getStorages(A) {
    let B = [];
    for (let I of this._sharedRegistry.values()) B = B.concat(I);
    let Q = this._perCollectorRegistry.get(A);
    if (Q != null) for (let I of Q.values()) B = B.concat(I);
    return B;
  }
  register(A) {
    this._registerStorage(A, this._sharedRegistry);
  }
  registerForCollector(A, B) {
    let Q = this._perCollectorRegistry.get(A);
    if (Q == null) ((Q = new Map()), this._perCollectorRegistry.set(A, Q));
    this._registerStorage(B, Q);
  }
  findOrUpdateCompatibleStorage(A) {
    let B = this._sharedRegistry.get(A.name);
    if (B === void 0) return null;
    return this._findOrUpdateCompatibleStorage(A, B);
  }
  findOrUpdateCompatibleCollectorStorage(A, B) {
    let Q = this._perCollectorRegistry.get(A);
    if (Q === void 0) return null;
    let I = Q.get(B.name);
    if (I === void 0) return null;
    return this._findOrUpdateCompatibleStorage(B, I);
  }
  _registerStorage(A, B) {
    let Q = A.getInstrumentDescriptor(),
      I = B.get(Q.name);
    if (I === void 0) {
      B.set(Q.name, [A]);
      return;
    }
    I.push(A);
  }
  _findOrUpdateCompatibleStorage(A, B) {
    let Q = null;
    for (let I of B) {
      let G = I.getInstrumentDescriptor();
      if (Uv6.isDescriptorCompatibleWith(G, A)) {
        if (G.description !== A.description) {
          if (A.description.length > G.description.length) I.updateDescription(A.description);
          w42.diag.warn(
            'A view or instrument with the name ',
            A.name,
            ` has already been registered, but has a different description and is incompatible with another registered view.
`,
            `Details:
`,
            MJ1.getIncompatibilityDetails(G, A),
            `The longer description will be used.
To resolve the conflict:`,
            MJ1.getConflictResolutionRecipe(G, A)
          );
        }
        Q = I;
      } else
        w42.diag.warn(
          'A view or instrument with the name ',
          A.name,
          ` has already been registered and is incompatible with another registered view.
`,
          `Details:
`,
          MJ1.getIncompatibilityDetails(G, A),
          `To resolve the conflict:
`,
          MJ1.getConflictResolutionRecipe(G, A)
        );
    }
    return Q;
  }
}
E42.MetricStorageRegistry = Yl1;

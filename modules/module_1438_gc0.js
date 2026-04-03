// Module: gc0
// Params: vc0

Object.defineProperty(vc0, '__esModule', { value: !0 });
vc0.TraceStateImpl = void 0;
var yc0 = jc0(),
  kc0 = 32,
  PU6 = 512,
  xc0 = ',',
  fc0 = '=';
class sp1 {
  constructor(A) {
    if (((this._internalState = new Map()), A)) this._parse(A);
  }
  set(A, B) {
    let Q = this._clone();
    if (Q._internalState.has(A)) Q._internalState.delete(A);
    return (Q._internalState.set(A, B), Q);
  }
  unset(A) {
    let B = this._clone();
    return (B._internalState.delete(A), B);
  }
  get(A) {
    return this._internalState.get(A);
  }
  serialize() {
    return this._keys()
      .reduce((A, B) => {
        return (A.push(B + fc0 + this.get(B)), A);
      }, [])
      .join(xc0);
  }
  _parse(A) {
    if (A.length > PU6) return;
    if (
      ((this._internalState = A.split(xc0)
        .reverse()
        .reduce((B, Q) => {
          let I = Q.trim(),
            G = I.indexOf(fc0);
          if (G !== -1) {
            let D = I.slice(0, G),
              Z = I.slice(G + 1, Q.length);
            if (yc0.validateKey(D) && yc0.validateValue(Z)) B.set(D, Z);
          }
          return B;
        }, new Map())),
      this._internalState.size > kc0)
    )
      this._internalState = new Map(
        Array.from(this._internalState.entries()).reverse().slice(0, kc0)
      );
  }
  _keys() {
    return Array.from(this._internalState.keys()).reverse();
  }
  _clone() {
    let A = new sp1();
    return ((A._internalState = new Map(this._internalState)), A);
  }
}
vc0.TraceStateImpl = sp1;

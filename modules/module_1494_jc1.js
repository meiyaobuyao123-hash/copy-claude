// Module: jc1
// Params: PA2

Object.defineProperty(PA2, '__esModule', { value: !0 });
PA2.TraceState = void 0;
var LA2 = MA2(),
  RA2 = 32,
  Jk6 = 512,
  OA2 = ',',
  TA2 = '=';
class _c1 {
  _internalState = new Map();
  constructor(A) {
    if (A) this._parse(A);
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
        return (A.push(B + TA2 + this.get(B)), A);
      }, [])
      .join(OA2);
  }
  _parse(A) {
    if (A.length > Jk6) return;
    if (
      ((this._internalState = A.split(OA2)
        .reverse()
        .reduce((B, Q) => {
          let I = Q.trim(),
            G = I.indexOf(TA2);
          if (G !== -1) {
            let D = I.slice(0, G),
              Z = I.slice(G + 1, Q.length);
            if (LA2.validateKey(D) && LA2.validateValue(Z)) B.set(D, Z);
          }
          return B;
        }, new Map())),
      this._internalState.size > RA2)
    )
      this._internalState = new Map(
        Array.from(this._internalState.entries()).reverse().slice(0, RA2)
      );
  }
  _keys() {
    return Array.from(this._internalState.keys()).reverse();
  }
  _clone() {
    let A = new _c1();
    return ((A._internalState = new Map(this._internalState)), A);
  }
}
PA2.TraceState = _c1;

// Module: OS0
// Params: QV8,RS0

var { wellknownHeaderNames: MS0, headerNameLowerCasedRecord: j46 } = XY1();
class _g {
  value = null;
  left = null;
  middle = null;
  right = null;
  code;
  constructor(A, B, Q) {
    if (Q === void 0 || Q >= A.length) throw new TypeError('Unreachable');
    if ((this.code = A.charCodeAt(Q)) > 127) throw new TypeError('key must be ascii string');
    if (A.length !== ++Q) this.middle = new _g(A, B, Q);
    else this.value = B;
  }
  add(A, B) {
    let Q = A.length;
    if (Q === 0) throw new TypeError('Unreachable');
    let I = 0,
      G = this;
    while (!0) {
      let D = A.charCodeAt(I);
      if (D > 127) throw new TypeError('key must be ascii string');
      if (G.code === D)
        if (Q === ++I) {
          G.value = B;
          break;
        } else if (G.middle !== null) G = G.middle;
        else {
          G.middle = new _g(A, B, I);
          break;
        }
      else if (G.code < D)
        if (G.left !== null) G = G.left;
        else {
          G.left = new _g(A, B, I);
          break;
        }
      else if (G.right !== null) G = G.right;
      else {
        G.right = new _g(A, B, I);
        break;
      }
    }
  }
  search(A) {
    let B = A.length,
      Q = 0,
      I = this;
    while (I !== null && Q < B) {
      let G = A[Q];
      if (G <= 90 && G >= 65) G |= 32;
      while (I !== null) {
        if (G === I.code) {
          if (B === ++Q) return I;
          I = I.middle;
          break;
        }
        I = I.code < G ? I.left : I.right;
      }
    }
    return null;
  }
}
class bh1 {
  node = null;
  insert(A, B) {
    if (this.node === null) this.node = new _g(A, B, 0);
    else this.node.add(A, B);
  }
  lookup(A) {
    return this.node?.search(A)?.value ?? null;
  }
}
var LS0 = new bh1();
for (let A = 0; A < MS0.length; ++A) {
  let B = j46[MS0[A]];
  LS0.insert(B, B);
}
RS0.exports = { TernarySearchTree: bh1, tree: LS0 };

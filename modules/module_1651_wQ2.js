// Module: wQ2
// Params: zQ2

Object.defineProperty(zQ2, 't', { value: !0 });
class Ui1 {
  constructor(A, B, Q = 1) {
    ((this.i = void 0),
      (this.h = void 0),
      (this.o = void 0),
      (this.u = A),
      (this.l = B),
      (this.p = Q));
  }
  I() {
    let A = this,
      B = A.o.o === A;
    if (B && A.p === 1) A = A.h;
    else if (A.i) {
      A = A.i;
      while (A.h) A = A.h;
    } else {
      if (B) return A.o;
      let Q = A.o;
      while (Q.i === A) ((A = Q), (Q = A.o));
      A = Q;
    }
    return A;
  }
  B() {
    let A = this;
    if (A.h) {
      A = A.h;
      while (A.i) A = A.i;
      return A;
    } else {
      let B = A.o;
      while (B.h === A) ((A = B), (B = A.o));
      if (A.h !== B) return B;
      else return A;
    }
  }
  _() {
    let A = this.o,
      B = this.h,
      Q = B.i;
    if (A.o === this) A.o = B;
    else if (A.i === this) A.i = B;
    else A.h = B;
    if (((B.o = A), (B.i = this), (this.o = B), (this.h = Q), Q)) Q.o = this;
    return B;
  }
  g() {
    let A = this.o,
      B = this.i,
      Q = B.h;
    if (A.o === this) A.o = B;
    else if (A.i === this) A.i = B;
    else A.h = B;
    if (((B.o = A), (B.h = this), (this.o = B), (this.i = Q), Q)) Q.o = this;
    return B;
  }
}
class FQ2 extends Ui1 {
  constructor() {
    super(...arguments);
    this.M = 1;
  }
  _() {
    let A = super._();
    return (this.O(), A.O(), A);
  }
  g() {
    let A = super.g();
    return (this.O(), A.O(), A);
  }
  O() {
    if (((this.M = 1), this.i)) this.M += this.i.M;
    if (this.h) this.M += this.h.M;
  }
}
class JQ2 {
  constructor(A = 0) {
    this.iteratorType = A;
  }
  equals(A) {
    return this.T === A.T;
  }
}
class CQ2 {
  constructor() {
    this.m = 0;
  }
  get length() {
    return this.m;
  }
  size() {
    return this.m;
  }
  empty() {
    return this.m === 0;
  }
}
class XQ2 extends CQ2 {}
function y_() {
  throw new RangeError('Iterator access denied!');
}
class VQ2 extends XQ2 {
  constructor(
    A = function (Q, I) {
      if (Q < I) return -1;
      if (Q > I) return 1;
      return 0;
    },
    B = !1
  ) {
    super();
    ((this.v = void 0),
      (this.A = A),
      (this.enableIndex = B),
      (this.N = B ? FQ2 : Ui1),
      (this.C = new this.N()));
  }
  R(A, B) {
    let Q = this.C;
    while (A) {
      let I = this.A(A.u, B);
      if (I < 0) A = A.h;
      else if (I > 0) ((Q = A), (A = A.i));
      else return A;
    }
    return Q;
  }
  K(A, B) {
    let Q = this.C;
    while (A)
      if (this.A(A.u, B) <= 0) A = A.h;
      else ((Q = A), (A = A.i));
    return Q;
  }
  L(A, B) {
    let Q = this.C;
    while (A) {
      let I = this.A(A.u, B);
      if (I < 0) ((Q = A), (A = A.h));
      else if (I > 0) A = A.i;
      else return A;
    }
    return Q;
  }
  k(A, B) {
    let Q = this.C;
    while (A)
      if (this.A(A.u, B) < 0) ((Q = A), (A = A.h));
      else A = A.i;
    return Q;
  }
  P(A) {
    while (!0) {
      let B = A.o;
      if (B === this.C) return;
      if (A.p === 1) {
        A.p = 0;
        return;
      }
      if (A === B.i) {
        let Q = B.h;
        if (Q.p === 1)
          if (((Q.p = 0), (B.p = 1), B === this.v)) this.v = B._();
          else B._();
        else if (Q.h && Q.h.p === 1) {
          if (((Q.p = B.p), (B.p = 0), (Q.h.p = 0), B === this.v)) this.v = B._();
          else B._();
          return;
        } else if (Q.i && Q.i.p === 1) ((Q.p = 1), (Q.i.p = 0), Q.g());
        else ((Q.p = 1), (A = B));
      } else {
        let Q = B.i;
        if (Q.p === 1)
          if (((Q.p = 0), (B.p = 1), B === this.v)) this.v = B.g();
          else B.g();
        else if (Q.i && Q.i.p === 1) {
          if (((Q.p = B.p), (B.p = 0), (Q.i.p = 0), B === this.v)) this.v = B.g();
          else B.g();
          return;
        } else if (Q.h && Q.h.p === 1) ((Q.p = 1), (Q.h.p = 0), Q._());
        else ((Q.p = 1), (A = B));
      }
    }
  }
  S(A) {
    if (this.m === 1) {
      this.clear();
      return;
    }
    let B = A;
    while (B.i || B.h) {
      if (B.h) {
        B = B.h;
        while (B.i) B = B.i;
      } else B = B.i;
      let I = A.u;
      ((A.u = B.u), (B.u = I));
      let G = A.l;
      ((A.l = B.l), (B.l = G), (A = B));
    }
    if (this.C.i === B) this.C.i = B.o;
    else if (this.C.h === B) this.C.h = B.o;
    this.P(B);
    let Q = B.o;
    if (B === Q.i) Q.i = void 0;
    else Q.h = void 0;
    if (((this.m -= 1), (this.v.p = 0), this.enableIndex))
      while (Q !== this.C) ((Q.M -= 1), (Q = Q.o));
  }
  U(A) {
    let B = typeof A === 'number' ? A : void 0,
      Q = typeof A === 'function' ? A : void 0,
      I = typeof A === 'undefined' ? [] : void 0,
      G = 0,
      D = this.v,
      Z = [];
    while (Z.length || D)
      if (D) (Z.push(D), (D = D.i));
      else {
        if (((D = Z.pop()), G === B)) return D;
        (I && I.push(D), Q && Q(D, G, this), (G += 1), (D = D.h));
      }
    return I;
  }
  j(A) {
    while (!0) {
      let B = A.o;
      if (B.p === 0) return;
      let Q = B.o;
      if (B === Q.i) {
        let I = Q.h;
        if (I && I.p === 1) {
          if (((I.p = B.p = 0), Q === this.v)) return;
          ((Q.p = 1), (A = Q));
          continue;
        } else if (A === B.h) {
          if (((A.p = 0), A.i)) A.i.o = B;
          if (A.h) A.h.o = Q;
          if (((B.h = A.i), (Q.i = A.h), (A.i = B), (A.h = Q), Q === this.v))
            ((this.v = A), (this.C.o = A));
          else {
            let G = Q.o;
            if (G.i === Q) G.i = A;
            else G.h = A;
          }
          ((A.o = Q.o), (B.o = A), (Q.o = A), (Q.p = 1));
        } else {
          if (((B.p = 0), Q === this.v)) this.v = Q.g();
          else Q.g();
          Q.p = 1;
          return;
        }
      } else {
        let I = Q.i;
        if (I && I.p === 1) {
          if (((I.p = B.p = 0), Q === this.v)) return;
          ((Q.p = 1), (A = Q));
          continue;
        } else if (A === B.i) {
          if (((A.p = 0), A.i)) A.i.o = Q;
          if (A.h) A.h.o = B;
          if (((Q.h = A.i), (B.i = A.h), (A.i = Q), (A.h = B), Q === this.v))
            ((this.v = A), (this.C.o = A));
          else {
            let G = Q.o;
            if (G.i === Q) G.i = A;
            else G.h = A;
          }
          ((A.o = Q.o), (B.o = A), (Q.o = A), (Q.p = 1));
        } else {
          if (((B.p = 0), Q === this.v)) this.v = Q._();
          else Q._();
          Q.p = 1;
          return;
        }
      }
      if (this.enableIndex) (B.O(), Q.O(), A.O());
      return;
    }
  }
  q(A, B, Q) {
    if (this.v === void 0)
      return (
        (this.m += 1),
        (this.v = new this.N(A, B, 0)),
        (this.v.o = this.C),
        (this.C.o = this.C.i = this.C.h = this.v),
        this.m
      );
    let I,
      G = this.C.i,
      D = this.A(G.u, A);
    if (D === 0) return ((G.l = B), this.m);
    else if (D > 0) ((G.i = new this.N(A, B)), (G.i.o = G), (I = G.i), (this.C.i = I));
    else {
      let Z = this.C.h,
        Y = this.A(Z.u, A);
      if (Y === 0) return ((Z.l = B), this.m);
      else if (Y < 0) ((Z.h = new this.N(A, B)), (Z.h.o = Z), (I = Z.h), (this.C.h = I));
      else {
        if (Q !== void 0) {
          let W = Q.T;
          if (W !== this.C) {
            let F = this.A(W.u, A);
            if (F === 0) return ((W.l = B), this.m);
            else if (F > 0) {
              let J = W.I(),
                C = this.A(J.u, A);
              if (C === 0) return ((J.l = B), this.m);
              else if (C < 0)
                if (((I = new this.N(A, B)), J.h === void 0)) ((J.h = I), (I.o = J));
                else ((W.i = I), (I.o = W));
            }
          }
        }
        if (I === void 0) {
          I = this.v;
          while (!0) {
            let W = this.A(I.u, A);
            if (W > 0) {
              if (I.i === void 0) {
                ((I.i = new this.N(A, B)), (I.i.o = I), (I = I.i));
                break;
              }
              I = I.i;
            } else if (W < 0) {
              if (I.h === void 0) {
                ((I.h = new this.N(A, B)), (I.h.o = I), (I = I.h));
                break;
              }
              I = I.h;
            } else return ((I.l = B), this.m);
          }
        }
      }
    }
    if (this.enableIndex) {
      let Z = I.o;
      while (Z !== this.C) ((Z.M += 1), (Z = Z.o));
    }
    return (this.j(I), (this.m += 1), this.m);
  }
  H(A, B) {
    while (A) {
      let Q = this.A(A.u, B);
      if (Q < 0) A = A.h;
      else if (Q > 0) A = A.i;
      else return A;
    }
    return A || this.C;
  }
  clear() {
    ((this.m = 0), (this.v = void 0), (this.C.o = void 0), (this.C.i = this.C.h = void 0));
  }
  updateKeyByIterator(A, B) {
    let Q = A.T;
    if (Q === this.C) y_();
    if (this.m === 1) return ((Q.u = B), !0);
    let I = Q.B().u;
    if (Q === this.C.i) {
      if (this.A(I, B) > 0) return ((Q.u = B), !0);
      return !1;
    }
    let G = Q.I().u;
    if (Q === this.C.h) {
      if (this.A(G, B) < 0) return ((Q.u = B), !0);
      return !1;
    }
    if (this.A(G, B) >= 0 || this.A(I, B) <= 0) return !1;
    return ((Q.u = B), !0);
  }
  eraseElementByPos(A) {
    if (A < 0 || A > this.m - 1) throw new RangeError();
    let B = this.U(A);
    return (this.S(B), this.m);
  }
  eraseElementByKey(A) {
    if (this.m === 0) return !1;
    let B = this.H(this.v, A);
    if (B === this.C) return !1;
    return (this.S(B), !0);
  }
  eraseElementByIterator(A) {
    let B = A.T;
    if (B === this.C) y_();
    let Q = B.h === void 0;
    if (A.iteratorType === 0) {
      if (Q) A.next();
    } else if (!Q || B.i === void 0) A.next();
    return (this.S(B), A);
  }
  getHeight() {
    if (this.m === 0) return 0;
    function A(B) {
      if (!B) return 0;
      return Math.max(A(B.i), A(B.h)) + 1;
    }
    return A(this.v);
  }
}
class KQ2 extends JQ2 {
  constructor(A, B, Q) {
    super(Q);
    if (((this.T = A), (this.C = B), this.iteratorType === 0))
      ((this.pre = function () {
        if (this.T === this.C.i) y_();
        return ((this.T = this.T.I()), this);
      }),
        (this.next = function () {
          if (this.T === this.C) y_();
          return ((this.T = this.T.B()), this);
        }));
    else
      ((this.pre = function () {
        if (this.T === this.C.h) y_();
        return ((this.T = this.T.B()), this);
      }),
        (this.next = function () {
          if (this.T === this.C) y_();
          return ((this.T = this.T.I()), this);
        }));
  }
  get index() {
    let A = this.T,
      B = this.C.o;
    if (A === this.C) {
      if (B) return B.M - 1;
      return 0;
    }
    let Q = 0;
    if (A.i) Q += A.i.M;
    while (A !== B) {
      let I = A.o;
      if (A === I.h) {
        if (((Q += 1), I.i)) Q += I.i.M;
      }
      A = I;
    }
    return Q;
  }
  isAccessible() {
    return this.T !== this.C;
  }
}
class pV extends KQ2 {
  constructor(A, B, Q, I) {
    super(A, B, I);
    this.container = Q;
  }
  get pointer() {
    if (this.T === this.C) y_();
    let A = this;
    return new Proxy([], {
      get(B, Q) {
        if (Q === '0') return A.T.u;
        else if (Q === '1') return A.T.l;
        return ((B[0] = A.T.u), (B[1] = A.T.l), B[Q]);
      },
      set(B, Q, I) {
        if (Q !== '1') throw new TypeError('prop must be 1');
        return ((A.T.l = I), !0);
      },
    });
  }
  copy() {
    return new pV(this.T, this.C, this.container, this.iteratorType);
  }
}
class HQ2 extends VQ2 {
  constructor(A = [], B, Q) {
    super(B, Q);
    let I = this;
    A.forEach(function (G) {
      I.setElement(G[0], G[1]);
    });
  }
  begin() {
    return new pV(this.C.i || this.C, this.C, this);
  }
  end() {
    return new pV(this.C, this.C, this);
  }
  rBegin() {
    return new pV(this.C.h || this.C, this.C, this, 1);
  }
  rEnd() {
    return new pV(this.C, this.C, this, 1);
  }
  front() {
    if (this.m === 0) return;
    let A = this.C.i;
    return [A.u, A.l];
  }
  back() {
    if (this.m === 0) return;
    let A = this.C.h;
    return [A.u, A.l];
  }
  lowerBound(A) {
    let B = this.R(this.v, A);
    return new pV(B, this.C, this);
  }
  upperBound(A) {
    let B = this.K(this.v, A);
    return new pV(B, this.C, this);
  }
  reverseLowerBound(A) {
    let B = this.L(this.v, A);
    return new pV(B, this.C, this);
  }
  reverseUpperBound(A) {
    let B = this.k(this.v, A);
    return new pV(B, this.C, this);
  }
  forEach(A) {
    this.U(function (B, Q, I) {
      A([B.u, B.l], Q, I);
    });
  }
  setElement(A, B, Q) {
    return this.q(A, B, Q);
  }
  getElementByPos(A) {
    if (A < 0 || A > this.m - 1) throw new RangeError();
    let B = this.U(A);
    return [B.u, B.l];
  }
  find(A) {
    let B = this.H(this.v, A);
    return new pV(B, this.C, this);
  }
  getElementByKey(A) {
    return this.H(this.v, A).l;
  }
  union(A) {
    let B = this;
    return (
      A.forEach(function (Q) {
        B.setElement(Q[0], Q[1]);
      }),
      this.m
    );
  }
  *[Symbol.iterator]() {
    let A = this.m,
      B = this.U();
    for (let Q = 0; Q < A; ++Q) {
      let I = B[Q];
      yield [I.u, I.l];
    }
  }
}
zQ2.OrderedMap = HQ2;

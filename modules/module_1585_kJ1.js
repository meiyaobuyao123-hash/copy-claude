// Module: kJ1
// Params: FR8,y52

y52.exports = G5;
var NC = Bw(),
  Ml1,
  yJ1 = NC.LongBits,
  S52 = NC.base64,
  _52 = NC.utf8;
function No(A, B, Q) {
  ((this.fn = A), (this.len = B), (this.next = void 0), (this.val = Q));
}
function Rl1() {}
function ob6(A) {
  ((this.head = A.head), (this.tail = A.tail), (this.len = A.len), (this.next = A.states));
}
function G5() {
  ((this.len = 0), (this.head = new No(Rl1, 0, 0)), (this.tail = this.head), (this.states = null));
}
var j52 = function A() {
  return NC.Buffer
    ? function B() {
        return (G5.create = function Q() {
          return new Ml1();
        })();
      }
    : function B() {
        return new G5();
      };
};
G5.create = j52();
G5.alloc = function A(B) {
  return new NC.Array(B);
};
if (NC.Array !== Array) G5.alloc = NC.pool(G5.alloc, NC.Array.prototype.subarray);
G5.prototype._push = function A(B, Q, I) {
  return ((this.tail = this.tail.next = new No(B, Q, I)), (this.len += Q), this);
};
function Ol1(A, B, Q) {
  B[Q] = A & 255;
}
function tb6(A, B, Q) {
  while (A > 127) ((B[Q++] = (A & 127) | 128), (A >>>= 7));
  B[Q] = A;
}
function Tl1(A, B) {
  ((this.len = A), (this.next = void 0), (this.val = B));
}
Tl1.prototype = Object.create(No.prototype);
Tl1.prototype.fn = tb6;
G5.prototype.uint32 = function A(B) {
  return (
    (this.len += (this.tail = this.tail.next =
      new Tl1(
        (B = B >>> 0) < 128 ? 1 : B < 16384 ? 2 : B < 2097152 ? 3 : B < 268435456 ? 4 : 5,
        B
      )).len),
    this
  );
};
G5.prototype.int32 = function A(B) {
  return B < 0 ? this._push(Pl1, 10, yJ1.fromNumber(B)) : this.uint32(B);
};
G5.prototype.sint32 = function A(B) {
  return this.uint32(((B << 1) ^ (B >> 31)) >>> 0);
};
function Pl1(A, B, Q) {
  while (A.hi)
    ((B[Q++] = (A.lo & 127) | 128), (A.lo = ((A.lo >>> 7) | (A.hi << 25)) >>> 0), (A.hi >>>= 7));
  while (A.lo > 127) ((B[Q++] = (A.lo & 127) | 128), (A.lo = A.lo >>> 7));
  B[Q++] = A.lo;
}
G5.prototype.uint64 = function A(B) {
  var Q = yJ1.from(B);
  return this._push(Pl1, Q.length(), Q);
};
G5.prototype.int64 = G5.prototype.uint64;
G5.prototype.sint64 = function A(B) {
  var Q = yJ1.from(B).zzEncode();
  return this._push(Pl1, Q.length(), Q);
};
G5.prototype.bool = function A(B) {
  return this._push(Ol1, 1, B ? 1 : 0);
};
function Ll1(A, B, Q) {
  ((B[Q] = A & 255),
    (B[Q + 1] = (A >>> 8) & 255),
    (B[Q + 2] = (A >>> 16) & 255),
    (B[Q + 3] = A >>> 24));
}
G5.prototype.fixed32 = function A(B) {
  return this._push(Ll1, 4, B >>> 0);
};
G5.prototype.sfixed32 = G5.prototype.fixed32;
G5.prototype.fixed64 = function A(B) {
  var Q = yJ1.from(B);
  return this._push(Ll1, 4, Q.lo)._push(Ll1, 4, Q.hi);
};
G5.prototype.sfixed64 = G5.prototype.fixed64;
G5.prototype.float = function A(B) {
  return this._push(NC.float.writeFloatLE, 4, B);
};
G5.prototype.double = function A(B) {
  return this._push(NC.float.writeDoubleLE, 8, B);
};
var eb6 = NC.Array.prototype.set
  ? function A(B, Q, I) {
      Q.set(B, I);
    }
  : function A(B, Q, I) {
      for (var G = 0; G < B.length; ++G) Q[I + G] = B[G];
    };
G5.prototype.bytes = function A(B) {
  var Q = B.length >>> 0;
  if (!Q) return this._push(Ol1, 1, 0);
  if (NC.isString(B)) {
    var I = G5.alloc((Q = S52.length(B)));
    (S52.decode(B, I, 0), (B = I));
  }
  return this.uint32(Q)._push(eb6, Q, B);
};
G5.prototype.string = function A(B) {
  var Q = _52.length(B);
  return Q ? this.uint32(Q)._push(_52.write, Q, B) : this._push(Ol1, 1, 0);
};
G5.prototype.fork = function A() {
  return (
    (this.states = new ob6(this)),
    (this.head = this.tail = new No(Rl1, 0, 0)),
    (this.len = 0),
    this
  );
};
G5.prototype.reset = function A() {
  if (this.states)
    ((this.head = this.states.head),
      (this.tail = this.states.tail),
      (this.len = this.states.len),
      (this.states = this.states.next));
  else ((this.head = this.tail = new No(Rl1, 0, 0)), (this.len = 0));
  return this;
};
G5.prototype.ldelim = function A() {
  var B = this.head,
    Q = this.tail,
    I = this.len;
  if ((this.reset().uint32(I), I)) ((this.tail.next = B.next), (this.tail = Q), (this.len += I));
  return this;
};
G5.prototype.finish = function A() {
  var B = this.head.next,
    Q = this.constructor.alloc(this.len),
    I = 0;
  while (B) (B.fn(B.val, Q, I), (I += B.len), (B = B.next));
  return Q;
};
G5._configure = function (A) {
  ((Ml1 = A), (G5.create = j52()), Ml1._configure());
};

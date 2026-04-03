// Module: fJ1
// Params: CR8,m52

m52.exports = wQ;
var dV = Bw(),
  _l1,
  g52 = dV.LongBits,
  Bg6 = dV.utf8;
function uV(A, B) {
  return RangeError('index out of range: ' + A.pos + ' + ' + (B || 1) + ' > ' + A.len);
}
function wQ(A) {
  ((this.buf = A), (this.pos = 0), (this.len = A.length));
}
var v52 =
    typeof Uint8Array !== 'undefined'
      ? function A(B) {
          if (B instanceof Uint8Array || Array.isArray(B)) return new wQ(B);
          throw Error('illegal buffer');
        }
      : function A(B) {
          if (Array.isArray(B)) return new wQ(B);
          throw Error('illegal buffer');
        },
  h52 = function A() {
    return dV.Buffer
      ? function B(Q) {
          return (wQ.create = function I(G) {
            return dV.Buffer.isBuffer(G) ? new _l1(G) : v52(G);
          })(Q);
        }
      : v52;
  };
wQ.create = h52();
wQ.prototype._slice = dV.Array.prototype.subarray || dV.Array.prototype.slice;
wQ.prototype.uint32 = (function A() {
  var B = 4294967295;
  return function Q() {
    if (((B = (this.buf[this.pos] & 127) >>> 0), this.buf[this.pos++] < 128)) return B;
    if (((B = (B | ((this.buf[this.pos] & 127) << 7)) >>> 0), this.buf[this.pos++] < 128)) return B;
    if (((B = (B | ((this.buf[this.pos] & 127) << 14)) >>> 0), this.buf[this.pos++] < 128))
      return B;
    if (((B = (B | ((this.buf[this.pos] & 127) << 21)) >>> 0), this.buf[this.pos++] < 128))
      return B;
    if (((B = (B | ((this.buf[this.pos] & 15) << 28)) >>> 0), this.buf[this.pos++] < 128)) return B;
    if ((this.pos += 5) > this.len) throw ((this.pos = this.len), uV(this, 10));
    return B;
  };
})();
wQ.prototype.int32 = function A() {
  return this.uint32() | 0;
};
wQ.prototype.sint32 = function A() {
  var B = this.uint32();
  return ((B >>> 1) ^ -(B & 1)) | 0;
};
function Sl1() {
  var A = new g52(0, 0),
    B = 0;
  if (this.len - this.pos > 4) {
    for (; B < 4; ++B)
      if (
        ((A.lo = (A.lo | ((this.buf[this.pos] & 127) << (B * 7))) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return A;
    if (
      ((A.lo = (A.lo | ((this.buf[this.pos] & 127) << 28)) >>> 0),
      (A.hi = (A.hi | ((this.buf[this.pos] & 127) >> 4)) >>> 0),
      this.buf[this.pos++] < 128)
    )
      return A;
    B = 0;
  } else {
    for (; B < 3; ++B) {
      if (this.pos >= this.len) throw uV(this);
      if (
        ((A.lo = (A.lo | ((this.buf[this.pos] & 127) << (B * 7))) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return A;
    }
    return ((A.lo = (A.lo | ((this.buf[this.pos++] & 127) << (B * 7))) >>> 0), A);
  }
  if (this.len - this.pos > 4) {
    for (; B < 5; ++B)
      if (
        ((A.hi = (A.hi | ((this.buf[this.pos] & 127) << (B * 7 + 3))) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return A;
  } else
    for (; B < 5; ++B) {
      if (this.pos >= this.len) throw uV(this);
      if (
        ((A.hi = (A.hi | ((this.buf[this.pos] & 127) << (B * 7 + 3))) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return A;
    }
  throw Error('invalid varint encoding');
}
wQ.prototype.bool = function A() {
  return this.uint32() !== 0;
};
function xJ1(A, B) {
  return (A[B - 4] | (A[B - 3] << 8) | (A[B - 2] << 16) | (A[B - 1] << 24)) >>> 0;
}
wQ.prototype.fixed32 = function A() {
  if (this.pos + 4 > this.len) throw uV(this, 4);
  return xJ1(this.buf, (this.pos += 4));
};
wQ.prototype.sfixed32 = function A() {
  if (this.pos + 4 > this.len) throw uV(this, 4);
  return xJ1(this.buf, (this.pos += 4)) | 0;
};
function b52() {
  if (this.pos + 8 > this.len) throw uV(this, 8);
  return new g52(xJ1(this.buf, (this.pos += 4)), xJ1(this.buf, (this.pos += 4)));
}
wQ.prototype.float = function A() {
  if (this.pos + 4 > this.len) throw uV(this, 4);
  var B = dV.float.readFloatLE(this.buf, this.pos);
  return ((this.pos += 4), B);
};
wQ.prototype.double = function A() {
  if (this.pos + 8 > this.len) throw uV(this, 4);
  var B = dV.float.readDoubleLE(this.buf, this.pos);
  return ((this.pos += 8), B);
};
wQ.prototype.bytes = function A() {
  var B = this.uint32(),
    Q = this.pos,
    I = this.pos + B;
  if (I > this.len) throw uV(this, B);
  if (((this.pos += B), Array.isArray(this.buf))) return this.buf.slice(Q, I);
  if (Q === I) {
    var G = dV.Buffer;
    return G ? G.alloc(0) : new this.buf.constructor(0);
  }
  return this._slice.call(this.buf, Q, I);
};
wQ.prototype.string = function A() {
  var B = this.bytes();
  return Bg6.read(B, 0, B.length);
};
wQ.prototype.skip = function A(B) {
  if (typeof B === 'number') {
    if (this.pos + B > this.len) throw uV(this, B);
    this.pos += B;
  } else
    do if (this.pos >= this.len) throw uV(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
wQ.prototype.skipType = function (A) {
  switch (A) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      while ((A = this.uint32() & 7) !== 4) this.skipType(A);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error('invalid wire type ' + A + ' at offset ' + this.pos);
  }
  return this;
};
wQ._configure = function (A) {
  ((_l1 = A), (wQ.create = h52()), _l1._configure());
  var B = dV.Long ? 'toLong' : 'toNumber';
  dV.merge(wQ.prototype, {
    int64: function Q() {
      return Sl1.call(this)[B](!1);
    },
    uint64: function Q() {
      return Sl1.call(this)[B](!0);
    },
    sint64: function Q() {
      return Sl1.call(this).zzDecode()[B](!1);
    },
    fixed64: function Q() {
      return b52.call(this)[B](!0);
    },
    sfixed64: function Q() {
      return b52.call(this)[B](!1);
    },
  });
};

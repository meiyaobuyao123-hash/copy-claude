// Module: vI2
// Params: ao,Xn1

(function (A, B) {
  function Q(I) {
    return 'default' in I ? I.default : I;
  }
  if (typeof define === 'function' && define.amd)
    define([], function () {
      var I = {};
      return (B(I), Q(I));
    });
  else if (typeof ao === 'object') {
    if ((B(ao), typeof Xn1 === 'object')) Xn1.exports = Q(ao);
  } else
    (function () {
      var I = {};
      (B(I), (A.Long = Q(I)));
    })();
})(
  typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : ao,
  function (A) {
    (Object.defineProperty(A, '__esModule', { value: !0 }), (A.default = void 0));
    var B = null;
    try {
      B = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127,
            3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1,
            5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
            115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0,
            0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
            132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
            173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
            126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132,
            128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1,
            173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32,
            135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
            132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11,
          ])
        ),
        {}
      ).exports;
    } catch {}
    function Q(H1, x, F1) {
      ((this.low = H1 | 0), (this.high = x | 0), (this.unsigned = !!F1));
    }
    (Q.prototype.__isLong__, Object.defineProperty(Q.prototype, '__isLong__', { value: !0 }));
    function I(H1) {
      return (H1 && H1.__isLong__) === !0;
    }
    function G(H1) {
      var x = Math.clz32(H1 & -H1);
      return H1 ? 31 - x : x;
    }
    Q.isLong = I;
    var D = {},
      Z = {};
    function Y(H1, x) {
      var F1, x1, o1;
      if (x) {
        if (((H1 >>>= 0), (o1 = 0 <= H1 && H1 < 256))) {
          if (((x1 = Z[H1]), x1)) return x1;
        }
        if (((F1 = F(H1, 0, !0)), o1)) Z[H1] = F1;
        return F1;
      } else {
        if (((H1 |= 0), (o1 = -128 <= H1 && H1 < 128))) {
          if (((x1 = D[H1]), x1)) return x1;
        }
        if (((F1 = F(H1, H1 < 0 ? -1 : 0, !1)), o1)) D[H1] = F1;
        return F1;
      }
    }
    Q.fromInt = Y;
    function W(H1, x) {
      if (isNaN(H1)) return x ? T : R;
      if (x) {
        if (H1 < 0) return T;
        if (H1 >= N) return g;
      } else {
        if (H1 <= -q) return Y1;
        if (H1 + 1 >= q) return a;
      }
      if (H1 < 0) return W(-H1, x).neg();
      return F((H1 % U) | 0, (H1 / U) | 0, x);
    }
    Q.fromNumber = W;
    function F(H1, x, F1) {
      return new Q(H1, x, F1);
    }
    Q.fromBits = F;
    var J = Math.pow;
    function C(H1, x, F1) {
      if (H1.length === 0) throw Error('empty string');
      if (typeof x === 'number') ((F1 = x), (x = !1));
      else x = !!x;
      if (H1 === 'NaN' || H1 === 'Infinity' || H1 === '+Infinity' || H1 === '-Infinity')
        return x ? T : R;
      if (((F1 = F1 || 10), F1 < 2 || 36 < F1)) throw RangeError('radix');
      var x1;
      if ((x1 = H1.indexOf('-')) > 0) throw Error('interior hyphen');
      else if (x1 === 0) return C(H1.substring(1), x, F1).neg();
      var o1 = W(J(F1, 8)),
        a1 = R;
      for (var PA = 0; PA < H1.length; PA += 8) {
        var cA = Math.min(8, H1.length - PA),
          FA = parseInt(H1.substring(PA, PA + cA), F1);
        if (cA < 8) {
          var f1 = W(J(F1, cA));
          a1 = a1.mul(f1).add(W(FA));
        } else ((a1 = a1.mul(o1)), (a1 = a1.add(W(FA))));
      }
      return ((a1.unsigned = x), a1);
    }
    Q.fromString = C;
    function X(H1, x) {
      if (typeof H1 === 'number') return W(H1, x);
      if (typeof H1 === 'string') return C(H1, x);
      return F(H1.low, H1.high, typeof x === 'boolean' ? x : H1.unsigned);
    }
    Q.fromValue = X;
    var V = 65536,
      K = 16777216,
      U = V * V,
      N = U * U,
      q = N / 2,
      M = Y(K),
      R = Y(0);
    Q.ZERO = R;
    var T = Y(0, !0);
    Q.UZERO = T;
    var O = Y(1);
    Q.ONE = O;
    var S = Y(1, !0);
    Q.UONE = S;
    var f = Y(-1);
    Q.NEG_ONE = f;
    var a = F(-1, 2147483647, !1);
    Q.MAX_VALUE = a;
    var g = F(-1, -1, !0);
    Q.MAX_UNSIGNED_VALUE = g;
    var Y1 = F(0, -2147483648, !1);
    Q.MIN_VALUE = Y1;
    var r = Q.prototype;
    if (
      ((r.toInt = function H1() {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
      (r.toNumber = function H1() {
        if (this.unsigned) return (this.high >>> 0) * U + (this.low >>> 0);
        return this.high * U + (this.low >>> 0);
      }),
      (r.toString = function H1(x) {
        if (((x = x || 10), x < 2 || 36 < x)) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative())
          if (this.eq(Y1)) {
            var F1 = W(x),
              x1 = this.div(F1),
              o1 = x1.mul(F1).sub(this);
            return x1.toString(x) + o1.toInt().toString(x);
          } else return '-' + this.neg().toString(x);
        var a1 = W(J(x, 6), this.unsigned),
          PA = this,
          cA = '';
        while (!0) {
          var FA = PA.div(a1),
            f1 = PA.sub(FA.mul(a1)).toInt() >>> 0,
            B1 = f1.toString(x);
          if (((PA = FA), PA.isZero())) return B1 + cA;
          else {
            while (B1.length < 6) B1 = '0' + B1;
            cA = '' + B1 + cA;
          }
        }
      }),
      (r.getHighBits = function H1() {
        return this.high;
      }),
      (r.getHighBitsUnsigned = function H1() {
        return this.high >>> 0;
      }),
      (r.getLowBits = function H1() {
        return this.low;
      }),
      (r.getLowBitsUnsigned = function H1() {
        return this.low >>> 0;
      }),
      (r.getNumBitsAbs = function H1() {
        if (this.isNegative()) return this.eq(Y1) ? 64 : this.neg().getNumBitsAbs();
        var x = this.high != 0 ? this.high : this.low;
        for (var F1 = 31; F1 > 0; F1--) if ((x & (1 << F1)) != 0) break;
        return this.high != 0 ? F1 + 33 : F1 + 1;
      }),
      (r.isSafeInteger = function H1() {
        var x = this.high >> 21;
        if (!x) return !0;
        if (this.unsigned) return !1;
        return x === -1 && !(this.low === 0 && this.high === -2097152);
      }),
      (r.isZero = function H1() {
        return this.high === 0 && this.low === 0;
      }),
      (r.eqz = r.isZero),
      (r.isNegative = function H1() {
        return !this.unsigned && this.high < 0;
      }),
      (r.isPositive = function H1() {
        return this.unsigned || this.high >= 0;
      }),
      (r.isOdd = function H1() {
        return (this.low & 1) === 1;
      }),
      (r.isEven = function H1() {
        return (this.low & 1) === 0;
      }),
      (r.equals = function H1(x) {
        if (!I(x)) x = X(x);
        if (this.unsigned !== x.unsigned && this.high >>> 31 === 1 && x.high >>> 31 === 1)
          return !1;
        return this.high === x.high && this.low === x.low;
      }),
      (r.eq = r.equals),
      (r.notEquals = function H1(x) {
        return !this.eq(x);
      }),
      (r.neq = r.notEquals),
      (r.ne = r.notEquals),
      (r.lessThan = function H1(x) {
        return this.comp(x) < 0;
      }),
      (r.lt = r.lessThan),
      (r.lessThanOrEqual = function H1(x) {
        return this.comp(x) <= 0;
      }),
      (r.lte = r.lessThanOrEqual),
      (r.le = r.lessThanOrEqual),
      (r.greaterThan = function H1(x) {
        return this.comp(x) > 0;
      }),
      (r.gt = r.greaterThan),
      (r.greaterThanOrEqual = function H1(x) {
        return this.comp(x) >= 0;
      }),
      (r.gte = r.greaterThanOrEqual),
      (r.ge = r.greaterThanOrEqual),
      (r.compare = function H1(x) {
        if (!I(x)) x = X(x);
        if (this.eq(x)) return 0;
        var F1 = this.isNegative(),
          x1 = x.isNegative();
        if (F1 && !x1) return -1;
        if (!F1 && x1) return 1;
        if (!this.unsigned) return this.sub(x).isNegative() ? -1 : 1;
        return x.high >>> 0 > this.high >>> 0 ||
          (x.high === this.high && x.low >>> 0 > this.low >>> 0)
          ? -1
          : 1;
      }),
      (r.comp = r.compare),
      (r.negate = function H1() {
        if (!this.unsigned && this.eq(Y1)) return Y1;
        return this.not().add(O);
      }),
      (r.neg = r.negate),
      (r.add = function H1(x) {
        if (!I(x)) x = X(x);
        var F1 = this.high >>> 16,
          x1 = this.high & 65535,
          o1 = this.low >>> 16,
          a1 = this.low & 65535,
          PA = x.high >>> 16,
          cA = x.high & 65535,
          FA = x.low >>> 16,
          f1 = x.low & 65535,
          B1 = 0,
          v1 = 0,
          M1 = 0,
          AA = 0;
        return (
          (AA += a1 + f1),
          (M1 += AA >>> 16),
          (AA &= 65535),
          (M1 += o1 + FA),
          (v1 += M1 >>> 16),
          (M1 &= 65535),
          (v1 += x1 + cA),
          (B1 += v1 >>> 16),
          (v1 &= 65535),
          (B1 += F1 + PA),
          (B1 &= 65535),
          F((M1 << 16) | AA, (B1 << 16) | v1, this.unsigned)
        );
      }),
      (r.subtract = function H1(x) {
        if (!I(x)) x = X(x);
        return this.add(x.neg());
      }),
      (r.sub = r.subtract),
      (r.multiply = function H1(x) {
        if (this.isZero()) return this;
        if (!I(x)) x = X(x);
        if (B) {
          var F1 = B.mul(this.low, this.high, x.low, x.high);
          return F(F1, B.get_high(), this.unsigned);
        }
        if (x.isZero()) return this.unsigned ? T : R;
        if (this.eq(Y1)) return x.isOdd() ? Y1 : R;
        if (x.eq(Y1)) return this.isOdd() ? Y1 : R;
        if (this.isNegative())
          if (x.isNegative()) return this.neg().mul(x.neg());
          else return this.neg().mul(x).neg();
        else if (x.isNegative()) return this.mul(x.neg()).neg();
        if (this.lt(M) && x.lt(M)) return W(this.toNumber() * x.toNumber(), this.unsigned);
        var x1 = this.high >>> 16,
          o1 = this.high & 65535,
          a1 = this.low >>> 16,
          PA = this.low & 65535,
          cA = x.high >>> 16,
          FA = x.high & 65535,
          f1 = x.low >>> 16,
          B1 = x.low & 65535,
          v1 = 0,
          M1 = 0,
          AA = 0,
          NA = 0;
        return (
          (NA += PA * B1),
          (AA += NA >>> 16),
          (NA &= 65535),
          (AA += a1 * B1),
          (M1 += AA >>> 16),
          (AA &= 65535),
          (AA += PA * f1),
          (M1 += AA >>> 16),
          (AA &= 65535),
          (M1 += o1 * B1),
          (v1 += M1 >>> 16),
          (M1 &= 65535),
          (M1 += a1 * f1),
          (v1 += M1 >>> 16),
          (M1 &= 65535),
          (M1 += PA * FA),
          (v1 += M1 >>> 16),
          (M1 &= 65535),
          (v1 += x1 * B1 + o1 * f1 + a1 * FA + PA * cA),
          (v1 &= 65535),
          F((AA << 16) | NA, (v1 << 16) | M1, this.unsigned)
        );
      }),
      (r.mul = r.multiply),
      (r.divide = function H1(x) {
        if (!I(x)) x = X(x);
        if (x.isZero()) throw Error('division by zero');
        if (B) {
          if (!this.unsigned && this.high === -2147483648 && x.low === -1 && x.high === -1)
            return this;
          var F1 = (this.unsigned ? B.div_u : B.div_s)(this.low, this.high, x.low, x.high);
          return F(F1, B.get_high(), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? T : R;
        var x1, o1, a1;
        if (!this.unsigned) {
          if (this.eq(Y1))
            if (x.eq(O) || x.eq(f)) return Y1;
            else if (x.eq(Y1)) return O;
            else {
              var PA = this.shr(1);
              if (((x1 = PA.div(x).shl(1)), x1.eq(R))) return x.isNegative() ? O : f;
              else return ((o1 = this.sub(x.mul(x1))), (a1 = x1.add(o1.div(x))), a1);
            }
          else if (x.eq(Y1)) return this.unsigned ? T : R;
          if (this.isNegative()) {
            if (x.isNegative()) return this.neg().div(x.neg());
            return this.neg().div(x).neg();
          } else if (x.isNegative()) return this.div(x.neg()).neg();
          a1 = R;
        } else {
          if (!x.unsigned) x = x.toUnsigned();
          if (x.gt(this)) return T;
          if (x.gt(this.shru(1))) return S;
          a1 = T;
        }
        o1 = this;
        while (o1.gte(x)) {
          x1 = Math.max(1, Math.floor(o1.toNumber() / x.toNumber()));
          var cA = Math.ceil(Math.log(x1) / Math.LN2),
            FA = cA <= 48 ? 1 : J(2, cA - 48),
            f1 = W(x1),
            B1 = f1.mul(x);
          while (B1.isNegative() || B1.gt(o1))
            ((x1 -= FA), (f1 = W(x1, this.unsigned)), (B1 = f1.mul(x)));
          if (f1.isZero()) f1 = O;
          ((a1 = a1.add(f1)), (o1 = o1.sub(B1)));
        }
        return a1;
      }),
      (r.div = r.divide),
      (r.modulo = function H1(x) {
        if (!I(x)) x = X(x);
        if (B) {
          var F1 = (this.unsigned ? B.rem_u : B.rem_s)(this.low, this.high, x.low, x.high);
          return F(F1, B.get_high(), this.unsigned);
        }
        return this.sub(this.div(x).mul(x));
      }),
      (r.mod = r.modulo),
      (r.rem = r.modulo),
      (r.not = function H1() {
        return F(~this.low, ~this.high, this.unsigned);
      }),
      (r.countLeadingZeros = function H1() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      }),
      (r.clz = r.countLeadingZeros),
      (r.countTrailingZeros = function H1() {
        return this.low ? G(this.low) : G(this.high) + 32;
      }),
      (r.ctz = r.countTrailingZeros),
      (r.and = function H1(x) {
        if (!I(x)) x = X(x);
        return F(this.low & x.low, this.high & x.high, this.unsigned);
      }),
      (r.or = function H1(x) {
        if (!I(x)) x = X(x);
        return F(this.low | x.low, this.high | x.high, this.unsigned);
      }),
      (r.xor = function H1(x) {
        if (!I(x)) x = X(x);
        return F(this.low ^ x.low, this.high ^ x.high, this.unsigned);
      }),
      (r.shiftLeft = function H1(x) {
        if (I(x)) x = x.toInt();
        if ((x &= 63) === 0) return this;
        else if (x < 32)
          return F(this.low << x, (this.high << x) | (this.low >>> (32 - x)), this.unsigned);
        else return F(0, this.low << (x - 32), this.unsigned);
      }),
      (r.shl = r.shiftLeft),
      (r.shiftRight = function H1(x) {
        if (I(x)) x = x.toInt();
        if ((x &= 63) === 0) return this;
        else if (x < 32)
          return F((this.low >>> x) | (this.high << (32 - x)), this.high >> x, this.unsigned);
        else return F(this.high >> (x - 32), this.high >= 0 ? 0 : -1, this.unsigned);
      }),
      (r.shr = r.shiftRight),
      (r.shiftRightUnsigned = function H1(x) {
        if (I(x)) x = x.toInt();
        if ((x &= 63) === 0) return this;
        if (x < 32)
          return F((this.low >>> x) | (this.high << (32 - x)), this.high >>> x, this.unsigned);
        if (x === 32) return F(this.high, 0, this.unsigned);
        return F(this.high >>> (x - 32), 0, this.unsigned);
      }),
      (r.shru = r.shiftRightUnsigned),
      (r.shr_u = r.shiftRightUnsigned),
      (r.rotateLeft = function H1(x) {
        var F1;
        if (I(x)) x = x.toInt();
        if ((x &= 63) === 0) return this;
        if (x === 32) return F(this.high, this.low, this.unsigned);
        if (x < 32)
          return (
            (F1 = 32 - x),
            F(
              (this.low << x) | (this.high >>> F1),
              (this.high << x) | (this.low >>> F1),
              this.unsigned
            )
          );
        return (
          (x -= 32),
          (F1 = 32 - x),
          F(
            (this.high << x) | (this.low >>> F1),
            (this.low << x) | (this.high >>> F1),
            this.unsigned
          )
        );
      }),
      (r.rotl = r.rotateLeft),
      (r.rotateRight = function H1(x) {
        var F1;
        if (I(x)) x = x.toInt();
        if ((x &= 63) === 0) return this;
        if (x === 32) return F(this.high, this.low, this.unsigned);
        if (x < 32)
          return (
            (F1 = 32 - x),
            F(
              (this.high << F1) | (this.low >>> x),
              (this.low << F1) | (this.high >>> x),
              this.unsigned
            )
          );
        return (
          (x -= 32),
          (F1 = 32 - x),
          F(
            (this.low << F1) | (this.high >>> x),
            (this.high << F1) | (this.low >>> x),
            this.unsigned
          )
        );
      }),
      (r.rotr = r.rotateRight),
      (r.toSigned = function H1() {
        if (!this.unsigned) return this;
        return F(this.low, this.high, !1);
      }),
      (r.toUnsigned = function H1() {
        if (this.unsigned) return this;
        return F(this.low, this.high, !0);
      }),
      (r.toBytes = function H1(x) {
        return x ? this.toBytesLE() : this.toBytesBE();
      }),
      (r.toBytesLE = function H1() {
        var x = this.high,
          F1 = this.low;
        return [
          F1 & 255,
          (F1 >>> 8) & 255,
          (F1 >>> 16) & 255,
          F1 >>> 24,
          x & 255,
          (x >>> 8) & 255,
          (x >>> 16) & 255,
          x >>> 24,
        ];
      }),
      (r.toBytesBE = function H1() {
        var x = this.high,
          F1 = this.low;
        return [
          x >>> 24,
          (x >>> 16) & 255,
          (x >>> 8) & 255,
          x & 255,
          F1 >>> 24,
          (F1 >>> 16) & 255,
          (F1 >>> 8) & 255,
          F1 & 255,
        ];
      }),
      (Q.fromBytes = function H1(x, F1, x1) {
        return x1 ? Q.fromBytesLE(x, F1) : Q.fromBytesBE(x, F1);
      }),
      (Q.fromBytesLE = function H1(x, F1) {
        return new Q(
          x[0] | (x[1] << 8) | (x[2] << 16) | (x[3] << 24),
          x[4] | (x[5] << 8) | (x[6] << 16) | (x[7] << 24),
          F1
        );
      }),
      (Q.fromBytesBE = function H1(x, F1) {
        return new Q(
          (x[4] << 24) | (x[5] << 16) | (x[6] << 8) | x[7],
          (x[0] << 24) | (x[1] << 16) | (x[2] << 8) | x[3],
          F1
        );
      }),
      typeof BigInt === 'function')
    )
      ((Q.fromBigInt = function H1(x, F1) {
        var x1 = Number(BigInt.asIntN(32, x)),
          o1 = Number(BigInt.asIntN(32, x >> BigInt(32)));
        return F(x1, o1, F1);
      }),
        (Q.fromValue = function H1(x, F1) {
          if (typeof x === 'bigint') return fromBigInt(x, F1);
          return X(x, F1);
        }),
        (r.toBigInt = function H1() {
          var x = BigInt(this.low >>> 0),
            F1 = BigInt(this.unsigned ? this.high >>> 0 : this.high);
          return (F1 << BigInt(32)) | x;
        }));
    var w1 = (A.default = Q);
  }
);

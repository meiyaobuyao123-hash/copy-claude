// Module: Cg1
// Params: FR0,gZ1

(function (A) {
  var B,
    Q = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    I = Math.ceil,
    G = Math.floor,
    D = '[BigNumber Error] ',
    Z = D + 'Number primitive has more than 15 significant digits: ',
    Y = 100000000000000,
    W = 14,
    F = 9007199254740991,
    J = [
      1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 10000000000, 100000000000, 1000000000000,
      10000000000000,
    ],
    C = 1e7,
    X = 1e9;
  function V(O) {
    var S,
      f,
      a,
      g = (B1.prototype = { constructor: B1, toString: null, valueOf: null }),
      Y1 = new B1(1),
      r = 20,
      w1 = 4,
      H1 = -7,
      x = 21,
      F1 = -1e7,
      x1 = 1e7,
      o1 = !1,
      a1 = 1,
      PA = 0,
      cA = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: ' ',
        suffix: '',
      },
      FA = '0123456789abcdefghijklmnopqrstuvwxyz',
      f1 = !0;
    function B1(o, A1) {
      var I1,
        E1,
        N1,
        t,
        S1,
        k1,
        d1,
        e1,
        IA = this;
      if (!(IA instanceof B1)) return new B1(o, A1);
      if (A1 == null) {
        if (o && o._isBigNumber === !0) {
          if (((IA.s = o.s), !o.c || o.e > x1)) IA.c = IA.e = null;
          else if (o.e < F1) IA.c = [(IA.e = 0)];
          else ((IA.e = o.e), (IA.c = o.c.slice()));
          return;
        }
        if ((k1 = typeof o == 'number') && o * 0 == 0) {
          if (((IA.s = 1 / o < 0 ? ((o = -o), -1) : 1), o === ~~o)) {
            for (t = 0, S1 = o; S1 >= 10; S1 /= 10, t++);
            if (t > x1) IA.c = IA.e = null;
            else ((IA.e = t), (IA.c = [o]));
            return;
          }
          e1 = String(o);
        } else {
          if (!Q.test((e1 = String(o)))) return a(IA, e1, k1);
          IA.s = e1.charCodeAt(0) == 45 ? ((e1 = e1.slice(1)), -1) : 1;
        }
        if ((t = e1.indexOf('.')) > -1) e1 = e1.replace('.', '');
        if ((S1 = e1.search(/e/i)) > 0) {
          if (t < 0) t = S1;
          ((t += +e1.slice(S1 + 1)), (e1 = e1.substring(0, S1)));
        } else if (t < 0) t = e1.length;
      } else {
        if ((q(A1, 2, FA.length, 'Base'), A1 == 10 && f1))
          return ((IA = new B1(o)), NA(IA, r + IA.e + 1, w1));
        if (((e1 = String(o)), (k1 = typeof o == 'number'))) {
          if (o * 0 != 0) return a(IA, e1, k1, A1);
          if (
            ((IA.s = 1 / o < 0 ? ((e1 = e1.slice(1)), -1) : 1),
            B1.DEBUG && e1.replace(/^0\.0*|\./, '').length > 15)
          )
            throw Error(Z + o);
        } else IA.s = e1.charCodeAt(0) === 45 ? ((e1 = e1.slice(1)), -1) : 1;
        ((I1 = FA.slice(0, A1)), (t = S1 = 0));
        for (d1 = e1.length; S1 < d1; S1++)
          if (I1.indexOf((E1 = e1.charAt(S1))) < 0) {
            if (E1 == '.') {
              if (S1 > t) {
                t = d1;
                continue;
              }
            } else if (!N1) {
              if (
                (e1 == e1.toUpperCase() && (e1 = e1.toLowerCase())) ||
                (e1 == e1.toLowerCase() && (e1 = e1.toUpperCase()))
              ) {
                ((N1 = !0), (S1 = -1), (t = 0));
                continue;
              }
            }
            return a(IA, String(o), k1, A1);
          }
        if (((k1 = !1), (e1 = f(e1, A1, 10, IA.s)), (t = e1.indexOf('.')) > -1))
          e1 = e1.replace('.', '');
        else t = e1.length;
      }
      for (S1 = 0; e1.charCodeAt(S1) === 48; S1++);
      for (d1 = e1.length; e1.charCodeAt(--d1) === 48; );
      if ((e1 = e1.slice(S1, ++d1))) {
        if (((d1 -= S1), k1 && B1.DEBUG && d1 > 15 && (o > F || o !== G(o))))
          throw Error(Z + IA.s * o);
        if ((t = t - S1 - 1) > x1) IA.c = IA.e = null;
        else if (t < F1) IA.c = [(IA.e = 0)];
        else {
          if (((IA.e = t), (IA.c = []), (S1 = (t + 1) % W), t < 0)) S1 += W;
          if (S1 < d1) {
            if (S1) IA.c.push(+e1.slice(0, S1));
            for (d1 -= W; S1 < d1; ) IA.c.push(+e1.slice(S1, (S1 += W)));
            S1 = W - (e1 = e1.slice(S1)).length;
          } else S1 -= d1;
          for (; S1--; e1 += '0');
          IA.c.push(+e1);
        }
      } else IA.c = [(IA.e = 0)];
    }
    ((B1.clone = V),
      (B1.ROUND_UP = 0),
      (B1.ROUND_DOWN = 1),
      (B1.ROUND_CEIL = 2),
      (B1.ROUND_FLOOR = 3),
      (B1.ROUND_HALF_UP = 4),
      (B1.ROUND_HALF_DOWN = 5),
      (B1.ROUND_HALF_EVEN = 6),
      (B1.ROUND_HALF_CEIL = 7),
      (B1.ROUND_HALF_FLOOR = 8),
      (B1.EUCLID = 9),
      (B1.config = B1.set =
        function (o) {
          var A1, I1;
          if (o != null)
            if (typeof o == 'object') {
              if (o.hasOwnProperty((A1 = 'DECIMAL_PLACES')))
                ((I1 = o[A1]), q(I1, 0, X, A1), (r = I1));
              if (o.hasOwnProperty((A1 = 'ROUNDING_MODE')))
                ((I1 = o[A1]), q(I1, 0, 8, A1), (w1 = I1));
              if (o.hasOwnProperty((A1 = 'EXPONENTIAL_AT')))
                if (((I1 = o[A1]), I1 && I1.pop))
                  (q(I1[0], -X, 0, A1), q(I1[1], 0, X, A1), (H1 = I1[0]), (x = I1[1]));
                else (q(I1, -X, X, A1), (H1 = -(x = I1 < 0 ? -I1 : I1)));
              if (o.hasOwnProperty((A1 = 'RANGE')))
                if (((I1 = o[A1]), I1 && I1.pop))
                  (q(I1[0], -X, -1, A1), q(I1[1], 1, X, A1), (F1 = I1[0]), (x1 = I1[1]));
                else if ((q(I1, -X, X, A1), I1)) F1 = -(x1 = I1 < 0 ? -I1 : I1);
                else throw Error(D + A1 + ' cannot be zero: ' + I1);
              if (o.hasOwnProperty((A1 = 'CRYPTO')))
                if (((I1 = o[A1]), I1 === !!I1))
                  if (I1)
                    if (
                      typeof crypto != 'undefined' &&
                      crypto &&
                      (crypto.getRandomValues || crypto.randomBytes)
                    )
                      o1 = I1;
                    else throw ((o1 = !I1), Error(D + 'crypto unavailable'));
                  else o1 = I1;
                else throw Error(D + A1 + ' not true or false: ' + I1);
              if (o.hasOwnProperty((A1 = 'MODULO_MODE')))
                ((I1 = o[A1]), q(I1, 0, 9, A1), (a1 = I1));
              if (o.hasOwnProperty((A1 = 'POW_PRECISION')))
                ((I1 = o[A1]), q(I1, 0, X, A1), (PA = I1));
              if (o.hasOwnProperty((A1 = 'FORMAT')))
                if (((I1 = o[A1]), typeof I1 == 'object')) cA = I1;
                else throw Error(D + A1 + ' not an object: ' + I1);
              if (o.hasOwnProperty((A1 = 'ALPHABET')))
                if (((I1 = o[A1]), typeof I1 == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(I1)))
                  ((f1 = I1.slice(0, 10) == '0123456789'), (FA = I1));
                else throw Error(D + A1 + ' invalid: ' + I1);
            } else throw Error(D + 'Object expected: ' + o);
          return {
            DECIMAL_PLACES: r,
            ROUNDING_MODE: w1,
            EXPONENTIAL_AT: [H1, x],
            RANGE: [F1, x1],
            CRYPTO: o1,
            MODULO_MODE: a1,
            POW_PRECISION: PA,
            FORMAT: cA,
            ALPHABET: FA,
          };
        }),
      (B1.isBigNumber = function (o) {
        if (!o || o._isBigNumber !== !0) return !1;
        if (!B1.DEBUG) return !0;
        var A1,
          I1,
          E1 = o.c,
          N1 = o.e,
          t = o.s;
        A: if ({}.toString.call(E1) == '[object Array]') {
          if ((t === 1 || t === -1) && N1 >= -X && N1 <= X && N1 === G(N1)) {
            if (E1[0] === 0) {
              if (N1 === 0 && E1.length === 1) return !0;
              break A;
            }
            if (((A1 = (N1 + 1) % W), A1 < 1)) A1 += W;
            if (String(E1[0]).length == A1) {
              for (A1 = 0; A1 < E1.length; A1++)
                if (((I1 = E1[A1]), I1 < 0 || I1 >= Y || I1 !== G(I1))) break A;
              if (I1 !== 0) return !0;
            }
          }
        } else if (E1 === null && N1 === null && (t === null || t === 1 || t === -1)) return !0;
        throw Error(D + 'Invalid BigNumber: ' + o);
      }),
      (B1.maximum = B1.max =
        function () {
          return M1(arguments, -1);
        }),
      (B1.minimum = B1.min =
        function () {
          return M1(arguments, 1);
        }),
      (B1.random = (function () {
        var o = 9007199254740992,
          A1 =
            (Math.random() * o) & 2097151
              ? function () {
                  return G(Math.random() * o);
                }
              : function () {
                  return (
                    ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0)
                  );
                };
        return function (I1) {
          var E1,
            N1,
            t,
            S1,
            k1,
            d1 = 0,
            e1 = [],
            IA = new B1(Y1);
          if (I1 == null) I1 = r;
          else q(I1, 0, X);
          if (((S1 = I(I1 / W)), o1))
            if (crypto.getRandomValues) {
              E1 = crypto.getRandomValues(new Uint32Array((S1 *= 2)));
              for (; d1 < S1; )
                if (((k1 = E1[d1] * 131072 + (E1[d1 + 1] >>> 11)), k1 >= 9000000000000000))
                  ((N1 = crypto.getRandomValues(new Uint32Array(2))),
                    (E1[d1] = N1[0]),
                    (E1[d1 + 1] = N1[1]));
                else (e1.push(k1 % 100000000000000), (d1 += 2));
              d1 = S1 / 2;
            } else if (crypto.randomBytes) {
              E1 = crypto.randomBytes((S1 *= 7));
              for (; d1 < S1; )
                if (
                  ((k1 =
                    (E1[d1] & 31) * 281474976710656 +
                    E1[d1 + 1] * 1099511627776 +
                    E1[d1 + 2] * 4294967296 +
                    E1[d1 + 3] * 16777216 +
                    (E1[d1 + 4] << 16) +
                    (E1[d1 + 5] << 8) +
                    E1[d1 + 6]),
                  k1 >= 9000000000000000)
                )
                  crypto.randomBytes(7).copy(E1, d1);
                else (e1.push(k1 % 100000000000000), (d1 += 7));
              d1 = S1 / 7;
            } else throw ((o1 = !1), Error(D + 'crypto unavailable'));
          if (!o1) {
            for (; d1 < S1; )
              if (((k1 = A1()), k1 < 9000000000000000)) e1[d1++] = k1 % 100000000000000;
          }
          if (((S1 = e1[--d1]), (I1 %= W), S1 && I1))
            ((k1 = J[W - I1]), (e1[d1] = G(S1 / k1) * k1));
          for (; e1[d1] === 0; e1.pop(), d1--);
          if (d1 < 0) e1 = [(t = 0)];
          else {
            for (t = -1; e1[0] === 0; e1.splice(0, 1), t -= W);
            for (d1 = 1, k1 = e1[0]; k1 >= 10; k1 /= 10, d1++);
            if (d1 < W) t -= W - d1;
          }
          return ((IA.e = t), (IA.c = e1), IA);
        };
      })()),
      (B1.sum = function () {
        var o = 1,
          A1 = arguments,
          I1 = new B1(A1[0]);
        for (; o < A1.length; ) I1 = I1.plus(A1[o++]);
        return I1;
      }),
      (f = (function () {
        var o = '0123456789';
        function A1(I1, E1, N1, t) {
          var S1,
            k1 = [0],
            d1,
            e1 = 0,
            IA = I1.length;
          for (; e1 < IA; ) {
            for (d1 = k1.length; d1--; k1[d1] *= E1);
            k1[0] += t.indexOf(I1.charAt(e1++));
            for (S1 = 0; S1 < k1.length; S1++)
              if (k1[S1] > N1 - 1) {
                if (k1[S1 + 1] == null) k1[S1 + 1] = 0;
                ((k1[S1 + 1] += (k1[S1] / N1) | 0), (k1[S1] %= N1));
              }
          }
          return k1.reverse();
        }
        return function (I1, E1, N1, t, S1) {
          var k1,
            d1,
            e1,
            IA,
            zA,
            X0,
            kA,
            z0,
            s2 = I1.indexOf('.'),
            B2 = r,
            E2 = w1;
          if (s2 >= 0)
            ((IA = PA),
              (PA = 0),
              (I1 = I1.replace('.', '')),
              (z0 = new B1(E1)),
              (X0 = z0.pow(I1.length - s2)),
              (PA = IA),
              (z0.c = A1(T(U(X0.c), X0.e, '0'), 10, N1, o)),
              (z0.e = z0.c.length));
          ((kA = A1(I1, E1, N1, S1 ? ((k1 = FA), o) : ((k1 = o), FA))), (e1 = IA = kA.length));
          for (; kA[--IA] == 0; kA.pop());
          if (!kA[0]) return k1.charAt(0);
          if (s2 < 0) --e1;
          else
            ((X0.c = kA),
              (X0.e = e1),
              (X0.s = t),
              (X0 = S(X0, z0, B2, E2, N1)),
              (kA = X0.c),
              (zA = X0.r),
              (e1 = X0.e));
          if (
            ((d1 = e1 + B2 + 1),
            (s2 = kA[d1]),
            (IA = N1 / 2),
            (zA = zA || d1 < 0 || kA[d1 + 1] != null),
            (zA =
              E2 < 4
                ? (s2 != null || zA) && (E2 == 0 || E2 == (X0.s < 0 ? 3 : 2))
                : s2 > IA ||
                  (s2 == IA &&
                    (E2 == 4 || zA || (E2 == 6 && kA[d1 - 1] & 1) || E2 == (X0.s < 0 ? 8 : 7)))),
            d1 < 1 || !kA[0])
          )
            I1 = zA ? T(k1.charAt(1), -B2, k1.charAt(0)) : k1.charAt(0);
          else {
            if (((kA.length = d1), zA)) {
              for (--N1; ++kA[--d1] > N1; ) if (((kA[d1] = 0), !d1)) (++e1, (kA = [1].concat(kA)));
            }
            for (IA = kA.length; !kA[--IA]; );
            for (s2 = 0, I1 = ''; s2 <= IA; I1 += k1.charAt(kA[s2++]));
            I1 = T(I1, e1, k1.charAt(0));
          }
          return I1;
        };
      })()),
      (S = (function () {
        function o(E1, N1, t) {
          var S1,
            k1,
            d1,
            e1,
            IA = 0,
            zA = E1.length,
            X0 = N1 % C,
            kA = (N1 / C) | 0;
          for (E1 = E1.slice(); zA--; )
            ((d1 = E1[zA] % C),
              (e1 = (E1[zA] / C) | 0),
              (S1 = kA * d1 + e1 * X0),
              (k1 = X0 * d1 + (S1 % C) * C + IA),
              (IA = ((k1 / t) | 0) + ((S1 / C) | 0) + kA * e1),
              (E1[zA] = k1 % t));
          if (IA) E1 = [IA].concat(E1);
          return E1;
        }
        function A1(E1, N1, t, S1) {
          var k1, d1;
          if (t != S1) d1 = t > S1 ? 1 : -1;
          else
            for (k1 = d1 = 0; k1 < t; k1++)
              if (E1[k1] != N1[k1]) {
                d1 = E1[k1] > N1[k1] ? 1 : -1;
                break;
              }
          return d1;
        }
        function I1(E1, N1, t, S1) {
          var k1 = 0;
          for (; t--; )
            ((E1[t] -= k1), (k1 = E1[t] < N1[t] ? 1 : 0), (E1[t] = k1 * S1 + E1[t] - N1[t]));
          for (; !E1[0] && E1.length > 1; E1.splice(0, 1));
        }
        return function (E1, N1, t, S1, k1) {
          var d1,
            e1,
            IA,
            zA,
            X0,
            kA,
            z0,
            s2,
            B2,
            E2,
            g2,
            Q9,
            o4,
            Z0,
            h0,
            m0,
            L0,
            H0 = E1.s == N1.s ? 1 : -1,
            j2 = E1.c,
            y9 = N1.c;
          if (!j2 || !j2[0] || !y9 || !y9[0])
            return new B1(
              !E1.s || !N1.s || (j2 ? y9 && j2[0] == y9[0] : !y9)
                ? NaN
                : (j2 && j2[0] == 0) || !y9
                  ? H0 * 0
                  : H0 / 0
            );
          if (((s2 = new B1(H0)), (B2 = s2.c = []), (e1 = E1.e - N1.e), (H0 = t + e1 + 1), !k1))
            ((k1 = Y), (e1 = K(E1.e / W) - K(N1.e / W)), (H0 = (H0 / W) | 0));
          for (IA = 0; y9[IA] == (j2[IA] || 0); IA++);
          if (y9[IA] > (j2[IA] || 0)) e1--;
          if (H0 < 0) (B2.push(1), (zA = !0));
          else {
            if (
              ((Z0 = j2.length),
              (m0 = y9.length),
              (IA = 0),
              (H0 += 2),
              (X0 = G(k1 / (y9[0] + 1))),
              X0 > 1)
            )
              ((y9 = o(y9, X0, k1)), (j2 = o(j2, X0, k1)), (m0 = y9.length), (Z0 = j2.length));
            ((o4 = m0), (E2 = j2.slice(0, m0)), (g2 = E2.length));
            for (; g2 < m0; E2[g2++] = 0);
            if (((L0 = y9.slice()), (L0 = [0].concat(L0)), (h0 = y9[0]), y9[1] >= k1 / 2)) h0++;
            do {
              if (((X0 = 0), (d1 = A1(y9, E2, m0, g2)), d1 < 0)) {
                if (((Q9 = E2[0]), m0 != g2)) Q9 = Q9 * k1 + (E2[1] || 0);
                if (((X0 = G(Q9 / h0)), X0 > 1)) {
                  if (X0 >= k1) X0 = k1 - 1;
                  ((kA = o(y9, X0, k1)), (z0 = kA.length), (g2 = E2.length));
                  while (A1(kA, E2, z0, g2) == 1)
                    (X0--, I1(kA, m0 < z0 ? L0 : y9, z0, k1), (z0 = kA.length), (d1 = 1));
                } else {
                  if (X0 == 0) d1 = X0 = 1;
                  ((kA = y9.slice()), (z0 = kA.length));
                }
                if (z0 < g2) kA = [0].concat(kA);
                if ((I1(E2, kA, g2, k1), (g2 = E2.length), d1 == -1))
                  while (A1(y9, E2, m0, g2) < 1)
                    (X0++, I1(E2, m0 < g2 ? L0 : y9, g2, k1), (g2 = E2.length));
              } else if (d1 === 0) (X0++, (E2 = [0]));
              if (((B2[IA++] = X0), E2[0])) E2[g2++] = j2[o4] || 0;
              else ((E2 = [j2[o4]]), (g2 = 1));
            } while ((o4++ < Z0 || E2[0] != null) && H0--);
            if (((zA = E2[0] != null), !B2[0])) B2.splice(0, 1);
          }
          if (k1 == Y) {
            for (IA = 1, H0 = B2[0]; H0 >= 10; H0 /= 10, IA++);
            NA(s2, t + (s2.e = IA + e1 * W - 1) + 1, S1, zA);
          } else ((s2.e = e1), (s2.r = +zA));
          return s2;
        };
      })()));
    function v1(o, A1, I1, E1) {
      var N1, t, S1, k1, d1;
      if (I1 == null) I1 = w1;
      else q(I1, 0, 8);
      if (!o.c) return o.toString();
      if (((N1 = o.c[0]), (S1 = o.e), A1 == null))
        ((d1 = U(o.c)),
          (d1 = E1 == 1 || (E1 == 2 && (S1 <= H1 || S1 >= x)) ? R(d1, S1) : T(d1, S1, '0')));
      else if (
        ((o = NA(new B1(o), A1, I1)),
        (t = o.e),
        (d1 = U(o.c)),
        (k1 = d1.length),
        E1 == 1 || (E1 == 2 && (A1 <= t || t <= H1)))
      ) {
        for (; k1 < A1; d1 += '0', k1++);
        d1 = R(d1, t);
      } else if (((A1 -= S1), (d1 = T(d1, t, '0')), t + 1 > k1)) {
        if (--A1 > 0) for (d1 += '.'; A1--; d1 += '0');
      } else if (((A1 += t - k1), A1 > 0)) {
        if (t + 1 == k1) d1 += '.';
        for (; A1--; d1 += '0');
      }
      return o.s < 0 && N1 ? '-' + d1 : d1;
    }
    function M1(o, A1) {
      var I1,
        E1,
        N1 = 1,
        t = new B1(o[0]);
      for (; N1 < o.length; N1++)
        if (((E1 = new B1(o[N1])), !E1.s || (I1 = N(t, E1)) === A1 || (I1 === 0 && t.s === A1)))
          t = E1;
      return t;
    }
    function AA(o, A1, I1) {
      var E1 = 1,
        N1 = A1.length;
      for (; !A1[--N1]; A1.pop());
      for (N1 = A1[0]; N1 >= 10; N1 /= 10, E1++);
      if ((I1 = E1 + I1 * W - 1) > x1) o.c = o.e = null;
      else if (I1 < F1) o.c = [(o.e = 0)];
      else ((o.e = I1), (o.c = A1));
      return o;
    }
    a = (function () {
      var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        A1 = /^([^.]+)\.$/,
        I1 = /^\.([^.]+)$/,
        E1 = /^-?(Infinity|NaN)$/,
        N1 = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function (t, S1, k1, d1) {
        var e1,
          IA = k1 ? S1 : S1.replace(N1, '');
        if (E1.test(IA)) t.s = isNaN(IA) ? null : IA < 0 ? -1 : 1;
        else {
          if (!k1) {
            if (
              ((IA = IA.replace(o, function (zA, X0, kA) {
                return (
                  (e1 = (kA = kA.toLowerCase()) == 'x' ? 16 : kA == 'b' ? 2 : 8),
                  !d1 || d1 == e1 ? X0 : zA
                );
              })),
              d1)
            )
              ((e1 = d1), (IA = IA.replace(A1, '$1').replace(I1, '0.$1')));
            if (S1 != IA) return new B1(IA, e1);
          }
          if (B1.DEBUG) throw Error(D + 'Not a' + (d1 ? ' base ' + d1 : '') + ' number: ' + S1);
          t.s = null;
        }
        t.c = t.e = null;
      };
    })();
    function NA(o, A1, I1, E1) {
      var N1,
        t,
        S1,
        k1,
        d1,
        e1,
        IA,
        zA = o.c,
        X0 = J;
      if (zA) {
        A: {
          for (N1 = 1, k1 = zA[0]; k1 >= 10; k1 /= 10, N1++);
          if (((t = A1 - N1), t < 0))
            ((t += W), (S1 = A1), (d1 = zA[(e1 = 0)]), (IA = G((d1 / X0[N1 - S1 - 1]) % 10)));
          else if (((e1 = I((t + 1) / W)), e1 >= zA.length))
            if (E1) {
              for (; zA.length <= e1; zA.push(0));
              ((d1 = IA = 0), (N1 = 1), (t %= W), (S1 = t - W + 1));
            } else break A;
          else {
            d1 = k1 = zA[e1];
            for (N1 = 1; k1 >= 10; k1 /= 10, N1++);
            ((t %= W), (S1 = t - W + N1), (IA = S1 < 0 ? 0 : G((d1 / X0[N1 - S1 - 1]) % 10)));
          }
          if (
            ((E1 = E1 || A1 < 0 || zA[e1 + 1] != null || (S1 < 0 ? d1 : d1 % X0[N1 - S1 - 1])),
            (E1 =
              I1 < 4
                ? (IA || E1) && (I1 == 0 || I1 == (o.s < 0 ? 3 : 2))
                : IA > 5 ||
                  (IA == 5 &&
                    (I1 == 4 ||
                      E1 ||
                      (I1 == 6 &&
                        ((t > 0 ? (S1 > 0 ? d1 / X0[N1 - S1] : 0) : zA[e1 - 1]) % 10) & 1) ||
                      I1 == (o.s < 0 ? 8 : 7)))),
            A1 < 1 || !zA[0])
          ) {
            if (((zA.length = 0), E1))
              ((A1 -= o.e + 1), (zA[0] = X0[(W - (A1 % W)) % W]), (o.e = -A1 || 0));
            else zA[0] = o.e = 0;
            return o;
          }
          if (t == 0) ((zA.length = e1), (k1 = 1), e1--);
          else
            ((zA.length = e1 + 1),
              (k1 = X0[W - t]),
              (zA[e1] = S1 > 0 ? G((d1 / X0[N1 - S1]) % X0[S1]) * k1 : 0));
          if (E1)
            for (;;)
              if (e1 == 0) {
                for (t = 1, S1 = zA[0]; S1 >= 10; S1 /= 10, t++);
                S1 = zA[0] += k1;
                for (k1 = 1; S1 >= 10; S1 /= 10, k1++);
                if (t != k1) {
                  if ((o.e++, zA[0] == Y)) zA[0] = 1;
                }
                break;
              } else {
                if (((zA[e1] += k1), zA[e1] != Y)) break;
                ((zA[e1--] = 0), (k1 = 1));
              }
          for (t = zA.length; zA[--t] === 0; zA.pop());
        }
        if (o.e > x1) o.c = o.e = null;
        else if (o.e < F1) o.c = [(o.e = 0)];
      }
      return o;
    }
    function OA(o) {
      var A1,
        I1 = o.e;
      if (I1 === null) return o.toString();
      return (
        (A1 = U(o.c)),
        (A1 = I1 <= H1 || I1 >= x ? R(A1, I1) : T(A1, I1, '0')),
        o.s < 0 ? '-' + A1 : A1
      );
    }
    if (
      ((g.absoluteValue = g.abs =
        function () {
          var o = new B1(this);
          if (o.s < 0) o.s = 1;
          return o;
        }),
      (g.comparedTo = function (o, A1) {
        return N(this, new B1(o, A1));
      }),
      (g.decimalPlaces = g.dp =
        function (o, A1) {
          var I1,
            E1,
            N1,
            t = this;
          if (o != null) {
            if ((q(o, 0, X), A1 == null)) A1 = w1;
            else q(A1, 0, 8);
            return NA(new B1(t), o + t.e + 1, A1);
          }
          if (!(I1 = t.c)) return null;
          if (((E1 = ((N1 = I1.length - 1) - K(this.e / W)) * W), (N1 = I1[N1])))
            for (; N1 % 10 == 0; N1 /= 10, E1--);
          if (E1 < 0) E1 = 0;
          return E1;
        }),
      (g.dividedBy = g.div =
        function (o, A1) {
          return S(this, new B1(o, A1), r, w1);
        }),
      (g.dividedToIntegerBy = g.idiv =
        function (o, A1) {
          return S(this, new B1(o, A1), 0, 1);
        }),
      (g.exponentiatedBy = g.pow =
        function (o, A1) {
          var I1,
            E1,
            N1,
            t,
            S1,
            k1,
            d1,
            e1,
            IA,
            zA = this;
          if (((o = new B1(o)), o.c && !o.isInteger()))
            throw Error(D + 'Exponent not an integer: ' + OA(o));
          if (A1 != null) A1 = new B1(A1);
          if (
            ((k1 = o.e > 14),
            !zA.c || !zA.c[0] || (zA.c[0] == 1 && !zA.e && zA.c.length == 1) || !o.c || !o.c[0])
          )
            return (
              (IA = new B1(Math.pow(+OA(zA), k1 ? o.s * (2 - M(o)) : +OA(o)))),
              A1 ? IA.mod(A1) : IA
            );
          if (((d1 = o.s < 0), A1)) {
            if (A1.c ? !A1.c[0] : !A1.s) return new B1(NaN);
            if (((E1 = !d1 && zA.isInteger() && A1.isInteger()), E1)) zA = zA.mod(A1);
          } else if (
            o.e > 9 &&
            (zA.e > 0 ||
              zA.e < -1 ||
              (zA.e == 0
                ? zA.c[0] > 1 || (k1 && zA.c[1] >= 240000000)
                : zA.c[0] < 80000000000000 || (k1 && zA.c[0] <= 99999750000000)))
          ) {
            if (((t = zA.s < 0 && M(o) ? -0 : 0), zA.e > -1)) t = 1 / t;
            return new B1(d1 ? 1 / t : t);
          } else if (PA) t = I(PA / W + 2);
          if (k1) {
            if (((I1 = new B1(0.5)), d1)) o.s = 1;
            e1 = M(o);
          } else ((N1 = Math.abs(+OA(o))), (e1 = N1 % 2));
          IA = new B1(Y1);
          for (;;) {
            if (e1) {
              if (((IA = IA.times(zA)), !IA.c)) break;
              if (t) {
                if (IA.c.length > t) IA.c.length = t;
              } else if (E1) IA = IA.mod(A1);
            }
            if (N1) {
              if (((N1 = G(N1 / 2)), N1 === 0)) break;
              e1 = N1 % 2;
            } else if (((o = o.times(I1)), NA(o, o.e + 1, 1), o.e > 14)) e1 = M(o);
            else {
              if (((N1 = +OA(o)), N1 === 0)) break;
              e1 = N1 % 2;
            }
            if (((zA = zA.times(zA)), t)) {
              if (zA.c && zA.c.length > t) zA.c.length = t;
            } else if (E1) zA = zA.mod(A1);
          }
          if (E1) return IA;
          if (d1) IA = Y1.div(IA);
          return A1 ? IA.mod(A1) : t ? NA(IA, PA, w1, S1) : IA;
        }),
      (g.integerValue = function (o) {
        var A1 = new B1(this);
        if (o == null) o = w1;
        else q(o, 0, 8);
        return NA(A1, A1.e + 1, o);
      }),
      (g.isEqualTo = g.eq =
        function (o, A1) {
          return N(this, new B1(o, A1)) === 0;
        }),
      (g.isFinite = function () {
        return !!this.c;
      }),
      (g.isGreaterThan = g.gt =
        function (o, A1) {
          return N(this, new B1(o, A1)) > 0;
        }),
      (g.isGreaterThanOrEqualTo = g.gte =
        function (o, A1) {
          return (A1 = N(this, new B1(o, A1))) === 1 || A1 === 0;
        }),
      (g.isInteger = function () {
        return !!this.c && K(this.e / W) > this.c.length - 2;
      }),
      (g.isLessThan = g.lt =
        function (o, A1) {
          return N(this, new B1(o, A1)) < 0;
        }),
      (g.isLessThanOrEqualTo = g.lte =
        function (o, A1) {
          return (A1 = N(this, new B1(o, A1))) === -1 || A1 === 0;
        }),
      (g.isNaN = function () {
        return !this.s;
      }),
      (g.isNegative = function () {
        return this.s < 0;
      }),
      (g.isPositive = function () {
        return this.s > 0;
      }),
      (g.isZero = function () {
        return !!this.c && this.c[0] == 0;
      }),
      (g.minus = function (o, A1) {
        var I1,
          E1,
          N1,
          t,
          S1 = this,
          k1 = S1.s;
        if (((o = new B1(o, A1)), (A1 = o.s), !k1 || !A1)) return new B1(NaN);
        if (k1 != A1) return ((o.s = -A1), S1.plus(o));
        var d1 = S1.e / W,
          e1 = o.e / W,
          IA = S1.c,
          zA = o.c;
        if (!d1 || !e1) {
          if (!IA || !zA) return IA ? ((o.s = -A1), o) : new B1(zA ? S1 : NaN);
          if (!IA[0] || !zA[0])
            return zA[0] ? ((o.s = -A1), o) : new B1(IA[0] ? S1 : w1 == 3 ? -0 : 0);
        }
        if (((d1 = K(d1)), (e1 = K(e1)), (IA = IA.slice()), (k1 = d1 - e1))) {
          if ((t = k1 < 0)) ((k1 = -k1), (N1 = IA));
          else ((e1 = d1), (N1 = zA));
          N1.reverse();
          for (A1 = k1; A1--; N1.push(0));
          N1.reverse();
        } else {
          E1 = (t = (k1 = IA.length) < (A1 = zA.length)) ? k1 : A1;
          for (k1 = A1 = 0; A1 < E1; A1++)
            if (IA[A1] != zA[A1]) {
              t = IA[A1] < zA[A1];
              break;
            }
        }
        if (t) ((N1 = IA), (IA = zA), (zA = N1), (o.s = -o.s));
        if (((A1 = (E1 = zA.length) - (I1 = IA.length)), A1 > 0)) for (; A1--; IA[I1++] = 0);
        A1 = Y - 1;
        for (; E1 > k1; ) {
          if (IA[--E1] < zA[E1]) {
            for (I1 = E1; I1 && !IA[--I1]; IA[I1] = A1);
            (--IA[I1], (IA[E1] += Y));
          }
          IA[E1] -= zA[E1];
        }
        for (; IA[0] == 0; IA.splice(0, 1), --e1);
        if (!IA[0]) return ((o.s = w1 == 3 ? -1 : 1), (o.c = [(o.e = 0)]), o);
        return AA(o, IA, e1);
      }),
      (g.modulo = g.mod =
        function (o, A1) {
          var I1,
            E1,
            N1 = this;
          if (((o = new B1(o, A1)), !N1.c || !o.s || (o.c && !o.c[0]))) return new B1(NaN);
          else if (!o.c || (N1.c && !N1.c[0])) return new B1(N1);
          if (a1 == 9) ((E1 = o.s), (o.s = 1), (I1 = S(N1, o, 0, 3)), (o.s = E1), (I1.s *= E1));
          else I1 = S(N1, o, 0, a1);
          if (((o = N1.minus(I1.times(o))), !o.c[0] && a1 == 1)) o.s = N1.s;
          return o;
        }),
      (g.multipliedBy = g.times =
        function (o, A1) {
          var I1,
            E1,
            N1,
            t,
            S1,
            k1,
            d1,
            e1,
            IA,
            zA,
            X0,
            kA,
            z0,
            s2,
            B2,
            E2 = this,
            g2 = E2.c,
            Q9 = (o = new B1(o, A1)).c;
          if (!g2 || !Q9 || !g2[0] || !Q9[0]) {
            if (!E2.s || !o.s || (g2 && !g2[0] && !Q9) || (Q9 && !Q9[0] && !g2))
              o.c = o.e = o.s = null;
            else if (((o.s *= E2.s), !g2 || !Q9)) o.c = o.e = null;
            else ((o.c = [0]), (o.e = 0));
            return o;
          }
          if (
            ((E1 = K(E2.e / W) + K(o.e / W)),
            (o.s *= E2.s),
            (d1 = g2.length),
            (zA = Q9.length),
            d1 < zA)
          )
            ((z0 = g2), (g2 = Q9), (Q9 = z0), (N1 = d1), (d1 = zA), (zA = N1));
          for (N1 = d1 + zA, z0 = []; N1--; z0.push(0));
          ((s2 = Y), (B2 = C));
          for (N1 = zA; --N1 >= 0; ) {
            ((I1 = 0), (X0 = Q9[N1] % B2), (kA = (Q9[N1] / B2) | 0));
            for (S1 = d1, t = N1 + S1; t > N1; )
              ((e1 = g2[--S1] % B2),
                (IA = (g2[S1] / B2) | 0),
                (k1 = kA * e1 + IA * X0),
                (e1 = X0 * e1 + (k1 % B2) * B2 + z0[t] + I1),
                (I1 = ((e1 / s2) | 0) + ((k1 / B2) | 0) + kA * IA),
                (z0[t--] = e1 % s2));
            z0[t] = I1;
          }
          if (I1) ++E1;
          else z0.splice(0, 1);
          return AA(o, z0, E1);
        }),
      (g.negated = function () {
        var o = new B1(this);
        return ((o.s = -o.s || null), o);
      }),
      (g.plus = function (o, A1) {
        var I1,
          E1 = this,
          N1 = E1.s;
        if (((o = new B1(o, A1)), (A1 = o.s), !N1 || !A1)) return new B1(NaN);
        if (N1 != A1) return ((o.s = -A1), E1.minus(o));
        var t = E1.e / W,
          S1 = o.e / W,
          k1 = E1.c,
          d1 = o.c;
        if (!t || !S1) {
          if (!k1 || !d1) return new B1(N1 / 0);
          if (!k1[0] || !d1[0]) return d1[0] ? o : new B1(k1[0] ? E1 : N1 * 0);
        }
        if (((t = K(t)), (S1 = K(S1)), (k1 = k1.slice()), (N1 = t - S1))) {
          if (N1 > 0) ((S1 = t), (I1 = d1));
          else ((N1 = -N1), (I1 = k1));
          I1.reverse();
          for (; N1--; I1.push(0));
          I1.reverse();
        }
        if (((N1 = k1.length), (A1 = d1.length), N1 - A1 < 0))
          ((I1 = d1), (d1 = k1), (k1 = I1), (A1 = N1));
        for (N1 = 0; A1; )
          ((N1 = ((k1[--A1] = k1[A1] + d1[A1] + N1) / Y) | 0),
            (k1[A1] = Y === k1[A1] ? 0 : k1[A1] % Y));
        if (N1) ((k1 = [N1].concat(k1)), ++S1);
        return AA(o, k1, S1);
      }),
      (g.precision = g.sd =
        function (o, A1) {
          var I1,
            E1,
            N1,
            t = this;
          if (o != null && o !== !!o) {
            if ((q(o, 1, X), A1 == null)) A1 = w1;
            else q(A1, 0, 8);
            return NA(new B1(t), o, A1);
          }
          if (!(I1 = t.c)) return null;
          if (((N1 = I1.length - 1), (E1 = N1 * W + 1), (N1 = I1[N1]))) {
            for (; N1 % 10 == 0; N1 /= 10, E1--);
            for (N1 = I1[0]; N1 >= 10; N1 /= 10, E1++);
          }
          if (o && t.e + 1 > E1) E1 = t.e + 1;
          return E1;
        }),
      (g.shiftedBy = function (o) {
        return (q(o, -F, F), this.times('1e' + o));
      }),
      (g.squareRoot = g.sqrt =
        function () {
          var o,
            A1,
            I1,
            E1,
            N1,
            t = this,
            S1 = t.c,
            k1 = t.s,
            d1 = t.e,
            e1 = r + 4,
            IA = new B1('0.5');
          if (k1 !== 1 || !S1 || !S1[0])
            return new B1(!k1 || (k1 < 0 && (!S1 || S1[0])) ? NaN : S1 ? t : 1 / 0);
          if (((k1 = Math.sqrt(+OA(t))), k1 == 0 || k1 == 1 / 0)) {
            if (((A1 = U(S1)), (A1.length + d1) % 2 == 0)) A1 += '0';
            if (((k1 = Math.sqrt(+A1)), (d1 = K((d1 + 1) / 2) - (d1 < 0 || d1 % 2)), k1 == 1 / 0))
              A1 = '5e' + d1;
            else ((A1 = k1.toExponential()), (A1 = A1.slice(0, A1.indexOf('e') + 1) + d1));
            I1 = new B1(A1);
          } else I1 = new B1(k1 + '');
          if (I1.c[0]) {
            if (((d1 = I1.e), (k1 = d1 + e1), k1 < 3)) k1 = 0;
            for (;;)
              if (
                ((N1 = I1),
                (I1 = IA.times(N1.plus(S(t, N1, e1, 1)))),
                U(N1.c).slice(0, k1) === (A1 = U(I1.c)).slice(0, k1))
              ) {
                if (I1.e < d1) --k1;
                if (((A1 = A1.slice(k1 - 3, k1 + 1)), A1 == '9999' || (!E1 && A1 == '4999'))) {
                  if (!E1) {
                    if ((NA(N1, N1.e + r + 2, 0), N1.times(N1).eq(t))) {
                      I1 = N1;
                      break;
                    }
                  }
                  ((e1 += 4), (k1 += 4), (E1 = 1));
                } else {
                  if (!+A1 || (!+A1.slice(1) && A1.charAt(0) == '5'))
                    (NA(I1, I1.e + r + 2, 1), (o = !I1.times(I1).eq(t)));
                  break;
                }
              }
          }
          return NA(I1, I1.e + r + 1, w1, o);
        }),
      (g.toExponential = function (o, A1) {
        if (o != null) (q(o, 0, X), o++);
        return v1(this, o, A1, 1);
      }),
      (g.toFixed = function (o, A1) {
        if (o != null) (q(o, 0, X), (o = o + this.e + 1));
        return v1(this, o, A1);
      }),
      (g.toFormat = function (o, A1, I1) {
        var E1,
          N1 = this;
        if (I1 == null)
          if (o != null && A1 && typeof A1 == 'object') ((I1 = A1), (A1 = null));
          else if (o && typeof o == 'object') ((I1 = o), (o = A1 = null));
          else I1 = cA;
        else if (typeof I1 != 'object') throw Error(D + 'Argument not an object: ' + I1);
        if (((E1 = N1.toFixed(o, A1)), N1.c)) {
          var t,
            S1 = E1.split('.'),
            k1 = +I1.groupSize,
            d1 = +I1.secondaryGroupSize,
            e1 = I1.groupSeparator || '',
            IA = S1[0],
            zA = S1[1],
            X0 = N1.s < 0,
            kA = X0 ? IA.slice(1) : IA,
            z0 = kA.length;
          if (d1) ((t = k1), (k1 = d1), (d1 = t), (z0 -= t));
          if (k1 > 0 && z0 > 0) {
            ((t = z0 % k1 || k1), (IA = kA.substr(0, t)));
            for (; t < z0; t += k1) IA += e1 + kA.substr(t, k1);
            if (d1 > 0) IA += e1 + kA.slice(t);
            if (X0) IA = '-' + IA;
          }
          E1 = zA
            ? IA +
              (I1.decimalSeparator || '') +
              ((d1 = +I1.fractionGroupSize)
                ? zA.replace(
                    new RegExp('\\d{' + d1 + '}\\B', 'g'),
                    '$&' + (I1.fractionGroupSeparator || '')
                  )
                : zA)
            : IA;
        }
        return (I1.prefix || '') + E1 + (I1.suffix || '');
      }),
      (g.toFraction = function (o) {
        var A1,
          I1,
          E1,
          N1,
          t,
          S1,
          k1,
          d1,
          e1,
          IA,
          zA,
          X0,
          kA = this,
          z0 = kA.c;
        if (o != null) {
          if (((k1 = new B1(o)), (!k1.isInteger() && (k1.c || k1.s !== 1)) || k1.lt(Y1)))
            throw Error(
              D + 'Argument ' + (k1.isInteger() ? 'out of range: ' : 'not an integer: ') + OA(k1)
            );
        }
        if (!z0) return new B1(kA);
        ((A1 = new B1(Y1)),
          (e1 = I1 = new B1(Y1)),
          (E1 = d1 = new B1(Y1)),
          (X0 = U(z0)),
          (t = A1.e = X0.length - kA.e - 1),
          (A1.c[0] = J[(S1 = t % W) < 0 ? W + S1 : S1]),
          (o = !o || k1.comparedTo(A1) > 0 ? (t > 0 ? A1 : e1) : k1),
          (S1 = x1),
          (x1 = 1 / 0),
          (k1 = new B1(X0)),
          (d1.c[0] = 0));
        for (;;) {
          if (((IA = S(k1, A1, 0, 1)), (N1 = I1.plus(IA.times(E1))), N1.comparedTo(o) == 1)) break;
          ((I1 = E1),
            (E1 = N1),
            (e1 = d1.plus(IA.times((N1 = e1)))),
            (d1 = N1),
            (A1 = k1.minus(IA.times((N1 = A1)))),
            (k1 = N1));
        }
        return (
          (N1 = S(o.minus(I1), E1, 0, 1)),
          (d1 = d1.plus(N1.times(e1))),
          (I1 = I1.plus(N1.times(E1))),
          (d1.s = e1.s = kA.s),
          (t = t * 2),
          (zA =
            S(e1, E1, t, w1)
              .minus(kA)
              .abs()
              .comparedTo(S(d1, I1, t, w1).minus(kA).abs()) < 1
              ? [e1, E1]
              : [d1, I1]),
          (x1 = S1),
          zA
        );
      }),
      (g.toNumber = function () {
        return +OA(this);
      }),
      (g.toPrecision = function (o, A1) {
        if (o != null) q(o, 1, X);
        return v1(this, o, A1, 2);
      }),
      (g.toString = function (o) {
        var A1,
          I1 = this,
          E1 = I1.s,
          N1 = I1.e;
        if (N1 === null)
          if (E1) {
            if (((A1 = 'Infinity'), E1 < 0)) A1 = '-' + A1;
          } else A1 = 'NaN';
        else {
          if (o == null) A1 = N1 <= H1 || N1 >= x ? R(U(I1.c), N1) : T(U(I1.c), N1, '0');
          else if (o === 10 && f1)
            ((I1 = NA(new B1(I1), r + N1 + 1, w1)), (A1 = T(U(I1.c), I1.e, '0')));
          else (q(o, 2, FA.length, 'Base'), (A1 = f(T(U(I1.c), N1, '0'), 10, o, E1, !0)));
          if (E1 < 0 && I1.c[0]) A1 = '-' + A1;
        }
        return A1;
      }),
      (g.valueOf = g.toJSON =
        function () {
          return OA(this);
        }),
      (g._isBigNumber = !0),
      O != null)
    )
      B1.set(O);
    return B1;
  }
  function K(O) {
    var S = O | 0;
    return O > 0 || O === S ? S : S - 1;
  }
  function U(O) {
    var S,
      f,
      a = 1,
      g = O.length,
      Y1 = O[0] + '';
    for (; a < g; ) {
      ((S = O[a++] + ''), (f = W - S.length));
      for (; f--; S = '0' + S);
      Y1 += S;
    }
    for (g = Y1.length; Y1.charCodeAt(--g) === 48; );
    return Y1.slice(0, g + 1 || 1);
  }
  function N(O, S) {
    var f,
      a,
      g = O.c,
      Y1 = S.c,
      r = O.s,
      w1 = S.s,
      H1 = O.e,
      x = S.e;
    if (!r || !w1) return null;
    if (((f = g && !g[0]), (a = Y1 && !Y1[0]), f || a)) return f ? (a ? 0 : -w1) : r;
    if (r != w1) return r;
    if (((f = r < 0), (a = H1 == x), !g || !Y1)) return a ? 0 : !g ^ f ? 1 : -1;
    if (!a) return (H1 > x) ^ f ? 1 : -1;
    w1 = (H1 = g.length) < (x = Y1.length) ? H1 : x;
    for (r = 0; r < w1; r++) if (g[r] != Y1[r]) return (g[r] > Y1[r]) ^ f ? 1 : -1;
    return H1 == x ? 0 : (H1 > x) ^ f ? 1 : -1;
  }
  function q(O, S, f, a) {
    if (O < S || O > f || O !== G(O))
      throw Error(
        D +
          (a || 'Argument') +
          (typeof O == 'number'
            ? O < S || O > f
              ? ' out of range: '
              : ' not an integer: '
            : ' not a primitive number: ') +
          String(O)
      );
  }
  function M(O) {
    var S = O.c.length - 1;
    return K(O.e / W) == S && O.c[S] % 2 != 0;
  }
  function R(O, S) {
    return (O.length > 1 ? O.charAt(0) + '.' + O.slice(1) : O) + (S < 0 ? 'e' : 'e+') + S;
  }
  function T(O, S, f) {
    var a, g;
    if (S < 0) {
      for (g = f + '.'; ++S; g += f);
      O = g + O;
    } else if (((a = O.length), ++S > a)) {
      for (g = f, S -= a; --S; g += f);
      O += g;
    } else if (S < a) O = O.slice(0, S) + '.' + O.slice(S);
    return O;
  }
  if (((B = V()), (B.default = B.BigNumber = B), typeof define == 'function' && define.amd))
    define(function () {
      return B;
    });
  else if (typeof gZ1 != 'undefined' && gZ1.exports) gZ1.exports = B;
  else {
    if (!A) A = typeof self != 'undefined' && self ? self : window;
    A.BigNumber = B;
  }
})(FR0);

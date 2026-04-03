// Module: wI2
// Params: CT8,zI2

zI2.exports = MN;
MN.filename = null;
MN.defaults = { keepCase: !1 };
var Vl6 = Yn1(),
  XI2 = LC1(),
  VI2 = $C1(),
  KI2 = NR(),
  Kl6 = HC1(),
  HI2 = Em(),
  Hl6 = lV(),
  zl6 = wC1(),
  wl6 = zC1(),
  Wn1 = k_(),
  Fn1 = VI(),
  El6 = /^[1-9][0-9]*$/,
  Ul6 = /^-?[1-9][0-9]*$/,
  Nl6 = /^0[x][0-9a-fA-F]+$/,
  $l6 = /^-?0[x][0-9a-fA-F]+$/,
  ql6 = /^0[0-7]+$/,
  Ml6 = /^-?0[0-7]+$/,
  Ll6 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
  Ww = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
  Fw = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
  Rl6 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
function MN(A, B, Q) {
  if (!(B instanceof XI2)) ((Q = B), (B = new XI2()));
  if (!Q) Q = MN.defaults;
  var I = Q.preferTrailingComment || !1,
    G = Vl6(A, Q.alternateCommentMode || !1),
    D = G.next,
    Z = G.push,
    Y = G.peek,
    W = G.skip,
    F = G.cmnt,
    J = !0,
    C,
    X,
    V,
    K,
    U = !1,
    N = B,
    q = Q.keepCase
      ? function (o) {
          return o;
        }
      : Fn1.camelCase;
  function M(o, A1, I1) {
    var E1 = MN.filename;
    if (!I1) MN.filename = null;
    return Error(
      'illegal ' +
        (A1 || 'token') +
        " '" +
        o +
        "' (" +
        (E1 ? E1 + ', ' : '') +
        'line ' +
        G.line +
        ')'
    );
  }
  function R() {
    var o = [],
      A1;
    do {
      if ((A1 = D()) !== '"' && A1 !== "'") throw M(A1);
      (o.push(D()), W(A1), (A1 = Y()));
    } while (A1 === '"' || A1 === "'");
    return o.join('');
  }
  function T(o) {
    var A1 = D();
    switch (A1) {
      case "'":
      case '"':
        return (Z(A1), R());
      case 'true':
      case 'TRUE':
        return !0;
      case 'false':
      case 'FALSE':
        return !1;
    }
    try {
      return S(A1, !0);
    } catch (I1) {
      if (o && Fw.test(A1)) return A1;
      throw M(A1, 'value');
    }
  }
  function O(o, A1) {
    var I1, E1;
    do
      if (A1 && ((I1 = Y()) === '"' || I1 === "'")) o.push(R());
      else o.push([(E1 = f(D())), W('to', !0) ? f(D()) : E1]);
    while (W(',', !0));
    var N1 = { options: void 0 };
    ((N1.setOption = function (t, S1) {
      if (this.options === void 0) this.options = {};
      this.options[t] = S1;
    }),
      w1(
        N1,
        function t(S1) {
          if (S1 === 'option') (cA(N1, S1), W(';'));
          else throw M(S1);
        },
        function t() {
          v1(N1);
        }
      ));
  }
  function S(o, A1) {
    var I1 = 1;
    if (o.charAt(0) === '-') ((I1 = -1), (o = o.substring(1)));
    switch (o) {
      case 'inf':
      case 'INF':
      case 'Inf':
        return I1 * (1 / 0);
      case 'nan':
      case 'NAN':
      case 'Nan':
      case 'NaN':
        return NaN;
      case '0':
        return 0;
    }
    if (El6.test(o)) return I1 * parseInt(o, 10);
    if (Nl6.test(o)) return I1 * parseInt(o, 16);
    if (ql6.test(o)) return I1 * parseInt(o, 8);
    if (Ll6.test(o)) return I1 * parseFloat(o);
    throw M(o, 'number', A1);
  }
  function f(o, A1) {
    switch (o) {
      case 'max':
      case 'MAX':
      case 'Max':
        return 536870911;
      case '0':
        return 0;
    }
    if (!A1 && o.charAt(0) === '-') throw M(o, 'id');
    if (Ul6.test(o)) return parseInt(o, 10);
    if ($l6.test(o)) return parseInt(o, 16);
    if (Ml6.test(o)) return parseInt(o, 8);
    throw M(o, 'id');
  }
  function a() {
    if (C !== void 0) throw M('package');
    if (((C = D()), !Fw.test(C))) throw M(C, 'name');
    ((N = N.define(C)), W(';'));
  }
  function g() {
    var o = Y(),
      A1;
    switch (o) {
      case 'weak':
        ((A1 = V || (V = [])), D());
        break;
      case 'public':
        D();
      default:
        A1 = X || (X = []);
        break;
    }
    ((o = R()), W(';'), A1.push(o));
  }
  function Y1() {
    if ((W('='), (K = R()), (U = K === 'proto3'), !U && K !== 'proto2')) throw M(K, 'syntax');
    (B.setOption('syntax', K), W(';'));
  }
  function r(o, A1) {
    switch (A1) {
      case 'option':
        return (cA(o, A1), W(';'), !0);
      case 'message':
        return (H1(o, A1), !0);
      case 'enum':
        return (a1(o, A1), !0);
      case 'service':
        return (M1(o, A1), !0);
      case 'extend':
        return (NA(o, A1), !0);
    }
    return !1;
  }
  function w1(o, A1, I1) {
    var E1 = G.line;
    if (o) {
      if (typeof o.comment !== 'string') o.comment = F();
      o.filename = MN.filename;
    }
    if (W('{', !0)) {
      var N1;
      while ((N1 = D()) !== '}') A1(N1);
      W(';', !0);
    } else {
      if (I1) I1();
      if ((W(';'), o && (typeof o.comment !== 'string' || I))) o.comment = F(E1) || o.comment;
    }
  }
  function H1(o, A1) {
    if (!Ww.test((A1 = D()))) throw M(A1, 'type name');
    var I1 = new VI2(A1);
    (w1(I1, function E1(N1) {
      if (r(I1, N1)) return;
      switch (N1) {
        case 'map':
          x1(I1, N1);
          break;
        case 'required':
        case 'repeated':
          x(I1, N1);
          break;
        case 'optional':
          if (U) x(I1, 'proto3_optional');
          else x(I1, 'optional');
          break;
        case 'oneof':
          o1(I1, N1);
          break;
        case 'extensions':
          O(I1.extensions || (I1.extensions = []));
          break;
        case 'reserved':
          O(I1.reserved || (I1.reserved = []), !0);
          break;
        default:
          if (!U || !Fw.test(N1)) throw M(N1);
          (Z(N1), x(I1, 'optional'));
          break;
      }
    }),
      o.add(I1));
  }
  function x(o, A1, I1) {
    var E1 = D();
    if (E1 === 'group') {
      F1(o, A1);
      return;
    }
    while (E1.endsWith('.') || Y().startsWith('.')) E1 += D();
    if (!Fw.test(E1)) throw M(E1, 'type');
    var N1 = D();
    if (!Ww.test(N1)) throw M(N1, 'name');
    ((N1 = q(N1)), W('='));
    var t = new KI2(N1, f(D()), E1, A1, I1);
    if (
      (w1(
        t,
        function k1(d1) {
          if (d1 === 'option') (cA(t, d1), W(';'));
          else throw M(d1);
        },
        function k1() {
          v1(t);
        }
      ),
      A1 === 'proto3_optional')
    ) {
      var S1 = new HI2('_' + N1);
      (t.setOption('proto3_optional', !0), S1.add(t), o.add(S1));
    } else o.add(t);
    if (!U && t.repeated && (Wn1.packed[E1] !== void 0 || Wn1.basic[E1] === void 0))
      t.setOption('packed', !1, !0);
  }
  function F1(o, A1) {
    var I1 = D();
    if (!Ww.test(I1)) throw M(I1, 'name');
    var E1 = Fn1.lcFirst(I1);
    if (I1 === E1) I1 = Fn1.ucFirst(I1);
    W('=');
    var N1 = f(D()),
      t = new VI2(I1);
    t.group = !0;
    var S1 = new KI2(E1, N1, I1, A1);
    ((S1.filename = MN.filename),
      w1(t, function k1(d1) {
        switch (d1) {
          case 'option':
            (cA(t, d1), W(';'));
            break;
          case 'required':
          case 'repeated':
            x(t, d1);
            break;
          case 'optional':
            if (U) x(t, 'proto3_optional');
            else x(t, 'optional');
            break;
          case 'message':
            H1(t, d1);
            break;
          case 'enum':
            a1(t, d1);
            break;
          default:
            throw M(d1);
        }
      }),
      o.add(t).add(S1));
  }
  function x1(o) {
    W('<');
    var A1 = D();
    if (Wn1.mapKey[A1] === void 0) throw M(A1, 'type');
    W(',');
    var I1 = D();
    if (!Fw.test(I1)) throw M(I1, 'type');
    W('>');
    var E1 = D();
    if (!Ww.test(E1)) throw M(E1, 'name');
    W('=');
    var N1 = new Kl6(q(E1), f(D()), A1, I1);
    (w1(
      N1,
      function t(S1) {
        if (S1 === 'option') (cA(N1, S1), W(';'));
        else throw M(S1);
      },
      function t() {
        v1(N1);
      }
    ),
      o.add(N1));
  }
  function o1(o, A1) {
    if (!Ww.test((A1 = D()))) throw M(A1, 'name');
    var I1 = new HI2(q(A1));
    (w1(I1, function E1(N1) {
      if (N1 === 'option') (cA(I1, N1), W(';'));
      else (Z(N1), x(I1, 'optional'));
    }),
      o.add(I1));
  }
  function a1(o, A1) {
    if (!Ww.test((A1 = D()))) throw M(A1, 'name');
    var I1 = new Hl6(A1);
    (w1(I1, function E1(N1) {
      switch (N1) {
        case 'option':
          (cA(I1, N1), W(';'));
          break;
        case 'reserved':
          O(I1.reserved || (I1.reserved = []), !0);
          break;
        default:
          PA(I1, N1);
      }
    }),
      o.add(I1));
  }
  function PA(o, A1) {
    if (!Ww.test(A1)) throw M(A1, 'name');
    W('=');
    var I1 = f(D(), !0),
      E1 = { options: void 0 };
    ((E1.setOption = function (N1, t) {
      if (this.options === void 0) this.options = {};
      this.options[N1] = t;
    }),
      w1(
        E1,
        function N1(t) {
          if (t === 'option') (cA(E1, t), W(';'));
          else throw M(t);
        },
        function N1() {
          v1(E1);
        }
      ),
      o.add(A1, I1, E1.comment, E1.options));
  }
  function cA(o, A1) {
    var I1 = W('(', !0);
    if (!Fw.test((A1 = D()))) throw M(A1, 'name');
    var E1 = A1,
      N1 = E1,
      t;
    if (I1) {
      if ((W(')'), (E1 = '(' + E1 + ')'), (N1 = E1), (A1 = Y()), Rl6.test(A1)))
        ((t = A1.slice(1)), (E1 += A1), D());
    }
    W('=');
    var S1 = FA(o, E1);
    B1(o, N1, S1, t);
  }
  function FA(o, A1) {
    if (W('{', !0)) {
      var I1 = {};
      while (!W('}', !0)) {
        if (!Ww.test((OA = D()))) throw M(OA, 'name');
        if (OA === null) throw M(OA, 'end of input');
        var E1,
          N1 = OA;
        if ((W(':', !0), Y() === '{')) E1 = FA(o, A1 + '.' + OA);
        else if (Y() === '[') {
          E1 = [];
          var t;
          if (W('[', !0)) {
            do ((t = T(!0)), E1.push(t));
            while (W(',', !0));
            if ((W(']'), typeof t !== 'undefined')) f1(o, A1 + '.' + OA, t);
          }
        } else ((E1 = T(!0)), f1(o, A1 + '.' + OA, E1));
        var S1 = I1[N1];
        if (S1) E1 = [].concat(S1).concat(E1);
        ((I1[N1] = E1), W(',', !0), W(';', !0));
      }
      return I1;
    }
    var k1 = T(!0);
    return (f1(o, A1, k1), k1);
  }
  function f1(o, A1, I1) {
    if (o.setOption) o.setOption(A1, I1);
  }
  function B1(o, A1, I1, E1) {
    if (o.setParsedOption) o.setParsedOption(A1, I1, E1);
  }
  function v1(o) {
    if (W('[', !0)) {
      do cA(o, 'option');
      while (W(',', !0));
      W(']');
    }
    return o;
  }
  function M1(o, A1) {
    if (!Ww.test((A1 = D()))) throw M(A1, 'service name');
    var I1 = new zl6(A1);
    (w1(I1, function E1(N1) {
      if (r(I1, N1)) return;
      if (N1 === 'rpc') AA(I1, N1);
      else throw M(N1);
    }),
      o.add(I1));
  }
  function AA(o, A1) {
    var I1 = F(),
      E1 = A1;
    if (!Ww.test((A1 = D()))) throw M(A1, 'name');
    var N1 = A1,
      t,
      S1,
      k1,
      d1;
    if ((W('('), W('stream', !0))) S1 = !0;
    if (!Fw.test((A1 = D()))) throw M(A1);
    if (((t = A1), W(')'), W('returns'), W('('), W('stream', !0))) d1 = !0;
    if (!Fw.test((A1 = D()))) throw M(A1);
    ((k1 = A1), W(')'));
    var e1 = new wl6(N1, E1, t, k1, S1, d1);
    ((e1.comment = I1),
      w1(e1, function IA(zA) {
        if (zA === 'option') (cA(e1, zA), W(';'));
        else throw M(zA);
      }),
      o.add(e1));
  }
  function NA(o, A1) {
    if (!Fw.test((A1 = D()))) throw M(A1, 'reference');
    var I1 = A1;
    w1(null, function E1(N1) {
      switch (N1) {
        case 'required':
        case 'repeated':
          x(o, N1, I1);
          break;
        case 'optional':
          if (U) x(o, 'proto3_optional', I1);
          else x(o, 'optional', I1);
          break;
        default:
          if (!U || !Fw.test(N1)) throw M(N1);
          (Z(N1), x(o, 'optional', I1));
          break;
      }
    });
  }
  var OA;
  while ((OA = D()) !== null)
    switch (OA) {
      case 'package':
        if (!J) throw M(OA);
        a();
        break;
      case 'import':
        if (!J) throw M(OA);
        g();
        break;
      case 'syntax':
        if (!J) throw M(OA);
        Y1();
        break;
      case 'option':
        (cA(N, OA), W(';'));
        break;
      default:
        if (r(N, OA)) {
          J = !1;
          continue;
        }
        throw M(OA);
    }
  return ((MN.filename = null), { package: C, imports: X, weakImports: V, syntax: K, root: B });
}

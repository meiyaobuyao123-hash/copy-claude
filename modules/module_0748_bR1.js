// Module: bR1
// Params: vg5,vR1

var Q3 = D1('fs'),
  rm9 = AyA(),
  om9 = IyA(),
  tm9 = DyA(),
  l61 = D1('util'),
  sI,
  n61;
if (typeof Symbol === 'function' && typeof Symbol.for === 'function')
  ((sI = Symbol.for('graceful-fs.queue')), (n61 = Symbol.for('graceful-fs.previous')));
else ((sI = '___graceful-fs.queue'), (n61 = '___graceful-fs.previous'));
function em9() {}
function YyA(A, B) {
  Object.defineProperty(A, sI, {
    get: function () {
      return B;
    },
  });
}
var AP = em9;
if (l61.debuglog) AP = l61.debuglog('gfs4');
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  AP = function () {
    var A = l61.format.apply(l61, arguments);
    ((A =
      'GFS4: ' +
      A.split(/\n/).join(`
GFS4: `)),
      console.error(A));
  };
if (!Q3[sI]) {
  if (
    ((kR1 = global[sI] || []),
    YyA(Q3, kR1),
    (Q3.close = (function (A) {
      function B(Q, I) {
        return A.call(Q3, Q, function (G) {
          if (!G) ZyA();
          if (typeof I === 'function') I.apply(this, arguments);
        });
      }
      return (Object.defineProperty(B, n61, { value: A }), B);
    })(Q3.close)),
    (Q3.closeSync = (function (A) {
      function B(Q) {
        (A.apply(Q3, arguments), ZyA());
      }
      return (Object.defineProperty(B, n61, { value: A }), B);
    })(Q3.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  )
    process.on('exit', function () {
      (AP(Q3[sI]), D1('assert').equal(Q3[sI].length, 0));
    });
}
var kR1;
if (!global[sI]) YyA(global, Q3[sI]);
vR1.exports = xR1(tm9(Q3));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !Q3.__patched)
  ((vR1.exports = xR1(Q3)), (Q3.__patched = !0));
function xR1(A) {
  (rm9(A), (A.gracefulify = xR1), (A.createReadStream = O), (A.createWriteStream = S));
  var B = A.readFile;
  A.readFile = Q;
  function Q(g, Y1, r) {
    if (typeof Y1 === 'function') ((r = Y1), (Y1 = null));
    return w1(g, Y1, r);
    function w1(H1, x, F1, x1) {
      return B(H1, x, function (o1) {
        if (o1 && (o1.code === 'EMFILE' || o1.code === 'ENFILE'))
          Hf([w1, [H1, x, F1], o1, x1 || Date.now(), Date.now()]);
        else if (typeof F1 === 'function') F1.apply(this, arguments);
      });
    }
  }
  var I = A.writeFile;
  A.writeFile = G;
  function G(g, Y1, r, w1) {
    if (typeof r === 'function') ((w1 = r), (r = null));
    return H1(g, Y1, r, w1);
    function H1(x, F1, x1, o1, a1) {
      return I(x, F1, x1, function (PA) {
        if (PA && (PA.code === 'EMFILE' || PA.code === 'ENFILE'))
          Hf([H1, [x, F1, x1, o1], PA, a1 || Date.now(), Date.now()]);
        else if (typeof o1 === 'function') o1.apply(this, arguments);
      });
    }
  }
  var D = A.appendFile;
  if (D) A.appendFile = Z;
  function Z(g, Y1, r, w1) {
    if (typeof r === 'function') ((w1 = r), (r = null));
    return H1(g, Y1, r, w1);
    function H1(x, F1, x1, o1, a1) {
      return D(x, F1, x1, function (PA) {
        if (PA && (PA.code === 'EMFILE' || PA.code === 'ENFILE'))
          Hf([H1, [x, F1, x1, o1], PA, a1 || Date.now(), Date.now()]);
        else if (typeof o1 === 'function') o1.apply(this, arguments);
      });
    }
  }
  var Y = A.copyFile;
  if (Y) A.copyFile = W;
  function W(g, Y1, r, w1) {
    if (typeof r === 'function') ((w1 = r), (r = 0));
    return H1(g, Y1, r, w1);
    function H1(x, F1, x1, o1, a1) {
      return Y(x, F1, x1, function (PA) {
        if (PA && (PA.code === 'EMFILE' || PA.code === 'ENFILE'))
          Hf([H1, [x, F1, x1, o1], PA, a1 || Date.now(), Date.now()]);
        else if (typeof o1 === 'function') o1.apply(this, arguments);
      });
    }
  }
  var F = A.readdir;
  A.readdir = C;
  var J = /^v[0-5]\./;
  function C(g, Y1, r) {
    if (typeof Y1 === 'function') ((r = Y1), (Y1 = null));
    var w1 = J.test(process.version)
      ? function x(F1, x1, o1, a1) {
          return F(F1, H1(F1, x1, o1, a1));
        }
      : function x(F1, x1, o1, a1) {
          return F(F1, x1, H1(F1, x1, o1, a1));
        };
    return w1(g, Y1, r);
    function H1(x, F1, x1, o1) {
      return function (a1, PA) {
        if (a1 && (a1.code === 'EMFILE' || a1.code === 'ENFILE'))
          Hf([w1, [x, F1, x1], a1, o1 || Date.now(), Date.now()]);
        else {
          if (PA && PA.sort) PA.sort();
          if (typeof x1 === 'function') x1.call(this, a1, PA);
        }
      };
    }
  }
  if (process.version.substr(0, 4) === 'v0.8') {
    var X = om9(A);
    ((q = X.ReadStream), (R = X.WriteStream));
  }
  var V = A.ReadStream;
  if (V) ((q.prototype = Object.create(V.prototype)), (q.prototype.open = M));
  var K = A.WriteStream;
  if (K) ((R.prototype = Object.create(K.prototype)), (R.prototype.open = T));
  (Object.defineProperty(A, 'ReadStream', {
    get: function () {
      return q;
    },
    set: function (g) {
      q = g;
    },
    enumerable: !0,
    configurable: !0,
  }),
    Object.defineProperty(A, 'WriteStream', {
      get: function () {
        return R;
      },
      set: function (g) {
        R = g;
      },
      enumerable: !0,
      configurable: !0,
    }));
  var U = q;
  Object.defineProperty(A, 'FileReadStream', {
    get: function () {
      return U;
    },
    set: function (g) {
      U = g;
    },
    enumerable: !0,
    configurable: !0,
  });
  var N = R;
  Object.defineProperty(A, 'FileWriteStream', {
    get: function () {
      return N;
    },
    set: function (g) {
      N = g;
    },
    enumerable: !0,
    configurable: !0,
  });
  function q(g, Y1) {
    if (this instanceof q) return (V.apply(this, arguments), this);
    else return q.apply(Object.create(q.prototype), arguments);
  }
  function M() {
    var g = this;
    a(g.path, g.flags, g.mode, function (Y1, r) {
      if (Y1) {
        if (g.autoClose) g.destroy();
        g.emit('error', Y1);
      } else ((g.fd = r), g.emit('open', r), g.read());
    });
  }
  function R(g, Y1) {
    if (this instanceof R) return (K.apply(this, arguments), this);
    else return R.apply(Object.create(R.prototype), arguments);
  }
  function T() {
    var g = this;
    a(g.path, g.flags, g.mode, function (Y1, r) {
      if (Y1) (g.destroy(), g.emit('error', Y1));
      else ((g.fd = r), g.emit('open', r));
    });
  }
  function O(g, Y1) {
    return new A.ReadStream(g, Y1);
  }
  function S(g, Y1) {
    return new A.WriteStream(g, Y1);
  }
  var f = A.open;
  A.open = a;
  function a(g, Y1, r, w1) {
    if (typeof r === 'function') ((w1 = r), (r = null));
    return H1(g, Y1, r, w1);
    function H1(x, F1, x1, o1, a1) {
      return f(x, F1, x1, function (PA, cA) {
        if (PA && (PA.code === 'EMFILE' || PA.code === 'ENFILE'))
          Hf([H1, [x, F1, x1, o1], PA, a1 || Date.now(), Date.now()]);
        else if (typeof o1 === 'function') o1.apply(this, arguments);
      });
    }
  }
  return A;
}
function Hf(A) {
  (AP('ENQUEUE', A[0].name, A[1]), Q3[sI].push(A), fR1());
}
var i61;
function ZyA() {
  var A = Date.now();
  for (var B = 0; B < Q3[sI].length; ++B)
    if (Q3[sI][B].length > 2) ((Q3[sI][B][3] = A), (Q3[sI][B][4] = A));
  fR1();
}
function fR1() {
  if ((clearTimeout(i61), (i61 = void 0), Q3[sI].length === 0)) return;
  var A = Q3[sI].shift(),
    B = A[0],
    Q = A[1],
    I = A[2],
    G = A[3],
    D = A[4];
  if (G === void 0) (AP('RETRY', B.name, Q), B.apply(null, Q));
  else if (Date.now() - G >= 60000) {
    AP('TIMEOUT', B.name, Q);
    var Z = Q.pop();
    if (typeof Z === 'function') Z.call(null, I);
  } else {
    var Y = Date.now() - D,
      W = Math.max(D - G, 1),
      F = Math.min(W * 1.2, 100);
    if (Y >= F) (AP('RETRY', B.name, Q), B.apply(null, Q.concat([G])));
    else Q3[sI].push(A);
  }
  if (i61 === void 0) i61 = setTimeout(fR1, 0);
}

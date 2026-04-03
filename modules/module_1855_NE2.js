// Module: NE2
// Params: Br8,UE2

var K6 = {};
UE2.exports = K6;
K6.themes = {};
var jB5 = D1('util'),
  Xj = (K6.styles = ew2()),
  zE2 = Object.defineProperties,
  yB5 = new RegExp(/[\r\n]+/g);
K6.supportsColor = IE2().supportsColor;
if (typeof K6.enabled === 'undefined') K6.enabled = K6.supportsColor() !== !1;
K6.enable = function () {
  K6.enabled = !0;
};
K6.disable = function () {
  K6.enabled = !1;
};
K6.stripColors = K6.strip = function (A) {
  return ('' + A).replace(/\x1B\[\d+m/g, '');
};
var Ar8 = (K6.stylize = function A(B, Q) {
    if (!K6.enabled) return B + '';
    var I = Xj[Q];
    if (!I && Q in K6) return K6[Q](B);
    return I.open + B + I.close;
  }),
  kB5 = /[|\\{}()[\]^$+*?.]/g,
  xB5 = function (A) {
    if (typeof A !== 'string') throw new TypeError('Expected a string');
    return A.replace(kB5, '\\$&');
  };
function wE2(A) {
  var B = function Q() {
    return vB5.apply(Q, arguments);
  };
  return ((B._styles = A), (B.__proto__ = fB5), B);
}
var EE2 = (function () {
    var A = {};
    return (
      (Xj.grey = Xj.gray),
      Object.keys(Xj).forEach(function (B) {
        ((Xj[B].closeRe = new RegExp(xB5(Xj[B].close), 'g')),
          (A[B] = {
            get: function () {
              return wE2(this._styles.concat(B));
            },
          }));
      }),
      A
    );
  })(),
  fB5 = zE2(function A() {}, EE2);
function vB5() {
  var A = Array.prototype.slice.call(arguments),
    B = A.map(function (Z) {
      if (Z != null && Z.constructor === String) return Z;
      else return jB5.inspect(Z);
    }).join(' ');
  if (!K6.enabled || !B) return B;
  var Q =
      B.indexOf(`
`) != -1,
    I = this._styles,
    G = I.length;
  while (G--) {
    var D = Xj[I[G]];
    if (((B = D.open + B.replace(D.closeRe, D.open) + D.close), Q))
      B = B.replace(yB5, function (Z) {
        return D.close + Z + D.open;
      });
  }
  return B;
}
K6.setTheme = function (A) {
  if (typeof A === 'string') {
    console.log(
      "colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));"
    );
    return;
  }
  for (var B in A)
    (function (Q) {
      K6[Q] = function (I) {
        if (typeof A[Q] === 'object') {
          var G = I;
          for (var D in A[Q]) G = K6[A[Q][D]](G);
          return G;
        }
        return K6[A[Q]](I);
      };
    })(B);
};
function bB5() {
  var A = {};
  return (
    Object.keys(EE2).forEach(function (B) {
      A[B] = {
        get: function () {
          return wE2([B]);
        },
      };
    }),
    A
  );
}
var gB5 = function A(B, Q) {
  var I = Q.split('');
  return ((I = I.map(B)), I.join(''));
};
K6.trap = DE2();
K6.zalgo = YE2();
K6.maps = {};
K6.maps.america = FE2()(K6);
K6.maps.zebra = CE2()(K6);
K6.maps.rainbow = VE2()(K6);
K6.maps.random = HE2()(K6);
for (It1 in K6.maps)
  (function (A) {
    K6[A] = function (B) {
      return gB5(K6.maps[A], B);
    };
  })(It1);
var It1;
zE2(K6, bB5());

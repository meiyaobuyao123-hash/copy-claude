// Module: du1
// Params: oQ

var Um0 =
    (oQ && oQ.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          Object.defineProperty(A, I, {
            enumerable: !0,
            get: function () {
              return B[Q];
            },
          });
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  DK6 =
    (oQ && oQ.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  Nm0 =
    (oQ && oQ.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) Um0(B, A, Q);
      }
      return (DK6(B, A), B);
    },
  ZK6 =
    (oQ && oQ.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) Um0(B, A, Q);
    },
  YK6 =
    (oQ && oQ.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    };
Object.defineProperty(oQ, '__esModule', { value: !0 });
oQ.supportsLanguage = oQ.listLanguages = oQ.highlight = void 0;
var CF1 = Nm0(XM1()),
  WK6 = Nm0(jh0()),
  FK6 = YK6(mh0()),
  JF1 = hu1();
function mu1(A, B, Q) {
  if (B === void 0) B = {};
  switch (A.type) {
    case 'text': {
      var I = A.data;
      if (Q === void 0) return (B.default || JF1.DEFAULT_THEME.default || JF1.plain)(I);
      return I;
    }
    case 'tag': {
      var G = /hljs-(\w+)/.exec(A.attribs.class);
      if (G) {
        var D = G[1],
          Z = A.childNodes
            .map(function (Y) {
              return mu1(Y, B, D);
            })
            .join('');
        return (B[D] || JF1.DEFAULT_THEME[D] || JF1.plain)(Z);
      }
      return A.childNodes
        .map(function (Y) {
          return mu1(Y, B);
        })
        .join('');
    }
  }
  throw new Error('Invalid node type ' + A.type);
}
function JK6(A, B) {
  if (B === void 0) B = {};
  var Q = WK6.parseFragment(A, { treeAdapter: FK6.default });
  return Q.childNodes
    .map(function (I) {
      return mu1(I, B);
    })
    .join('');
}
function $m0(A, B) {
  if (B === void 0) B = {};
  var Q;
  if (B.language)
    Q = CF1.highlight(A, { language: B.language, ignoreIllegals: B.ignoreIllegals }).value;
  else Q = CF1.highlightAuto(A, B.languageSubset).value;
  return JK6(Q, B.theme);
}
oQ.highlight = $m0;
function CK6() {
  return CF1.listLanguages();
}
oQ.listLanguages = CK6;
function XK6(A) {
  return !!CF1.getLanguage(A);
}
oQ.supportsLanguage = XK6;
oQ.default = $m0;
ZK6(hu1(), oQ);

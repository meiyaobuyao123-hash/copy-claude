// Module: hu1
// Params: s4

var BK6 =
  (s4 && s4.__importDefault) ||
  function (A) {
    return A && A.__esModule ? A : { default: A };
  };
Object.defineProperty(s4, '__esModule', { value: !0 });
s4.parse = s4.stringify = s4.toJson = s4.fromJson = s4.DEFAULT_THEME = s4.plain = void 0;
var f3 = BK6(zm0()),
  QK6 = function (A) {
    return A;
  };
s4.plain = QK6;
s4.DEFAULT_THEME = {
  keyword: f3.default.blue,
  built_in: f3.default.cyan,
  type: f3.default.cyan.dim,
  literal: f3.default.blue,
  number: f3.default.green,
  regexp: f3.default.red,
  string: f3.default.red,
  subst: s4.plain,
  symbol: s4.plain,
  class: f3.default.blue,
  function: f3.default.yellow,
  title: s4.plain,
  params: s4.plain,
  comment: f3.default.green,
  doctag: f3.default.green,
  meta: f3.default.grey,
  'meta-keyword': s4.plain,
  'meta-string': s4.plain,
  section: s4.plain,
  tag: f3.default.grey,
  name: f3.default.blue,
  'builtin-name': s4.plain,
  attr: f3.default.cyan,
  attribute: s4.plain,
  variable: s4.plain,
  bullet: s4.plain,
  code: s4.plain,
  emphasis: f3.default.italic,
  strong: f3.default.bold,
  formula: s4.plain,
  link: f3.default.underline,
  quote: s4.plain,
  'selector-tag': s4.plain,
  'selector-id': s4.plain,
  'selector-class': s4.plain,
  'selector-attr': s4.plain,
  'selector-pseudo': s4.plain,
  'template-tag': s4.plain,
  'template-variable': s4.plain,
  addition: f3.default.green,
  deletion: f3.default.red,
  default: s4.plain,
};
function wm0(A) {
  var B = {};
  for (var Q = 0, I = Object.keys(A); Q < I.length; Q++) {
    var G = I[Q],
      D = A[G];
    if (Array.isArray(D))
      B[G] = D.reduce(function (Z, Y) {
        return Y === 'plain' ? s4.plain : Z[Y];
      }, f3.default);
    else B[G] = f3.default[D];
  }
  return B;
}
s4.fromJson = wm0;
function Em0(A) {
  var B = {};
  for (var Q = 0, I = Object.keys(B); Q < I.length; Q++) {
    var G = I[Q],
      D = B[G];
    B[G] = D._styles;
  }
  return B;
}
s4.toJson = Em0;
function IK6(A) {
  return JSON.stringify(Em0(A));
}
s4.stringify = IK6;
function GK6(A) {
  return wm0(JSON.parse(A));
}
s4.parse = GK6;

// Module: QJ
// Params: Ne1

Object.defineProperty(Ne1, '__esModule', { value: !0 });
var we1 = Object.prototype.toString;
function Yq2(A) {
  switch (we1.call(A)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
      return !0;
    default:
      return r11(A, Error);
  }
}
function Ky(A, B) {
  return we1.call(A) === `[object ${B}]`;
}
function Wq2(A) {
  return Ky(A, 'ErrorEvent');
}
function Fq2(A) {
  return Ky(A, 'DOMError');
}
function Jq2(A) {
  return Ky(A, 'DOMException');
}
function Cq2(A) {
  return Ky(A, 'String');
}
function Ee1(A) {
  return (
    typeof A === 'object' &&
    A !== null &&
    '__sentry_template_string__' in A &&
    '__sentry_template_values__' in A
  );
}
function Xq2(A) {
  return A === null || Ee1(A) || (typeof A !== 'object' && typeof A !== 'function');
}
function Ue1(A) {
  return Ky(A, 'Object');
}
function Vq2(A) {
  return typeof Event !== 'undefined' && r11(A, Event);
}
function Kq2(A) {
  return typeof Element !== 'undefined' && r11(A, Element);
}
function Hq2(A) {
  return Ky(A, 'RegExp');
}
function zq2(A) {
  return Boolean(A && A.then && typeof A.then === 'function');
}
function wq2(A) {
  return Ue1(A) && 'nativeEvent' in A && 'preventDefault' in A && 'stopPropagation' in A;
}
function Eq2(A) {
  return typeof A === 'number' && A !== A;
}
function r11(A, B) {
  try {
    return A instanceof B;
  } catch (Q) {
    return !1;
  }
}
function Uq2(A) {
  return !!(typeof A === 'object' && A !== null && (A.__isVue || A._isVue));
}
Ne1.isDOMError = Fq2;
Ne1.isDOMException = Jq2;
Ne1.isElement = Kq2;
Ne1.isError = Yq2;
Ne1.isErrorEvent = Wq2;
Ne1.isEvent = Vq2;
Ne1.isInstanceOf = r11;
Ne1.isNaN = Eq2;
Ne1.isParameterizedString = Ee1;
Ne1.isPlainObject = Ue1;
Ne1.isPrimitive = Xq2;
Ne1.isRegExp = Hq2;
Ne1.isString = Cq2;
Ne1.isSyntheticEvent = wq2;
Ne1.isThenable = zq2;
Ne1.isVueViewModel = Uq2;

// Module: RJ1
// Params: Z62

Object.defineProperty(Z62, '__esModule', { value: !0 });
Z62.ExactPredicate = Z62.PatternPredicate = void 0;
var av6 = /[\^$\\.+?()[\]{}|]/g;
class Wl1 {
  _matchAll;
  _regexp;
  constructor(A) {
    if (A === '*') ((this._matchAll = !0), (this._regexp = /.*/));
    else ((this._matchAll = !1), (this._regexp = new RegExp(Wl1.escapePattern(A))));
  }
  match(A) {
    if (this._matchAll) return !0;
    return this._regexp.test(A);
  }
  static escapePattern(A) {
    return `^${A.replace(av6, '\\$&').replace('*', '.*')}$`;
  }
  static hasWildcard(A) {
    return A.includes('*');
  }
}
Z62.PatternPredicate = Wl1;
class D62 {
  _matchAll;
  _pattern;
  constructor(A) {
    ((this._matchAll = A === void 0), (this._pattern = A));
  }
  match(A) {
    if (this._matchAll) return !0;
    if (A === this._pattern) return !0;
    return !1;
  }
}
Z62.ExactPredicate = D62;

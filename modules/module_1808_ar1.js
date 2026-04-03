// Module: ar1
// Params: Fl8,SK2

SK2.exports = PK2;
var OK2 = HG(),
  I65 = Zj(),
  TK2 = h3(),
  RK2 = TK2.HierarchyRequestError,
  G65 = TK2.NotFoundError;
function PK2() {
  OK2.call(this);
}
PK2.prototype = Object.create(OK2.prototype, {
  hasChildNodes: {
    value: function () {
      return !1;
    },
  },
  firstChild: { value: null },
  lastChild: { value: null },
  insertBefore: {
    value: function (A, B) {
      if (!A.nodeType) throw new TypeError('not a node');
      RK2();
    },
  },
  replaceChild: {
    value: function (A, B) {
      if (!A.nodeType) throw new TypeError('not a node');
      RK2();
    },
  },
  removeChild: {
    value: function (A) {
      if (!A.nodeType) throw new TypeError('not a node');
      G65();
    },
  },
  removeChildren: { value: function () {} },
  childNodes: {
    get: function () {
      if (!this._childNodes) this._childNodes = new I65();
      return this._childNodes;
    },
  },
});

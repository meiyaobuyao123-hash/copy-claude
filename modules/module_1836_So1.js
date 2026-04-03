// Module: So1
// Params: ml8,Mz2

var R55 = _e(),
  O55 = Ur1(),
  T55 = wz2(),
  ye = h3();
Mz2.exports = ZK1;
function ZK1(A) {
  ((this.document = A || new R55(null).createHTMLDocument('')),
    (this.document._scripting_enabled = !0),
    (this.document.defaultView = this),
    (this.location = new T55(this, this.document._address || 'about:blank')));
}
ZK1.prototype = Object.create(O55.prototype, {
  console: { value: console },
  history: { value: { back: ye.nyi, forward: ye.nyi, go: ye.nyi } },
  navigator: { value: Uz2() },
  window: {
    get: function () {
      return this;
    },
  },
  self: {
    get: function () {
      return this;
    },
  },
  frames: {
    get: function () {
      return this;
    },
  },
  parent: {
    get: function () {
      return this;
    },
  },
  top: {
    get: function () {
      return this;
    },
  },
  length: { value: 0 },
  frameElement: { value: null },
  opener: { value: null },
  onload: {
    get: function () {
      return this._getEventHandler('load');
    },
    set: function (A) {
      this._setEventHandler('load', A);
    },
  },
  getComputedStyle: {
    value: function A(B) {
      return B.style;
    },
  },
});
ye.expose($z2(), ZK1);
ye.expose(Po1(), ZK1);

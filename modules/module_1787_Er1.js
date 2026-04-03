// Module: Er1
// Params: pc8,RV2

var LV2 = zr1();
RV2.exports = wr1;
function wr1() {
  (LV2.call(this),
    (this.screenX = this.screenY = this.clientX = this.clientY = 0),
    (this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = !1),
    (this.button = 0),
    (this.buttons = 1),
    (this.relatedTarget = null));
}
wr1.prototype = Object.create(LV2.prototype, {
  constructor: { value: wr1 },
  initMouseEvent: {
    value: function (A, B, Q, I, G, D, Z, Y, W, F, J, C, X, V, K) {
      switch (
        (this.initEvent(A, B, Q, I, G),
        (this.screenX = D),
        (this.screenY = Z),
        (this.clientX = Y),
        (this.clientY = W),
        (this.ctrlKey = F),
        (this.altKey = J),
        (this.shiftKey = C),
        (this.metaKey = X),
        (this.button = V),
        V)
      ) {
        case 0:
          this.buttons = 1;
          break;
        case 1:
          this.buttons = 4;
          break;
        case 2:
          this.buttons = 2;
          break;
        default:
          this.buttons = 0;
          break;
      }
      this.relatedTarget = K;
    },
  },
  getModifierState: {
    value: function (A) {
      switch (A) {
        case 'Alt':
          return this.altKey;
        case 'Control':
          return this.ctrlKey;
        case 'Shift':
          return this.shiftKey;
        case 'Meta':
          return this.metaKey;
        default:
          return !1;
      }
    },
  },
});

// Module: zr1
// Params: uc8,MV2

var qV2 = Wd();
MV2.exports = Hr1;
function Hr1() {
  (qV2.call(this), (this.view = null), (this.detail = 0));
}
Hr1.prototype = Object.create(qV2.prototype, {
  constructor: { value: Hr1 },
  initUIEvent: {
    value: function (A, B, Q, I, G) {
      (this.initEvent(A, B, Q), (this.view = I), (this.detail = G));
    },
  },
});

// Module: bg0
// Params: Xz8,vg0

var TF6 = pz();
class fg0 extends TF6 {
  constructor(A, B) {
    super(A);
    this.onItemPop = B.onItemPop;
  }
  _getOverriddenMethods(A, B) {
    return {
      pop() {
        (A.onItemPop(this.current), B.pop.call(this));
      },
      popAllUpToHtmlElement() {
        for (let Q = this.stackTop; Q > 0; Q--) A.onItemPop(this.items[Q]);
        B.popAllUpToHtmlElement.call(this);
      },
      remove(Q) {
        (A.onItemPop(this.current), B.remove.call(this, Q));
      },
    };
  }
}
vg0.exports = fg0;

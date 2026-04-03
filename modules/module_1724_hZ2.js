// Module: hZ2
// Params: gZ2

Object.defineProperty(gZ2, '__esModule', { value: !0 });
gZ2.setup = Xr6;
var Cr6 = Iw();
class bZ2 {
  constructor(A, B, Q) {
    ((this.listener = B), (this.hasReturnedResult = !1), (this.endpoints = []));
    let I;
    if (A.authority === '') I = '/' + A.path;
    else I = A.path;
    this.endpoints = [{ addresses: [{ path: I }] }];
  }
  updateResolution() {
    if (!this.hasReturnedResult)
      ((this.hasReturnedResult = !0),
        process.nextTick(
          this.listener.onSuccessfulResolution,
          this.endpoints,
          null,
          null,
          null,
          {}
        ));
  }
  destroy() {
    this.hasReturnedResult = !1;
  }
  static getDefaultAuthority(A) {
    return 'localhost';
  }
}
function Xr6() {
  Cr6.registerResolver('unix', bZ2);
}

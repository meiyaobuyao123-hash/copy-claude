// Module: EV
// Params: FZ

var e16 =
    (FZ && FZ.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  AA6 =
    (FZ && FZ.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) e16(B, A, Q);
    };
Object.defineProperty(FZ, '__esModule', { value: !0 });
FZ.instance = FZ.Gaxios = FZ.GaxiosError = void 0;
FZ.request = QA6;
var WR0 = YR0();
Object.defineProperty(FZ, 'Gaxios', {
  enumerable: !0,
  get: function () {
    return WR0.Gaxios;
  },
});
var BA6 = Yg1();
Object.defineProperty(FZ, 'GaxiosError', {
  enumerable: !0,
  get: function () {
    return BA6.GaxiosError;
  },
});
AA6(Wg1(), FZ);
FZ.instance = new WR0.Gaxios();
async function QA6(A) {
  return FZ.instance.request(A);
}

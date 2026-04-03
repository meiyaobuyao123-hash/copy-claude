// Module: fjA
// Params: yH

var Pm9 =
    (yH && yH.__createBinding) ||
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
  Sm9 =
    (yH && yH.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) Pm9(B, A, Q);
    };
Object.defineProperty(yH, '__esModule', { value: !0 });
yH.StatsigClient = void 0;
var xjA = kjA();
yH.StatsigClient = xjA.default;
Sm9(cq(), yH);
__STATSIG__ = Object.assign(
  Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}),
  { StatsigClient: xjA.default }
);
yH.default = __STATSIG__;

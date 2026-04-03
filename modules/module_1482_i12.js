// Module: i12
// Params: H_

var qS6 =
    (H_ && H_.__createBinding) ||
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
  MS6 =
    (H_ && H_.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) qS6(B, A, Q);
    };
Object.defineProperty(H_, '__esModule', { value: !0 });
MS6(l12(), H_);

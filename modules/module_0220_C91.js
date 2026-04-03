// Module: C91
// Params: kZA

Object.defineProperty(kZA, '__esModule', { value: !0 });
kZA.captureError = kZA.errorContext = void 0;
var yZA = Rk(),
  RT = null;
function UI9(A) {
  if (yZA.config.useDeprecatedSynchronousErrorHandling) {
    var B = !RT;
    if (B) RT = { errorThrown: !1, error: null };
    if ((A(), B)) {
      var Q = RT,
        I = Q.errorThrown,
        G = Q.error;
      if (((RT = null), I)) throw G;
    }
  } else A();
}
kZA.errorContext = UI9;
function NI9(A) {
  if (yZA.config.useDeprecatedSynchronousErrorHandling && RT)
    ((RT.errorThrown = !0), (RT.error = A));
}
kZA.captureError = NI9;

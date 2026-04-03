// Module: H01
// Params: E6A

Object.defineProperty(E6A, '__esModule', { value: !0 });
var V01 = LW(),
  vc2 = by(),
  K01 = -1,
  bc2 = () => {
    if (V01.WINDOW.document && V01.WINDOW.document.visibilityState)
      K01 =
        V01.WINDOW.document.visibilityState === 'hidden' && !V01.WINDOW.document.prerendering
          ? 0
          : 1 / 0;
  },
  gc2 = () => {
    vc2.onHidden(({ timeStamp: A }) => {
      K01 = A;
    }, !0);
  },
  hc2 = () => {
    if (K01 < 0) (bc2(), gc2());
    return {
      get firstHiddenTime() {
        return K01;
      },
    };
  };
E6A.getVisibilityWatcher = hc2;

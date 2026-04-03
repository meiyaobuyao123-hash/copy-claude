// Module: q61
// Params: jSA

Object.defineProperty(jSA, '__esModule', { value: !0 });
jSA._notifyVisibilityChanged =
  jSA._subscribeToVisiblityChanged =
  jSA._isUnloading =
  jSA._isCurrentlyVisible =
    void 0;
var N61 = nT(),
  $61 = 'foreground',
  WR1 = 'background',
  _SA = [],
  YR1 = $61,
  FR1 = !1,
  Vg9 = () => {
    return YR1 === $61;
  };
jSA._isCurrentlyVisible = Vg9;
var Kg9 = () => FR1;
jSA._isUnloading = Kg9;
var Hg9 = (A) => {
  _SA.unshift(A);
};
jSA._subscribeToVisiblityChanged = Hg9;
var zg9 = (A) => {
  if (A === YR1) return;
  ((YR1 = A), _SA.forEach((B) => B(A)));
};
jSA._notifyVisibilityChanged = zg9;
N61._addWindowEventListenerSafe('focus', () => {
  ((FR1 = !1), jSA._notifyVisibilityChanged($61));
});
N61._addWindowEventListenerSafe('blur', () => jSA._notifyVisibilityChanged(WR1));
N61._addWindowEventListenerSafe('beforeunload', () => {
  ((FR1 = !0), jSA._notifyVisibilityChanged(WR1));
});
N61._addDocumentEventListenerSafe('visibilitychange', () => {
  jSA._notifyVisibilityChanged(document.visibilityState === 'visible' ? $61 : WR1);
});

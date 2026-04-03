// Module: eu
// Params: F6A

Object.defineProperty(F6A, '__esModule', { value: !0 });
var tu = LW(),
  Hc2 = () => {
    let A = tu.WINDOW.performance.timing,
      B = tu.WINDOW.performance.navigation.type,
      Q = {
        entryType: 'navigation',
        startTime: 0,
        type: B == 2 ? 'back_forward' : B === 1 ? 'reload' : 'navigate',
      };
    for (let I in A)
      if (I !== 'navigationStart' && I !== 'toJSON') Q[I] = Math.max(A[I] - A.navigationStart, 0);
    return Q;
  },
  zc2 = () => {
    if (tu.WINDOW.__WEB_VITALS_POLYFILL__)
      return (
        tu.WINDOW.performance &&
        ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || Hc2())
      );
    else
      return (
        tu.WINDOW.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType('navigation')[0]
      );
  };
F6A.getNavigationEntry = zc2;

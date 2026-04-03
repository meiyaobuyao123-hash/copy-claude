// Module: vy
// Params: X6A

Object.defineProperty(X6A, '__esModule', { value: !0 });
var C6A = LW(),
  $c2 = W6A(),
  qc2 = X01(),
  Mc2 = eu(),
  Lc2 = (A, B) => {
    let Q = Mc2.getNavigationEntry(),
      I = 'navigate';
    if (Q)
      if ((C6A.WINDOW.document && C6A.WINDOW.document.prerendering) || qc2.getActivationStart() > 0)
        I = 'prerender';
      else I = Q.type.replace(/_/g, '-');
    return {
      name: A,
      value: typeof B === 'undefined' ? -1 : B,
      rating: 'good',
      delta: 0,
      entries: [],
      id: $c2.generateUniqueID(),
      navigationType: I,
    };
  };
X6A.initMetric = Lc2;

// Module: by
// Params: H6A

Object.defineProperty(H6A, '__esModule', { value: !0 });
var K6A = LW(),
  Pc2 = (A, B) => {
    let Q = (I) => {
      if (I.type === 'pagehide' || K6A.WINDOW.document.visibilityState === 'hidden') {
        if ((A(I), B))
          (removeEventListener('visibilitychange', Q, !0), removeEventListener('pagehide', Q, !0));
      }
    };
    if (K6A.WINDOW.document)
      (addEventListener('visibilitychange', Q, !0), addEventListener('pagehide', Q, !0));
  };
H6A.onHidden = Pc2;

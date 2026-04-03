// Module: e11
// Params: le1

Object.defineProperty(le1, '__esModule', { value: !0 });
function ce1(A, B = !1) {
  return (
    !(
      B ||
      (A &&
        !A.startsWith('/') &&
        !A.match(/^[A-Z]:/) &&
        !A.startsWith('.') &&
        !A.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
    ) &&
    A !== void 0 &&
    !A.includes('node_modules/')
  );
}
function oM2(A) {
  let B = /^\s*[-]{4,}$/,
    Q = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  return (I) => {
    let G = I.match(Q);
    if (G) {
      let D, Z, Y, W, F;
      if (G[1]) {
        Y = G[1];
        let X = Y.lastIndexOf('.');
        if (Y[X - 1] === '.') X--;
        if (X > 0) {
          ((D = Y.slice(0, X)), (Z = Y.slice(X + 1)));
          let V = D.indexOf('.Module');
          if (V > 0) ((Y = Y.slice(V + 1)), (D = D.slice(0, V)));
        }
        W = void 0;
      }
      if (Z) ((W = D), (F = Z));
      if (Z === '<anonymous>') ((F = void 0), (Y = void 0));
      if (Y === void 0) ((F = F || '<anonymous>'), (Y = W ? `${W}.${F}` : F));
      let J = G[2] && G[2].startsWith('file://') ? G[2].slice(7) : G[2],
        C = G[5] === 'native';
      if (J && J.match(/\/[A-Z]:/)) J = J.slice(1);
      if (!J && G[5] && !C) J = G[5];
      return {
        filename: J,
        module: A ? A(J) : void 0,
        function: Y,
        lineno: parseInt(G[3], 10) || void 0,
        colno: parseInt(G[4], 10) || void 0,
        in_app: ce1(J, C),
      };
    }
    if (I.match(B)) return { filename: I };
    return;
  };
}
le1.filenameIsInApp = ce1;
le1.node = oM2;

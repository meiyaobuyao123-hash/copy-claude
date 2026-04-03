// Module: gz1
// Params: Y1A

Object.defineProperty(Y1A, '__esModule', { value: !0 });
var pL2 = Mu(),
  QA1 = IJ(),
  cL2 = fG(),
  fz1 = wE(),
  Ey = cL2.GLOBAL_OBJ,
  lL2 = 1000,
  G1A,
  vz1,
  bz1;
function iL2(A) {
  (fz1.addHandler('dom', A), fz1.maybeInstrument('dom', Z1A));
}
function Z1A() {
  if (!Ey.document) return;
  let A = fz1.triggerHandlers.bind(null, 'dom'),
    B = D1A(A, !0);
  (Ey.document.addEventListener('click', B, !1),
    Ey.document.addEventListener('keypress', B, !1),
    ['EventTarget', 'Node'].forEach((Q) => {
      let I = Ey[Q] && Ey[Q].prototype;
      if (!I || !I.hasOwnProperty || !I.hasOwnProperty('addEventListener')) return;
      (QA1.fill(I, 'addEventListener', function (G) {
        return function (D, Z, Y) {
          if (D === 'click' || D == 'keypress')
            try {
              let W = this,
                F = (W.__sentry_instrumentation_handlers__ =
                  W.__sentry_instrumentation_handlers__ || {}),
                J = (F[D] = F[D] || { refCount: 0 });
              if (!J.handler) {
                let C = D1A(A);
                ((J.handler = C), G.call(this, D, C, Y));
              }
              J.refCount++;
            } catch (W) {}
          return G.call(this, D, Z, Y);
        };
      }),
        QA1.fill(I, 'removeEventListener', function (G) {
          return function (D, Z, Y) {
            if (D === 'click' || D == 'keypress')
              try {
                let W = this,
                  F = W.__sentry_instrumentation_handlers__ || {},
                  J = F[D];
                if (J) {
                  if ((J.refCount--, J.refCount <= 0))
                    (G.call(this, D, J.handler, Y), (J.handler = void 0), delete F[D]);
                  if (Object.keys(F).length === 0) delete W.__sentry_instrumentation_handlers__;
                }
              } catch (W) {}
            return G.call(this, D, Z, Y);
          };
        }));
    }));
}
function nL2(A) {
  if (A.type !== vz1) return !1;
  try {
    if (!A.target || A.target._sentryId !== bz1) return !1;
  } catch (B) {}
  return !0;
}
function aL2(A, B) {
  if (A !== 'keypress') return !1;
  if (!B || !B.tagName) return !0;
  if (B.tagName === 'INPUT' || B.tagName === 'TEXTAREA' || B.isContentEditable) return !1;
  return !0;
}
function D1A(A, B = !1) {
  return (Q) => {
    if (!Q || Q._sentryCaptured) return;
    let I = sL2(Q);
    if (aL2(Q.type, I)) return;
    if ((QA1.addNonEnumerableProperty(Q, '_sentryCaptured', !0), I && !I._sentryId))
      QA1.addNonEnumerableProperty(I, '_sentryId', pL2.uuid4());
    let G = Q.type === 'keypress' ? 'input' : Q.type;
    if (!nL2(Q))
      (A({ event: Q, name: G, global: B }), (vz1 = Q.type), (bz1 = I ? I._sentryId : void 0));
    (clearTimeout(G1A),
      (G1A = Ey.setTimeout(() => {
        ((bz1 = void 0), (vz1 = void 0));
      }, lL2)));
  };
}
function sL2(A) {
  try {
    return A.target;
  } catch (B) {
    return null;
  }
}
Y1A.addClickKeypressInstrumentationHandler = iL2;
Y1A.instrumentDOM = Z1A;

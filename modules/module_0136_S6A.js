// Module: S6A
// Params: P6A

Object.defineProperty(P6A, '__esModule', { value: !0 });
var Al2 = fy(),
  Bl2 = vy(),
  Ql2 = QT(),
  Il2 = by(),
  O6A = M6A(),
  T6A = () => {
    return O6A.getInteractionCount();
  },
  L6A = 10,
  LE = [],
  _E1 = {},
  R6A = (A) => {
    let B = LE[LE.length - 1],
      Q = _E1[A.interactionId];
    if (Q || LE.length < L6A || A.duration > B.latency) {
      if (Q) (Q.entries.push(A), (Q.latency = Math.max(Q.latency, A.duration)));
      else {
        let I = { id: A.interactionId, latency: A.duration, entries: [A] };
        ((_E1[I.id] = I), LE.push(I));
      }
      (LE.sort((I, G) => G.latency - I.latency),
        LE.splice(L6A).forEach((I) => {
          delete _E1[I.id];
        }));
    }
  },
  Gl2 = () => {
    let A = Math.min(LE.length - 1, Math.floor(T6A() / 50));
    return LE[A];
  },
  Dl2 = (A, B) => {
    ((B = B || {}), O6A.initInteractionCountPolyfill());
    let Q = Bl2.initMetric('INP'),
      I,
      G = (Z) => {
        Z.forEach((W) => {
          if (W.interactionId) R6A(W);
          if (W.entryType === 'first-input') {
            if (
              !LE.some((J) => {
                return J.entries.some((C) => {
                  return W.duration === C.duration && W.startTime === C.startTime;
                });
              })
            )
              R6A(W);
          }
        });
        let Y = Gl2();
        if (Y && Y.latency !== Q.value) ((Q.value = Y.latency), (Q.entries = Y.entries), I());
      },
      D = Ql2.observe('event', G, { durationThreshold: B.durationThreshold || 40 });
    if (((I = Al2.bindReporter(A, Q, B.reportAllChanges)), D))
      (D.observe({ type: 'first-input', buffered: !0 }),
        Il2.onHidden(() => {
          if ((G(D.takeRecords()), Q.value < 0 && T6A() > 0)) ((Q.value = 0), (Q.entries = []));
          I(!0);
        }));
  };
P6A.onINP = Dl2;

// Module: M6A
// Params: q6A

Object.defineProperty(q6A, '__esModule', { value: !0 });
var ac2 = QT(),
  $6A = 0,
  PE1 = 1 / 0,
  z01 = 0,
  sc2 = (A) => {
    A.forEach((B) => {
      if (B.interactionId)
        ((PE1 = Math.min(PE1, B.interactionId)),
          (z01 = Math.max(z01, B.interactionId)),
          ($6A = z01 ? (z01 - PE1) / 7 + 1 : 0));
    });
  },
  SE1,
  rc2 = () => {
    return SE1 ? $6A : performance.interactionCount || 0;
  },
  oc2 = () => {
    if ('interactionCount' in performance || SE1) return;
    SE1 = ac2.observe('event', sc2, { type: 'event', buffered: !0, durationThreshold: 0 });
  };
q6A.getInteractionCount = rc2;
q6A.initInteractionCountPolyfill = oc2;

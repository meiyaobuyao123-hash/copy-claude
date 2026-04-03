// Module: B9A
// Params: A9A

Object.defineProperty(A9A, '__esModule', { value: !0 });
var FE1 = tA(),
  Fh2 = vQ(),
  e2A = 100,
  JE1 = 5000,
  Jh2 = 3600000;
function WE1(A, B) {
  Fh2.DEBUG_BUILD && FE1.logger.info(`[Offline]: ${A}`, B);
}
function Ch2(A) {
  return (B) => {
    let Q = A(B),
      I = B.createStore ? B.createStore(B) : void 0,
      G = JE1,
      D;
    function Z(J, C, X) {
      if (FE1.envelopeContainsItemType(J, ['replay_event', 'replay_recording', 'client_report']))
        return !1;
      if (B.shouldStore) return B.shouldStore(J, C, X);
      return !0;
    }
    function Y(J) {
      if (!I) return;
      if (D) clearTimeout(D);
      if (
        ((D = setTimeout(async () => {
          D = void 0;
          let C = await I.pop();
          if (C)
            (WE1('Attempting to send previously queued event'),
              F(C).catch((X) => {
                WE1('Failed to retry sending', X);
              }));
        }, J)),
        typeof D !== 'number' && D.unref)
      )
        D.unref();
    }
    function W() {
      if (D) return;
      (Y(G), (G = Math.min(G * 2, Jh2)));
    }
    async function F(J) {
      try {
        let C = await Q.send(J),
          X = e2A;
        if (C) {
          if (C.headers && C.headers['retry-after'])
            X = FE1.parseRetryAfterHeader(C.headers['retry-after']);
          else if ((C.statusCode || 0) >= 400) return C;
        }
        return (Y(X), (G = JE1), C);
      } catch (C) {
        if (I && (await Z(J, C, G)))
          return (await I.insert(J), W(), WE1('Error sending. Event queued', C), {});
        else throw C;
      }
    }
    if (B.flushAtStartup) W();
    return { send: F, flush: (J) => Q.flush(J) };
  };
}
A9A.MIN_DELAY = e2A;
A9A.START_DELAY = JE1;
A9A.makeOfflineTransport = Ch2;

// Module: tz1
// Params: U1A

Object.defineProperty(U1A, '__esModule', { value: !0 });
var JA1 = QJ(),
  FA1 = IJ(),
  fR2 = fG(),
  CA1 = wE(),
  vR2 = fR2.GLOBAL_OBJ,
  Ou = '__sentry_xhr_v3__';
function bR2(A) {
  (CA1.addHandler('xhr', A), CA1.maybeInstrument('xhr', E1A));
}
function E1A() {
  if (!vR2.XMLHttpRequest) return;
  let A = XMLHttpRequest.prototype;
  (FA1.fill(A, 'open', function (B) {
    return function (...Q) {
      let I = Date.now(),
        G = JA1.isString(Q[0]) ? Q[0].toUpperCase() : void 0,
        D = gR2(Q[1]);
      if (!G || !D) return B.apply(this, Q);
      if (
        ((this[Ou] = { method: G, url: D, request_headers: {} }),
        G === 'POST' && D.match(/sentry_key/))
      )
        this.__sentry_own_request__ = !0;
      let Z = () => {
        let Y = this[Ou];
        if (!Y) return;
        if (this.readyState === 4) {
          try {
            Y.status_code = this.status;
          } catch (F) {}
          let W = { args: [G, D], endTimestamp: Date.now(), startTimestamp: I, xhr: this };
          CA1.triggerHandlers('xhr', W);
        }
      };
      if ('onreadystatechange' in this && typeof this.onreadystatechange === 'function')
        FA1.fill(this, 'onreadystatechange', function (Y) {
          return function (...W) {
            return (Z(), Y.apply(this, W));
          };
        });
      else this.addEventListener('readystatechange', Z);
      return (
        FA1.fill(this, 'setRequestHeader', function (Y) {
          return function (...W) {
            let [F, J] = W,
              C = this[Ou];
            if (C && JA1.isString(F) && JA1.isString(J)) C.request_headers[F.toLowerCase()] = J;
            return Y.apply(this, W);
          };
        }),
        B.apply(this, Q)
      );
    };
  }),
    FA1.fill(A, 'send', function (B) {
      return function (...Q) {
        let I = this[Ou];
        if (!I) return B.apply(this, Q);
        if (Q[0] !== void 0) I.body = Q[0];
        let G = { args: [I.method, I.url], startTimestamp: Date.now(), xhr: this };
        return (CA1.triggerHandlers('xhr', G), B.apply(this, Q));
      };
    }));
}
function gR2(A) {
  if (JA1.isString(A)) return A;
  try {
    return A.toString();
  } catch (B) {}
  return;
}
U1A.SENTRY_XHR_DATA_KEY = Ou;
U1A.addXhrInstrumentationHandler = bR2;
U1A.instrumentXHR = E1A;

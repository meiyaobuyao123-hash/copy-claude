// Module: Dg0
// Params: bK8,Gg0

var { pipeline: wW6 } = D1('node:stream'),
  { fetching: EW6 } = Ir(),
  { makeRequest: UW6 } = Jh(),
  { webidl: YN } = WG(),
  { EventSourceStream: NW6 } = ob0(),
  { parseMIMEType: $W6 } = $Y(),
  { createFastMessageEvent: qW6 } = zh(),
  { isNetworkError: tb0 } = Br(),
  { delay: MW6 } = Qu1(),
  { kEnumerableProperty: nS } = I6(),
  { environmentSettingsObject: eb0 } = GF(),
  Ag0 = !1,
  Bg0 = 3000,
  zr = 0,
  Qg0 = 1,
  wr = 2,
  LW6 = 'anonymous',
  RW6 = 'use-credentials';
class $h extends EventTarget {
  #A = { open: null, error: null, message: null };
  #B = null;
  #Q = !1;
  #I = zr;
  #G = null;
  #W = null;
  #D;
  #J;
  constructor(A, B = {}) {
    super();
    YN.util.markAsUncloneable(this);
    let Q = 'EventSource constructor';
    if ((YN.argumentLengthCheck(arguments, 1, Q), !Ag0))
      ((Ag0 = !0),
        process.emitWarning('EventSource is experimental, expect them to change at any time.', {
          code: 'UNDICI-ES',
        }));
    ((A = YN.converters.USVString(A, Q, 'url')),
      (B = YN.converters.EventSourceInitDict(B, Q, 'eventSourceInitDict')),
      (this.#D = B.dispatcher),
      (this.#J = { lastEventId: '', reconnectionTime: Bg0 }));
    let I = eb0,
      G;
    try {
      ((G = new URL(A, I.settingsObject.baseUrl)), (this.#J.origin = G.origin));
    } catch (Y) {
      throw new DOMException(Y, 'SyntaxError');
    }
    this.#B = G.href;
    let D = LW6;
    if (B.withCredentials) ((D = RW6), (this.#Q = !0));
    let Z = {
      redirect: 'follow',
      keepalive: !0,
      mode: 'cors',
      credentials: D === 'anonymous' ? 'same-origin' : 'omit',
      referrer: 'no-referrer',
    };
    ((Z.client = eb0.settingsObject),
      (Z.headersList = [['accept', { name: 'accept', value: 'text/event-stream' }]]),
      (Z.cache = 'no-store'),
      (Z.initiator = 'other'),
      (Z.urlList = [new URL(this.#B)]),
      (this.#G = UW6(Z)),
      this.#F());
  }
  get readyState() {
    return this.#I;
  }
  get url() {
    return this.#B;
  }
  get withCredentials() {
    return this.#Q;
  }
  #F() {
    if (this.#I === wr) return;
    this.#I = zr;
    let A = { request: this.#G, dispatcher: this.#D },
      B = (Q) => {
        if (tb0(Q)) (this.dispatchEvent(new Event('error')), this.close());
        this.#C();
      };
    ((A.processResponseEndOfBody = B),
      (A.processResponse = (Q) => {
        if (tb0(Q))
          if (Q.aborted) {
            (this.close(), this.dispatchEvent(new Event('error')));
            return;
          } else {
            this.#C();
            return;
          }
        let I = Q.headersList.get('content-type', !0),
          G = I !== null ? $W6(I) : 'failure',
          D = G !== 'failure' && G.essence === 'text/event-stream';
        if (Q.status !== 200 || D === !1) {
          (this.close(), this.dispatchEvent(new Event('error')));
          return;
        }
        ((this.#I = Qg0),
          this.dispatchEvent(new Event('open')),
          (this.#J.origin = Q.urlList[Q.urlList.length - 1].origin));
        let Z = new NW6({
          eventSourceSettings: this.#J,
          push: (Y) => {
            this.dispatchEvent(qW6(Y.type, Y.options));
          },
        });
        wW6(Q.body.stream, Z, (Y) => {
          if (Y?.aborted === !1) (this.close(), this.dispatchEvent(new Event('error')));
        });
      }),
      (this.#W = EW6(A)));
  }
  async #C() {
    if (this.#I === wr) return;
    if (
      ((this.#I = zr),
      this.dispatchEvent(new Event('error')),
      await MW6(this.#J.reconnectionTime),
      this.#I !== zr)
    )
      return;
    if (this.#J.lastEventId.length)
      this.#G.headersList.set('last-event-id', this.#J.lastEventId, !0);
    this.#F();
  }
  close() {
    if ((YN.brandCheck(this, $h), this.#I === wr)) return;
    ((this.#I = wr), this.#W.abort(), (this.#G = null));
  }
  get onopen() {
    return this.#A.open;
  }
  set onopen(A) {
    if (this.#A.open) this.removeEventListener('open', this.#A.open);
    if (typeof A === 'function') ((this.#A.open = A), this.addEventListener('open', A));
    else this.#A.open = null;
  }
  get onmessage() {
    return this.#A.message;
  }
  set onmessage(A) {
    if (this.#A.message) this.removeEventListener('message', this.#A.message);
    if (typeof A === 'function') ((this.#A.message = A), this.addEventListener('message', A));
    else this.#A.message = null;
  }
  get onerror() {
    return this.#A.error;
  }
  set onerror(A) {
    if (this.#A.error) this.removeEventListener('error', this.#A.error);
    if (typeof A === 'function') ((this.#A.error = A), this.addEventListener('error', A));
    else this.#A.error = null;
  }
}
var Ig0 = {
  CONNECTING: { __proto__: null, configurable: !1, enumerable: !0, value: zr, writable: !1 },
  OPEN: { __proto__: null, configurable: !1, enumerable: !0, value: Qg0, writable: !1 },
  CLOSED: { __proto__: null, configurable: !1, enumerable: !0, value: wr, writable: !1 },
};
Object.defineProperties($h, Ig0);
Object.defineProperties($h.prototype, Ig0);
Object.defineProperties($h.prototype, {
  close: nS,
  onerror: nS,
  onmessage: nS,
  onopen: nS,
  readyState: nS,
  url: nS,
  withCredentials: nS,
});
YN.converters.EventSourceInitDict = YN.dictionaryConverter([
  { key: 'withCredentials', converter: YN.converters.boolean, defaultValue: () => !1 },
  { key: 'dispatcher', converter: YN.converters.any },
]);
Gg0.exports = { EventSource: $h, defaultReconnectionTime: Bg0 };

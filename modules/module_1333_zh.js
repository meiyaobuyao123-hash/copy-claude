// Module: zh
// Params: RK8,sv0

var { webidl: U9 } = WG(),
  { kEnumerableProperty: RY } = I6(),
  { kConstruct: av0 } = uB(),
  { MessagePort: dZ6 } = D1('node:worker_threads');
class CF extends Event {
  #A;
  constructor(A, B = {}) {
    if (A === av0) {
      super(arguments[1], arguments[2]);
      U9.util.markAsUncloneable(this);
      return;
    }
    let Q = 'MessageEvent constructor';
    (U9.argumentLengthCheck(arguments, 1, Q),
      (A = U9.converters.DOMString(A, Q, 'type')),
      (B = U9.converters.MessageEventInit(B, Q, 'eventInitDict')));
    super(A, B);
    ((this.#A = B), U9.util.markAsUncloneable(this));
  }
  get data() {
    return (U9.brandCheck(this, CF), this.#A.data);
  }
  get origin() {
    return (U9.brandCheck(this, CF), this.#A.origin);
  }
  get lastEventId() {
    return (U9.brandCheck(this, CF), this.#A.lastEventId);
  }
  get source() {
    return (U9.brandCheck(this, CF), this.#A.source);
  }
  get ports() {
    if ((U9.brandCheck(this, CF), !Object.isFrozen(this.#A.ports))) Object.freeze(this.#A.ports);
    return this.#A.ports;
  }
  initMessageEvent(A, B = !1, Q = !1, I = null, G = '', D = '', Z = null, Y = []) {
    return (
      U9.brandCheck(this, CF),
      U9.argumentLengthCheck(arguments, 1, 'MessageEvent.initMessageEvent'),
      new CF(A, {
        bubbles: B,
        cancelable: Q,
        data: I,
        origin: G,
        lastEventId: D,
        source: Z,
        ports: Y,
      })
    );
  }
  static createFastMessageEvent(A, B) {
    let Q = new CF(av0, A, B);
    return (
      (Q.#A = B),
      (Q.#A.data ??= null),
      (Q.#A.origin ??= ''),
      (Q.#A.lastEventId ??= ''),
      (Q.#A.source ??= null),
      (Q.#A.ports ??= []),
      Q
    );
  }
}
var { createFastMessageEvent: uZ6 } = CF;
delete CF.createFastMessageEvent;
class Hh extends Event {
  #A;
  constructor(A, B = {}) {
    (U9.argumentLengthCheck(arguments, 1, 'CloseEvent constructor'),
      (A = U9.converters.DOMString(A, 'CloseEvent constructor', 'type')),
      (B = U9.converters.CloseEventInit(B)));
    super(A, B);
    ((this.#A = B), U9.util.markAsUncloneable(this));
  }
  get wasClean() {
    return (U9.brandCheck(this, Hh), this.#A.wasClean);
  }
  get code() {
    return (U9.brandCheck(this, Hh), this.#A.code);
  }
  get reason() {
    return (U9.brandCheck(this, Hh), this.#A.reason);
  }
}
class mL extends Event {
  #A;
  constructor(A, B) {
    U9.argumentLengthCheck(arguments, 1, 'ErrorEvent constructor');
    super(A, B);
    (U9.util.markAsUncloneable(this),
      (A = U9.converters.DOMString(A, 'ErrorEvent constructor', 'type')),
      (B = U9.converters.ErrorEventInit(B ?? {})),
      (this.#A = B));
  }
  get message() {
    return (U9.brandCheck(this, mL), this.#A.message);
  }
  get filename() {
    return (U9.brandCheck(this, mL), this.#A.filename);
  }
  get lineno() {
    return (U9.brandCheck(this, mL), this.#A.lineno);
  }
  get colno() {
    return (U9.brandCheck(this, mL), this.#A.colno);
  }
  get error() {
    return (U9.brandCheck(this, mL), this.#A.error);
  }
}
Object.defineProperties(CF.prototype, {
  [Symbol.toStringTag]: { value: 'MessageEvent', configurable: !0 },
  data: RY,
  origin: RY,
  lastEventId: RY,
  source: RY,
  ports: RY,
  initMessageEvent: RY,
});
Object.defineProperties(Hh.prototype, {
  [Symbol.toStringTag]: { value: 'CloseEvent', configurable: !0 },
  reason: RY,
  code: RY,
  wasClean: RY,
});
Object.defineProperties(mL.prototype, {
  [Symbol.toStringTag]: { value: 'ErrorEvent', configurable: !0 },
  message: RY,
  filename: RY,
  lineno: RY,
  colno: RY,
  error: RY,
});
U9.converters.MessagePort = U9.interfaceConverter(dZ6);
U9.converters['sequence<MessagePort>'] = U9.sequenceConverter(U9.converters.MessagePort);
var sd1 = [
  { key: 'bubbles', converter: U9.converters.boolean, defaultValue: () => !1 },
  { key: 'cancelable', converter: U9.converters.boolean, defaultValue: () => !1 },
  { key: 'composed', converter: U9.converters.boolean, defaultValue: () => !1 },
];
U9.converters.MessageEventInit = U9.dictionaryConverter([
  ...sd1,
  { key: 'data', converter: U9.converters.any, defaultValue: () => null },
  { key: 'origin', converter: U9.converters.USVString, defaultValue: () => '' },
  { key: 'lastEventId', converter: U9.converters.DOMString, defaultValue: () => '' },
  {
    key: 'source',
    converter: U9.nullableConverter(U9.converters.MessagePort),
    defaultValue: () => null,
  },
  {
    key: 'ports',
    converter: U9.converters['sequence<MessagePort>'],
    defaultValue: () => new Array(0),
  },
]);
U9.converters.CloseEventInit = U9.dictionaryConverter([
  ...sd1,
  { key: 'wasClean', converter: U9.converters.boolean, defaultValue: () => !1 },
  { key: 'code', converter: U9.converters['unsigned short'], defaultValue: () => 0 },
  { key: 'reason', converter: U9.converters.USVString, defaultValue: () => '' },
]);
U9.converters.ErrorEventInit = U9.dictionaryConverter([
  ...sd1,
  { key: 'message', converter: U9.converters.DOMString, defaultValue: () => '' },
  { key: 'filename', converter: U9.converters.USVString, defaultValue: () => '' },
  { key: 'lineno', converter: U9.converters['unsigned long'], defaultValue: () => 0 },
  { key: 'colno', converter: U9.converters['unsigned long'], defaultValue: () => 0 },
  { key: 'error', converter: U9.converters.any },
]);
sv0.exports = { MessageEvent: CF, CloseEvent: Hh, ErrorEvent: mL, createFastMessageEvent: uZ6 };

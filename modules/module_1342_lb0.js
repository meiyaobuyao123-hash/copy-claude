// Module: lb0
// Params: xK8,cb0

var { webidl: G4 } = WG(),
  { URLSerializer: rY6 } = $Y(),
  { environmentSettingsObject: bb0 } = GF(),
  { staticPropertyDescriptors: pL, states: Hr, sentCloseFrameState: oY6, sendHints: dW1 } = iS(),
  {
    kWebSocketURL: gb0,
    kReadyState: Bu1,
    kController: tY6,
    kBinaryType: uW1,
    kResponse: hb0,
    kSentClose: eY6,
    kByteParser: AW6,
  } = Wr(),
  {
    isConnecting: BW6,
    isEstablished: QW6,
    isClosing: IW6,
    isValidSubprotocol: GW6,
    fireEvent: mb0,
  } = Cr(),
  { establishWebSocketConnection: DW6, closeWebSocketConnection: db0 } = ed1(),
  { ByteParser: ZW6 } = _b0(),
  { kEnumerableProperty: YC, isBlobLike: ub0 } = I6(),
  { getGlobalDispatcher: YW6 } = WW1(),
  { types: pb0 } = D1('node:util'),
  { ErrorEvent: WW6, CloseEvent: FW6 } = zh(),
  { SendQueue: JW6 } = vb0();
class g5 extends EventTarget {
  #A = { open: null, error: null, close: null, message: null };
  #B = 0;
  #Q = '';
  #I = '';
  #G;
  constructor(A, B = []) {
    super();
    G4.util.markAsUncloneable(this);
    let Q = 'WebSocket constructor';
    G4.argumentLengthCheck(arguments, 1, Q);
    let I = G4.converters['DOMString or sequence<DOMString> or WebSocketInit'](B, Q, 'options');
    ((A = G4.converters.USVString(A, Q, 'url')), (B = I.protocols));
    let G = bb0.settingsObject.baseUrl,
      D;
    try {
      D = new URL(A, G);
    } catch (Y) {
      throw new DOMException(Y, 'SyntaxError');
    }
    if (D.protocol === 'http:') D.protocol = 'ws:';
    else if (D.protocol === 'https:') D.protocol = 'wss:';
    if (D.protocol !== 'ws:' && D.protocol !== 'wss:')
      throw new DOMException(`Expected a ws: or wss: protocol, got ${D.protocol}`, 'SyntaxError');
    if (D.hash || D.href.endsWith('#')) throw new DOMException('Got fragment', 'SyntaxError');
    if (typeof B === 'string') B = [B];
    if (B.length !== new Set(B.map((Y) => Y.toLowerCase())).size)
      throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
    if (B.length > 0 && !B.every((Y) => GW6(Y)))
      throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
    this[gb0] = new URL(D.href);
    let Z = bb0.settingsObject;
    ((this[tY6] = DW6(D, B, Z, this, (Y, W) => this.#W(Y, W), I)),
      (this[Bu1] = g5.CONNECTING),
      (this[eY6] = oY6.NOT_SENT),
      (this[uW1] = 'blob'));
  }
  close(A = void 0, B = void 0) {
    G4.brandCheck(this, g5);
    let Q = 'WebSocket.close';
    if (A !== void 0) A = G4.converters['unsigned short'](A, Q, 'code', { clamp: !0 });
    if (B !== void 0) B = G4.converters.USVString(B, Q, 'reason');
    if (A !== void 0) {
      if (A !== 1000 && (A < 3000 || A > 4999))
        throw new DOMException('invalid code', 'InvalidAccessError');
    }
    let I = 0;
    if (B !== void 0) {
      if (((I = Buffer.byteLength(B)), I > 123))
        throw new DOMException(`Reason must be less than 123 bytes; received ${I}`, 'SyntaxError');
    }
    db0(this, A, B, I);
  }
  send(A) {
    G4.brandCheck(this, g5);
    let B = 'WebSocket.send';
    if (
      (G4.argumentLengthCheck(arguments, 1, B),
      (A = G4.converters.WebSocketSendData(A, B, 'data')),
      BW6(this))
    )
      throw new DOMException('Sent before connected.', 'InvalidStateError');
    if (!QW6(this) || IW6(this)) return;
    if (typeof A === 'string') {
      let Q = Buffer.byteLength(A);
      ((this.#B += Q),
        this.#G.add(
          A,
          () => {
            this.#B -= Q;
          },
          dW1.string
        ));
    } else if (pb0.isArrayBuffer(A))
      ((this.#B += A.byteLength),
        this.#G.add(
          A,
          () => {
            this.#B -= A.byteLength;
          },
          dW1.arrayBuffer
        ));
    else if (ArrayBuffer.isView(A))
      ((this.#B += A.byteLength),
        this.#G.add(
          A,
          () => {
            this.#B -= A.byteLength;
          },
          dW1.typedArray
        ));
    else if (ub0(A))
      ((this.#B += A.size),
        this.#G.add(
          A,
          () => {
            this.#B -= A.size;
          },
          dW1.blob
        ));
  }
  get readyState() {
    return (G4.brandCheck(this, g5), this[Bu1]);
  }
  get bufferedAmount() {
    return (G4.brandCheck(this, g5), this.#B);
  }
  get url() {
    return (G4.brandCheck(this, g5), rY6(this[gb0]));
  }
  get extensions() {
    return (G4.brandCheck(this, g5), this.#I);
  }
  get protocol() {
    return (G4.brandCheck(this, g5), this.#Q);
  }
  get onopen() {
    return (G4.brandCheck(this, g5), this.#A.open);
  }
  set onopen(A) {
    if ((G4.brandCheck(this, g5), this.#A.open)) this.removeEventListener('open', this.#A.open);
    if (typeof A === 'function') ((this.#A.open = A), this.addEventListener('open', A));
    else this.#A.open = null;
  }
  get onerror() {
    return (G4.brandCheck(this, g5), this.#A.error);
  }
  set onerror(A) {
    if ((G4.brandCheck(this, g5), this.#A.error)) this.removeEventListener('error', this.#A.error);
    if (typeof A === 'function') ((this.#A.error = A), this.addEventListener('error', A));
    else this.#A.error = null;
  }
  get onclose() {
    return (G4.brandCheck(this, g5), this.#A.close);
  }
  set onclose(A) {
    if ((G4.brandCheck(this, g5), this.#A.close)) this.removeEventListener('close', this.#A.close);
    if (typeof A === 'function') ((this.#A.close = A), this.addEventListener('close', A));
    else this.#A.close = null;
  }
  get onmessage() {
    return (G4.brandCheck(this, g5), this.#A.message);
  }
  set onmessage(A) {
    if ((G4.brandCheck(this, g5), this.#A.message))
      this.removeEventListener('message', this.#A.message);
    if (typeof A === 'function') ((this.#A.message = A), this.addEventListener('message', A));
    else this.#A.message = null;
  }
  get binaryType() {
    return (G4.brandCheck(this, g5), this[uW1]);
  }
  set binaryType(A) {
    if ((G4.brandCheck(this, g5), A !== 'blob' && A !== 'arraybuffer')) this[uW1] = 'blob';
    else this[uW1] = A;
  }
  #W(A, B) {
    this[hb0] = A;
    let Q = new ZW6(this, B);
    (Q.on('drain', CW6),
      Q.on('error', XW6.bind(this)),
      (A.socket.ws = this),
      (this[AW6] = Q),
      (this.#G = new JW6(A.socket)),
      (this[Bu1] = Hr.OPEN));
    let I = A.headersList.get('sec-websocket-extensions');
    if (I !== null) this.#I = I;
    let G = A.headersList.get('sec-websocket-protocol');
    if (G !== null) this.#Q = G;
    mb0('open', this);
  }
}
g5.CONNECTING = g5.prototype.CONNECTING = Hr.CONNECTING;
g5.OPEN = g5.prototype.OPEN = Hr.OPEN;
g5.CLOSING = g5.prototype.CLOSING = Hr.CLOSING;
g5.CLOSED = g5.prototype.CLOSED = Hr.CLOSED;
Object.defineProperties(g5.prototype, {
  CONNECTING: pL,
  OPEN: pL,
  CLOSING: pL,
  CLOSED: pL,
  url: YC,
  readyState: YC,
  bufferedAmount: YC,
  onopen: YC,
  onerror: YC,
  onclose: YC,
  close: YC,
  onmessage: YC,
  binaryType: YC,
  send: YC,
  extensions: YC,
  protocol: YC,
  [Symbol.toStringTag]: { value: 'WebSocket', writable: !1, enumerable: !1, configurable: !0 },
});
Object.defineProperties(g5, { CONNECTING: pL, OPEN: pL, CLOSING: pL, CLOSED: pL });
G4.converters['sequence<DOMString>'] = G4.sequenceConverter(G4.converters.DOMString);
G4.converters['DOMString or sequence<DOMString>'] = function (A, B, Q) {
  if (G4.util.Type(A) === 'Object' && Symbol.iterator in A)
    return G4.converters['sequence<DOMString>'](A);
  return G4.converters.DOMString(A, B, Q);
};
G4.converters.WebSocketInit = G4.dictionaryConverter([
  {
    key: 'protocols',
    converter: G4.converters['DOMString or sequence<DOMString>'],
    defaultValue: () => new Array(0),
  },
  { key: 'dispatcher', converter: G4.converters.any, defaultValue: () => YW6() },
  { key: 'headers', converter: G4.nullableConverter(G4.converters.HeadersInit) },
]);
G4.converters['DOMString or sequence<DOMString> or WebSocketInit'] = function (A) {
  if (G4.util.Type(A) === 'Object' && !(Symbol.iterator in A))
    return G4.converters.WebSocketInit(A);
  return { protocols: G4.converters['DOMString or sequence<DOMString>'](A) };
};
G4.converters.WebSocketSendData = function (A) {
  if (G4.util.Type(A) === 'Object') {
    if (ub0(A)) return G4.converters.Blob(A, { strict: !1 });
    if (ArrayBuffer.isView(A) || pb0.isArrayBuffer(A)) return G4.converters.BufferSource(A);
  }
  return G4.converters.USVString(A);
};
function CW6() {
  this.ws[hb0].socket.resume();
}
function XW6(A) {
  let B, Q;
  if (A instanceof FW6) ((B = A.reason), (Q = A.code));
  else B = A.message;
  (mb0('error', this, () => new WW6('error', { error: A, message: B })), db0(this, Q));
}
cb0.exports = { WebSocket: g5 };

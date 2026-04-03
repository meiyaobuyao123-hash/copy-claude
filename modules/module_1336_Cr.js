// Module: Cr
// Params: PK8,Zb0

var {
    kReadyState: Fr,
    kController: rZ6,
    kResponse: oZ6,
    kBinaryType: tZ6,
    kWebSocketURL: eZ6,
  } = Wr(),
  { states: Jr, opcodes: dL } = iS(),
  { ErrorEvent: AY6, createFastMessageEvent: BY6 } = zh(),
  { isUtf8: QY6 } = D1('node:buffer'),
  { collectASequenceOfCodePointsFast: IY6, removeHTTPWhitespace: tv0 } = $Y();
function GY6(A) {
  return A[Fr] === Jr.CONNECTING;
}
function DY6(A) {
  return A[Fr] === Jr.OPEN;
}
function ZY6(A) {
  return A[Fr] === Jr.CLOSING;
}
function YY6(A) {
  return A[Fr] === Jr.CLOSED;
}
function rd1(A, B, Q = (G, D) => new Event(G, D), I = {}) {
  let G = Q(A, I);
  B.dispatchEvent(G);
}
function WY6(A, B, Q) {
  if (A[Fr] !== Jr.OPEN) return;
  let I;
  if (B === dL.TEXT)
    try {
      I = Db0(Q);
    } catch {
      Ab0(A, 'Received invalid UTF-8 in text frame.');
      return;
    }
  else if (B === dL.BINARY)
    if (A[tZ6] === 'blob') I = new Blob([Q]);
    else I = FY6(Q);
  rd1('message', A, BY6, { origin: A[eZ6].origin, data: I });
}
function FY6(A) {
  if (A.byteLength === A.buffer.byteLength) return A.buffer;
  return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
}
function JY6(A) {
  if (A.length === 0) return !1;
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if (
      Q < 33 ||
      Q > 126 ||
      Q === 34 ||
      Q === 40 ||
      Q === 41 ||
      Q === 44 ||
      Q === 47 ||
      Q === 58 ||
      Q === 59 ||
      Q === 60 ||
      Q === 61 ||
      Q === 62 ||
      Q === 63 ||
      Q === 64 ||
      Q === 91 ||
      Q === 92 ||
      Q === 93 ||
      Q === 123 ||
      Q === 125
    )
      return !1;
  }
  return !0;
}
function CY6(A) {
  if (A >= 1000 && A < 1015) return A !== 1004 && A !== 1005 && A !== 1006;
  return A >= 3000 && A <= 4999;
}
function Ab0(A, B) {
  let { [rZ6]: Q, [oZ6]: I } = A;
  if ((Q.abort(), I?.socket && !I.socket.destroyed)) I.socket.destroy();
  if (B) rd1('error', A, (G, D) => new AY6(G, D), { error: new Error(B), message: B });
}
function Bb0(A) {
  return A === dL.CLOSE || A === dL.PING || A === dL.PONG;
}
function Qb0(A) {
  return A === dL.CONTINUATION;
}
function Ib0(A) {
  return A === dL.TEXT || A === dL.BINARY;
}
function XY6(A) {
  return Ib0(A) || Qb0(A) || Bb0(A);
}
function VY6(A) {
  let B = { position: 0 },
    Q = new Map();
  while (B.position < A.length) {
    let I = IY6(';', A, B),
      [G, D = ''] = I.split('=');
    (Q.set(tv0(G, !0, !1), tv0(D, !1, !0)), B.position++);
  }
  return Q;
}
function KY6(A) {
  for (let B = 0; B < A.length; B++) {
    let Q = A.charCodeAt(B);
    if (Q < 48 || Q > 57) return !1;
  }
  return !0;
}
var Gb0 = typeof process.versions.icu === 'string',
  ev0 = Gb0 ? new TextDecoder('utf-8', { fatal: !0 }) : void 0,
  Db0 = Gb0
    ? ev0.decode.bind(ev0)
    : function (A) {
        if (QY6(A)) return A.toString('utf-8');
        throw new TypeError('Invalid utf-8 received.');
      };
Zb0.exports = {
  isConnecting: GY6,
  isEstablished: DY6,
  isClosing: ZY6,
  isClosed: YY6,
  fireEvent: rd1,
  isValidSubprotocol: JY6,
  isValidStatusCode: CY6,
  failWebsocketConnection: Ab0,
  websocketMessageReceived: WY6,
  utf8Decode: Db0,
  isControlFrame: Bb0,
  isContinuationFrame: Qb0,
  isTextBinaryFrame: Ib0,
  isValidOpcode: XY6,
  parseExtensions: VY6,
  isValidClientWindowBits: KY6,
};

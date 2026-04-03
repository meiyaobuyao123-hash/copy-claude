// Module: ed1
// Params: _K8,Hb0

var { uid: wY6, states: Vr, sentCloseFrameState: vW1, emptyBuffer: EY6, opcodes: UY6 } = iS(),
  {
    kReadyState: Kr,
    kSentClose: bW1,
    kByteParser: Jb0,
    kReceivedClose: Fb0,
    kResponse: Cb0,
  } = Wr(),
  {
    fireEvent: NY6,
    failWebsocketConnection: uL,
    isClosing: $Y6,
    isClosed: qY6,
    isEstablished: MY6,
    parseExtensions: LY6,
  } = Cr(),
  { channels: Eh } = yg(),
  { CloseEvent: RY6 } = zh(),
  { makeRequest: OY6 } = Jh(),
  { fetching: TY6 } = Ir(),
  { Headers: PY6, getHeadersList: SY6 } = dS(),
  { getDecodeSplit: _Y6 } = GF(),
  { WebsocketFrameSend: jY6 } = fW1(),
  td1;
try {
  td1 = D1('node:crypto');
} catch {}
function yY6(A, B, Q, I, G, D) {
  let Z = A;
  Z.protocol = A.protocol === 'ws:' ? 'http:' : 'https:';
  let Y = OY6({
    urlList: [Z],
    client: Q,
    serviceWorkers: 'none',
    referrer: 'no-referrer',
    mode: 'websocket',
    credentials: 'include',
    cache: 'no-store',
    redirect: 'error',
  });
  if (D.headers) {
    let C = SY6(new PY6(D.headers));
    Y.headersList = C;
  }
  let W = td1.randomBytes(16).toString('base64');
  (Y.headersList.append('sec-websocket-key', W),
    Y.headersList.append('sec-websocket-version', '13'));
  for (let C of B) Y.headersList.append('sec-websocket-protocol', C);
  let F = 'permessage-deflate; client_max_window_bits';
  return (
    Y.headersList.append('sec-websocket-extensions', F),
    TY6({
      request: Y,
      useParallelQueue: !0,
      dispatcher: D.dispatcher,
      processResponse(C) {
        if (C.type === 'error' || C.status !== 101) {
          uL(I, 'Received network error or non-101 status code.');
          return;
        }
        if (B.length !== 0 && !C.headersList.get('Sec-WebSocket-Protocol')) {
          uL(I, 'Server did not respond with sent protocols.');
          return;
        }
        if (C.headersList.get('Upgrade')?.toLowerCase() !== 'websocket') {
          uL(I, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (C.headersList.get('Connection')?.toLowerCase() !== 'upgrade') {
          uL(I, 'Server did not set Connection header to "upgrade".');
          return;
        }
        let X = C.headersList.get('Sec-WebSocket-Accept'),
          V = td1
            .createHash('sha1')
            .update(W + wY6)
            .digest('base64');
        if (X !== V) {
          uL(I, 'Incorrect hash received in Sec-WebSocket-Accept header.');
          return;
        }
        let K = C.headersList.get('Sec-WebSocket-Extensions'),
          U;
        if (K !== null) {
          if (((U = LY6(K)), !U.has('permessage-deflate'))) {
            uL(I, 'Sec-WebSocket-Extensions header does not match.');
            return;
          }
        }
        let N = C.headersList.get('Sec-WebSocket-Protocol');
        if (N !== null) {
          if (!_Y6('sec-websocket-protocol', Y.headersList).includes(N)) {
            uL(I, 'Protocol was not set in the opening handshake.');
            return;
          }
        }
        if (
          (C.socket.on('data', Xb0),
          C.socket.on('close', Vb0),
          C.socket.on('error', Kb0),
          Eh.open.hasSubscribers)
        )
          Eh.open.publish({ address: C.socket.address(), protocol: N, extensions: K });
        G(C, U);
      },
    })
  );
}
function kY6(A, B, Q, I) {
  if ($Y6(A) || qY6(A));
  else if (!MY6(A))
    (uL(A, 'Connection was closed before it was established.'), (A[Kr] = Vr.CLOSING));
  else if (A[bW1] === vW1.NOT_SENT) {
    A[bW1] = vW1.PROCESSING;
    let G = new jY6();
    if (B !== void 0 && Q === void 0)
      ((G.frameData = Buffer.allocUnsafe(2)), G.frameData.writeUInt16BE(B, 0));
    else if (B !== void 0 && Q !== void 0)
      ((G.frameData = Buffer.allocUnsafe(2 + I)),
        G.frameData.writeUInt16BE(B, 0),
        G.frameData.write(Q, 2, 'utf-8'));
    else G.frameData = EY6;
    (A[Cb0].socket.write(G.createFrame(UY6.CLOSE)), (A[bW1] = vW1.SENT), (A[Kr] = Vr.CLOSING));
  } else A[Kr] = Vr.CLOSING;
}
function Xb0(A) {
  if (!this.ws[Jb0].write(A)) this.pause();
}
function Vb0() {
  let { ws: A } = this,
    { [Cb0]: B } = A;
  (B.socket.off('data', Xb0), B.socket.off('close', Vb0), B.socket.off('error', Kb0));
  let Q = A[bW1] === vW1.SENT && A[Fb0],
    I = 1005,
    G = '',
    D = A[Jb0].closingInfo;
  if (D && !D.error) ((I = D.code ?? 1005), (G = D.reason));
  else if (!A[Fb0]) I = 1006;
  if (
    ((A[Kr] = Vr.CLOSED),
    NY6('close', A, (Z, Y) => new RY6(Z, Y), { wasClean: Q, code: I, reason: G }),
    Eh.close.hasSubscribers)
  )
    Eh.close.publish({ websocket: A, code: I, reason: G });
}
function Kb0(A) {
  let { ws: B } = this;
  if (((B[Kr] = Vr.CLOSING), Eh.socketError.hasSubscribers)) Eh.socketError.publish(A);
  this.destroy();
}
Hb0.exports = { establishWebSocketConnection: yY6, closeWebSocketConnection: kY6 };

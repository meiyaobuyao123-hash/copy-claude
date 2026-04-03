// Module: iS
// Params: OK8,rv0

var pZ6 = { enumerable: !0, writable: !1, configurable: !1 },
  cZ6 = { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 },
  lZ6 = { NOT_SENT: 0, PROCESSING: 1, SENT: 2 },
  iZ6 = { CONTINUATION: 0, TEXT: 1, BINARY: 2, CLOSE: 8, PING: 9, PONG: 10 },
  nZ6 = { INFO: 0, PAYLOADLENGTH_16: 2, PAYLOADLENGTH_64: 3, READ_DATA: 4 },
  aZ6 = Buffer.allocUnsafe(0),
  sZ6 = { string: 1, typedArray: 2, arrayBuffer: 3, blob: 4 };
rv0.exports = {
  uid: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  sentCloseFrameState: lZ6,
  staticPropertyDescriptors: pZ6,
  states: cZ6,
  opcodes: iZ6,
  maxUnsigned16Bit: 65535,
  parserStates: nZ6,
  emptyBuffer: aZ6,
  sendHints: sZ6,
};

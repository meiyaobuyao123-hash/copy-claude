// Module: wU
// Params: ls5,m50

var g50 = ['nodebuffer', 'arraybuffer', 'fragments'],
  h50 = typeof Blob !== 'undefined';
if (h50) g50.push('blob');
m50.exports = {
  BINARY_TYPES: g50,
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  hasBlob: h50,
  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
  kListener: Symbol('kListener'),
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  NOOP: () => {},
};

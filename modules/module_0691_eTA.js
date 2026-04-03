// Module: eTA
// Params: zk5,tTA

var XL1 = QOA(),
  nf9 = D1('util'),
  FL1 = D1('path'),
  af9 = D1('http'),
  sf9 = D1('https'),
  rf9 = D1('url').parse,
  of9 = D1('fs'),
  tf9 = D1('stream').Stream,
  JL1 = JOA(),
  ef9 = TOA(),
  Av9 = sTA(),
  CL1 = oTA();
tTA.exports = c6;
nf9.inherits(c6, XL1);
function c6(A) {
  if (!(this instanceof c6)) return new c6(A);
  ((this._overheadLength = 0),
    (this._valueLength = 0),
    (this._valuesToMeasure = []),
    XL1.call(this),
    (A = A || {}));
  for (var B in A) this[B] = A[B];
}
c6.LINE_BREAK = `\r
`;
c6.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
c6.prototype.append = function (A, B, Q) {
  if (((Q = Q || {}), typeof Q == 'string')) Q = { filename: Q };
  var I = XL1.prototype.append.bind(this);
  if (typeof B == 'number') B = '' + B;
  if (Array.isArray(B)) {
    this._error(new Error('Arrays are not supported.'));
    return;
  }
  var G = this._multiPartHeader(A, B, Q),
    D = this._multiPartFooter();
  (I(G), I(B), I(D), this._trackLength(G, B, Q));
};
c6.prototype._trackLength = function (A, B, Q) {
  var I = 0;
  if (Q.knownLength != null) I += +Q.knownLength;
  else if (Buffer.isBuffer(B)) I = B.length;
  else if (typeof B === 'string') I = Buffer.byteLength(B);
  if (
    ((this._valueLength += I),
    (this._overheadLength += Buffer.byteLength(A) + c6.LINE_BREAK.length),
    !B ||
      (!B.path &&
        !(B.readable && Object.prototype.hasOwnProperty.call(B, 'httpVersion')) &&
        !(B instanceof tf9)))
  )
    return;
  if (!Q.knownLength) this._valuesToMeasure.push(B);
};
c6.prototype._lengthRetriever = function (A, B) {
  if (Object.prototype.hasOwnProperty.call(A, 'fd'))
    if (A.end != null && A.end != 1 / 0 && A.start != null)
      B(null, A.end + 1 - (A.start ? A.start : 0));
    else
      of9.stat(A.path, function (Q, I) {
        var G;
        if (Q) {
          B(Q);
          return;
        }
        ((G = I.size - (A.start ? A.start : 0)), B(null, G));
      });
  else if (Object.prototype.hasOwnProperty.call(A, 'httpVersion'))
    B(null, +A.headers['content-length']);
  else if (Object.prototype.hasOwnProperty.call(A, 'httpModule'))
    (A.on('response', function (Q) {
      (A.pause(), B(null, +Q.headers['content-length']));
    }),
      A.resume());
  else B('Unknown stream');
};
c6.prototype._multiPartHeader = function (A, B, Q) {
  if (typeof Q.header == 'string') return Q.header;
  var I = this._getContentDisposition(B, Q),
    G = this._getContentType(B, Q),
    D = '',
    Z = {
      'Content-Disposition': ['form-data', 'name="' + A + '"'].concat(I || []),
      'Content-Type': [].concat(G || []),
    };
  if (typeof Q.header == 'object') CL1(Z, Q.header);
  var Y;
  for (var W in Z)
    if (Object.prototype.hasOwnProperty.call(Z, W)) {
      if (((Y = Z[W]), Y == null)) continue;
      if (!Array.isArray(Y)) Y = [Y];
      if (Y.length) D += W + ': ' + Y.join('; ') + c6.LINE_BREAK;
    }
  return '--' + this.getBoundary() + c6.LINE_BREAK + D + c6.LINE_BREAK;
};
c6.prototype._getContentDisposition = function (A, B) {
  var Q, I;
  if (typeof B.filepath === 'string') Q = FL1.normalize(B.filepath).replace(/\\/g, '/');
  else if (B.filename || A.name || A.path) Q = FL1.basename(B.filename || A.name || A.path);
  else if (A.readable && Object.prototype.hasOwnProperty.call(A, 'httpVersion'))
    Q = FL1.basename(A.client._httpMessage.path || '');
  if (Q) I = 'filename="' + Q + '"';
  return I;
};
c6.prototype._getContentType = function (A, B) {
  var Q = B.contentType;
  if (!Q && A.name) Q = JL1.lookup(A.name);
  if (!Q && A.path) Q = JL1.lookup(A.path);
  if (!Q && A.readable && Object.prototype.hasOwnProperty.call(A, 'httpVersion'))
    Q = A.headers['content-type'];
  if (!Q && (B.filepath || B.filename)) Q = JL1.lookup(B.filepath || B.filename);
  if (!Q && typeof A == 'object') Q = c6.DEFAULT_CONTENT_TYPE;
  return Q;
};
c6.prototype._multiPartFooter = function () {
  return function (A) {
    var B = c6.LINE_BREAK,
      Q = this._streams.length === 0;
    if (Q) B += this._lastBoundary();
    A(B);
  }.bind(this);
};
c6.prototype._lastBoundary = function () {
  return '--' + this.getBoundary() + '--' + c6.LINE_BREAK;
};
c6.prototype.getHeaders = function (A) {
  var B,
    Q = { 'content-type': 'multipart/form-data; boundary=' + this.getBoundary() };
  for (B in A) if (Object.prototype.hasOwnProperty.call(A, B)) Q[B.toLowerCase()] = A[B];
  return Q;
};
c6.prototype.setBoundary = function (A) {
  this._boundary = A;
};
c6.prototype.getBoundary = function () {
  if (!this._boundary) this._generateBoundary();
  return this._boundary;
};
c6.prototype.getBuffer = function () {
  var A = new Buffer.alloc(0),
    B = this.getBoundary();
  for (var Q = 0, I = this._streams.length; Q < I; Q++)
    if (typeof this._streams[Q] !== 'function') {
      if (Buffer.isBuffer(this._streams[Q])) A = Buffer.concat([A, this._streams[Q]]);
      else A = Buffer.concat([A, Buffer.from(this._streams[Q])]);
      if (typeof this._streams[Q] !== 'string' || this._streams[Q].substring(2, B.length + 2) !== B)
        A = Buffer.concat([A, Buffer.from(c6.LINE_BREAK)]);
    }
  return Buffer.concat([A, Buffer.from(this._lastBoundary())]);
};
c6.prototype._generateBoundary = function () {
  var A = '--------------------------';
  for (var B = 0; B < 24; B++) A += Math.floor(Math.random() * 10).toString(16);
  this._boundary = A;
};
c6.prototype.getLengthSync = function () {
  var A = this._overheadLength + this._valueLength;
  if (this._streams.length) A += this._lastBoundary().length;
  if (!this.hasKnownLength())
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  return A;
};
c6.prototype.hasKnownLength = function () {
  var A = !0;
  if (this._valuesToMeasure.length) A = !1;
  return A;
};
c6.prototype.getLength = function (A) {
  var B = this._overheadLength + this._valueLength;
  if (this._streams.length) B += this._lastBoundary().length;
  if (!this._valuesToMeasure.length) {
    process.nextTick(A.bind(this, null, B));
    return;
  }
  ef9.parallel(this._valuesToMeasure, this._lengthRetriever, function (Q, I) {
    if (Q) {
      A(Q);
      return;
    }
    (I.forEach(function (G) {
      B += G;
    }),
      A(null, B));
  });
};
c6.prototype.submit = function (A, B) {
  var Q,
    I,
    G = { method: 'post' };
  if (typeof A == 'string')
    ((A = rf9(A)),
      (I = CL1({ port: A.port, path: A.pathname, host: A.hostname, protocol: A.protocol }, G)));
  else if (((I = CL1(A, G)), !I.port)) I.port = I.protocol == 'https:' ? 443 : 80;
  if (((I.headers = this.getHeaders(A.headers)), I.protocol == 'https:')) Q = sf9.request(I);
  else Q = af9.request(I);
  return (
    this.getLength(
      function (D, Z) {
        if (D && D !== 'Unknown stream') {
          this._error(D);
          return;
        }
        if (Z) Q.setHeader('Content-Length', Z);
        if ((this.pipe(Q), B)) {
          var Y,
            W = function (F, J) {
              return (
                Q.removeListener('error', W),
                Q.removeListener('response', Y),
                B.call(this, F, J)
              );
            };
          ((Y = W.bind(this, null)), Q.on('error', W), Q.on('response', Y));
        }
      }.bind(this)
    ),
    Q
  );
};
c6.prototype._error = function (A) {
  if (!this.error) ((this.error = A), this.pause(), this.emit('error', A));
};
c6.prototype.toString = function () {
  return '[object FormData]';
};
Av9(c6, 'FormData');

// Module: f52
// Params: JR8,x52

x52.exports = Qw;
var k52 = kJ1();
(Qw.prototype = Object.create(k52.prototype)).constructor = Qw;
var VR = Bw();
function Qw() {
  k52.call(this);
}
Qw._configure = function () {
  ((Qw.alloc = VR._Buffer_allocUnsafe),
    (Qw.writeBytesBuffer =
      VR.Buffer &&
      VR.Buffer.prototype instanceof Uint8Array &&
      VR.Buffer.prototype.set.name === 'set'
        ? function A(B, Q, I) {
            Q.set(B, I);
          }
        : function A(B, Q, I) {
            if (B.copy) B.copy(Q, I, 0, B.length);
            else for (var G = 0; G < B.length; ) Q[I++] = B[G++];
          }));
};
Qw.prototype.bytes = function A(B) {
  if (VR.isString(B)) B = VR._Buffer_from(B, 'base64');
  var Q = B.length >>> 0;
  if ((this.uint32(Q), Q)) this._push(Qw.writeBytesBuffer, Q, B);
  return this;
};
function Ag6(A, B, Q) {
  if (A.length < 40) VR.utf8.write(A, B, Q);
  else if (B.utf8Write) B.utf8Write(A, Q);
  else B.write(A, Q);
}
Qw.prototype.string = function A(B) {
  var Q = VR.Buffer.byteLength(B);
  if ((this.uint32(Q), Q)) this._push(Ag6, Q, B);
  return this;
};
Qw._configure();

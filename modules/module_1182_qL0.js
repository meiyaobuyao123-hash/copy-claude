// Module: qL0
// Params: AC8,$L0

var Mz = (A) => A !== null && typeof A === 'object' && typeof A.pipe === 'function';
Mz.writable = (A) =>
  Mz(A) &&
  A.writable !== !1 &&
  typeof A._write === 'function' &&
  typeof A._writableState === 'object';
Mz.readable = (A) =>
  Mz(A) &&
  A.readable !== !1 &&
  typeof A._read === 'function' &&
  typeof A._readableState === 'object';
Mz.duplex = (A) => Mz.writable(A) && Mz.readable(A);
Mz.transform = (A) => Mz.duplex(A) && typeof A._transform === 'function';
$L0.exports = Mz;

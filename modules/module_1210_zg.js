// Module: zg
// Params: Mg1,BO0

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var lZ1 =
    D1('buffer'),
  Oz = lZ1.Buffer;
function AO0(A, B) {
  for (var Q in A) B[Q] = A[Q];
}
if (Oz.from && Oz.alloc && Oz.allocUnsafe && Oz.allocUnsafeSlow) BO0.exports = lZ1;
else (AO0(lZ1, Mg1), (Mg1.Buffer = LS));
function LS(A, B, Q) {
  return Oz(A, B, Q);
}
LS.prototype = Object.create(Oz.prototype);
AO0(Oz, LS);
LS.from = function (A, B, Q) {
  if (typeof A === 'number') throw new TypeError('Argument must not be a number');
  return Oz(A, B, Q);
};
LS.alloc = function (A, B, Q) {
  if (typeof A !== 'number') throw new TypeError('Argument must be a number');
  var I = Oz(A);
  if (B !== void 0)
    if (typeof Q === 'string') I.fill(B, Q);
    else I.fill(B);
  else I.fill(0);
  return I;
};
LS.allocUnsafe = function (A) {
  if (typeof A !== 'number') throw new TypeError('Argument must be a number');
  return Oz(A);
};
LS.allocUnsafeSlow = function (A) {
  if (typeof A !== 'number') throw new TypeError('Argument must be a number');
  return lZ1.SlowBuffer(A);
};

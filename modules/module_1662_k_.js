// Module: k_
// Params: L72

var go = L72,
  Tc6 = VI(),
  Pc6 = [
    'double',
    'float',
    'int32',
    'uint32',
    'sint32',
    'fixed32',
    'sfixed32',
    'int64',
    'uint64',
    'sint64',
    'fixed64',
    'sfixed64',
    'bool',
    'string',
    'bytes',
  ];
function ho(A, B) {
  var Q = 0,
    I = {};
  B |= 0;
  while (Q < A.length) I[Pc6[Q + B]] = A[Q++];
  return I;
}
go.basic = ho([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
go.defaults = ho([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, '', Tc6.emptyArray, null]);
go.long = ho([0, 0, 0, 1, 1], 7);
go.mapKey = ho([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
go.packed = ho([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);

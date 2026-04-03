// Module: WI2
// Params: FT8,YI2

var a6 = (YI2.exports = xl1());
a6.build = 'light';
function Il6(A, B, Q) {
  if (typeof B === 'function') ((Q = B), (B = new a6.Root()));
  else if (!B) B = new a6.Root();
  return B.load(A, Q);
}
a6.load = Il6;
function Gl6(A, B) {
  if (!B) B = new a6.Root();
  return B.loadSync(A);
}
a6.loadSync = Gl6;
a6.encoder = ei1();
a6.decoder = ui1();
a6.verifier = li1();
a6.converter = ai1();
a6.ReflectionObject = x_();
a6.Namespace = $m();
a6.Root = LC1();
a6.Enum = lV();
a6.Type = $C1();
a6.Field = NR();
a6.OneOf = Em();
a6.MapField = HC1();
a6.Service = wC1();
a6.Method = zC1();
a6.Message = EC1();
a6.wrappers = si1();
a6.types = k_();
a6.util = VI();
a6.ReflectionObject._configure(a6.Root);
a6.Namespace._configure(a6.Type, a6.Service, a6.Enum);
a6.Root._configure(a6.Type);
a6.Field._configure(a6.Type);

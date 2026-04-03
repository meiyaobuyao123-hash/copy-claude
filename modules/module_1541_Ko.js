// Module: Ko
// Params: x92

Object.defineProperty(x92, '__esModule', { value: !0 });
x92.isValidName =
  x92.isDescriptorCompatibleWith =
  x92.createInstrumentDescriptorWithView =
  x92.createInstrumentDescriptor =
    void 0;
var y92 = C4(),
  vf6 = hV();
function bf6(A, B, Q) {
  if (!k92(A))
    y92.diag.warn(
      `Invalid metric name: "${A}". The metric name should be a ASCII string with a length no greater than 255 characters.`
    );
  return {
    name: A,
    type: B,
    description: Q?.description ?? '',
    unit: Q?.unit ?? '',
    valueType: Q?.valueType ?? y92.ValueType.DOUBLE,
    advice: Q?.advice ?? {},
  };
}
x92.createInstrumentDescriptor = bf6;
function gf6(A, B) {
  return {
    name: A.name ?? B.name,
    description: A.description ?? B.description,
    type: B.type,
    unit: B.unit,
    valueType: B.valueType,
    advice: B.advice,
  };
}
x92.createInstrumentDescriptorWithView = gf6;
function hf6(A, B) {
  return (
    vf6.equalsCaseInsensitive(A.name, B.name) &&
    A.unit === B.unit &&
    A.type === B.type &&
    A.valueType === B.valueType
  );
}
x92.isDescriptorCompatibleWith = hf6;
var mf6 = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
function k92(A) {
  return A.match(mf6) != null;
}
x92.isValidName = k92;

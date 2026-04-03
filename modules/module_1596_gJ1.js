// Module: gJ1
// Params: J82

Object.defineProperty(J82, '__esModule', { value: !0 });
J82.toAnyValue =
  J82.toKeyValue =
  J82.toAttributes =
  J82.createInstrumentationScope =
  J82.createResource =
    void 0;
function Xg6(A) {
  return { attributes: F82(A.attributes), droppedAttributesCount: 0 };
}
J82.createResource = Xg6;
function Vg6(A) {
  return { name: A.name, version: A.version };
}
J82.createInstrumentationScope = Vg6;
function F82(A) {
  return Object.keys(A).map((B) => gl1(B, A[B]));
}
J82.toAttributes = F82;
function gl1(A, B) {
  return { key: A, value: hl1(B) };
}
J82.toKeyValue = gl1;
function hl1(A) {
  let B = typeof A;
  if (B === 'string') return { stringValue: A };
  if (B === 'number') {
    if (!Number.isInteger(A)) return { doubleValue: A };
    return { intValue: A };
  }
  if (B === 'boolean') return { boolValue: A };
  if (A instanceof Uint8Array) return { bytesValue: A };
  if (Array.isArray(A)) return { arrayValue: { values: A.map(hl1) } };
  if (B === 'object' && A != null)
    return { kvlistValue: { values: Object.entries(A).map(([Q, I]) => gl1(Q, I)) } };
  return {};
}
J82.toAnyValue = hl1;

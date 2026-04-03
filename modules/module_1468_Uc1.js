// Module: Uc1
// Params: ki0

Object.defineProperty(ki0, '__esModule', { value: !0 });
ki0.parseKeyPairsIntoRecord =
  ki0.parsePairKeyValue =
  ki0.getKeyPairs =
  ki0.serializeKeyPairs =
    void 0;
var $$6 = C4(),
  C_ = Ec1();
function q$6(A) {
  return A.reduce((B, Q) => {
    let I = `${B}${B !== '' ? C_.BAGGAGE_ITEMS_SEPARATOR : ''}${Q}`;
    return I.length > C_.BAGGAGE_MAX_TOTAL_LENGTH ? B : I;
  }, '');
}
ki0.serializeKeyPairs = q$6;
function M$6(A) {
  return A.getAllEntries().map(([B, Q]) => {
    let I = `${encodeURIComponent(B)}=${encodeURIComponent(Q.value)}`;
    if (Q.metadata !== void 0) I += C_.BAGGAGE_PROPERTIES_SEPARATOR + Q.metadata.toString();
    return I;
  });
}
ki0.getKeyPairs = M$6;
function yi0(A) {
  let B = A.split(C_.BAGGAGE_PROPERTIES_SEPARATOR);
  if (B.length <= 0) return;
  let Q = B.shift();
  if (!Q) return;
  let I = Q.indexOf(C_.BAGGAGE_KEY_PAIR_SEPARATOR);
  if (I <= 0) return;
  let G = decodeURIComponent(Q.substring(0, I).trim()),
    D = decodeURIComponent(Q.substring(I + 1).trim()),
    Z;
  if (B.length > 0) Z = $$6.baggageEntryMetadataFromString(B.join(C_.BAGGAGE_PROPERTIES_SEPARATOR));
  return { key: G, value: D, metadata: Z };
}
ki0.parsePairKeyValue = yi0;
function L$6(A) {
  if (typeof A !== 'string' || A.length === 0) return {};
  return A.split(C_.BAGGAGE_ITEMS_SEPARATOR)
    .map((B) => {
      return yi0(B);
    })
    .filter((B) => B !== void 0 && B.value.length > 0)
    .reduce((B, Q) => {
      return ((B[Q.key] = Q.value), B);
    }, {});
}
ki0.parseKeyPairsIntoRecord = L$6;

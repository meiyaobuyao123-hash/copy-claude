// Module: Up1
// Params: Ep0

Object.defineProperty(Ep0, '__esModule', { value: !0 });
Ep0.baggageEntryMetadataFromString = Ep0.createBaggage = void 0;
var KE6 = J_(),
  HE6 = Kp0(),
  zE6 = wp0(),
  wE6 = KE6.DiagAPI.instance();
function EE6(A = {}) {
  return new HE6.BaggageImpl(new Map(Object.entries(A)));
}
Ep0.createBaggage = EE6;
function UE6(A) {
  if (typeof A !== 'string')
    (wE6.error(`Cannot create baggage metadata from unknown type: ${typeof A}`), (A = ''));
  return {
    __TYPE__: zE6.baggageEntryMetadataSymbol,
    toString() {
      return A;
    },
  };
}
Ep0.baggageEntryMetadataFromString = UE6;

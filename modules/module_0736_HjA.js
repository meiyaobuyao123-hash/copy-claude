// Module: HjA
// Params: VjA

Object.defineProperty(VjA, '__esModule', { value: !0 });
VjA.UPDATE_DETAIL_ERROR_MESSAGES = VjA.createUpdateDetails = void 0;
var Gm9 = (A, B, Q, I, G, D) => {
  return { duration: Q, source: B, success: A, error: I, sourceUrl: G, warnings: D };
};
VjA.createUpdateDetails = Gm9;
VjA.UPDATE_DETAIL_ERROR_MESSAGES = {
  NO_NETWORK_DATA:
    'No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.',
};

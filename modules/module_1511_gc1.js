// Module: gc1
// Params: r02

Object.defineProperty(r02, '__esModule', { value: !0 });
r02.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = r02.DEFAULT_AGGREGATION_SELECTOR = void 0;
var Lx6 = tF1(),
  Rx6 = Jo(),
  Ox6 = (A) => {
    return { type: Rx6.AggregationType.DEFAULT };
  };
r02.DEFAULT_AGGREGATION_SELECTOR = Ox6;
var Tx6 = (A) => Lx6.AggregationTemporality.CUMULATIVE;
r02.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = Tx6;

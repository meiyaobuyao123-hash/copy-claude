// Module: Sp1
// Params: Op0

Object.defineProperty(Op0, '__esModule', { value: !0 });
Op0.createNoopMeter =
  Op0.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
  Op0.NOOP_OBSERVABLE_GAUGE_METRIC =
  Op0.NOOP_OBSERVABLE_COUNTER_METRIC =
  Op0.NOOP_UP_DOWN_COUNTER_METRIC =
  Op0.NOOP_HISTOGRAM_METRIC =
  Op0.NOOP_GAUGE_METRIC =
  Op0.NOOP_COUNTER_METRIC =
  Op0.NOOP_METER =
  Op0.NoopObservableUpDownCounterMetric =
  Op0.NoopObservableGaugeMetric =
  Op0.NoopObservableCounterMetric =
  Op0.NoopObservableMetric =
  Op0.NoopHistogramMetric =
  Op0.NoopGaugeMetric =
  Op0.NoopUpDownCounterMetric =
  Op0.NoopCounterMetric =
  Op0.NoopMetric =
  Op0.NoopMeter =
    void 0;
class $p1 {
  constructor() {}
  createGauge(A, B) {
    return Op0.NOOP_GAUGE_METRIC;
  }
  createHistogram(A, B) {
    return Op0.NOOP_HISTOGRAM_METRIC;
  }
  createCounter(A, B) {
    return Op0.NOOP_COUNTER_METRIC;
  }
  createUpDownCounter(A, B) {
    return Op0.NOOP_UP_DOWN_COUNTER_METRIC;
  }
  createObservableGauge(A, B) {
    return Op0.NOOP_OBSERVABLE_GAUGE_METRIC;
  }
  createObservableCounter(A, B) {
    return Op0.NOOP_OBSERVABLE_COUNTER_METRIC;
  }
  createObservableUpDownCounter(A, B) {
    return Op0.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
  }
  addBatchObservableCallback(A, B) {}
  removeBatchObservableCallback(A) {}
}
Op0.NoopMeter = $p1;
class ah {}
Op0.NoopMetric = ah;
class qp1 extends ah {
  add(A, B) {}
}
Op0.NoopCounterMetric = qp1;
class Mp1 extends ah {
  add(A, B) {}
}
Op0.NoopUpDownCounterMetric = Mp1;
class Lp1 extends ah {
  record(A, B) {}
}
Op0.NoopGaugeMetric = Lp1;
class Rp1 extends ah {
  record(A, B) {}
}
Op0.NoopHistogramMetric = Rp1;
class tr {
  addCallback(A) {}
  removeCallback(A) {}
}
Op0.NoopObservableMetric = tr;
class Op1 extends tr {}
Op0.NoopObservableCounterMetric = Op1;
class Tp1 extends tr {}
Op0.NoopObservableGaugeMetric = Tp1;
class Pp1 extends tr {}
Op0.NoopObservableUpDownCounterMetric = Pp1;
Op0.NOOP_METER = new $p1();
Op0.NOOP_COUNTER_METRIC = new qp1();
Op0.NOOP_GAUGE_METRIC = new Lp1();
Op0.NOOP_HISTOGRAM_METRIC = new Rp1();
Op0.NOOP_UP_DOWN_COUNTER_METRIC = new Mp1();
Op0.NOOP_OBSERVABLE_COUNTER_METRIC = new Op1();
Op0.NOOP_OBSERVABLE_GAUGE_METRIC = new Tp1();
Op0.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new Pp1();
function ME6() {
  return Op0.NOOP_METER;
}
Op0.createNoopMeter = ME6;

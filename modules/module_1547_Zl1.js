// Module: Zl1
// Params: G42

Object.defineProperty(G42, '__esModule', { value: !0 });
G42.TemporalMetricProcessor = void 0;
var Dv6 = tF1(),
  Zv6 = Ho();
class zo {
  _aggregator;
  _unreportedAccumulations = new Map();
  _reportHistory = new Map();
  constructor(A, B) {
    ((this._aggregator = A),
      B.forEach((Q) => {
        this._unreportedAccumulations.set(Q, []);
      }));
  }
  buildMetrics(A, B, Q, I) {
    this._stashAccumulations(Q);
    let G = this._getMergedUnreportedAccumulations(A),
      D = G,
      Z;
    if (this._reportHistory.has(A)) {
      let W = this._reportHistory.get(A),
        F = W.collectionTime;
      if (((Z = W.aggregationTemporality), Z === Dv6.AggregationTemporality.CUMULATIVE))
        D = zo.merge(W.accumulations, G, this._aggregator);
      else D = zo.calibrateStartTime(W.accumulations, G, F);
    } else Z = A.selectAggregationTemporality(B.type);
    this._reportHistory.set(A, { accumulations: D, collectionTime: I, aggregationTemporality: Z });
    let Y = Yv6(D);
    if (Y.length === 0) return;
    return this._aggregator.toMetricData(B, Z, Y, I);
  }
  _stashAccumulations(A) {
    let B = this._unreportedAccumulations.keys();
    for (let Q of B) {
      let I = this._unreportedAccumulations.get(Q);
      if (I === void 0) ((I = []), this._unreportedAccumulations.set(Q, I));
      I.push(A);
    }
  }
  _getMergedUnreportedAccumulations(A) {
    let B = new Zv6.AttributeHashMap(),
      Q = this._unreportedAccumulations.get(A);
    if ((this._unreportedAccumulations.set(A, []), Q === void 0)) return B;
    for (let I of Q) B = zo.merge(B, I, this._aggregator);
    return B;
  }
  static merge(A, B, Q) {
    let I = A,
      G = B.entries(),
      D = G.next();
    while (D.done !== !0) {
      let [Z, Y, W] = D.value;
      if (A.has(Z, W)) {
        let F = A.get(Z, W),
          J = Q.merge(F, Y);
        I.set(Z, J, W);
      } else I.set(Z, Y, W);
      D = G.next();
    }
    return I;
  }
  static calibrateStartTime(A, B, Q) {
    for (let [I, G] of A.keys()) B.get(I, G)?.setStartTime(Q);
    return B;
  }
}
G42.TemporalMetricProcessor = zo;
function Yv6(A) {
  return Array.from(A.entries());
}

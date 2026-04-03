// Module: xa1
// Params: rY2

Object.defineProperty(rY2, '__esModule', { value: !0 });
rY2.PrometheusSerializer = void 0;
var Dt6 = C4(),
  p_ = O_(),
  nY2 = CD();
function XX1(A) {
  return A.replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
}
function aY2(A = '') {
  if (typeof A !== 'string') A = JSON.stringify(A);
  return XX1(A).replace(/"/g, '\\"');
}
var Zt6 = /[^a-z0-9_]/gi,
  Yt6 = /_{2,}/g;
function ka1(A) {
  return A.replace(Zt6, '_').replace(Yt6, '_');
}
function ya1(A, B) {
  if (!A.endsWith('_total') && B.dataPointType === p_.DataPointType.SUM && B.isMonotonic)
    A = A + '_total';
  return A;
}
function Wt6(A) {
  if (A === 1 / 0) return '+Inf';
  else if (A === -1 / 0) return '-Inf';
  else return `${A}`;
}
function Ft6(A) {
  switch (A.dataPointType) {
    case p_.DataPointType.SUM:
      if (A.isMonotonic) return 'counter';
      return 'gauge';
    case p_.DataPointType.GAUGE:
      return 'gauge';
    case p_.DataPointType.HISTOGRAM:
      return 'histogram';
    default:
      return 'untyped';
  }
}
function CX1(A, B, Q, I, G) {
  let D = !1,
    Z = '';
  for (let [Y, W] of Object.entries(B)) {
    let F = ka1(Y);
    ((D = !0), (Z += `${Z.length > 0 ? ',' : ''}${F}="${aY2(W)}"`));
  }
  if (G)
    for (let [Y, W] of Object.entries(G)) {
      let F = ka1(Y);
      ((D = !0), (Z += `${Z.length > 0 ? ',' : ''}${F}="${aY2(W)}"`));
    }
  if (D) A += `{${Z}}`;
  return `${A} ${Wt6(Q)}${I !== void 0 ? ' ' + String(I) : ''}
`;
}
var Jt6 = '# no registered metrics';
class sY2 {
  _prefix;
  _appendTimestamp;
  _additionalAttributes;
  _withResourceConstantLabels;
  constructor(A, B = !1, Q) {
    if (A) this._prefix = A + '_';
    ((this._appendTimestamp = B), (this._withResourceConstantLabels = Q));
  }
  serialize(A) {
    let B = '';
    this._additionalAttributes = this._filterResourceConstantLabels(
      A.resource.attributes,
      this._withResourceConstantLabels
    );
    for (let Q of A.scopeMetrics) B += this._serializeScopeMetrics(Q);
    if (B === '') B += Jt6;
    return this._serializeResource(A.resource) + B;
  }
  _filterResourceConstantLabels(A, B) {
    if (B) {
      let Q = {};
      for (let [I, G] of Object.entries(A)) if (I.match(B)) Q[I] = G;
      return Q;
    }
    return;
  }
  _serializeScopeMetrics(A) {
    let B = '';
    for (let Q of A.metrics)
      B +=
        this._serializeMetricData(Q) +
        `
`;
    return B;
  }
  _serializeMetricData(A) {
    let B = ka1(XX1(A.descriptor.name));
    if (this._prefix) B = `${this._prefix}${B}`;
    let Q = A.dataPointType;
    B = ya1(B, A);
    let I = `# HELP ${B} ${XX1(A.descriptor.description || 'description missing')}`,
      G = A.descriptor.unit
        ? `
# UNIT ${B} ${XX1(A.descriptor.unit)}`
        : '',
      D = `# TYPE ${B} ${Ft6(A)}`,
      Z = '';
    switch (Q) {
      case p_.DataPointType.SUM:
      case p_.DataPointType.GAUGE: {
        Z = A.dataPoints.map((Y) => this._serializeSingularDataPoint(B, A, Y)).join('');
        break;
      }
      case p_.DataPointType.HISTOGRAM: {
        Z = A.dataPoints.map((Y) => this._serializeHistogramDataPoint(B, A, Y)).join('');
        break;
      }
      default:
        Dt6.diag.error(`Unrecognizable DataPointType: ${Q} for metric "${B}"`);
    }
    return `${I}${G}
${D}
${Z}`.trim();
  }
  _serializeSingularDataPoint(A, B, Q) {
    let I = '';
    A = ya1(A, B);
    let { value: G, attributes: D } = Q,
      Z = nY2.hrTimeToMilliseconds(Q.endTime);
    return ((I += CX1(A, D, G, this._appendTimestamp ? Z : void 0, this._additionalAttributes)), I);
  }
  _serializeHistogramDataPoint(A, B, Q) {
    let I = '';
    A = ya1(A, B);
    let { attributes: G, value: D } = Q,
      Z = nY2.hrTimeToMilliseconds(Q.endTime);
    for (let J of ['count', 'sum']) {
      let C = D[J];
      if (C != null)
        I += CX1(A + '_' + J, G, C, this._appendTimestamp ? Z : void 0, this._additionalAttributes);
    }
    let Y = 0,
      W = D.buckets.counts.entries(),
      F = !1;
    for (let [J, C] of W) {
      Y += C;
      let X = D.buckets.boundaries[J];
      if (X === void 0 && F) break;
      if (X === 1 / 0) F = !0;
      I += CX1(
        A + '_bucket',
        G,
        Y,
        this._appendTimestamp ? Z : void 0,
        Object.assign({}, this._additionalAttributes ?? {}, {
          le: X === void 0 || X === 1 / 0 ? '+Inf' : String(X),
        })
      );
    }
    return I;
  }
  _serializeResource(A) {
    return `# HELP target_info Target metadata
# TYPE target_info gauge
${CX1('target_info', A.attributes, 1).trim()}
`;
  }
}
rY2.PrometheusSerializer = sY2;

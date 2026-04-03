// Module: ac1
// Params: L22

Object.defineProperty(L22, '__esModule', { value: !0 });
L22.defaultResource =
  L22.emptyResource =
  L22.resourceFromDetectedResource =
  L22.resourceFromAttributes =
    void 0;
var lc1 = C4(),
  ic1 = CD(),
  $_ = wN(),
  hx6 = cc1(),
  EJ1 = M22();
class Xo {
  _rawAttributes;
  _asyncAttributesPending = !1;
  _memoizedAttributes;
  static FromAttributeList(A) {
    let B = new Xo({});
    return (
      (B._rawAttributes = A),
      (B._asyncAttributesPending = A.filter(([Q, I]) => EJ1.isPromiseLike(I)).length > 0),
      B
    );
  }
  constructor(A) {
    let B = A.attributes ?? {};
    this._rawAttributes = Object.entries(B).map(([Q, I]) => {
      if (EJ1.isPromiseLike(I)) this._asyncAttributesPending = !0;
      return [Q, I];
    });
  }
  get asyncAttributesPending() {
    return this._asyncAttributesPending;
  }
  async waitForAsyncAttributes() {
    if (!this.asyncAttributesPending) return;
    for (let A = 0; A < this._rawAttributes.length; A++) {
      let [B, Q] = this._rawAttributes[A];
      try {
        this._rawAttributes[A] = [B, EJ1.isPromiseLike(Q) ? await Q : Q];
      } catch (I) {
        (lc1.diag.debug("a resource's async attributes promise rejected: %s", I),
          (this._rawAttributes[A] = [B, void 0]));
      }
    }
    this._asyncAttributesPending = !1;
  }
  get attributes() {
    if (this.asyncAttributesPending)
      lc1.diag.error('Accessing resource attributes before async attributes settled');
    if (this._memoizedAttributes) return this._memoizedAttributes;
    let A = {};
    for (let [B, Q] of this._rawAttributes) {
      if (EJ1.isPromiseLike(Q)) {
        lc1.diag.debug(`Unsettled resource attribute ${B} skipped`);
        continue;
      }
      if (Q != null) A[B] ??= Q;
    }
    if (!this._asyncAttributesPending) this._memoizedAttributes = A;
    return A;
  }
  getRawAttributes() {
    return this._rawAttributes;
  }
  merge(A) {
    if (A == null) return this;
    return Xo.FromAttributeList([...A.getRawAttributes(), ...this.getRawAttributes()]);
  }
}
function nc1(A) {
  return Xo.FromAttributeList(Object.entries(A));
}
L22.resourceFromAttributes = nc1;
function mx6(A) {
  return new Xo(A);
}
L22.resourceFromDetectedResource = mx6;
function dx6() {
  return nc1({});
}
L22.emptyResource = dx6;
function ux6() {
  return nc1({
    [$_.ATTR_SERVICE_NAME]: hx6.defaultServiceName(),
    [$_.ATTR_TELEMETRY_SDK_LANGUAGE]: ic1.SDK_INFO[$_.ATTR_TELEMETRY_SDK_LANGUAGE],
    [$_.ATTR_TELEMETRY_SDK_NAME]: ic1.SDK_INFO[$_.ATTR_TELEMETRY_SDK_NAME],
    [$_.ATTR_TELEMETRY_SDK_VERSION]: ic1.SDK_INFO[$_.ATTR_TELEMETRY_SDK_VERSION],
  });
}
L22.defaultResource = ux6;

// Module: Sg1
// Params: UO0

Object.defineProperty(UO0, '__esModule', { value: !0 });
UO0.LoginTicket = void 0;
class EO0 {
  constructor(A, B) {
    ((this.envelope = A), (this.payload = B));
  }
  getEnvelope() {
    return this.envelope;
  }
  getPayload() {
    return this.payload;
  }
  getUserId() {
    let A = this.getPayload();
    if (A && A.sub) return A.sub;
    return null;
  }
  getAttributes() {
    return { envelope: this.getEnvelope(), payload: this.getPayload() };
  }
}
UO0.LoginTicket = EO0;

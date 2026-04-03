// Module: kg1
// Params: SO0

Object.defineProperty(SO0, '__esModule', { value: !0 });
SO0.IdTokenClient = void 0;
var S06 = RS();
class PO0 extends S06.OAuth2Client {
  constructor(A) {
    super(A);
    ((this.targetAudience = A.targetAudience), (this.idTokenProvider = A.idTokenProvider));
  }
  async getRequestMetadataAsync(A) {
    if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
      let Q = await this.idTokenProvider.fetchIdToken(this.targetAudience);
      this.credentials = { id_token: Q, expiry_date: this.getIdTokenExpiryDate(Q) };
    }
    return { headers: { Authorization: 'Bearer ' + this.credentials.id_token } };
  }
  getIdTokenExpiryDate(A) {
    let B = A.split('.')[1];
    if (B) return JSON.parse(Buffer.from(B, 'base64').toString('ascii')).exp * 1000;
  }
}
SO0.IdTokenClient = PO0;

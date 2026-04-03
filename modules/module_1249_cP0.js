// Module: cP0
// Params: uP0

Object.defineProperty(uP0, '__esModule', { value: !0 });
uP0.PassThroughClient = void 0;
var Q46 = Tz();
class kh1 extends Q46.AuthClient {
  async request(A) {
    return this.transporter.request(A);
  }
  async getAccessToken() {
    return {};
  }
  async getRequestHeaders() {
    return {};
  }
}
uP0.PassThroughClient = kh1;
var I46 = new kh1();
I46.getAccessToken();

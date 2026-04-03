// Module: ZR1
// Params: PSA

Object.defineProperty(PSA, '__esModule', { value: !0 });
PSA.UrlConfiguration = void 0;
var U61 = Bl(),
  Xg9 = {
    [U61.Endpoint._initialize]: 'i',
    [U61.Endpoint._rgstr]: 'e',
    [U61.Endpoint._download_config_specs]: 'd',
  };
class TSA {
  constructor(A, B, Q, I) {
    if (
      ((this.customUrl = null),
      (this.fallbackUrls = null),
      (this.endpoint = A),
      (this.endpointDnsKey = Xg9[A]),
      B)
    )
      this.customUrl = B;
    if (!B && Q) this.customUrl = Q.endsWith('/') ? `${Q}${A}` : `${Q}/${A}`;
    if (I) this.fallbackUrls = I;
    let G = U61.NetworkDefault[A];
    this.defaultUrl = `${G}/${A}`;
  }
  getUrl() {
    var A;
    return (A = this.customUrl) !== null && A !== void 0 ? A : this.defaultUrl;
  }
}
PSA.UrlConfiguration = TSA;

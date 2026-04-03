// Module: lZ2
// Params: cZ2

Object.defineProperty(cZ2, '__esModule', { value: !0 });
cZ2.setup = wr6;
var mZ2 = D1('net'),
  GX1 = O6(),
  Xa1 = XD(),
  dZ2 = Iw(),
  uZ2 = xY(),
  Kr6 = r8(),
  Hr6 = 'ip_resolver';
function pZ2(A) {
  Kr6.trace(GX1.LogVerbosity.DEBUG, Hr6, A);
}
var Va1 = 'ipv4',
  Ka1 = 'ipv6',
  zr6 = 443;
class Ha1 {
  constructor(A, B, Q) {
    var I;
    ((this.listener = B),
      (this.endpoints = []),
      (this.error = null),
      (this.hasReturnedResult = !1),
      pZ2('Resolver constructed for target ' + uZ2.uriToString(A)));
    let G = [];
    if (!(A.scheme === Va1 || A.scheme === Ka1)) {
      this.error = {
        code: GX1.Status.UNAVAILABLE,
        details: `Unrecognized scheme ${A.scheme} in IP resolver`,
        metadata: new Xa1.Metadata(),
      };
      return;
    }
    let D = A.path.split(',');
    for (let Z of D) {
      let Y = uZ2.splitHostPort(Z);
      if (Y === null) {
        this.error = {
          code: GX1.Status.UNAVAILABLE,
          details: `Failed to parse ${A.scheme} address ${Z}`,
          metadata: new Xa1.Metadata(),
        };
        return;
      }
      if ((A.scheme === Va1 && !mZ2.isIPv4(Y.host)) || (A.scheme === Ka1 && !mZ2.isIPv6(Y.host))) {
        this.error = {
          code: GX1.Status.UNAVAILABLE,
          details: `Failed to parse ${A.scheme} address ${Z}`,
          metadata: new Xa1.Metadata(),
        };
        return;
      }
      G.push({ host: Y.host, port: (I = Y.port) !== null && I !== void 0 ? I : zr6 });
    }
    ((this.endpoints = G.map((Z) => ({ addresses: [Z] }))),
      pZ2('Parsed ' + A.scheme + ' address list ' + G));
  }
  updateResolution() {
    if (!this.hasReturnedResult)
      ((this.hasReturnedResult = !0),
        process.nextTick(() => {
          if (this.error) this.listener.onError(this.error);
          else this.listener.onSuccessfulResolution(this.endpoints, null, null, null, {});
        }));
  }
  destroy() {
    this.hasReturnedResult = !1;
  }
  static getDefaultAuthority(A) {
    return A.path.split(',')[0];
  }
}
function wr6() {
  (dZ2.registerResolver(Va1, Ha1), dZ2.registerResolver(Ka1, Ha1));
}

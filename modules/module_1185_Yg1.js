// Module: Yg1
// Params: rJ

var J16 =
    (rJ && rJ.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    },
  TL0;
Object.defineProperty(rJ, '__esModule', { value: !0 });
rJ.GaxiosError = rJ.GAXIOS_ERROR_SYMBOL = void 0;
rJ.defaultErrorRedactor = SL0;
var C16 = D1('url'),
  Dg1 = OL0(),
  PL0 = J16(lb1());
rJ.GAXIOS_ERROR_SYMBOL = Symbol.for(`${Dg1.pkg.name}-gaxios-error`);
class Zg1 extends Error {
  static [((TL0 = rJ.GAXIOS_ERROR_SYMBOL), Symbol.hasInstance)](A) {
    if (
      A &&
      typeof A === 'object' &&
      rJ.GAXIOS_ERROR_SYMBOL in A &&
      A[rJ.GAXIOS_ERROR_SYMBOL] === Dg1.pkg.version
    )
      return !0;
    return Function.prototype[Symbol.hasInstance].call(Zg1, A);
  }
  constructor(A, B, Q, I) {
    var G;
    super(A);
    if (
      ((this.config = B),
      (this.response = Q),
      (this.error = I),
      (this[TL0] = Dg1.pkg.version),
      (this.config = PL0.default(!0, {}, B)),
      this.response)
    )
      this.response.config = PL0.default(!0, {}, this.response.config);
    if (this.response) {
      try {
        this.response.data = X16(
          this.config.responseType,
          (G = this.response) === null || G === void 0 ? void 0 : G.data
        );
      } catch (D) {}
      this.status = this.response.status;
    }
    if (I && 'code' in I && I.code) this.code = I.code;
    if (B.errorRedactor) B.errorRedactor({ config: this.config, response: this.response });
  }
}
rJ.GaxiosError = Zg1;
function X16(A, B) {
  switch (A) {
    case 'stream':
      return B;
    case 'json':
      return JSON.parse(JSON.stringify(B));
    case 'arraybuffer':
      return JSON.parse(Buffer.from(B).toString('utf8'));
    case 'blob':
      return JSON.parse(B.text());
    default:
      return B;
  }
}
function SL0(A) {
  function Q(D) {
    if (!D) return;
    for (let Z of Object.keys(D)) {
      if (/^authentication$/i.test(Z))
        D[Z] = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
      if (/^authorization$/i.test(Z))
        D[Z] = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
      if (/secret/i.test(Z))
        D[Z] = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
    }
  }
  function I(D, Z) {
    if (typeof D === 'object' && D !== null && typeof D[Z] === 'string') {
      let Y = D[Z];
      if (/grant_type=/i.test(Y) || /assertion=/i.test(Y) || /secret/i.test(Y))
        D[Z] = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
    }
  }
  function G(D) {
    if (typeof D === 'object' && D !== null) {
      if ('grant_type' in D)
        D.grant_type = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
      if ('assertion' in D)
        D.assertion = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
      if ('client_secret' in D)
        D.client_secret =
          '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
    }
  }
  if (A.config) {
    (Q(A.config.headers),
      I(A.config, 'data'),
      G(A.config.data),
      I(A.config, 'body'),
      G(A.config.body));
    try {
      let D = new C16.URL('', A.config.url);
      if (D.searchParams.has('token'))
        D.searchParams.set(
          'token',
          '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.'
        );
      if (D.searchParams.has('client_secret'))
        D.searchParams.set(
          'client_secret',
          '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.'
        );
      A.config.url = D.toString();
    } catch (D) {}
  }
  if (A.response)
    (SL0({ config: A.response.config }),
      Q(A.response.headers),
      I(A.response, 'data'),
      G(A.response.data));
  return A;
}

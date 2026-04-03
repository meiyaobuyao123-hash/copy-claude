// Module: TR1
// Params: Zl

var LjA =
  (Zl && Zl.__awaiter) ||
  function (A, B, Q, I) {
    function G(D) {
      return D instanceof Q
        ? D
        : new Q(function (Z) {
            Z(D);
          });
    }
    return new (Q || (Q = Promise))(function (D, Z) {
      function Y(J) {
        try {
          F(I.next(J));
        } catch (C) {
          Z(C);
        }
      }
      function W(J) {
        try {
          F(I.throw(J));
        } catch (C) {
          Z(C);
        }
      }
      function F(J) {
        J.done ? D(J.value) : G(J.value).then(Y, W);
      }
      F((I = I.apply(A, B || [])).next());
    });
  };
Object.defineProperty(Zl, '__esModule', { value: !0 });
var f61 = cq(),
  zm9 = MjA();
class RjA extends f61.NetworkCore {
  constructor(A, B) {
    super(A, B);
    let Q = A === null || A === void 0 ? void 0 : A.networkConfig;
    this._initializeUrlConfig = new f61.UrlConfiguration(
      f61.Endpoint._initialize,
      Q === null || Q === void 0 ? void 0 : Q.initializeUrl,
      Q === null || Q === void 0 ? void 0 : Q.api,
      Q === null || Q === void 0 ? void 0 : Q.initializeFallbackUrls
    );
  }
  fetchEvaluations(A, B, Q, I, G) {
    return LjA(this, void 0, void 0, function* () {
      let D = B ? f61._typedJsonParse(B, 'has_updates', 'InitializeResponse') : null,
        Z = { user: I, hash: 'djb2', deltasResponseRequested: !1, full_checksum: null };
      if (D === null || D === void 0 ? void 0 : D.has_updates)
        Z = Object.assign(Object.assign({}, Z), {
          sinceTime: G ? D.time : 0,
          previousDerivedFields: 'derived_fields' in D && G ? D.derived_fields : {},
          deltasResponseRequested: !0,
          full_checksum: D.full_checksum,
        });
      return this._fetchEvaluations(A, D, Z, Q);
    });
  }
  _fetchEvaluations(A, B, Q, I) {
    var G, D;
    return LjA(this, void 0, void 0, function* () {
      let Z = yield this.post({
        sdkKey: A,
        urlConfig: this._initializeUrlConfig,
        data: Q,
        retries: 2,
        isStatsigEncodable: !0,
        priority: I,
      });
      if ((Z === null || Z === void 0 ? void 0 : Z.code) === 204) return '{"has_updates": false}';
      if ((Z === null || Z === void 0 ? void 0 : Z.code) !== 200)
        return (G = Z === null || Z === void 0 ? void 0 : Z.body) !== null && G !== void 0
          ? G
          : null;
      if (
        (B === null || B === void 0 ? void 0 : B.has_updates) !== !0 ||
        ((D = Z.body) === null || D === void 0 ? void 0 : D.includes('"is_delta":true')) !== !0 ||
        Q.deltasResponseRequested !== !0
      )
        return Z.body;
      let Y = zm9._resolveDeltasResponse(B, Z.body);
      if (typeof Y === 'string') return Y;
      return this._fetchEvaluations(
        A,
        B,
        Object.assign(Object.assign(Object.assign({}, Q), Y), { deltasResponseRequested: !1 }),
        I
      );
    });
  }
}
Zl.default = RjA;

// Module: XV1
// Params: bC2,gC2

(function () {
  var A, B, Q, I, G, D, Z, Y, W;
  (({ isObject: W } = $w()),
    (Y = EF()),
    (A = LQ()),
    (B = WV1()),
    (I = FV1()),
    (Q = JV1()),
    (G = CV1()),
    (Z = IV1()),
    (gC2.exports = D =
      function () {
        class F extends Y {
          constructor(J, C, X) {
            var V, K, U, N;
            super(J);
            if (((this.type = A.DocType), J.children)) {
              N = J.children;
              for (K = 0, U = N.length; K < U; K++)
                if (((V = N[K]), V.type === A.Element)) {
                  this.name = V.name;
                  break;
                }
            }
            if (((this.documentObject = J), W(C))) ({ pubID: C, sysID: X } = C);
            if (X == null) [X, C] = [C, X];
            if (C != null) this.pubID = this.stringify.dtdPubID(C);
            if (X != null) this.sysID = this.stringify.dtdSysID(X);
          }
          element(J, C) {
            var X = new Q(this, J, C);
            return (this.children.push(X), this);
          }
          attList(J, C, X, V, K) {
            var U = new B(this, J, C, X, V, K);
            return (this.children.push(U), this);
          }
          entity(J, C) {
            var X = new I(this, !1, J, C);
            return (this.children.push(X), this);
          }
          pEntity(J, C) {
            var X = new I(this, !0, J, C);
            return (this.children.push(X), this);
          }
          notation(J, C) {
            var X = new G(this, J, C);
            return (this.children.push(X), this);
          }
          toString(J) {
            return this.options.writer.docType(this, this.options.writer.filterOptions(J));
          }
          ele(J, C) {
            return this.element(J, C);
          }
          att(J, C, X, V, K) {
            return this.attList(J, C, X, V, K);
          }
          ent(J, C) {
            return this.entity(J, C);
          }
          pent(J, C) {
            return this.pEntity(J, C);
          }
          not(J, C) {
            return this.notation(J, C);
          }
          up() {
            return this.root() || this.documentObject;
          }
          isEqualNode(J) {
            if (!super.isEqualNode(J)) return !1;
            if (J.name !== this.name) return !1;
            if (J.publicId !== this.publicId) return !1;
            if (J.systemId !== this.systemId) return !1;
            return !0;
          }
        }
        return (
          Object.defineProperty(F.prototype, 'entities', {
            get: function () {
              var J, C, X, V, K;
              ((V = {}), (K = this.children));
              for (C = 0, X = K.length; C < X; C++)
                if (((J = K[C]), J.type === A.EntityDeclaration && !J.pe)) V[J.name] = J;
              return new Z(V);
            },
          }),
          Object.defineProperty(F.prototype, 'notations', {
            get: function () {
              var J, C, X, V, K;
              ((V = {}), (K = this.children));
              for (C = 0, X = K.length; C < X; C++)
                if (((J = K[C]), J.type === A.NotationDeclaration)) V[J.name] = J;
              return new Z(V);
            },
          }),
          Object.defineProperty(F.prototype, 'publicId', {
            get: function () {
              return this.pubID;
            },
          }),
          Object.defineProperty(F.prototype, 'systemId', {
            get: function () {
              return this.sysID;
            },
          }),
          Object.defineProperty(F.prototype, 'internalSubset', {
            get: function () {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          F
        );
      }.call(this)));
}).call(bC2);

// Module: XC2
// Params: JC2,CC2

(function () {
  var A, B, Q;
  ((B = ZC2()),
    (Q = FC2()),
    (CC2.exports = A =
      function () {
        class I {
          constructor() {
            var G;
            ((this.defaultParams = {
              'canonical-form': !1,
              'cdata-sections': !1,
              comments: !1,
              'datatype-normalization': !1,
              'element-content-whitespace': !0,
              entities: !0,
              'error-handler': new B(),
              infoset: !0,
              'validate-if-schema': !1,
              namespaces: !0,
              'namespace-declarations': !0,
              'normalize-characters': !1,
              'schema-location': '',
              'schema-type': '',
              'split-cdata-sections': !0,
              validate: !1,
              'well-formed': !0,
            }),
              (this.params = G = Object.create(this.defaultParams)));
          }
          getParameter(G) {
            if (this.params.hasOwnProperty(G)) return this.params[G];
            else return null;
          }
          canSetParameter(G, D) {
            return !0;
          }
          setParameter(G, D) {
            if (D != null) return (this.params[G] = D);
            else return delete this.params[G];
          }
        }
        return (
          Object.defineProperty(I.prototype, 'parameterNames', {
            get: function () {
              return new Q(Object.keys(this.defaultParams));
            },
          }),
          I
        );
      }.call(this)));
}).call(JC2);

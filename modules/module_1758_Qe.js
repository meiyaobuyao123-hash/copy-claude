// Module: Qe
// Params: $C2,qC2

(function () {
  var A, B;
  ((B = EF()),
    (qC2.exports = A =
      function () {
        class Q extends B {
          constructor(I) {
            super(I);
            this.value = '';
          }
          clone() {
            return Object.create(this);
          }
          substringData(I, G) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          appendData(I) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          insertData(I, G) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          deleteData(I, G) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          replaceData(I, G, D) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          isEqualNode(I) {
            if (!super.isEqualNode(I)) return !1;
            if (I.data !== this.data) return !1;
            return !0;
          }
        }
        return (
          Object.defineProperty(Q.prototype, 'data', {
            get: function () {
              return this.value;
            },
            set: function (I) {
              return (this.value = I || '');
            },
          }),
          Object.defineProperty(Q.prototype, 'length', {
            get: function () {
              return this.value.length;
            },
          }),
          Object.defineProperty(Q.prototype, 'textContent', {
            get: function () {
              return this.value;
            },
            set: function (I) {
              return (this.value = I || '');
            },
          }),
          Q
        );
      }.call(this)));
}).call($C2);

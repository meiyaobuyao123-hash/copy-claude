// Module: IV1
// Params: wC2,EC2

(function () {
  var A;
  EC2.exports = A = function () {
    class B {
      constructor(Q) {
        this.nodes = Q;
      }
      clone() {
        return (this.nodes = null);
      }
      getNamedItem(Q) {
        return this.nodes[Q];
      }
      setNamedItem(Q) {
        var I = this.nodes[Q.nodeName];
        return ((this.nodes[Q.nodeName] = Q), I || null);
      }
      removeNamedItem(Q) {
        var I = this.nodes[Q];
        return (delete this.nodes[Q], I || null);
      }
      item(Q) {
        return this.nodes[Object.keys(this.nodes)[Q]] || null;
      }
      getNamedItemNS(Q, I) {
        throw new Error('This DOM method is not implemented.');
      }
      setNamedItemNS(Q) {
        throw new Error('This DOM method is not implemented.');
      }
      removeNamedItemNS(Q, I) {
        throw new Error('This DOM method is not implemented.');
      }
    }
    return (
      Object.defineProperty(B.prototype, 'length', {
        get: function () {
          return Object.keys(this.nodes).length || 0;
        },
      }),
      B
    );
  }.call(this);
}).call(wC2);

// Module: hV1
// Params: Dl8,HK2

var c45 = HG(),
  l45 = Nr1(),
  hr1 = function (A, B) {
    var Q = A.createDocumentFragment();
    for (var I = 0; I < B.length; I++) {
      var G = B[I],
        D = G instanceof c45;
      Q.appendChild(D ? G : A.createTextNode(String(G)));
    }
    return Q;
  },
  i45 = {
    after: {
      value: function A() {
        var B = Array.prototype.slice.call(arguments),
          Q = this.parentNode,
          I = this.nextSibling;
        if (Q === null) return;
        while (
          I &&
          B.some(function (D) {
            return D === I;
          })
        )
          I = I.nextSibling;
        var G = hr1(this.doc, B);
        Q.insertBefore(G, I);
      },
    },
    before: {
      value: function A() {
        var B = Array.prototype.slice.call(arguments),
          Q = this.parentNode,
          I = this.previousSibling;
        if (Q === null) return;
        while (
          I &&
          B.some(function (Z) {
            return Z === I;
          })
        )
          I = I.previousSibling;
        var G = hr1(this.doc, B),
          D = I ? I.nextSibling : Q.firstChild;
        Q.insertBefore(G, D);
      },
    },
    remove: {
      value: function A() {
        if (this.parentNode === null) return;
        if (this.doc) {
          if ((this.doc._preremoveNodeIterators(this), this.rooted)) this.doc.mutateRemove(this);
        }
        (this._remove(), (this.parentNode = null));
      },
    },
    _remove: {
      value: function A() {
        var B = this.parentNode;
        if (B === null) return;
        if (B._childNodes) B._childNodes.splice(this.index, 1);
        else if (B._firstChild === this)
          if (this._nextSibling === this) B._firstChild = null;
          else B._firstChild = this._nextSibling;
        (l45.remove(this), B.modify());
      },
    },
    replaceWith: {
      value: function A() {
        var B = Array.prototype.slice.call(arguments),
          Q = this.parentNode,
          I = this.nextSibling;
        if (Q === null) return;
        while (
          I &&
          B.some(function (D) {
            return D === I;
          })
        )
          I = I.nextSibling;
        var G = hr1(this.doc, B);
        if (this.parentNode === Q) Q.replaceChild(G, this);
        else Q.insertBefore(G, I);
      },
    },
  };
HK2.exports = i45;

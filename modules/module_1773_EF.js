// Module: EF
// Params: eC2,AX2

(function () {
  var A,
    B,
    Q,
    I,
    G,
    D,
    Z,
    Y,
    W,
    F,
    J,
    C,
    X,
    V,
    K,
    U,
    N,
    q,
    M = {}.hasOwnProperty,
    R = [].splice;
  (({ isObject: q, isFunction: N, isEmpty: U, getValue: K } = $w()),
    (Y = null),
    (Q = null),
    (I = null),
    (G = null),
    (D = null),
    (X = null),
    (V = null),
    (C = null),
    (Z = null),
    (B = null),
    (J = null),
    (W = null),
    (A = null),
    (AX2.exports = F =
      function () {
        class T {
          constructor(O) {
            if (((this.parent = O), this.parent))
              ((this.options = this.parent.options), (this.stringify = this.parent.stringify));
            if (((this.value = null), (this.children = []), (this.baseURI = null), !Y))
              ((Y = GV1()),
                (Q = DV1()),
                (I = ZV1()),
                (G = YV1()),
                (D = XV1()),
                (X = VV1()),
                (V = KV1()),
                (C = HV1()),
                (Z = ls1()),
                (B = LQ()),
                (J = sC2()),
                (W = IV1()),
                (A = tC2()));
          }
          setParent(O) {
            var S, f, a, g, Y1;
            if (((this.parent = O), O))
              ((this.options = O.options), (this.stringify = O.stringify));
            ((g = this.children), (Y1 = []));
            for (f = 0, a = g.length; f < a; f++) ((S = g[f]), Y1.push(S.setParent(this)));
            return Y1;
          }
          element(O, S, f) {
            var a, g, Y1, r, w1, H1, x, F1, x1;
            if (((H1 = null), S === null && f == null)) [S, f] = [{}, null];
            if (S == null) S = {};
            if (((S = K(S)), !q(S))) [f, S] = [S, f];
            if (O != null) O = K(O);
            if (Array.isArray(O))
              for (Y1 = 0, x = O.length; Y1 < x; Y1++) ((g = O[Y1]), (H1 = this.element(g)));
            else if (N(O)) H1 = this.element(O.apply());
            else if (q(O))
              for (w1 in O) {
                if (!M.call(O, w1)) continue;
                if (((x1 = O[w1]), N(x1))) x1 = x1.apply();
                if (
                  !this.options.ignoreDecorators &&
                  this.stringify.convertAttKey &&
                  w1.indexOf(this.stringify.convertAttKey) === 0
                )
                  H1 = this.attribute(w1.substr(this.stringify.convertAttKey.length), x1);
                else if (!this.options.separateArrayItems && Array.isArray(x1) && U(x1))
                  H1 = this.dummy();
                else if (q(x1) && U(x1)) H1 = this.element(w1);
                else if (!this.options.keepNullNodes && x1 == null) H1 = this.dummy();
                else if (!this.options.separateArrayItems && Array.isArray(x1))
                  for (r = 0, F1 = x1.length; r < F1; r++)
                    ((g = x1[r]), (a = {}), (a[w1] = g), (H1 = this.element(a)));
                else if (q(x1))
                  if (
                    !this.options.ignoreDecorators &&
                    this.stringify.convertTextKey &&
                    w1.indexOf(this.stringify.convertTextKey) === 0
                  )
                    H1 = this.element(x1);
                  else ((H1 = this.element(w1)), H1.element(x1));
                else H1 = this.element(w1, x1);
              }
            else if (!this.options.keepNullNodes && f === null) H1 = this.dummy();
            else if (
              !this.options.ignoreDecorators &&
              this.stringify.convertTextKey &&
              O.indexOf(this.stringify.convertTextKey) === 0
            )
              H1 = this.text(f);
            else if (
              !this.options.ignoreDecorators &&
              this.stringify.convertCDataKey &&
              O.indexOf(this.stringify.convertCDataKey) === 0
            )
              H1 = this.cdata(f);
            else if (
              !this.options.ignoreDecorators &&
              this.stringify.convertCommentKey &&
              O.indexOf(this.stringify.convertCommentKey) === 0
            )
              H1 = this.comment(f);
            else if (
              !this.options.ignoreDecorators &&
              this.stringify.convertRawKey &&
              O.indexOf(this.stringify.convertRawKey) === 0
            )
              H1 = this.raw(f);
            else if (
              !this.options.ignoreDecorators &&
              this.stringify.convertPIKey &&
              O.indexOf(this.stringify.convertPIKey) === 0
            )
              H1 = this.instruction(O.substr(this.stringify.convertPIKey.length), f);
            else H1 = this.node(O, S, f);
            if (H1 == null)
              throw new Error('Could not create any elements with: ' + O + '. ' + this.debugInfo());
            return H1;
          }
          insertBefore(O, S, f) {
            var a, g, Y1, r, w1;
            if (O != null ? O.type : void 0) {
              if (((Y1 = O), (r = S), Y1.setParent(this), r))
                ((g = children.indexOf(r)),
                  (w1 = children.splice(g)),
                  children.push(Y1),
                  Array.prototype.push.apply(children, w1));
              else children.push(Y1);
              return Y1;
            } else {
              if (this.isRoot)
                throw new Error('Cannot insert elements at root level. ' + this.debugInfo(O));
              return (
                (g = this.parent.children.indexOf(this)),
                (w1 = this.parent.children.splice(g)),
                (a = this.parent.element(O, S, f)),
                Array.prototype.push.apply(this.parent.children, w1),
                a
              );
            }
          }
          insertAfter(O, S, f) {
            var a, g, Y1;
            if (this.isRoot)
              throw new Error('Cannot insert elements at root level. ' + this.debugInfo(O));
            return (
              (g = this.parent.children.indexOf(this)),
              (Y1 = this.parent.children.splice(g + 1)),
              (a = this.parent.element(O, S, f)),
              Array.prototype.push.apply(this.parent.children, Y1),
              a
            );
          }
          remove() {
            var O, S;
            if (this.isRoot) throw new Error('Cannot remove the root element. ' + this.debugInfo());
            return (
              (O = this.parent.children.indexOf(this)),
              R.apply(this.parent.children, [O, O - O + 1].concat((S = []))),
              this.parent
            );
          }
          node(O, S, f) {
            var a;
            if (O != null) O = K(O);
            if ((S || (S = {}), (S = K(S)), !q(S))) [f, S] = [S, f];
            if (((a = new Y(this, O, S)), f != null)) a.text(f);
            return (this.children.push(a), a);
          }
          text(O) {
            var S;
            if (q(O)) this.element(O);
            return ((S = new V(this, O)), this.children.push(S), this);
          }
          cdata(O) {
            var S = new Q(this, O);
            return (this.children.push(S), this);
          }
          comment(O) {
            var S = new I(this, O);
            return (this.children.push(S), this);
          }
          commentBefore(O) {
            var S, f, a;
            return (
              (f = this.parent.children.indexOf(this)),
              (a = this.parent.children.splice(f)),
              (S = this.parent.comment(O)),
              Array.prototype.push.apply(this.parent.children, a),
              this
            );
          }
          commentAfter(O) {
            var S, f, a;
            return (
              (f = this.parent.children.indexOf(this)),
              (a = this.parent.children.splice(f + 1)),
              (S = this.parent.comment(O)),
              Array.prototype.push.apply(this.parent.children, a),
              this
            );
          }
          raw(O) {
            var S = new X(this, O);
            return (this.children.push(S), this);
          }
          dummy() {
            var O = new Z(this);
            return O;
          }
          instruction(O, S) {
            var f, a, g, Y1, r;
            if (O != null) O = K(O);
            if (S != null) S = K(S);
            if (Array.isArray(O))
              for (Y1 = 0, r = O.length; Y1 < r; Y1++) ((f = O[Y1]), this.instruction(f));
            else if (q(O))
              for (f in O) {
                if (!M.call(O, f)) continue;
                ((a = O[f]), this.instruction(f, a));
              }
            else {
              if (N(S)) S = S.apply();
              ((g = new C(this, O, S)), this.children.push(g));
            }
            return this;
          }
          instructionBefore(O, S) {
            var f, a, g;
            return (
              (a = this.parent.children.indexOf(this)),
              (g = this.parent.children.splice(a)),
              (f = this.parent.instruction(O, S)),
              Array.prototype.push.apply(this.parent.children, g),
              this
            );
          }
          instructionAfter(O, S) {
            var f, a, g;
            return (
              (a = this.parent.children.indexOf(this)),
              (g = this.parent.children.splice(a + 1)),
              (f = this.parent.instruction(O, S)),
              Array.prototype.push.apply(this.parent.children, g),
              this
            );
          }
          declaration(O, S, f) {
            var a, g;
            if (((a = this.document()), (g = new G(a, O, S, f)), a.children.length === 0))
              a.children.unshift(g);
            else if (a.children[0].type === B.Declaration) a.children[0] = g;
            else a.children.unshift(g);
            return a.root() || a;
          }
          dtd(O, S) {
            var f, a, g, Y1, r, w1, H1, x, F1, x1;
            ((a = this.document()), (g = new D(a, O, S)), (F1 = a.children));
            for (Y1 = r = 0, H1 = F1.length; r < H1; Y1 = ++r)
              if (((f = F1[Y1]), f.type === B.DocType)) return ((a.children[Y1] = g), g);
            x1 = a.children;
            for (Y1 = w1 = 0, x = x1.length; w1 < x; Y1 = ++w1)
              if (((f = x1[Y1]), f.isRoot)) return (a.children.splice(Y1, 0, g), g);
            return (a.children.push(g), g);
          }
          up() {
            if (this.isRoot)
              throw new Error(
                'The root node has no parent. Use doc() if you need to get the document object.'
              );
            return this.parent;
          }
          root() {
            var O = this;
            while (O)
              if (O.type === B.Document) return O.rootObject;
              else if (O.isRoot) return O;
              else O = O.parent;
          }
          document() {
            var O = this;
            while (O)
              if (O.type === B.Document) return O;
              else O = O.parent;
          }
          end(O) {
            return this.document().end(O);
          }
          prev() {
            var O = this.parent.children.indexOf(this);
            if (O < 1) throw new Error('Already at the first node. ' + this.debugInfo());
            return this.parent.children[O - 1];
          }
          next() {
            var O = this.parent.children.indexOf(this);
            if (O === -1 || O === this.parent.children.length - 1)
              throw new Error('Already at the last node. ' + this.debugInfo());
            return this.parent.children[O + 1];
          }
          importDocument(O) {
            var S, f, a, g, Y1;
            if (
              ((f = O.root().clone()),
              (f.parent = this),
              (f.isRoot = !1),
              this.children.push(f),
              this.type === B.Document)
            ) {
              if (
                ((f.isRoot = !0), (f.documentObject = this), (this.rootObject = f), this.children)
              ) {
                Y1 = this.children;
                for (a = 0, g = Y1.length; a < g; a++)
                  if (((S = Y1[a]), S.type === B.DocType)) {
                    S.name = f.name;
                    break;
                  }
              }
            }
            return this;
          }
          debugInfo(O) {
            var S, f;
            if (((O = O || this.name), O == null && !((S = this.parent) != null ? S.name : void 0)))
              return '';
            else if (O == null) return 'parent: <' + this.parent.name + '>';
            else if (!((f = this.parent) != null ? f.name : void 0)) return 'node: <' + O + '>';
            else return 'node: <' + O + '>, parent: <' + this.parent.name + '>';
          }
          ele(O, S, f) {
            return this.element(O, S, f);
          }
          nod(O, S, f) {
            return this.node(O, S, f);
          }
          txt(O) {
            return this.text(O);
          }
          dat(O) {
            return this.cdata(O);
          }
          com(O) {
            return this.comment(O);
          }
          ins(O, S) {
            return this.instruction(O, S);
          }
          doc() {
            return this.document();
          }
          dec(O, S, f) {
            return this.declaration(O, S, f);
          }
          e(O, S, f) {
            return this.element(O, S, f);
          }
          n(O, S, f) {
            return this.node(O, S, f);
          }
          t(O) {
            return this.text(O);
          }
          d(O) {
            return this.cdata(O);
          }
          c(O) {
            return this.comment(O);
          }
          r(O) {
            return this.raw(O);
          }
          i(O, S) {
            return this.instruction(O, S);
          }
          u() {
            return this.up();
          }
          importXMLBuilder(O) {
            return this.importDocument(O);
          }
          attribute(O, S) {
            throw new Error('attribute() applies to element nodes only.');
          }
          att(O, S) {
            return this.attribute(O, S);
          }
          a(O, S) {
            return this.attribute(O, S);
          }
          removeAttribute(O) {
            throw new Error('attribute() applies to element nodes only.');
          }
          replaceChild(O, S) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          removeChild(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          appendChild(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          hasChildNodes() {
            return this.children.length !== 0;
          }
          cloneNode(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          normalize() {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          isSupported(O, S) {
            return !0;
          }
          hasAttributes() {
            return this.attribs.length !== 0;
          }
          compareDocumentPosition(O) {
            var S, f;
            if (((S = this), S === O)) return 0;
            else if (this.document() !== O.document()) {
              if (((f = A.Disconnected | A.ImplementationSpecific), Math.random() < 0.5))
                f |= A.Preceding;
              else f |= A.Following;
              return f;
            } else if (S.isAncestor(O)) return A.Contains | A.Preceding;
            else if (S.isDescendant(O)) return A.Contains | A.Following;
            else if (S.isPreceding(O)) return A.Preceding;
            else return A.Following;
          }
          isSameNode(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          lookupPrefix(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          isDefaultNamespace(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          lookupNamespaceURI(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          isEqualNode(O) {
            var S, f, a;
            if (O.nodeType !== this.nodeType) return !1;
            if (O.children.length !== this.children.length) return !1;
            for (
              S = f = 0, a = this.children.length - 1;
              0 <= a ? f <= a : f >= a;
              S = 0 <= a ? ++f : --f
            )
              if (!this.children[S].isEqualNode(O.children[S])) return !1;
            return !0;
          }
          getFeature(O, S) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          setUserData(O, S, f) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getUserData(O) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          contains(O) {
            if (!O) return !1;
            return O === this || this.isDescendant(O);
          }
          isDescendant(O) {
            var S, f, a, g, Y1;
            Y1 = this.children;
            for (a = 0, g = Y1.length; a < g; a++) {
              if (((S = Y1[a]), O === S)) return !0;
              if (((f = S.isDescendant(O)), f)) return !0;
            }
            return !1;
          }
          isAncestor(O) {
            return O.isDescendant(this);
          }
          isPreceding(O) {
            var S, f;
            if (((S = this.treePosition(O)), (f = this.treePosition(this)), S === -1 || f === -1))
              return !1;
            else return S < f;
          }
          isFollowing(O) {
            var S, f;
            if (((S = this.treePosition(O)), (f = this.treePosition(this)), S === -1 || f === -1))
              return !1;
            else return S > f;
          }
          treePosition(O) {
            var S, f;
            if (
              ((f = 0),
              (S = !1),
              this.foreachTreeNode(this.document(), function (a) {
                if ((f++, !S && a === O)) return (S = !0);
              }),
              S)
            )
              return f;
            else return -1;
          }
          foreachTreeNode(O, S) {
            var f, a, g, Y1, r;
            (O || (O = this.document()), (Y1 = O.children));
            for (a = 0, g = Y1.length; a < g; a++)
              if (((f = Y1[a]), (r = S(f)))) return r;
              else if (((r = this.foreachTreeNode(f, S)), r)) return r;
          }
        }
        return (
          Object.defineProperty(T.prototype, 'nodeName', {
            get: function () {
              return this.name;
            },
          }),
          Object.defineProperty(T.prototype, 'nodeType', {
            get: function () {
              return this.type;
            },
          }),
          Object.defineProperty(T.prototype, 'nodeValue', {
            get: function () {
              return this.value;
            },
          }),
          Object.defineProperty(T.prototype, 'parentNode', {
            get: function () {
              return this.parent;
            },
          }),
          Object.defineProperty(T.prototype, 'childNodes', {
            get: function () {
              if (!this.childNodeList || !this.childNodeList.nodes)
                this.childNodeList = new J(this.children);
              return this.childNodeList;
            },
          }),
          Object.defineProperty(T.prototype, 'firstChild', {
            get: function () {
              return this.children[0] || null;
            },
          }),
          Object.defineProperty(T.prototype, 'lastChild', {
            get: function () {
              return this.children[this.children.length - 1] || null;
            },
          }),
          Object.defineProperty(T.prototype, 'previousSibling', {
            get: function () {
              var O = this.parent.children.indexOf(this);
              return this.parent.children[O - 1] || null;
            },
          }),
          Object.defineProperty(T.prototype, 'nextSibling', {
            get: function () {
              var O = this.parent.children.indexOf(this);
              return this.parent.children[O + 1] || null;
            },
          }),
          Object.defineProperty(T.prototype, 'ownerDocument', {
            get: function () {
              return this.document() || null;
            },
          }),
          Object.defineProperty(T.prototype, 'textContent', {
            get: function () {
              var O, S, f, a, g;
              if (this.nodeType === B.Element || this.nodeType === B.DocumentFragment) {
                ((g = ''), (a = this.children));
                for (S = 0, f = a.length; S < f; S++)
                  if (((O = a[S]), O.textContent)) g += O.textContent;
                return g;
              } else return null;
            },
            set: function (O) {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          T
        );
      }.call(this)));
}).call(eC2);

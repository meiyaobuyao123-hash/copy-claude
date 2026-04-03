// Module: VX2
// Params: CX2,XX2

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
    M,
    R,
    T,
    O,
    S,
    f = {}.hasOwnProperty;
  (({ isObject: O, isFunction: T, isPlainObject: S, getValue: R } = $w()),
    (A = LQ()),
    (C = as1()),
    (V = GV1()),
    (I = DV1()),
    (G = ZV1()),
    (U = VV1()),
    (M = KV1()),
    (K = HV1()),
    (F = YV1()),
    (J = XV1()),
    (D = WV1()),
    (Y = FV1()),
    (Z = JV1()),
    (W = CV1()),
    (Q = cs1()),
    (q = is1()),
    (N = zV1()),
    (B = Ie()),
    (XX2.exports = X =
      class a {
        constructor(g, Y1, r) {
          var w1;
          if (((this.name = '?xml'), (this.type = A.Document), g || (g = {}), (w1 = {}), !g.writer))
            g.writer = new N();
          else if (S(g.writer)) ((w1 = g.writer), (g.writer = new N()));
          ((this.options = g),
            (this.writer = g.writer),
            (this.writerOptions = this.writer.filterOptions(w1)),
            (this.stringify = new q(g)),
            (this.onDataCallback = Y1 || function () {}),
            (this.onEndCallback = r || function () {}),
            (this.currentNode = null),
            (this.currentLevel = -1),
            (this.openTags = {}),
            (this.documentStarted = !1),
            (this.documentCompleted = !1),
            (this.root = null));
        }
        createChildNode(g) {
          var Y1, r, w1, H1, x, F1, x1, o1;
          switch (g.type) {
            case A.CData:
              this.cdata(g.value);
              break;
            case A.Comment:
              this.comment(g.value);
              break;
            case A.Element:
              ((w1 = {}), (x1 = g.attribs));
              for (r in x1) {
                if (!f.call(x1, r)) continue;
                ((Y1 = x1[r]), (w1[r] = Y1.value));
              }
              this.node(g.name, w1);
              break;
            case A.Dummy:
              this.dummy();
              break;
            case A.Raw:
              this.raw(g.value);
              break;
            case A.Text:
              this.text(g.value);
              break;
            case A.ProcessingInstruction:
              this.instruction(g.target, g.value);
              break;
            default:
              throw new Error(
                'This XML node type is not supported in a JS object: ' + g.constructor.name
              );
          }
          o1 = g.children;
          for (x = 0, F1 = o1.length; x < F1; x++)
            if (((H1 = o1[x]), this.createChildNode(H1), H1.type === A.Element)) this.up();
          return this;
        }
        dummy() {
          return this;
        }
        node(g, Y1, r) {
          if (g == null) throw new Error('Missing node name.');
          if (this.root && this.currentLevel === -1)
            throw new Error('Document can only have one root node. ' + this.debugInfo(g));
          if ((this.openCurrent(), (g = R(g)), Y1 == null)) Y1 = {};
          if (((Y1 = R(Y1)), !O(Y1))) [r, Y1] = [Y1, r];
          if (
            ((this.currentNode = new V(this, g, Y1)),
            (this.currentNode.children = !1),
            this.currentLevel++,
            (this.openTags[this.currentLevel] = this.currentNode),
            r != null)
          )
            this.text(r);
          return this;
        }
        element(g, Y1, r) {
          var w1, H1, x, F1, x1, o1;
          if (this.currentNode && this.currentNode.type === A.DocType)
            this.dtdElement(...arguments);
          else if (Array.isArray(g) || O(g) || T(g)) {
            ((F1 = this.options.noValidation),
              (this.options.noValidation = !0),
              (o1 = new C(this.options).element('TEMP_ROOT')),
              o1.element(g),
              (this.options.noValidation = F1),
              (x1 = o1.children));
            for (H1 = 0, x = x1.length; H1 < x; H1++)
              if (((w1 = x1[H1]), this.createChildNode(w1), w1.type === A.Element)) this.up();
          } else this.node(g, Y1, r);
          return this;
        }
        attribute(g, Y1) {
          var r, w1;
          if (!this.currentNode || this.currentNode.children)
            throw new Error(
              'att() can only be used immediately after an ele() call in callback mode. ' +
                this.debugInfo(g)
            );
          if (g != null) g = R(g);
          if (O(g))
            for (r in g) {
              if (!f.call(g, r)) continue;
              ((w1 = g[r]), this.attribute(r, w1));
            }
          else {
            if (T(Y1)) Y1 = Y1.apply();
            if (this.options.keepNullAttributes && Y1 == null)
              this.currentNode.attribs[g] = new Q(this, g, '');
            else if (Y1 != null) this.currentNode.attribs[g] = new Q(this, g, Y1);
          }
          return this;
        }
        text(g) {
          var Y1;
          return (
            this.openCurrent(),
            (Y1 = new M(this, g)),
            this.onData(
              this.writer.text(Y1, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        cdata(g) {
          var Y1;
          return (
            this.openCurrent(),
            (Y1 = new I(this, g)),
            this.onData(
              this.writer.cdata(Y1, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        comment(g) {
          var Y1;
          return (
            this.openCurrent(),
            (Y1 = new G(this, g)),
            this.onData(
              this.writer.comment(Y1, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        raw(g) {
          var Y1;
          return (
            this.openCurrent(),
            (Y1 = new U(this, g)),
            this.onData(
              this.writer.raw(Y1, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        instruction(g, Y1) {
          var r, w1, H1, x, F1;
          if ((this.openCurrent(), g != null)) g = R(g);
          if (Y1 != null) Y1 = R(Y1);
          if (Array.isArray(g))
            for (r = 0, x = g.length; r < x; r++) ((w1 = g[r]), this.instruction(w1));
          else if (O(g))
            for (w1 in g) {
              if (!f.call(g, w1)) continue;
              ((H1 = g[w1]), this.instruction(w1, H1));
            }
          else {
            if (T(Y1)) Y1 = Y1.apply();
            ((F1 = new K(this, g, Y1)),
              this.onData(
                this.writer.processingInstruction(F1, this.writerOptions, this.currentLevel + 1),
                this.currentLevel + 1
              ));
          }
          return this;
        }
        declaration(g, Y1, r) {
          var w1;
          if ((this.openCurrent(), this.documentStarted))
            throw new Error('declaration() must be the first node.');
          return (
            (w1 = new F(this, g, Y1, r)),
            this.onData(
              this.writer.declaration(w1, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        doctype(g, Y1, r) {
          if ((this.openCurrent(), g == null)) throw new Error('Missing root node name.');
          if (this.root) throw new Error('dtd() must come before the root node.');
          return (
            (this.currentNode = new J(this, Y1, r)),
            (this.currentNode.rootNodeName = g),
            (this.currentNode.children = !1),
            this.currentLevel++,
            (this.openTags[this.currentLevel] = this.currentNode),
            this
          );
        }
        dtdElement(g, Y1) {
          var r;
          return (
            this.openCurrent(),
            (r = new Z(this, g, Y1)),
            this.onData(
              this.writer.dtdElement(r, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        attList(g, Y1, r, w1, H1) {
          var x;
          return (
            this.openCurrent(),
            (x = new D(this, g, Y1, r, w1, H1)),
            this.onData(
              this.writer.dtdAttList(x, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        entity(g, Y1) {
          var r;
          return (
            this.openCurrent(),
            (r = new Y(this, !1, g, Y1)),
            this.onData(
              this.writer.dtdEntity(r, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        pEntity(g, Y1) {
          var r;
          return (
            this.openCurrent(),
            (r = new Y(this, !0, g, Y1)),
            this.onData(
              this.writer.dtdEntity(r, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        notation(g, Y1) {
          var r;
          return (
            this.openCurrent(),
            (r = new W(this, g, Y1)),
            this.onData(
              this.writer.dtdNotation(r, this.writerOptions, this.currentLevel + 1),
              this.currentLevel + 1
            ),
            this
          );
        }
        up() {
          if (this.currentLevel < 0) throw new Error('The document node has no parent.');
          if (this.currentNode) {
            if (this.currentNode.children) this.closeNode(this.currentNode);
            else this.openNode(this.currentNode);
            this.currentNode = null;
          } else this.closeNode(this.openTags[this.currentLevel]);
          return (delete this.openTags[this.currentLevel], this.currentLevel--, this);
        }
        end() {
          while (this.currentLevel >= 0) this.up();
          return this.onEnd();
        }
        openCurrent() {
          if (this.currentNode)
            return ((this.currentNode.children = !0), this.openNode(this.currentNode));
        }
        openNode(g) {
          var Y1, r, w1, H1;
          if (!g.isOpen) {
            if (!this.root && this.currentLevel === 0 && g.type === A.Element) this.root = g;
            if (((r = ''), g.type === A.Element)) {
              ((this.writerOptions.state = B.OpenTag),
                (r = this.writer.indent(g, this.writerOptions, this.currentLevel) + '<' + g.name),
                (H1 = g.attribs));
              for (w1 in H1) {
                if (!f.call(H1, w1)) continue;
                ((Y1 = H1[w1]),
                  (r += this.writer.attribute(Y1, this.writerOptions, this.currentLevel)));
              }
              ((r +=
                (g.children ? '>' : '/>') +
                this.writer.endline(g, this.writerOptions, this.currentLevel)),
                (this.writerOptions.state = B.InsideTag));
            } else {
              if (
                ((this.writerOptions.state = B.OpenTag),
                (r =
                  this.writer.indent(g, this.writerOptions, this.currentLevel) +
                  '<!DOCTYPE ' +
                  g.rootNodeName),
                g.pubID && g.sysID)
              )
                r += ' PUBLIC "' + g.pubID + '" "' + g.sysID + '"';
              else if (g.sysID) r += ' SYSTEM "' + g.sysID + '"';
              if (g.children) ((r += ' ['), (this.writerOptions.state = B.InsideTag));
              else ((this.writerOptions.state = B.CloseTag), (r += '>'));
              r += this.writer.endline(g, this.writerOptions, this.currentLevel);
            }
            return (this.onData(r, this.currentLevel), (g.isOpen = !0));
          }
        }
        closeNode(g) {
          var Y1;
          if (!g.isClosed) {
            if (((Y1 = ''), (this.writerOptions.state = B.CloseTag), g.type === A.Element))
              Y1 =
                this.writer.indent(g, this.writerOptions, this.currentLevel) +
                '</' +
                g.name +
                '>' +
                this.writer.endline(g, this.writerOptions, this.currentLevel);
            else
              Y1 =
                this.writer.indent(g, this.writerOptions, this.currentLevel) +
                ']>' +
                this.writer.endline(g, this.writerOptions, this.currentLevel);
            return (
              (this.writerOptions.state = B.None),
              this.onData(Y1, this.currentLevel),
              (g.isClosed = !0)
            );
          }
        }
        onData(g, Y1) {
          return ((this.documentStarted = !0), this.onDataCallback(g, Y1 + 1));
        }
        onEnd() {
          return ((this.documentCompleted = !0), this.onEndCallback());
        }
        debugInfo(g) {
          if (g == null) return '';
          else return 'node: <' + g + '>';
        }
        ele() {
          return this.element(...arguments);
        }
        nod(g, Y1, r) {
          return this.node(g, Y1, r);
        }
        txt(g) {
          return this.text(g);
        }
        dat(g) {
          return this.cdata(g);
        }
        com(g) {
          return this.comment(g);
        }
        ins(g, Y1) {
          return this.instruction(g, Y1);
        }
        dec(g, Y1, r) {
          return this.declaration(g, Y1, r);
        }
        dtd(g, Y1, r) {
          return this.doctype(g, Y1, r);
        }
        e(g, Y1, r) {
          return this.element(g, Y1, r);
        }
        n(g, Y1, r) {
          return this.node(g, Y1, r);
        }
        t(g) {
          return this.text(g);
        }
        d(g) {
          return this.cdata(g);
        }
        c(g) {
          return this.comment(g);
        }
        r(g) {
          return this.raw(g);
        }
        i(g, Y1) {
          return this.instruction(g, Y1);
        }
        att() {
          if (this.currentNode && this.currentNode.type === A.DocType)
            return this.attList(...arguments);
          else return this.attribute(...arguments);
        }
        a() {
          if (this.currentNode && this.currentNode.type === A.DocType)
            return this.attList(...arguments);
          else return this.attribute(...arguments);
        }
        ent(g, Y1) {
          return this.entity(g, Y1);
        }
        pent(g, Y1) {
          return this.pEntity(g, Y1);
        }
        not(g, Y1) {
          return this.notation(g, Y1);
        }
      }));
}).call(CX2);

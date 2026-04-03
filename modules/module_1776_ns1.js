// Module: ns1
// Params: DX2,ZX2

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
    q = {}.hasOwnProperty;
  (({ assign: N } = $w()),
    (A = LQ()),
    (W = YV1()),
    (F = XV1()),
    (Q = DV1()),
    (I = ZV1()),
    (C = GV1()),
    (V = VV1()),
    (K = KV1()),
    (X = HV1()),
    (J = ls1()),
    (G = WV1()),
    (D = JV1()),
    (Z = FV1()),
    (Y = CV1()),
    (B = Ie()),
    (ZX2.exports = U =
      class M {
        constructor(R) {
          var T, O, S;
          (R || (R = {}), (this.options = R), (O = R.writer || {}));
          for (T in O) {
            if (!q.call(O, T)) continue;
            ((S = O[T]), (this['_' + T] = this[T]), (this[T] = S));
          }
        }
        filterOptions(R) {
          var T, O, S, f, a, g, Y1, r, w1;
          if (
            (R || (R = {}),
            (R = N({}, this.options, R)),
            (T = { writer: this }),
            (T.pretty = R.pretty || !1),
            (T.allowEmpty = R.allowEmpty || !1),
            (T.indent = (O = R.indent) != null ? O : '  '),
            (T.newline =
              (S = R.newline) != null
                ? S
                : `
`),
            (T.offset = (f = R.offset) != null ? f : 0),
            (T.width = (a = R.width) != null ? a : 0),
            (T.dontPrettyTextNodes =
              (g = (Y1 = R.dontPrettyTextNodes) != null ? Y1 : R.dontprettytextnodes) != null
                ? g
                : 0),
            (T.spaceBeforeSlash =
              (r = (w1 = R.spaceBeforeSlash) != null ? w1 : R.spacebeforeslash) != null ? r : ''),
            T.spaceBeforeSlash === !0)
          )
            T.spaceBeforeSlash = ' ';
          return ((T.suppressPrettyCount = 0), (T.user = {}), (T.state = B.None), T);
        }
        indent(R, T, O) {
          var S;
          if (!T.pretty || T.suppressPrettyCount) return '';
          else if (T.pretty) {
            if (((S = (O || 0) + T.offset + 1), S > 0)) return new Array(S).join(T.indent);
          }
          return '';
        }
        endline(R, T, O) {
          if (!T.pretty || T.suppressPrettyCount) return '';
          else return T.newline;
        }
        attribute(R, T, O) {
          var S;
          if ((this.openAttribute(R, T, O), T.pretty && T.width > 0))
            S = R.name + '="' + R.value + '"';
          else S = ' ' + R.name + '="' + R.value + '"';
          return (this.closeAttribute(R, T, O), S);
        }
        cdata(R, T, O) {
          var S;
          return (
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<![CDATA['),
            (T.state = B.InsideTag),
            (S += R.value),
            (T.state = B.CloseTag),
            (S += ']]>' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        comment(R, T, O) {
          var S;
          return (
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<!-- '),
            (T.state = B.InsideTag),
            (S += R.value),
            (T.state = B.CloseTag),
            (S += ' -->' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        declaration(R, T, O) {
          var S;
          if (
            (this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<?xml'),
            (T.state = B.InsideTag),
            (S += ' version="' + R.version + '"'),
            R.encoding != null)
          )
            S += ' encoding="' + R.encoding + '"';
          if (R.standalone != null) S += ' standalone="' + R.standalone + '"';
          return (
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '?>'),
            (S += this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        docType(R, T, O) {
          var S, f, a, g, Y1;
          if (
            (O || (O = 0),
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (g = this.indent(R, T, O)),
            (g += '<!DOCTYPE ' + R.root().name),
            R.pubID && R.sysID)
          )
            g += ' PUBLIC "' + R.pubID + '" "' + R.sysID + '"';
          else if (R.sysID) g += ' SYSTEM "' + R.sysID + '"';
          if (R.children.length > 0) {
            ((g += ' ['), (g += this.endline(R, T, O)), (T.state = B.InsideTag), (Y1 = R.children));
            for (f = 0, a = Y1.length; f < a; f++)
              ((S = Y1[f]), (g += this.writeChildNode(S, T, O + 1)));
            ((T.state = B.CloseTag), (g += ']'));
          }
          return (
            (T.state = B.CloseTag),
            (g += T.spaceBeforeSlash + '>'),
            (g += this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            g
          );
        }
        element(R, T, O) {
          var S, f, a, g, Y1, r, w1, H1, x, F1, x1, o1, a1, PA, cA, FA, f1, B1, v1;
          if (
            (O || (O = 0),
            (o1 = !1),
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (a1 = this.indent(R, T, O) + '<' + R.name),
            T.pretty && T.width > 0)
          ) {
            ((H1 = a1.length), (cA = R.attribs));
            for (x1 in cA) {
              if (!q.call(cA, x1)) continue;
              if (((S = cA[x1]), (PA = this.attribute(S, T, O)), (f = PA.length), H1 + f > T.width))
                ((v1 = this.indent(R, T, O + 1) + PA),
                  (a1 += this.endline(R, T, O) + v1),
                  (H1 = v1.length));
              else ((v1 = ' ' + PA), (a1 += v1), (H1 += v1.length));
            }
          } else {
            FA = R.attribs;
            for (x1 in FA) {
              if (!q.call(FA, x1)) continue;
              ((S = FA[x1]), (a1 += this.attribute(S, T, O)));
            }
          }
          if (
            ((g = R.children.length),
            (Y1 = g === 0 ? null : R.children[0]),
            g === 0 ||
              R.children.every(function (M1) {
                return (
                  (M1.type === A.Text || M1.type === A.Raw || M1.type === A.CData) &&
                  M1.value === ''
                );
              }))
          )
            if (T.allowEmpty)
              ((a1 += '>'),
                (T.state = B.CloseTag),
                (a1 += '</' + R.name + '>' + this.endline(R, T, O)));
            else
              ((T.state = B.CloseTag), (a1 += T.spaceBeforeSlash + '/>' + this.endline(R, T, O)));
          else if (
            T.pretty &&
            g === 1 &&
            (Y1.type === A.Text || Y1.type === A.Raw || Y1.type === A.CData) &&
            Y1.value != null
          )
            ((a1 += '>'),
              (T.state = B.InsideTag),
              T.suppressPrettyCount++,
              (o1 = !0),
              (a1 += this.writeChildNode(Y1, T, O + 1)),
              T.suppressPrettyCount--,
              (o1 = !1),
              (T.state = B.CloseTag),
              (a1 += '</' + R.name + '>' + this.endline(R, T, O)));
          else {
            if (T.dontPrettyTextNodes) {
              f1 = R.children;
              for (r = 0, x = f1.length; r < x; r++)
                if (
                  ((a = f1[r]),
                  (a.type === A.Text || a.type === A.Raw || a.type === A.CData) && a.value != null)
                ) {
                  (T.suppressPrettyCount++, (o1 = !0));
                  break;
                }
            }
            ((a1 += '>' + this.endline(R, T, O)), (T.state = B.InsideTag), (B1 = R.children));
            for (w1 = 0, F1 = B1.length; w1 < F1; w1++)
              ((a = B1[w1]), (a1 += this.writeChildNode(a, T, O + 1)));
            if (((T.state = B.CloseTag), (a1 += this.indent(R, T, O) + '</' + R.name + '>'), o1))
              T.suppressPrettyCount--;
            ((a1 += this.endline(R, T, O)), (T.state = B.None));
          }
          return (this.closeNode(R, T, O), a1);
        }
        writeChildNode(R, T, O) {
          switch (R.type) {
            case A.CData:
              return this.cdata(R, T, O);
            case A.Comment:
              return this.comment(R, T, O);
            case A.Element:
              return this.element(R, T, O);
            case A.Raw:
              return this.raw(R, T, O);
            case A.Text:
              return this.text(R, T, O);
            case A.ProcessingInstruction:
              return this.processingInstruction(R, T, O);
            case A.Dummy:
              return '';
            case A.Declaration:
              return this.declaration(R, T, O);
            case A.DocType:
              return this.docType(R, T, O);
            case A.AttributeDeclaration:
              return this.dtdAttList(R, T, O);
            case A.ElementDeclaration:
              return this.dtdElement(R, T, O);
            case A.EntityDeclaration:
              return this.dtdEntity(R, T, O);
            case A.NotationDeclaration:
              return this.dtdNotation(R, T, O);
            default:
              throw new Error('Unknown XML node type: ' + R.constructor.name);
          }
        }
        processingInstruction(R, T, O) {
          var S;
          if (
            (this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<?'),
            (T.state = B.InsideTag),
            (S += R.target),
            R.value)
          )
            S += ' ' + R.value;
          return (
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '?>'),
            (S += this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        raw(R, T, O) {
          var S;
          return (
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O)),
            (T.state = B.InsideTag),
            (S += R.value),
            (T.state = B.CloseTag),
            (S += this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        text(R, T, O) {
          var S;
          return (
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O)),
            (T.state = B.InsideTag),
            (S += R.value),
            (T.state = B.CloseTag),
            (S += this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        dtdAttList(R, T, O) {
          var S;
          if (
            (this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<!ATTLIST'),
            (T.state = B.InsideTag),
            (S += ' ' + R.elementName + ' ' + R.attributeName + ' ' + R.attributeType),
            R.defaultValueType !== '#DEFAULT')
          )
            S += ' ' + R.defaultValueType;
          if (R.defaultValue) S += ' "' + R.defaultValue + '"';
          return (
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '>' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        dtdElement(R, T, O) {
          var S;
          return (
            this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<!ELEMENT'),
            (T.state = B.InsideTag),
            (S += ' ' + R.name + ' ' + R.value),
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '>' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        dtdEntity(R, T, O) {
          var S;
          if (
            (this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<!ENTITY'),
            (T.state = B.InsideTag),
            R.pe)
          )
            S += ' %';
          if (((S += ' ' + R.name), R.value)) S += ' "' + R.value + '"';
          else {
            if (R.pubID && R.sysID) S += ' PUBLIC "' + R.pubID + '" "' + R.sysID + '"';
            else if (R.sysID) S += ' SYSTEM "' + R.sysID + '"';
            if (R.nData) S += ' NDATA ' + R.nData;
          }
          return (
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '>' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        dtdNotation(R, T, O) {
          var S;
          if (
            (this.openNode(R, T, O),
            (T.state = B.OpenTag),
            (S = this.indent(R, T, O) + '<!NOTATION'),
            (T.state = B.InsideTag),
            (S += ' ' + R.name),
            R.pubID && R.sysID)
          )
            S += ' PUBLIC "' + R.pubID + '" "' + R.sysID + '"';
          else if (R.pubID) S += ' PUBLIC "' + R.pubID + '"';
          else if (R.sysID) S += ' SYSTEM "' + R.sysID + '"';
          return (
            (T.state = B.CloseTag),
            (S += T.spaceBeforeSlash + '>' + this.endline(R, T, O)),
            (T.state = B.None),
            this.closeNode(R, T, O),
            S
          );
        }
        openNode(R, T, O) {}
        closeNode(R, T, O) {}
        openAttribute(R, T, O) {}
        closeAttribute(R, T, O) {}
      }));
}).call(DX2);

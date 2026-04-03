// Module: zX2
// Params: KX2,HX2

(function () {
  var A,
    B,
    Q,
    I,
    G = {}.hasOwnProperty;
  ((A = LQ()),
    (I = ns1()),
    (B = Ie()),
    (HX2.exports = Q =
      class D extends I {
        constructor(Z, Y) {
          super(Y);
          this.stream = Z;
        }
        endline(Z, Y, W) {
          if (Z.isLastRootNode && Y.state === B.CloseTag) return '';
          else return super.endline(Z, Y, W);
        }
        document(Z, Y) {
          var W, F, J, C, X, V, K, U, N;
          K = Z.children;
          for (F = J = 0, X = K.length; J < X; F = ++J)
            ((W = K[F]), (W.isLastRootNode = F === Z.children.length - 1));
          ((Y = this.filterOptions(Y)), (U = Z.children), (N = []));
          for (C = 0, V = U.length; C < V; C++) ((W = U[C]), N.push(this.writeChildNode(W, Y, 0)));
          return N;
        }
        cdata(Z, Y, W) {
          return this.stream.write(super.cdata(Z, Y, W));
        }
        comment(Z, Y, W) {
          return this.stream.write(super.comment(Z, Y, W));
        }
        declaration(Z, Y, W) {
          return this.stream.write(super.declaration(Z, Y, W));
        }
        docType(Z, Y, W) {
          var F, J, C, X;
          if (
            (W || (W = 0),
            this.openNode(Z, Y, W),
            (Y.state = B.OpenTag),
            this.stream.write(this.indent(Z, Y, W)),
            this.stream.write('<!DOCTYPE ' + Z.root().name),
            Z.pubID && Z.sysID)
          )
            this.stream.write(' PUBLIC "' + Z.pubID + '" "' + Z.sysID + '"');
          else if (Z.sysID) this.stream.write(' SYSTEM "' + Z.sysID + '"');
          if (Z.children.length > 0) {
            (this.stream.write(' ['),
              this.stream.write(this.endline(Z, Y, W)),
              (Y.state = B.InsideTag),
              (X = Z.children));
            for (J = 0, C = X.length; J < C; J++) ((F = X[J]), this.writeChildNode(F, Y, W + 1));
            ((Y.state = B.CloseTag), this.stream.write(']'));
          }
          return (
            (Y.state = B.CloseTag),
            this.stream.write(Y.spaceBeforeSlash + '>'),
            this.stream.write(this.endline(Z, Y, W)),
            (Y.state = B.None),
            this.closeNode(Z, Y, W)
          );
        }
        element(Z, Y, W) {
          var F, J, C, X, V, K, U, N, q, M, R, T, O, S, f, a;
          if (
            (W || (W = 0),
            this.openNode(Z, Y, W),
            (Y.state = B.OpenTag),
            (R = this.indent(Z, Y, W) + '<' + Z.name),
            Y.pretty && Y.width > 0)
          ) {
            ((U = R.length), (O = Z.attribs));
            for (q in O) {
              if (!G.call(O, q)) continue;
              if (((F = O[q]), (T = this.attribute(F, Y, W)), (J = T.length), U + J > Y.width))
                ((a = this.indent(Z, Y, W + 1) + T),
                  (R += this.endline(Z, Y, W) + a),
                  (U = a.length));
              else ((a = ' ' + T), (R += a), (U += a.length));
            }
          } else {
            S = Z.attribs;
            for (q in S) {
              if (!G.call(S, q)) continue;
              ((F = S[q]), (R += this.attribute(F, Y, W)));
            }
          }
          if (
            (this.stream.write(R),
            (X = Z.children.length),
            (V = X === 0 ? null : Z.children[0]),
            X === 0 ||
              Z.children.every(function (g) {
                return (
                  (g.type === A.Text || g.type === A.Raw || g.type === A.CData) && g.value === ''
                );
              }))
          )
            if (Y.allowEmpty)
              (this.stream.write('>'),
                (Y.state = B.CloseTag),
                this.stream.write('</' + Z.name + '>'));
            else ((Y.state = B.CloseTag), this.stream.write(Y.spaceBeforeSlash + '/>'));
          else if (
            Y.pretty &&
            X === 1 &&
            (V.type === A.Text || V.type === A.Raw || V.type === A.CData) &&
            V.value != null
          )
            (this.stream.write('>'),
              (Y.state = B.InsideTag),
              Y.suppressPrettyCount++,
              (M = !0),
              this.writeChildNode(V, Y, W + 1),
              Y.suppressPrettyCount--,
              (M = !1),
              (Y.state = B.CloseTag),
              this.stream.write('</' + Z.name + '>'));
          else {
            (this.stream.write('>' + this.endline(Z, Y, W)),
              (Y.state = B.InsideTag),
              (f = Z.children));
            for (K = 0, N = f.length; K < N; K++) ((C = f[K]), this.writeChildNode(C, Y, W + 1));
            ((Y.state = B.CloseTag), this.stream.write(this.indent(Z, Y, W) + '</' + Z.name + '>'));
          }
          return (
            this.stream.write(this.endline(Z, Y, W)),
            (Y.state = B.None),
            this.closeNode(Z, Y, W)
          );
        }
        processingInstruction(Z, Y, W) {
          return this.stream.write(super.processingInstruction(Z, Y, W));
        }
        raw(Z, Y, W) {
          return this.stream.write(super.raw(Z, Y, W));
        }
        text(Z, Y, W) {
          return this.stream.write(super.text(Z, Y, W));
        }
        dtdAttList(Z, Y, W) {
          return this.stream.write(super.dtdAttList(Z, Y, W));
        }
        dtdElement(Z, Y, W) {
          return this.stream.write(super.dtdElement(Z, Y, W));
        }
        dtdEntity(Z, Y, W) {
          return this.stream.write(super.dtdEntity(Z, Y, W));
        }
        dtdNotation(Z, Y, W) {
          return this.stream.write(super.dtdNotation(Z, Y, W));
        }
      }));
}).call(KX2);

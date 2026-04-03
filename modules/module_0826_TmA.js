// Module: TmA
// Params: wd5,OmA

var LmA = E81(),
  Ll = UmA(),
  Ke9 = $mA(),
  He9 = MmA();
class RmA {
  constructor(A) {
    ((this.options = A),
      (this.currentNode = null),
      (this.tagsNodeStack = []),
      (this.docTypeEntities = {}),
      (this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: '>' },
        lt: { regex: /&(lt|#60|#x3C);/g, val: '<' },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
      }),
      (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: '&' }),
      (this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: ' ' },
        cent: { regex: /&(cent|#162);/g, val: '¢' },
        pound: { regex: /&(pound|#163);/g, val: '£' },
        yen: { regex: /&(yen|#165);/g, val: '¥' },
        euro: { regex: /&(euro|#8364);/g, val: '€' },
        copyright: { regex: /&(copy|#169);/g, val: '©' },
        reg: { regex: /&(reg|#174);/g, val: '®' },
        inr: { regex: /&(inr|#8377);/g, val: '₹' },
        num_dec: {
          regex: /&#([0-9]{1,7});/g,
          val: (B, Q) => String.fromCharCode(Number.parseInt(Q, 10)),
        },
        num_hex: {
          regex: /&#x([0-9a-fA-F]{1,6});/g,
          val: (B, Q) => String.fromCharCode(Number.parseInt(Q, 16)),
        },
      }),
      (this.addExternalEntities = ze9),
      (this.parseXml = $e9),
      (this.parseTextData = we9),
      (this.resolveNameSpace = Ee9),
      (this.buildAttributesMap = Ne9),
      (this.isItStopNode = Re9),
      (this.replaceEntitiesValue = Me9),
      (this.readStopNodeData = Te9),
      (this.saveTextToParentTag = Le9),
      (this.addChild = qe9));
  }
}
function ze9(A) {
  let B = Object.keys(A);
  for (let Q = 0; Q < B.length; Q++) {
    let I = B[Q];
    this.lastEntities[I] = { regex: new RegExp('&' + I + ';', 'g'), val: A[I] };
  }
}
function we9(A, B, Q, I, G, D, Z) {
  if (A !== void 0) {
    if (this.options.trimValues && !I) A = A.trim();
    if (A.length > 0) {
      if (!Z) A = this.replaceEntitiesValue(A);
      let Y = this.options.tagValueProcessor(B, A, Q, G, D);
      if (Y === null || Y === void 0) return A;
      else if (typeof Y !== typeof A || Y !== A) return Y;
      else if (this.options.trimValues)
        return VT1(A, this.options.parseTagValue, this.options.numberParseOptions);
      else if (A.trim() === A)
        return VT1(A, this.options.parseTagValue, this.options.numberParseOptions);
      else return A;
    }
  }
}
function Ee9(A) {
  if (this.options.removeNSPrefix) {
    let B = A.split(':'),
      Q = A.charAt(0) === '/' ? '/' : '';
    if (B[0] === 'xmlns') return '';
    if (B.length === 2) A = Q + B[1];
  }
  return A;
}
var Ue9 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, 'gm');
function Ne9(A, B, Q) {
  if (!this.options.ignoreAttributes && typeof A === 'string') {
    let I = LmA.getAllMatches(A, Ue9),
      G = I.length,
      D = {};
    for (let Z = 0; Z < G; Z++) {
      let Y = this.resolveNameSpace(I[Z][1]),
        W = I[Z][4],
        F = this.options.attributeNamePrefix + Y;
      if (Y.length) {
        if (this.options.transformAttributeName) F = this.options.transformAttributeName(F);
        if (F === '__proto__') F = '#__proto__';
        if (W !== void 0) {
          if (this.options.trimValues) W = W.trim();
          W = this.replaceEntitiesValue(W);
          let J = this.options.attributeValueProcessor(Y, W, B);
          if (J === null || J === void 0) D[F] = W;
          else if (typeof J !== typeof W || J !== W) D[F] = J;
          else D[F] = VT1(W, this.options.parseAttributeValue, this.options.numberParseOptions);
        } else if (this.options.allowBooleanAttributes) D[F] = !0;
      }
    }
    if (!Object.keys(D).length) return;
    if (this.options.attributesGroupName) {
      let Z = {};
      return ((Z[this.options.attributesGroupName] = D), Z);
    }
    return D;
  }
}
var $e9 = function (A) {
  A = A.replace(
    /\r\n?/g,
    `
`
  );
  let B = new Ll('!xml'),
    Q = B,
    I = '',
    G = '';
  for (let D = 0; D < A.length; D++)
    if (A[D] === '<')
      if (A[D + 1] === '/') {
        let Y = HP(A, '>', D, 'Closing Tag is not closed.'),
          W = A.substring(D + 2, Y).trim();
        if (this.options.removeNSPrefix) {
          let C = W.indexOf(':');
          if (C !== -1) W = W.substr(C + 1);
        }
        if (this.options.transformTagName) W = this.options.transformTagName(W);
        if (Q) I = this.saveTextToParentTag(I, Q, G);
        let F = G.substring(G.lastIndexOf('.') + 1);
        if (W && this.options.unpairedTags.indexOf(W) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${W}>`);
        let J = 0;
        if (F && this.options.unpairedTags.indexOf(F) !== -1)
          ((J = G.lastIndexOf('.', G.lastIndexOf('.') - 1)), this.tagsNodeStack.pop());
        else J = G.lastIndexOf('.');
        ((G = G.substring(0, J)), (Q = this.tagsNodeStack.pop()), (I = ''), (D = Y));
      } else if (A[D + 1] === '?') {
        let Y = XT1(A, D, !1, '?>');
        if (!Y) throw new Error('Pi Tag is not closed.');
        if (
          ((I = this.saveTextToParentTag(I, Q, G)),
          (this.options.ignoreDeclaration && Y.tagName === '?xml') || this.options.ignorePiTags)
        );
        else {
          let W = new Ll(Y.tagName);
          if ((W.add(this.options.textNodeName, ''), Y.tagName !== Y.tagExp && Y.attrExpPresent))
            W[':@'] = this.buildAttributesMap(Y.tagExp, G, Y.tagName);
          this.addChild(Q, W, G);
        }
        D = Y.closeIndex + 1;
      } else if (A.substr(D + 1, 3) === '!--') {
        let Y = HP(A, '-->', D + 4, 'Comment is not closed.');
        if (this.options.commentPropName) {
          let W = A.substring(D + 4, Y - 2);
          ((I = this.saveTextToParentTag(I, Q, G)),
            Q.add(this.options.commentPropName, [{ [this.options.textNodeName]: W }]));
        }
        D = Y;
      } else if (A.substr(D + 1, 2) === '!D') {
        let Y = Ke9(A, D);
        ((this.docTypeEntities = Y.entities), (D = Y.i));
      } else if (A.substr(D + 1, 2) === '![') {
        let Y = HP(A, ']]>', D, 'CDATA is not closed.') - 2,
          W = A.substring(D + 9, Y);
        I = this.saveTextToParentTag(I, Q, G);
        let F = this.parseTextData(W, Q.tagname, G, !0, !1, !0, !0);
        if (F == null) F = '';
        if (this.options.cdataPropName)
          Q.add(this.options.cdataPropName, [{ [this.options.textNodeName]: W }]);
        else Q.add(this.options.textNodeName, F);
        D = Y + 2;
      } else {
        let Y = XT1(A, D, this.options.removeNSPrefix),
          W = Y.tagName,
          F = Y.rawTagName,
          J = Y.tagExp,
          C = Y.attrExpPresent,
          X = Y.closeIndex;
        if (this.options.transformTagName) W = this.options.transformTagName(W);
        if (Q && I) {
          if (Q.tagname !== '!xml') I = this.saveTextToParentTag(I, Q, G, !1);
        }
        let V = Q;
        if (V && this.options.unpairedTags.indexOf(V.tagname) !== -1)
          ((Q = this.tagsNodeStack.pop()), (G = G.substring(0, G.lastIndexOf('.'))));
        if (W !== B.tagname) G += G ? '.' + W : W;
        if (this.isItStopNode(this.options.stopNodes, G, W)) {
          let K = '';
          if (J.length > 0 && J.lastIndexOf('/') === J.length - 1) {
            if (W[W.length - 1] === '/')
              ((W = W.substr(0, W.length - 1)), (G = G.substr(0, G.length - 1)), (J = W));
            else J = J.substr(0, J.length - 1);
            D = Y.closeIndex;
          } else if (this.options.unpairedTags.indexOf(W) !== -1) D = Y.closeIndex;
          else {
            let N = this.readStopNodeData(A, F, X + 1);
            if (!N) throw new Error(`Unexpected end of ${F}`);
            ((D = N.i), (K = N.tagContent));
          }
          let U = new Ll(W);
          if (W !== J && C) U[':@'] = this.buildAttributesMap(J, G, W);
          if (K) K = this.parseTextData(K, W, G, !0, C, !0, !0);
          ((G = G.substr(0, G.lastIndexOf('.'))),
            U.add(this.options.textNodeName, K),
            this.addChild(Q, U, G));
        } else {
          if (J.length > 0 && J.lastIndexOf('/') === J.length - 1) {
            if (W[W.length - 1] === '/')
              ((W = W.substr(0, W.length - 1)), (G = G.substr(0, G.length - 1)), (J = W));
            else J = J.substr(0, J.length - 1);
            if (this.options.transformTagName) W = this.options.transformTagName(W);
            let K = new Ll(W);
            if (W !== J && C) K[':@'] = this.buildAttributesMap(J, G, W);
            (this.addChild(Q, K, G), (G = G.substr(0, G.lastIndexOf('.'))));
          } else {
            let K = new Ll(W);
            if ((this.tagsNodeStack.push(Q), W !== J && C))
              K[':@'] = this.buildAttributesMap(J, G, W);
            (this.addChild(Q, K, G), (Q = K));
          }
          ((I = ''), (D = X));
        }
      }
    else I += A[D];
  return B.child;
};
function qe9(A, B, Q) {
  let I = this.options.updateTag(B.tagname, Q, B[':@']);
  if (I === !1);
  else if (typeof I === 'string') ((B.tagname = I), A.addChild(B));
  else A.addChild(B);
}
var Me9 = function (A) {
  if (this.options.processEntities) {
    for (let B in this.docTypeEntities) {
      let Q = this.docTypeEntities[B];
      A = A.replace(Q.regx, Q.val);
    }
    for (let B in this.lastEntities) {
      let Q = this.lastEntities[B];
      A = A.replace(Q.regex, Q.val);
    }
    if (this.options.htmlEntities)
      for (let B in this.htmlEntities) {
        let Q = this.htmlEntities[B];
        A = A.replace(Q.regex, Q.val);
      }
    A = A.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return A;
};
function Le9(A, B, Q, I) {
  if (A) {
    if (I === void 0) I = Object.keys(B.child).length === 0;
    if (
      ((A = this.parseTextData(
        A,
        B.tagname,
        Q,
        !1,
        B[':@'] ? Object.keys(B[':@']).length !== 0 : !1,
        I
      )),
      A !== void 0 && A !== '')
    )
      B.add(this.options.textNodeName, A);
    A = '';
  }
  return A;
}
function Re9(A, B, Q) {
  let I = '*.' + Q;
  for (let G in A) {
    let D = A[G];
    if (I === D || B === D) return !0;
  }
  return !1;
}
function Oe9(A, B, Q = '>') {
  let I,
    G = '';
  for (let D = B; D < A.length; D++) {
    let Z = A[D];
    if (I) {
      if (Z === I) I = '';
    } else if (Z === '"' || Z === "'") I = Z;
    else if (Z === Q[0])
      if (Q[1]) {
        if (A[D + 1] === Q[1]) return { data: G, index: D };
      } else return { data: G, index: D };
    else if (Z === '\t') Z = ' ';
    G += Z;
  }
}
function HP(A, B, Q, I) {
  let G = A.indexOf(B, Q);
  if (G === -1) throw new Error(I);
  else return G + B.length - 1;
}
function XT1(A, B, Q, I = '>') {
  let G = Oe9(A, B + 1, I);
  if (!G) return;
  let { data: D, index: Z } = G,
    Y = D.search(/\s/),
    W = D,
    F = !0;
  if (Y !== -1) ((W = D.substring(0, Y)), (D = D.substring(Y + 1).trimStart()));
  let J = W;
  if (Q) {
    let C = W.indexOf(':');
    if (C !== -1) ((W = W.substr(C + 1)), (F = W !== G.data.substr(C + 1)));
  }
  return { tagName: W, tagExp: D, closeIndex: Z, attrExpPresent: F, rawTagName: J };
}
function Te9(A, B, Q) {
  let I = Q,
    G = 1;
  for (; Q < A.length; Q++)
    if (A[Q] === '<')
      if (A[Q + 1] === '/') {
        let D = HP(A, '>', Q, `${B} is not closed`);
        if (A.substring(Q + 2, D).trim() === B) {
          if ((G--, G === 0)) return { tagContent: A.substring(I, Q), i: D };
        }
        Q = D;
      } else if (A[Q + 1] === '?') Q = HP(A, '?>', Q + 1, 'StopNode is not closed.');
      else if (A.substr(Q + 1, 3) === '!--') Q = HP(A, '-->', Q + 3, 'StopNode is not closed.');
      else if (A.substr(Q + 1, 2) === '![') Q = HP(A, ']]>', Q, 'StopNode is not closed.') - 2;
      else {
        let D = XT1(A, Q, '>');
        if (D) {
          if ((D && D.tagName) === B && D.tagExp[D.tagExp.length - 1] !== '/') G++;
          Q = D.closeIndex;
        }
      }
}
function VT1(A, B, Q) {
  if (B && typeof A === 'string') {
    let I = A.trim();
    if (I === 'true') return !0;
    else if (I === 'false') return !1;
    else return He9(A, Q);
  } else if (LmA.isExist(A)) return A;
  else return '';
}
OmA.exports = RmA;

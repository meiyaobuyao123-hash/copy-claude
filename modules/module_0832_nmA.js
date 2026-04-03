// Module: nmA
// Params: Md5,imA

var { defineProperty: U81, getOwnPropertyDescriptor: se9, getOwnPropertyNames: re9 } = Object,
  oe9 = Object.prototype.hasOwnProperty,
  FY = (A, B) => U81(A, 'name', { value: B, configurable: !0 }),
  te9 = (A, B) => {
    for (var Q in B) U81(A, Q, { get: B[Q], enumerable: !0 });
  },
  ee9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of re9(B))
        if (!oe9.call(A, G) && G !== Q)
          U81(A, G, { get: () => B[G], enumerable: !(I = se9(B, G)) || I.enumerable });
    }
    return A;
  },
  A14 = (A) => ee9(U81({}, '__esModule', { value: !0 }), A),
  umA = {};
te9(umA, {
  _toBool: () => Q14,
  _toNum: () => I14,
  _toStr: () => B14,
  awsExpectUnion: () => D14,
  loadRestJsonErrorCode: () => W14,
  loadRestXmlErrorCode: () => X14,
  parseJsonBody: () => cmA,
  parseJsonErrorBody: () => Y14,
  parseXmlBody: () => lmA,
  parseXmlErrorBody: () => C14,
});
imA.exports = A14(umA);
var B14 = FY((A) => {
    if (A == null) return A;
    if (typeof A === 'number' || typeof A === 'bigint') {
      let B = new Error(`Received number ${A} where a string was expected.`);
      return ((B.name = 'Warning'), console.warn(B), String(A));
    }
    if (typeof A === 'boolean') {
      let B = new Error(`Received boolean ${A} where a string was expected.`);
      return ((B.name = 'Warning'), console.warn(B), String(A));
    }
    return A;
  }, '_toStr'),
  Q14 = FY((A) => {
    if (A == null) return A;
    if (typeof A === 'string') {
      let B = A.toLowerCase();
      if (A !== '' && B !== 'false' && B !== 'true') {
        let Q = new Error(`Received string "${A}" where a boolean was expected.`);
        ((Q.name = 'Warning'), console.warn(Q));
      }
      return A !== '' && B !== 'false';
    }
    return A;
  }, '_toBool'),
  I14 = FY((A) => {
    if (A == null) return A;
    if (typeof A === 'string') {
      let B = Number(A);
      if (B.toString() !== A) {
        let Q = new Error(`Received string "${A}" where a number was expected.`);
        return ((Q.name = 'Warning'), console.warn(Q), A);
      }
      return B;
    }
    return A;
  }, '_toNum'),
  G14 = w81(),
  D14 = FY((A) => {
    if (A == null) return;
    if (typeof A === 'object' && '__type' in A) delete A.__type;
    return G14.expectUnion(A);
  }, 'awsExpectUnion'),
  Z14 = w81(),
  pmA = FY((A, B) => Z14.collectBody(A, B).then((Q) => B.utf8Encoder(Q)), 'collectBodyString'),
  cmA = FY(
    (A, B) =>
      pmA(A, B).then((Q) => {
        if (Q.length)
          try {
            return JSON.parse(Q);
          } catch (I) {
            if (I?.name === 'SyntaxError')
              Object.defineProperty(I, '$responseBodyText', { value: Q });
            throw I;
          }
        return {};
      }),
    'parseJsonBody'
  ),
  Y14 = FY(async (A, B) => {
    let Q = await cmA(A, B);
    return ((Q.message = Q.message ?? Q.Message), Q);
  }, 'parseJsonErrorBody'),
  W14 = FY((A, B) => {
    let Q = FY(
        (D, Z) => Object.keys(D).find((Y) => Y.toLowerCase() === Z.toLowerCase()),
        'findKey'
      ),
      I = FY((D) => {
        let Z = D;
        if (typeof Z === 'number') Z = Z.toString();
        if (Z.indexOf(',') >= 0) Z = Z.split(',')[0];
        if (Z.indexOf(':') >= 0) Z = Z.split(':')[0];
        if (Z.indexOf('#') >= 0) Z = Z.split('#')[1];
        return Z;
      }, 'sanitizeErrorCode'),
      G = Q(A.headers, 'x-amzn-errortype');
    if (G !== void 0) return I(A.headers[G]);
    if (B.code !== void 0) return I(B.code);
    if (B.__type !== void 0) return I(B.__type);
  }, 'loadRestJsonErrorCode'),
  F14 = w81(),
  J14 = dmA(),
  lmA = FY(
    (A, B) =>
      pmA(A, B).then((Q) => {
        if (Q.length) {
          let I = new J14.XMLParser({
            attributeNamePrefix: '',
            htmlEntities: !0,
            ignoreAttributes: !1,
            ignoreDeclaration: !0,
            parseTagValue: !1,
            trimValues: !1,
            tagValueProcessor: FY(
              (W, F) =>
                F.trim() === '' &&
                F.includes(`
`)
                  ? ''
                  : void 0,
              'tagValueProcessor'
            ),
          });
          (I.addEntity('#xD', '\r'),
            I.addEntity(
              '#10',
              `
`
            ));
          let G;
          try {
            G = I.parse(Q, !0);
          } catch (W) {
            if (W && typeof W === 'object')
              Object.defineProperty(W, '$responseBodyText', { value: Q });
            throw W;
          }
          let D = '#text',
            Z = Object.keys(G)[0],
            Y = G[Z];
          if (Y[D]) ((Y[Z] = Y[D]), delete Y[D]);
          return F14.getValueFromTextNode(Y);
        }
        return {};
      }),
    'parseXmlBody'
  ),
  C14 = FY(async (A, B) => {
    let Q = await lmA(A, B);
    if (Q.Error) Q.Error.message = Q.Error.message ?? Q.Error.Message;
    return Q;
  }, 'parseXmlErrorBody'),
  X14 = FY((A, B) => {
    if (B?.Error?.Code !== void 0) return B.Error.Code;
    if (B?.Code !== void 0) return B.Code;
    if (A.statusCode == 404) return 'NotFound';
  }, 'loadRestXmlErrorCode');

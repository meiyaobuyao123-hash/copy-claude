// Module: bmA
// Params: Nd5,vmA

function ge9(A, B) {
  let Q = '';
  if (B.format && B.indentBy.length > 0)
    Q = `
`;
  return xmA(A, B, '', Q);
}
function xmA(A, B, Q, I) {
  let G = '',
    D = !1;
  for (let Z = 0; Z < A.length; Z++) {
    let Y = A[Z],
      W = he9(Y);
    if (W === void 0) continue;
    let F = '';
    if (Q.length === 0) F = W;
    else F = `${Q}.${W}`;
    if (W === B.textNodeName) {
      let K = Y[W];
      if (!me9(F, B)) ((K = B.tagValueProcessor(W, K)), (K = fmA(K, B)));
      if (D) G += I;
      ((G += K), (D = !1));
      continue;
    } else if (W === B.cdataPropName) {
      if (D) G += I;
      ((G += `<![CDATA[${Y[W][0][B.textNodeName]}]]>`), (D = !1));
      continue;
    } else if (W === B.commentPropName) {
      ((G += I + `<!--${Y[W][0][B.textNodeName]}-->`), (D = !0));
      continue;
    } else if (W[0] === '?') {
      let K = kmA(Y[':@'], B),
        U = W === '?xml' ? '' : I,
        N = Y[W][0][B.textNodeName];
      ((N = N.length !== 0 ? ' ' + N : ''), (G += U + `<${W}${N}${K}?>`), (D = !0));
      continue;
    }
    let J = I;
    if (J !== '') J += B.indentBy;
    let C = kmA(Y[':@'], B),
      X = I + `<${W}${C}`,
      V = xmA(Y[W], B, F, J);
    if (B.unpairedTags.indexOf(W) !== -1)
      if (B.suppressUnpairedNode) G += X + '>';
      else G += X + '/>';
    else if ((!V || V.length === 0) && B.suppressEmptyNode) G += X + '/>';
    else if (V && V.endsWith('>')) G += X + `>${V}${I}</${W}>`;
    else {
      if (((G += X + '>'), V && I !== '' && (V.includes('/>') || V.includes('</'))))
        G += I + B.indentBy + V + I;
      else G += V;
      G += `</${W}>`;
    }
    D = !0;
  }
  return G;
}
function he9(A) {
  let B = Object.keys(A);
  for (let Q = 0; Q < B.length; Q++) {
    let I = B[Q];
    if (!A.hasOwnProperty(I)) continue;
    if (I !== ':@') return I;
  }
}
function kmA(A, B) {
  let Q = '';
  if (A && !B.ignoreAttributes)
    for (let I in A) {
      if (!A.hasOwnProperty(I)) continue;
      let G = B.attributeValueProcessor(I, A[I]);
      if (((G = fmA(G, B)), G === !0 && B.suppressBooleanAttributes))
        Q += ` ${I.substr(B.attributeNamePrefix.length)}`;
      else Q += ` ${I.substr(B.attributeNamePrefix.length)}="${G}"`;
    }
  return Q;
}
function me9(A, B) {
  A = A.substr(0, A.length - B.textNodeName.length - 1);
  let Q = A.substr(A.lastIndexOf('.') + 1);
  for (let I in B.stopNodes) if (B.stopNodes[I] === A || B.stopNodes[I] === '*.' + Q) return !0;
  return !1;
}
function fmA(A, B) {
  if (A && A.length > 0 && B.processEntities)
    for (let Q = 0; Q < B.entities.length; Q++) {
      let I = B.entities[Q];
      A = A.replace(I.regex, I.val);
    }
  return A;
}
vmA.exports = ge9;

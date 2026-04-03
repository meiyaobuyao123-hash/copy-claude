// Module: CT1
// Params: at9

var JT1 = E81(),
  ht9 = { allowBooleanAttributes: !1, unpairedTags: [] };
at9.validate = function (A, B) {
  B = Object.assign({}, ht9, B);
  let Q = [],
    I = !1,
    G = !1;
  if (A[0] === '\uFEFF') A = A.substr(1);
  for (let D = 0; D < A.length; D++)
    if (A[D] === '<' && A[D + 1] === '?') {
      if (((D += 2), (D = XmA(A, D)), D.err)) return D;
    } else if (A[D] === '<') {
      let Z = D;
      if ((D++, A[D] === '!')) {
        D = VmA(A, D);
        continue;
      } else {
        let Y = !1;
        if (A[D] === '/') ((Y = !0), D++);
        let W = '';
        for (
          ;
          D < A.length &&
          A[D] !== '>' &&
          A[D] !== ' ' &&
          A[D] !== '\t' &&
          A[D] !==
            `
` &&
          A[D] !== '\r';
          D++
        )
          W += A[D];
        if (((W = W.trim()), W[W.length - 1] === '/')) ((W = W.substring(0, W.length - 1)), D--);
        if (!nt9(W)) {
          let C;
          if (W.trim().length === 0) C = "Invalid space after '<'.";
          else C = "Tag '" + W + "' is an invalid name.";
          return ZQ('InvalidTag', C, BZ(A, D));
        }
        let F = ut9(A, D);
        if (F === !1)
          return ZQ('InvalidAttr', "Attributes for '" + W + "' have open quote.", BZ(A, D));
        let J = F.value;
        if (((D = F.index), J[J.length - 1] === '/')) {
          let C = D - J.length;
          J = J.substring(0, J.length - 1);
          let X = KmA(J, B);
          if (X === !0) I = !0;
          else return ZQ(X.err.code, X.err.msg, BZ(A, C + X.err.line));
        } else if (Y)
          if (!F.tagClosed)
            return ZQ(
              'InvalidTag',
              "Closing tag '" + W + "' doesn't have proper closing.",
              BZ(A, D)
            );
          else if (J.trim().length > 0)
            return ZQ(
              'InvalidTag',
              "Closing tag '" + W + "' can't have attributes or invalid starting.",
              BZ(A, Z)
            );
          else if (Q.length === 0)
            return ZQ('InvalidTag', "Closing tag '" + W + "' has not been opened.", BZ(A, Z));
          else {
            let C = Q.pop();
            if (W !== C.tagName) {
              let X = BZ(A, C.tagStartPos);
              return ZQ(
                'InvalidTag',
                "Expected closing tag '" +
                  C.tagName +
                  "' (opened in line " +
                  X.line +
                  ', col ' +
                  X.col +
                  ") instead of closing tag '" +
                  W +
                  "'.",
                BZ(A, Z)
              );
            }
            if (Q.length == 0) G = !0;
          }
        else {
          let C = KmA(J, B);
          if (C !== !0) return ZQ(C.err.code, C.err.msg, BZ(A, D - J.length + C.err.line));
          if (G === !0) return ZQ('InvalidXml', 'Multiple possible root nodes found.', BZ(A, D));
          else if (B.unpairedTags.indexOf(W) !== -1);
          else Q.push({ tagName: W, tagStartPos: Z });
          I = !0;
        }
        for (D++; D < A.length; D++)
          if (A[D] === '<')
            if (A[D + 1] === '!') {
              (D++, (D = VmA(A, D)));
              continue;
            } else if (A[D + 1] === '?') {
              if (((D = XmA(A, ++D)), D.err)) return D;
            } else break;
          else if (A[D] === '&') {
            let C = lt9(A, D);
            if (C == -1) return ZQ('InvalidChar', "char '&' is not expected.", BZ(A, D));
            D = C;
          } else if (G === !0 && !CmA(A[D]))
            return ZQ('InvalidXml', 'Extra text at the end', BZ(A, D));
        if (A[D] === '<') D--;
      }
    } else {
      if (CmA(A[D])) continue;
      return ZQ('InvalidChar', "char '" + A[D] + "' is not expected.", BZ(A, D));
    }
  if (!I) return ZQ('InvalidXml', 'Start tag expected.', 1);
  else if (Q.length == 1)
    return ZQ('InvalidTag', "Unclosed tag '" + Q[0].tagName + "'.", BZ(A, Q[0].tagStartPos));
  else if (Q.length > 0)
    return ZQ(
      'InvalidXml',
      "Invalid '" +
        JSON.stringify(
          Q.map((D) => D.tagName),
          null,
          4
        ).replace(/\r?\n/g, '') +
        "' found.",
      { line: 1, col: 1 }
    );
  return !0;
};
function CmA(A) {
  return (
    A === ' ' ||
    A === '\t' ||
    A ===
      `
` ||
    A === '\r'
  );
}
function XmA(A, B) {
  let Q = B;
  for (; B < A.length; B++)
    if (A[B] == '?' || A[B] == ' ') {
      let I = A.substr(Q, B - Q);
      if (B > 5 && I === 'xml')
        return ZQ(
          'InvalidXml',
          'XML declaration allowed only at the start of the document.',
          BZ(A, B)
        );
      else if (A[B] == '?' && A[B + 1] == '>') {
        B++;
        break;
      } else continue;
    }
  return B;
}
function VmA(A, B) {
  if (A.length > B + 5 && A[B + 1] === '-' && A[B + 2] === '-') {
    for (B += 3; B < A.length; B++)
      if (A[B] === '-' && A[B + 1] === '-' && A[B + 2] === '>') {
        B += 2;
        break;
      }
  } else if (
    A.length > B + 8 &&
    A[B + 1] === 'D' &&
    A[B + 2] === 'O' &&
    A[B + 3] === 'C' &&
    A[B + 4] === 'T' &&
    A[B + 5] === 'Y' &&
    A[B + 6] === 'P' &&
    A[B + 7] === 'E'
  ) {
    let Q = 1;
    for (B += 8; B < A.length; B++)
      if (A[B] === '<') Q++;
      else if (A[B] === '>') {
        if ((Q--, Q === 0)) break;
      }
  } else if (
    A.length > B + 9 &&
    A[B + 1] === '[' &&
    A[B + 2] === 'C' &&
    A[B + 3] === 'D' &&
    A[B + 4] === 'A' &&
    A[B + 5] === 'T' &&
    A[B + 6] === 'A' &&
    A[B + 7] === '['
  ) {
    for (B += 8; B < A.length; B++)
      if (A[B] === ']' && A[B + 1] === ']' && A[B + 2] === '>') {
        B += 2;
        break;
      }
  }
  return B;
}
var mt9 = '"',
  dt9 = "'";
function ut9(A, B) {
  let Q = '',
    I = '',
    G = !1;
  for (; B < A.length; B++) {
    if (A[B] === mt9 || A[B] === dt9)
      if (I === '') I = A[B];
      else if (I !== A[B]);
      else I = '';
    else if (A[B] === '>') {
      if (I === '') {
        G = !0;
        break;
      }
    }
    Q += A[B];
  }
  if (I !== '') return !1;
  return { value: Q, index: B, tagClosed: G };
}
var pt9 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, 'g');
function KmA(A, B) {
  let Q = JT1.getAllMatches(A, pt9),
    I = {};
  for (let G = 0; G < Q.length; G++) {
    if (Q[G][1].length === 0)
      return ZQ('InvalidAttr', "Attribute '" + Q[G][2] + "' has no space in starting.", Ml(Q[G]));
    else if (Q[G][3] !== void 0 && Q[G][4] === void 0)
      return ZQ('InvalidAttr', "Attribute '" + Q[G][2] + "' is without value.", Ml(Q[G]));
    else if (Q[G][3] === void 0 && !B.allowBooleanAttributes)
      return ZQ('InvalidAttr', "boolean attribute '" + Q[G][2] + "' is not allowed.", Ml(Q[G]));
    let D = Q[G][2];
    if (!it9(D)) return ZQ('InvalidAttr', "Attribute '" + D + "' is an invalid name.", Ml(Q[G]));
    if (!I.hasOwnProperty(D)) I[D] = 1;
    else return ZQ('InvalidAttr', "Attribute '" + D + "' is repeated.", Ml(Q[G]));
  }
  return !0;
}
function ct9(A, B) {
  let Q = /\d/;
  if (A[B] === 'x') (B++, (Q = /[\da-fA-F]/));
  for (; B < A.length; B++) {
    if (A[B] === ';') return B;
    if (!A[B].match(Q)) break;
  }
  return -1;
}
function lt9(A, B) {
  if ((B++, A[B] === ';')) return -1;
  if (A[B] === '#') return (B++, ct9(A, B));
  let Q = 0;
  for (; B < A.length; B++, Q++) {
    if (A[B].match(/\w/) && Q < 20) continue;
    if (A[B] === ';') break;
    return -1;
  }
  return B;
}
function ZQ(A, B, Q) {
  return { err: { code: A, msg: B, line: Q.line || Q, col: Q.col } };
}
function it9(A) {
  return JT1.isName(A);
}
function nt9(A) {
  return JT1.isName(A);
}
function BZ(A, B) {
  let Q = A.substring(0, B).split(/\r?\n/);
  return { line: Q.length, col: Q[Q.length - 1].length + 1 };
}
function Ml(A) {
  return A.startIndex + A[1].length;
}

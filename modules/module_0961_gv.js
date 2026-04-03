// Module: gv
// Params: ss5,_Q1

var { isUtf8: t50 } = D1('buffer'),
  { hasBlob: eN4 } = wU(),
  A$4 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
  ];
function B$4(A) {
  return (
    (A >= 1000 && A <= 1014 && A !== 1004 && A !== 1005 && A !== 1006) || (A >= 3000 && A <= 4999)
  );
}
function Uy1(A) {
  let B = A.length,
    Q = 0;
  while (Q < B)
    if ((A[Q] & 128) === 0) Q++;
    else if ((A[Q] & 224) === 192) {
      if (Q + 1 === B || (A[Q + 1] & 192) !== 128 || (A[Q] & 254) === 192) return !1;
      Q += 2;
    } else if ((A[Q] & 240) === 224) {
      if (
        Q + 2 >= B ||
        (A[Q + 1] & 192) !== 128 ||
        (A[Q + 2] & 192) !== 128 ||
        (A[Q] === 224 && (A[Q + 1] & 224) === 128) ||
        (A[Q] === 237 && (A[Q + 1] & 224) === 160)
      )
        return !1;
      Q += 3;
    } else if ((A[Q] & 248) === 240) {
      if (
        Q + 3 >= B ||
        (A[Q + 1] & 192) !== 128 ||
        (A[Q + 2] & 192) !== 128 ||
        (A[Q + 3] & 192) !== 128 ||
        (A[Q] === 240 && (A[Q + 1] & 240) === 128) ||
        (A[Q] === 244 && A[Q + 1] > 143) ||
        A[Q] > 244
      )
        return !1;
      Q += 4;
    } else return !1;
  return !0;
}
function Q$4(A) {
  return (
    eN4 &&
    typeof A === 'object' &&
    typeof A.arrayBuffer === 'function' &&
    typeof A.type === 'string' &&
    typeof A.stream === 'function' &&
    (A[Symbol.toStringTag] === 'Blob' || A[Symbol.toStringTag] === 'File')
  );
}
_Q1.exports = { isBlob: Q$4, isValidStatusCode: B$4, isValidUTF8: Uy1, tokenChars: A$4 };
if (t50)
  _Q1.exports.isValidUTF8 = function (A) {
    return A.length < 24 ? Uy1(A) : t50(A);
  };
else if (!process.env.WS_NO_UTF_8_VALIDATE)
  try {
    let A = (() => {
      throw new Error('Cannot require module ' + 'utf-8-validate');
    })();
    _Q1.exports.isValidUTF8 = function (B) {
      return B.length < 32 ? Uy1(B) : A(B);
    };
  } catch (A) {}

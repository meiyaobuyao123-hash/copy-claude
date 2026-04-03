// Module: $mA
// Params: Hd5,NmA

var Ae9 = E81();
function Be9(A, B) {
  let Q = {};
  if (
    A[B + 3] === 'O' &&
    A[B + 4] === 'C' &&
    A[B + 5] === 'T' &&
    A[B + 6] === 'Y' &&
    A[B + 7] === 'P' &&
    A[B + 8] === 'E'
  ) {
    B = B + 9;
    let I = 1,
      G = !1,
      D = !1,
      Z = '';
    for (; B < A.length; B++)
      if (A[B] === '<' && !D) {
        if (G && Ge9(A, B)) {
          if (((B += 7), ([entityName, val, B] = Qe9(A, B + 1)), val.indexOf('&') === -1))
            Q[We9(entityName)] = { regx: RegExp(`&${entityName};`, 'g'), val };
        } else if (G && De9(A, B)) B += 8;
        else if (G && Ze9(A, B)) B += 8;
        else if (G && Ye9(A, B)) B += 9;
        else if (Ie9) D = !0;
        else throw new Error('Invalid DOCTYPE');
        (I++, (Z = ''));
      } else if (A[B] === '>') {
        if (D) {
          if (A[B - 1] === '-' && A[B - 2] === '-') ((D = !1), I--);
        } else I--;
        if (I === 0) break;
      } else if (A[B] === '[') G = !0;
      else Z += A[B];
    if (I !== 0) throw new Error('Unclosed DOCTYPE');
  } else throw new Error('Invalid Tag instead of DOCTYPE');
  return { entities: Q, i: B };
}
function Qe9(A, B) {
  let Q = '';
  for (; B < A.length && A[B] !== "'" && A[B] !== '"'; B++) Q += A[B];
  if (((Q = Q.trim()), Q.indexOf(' ') !== -1))
    throw new Error('External entites are not supported');
  let I = A[B++],
    G = '';
  for (; B < A.length && A[B] !== I; B++) G += A[B];
  return [Q, G, B];
}
function Ie9(A, B) {
  if (A[B + 1] === '!' && A[B + 2] === '-' && A[B + 3] === '-') return !0;
  return !1;
}
function Ge9(A, B) {
  if (
    A[B + 1] === '!' &&
    A[B + 2] === 'E' &&
    A[B + 3] === 'N' &&
    A[B + 4] === 'T' &&
    A[B + 5] === 'I' &&
    A[B + 6] === 'T' &&
    A[B + 7] === 'Y'
  )
    return !0;
  return !1;
}
function De9(A, B) {
  if (
    A[B + 1] === '!' &&
    A[B + 2] === 'E' &&
    A[B + 3] === 'L' &&
    A[B + 4] === 'E' &&
    A[B + 5] === 'M' &&
    A[B + 6] === 'E' &&
    A[B + 7] === 'N' &&
    A[B + 8] === 'T'
  )
    return !0;
  return !1;
}
function Ze9(A, B) {
  if (
    A[B + 1] === '!' &&
    A[B + 2] === 'A' &&
    A[B + 3] === 'T' &&
    A[B + 4] === 'T' &&
    A[B + 5] === 'L' &&
    A[B + 6] === 'I' &&
    A[B + 7] === 'S' &&
    A[B + 8] === 'T'
  )
    return !0;
  return !1;
}
function Ye9(A, B) {
  if (
    A[B + 1] === '!' &&
    A[B + 2] === 'N' &&
    A[B + 3] === 'O' &&
    A[B + 4] === 'T' &&
    A[B + 5] === 'A' &&
    A[B + 6] === 'T' &&
    A[B + 7] === 'I' &&
    A[B + 8] === 'O' &&
    A[B + 9] === 'N'
  )
    return !0;
  return !1;
}
function We9(A) {
  if (Ae9.isName(A)) return A;
  else throw new Error(`Invalid entity name ${A}`);
}
NmA.exports = Be9;

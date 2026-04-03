// Module: Gf1
// Params: sj4

var BL = IG1();
function mj4(A) {
  var B = BL.spaceIndex(A),
    Q;
  if (B === -1) Q = A.slice(1, -1);
  else Q = A.slice(1, B + 1);
  if (((Q = BL.trim(Q).toLowerCase()), Q.slice(0, 1) === '/')) Q = Q.slice(1);
  if (Q.slice(-1) === '/') Q = Q.slice(0, -1);
  return Q;
}
function dj4(A) {
  return A.slice(0, 2) === '</';
}
function uj4(A, B, Q) {
  var I = '',
    G = 0,
    D = !1,
    Z = !1,
    Y = 0,
    W = A.length,
    F = '',
    J = '';
  A: for (Y = 0; Y < W; Y++) {
    var C = A.charAt(Y);
    if (D === !1) {
      if (C === '<') {
        D = Y;
        continue;
      }
    } else if (Z === !1) {
      if (C === '<') {
        ((I += Q(A.slice(G, Y))), (D = Y), (G = Y));
        continue;
      }
      if (C === '>' || Y === W - 1) {
        ((I += Q(A.slice(G, D))),
          (J = A.slice(D, Y + 1)),
          (F = mj4(J)),
          (I += B(D, I.length, F, J, dj4(J))),
          (G = Y + 1),
          (D = !1));
        continue;
      }
      if (C === '"' || C === "'") {
        var X = 1,
          V = A.charAt(Y - X);
        while (V.trim() === '' || V === '=') {
          if (V === '=') {
            Z = C;
            continue A;
          }
          V = A.charAt(Y - ++X);
        }
      }
    } else if (C === Z) {
      Z = !1;
      continue;
    }
  }
  if (G < W) I += Q(A.substr(G));
  return I;
}
var pj4 = /[^a-zA-Z0-9\\_:.-]/gim;
function cj4(A, B) {
  var Q = 0,
    I = 0,
    G = [],
    D = !1,
    Z = A.length;
  function Y(X, V) {
    if (((X = BL.trim(X)), (X = X.replace(pj4, '').toLowerCase()), X.length < 1)) return;
    var K = B(X, V || '');
    if (K) G.push(K);
  }
  for (var W = 0; W < Z; W++) {
    var F = A.charAt(W),
      J,
      C;
    if (D === !1 && F === '=') {
      ((D = A.slice(Q, W)),
        (Q = W + 1),
        (I = A.charAt(Q) === '"' || A.charAt(Q) === "'" ? Q : ij4(A, W + 1)));
      continue;
    }
    if (D !== !1) {
      if (W === I)
        if (((C = A.indexOf(F, W + 1)), C === -1)) break;
        else {
          ((J = BL.trim(A.slice(I + 1, C))), Y(D, J), (D = !1), (W = C), (Q = W + 1));
          continue;
        }
    }
    if (/\s|\n|\t/.test(F))
      if (((A = A.replace(/\s|\n|\t/g, ' ')), D === !1))
        if (((C = lj4(A, W)), C === -1)) {
          ((J = BL.trim(A.slice(Q, W))), Y(J), (D = !1), (Q = W + 1));
          continue;
        } else {
          W = C - 1;
          continue;
        }
      else if (((C = nj4(A, W - 1)), C === -1)) {
        ((J = BL.trim(A.slice(Q, W))), (J = FY0(J)), Y(D, J), (D = !1), (Q = W + 1));
        continue;
      } else continue;
  }
  if (Q < A.length)
    if (D === !1) Y(A.slice(Q));
    else Y(D, FY0(BL.trim(A.slice(Q))));
  return BL.trim(G.join(' '));
}
function lj4(A, B) {
  for (; B < A.length; B++) {
    var Q = A[B];
    if (Q === ' ') continue;
    if (Q === '=') return B;
    return -1;
  }
}
function ij4(A, B) {
  for (; B < A.length; B++) {
    var Q = A[B];
    if (Q === ' ') continue;
    if (Q === "'" || Q === '"') return B;
    return -1;
  }
}
function nj4(A, B) {
  for (; B > 0; B--) {
    var Q = A[B];
    if (Q === ' ') continue;
    if (Q === '=') return B;
    return -1;
  }
}
function aj4(A) {
  if ((A[0] === '"' && A[A.length - 1] === '"') || (A[0] === "'" && A[A.length - 1] === "'"))
    return !0;
  else return !1;
}
function FY0(A) {
  if (aj4(A)) return A.substr(1, A.length - 2);
  else return A;
}
sj4.parseTag = uj4;
sj4.parseAttr = cj4;

// Module: P60
// Params: iU4

function rj1(A, B) {
  var Q = A.length;
  A.push(B);
  A: for (; 0 < Q; ) {
    var I = (Q - 1) >>> 1,
      G = A[I];
    if (0 < m31(G, B)) ((A[I] = B), (A[Q] = G), (Q = I));
    else break A;
  }
}
function tX(A) {
  return A.length === 0 ? null : A[0];
}
function c31(A) {
  if (A.length === 0) return null;
  var B = A[0],
    Q = A.pop();
  if (Q !== B) {
    A[0] = Q;
    A: for (var I = 0, G = A.length, D = G >>> 1; I < D; ) {
      var Z = 2 * (I + 1) - 1,
        Y = A[Z],
        W = Z + 1,
        F = A[W];
      if (0 > m31(Y, Q))
        W < G && 0 > m31(F, Y)
          ? ((A[I] = F), (A[W] = Q), (I = W))
          : ((A[I] = Y), (A[Z] = Q), (I = Z));
      else if (W < G && 0 > m31(F, Q)) ((A[I] = F), (A[W] = Q), (I = W));
      else break A;
    }
  }
  return B;
}
function m31(A, B) {
  var Q = A.sortIndex - B.sortIndex;
  return Q !== 0 ? Q : A.id - B.id;
}
if (typeof performance === 'object' && typeof performance.now === 'function')
  ((oj1 = performance),
    (iU4.unstable_now = function () {
      return oj1.now();
    }));
else
  ((d31 = Date),
    (tj1 = d31.now()),
    (iU4.unstable_now = function () {
      return d31.now() - tj1;
    }));
var oj1,
  d31,
  tj1,
  Az = [],
  SM = [],
  lU4 = 1,
  fJ = null,
  sG = 3,
  l31 = !1,
  uP = !1,
  Si = !1,
  M60 = typeof setTimeout === 'function' ? setTimeout : null,
  L60 = typeof clearTimeout === 'function' ? clearTimeout : null,
  q60 = typeof setImmediate !== 'undefined' ? setImmediate : null;
typeof navigator !== 'undefined' &&
  navigator.scheduling !== void 0 &&
  navigator.scheduling.isInputPending !== void 0 &&
  navigator.scheduling.isInputPending.bind(navigator.scheduling);
function ej1(A) {
  for (var B = tX(SM); B !== null; ) {
    if (B.callback === null) c31(SM);
    else if (B.startTime <= A) (c31(SM), (B.sortIndex = B.expirationTime), rj1(Az, B));
    else break;
    B = tX(SM);
  }
}
function By1(A) {
  if (((Si = !1), ej1(A), !uP))
    if (tX(Az) !== null) ((uP = !0), Iy1(Qy1));
    else {
      var B = tX(SM);
      B !== null && Gy1(By1, B.startTime - A);
    }
}
function Qy1(A, B) {
  ((uP = !1), Si && ((Si = !1), L60(_i), (_i = -1)), (l31 = !0));
  var Q = sG;
  try {
    ej1(B);
    for (fJ = tX(Az); fJ !== null && (!(fJ.expirationTime > B) || (A && !T60())); ) {
      var I = fJ.callback;
      if (typeof I === 'function') {
        ((fJ.callback = null), (sG = fJ.priorityLevel));
        var G = I(fJ.expirationTime <= B);
        ((B = iU4.unstable_now()),
          typeof G === 'function' ? (fJ.callback = G) : fJ === tX(Az) && c31(Az),
          ej1(B));
      } else c31(Az);
      fJ = tX(Az);
    }
    if (fJ !== null) var D = !0;
    else {
      var Z = tX(SM);
      (Z !== null && Gy1(By1, Z.startTime - B), (D = !1));
    }
    return D;
  } finally {
    ((fJ = null), (sG = Q), (l31 = !1));
  }
}
var i31 = !1,
  u31 = null,
  _i = -1,
  R60 = 5,
  O60 = -1;
function T60() {
  return iU4.unstable_now() - O60 < R60 ? !1 : !0;
}
function sj1() {
  if (u31 !== null) {
    var A = iU4.unstable_now();
    O60 = A;
    var B = !0;
    try {
      B = u31(!0, A);
    } finally {
      B ? Pi() : ((i31 = !1), (u31 = null));
    }
  } else i31 = !1;
}
var Pi;
if (typeof q60 === 'function')
  Pi = function () {
    q60(sj1);
  };
else if (typeof MessageChannel !== 'undefined')
  ((p31 = new MessageChannel()),
    (Ay1 = p31.port2),
    (p31.port1.onmessage = sj1),
    (Pi = function () {
      Ay1.postMessage(null);
    }));
else
  Pi = function () {
    M60(sj1, 0);
  };
var p31, Ay1;
function Iy1(A) {
  ((u31 = A), i31 || ((i31 = !0), Pi()));
}
function Gy1(A, B) {
  _i = M60(function () {
    A(iU4.unstable_now());
  }, B);
}
iU4.unstable_IdlePriority = 5;
iU4.unstable_ImmediatePriority = 1;
iU4.unstable_LowPriority = 4;
iU4.unstable_NormalPriority = 3;
iU4.unstable_Profiling = null;
iU4.unstable_UserBlockingPriority = 2;
iU4.unstable_cancelCallback = function (A) {
  A.callback = null;
};
iU4.unstable_continueExecution = function () {
  uP || l31 || ((uP = !0), Iy1(Qy1));
};
iU4.unstable_forceFrameRate = function (A) {
  0 > A || 125 < A
    ? console.error(
        'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
      )
    : (R60 = 0 < A ? Math.floor(1000 / A) : 5);
};
iU4.unstable_getCurrentPriorityLevel = function () {
  return sG;
};
iU4.unstable_getFirstCallbackNode = function () {
  return tX(Az);
};
iU4.unstable_next = function (A) {
  switch (sG) {
    case 1:
    case 2:
    case 3:
      var B = 3;
      break;
    default:
      B = sG;
  }
  var Q = sG;
  sG = B;
  try {
    return A();
  } finally {
    sG = Q;
  }
};
iU4.unstable_pauseExecution = function () {};
iU4.unstable_requestPaint = function () {};
iU4.unstable_runWithPriority = function (A, B) {
  switch (A) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      A = 3;
  }
  var Q = sG;
  sG = A;
  try {
    return B();
  } finally {
    sG = Q;
  }
};
iU4.unstable_scheduleCallback = function (A, B, Q) {
  var I = iU4.unstable_now();
  switch (
    (typeof Q === 'object' && Q !== null
      ? ((Q = Q.delay), (Q = typeof Q === 'number' && 0 < Q ? I + Q : I))
      : (Q = I),
    A)
  ) {
    case 1:
      var G = -1;
      break;
    case 2:
      G = 250;
      break;
    case 5:
      G = 1073741823;
      break;
    case 4:
      G = 1e4;
      break;
    default:
      G = 5000;
  }
  return (
    (G = Q + G),
    (A = {
      id: lU4++,
      callback: B,
      priorityLevel: A,
      startTime: Q,
      expirationTime: G,
      sortIndex: -1,
    }),
    Q > I
      ? ((A.sortIndex = Q),
        rj1(SM, A),
        tX(Az) === null && A === tX(SM) && (Si ? (L60(_i), (_i = -1)) : (Si = !0), Gy1(By1, Q - I)))
      : ((A.sortIndex = G), rj1(Az, A), uP || l31 || ((uP = !0), Iy1(Qy1))),
    A
  );
};
iU4.unstable_shouldYield = T60;
iU4.unstable_wrapCallback = function (A) {
  var B = sG;
  return function () {
    var Q = sG;
    sG = B;
    try {
      return A.apply(this, arguments);
    } finally {
      sG = Q;
    }
  };
};

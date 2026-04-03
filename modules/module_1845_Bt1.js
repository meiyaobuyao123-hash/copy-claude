// Module: Bt1
// Params: cs8,sw2

var iw2 = lw2();
function NK1(A) {
  return A ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g;
}
function _w(A) {
  let B = NK1();
  return ('' + A)
    .replace(B, '')
    .split(
      `
`
    )
    .reduce(function (G, D) {
      return iw2(D) > G ? iw2(D) : G;
    }, 0);
}
function xe(A, B) {
  return Array(B + 1).join(A);
}
function HB5(A, B, Q, I) {
  let G = _w(A);
  if (B + 1 >= G) {
    let D = B - G;
    switch (I) {
      case 'right': {
        A = xe(Q, D) + A;
        break;
      }
      case 'center': {
        let Z = Math.ceil(D / 2),
          Y = D - Z;
        A = xe(Q, Y) + A + xe(Q, Z);
        break;
      }
      default: {
        A = A + xe(Q, D);
        break;
      }
    }
  }
  return A;
}
var Rd = {};
function fe(A, B, Q) {
  ((B = '\x1B[' + B + 'm'),
    (Q = '\x1B[' + Q + 'm'),
    (Rd[B] = { set: A, to: !0 }),
    (Rd[Q] = { set: A, to: !1 }),
    (Rd[A] = { on: B, off: Q }));
}
fe('bold', 1, 22);
fe('italics', 3, 23);
fe('underline', 4, 24);
fe('inverse', 7, 27);
fe('strikethrough', 9, 29);
function nw2(A, B) {
  let Q = B[1] ? parseInt(B[1].split(';')[0]) : 0;
  if ((Q >= 30 && Q <= 39) || (Q >= 90 && Q <= 97)) {
    A.lastForegroundAdded = B[0];
    return;
  }
  if ((Q >= 40 && Q <= 49) || (Q >= 100 && Q <= 107)) {
    A.lastBackgroundAdded = B[0];
    return;
  }
  if (Q === 0) {
    for (let G in A) if (Object.prototype.hasOwnProperty.call(A, G)) delete A[G];
    return;
  }
  let I = Rd[B[0]];
  if (I) A[I.set] = I.to;
}
function zB5(A) {
  let B = NK1(!0),
    Q = B.exec(A),
    I = {};
  while (Q !== null) (nw2(I, Q), (Q = B.exec(A)));
  return I;
}
function aw2(A, B) {
  let { lastBackgroundAdded: Q, lastForegroundAdded: I } = A;
  if (
    (delete A.lastBackgroundAdded,
    delete A.lastForegroundAdded,
    Object.keys(A).forEach(function (G) {
      if (A[G]) B += Rd[G].off;
    }),
    Q && Q != '\x1B[49m')
  )
    B += '\x1B[49m';
  if (I && I != '\x1B[39m') B += '\x1B[39m';
  return B;
}
function wB5(A, B) {
  let { lastBackgroundAdded: Q, lastForegroundAdded: I } = A;
  if (
    (delete A.lastBackgroundAdded,
    delete A.lastForegroundAdded,
    Object.keys(A).forEach(function (G) {
      if (A[G]) B = Rd[G].on + B;
    }),
    Q && Q != '\x1B[49m')
  )
    B = Q + B;
  if (I && I != '\x1B[39m') B = I + B;
  return B;
}
function EB5(A, B) {
  if (A.length === _w(A)) return A.substr(0, B);
  while (_w(A) > B) A = A.slice(0, -1);
  return A;
}
function UB5(A, B) {
  let Q = NK1(!0),
    I = A.split(NK1()),
    G = 0,
    D = 0,
    Z = '',
    Y,
    W = {};
  while (D < B) {
    Y = Q.exec(A);
    let F = I[G];
    if ((G++, D + _w(F) > B)) F = EB5(F, B - D);
    if (((Z += F), (D += _w(F)), D < B)) {
      if (!Y) break;
      ((Z += Y[0]), nw2(W, Y));
    }
  }
  return aw2(W, Z);
}
function NB5(A, B, Q) {
  if (((Q = Q || '…'), _w(A) <= B)) return A;
  B -= _w(Q);
  let G = UB5(A, B);
  G += Q;
  let D = '\x1B]8;;\x07';
  if (A.includes(D) && !G.includes(D)) G += D;
  return G;
}
function $B5() {
  return {
    chars: {
      top: '─',
      'top-mid': '┬',
      'top-left': '┌',
      'top-right': '┐',
      bottom: '─',
      'bottom-mid': '┴',
      'bottom-left': '└',
      'bottom-right': '┘',
      left: '│',
      'left-mid': '├',
      mid: '─',
      'mid-mid': '┼',
      right: '│',
      'right-mid': '┤',
      middle: '│',
    },
    truncate: '…',
    colWidths: [],
    rowHeights: [],
    colAligns: [],
    rowAligns: [],
    style: { 'padding-left': 1, 'padding-right': 1, head: ['red'], border: ['grey'], compact: !1 },
    head: [],
  };
}
function qB5(A, B) {
  ((A = A || {}), (B = B || $B5()));
  let Q = Object.assign({}, B, A);
  return (
    (Q.chars = Object.assign({}, B.chars, A.chars)),
    (Q.style = Object.assign({}, B.style, A.style)),
    Q
  );
}
function MB5(A, B) {
  let Q = [],
    I = B.split(/(\s+)/g),
    G = [],
    D = 0,
    Z;
  for (let Y = 0; Y < I.length; Y += 2) {
    let W = I[Y],
      F = D + _w(W);
    if (D > 0 && Z) F += Z.length;
    if (F > A) {
      if (D !== 0) Q.push(G.join(''));
      ((G = [W]), (D = _w(W)));
    } else (G.push(Z || '', W), (D = F));
    Z = I[Y + 1];
  }
  if (D) Q.push(G.join(''));
  return Q;
}
function LB5(A, B) {
  let Q = [],
    I = '';
  function G(Z, Y) {
    if (I.length && Y) I += Y;
    I += Z;
    while (I.length > A) (Q.push(I.slice(0, A)), (I = I.slice(A)));
  }
  let D = B.split(/(\s+)/g);
  for (let Z = 0; Z < D.length; Z += 2) G(D[Z], Z && D[Z - 1]);
  if (I.length) Q.push(I);
  return Q;
}
function RB5(A, B, Q = !0) {
  let I = [];
  B = B.split(`
`);
  let G = Q ? MB5 : LB5;
  for (let D = 0; D < B.length; D++) I.push.apply(I, G(A, B[D]));
  return I;
}
function OB5(A) {
  let B = {},
    Q = [];
  for (let I = 0; I < A.length; I++) {
    let G = wB5(B, A[I]);
    B = zB5(G);
    let D = Object.assign({}, B);
    Q.push(aw2(D, G));
  }
  return Q;
}
function TB5(A, B) {
  return ['\x1B]', '8', ';', ';', A || B, '\x07', B, '\x1B]', '8', ';', ';', '\x07'].join('');
}
sw2.exports = {
  strlen: _w,
  repeat: xe,
  pad: HB5,
  truncate: NB5,
  mergeOptions: qB5,
  wordWrap: RB5,
  colorizeLines: OB5,
  hyperlink: TB5,
};

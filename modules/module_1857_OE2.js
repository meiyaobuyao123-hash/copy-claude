// Module: OE2
// Params: Ir8,MK1

var { info: mB5, debug: RE2 } = UK1(),
  TF = Bt1();
class ve {
  constructor(A) {
    (this.setOptions(A), (this.x = null), (this.y = null));
  }
  setOptions(A) {
    if (['boolean', 'number', 'bigint', 'string'].indexOf(typeof A) !== -1) A = { content: '' + A };
    ((A = A || {}), (this.options = A));
    let B = A.content;
    if (['boolean', 'number', 'bigint', 'string'].indexOf(typeof B) !== -1)
      this.content = String(B);
    else if (!B) this.content = this.options.href || '';
    else throw new Error('Content needs to be a primitive, got: ' + typeof B);
    if (((this.colSpan = A.colSpan || 1), (this.rowSpan = A.rowSpan || 1), this.options.href))
      Object.defineProperty(this, 'href', {
        get() {
          return this.options.href;
        },
      });
  }
  mergeTableOptions(A, B) {
    this.cells = B;
    let Q = this.options.chars || {},
      I = A.chars,
      G = (this.chars = {});
    (uB5.forEach(function (Y) {
      Gt1(Q, I, Y, G);
    }),
      (this.truncate = this.options.truncate || A.truncate));
    let D = (this.options.style = this.options.style || {}),
      Z = A.style;
    (Gt1(D, Z, 'padding-left', this),
      Gt1(D, Z, 'padding-right', this),
      (this.head = D.head || Z.head),
      (this.border = D.border || Z.border),
      (this.fixedWidth = A.colWidths[this.x]),
      (this.lines = this.computeLines(A)),
      (this.desiredWidth = TF.strlen(this.content) + this.paddingLeft + this.paddingRight),
      (this.desiredHeight = this.lines.length));
  }
  computeLines(A) {
    let B = A.wordWrap || A.textWrap,
      { wordWrap: Q = B } = this.options;
    if (this.fixedWidth && Q) {
      if (((this.fixedWidth -= this.paddingLeft + this.paddingRight), this.colSpan)) {
        let D = 1;
        while (D < this.colSpan) ((this.fixedWidth += A.colWidths[this.x + D]), D++);
      }
      let { wrapOnWordBoundary: I = !0 } = A,
        { wrapOnWordBoundary: G = I } = this.options;
      return this.wrapLines(TF.wordWrap(this.fixedWidth, this.content, G));
    }
    return this.wrapLines(
      this.content.split(`
`)
    );
  }
  wrapLines(A) {
    let B = TF.colorizeLines(A);
    if (this.href) return B.map((Q) => TF.hyperlink(this.href, Q));
    return B;
  }
  init(A) {
    let B = this.x,
      Q = this.y;
    ((this.widths = A.colWidths.slice(B, B + this.colSpan)),
      (this.heights = A.rowHeights.slice(Q, Q + this.rowSpan)),
      (this.width = this.widths.reduce(LE2, -1)),
      (this.height = this.heights.reduce(LE2, -1)),
      (this.hAlign = this.options.hAlign || A.colAligns[B]),
      (this.vAlign = this.options.vAlign || A.rowAligns[Q]),
      (this.drawRight = B + this.colSpan == A.colWidths.length));
  }
  draw(A, B) {
    if (A == 'top') return this.drawTop(this.drawRight);
    if (A == 'bottom') return this.drawBottom(this.drawRight);
    let Q = TF.truncate(this.content, 10, this.truncate);
    if (!A) mB5(`${this.y}-${this.x}: ${this.rowSpan - A}x${this.colSpan} Cell ${Q}`);
    let I = Math.max(this.height - this.lines.length, 0),
      G;
    switch (this.vAlign) {
      case 'center':
        G = Math.ceil(I / 2);
        break;
      case 'bottom':
        G = I;
        break;
      default:
        G = 0;
    }
    if (A < G || A >= G + this.lines.length) return this.drawEmpty(this.drawRight, B);
    let D = this.lines.length > this.height && A + 1 >= this.height;
    return this.drawLine(A - G, this.drawRight, D, B);
  }
  drawTop(A) {
    let B = [];
    if (this.cells)
      this.widths.forEach(function (Q, I) {
        (B.push(this._topLeftChar(I)),
          B.push(TF.repeat(this.chars[this.y == 0 ? 'top' : 'mid'], Q)));
      }, this);
    else
      (B.push(this._topLeftChar(0)),
        B.push(TF.repeat(this.chars[this.y == 0 ? 'top' : 'mid'], this.width)));
    if (A) B.push(this.chars[this.y == 0 ? 'topRight' : 'rightMid']);
    return this.wrapWithStyleColors('border', B.join(''));
  }
  _topLeftChar(A) {
    let B = this.x + A,
      Q;
    if (this.y == 0) Q = B == 0 ? 'topLeft' : A == 0 ? 'topMid' : 'top';
    else if (B == 0) Q = 'leftMid';
    else if (((Q = A == 0 ? 'midMid' : 'bottomMid'), this.cells)) {
      if (this.cells[this.y - 1][B] instanceof ve.ColSpanCell) Q = A == 0 ? 'topMid' : 'mid';
      if (A == 0) {
        let G = 1;
        while (this.cells[this.y][B - G] instanceof ve.ColSpanCell) G++;
        if (this.cells[this.y][B - G] instanceof ve.RowSpanCell) Q = 'leftMid';
      }
    }
    return this.chars[Q];
  }
  wrapWithStyleColors(A, B) {
    if (this[A] && this[A].length)
      try {
        let Q = qE2();
        for (let I = this[A].length - 1; I >= 0; I--) Q = Q[this[A][I]];
        return Q(B);
      } catch (Q) {
        return B;
      }
    else return B;
  }
  drawLine(A, B, Q, I) {
    let G = this.chars[this.x == 0 ? 'left' : 'middle'];
    if (this.x && I && this.cells) {
      let C = this.cells[this.y + I][this.x - 1];
      while (C instanceof $K1) C = this.cells[C.y][C.x - 1];
      if (!(C instanceof qK1)) G = this.chars.rightMid;
    }
    let D = TF.repeat(' ', this.paddingLeft),
      Z = B ? this.chars.right : '',
      Y = TF.repeat(' ', this.paddingRight),
      W = this.lines[A],
      F = this.width - (this.paddingLeft + this.paddingRight);
    if (Q) W += this.truncate || '…';
    let J = TF.truncate(W, F, this.truncate);
    return ((J = TF.pad(J, F, ' ', this.hAlign)), (J = D + J + Y), this.stylizeLine(G, J, Z));
  }
  stylizeLine(A, B, Q) {
    if (
      ((A = this.wrapWithStyleColors('border', A)),
      (Q = this.wrapWithStyleColors('border', Q)),
      this.y === 0)
    )
      B = this.wrapWithStyleColors('head', B);
    return A + B + Q;
  }
  drawBottom(A) {
    let B = this.chars[this.x == 0 ? 'bottomLeft' : 'bottomMid'],
      Q = TF.repeat(this.chars.bottom, this.width),
      I = A ? this.chars.bottomRight : '';
    return this.wrapWithStyleColors('border', B + Q + I);
  }
  drawEmpty(A, B) {
    let Q = this.chars[this.x == 0 ? 'left' : 'middle'];
    if (this.x && B && this.cells) {
      let D = this.cells[this.y + B][this.x - 1];
      while (D instanceof $K1) D = this.cells[D.y][D.x - 1];
      if (!(D instanceof qK1)) Q = this.chars.rightMid;
    }
    let I = A ? this.chars.right : '',
      G = TF.repeat(' ', this.width);
    return this.stylizeLine(Q, G, I);
  }
}
class $K1 {
  constructor() {}
  draw(A) {
    if (typeof A === 'number') RE2(`${this.y}-${this.x}: 1x1 ColSpanCell`);
    return '';
  }
  init() {}
  mergeTableOptions() {}
}
class qK1 {
  constructor(A) {
    this.originalCell = A;
  }
  init(A) {
    let B = this.y,
      Q = this.originalCell.y;
    ((this.cellOffset = B - Q), (this.offset = dB5(A.rowHeights, Q, this.cellOffset)));
  }
  draw(A) {
    if (A == 'top') return this.originalCell.draw(this.offset, this.cellOffset);
    if (A == 'bottom') return this.originalCell.draw('bottom');
    return (
      RE2(`${this.y}-${this.x}: 1x${this.colSpan} RowSpanCell for ${this.originalCell.content}`),
      this.originalCell.draw(this.offset + 1 + A)
    );
  }
  mergeTableOptions() {}
}
function ME2(...A) {
  return A.filter((B) => B !== void 0 && B !== null).shift();
}
function Gt1(A, B, Q, I) {
  let G = Q.split('-');
  if (G.length > 1)
    ((G[1] = G[1].charAt(0).toUpperCase() + G[1].substr(1)),
      (G = G.join('')),
      (I[G] = ME2(A[G], A[Q], B[G], B[Q])));
  else I[Q] = ME2(A[Q], B[Q]);
}
function dB5(A, B, Q) {
  let I = A[B];
  for (let G = 1; G < Q; G++) I += 1 + A[B + G];
  return I;
}
function LE2(A, B) {
  return A + B + 1;
}
var uB5 = [
  'top',
  'top-mid',
  'top-left',
  'top-right',
  'bottom',
  'bottom-mid',
  'bottom-left',
  'bottom-right',
  'left',
  'left-mid',
  'mid',
  'mid-mid',
  'right',
  'right-mid',
  'middle',
];
MK1.exports = ve;
MK1.exports.ColSpanCell = $K1;
MK1.exports.RowSpanCell = qK1;

// Module: jE2
// Params: Dr8,_E2

var dN = UK1(),
  nB5 = Bt1(),
  Zt1 = SE2();
class Wt1 extends Array {
  constructor(A) {
    super();
    let B = nB5.mergeOptions(A);
    if ((Object.defineProperty(this, 'options', { value: B, enumerable: B.debug }), B.debug)) {
      switch (typeof B.debug) {
        case 'boolean':
          dN.setDebugLevel(dN.WARN);
          break;
        case 'number':
          dN.setDebugLevel(B.debug);
          break;
        case 'string':
          dN.setDebugLevel(parseInt(B.debug, 10));
          break;
        default:
          (dN.setDebugLevel(dN.WARN),
            dN.warn(
              `Debug option is expected to be boolean, number, or string. Received a ${typeof B.debug}`
            ));
      }
      Object.defineProperty(this, 'messages', {
        get() {
          return dN.debugMessages();
        },
      });
    }
  }
  toString() {
    let A = this,
      B = this.options.head && this.options.head.length;
    if (B) {
      if (((A = [this.options.head]), this.length)) A.push.apply(A, this);
    } else this.options.style.head = [];
    let Q = Zt1.makeTableLayout(A);
    (Q.forEach(function (G) {
      G.forEach(function (D) {
        D.mergeTableOptions(this.options, Q);
      }, this);
    }, this),
      Zt1.computeWidths(this.options.colWidths, Q),
      Zt1.computeHeights(this.options.rowHeights, Q),
      Q.forEach(function (G) {
        G.forEach(function (D) {
          D.init(this.options);
        }, this);
      }, this));
    let I = [];
    for (let G = 0; G < Q.length; G++) {
      let D = Q[G],
        Z = this.options.rowHeights[G];
      if (G === 0 || !this.options.style.compact || (G == 1 && B)) Yt1(D, 'top', I);
      for (let Y = 0; Y < Z; Y++) Yt1(D, Y, I);
      if (G + 1 == Q.length) Yt1(D, 'bottom', I);
    }
    return I.join(`
`);
  }
  get width() {
    return this.toString().split(`
`)[0].length;
  }
}
Wt1.reset = () => dN.reset();
function Yt1(A, B, Q) {
  let I = [];
  A.forEach(function (D) {
    I.push(D.draw(B));
  });
  let G = I.join('');
  if (G.length) Q.push(G);
}
_E2.exports = Wt1;

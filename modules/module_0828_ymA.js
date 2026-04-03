// Module: ymA
// Params: Ud5,jmA

var { buildOptions: xe9 } = zmA(),
  fe9 = TmA(),
  { prettify: ve9 } = SmA(),
  be9 = CT1();
class _mA {
  constructor(A) {
    ((this.externalEntities = {}), (this.options = xe9(A)));
  }
  parse(A, B) {
    if (typeof A === 'string');
    else if (A.toString) A = A.toString();
    else throw new Error('XML data is accepted in String or Bytes[] form.');
    if (B) {
      if (B === !0) B = {};
      let G = be9.validate(A, B);
      if (G !== !0) throw Error(`${G.err.msg}:${G.err.line}:${G.err.col}`);
    }
    let Q = new fe9(this.options);
    Q.addExternalEntities(this.externalEntities);
    let I = Q.parseXml(A);
    if (this.options.preserveOrder || I === void 0) return I;
    else return ve9(I, this.options);
  }
  addEntity(A, B) {
    if (B.indexOf('&') !== -1) throw new Error("Entity value can't have '&'");
    else if (A.indexOf('&') !== -1 || A.indexOf(';') !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    else if (B === '&') throw new Error("An entity with value '&' is not permitted");
    else this.externalEntities[A] = B;
  }
}
jmA.exports = _mA;

// Module: et1
// Params: T75

var { InvalidArgumentError: L75 } = se();
class J$2 {
  constructor(A, B) {
    ((this.flags = A),
      (this.description = B || ''),
      (this.required = A.includes('<')),
      (this.optional = A.includes('[')),
      (this.variadic = /\w\.\.\.[>\]]$/.test(A)),
      (this.mandatory = !1));
    let Q = O75(A);
    if (((this.short = Q.shortFlag), (this.long = Q.longFlag), (this.negate = !1), this.long))
      this.negate = this.long.startsWith('--no-');
    ((this.defaultValue = void 0),
      (this.defaultValueDescription = void 0),
      (this.presetArg = void 0),
      (this.envVar = void 0),
      (this.parseArg = void 0),
      (this.hidden = !1),
      (this.argChoices = void 0),
      (this.conflictsWith = []),
      (this.implied = void 0));
  }
  default(A, B) {
    return ((this.defaultValue = A), (this.defaultValueDescription = B), this);
  }
  preset(A) {
    return ((this.presetArg = A), this);
  }
  conflicts(A) {
    return ((this.conflictsWith = this.conflictsWith.concat(A)), this);
  }
  implies(A) {
    let B = A;
    if (typeof A === 'string') B = { [A]: !0 };
    return ((this.implied = Object.assign(this.implied || {}, B)), this);
  }
  env(A) {
    return ((this.envVar = A), this);
  }
  argParser(A) {
    return ((this.parseArg = A), this);
  }
  makeOptionMandatory(A = !0) {
    return ((this.mandatory = !!A), this);
  }
  hideHelp(A = !0) {
    return ((this.hidden = !!A), this);
  }
  _concatValue(A, B) {
    if (B === this.defaultValue || !Array.isArray(B)) return [A];
    return B.concat(A);
  }
  choices(A) {
    return (
      (this.argChoices = A.slice()),
      (this.parseArg = (B, Q) => {
        if (!this.argChoices.includes(B))
          throw new L75(`Allowed choices are ${this.argChoices.join(', ')}.`);
        if (this.variadic) return this._concatValue(B, Q);
        return B;
      }),
      this
    );
  }
  name() {
    if (this.long) return this.long.replace(/^--/, '');
    return this.short.replace(/^-/, '');
  }
  attributeName() {
    return R75(this.name().replace(/^no-/, ''));
  }
  is(A) {
    return this.short === A || this.long === A;
  }
  isBoolean() {
    return !this.required && !this.optional && !this.negate;
  }
}
class C$2 {
  constructor(A) {
    ((this.positiveOptions = new Map()),
      (this.negativeOptions = new Map()),
      (this.dualOptions = new Set()),
      A.forEach((B) => {
        if (B.negate) this.negativeOptions.set(B.attributeName(), B);
        else this.positiveOptions.set(B.attributeName(), B);
      }),
      this.negativeOptions.forEach((B, Q) => {
        if (this.positiveOptions.has(Q)) this.dualOptions.add(Q);
      }));
  }
  valueFromOption(A, B) {
    let Q = B.attributeName();
    if (!this.dualOptions.has(Q)) return !0;
    let I = this.negativeOptions.get(Q).presetArg,
      G = I !== void 0 ? I : !1;
    return B.negate === (G === A);
  }
}
function R75(A) {
  return A.split('-').reduce((B, Q) => {
    return B + Q[0].toUpperCase() + Q.slice(1);
  });
}
function O75(A) {
  let B,
    Q,
    I = A.split(/[ |,]+/);
  if (I.length > 1 && !/^[[<]/.test(I[1])) B = I.shift();
  if (((Q = I.shift()), !B && /^-[^-]$/.test(Q))) ((B = Q), (Q = void 0));
  return { shortFlag: B, longFlag: Q };
}
T75.Option = J$2;
T75.DualOptions = C$2;

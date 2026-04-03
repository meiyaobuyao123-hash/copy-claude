// Module: DH1
// Params: E75

var { InvalidArgumentError: z75 } = se();
class W$2 {
  constructor(A, B) {
    switch (
      ((this.description = B || ''),
      (this.variadic = !1),
      (this.parseArg = void 0),
      (this.defaultValue = void 0),
      (this.defaultValueDescription = void 0),
      (this.argChoices = void 0),
      A[0])
    ) {
      case '<':
        ((this.required = !0), (this._name = A.slice(1, -1)));
        break;
      case '[':
        ((this.required = !1), (this._name = A.slice(1, -1)));
        break;
      default:
        ((this.required = !0), (this._name = A));
        break;
    }
    if (this._name.length > 3 && this._name.slice(-3) === '...')
      ((this.variadic = !0), (this._name = this._name.slice(0, -3)));
  }
  name() {
    return this._name;
  }
  _concatValue(A, B) {
    if (B === this.defaultValue || !Array.isArray(B)) return [A];
    return B.concat(A);
  }
  default(A, B) {
    return ((this.defaultValue = A), (this.defaultValueDescription = B), this);
  }
  argParser(A) {
    return ((this.parseArg = A), this);
  }
  choices(A) {
    return (
      (this.argChoices = A.slice()),
      (this.parseArg = (B, Q) => {
        if (!this.argChoices.includes(B))
          throw new z75(`Allowed choices are ${this.argChoices.join(', ')}.`);
        if (this.variadic) return this._concatValue(B, Q);
        return B;
      }),
      this
    );
  }
  argRequired() {
    return ((this.required = !0), this);
  }
  argOptional() {
    return ((this.required = !1), this);
  }
}
function w75(A) {
  let B = A.name() + (A.variadic === !0 ? '...' : '');
  return A.required ? '<' + B + '>' : '[' + B + ']';
}
E75.Argument = W$2;
E75.humanReadableArgName = w75;

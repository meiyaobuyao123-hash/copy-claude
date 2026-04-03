// Module: tn
// Params: BI8,TG0

var en = Symbol('SemVer ANY');
class qI1 {
  static get ANY() {
    return en;
  }
  constructor(A, B) {
    if (((B = qG0(B)), A instanceof qI1))
      if (A.loose === !!B.loose) return A;
      else A = A.value;
    if (
      ((A = A.trim().split(/\s+/).join(' ')),
      Yx1('comparator', A, B),
      (this.options = B),
      (this.loose = !!B.loose),
      this.parse(A),
      this.semver === en)
    )
      this.value = '';
    else this.value = this.operator + this.semver.version;
    Yx1('comp', this);
  }
  parse(A) {
    let B = this.options.loose ? MG0[LG0.COMPARATORLOOSE] : MG0[LG0.COMPARATOR],
      Q = A.match(B);
    if (!Q) throw new TypeError(`Invalid comparator: ${A}`);
    if (((this.operator = Q[1] !== void 0 ? Q[1] : ''), this.operator === '=')) this.operator = '';
    if (!Q[2]) this.semver = en;
    else this.semver = new RG0(Q[2], this.options.loose);
  }
  toString() {
    return this.value;
  }
  test(A) {
    if ((Yx1('Comparator.test', A, this.options.loose), this.semver === en || A === en)) return !0;
    if (typeof A === 'string')
      try {
        A = new RG0(A, this.options);
      } catch (B) {
        return !1;
      }
    return Zx1(A, this.operator, this.semver, this.options);
  }
  intersects(A, B) {
    if (!(A instanceof qI1)) throw new TypeError('a Comparator is required');
    if (this.operator === '') {
      if (this.value === '') return !0;
      return new OG0(A.value, B).test(this.value);
    } else if (A.operator === '') {
      if (A.value === '') return !0;
      return new OG0(this.value, B).test(A.semver);
    }
    if (
      ((B = qG0(B)), B.includePrerelease && (this.value === '<0.0.0-0' || A.value === '<0.0.0-0'))
    )
      return !1;
    if (!B.includePrerelease && (this.value.startsWith('<0.0.0') || A.value.startsWith('<0.0.0')))
      return !1;
    if (this.operator.startsWith('>') && A.operator.startsWith('>')) return !0;
    if (this.operator.startsWith('<') && A.operator.startsWith('<')) return !0;
    if (
      this.semver.version === A.semver.version &&
      this.operator.includes('=') &&
      A.operator.includes('=')
    )
      return !0;
    if (
      Zx1(this.semver, '<', A.semver, B) &&
      this.operator.startsWith('>') &&
      A.operator.startsWith('<')
    )
      return !0;
    if (
      Zx1(this.semver, '>', A.semver, B) &&
      this.operator.startsWith('<') &&
      A.operator.startsWith('>')
    )
      return !0;
    return !1;
  }
}
TG0.exports = qI1;
var qG0 = VI1(),
  { safeRe: MG0, t: LG0 } = Kb(),
  Zx1 = Ix1(),
  Yx1 = an(),
  RG0 = eG(),
  OG0 = pJ();

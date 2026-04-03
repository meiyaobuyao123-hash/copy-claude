// Module: eG
// Params: S78,PI0

var KI1 = an(),
  { MAX_LENGTH: RI0, MAX_SAFE_INTEGER: HI1 } = nn(),
  { safeRe: OI0, safeSrc: TI0, t: zI1 } = Kb(),
  UO4 = VI1(),
  { compareIdentifiers: Hb } = Ax1();
class JV {
  constructor(A, B) {
    if (((B = UO4(B)), A instanceof JV))
      if (A.loose === !!B.loose && A.includePrerelease === !!B.includePrerelease) return A;
      else A = A.version;
    else if (typeof A !== 'string')
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof A}".`);
    if (A.length > RI0) throw new TypeError(`version is longer than ${RI0} characters`);
    (KI1('SemVer', A, B),
      (this.options = B),
      (this.loose = !!B.loose),
      (this.includePrerelease = !!B.includePrerelease));
    let Q = A.trim().match(B.loose ? OI0[zI1.LOOSE] : OI0[zI1.FULL]);
    if (!Q) throw new TypeError(`Invalid Version: ${A}`);
    if (
      ((this.raw = A),
      (this.major = +Q[1]),
      (this.minor = +Q[2]),
      (this.patch = +Q[3]),
      this.major > HI1 || this.major < 0)
    )
      throw new TypeError('Invalid major version');
    if (this.minor > HI1 || this.minor < 0) throw new TypeError('Invalid minor version');
    if (this.patch > HI1 || this.patch < 0) throw new TypeError('Invalid patch version');
    if (!Q[4]) this.prerelease = [];
    else
      this.prerelease = Q[4].split('.').map((I) => {
        if (/^[0-9]+$/.test(I)) {
          let G = +I;
          if (G >= 0 && G < HI1) return G;
        }
        return I;
      });
    ((this.build = Q[5] ? Q[5].split('.') : []), this.format());
  }
  format() {
    if (((this.version = `${this.major}.${this.minor}.${this.patch}`), this.prerelease.length))
      this.version += `-${this.prerelease.join('.')}`;
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(A) {
    if ((KI1('SemVer.compare', this.version, this.options, A), !(A instanceof JV))) {
      if (typeof A === 'string' && A === this.version) return 0;
      A = new JV(A, this.options);
    }
    if (A.version === this.version) return 0;
    return this.compareMain(A) || this.comparePre(A);
  }
  compareMain(A) {
    if (!(A instanceof JV)) A = new JV(A, this.options);
    return Hb(this.major, A.major) || Hb(this.minor, A.minor) || Hb(this.patch, A.patch);
  }
  comparePre(A) {
    if (!(A instanceof JV)) A = new JV(A, this.options);
    if (this.prerelease.length && !A.prerelease.length) return -1;
    else if (!this.prerelease.length && A.prerelease.length) return 1;
    else if (!this.prerelease.length && !A.prerelease.length) return 0;
    let B = 0;
    do {
      let Q = this.prerelease[B],
        I = A.prerelease[B];
      if ((KI1('prerelease compare', B, Q, I), Q === void 0 && I === void 0)) return 0;
      else if (I === void 0) return 1;
      else if (Q === void 0) return -1;
      else if (Q === I) continue;
      else return Hb(Q, I);
    } while (++B);
  }
  compareBuild(A) {
    if (!(A instanceof JV)) A = new JV(A, this.options);
    let B = 0;
    do {
      let Q = this.build[B],
        I = A.build[B];
      if ((KI1('build compare', B, Q, I), Q === void 0 && I === void 0)) return 0;
      else if (I === void 0) return 1;
      else if (Q === void 0) return -1;
      else if (Q === I) continue;
      else return Hb(Q, I);
    } while (++B);
  }
  inc(A, B, Q) {
    if (A.startsWith('pre')) {
      if (!B && Q === !1) throw new Error('invalid increment argument: identifier is empty');
      if (B) {
        let I = new RegExp(
            `^${this.options.loose ? TI0[zI1.PRERELEASELOOSE] : TI0[zI1.PRERELEASE]}$`
          ),
          G = `-${B}`.match(I);
        if (!G || G[1] !== B) throw new Error(`invalid identifier: ${B}`);
      }
    }
    switch (A) {
      case 'premajor':
        ((this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc('pre', B, Q));
        break;
      case 'preminor':
        ((this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', B, Q));
        break;
      case 'prepatch':
        ((this.prerelease.length = 0), this.inc('patch', B, Q), this.inc('pre', B, Q));
        break;
      case 'prerelease':
        if (this.prerelease.length === 0) this.inc('patch', B, Q);
        this.inc('pre', B, Q);
        break;
      case 'release':
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case 'major':
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
        ((this.minor = 0), (this.patch = 0), (this.prerelease = []));
        break;
      case 'minor':
        if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
        ((this.patch = 0), (this.prerelease = []));
        break;
      case 'patch':
        if (this.prerelease.length === 0) this.patch++;
        this.prerelease = [];
        break;
      case 'pre': {
        let I = Number(Q) ? 1 : 0;
        if (this.prerelease.length === 0) this.prerelease = [I];
        else {
          let G = this.prerelease.length;
          while (--G >= 0)
            if (typeof this.prerelease[G] === 'number') (this.prerelease[G]++, (G = -2));
          if (G === -1) {
            if (B === this.prerelease.join('.') && Q === !1)
              throw new Error('invalid increment argument: identifier already exists');
            this.prerelease.push(I);
          }
        }
        if (B) {
          let G = [B, I];
          if (Q === !1) G = [B];
          if (Hb(this.prerelease[0], B) === 0) {
            if (isNaN(this.prerelease[1])) this.prerelease = G;
          } else this.prerelease = G;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${A}`);
    }
    if (((this.raw = this.format()), this.build.length)) this.raw += `+${this.build.join('.')}`;
    return this;
  }
}
PI0.exports = JV;

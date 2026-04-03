// Module: pJ
// Params: AI8,$G0

var VT4 = /\s+/g;
class on {
  constructor(A, B) {
    if (((B = HT4(B)), A instanceof on))
      if (A.loose === !!B.loose && A.includePrerelease === !!B.includePrerelease) return A;
      else return new on(A.raw, B);
    if (A instanceof Dx1)
      return ((this.raw = A.value), (this.set = [[A]]), (this.formatted = void 0), this);
    if (
      ((this.options = B),
      (this.loose = !!B.loose),
      (this.includePrerelease = !!B.includePrerelease),
      (this.raw = A.trim().replace(VT4, ' ')),
      (this.set = this.raw
        .split('||')
        .map((Q) => this.parseRange(Q.trim()))
        .filter((Q) => Q.length)),
      !this.set.length)
    )
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
    if (this.set.length > 1) {
      let Q = this.set[0];
      if (((this.set = this.set.filter((I) => !UG0(I[0]))), this.set.length === 0)) this.set = [Q];
      else if (this.set.length > 1) {
        for (let I of this.set)
          if (I.length === 1 && qT4(I[0])) {
            this.set = [I];
            break;
          }
      }
    }
    this.formatted = void 0;
  }
  get range() {
    if (this.formatted === void 0) {
      this.formatted = '';
      for (let A = 0; A < this.set.length; A++) {
        if (A > 0) this.formatted += '||';
        let B = this.set[A];
        for (let Q = 0; Q < B.length; Q++) {
          if (Q > 0) this.formatted += ' ';
          this.formatted += B[Q].toString().trim();
        }
      }
    }
    return this.formatted;
  }
  format() {
    return this.range;
  }
  toString() {
    return this.range;
  }
  parseRange(A) {
    let Q = ((this.options.includePrerelease && NT4) | (this.options.loose && $T4)) + ':' + A,
      I = EG0.get(Q);
    if (I) return I;
    let G = this.options.loose,
      D = G ? wY[ZZ.HYPHENRANGELOOSE] : wY[ZZ.HYPHENRANGE];
    ((A = A.replace(D, yT4(this.options.includePrerelease))),
      CB('hyphen replace', A),
      (A = A.replace(wY[ZZ.COMPARATORTRIM], wT4)),
      CB('comparator trim', A),
      (A = A.replace(wY[ZZ.TILDETRIM], ET4)),
      CB('tilde trim', A),
      (A = A.replace(wY[ZZ.CARETTRIM], UT4)),
      CB('caret trim', A));
    let Z = A.split(' ')
      .map((J) => MT4(J, this.options))
      .join(' ')
      .split(/\s+/)
      .map((J) => jT4(J, this.options));
    if (G)
      Z = Z.filter((J) => {
        return (CB('loose invalid filter', J, this.options), !!J.match(wY[ZZ.COMPARATORLOOSE]));
      });
    CB('range list', Z);
    let Y = new Map(),
      W = Z.map((J) => new Dx1(J, this.options));
    for (let J of W) {
      if (UG0(J)) return [J];
      Y.set(J.value, J);
    }
    if (Y.size > 1 && Y.has('')) Y.delete('');
    let F = [...Y.values()];
    return (EG0.set(Q, F), F);
  }
  intersects(A, B) {
    if (!(A instanceof on)) throw new TypeError('a Range is required');
    return this.set.some((Q) => {
      return (
        NG0(Q, B) &&
        A.set.some((I) => {
          return (
            NG0(I, B) &&
            Q.every((G) => {
              return I.every((D) => {
                return G.intersects(D, B);
              });
            })
          );
        })
      );
    });
  }
  test(A) {
    if (!A) return !1;
    if (typeof A === 'string')
      try {
        A = new zT4(A, this.options);
      } catch (B) {
        return !1;
      }
    for (let B = 0; B < this.set.length; B++) if (kT4(this.set[B], A, this.options)) return !0;
    return !1;
  }
}
$G0.exports = on;
var KT4 = wG0(),
  EG0 = new KT4(),
  HT4 = VI1(),
  Dx1 = tn(),
  CB = an(),
  zT4 = eG(),
  {
    safeRe: wY,
    t: ZZ,
    comparatorTrimReplace: wT4,
    tildeTrimReplace: ET4,
    caretTrimReplace: UT4,
  } = Kb(),
  { FLAG_INCLUDE_PRERELEASE: NT4, FLAG_LOOSE: $T4 } = nn(),
  UG0 = (A) => A.value === '<0.0.0-0',
  qT4 = (A) => A.value === '',
  NG0 = (A, B) => {
    let Q = !0,
      I = A.slice(),
      G = I.pop();
    while (Q && I.length)
      ((Q = I.every((D) => {
        return G.intersects(D, B);
      })),
        (G = I.pop()));
    return Q;
  },
  MT4 = (A, B) => {
    return (
      CB('comp', A, B),
      (A = OT4(A, B)),
      CB('caret', A),
      (A = LT4(A, B)),
      CB('tildes', A),
      (A = PT4(A, B)),
      CB('xrange', A),
      (A = _T4(A, B)),
      CB('stars', A),
      A
    );
  },
  YZ = (A) => !A || A.toLowerCase() === 'x' || A === '*',
  LT4 = (A, B) => {
    return A.trim()
      .split(/\s+/)
      .map((Q) => RT4(Q, B))
      .join(' ');
  },
  RT4 = (A, B) => {
    let Q = B.loose ? wY[ZZ.TILDELOOSE] : wY[ZZ.TILDE];
    return A.replace(Q, (I, G, D, Z, Y) => {
      CB('tilde', A, I, G, D, Z, Y);
      let W;
      if (YZ(G)) W = '';
      else if (YZ(D)) W = `>=${G}.0.0 <${+G + 1}.0.0-0`;
      else if (YZ(Z)) W = `>=${G}.${D}.0 <${G}.${+D + 1}.0-0`;
      else if (Y) (CB('replaceTilde pr', Y), (W = `>=${G}.${D}.${Z}-${Y} <${G}.${+D + 1}.0-0`));
      else W = `>=${G}.${D}.${Z} <${G}.${+D + 1}.0-0`;
      return (CB('tilde return', W), W);
    });
  },
  OT4 = (A, B) => {
    return A.trim()
      .split(/\s+/)
      .map((Q) => TT4(Q, B))
      .join(' ');
  },
  TT4 = (A, B) => {
    CB('caret', A, B);
    let Q = B.loose ? wY[ZZ.CARETLOOSE] : wY[ZZ.CARET],
      I = B.includePrerelease ? '-0' : '';
    return A.replace(Q, (G, D, Z, Y, W) => {
      CB('caret', A, G, D, Z, Y, W);
      let F;
      if (YZ(D)) F = '';
      else if (YZ(Z)) F = `>=${D}.0.0${I} <${+D + 1}.0.0-0`;
      else if (YZ(Y))
        if (D === '0') F = `>=${D}.${Z}.0${I} <${D}.${+Z + 1}.0-0`;
        else F = `>=${D}.${Z}.0${I} <${+D + 1}.0.0-0`;
      else if (W)
        if ((CB('replaceCaret pr', W), D === '0'))
          if (Z === '0') F = `>=${D}.${Z}.${Y}-${W} <${D}.${Z}.${+Y + 1}-0`;
          else F = `>=${D}.${Z}.${Y}-${W} <${D}.${+Z + 1}.0-0`;
        else F = `>=${D}.${Z}.${Y}-${W} <${+D + 1}.0.0-0`;
      else if ((CB('no pr'), D === '0'))
        if (Z === '0') F = `>=${D}.${Z}.${Y}${I} <${D}.${Z}.${+Y + 1}-0`;
        else F = `>=${D}.${Z}.${Y}${I} <${D}.${+Z + 1}.0-0`;
      else F = `>=${D}.${Z}.${Y} <${+D + 1}.0.0-0`;
      return (CB('caret return', F), F);
    });
  },
  PT4 = (A, B) => {
    return (
      CB('replaceXRanges', A, B),
      A.split(/\s+/)
        .map((Q) => ST4(Q, B))
        .join(' ')
    );
  },
  ST4 = (A, B) => {
    A = A.trim();
    let Q = B.loose ? wY[ZZ.XRANGELOOSE] : wY[ZZ.XRANGE];
    return A.replace(Q, (I, G, D, Z, Y, W) => {
      CB('xRange', A, I, G, D, Z, Y, W);
      let F = YZ(D),
        J = F || YZ(Z),
        C = J || YZ(Y),
        X = C;
      if (G === '=' && X) G = '';
      if (((W = B.includePrerelease ? '-0' : ''), F))
        if (G === '>' || G === '<') I = '<0.0.0-0';
        else I = '*';
      else if (G && X) {
        if (J) Z = 0;
        if (((Y = 0), G === '>'))
          if (((G = '>='), J)) ((D = +D + 1), (Z = 0), (Y = 0));
          else ((Z = +Z + 1), (Y = 0));
        else if (G === '<=')
          if (((G = '<'), J)) D = +D + 1;
          else Z = +Z + 1;
        if (G === '<') W = '-0';
        I = `${G + D}.${Z}.${Y}${W}`;
      } else if (J) I = `>=${D}.0.0${W} <${+D + 1}.0.0-0`;
      else if (C) I = `>=${D}.${Z}.0${W} <${D}.${+Z + 1}.0-0`;
      return (CB('xRange return', I), I);
    });
  },
  _T4 = (A, B) => {
    return (CB('replaceStars', A, B), A.trim().replace(wY[ZZ.STAR], ''));
  },
  jT4 = (A, B) => {
    return (
      CB('replaceGTE0', A, B),
      A.trim().replace(wY[B.includePrerelease ? ZZ.GTE0PRE : ZZ.GTE0], '')
    );
  },
  yT4 = (A) => (B, Q, I, G, D, Z, Y, W, F, J, C, X) => {
    if (YZ(I)) Q = '';
    else if (YZ(G)) Q = `>=${I}.0.0${A ? '-0' : ''}`;
    else if (YZ(D)) Q = `>=${I}.${G}.0${A ? '-0' : ''}`;
    else if (Z) Q = `>=${Q}`;
    else Q = `>=${Q}${A ? '-0' : ''}`;
    if (YZ(F)) W = '';
    else if (YZ(J)) W = `<${+F + 1}.0.0-0`;
    else if (YZ(C)) W = `<${F}.${+J + 1}.0-0`;
    else if (X) W = `<=${F}.${J}.${C}-${X}`;
    else if (A) W = `<${F}.${J}.${+C + 1}-0`;
    else W = `<=${W}`;
    return `${Q} ${W}`.trim();
  },
  kT4 = (A, B, Q) => {
    for (let I = 0; I < A.length; I++) if (!A[I].test(B)) return !1;
    if (B.prerelease.length && !Q.includePrerelease) {
      for (let I = 0; I < A.length; I++) {
        if ((CB(A[I].semver), A[I].semver === Dx1.ANY)) continue;
        if (A[I].semver.prerelease.length > 0) {
          let G = A[I].semver;
          if (G.major === B.major && G.minor === B.minor && G.patch === B.patch) return !0;
        }
      }
      return !1;
    }
    return !0;
  };

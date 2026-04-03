// Module: GD0
// Params: VI8,ID0

var eG0 = pJ(),
  Jx1 = tn(),
  { ANY: Fx1 } = Jx1,
  Aa = zb(),
  Cx1 = uJ(),
  WP4 = (A, B, Q = {}) => {
    if (A === B) return !0;
    ((A = new eG0(A, Q)), (B = new eG0(B, Q)));
    let I = !1;
    A: for (let G of A.set) {
      for (let D of B.set) {
        let Z = JP4(G, D, Q);
        if (((I = I || Z !== null), Z)) continue A;
      }
      if (I) return !1;
    }
    return !0;
  },
  FP4 = [new Jx1('>=0.0.0-0')],
  AD0 = [new Jx1('>=0.0.0')],
  JP4 = (A, B, Q) => {
    if (A === B) return !0;
    if (A.length === 1 && A[0].semver === Fx1)
      if (B.length === 1 && B[0].semver === Fx1) return !0;
      else if (Q.includePrerelease) A = FP4;
      else A = AD0;
    if (B.length === 1 && B[0].semver === Fx1)
      if (Q.includePrerelease) return !0;
      else B = AD0;
    let I = new Set(),
      G,
      D;
    for (let V of A)
      if (V.operator === '>' || V.operator === '>=') G = BD0(G, V, Q);
      else if (V.operator === '<' || V.operator === '<=') D = QD0(D, V, Q);
      else I.add(V.semver);
    if (I.size > 1) return null;
    let Z;
    if (G && D) {
      if (((Z = Cx1(G.semver, D.semver, Q)), Z > 0)) return null;
      else if (Z === 0 && (G.operator !== '>=' || D.operator !== '<=')) return null;
    }
    for (let V of I) {
      if (G && !Aa(V, String(G), Q)) return null;
      if (D && !Aa(V, String(D), Q)) return null;
      for (let K of B) if (!Aa(V, String(K), Q)) return !1;
      return !0;
    }
    let Y,
      W,
      F,
      J,
      C = D && !Q.includePrerelease && D.semver.prerelease.length ? D.semver : !1,
      X = G && !Q.includePrerelease && G.semver.prerelease.length ? G.semver : !1;
    if (C && C.prerelease.length === 1 && D.operator === '<' && C.prerelease[0] === 0) C = !1;
    for (let V of B) {
      if (
        ((J = J || V.operator === '>' || V.operator === '>='),
        (F = F || V.operator === '<' || V.operator === '<='),
        G)
      ) {
        if (X) {
          if (
            V.semver.prerelease &&
            V.semver.prerelease.length &&
            V.semver.major === X.major &&
            V.semver.minor === X.minor &&
            V.semver.patch === X.patch
          )
            X = !1;
        }
        if (V.operator === '>' || V.operator === '>=') {
          if (((Y = BD0(G, V, Q)), Y === V && Y !== G)) return !1;
        } else if (G.operator === '>=' && !Aa(G.semver, String(V), Q)) return !1;
      }
      if (D) {
        if (C) {
          if (
            V.semver.prerelease &&
            V.semver.prerelease.length &&
            V.semver.major === C.major &&
            V.semver.minor === C.minor &&
            V.semver.patch === C.patch
          )
            C = !1;
        }
        if (V.operator === '<' || V.operator === '<=') {
          if (((W = QD0(D, V, Q)), W === V && W !== D)) return !1;
        } else if (D.operator === '<=' && !Aa(D.semver, String(V), Q)) return !1;
      }
      if (!V.operator && (D || G) && Z !== 0) return !1;
    }
    if (G && F && !D && Z !== 0) return !1;
    if (D && J && !G && Z !== 0) return !1;
    if (X || C) return !1;
    return !0;
  },
  BD0 = (A, B, Q) => {
    if (!A) return B;
    let I = Cx1(A.semver, B.semver, Q);
    return I > 0 ? A : I < 0 ? B : B.operator === '>' && A.operator === '>=' ? B : A;
  },
  QD0 = (A, B, Q) => {
    if (!A) return B;
    let I = Cx1(A.semver, B.semver, Q);
    return I < 0 ? A : I > 0 ? B : B.operator === '<' && A.operator === '<=' ? B : A;
  };
ID0.exports = WP4;

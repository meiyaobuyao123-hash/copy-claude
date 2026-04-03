// Module: MI1
// Params: WI8,pG0

var aT4 = eG(),
  uG0 = tn(),
  { ANY: sT4 } = uG0,
  rT4 = pJ(),
  oT4 = zb(),
  mG0 = sn(),
  dG0 = EI1(),
  tT4 = UI1(),
  eT4 = rn(),
  AP4 = (A, B, Q, I) => {
    ((A = new aT4(A, I)), (B = new rT4(B, I)));
    let G, D, Z, Y, W;
    switch (Q) {
      case '>':
        ((G = mG0), (D = tT4), (Z = dG0), (Y = '>'), (W = '>='));
        break;
      case '<':
        ((G = dG0), (D = eT4), (Z = mG0), (Y = '<'), (W = '<='));
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (oT4(A, B, I)) return !1;
    for (let F = 0; F < B.set.length; ++F) {
      let J = B.set[F],
        C = null,
        X = null;
      if (
        (J.forEach((V) => {
          if (V.semver === sT4) V = new uG0('>=0.0.0');
          if (((C = C || V), (X = X || V), G(V.semver, C.semver, I))) C = V;
          else if (Z(V.semver, X.semver, I)) X = V;
        }),
        C.operator === Y || C.operator === W)
      )
        return !1;
      if ((!X.operator || X.operator === Y) && D(A, X.semver)) return !1;
      else if (X.operator === W && Z(A, X.semver)) return !1;
    }
    return !0;
  };
pG0.exports = AP4;

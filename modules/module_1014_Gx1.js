// Module: Gx1
// Params: t78,KG0

var JT4 = eG(),
  CT4 = WS(),
  { safeRe: NI1, t: $I1 } = Kb(),
  XT4 = (A, B) => {
    if (A instanceof JT4) return A;
    if (typeof A === 'number') A = String(A);
    if (typeof A !== 'string') return null;
    B = B || {};
    let Q = null;
    if (!B.rtl) Q = A.match(B.includePrerelease ? NI1[$I1.COERCEFULL] : NI1[$I1.COERCE]);
    else {
      let W = B.includePrerelease ? NI1[$I1.COERCERTLFULL] : NI1[$I1.COERCERTL],
        F;
      while ((F = W.exec(A)) && (!Q || Q.index + Q[0].length !== A.length)) {
        if (!Q || F.index + F[0].length !== Q.index + Q[0].length) Q = F;
        W.lastIndex = F.index + F[1].length + F[2].length;
      }
      W.lastIndex = -1;
    }
    if (Q === null) return null;
    let I = Q[2],
      G = Q[3] || '0',
      D = Q[4] || '0',
      Z = B.includePrerelease && Q[5] ? `-${Q[5]}` : '',
      Y = B.includePrerelease && Q[6] ? `+${Q[6]}` : '';
    return CT4(`${I}.${G}.${D}${Z}${Y}`, B);
  };
KG0.exports = XT4;

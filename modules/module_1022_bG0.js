// Module: bG0
// Params: ZI8,vG0

var Wx1 = eG(),
  cT4 = pJ(),
  fG0 = sn(),
  lT4 = (A, B) => {
    A = new cT4(A, B);
    let Q = new Wx1('0.0.0');
    if (A.test(Q)) return Q;
    if (((Q = new Wx1('0.0.0-0')), A.test(Q))) return Q;
    Q = null;
    for (let I = 0; I < A.set.length; ++I) {
      let G = A.set[I],
        D = null;
      if (
        (G.forEach((Z) => {
          let Y = new Wx1(Z.semver.version);
          switch (Z.operator) {
            case '>':
              if (Y.prerelease.length === 0) Y.patch++;
              else Y.prerelease.push(0);
              Y.raw = Y.format();
            case '':
            case '>=':
              if (!D || fG0(Y, D)) D = Y;
              break;
            case '<':
            case '<=':
              break;
            default:
              throw new Error(`Unexpected operation: ${Z.operator}`);
          }
        }),
        D && (!Q || fG0(Q, D)))
      )
        Q = D;
    }
    if (Q && A.test(Q)) return Q;
    return null;
  };
vG0.exports = lT4;

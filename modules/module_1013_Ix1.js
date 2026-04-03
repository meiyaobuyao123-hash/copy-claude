// Module: Ix1
// Params: o78,VG0

var IT4 = Bx1(),
  GT4 = Qx1(),
  DT4 = sn(),
  ZT4 = rn(),
  YT4 = EI1(),
  WT4 = UI1(),
  FT4 = (A, B, Q, I) => {
    switch (B) {
      case '===':
        if (typeof A === 'object') A = A.version;
        if (typeof Q === 'object') Q = Q.version;
        return A === Q;
      case '!==':
        if (typeof A === 'object') A = A.version;
        if (typeof Q === 'object') Q = Q.version;
        return A !== Q;
      case '':
      case '=':
      case '==':
        return IT4(A, Q, I);
      case '!=':
        return GT4(A, Q, I);
      case '>':
        return DT4(A, Q, I);
      case '>=':
        return ZT4(A, Q, I);
      case '<':
        return YT4(A, Q, I);
      case '<=':
        return WT4(A, Q, I);
      default:
        throw new TypeError(`Invalid operator: ${B}`);
    }
  };
VG0.exports = FT4;

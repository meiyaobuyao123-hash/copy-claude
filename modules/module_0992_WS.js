// Module: WS
// Params: _78,_I0

var SI0 = eG(),
  NO4 = (A, B, Q = !1) => {
    if (A instanceof SI0) return A;
    try {
      return new SI0(A, B);
    } catch (I) {
      if (!Q) return null;
      throw I;
    }
  };
_I0.exports = NO4;

// Module: bTA
// Params: Jk5,vTA

var kTA = BL1(),
  xTA = QL1(),
  fTA = yTA();
vTA.exports = kTA
  ? function A(B) {
      return kTA(B);
    }
  : xTA
    ? function A(B) {
        if (!B || (typeof B !== 'object' && typeof B !== 'function'))
          throw new TypeError('getProto: not an object');
        return xTA(B);
      }
    : fTA
      ? function A(B) {
          return fTA(B);
        }
      : null;

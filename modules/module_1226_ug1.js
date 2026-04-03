// Module: ug1
// Params: z26

var FT0 = tO0(),
  eZ1 = WT0(),
  H26 = [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'PS256',
    'PS384',
    'PS512',
    'ES256',
    'ES384',
    'ES512',
  ];
z26.ALGORITHMS = H26;
z26.sign = FT0.sign;
z26.verify = eZ1.verify;
z26.decode = eZ1.decode;
z26.isValid = eZ1.isValid;
z26.createSign = function A(B) {
  return new FT0(B);
};
z26.createVerify = function A(B) {
  return new eZ1(B);
};

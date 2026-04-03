// Module: sdA
// Params: ndA

Object.defineProperty(ndA, '__esModule', { value: !0 });
ndA.getSSOTokenFromFile = void 0;
var mA4 = D1('fs'),
  dA4 = UT1(),
  { readFile: uA4 } = mA4.promises,
  pA4 = async (A) => {
    let B = dA4.getSSOTokenFilepath(A),
      Q = await uA4(B, 'utf8');
    return JSON.parse(Q);
  };
ndA.getSSOTokenFromFile = pA4;

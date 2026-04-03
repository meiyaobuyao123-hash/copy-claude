// Module: UT1
// Params: ldA

Object.defineProperty(ldA, '__esModule', { value: !0 });
ldA.getSSOTokenFilepath = void 0;
var vA4 = D1('crypto'),
  bA4 = D1('path'),
  gA4 = Pf(),
  hA4 = (A) => {
    let Q = vA4.createHash('sha1').update(A).digest('hex');
    return bA4.join(gA4.getHomeDir(), '.aws', 'sso', 'cache', `${Q}.json`);
  };
ldA.getSSOTokenFilepath = hA4;

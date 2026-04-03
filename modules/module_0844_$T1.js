// Module: $T1
// Params: ZuA

Object.defineProperty(ZuA, '__esModule', { value: !0 });
ZuA.slurpFile = void 0;
var B04 = D1('fs'),
  { readFile: Q04 } = B04.promises,
  NT1 = {},
  I04 = (A, B) => {
    if (!NT1[A] || (B === null || B === void 0 ? void 0 : B.ignoreCache)) NT1[A] = Q04(A, 'utf8');
    return NT1[A];
  };
ZuA.slurpFile = I04;

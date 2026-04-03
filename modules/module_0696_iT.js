// Module: iT
// Params: ZSA

var nL1, aL1, sL1;
Object.defineProperty(ZSA, '__esModule', { value: !0 });
ZSA._getInstance = ZSA._getStatsigGlobalFlag = ZSA._getStatsigGlobal = void 0;
var Lb9 = pG(),
  Rb9 = () => {
    return __STATSIG__ ? __STATSIG__ : F61;
  };
ZSA._getStatsigGlobal = Rb9;
var Ob9 = (A) => {
  return ZSA._getStatsigGlobal()[A];
};
ZSA._getStatsigGlobalFlag = Ob9;
var Tb9 = (A) => {
  let B = ZSA._getStatsigGlobal();
  if (!A) {
    if (B.instances && Object.keys(B.instances).length > 1)
      Lb9.Log.warn(
        'Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.'
      );
    return B.firstInstance;
  }
  return B.instances && B.instances[A];
};
ZSA._getInstance = Tb9;
var Af = '__STATSIG__',
  ISA = typeof window !== 'undefined' ? window : {},
  GSA = typeof global !== 'undefined' ? global : {},
  DSA = typeof globalThis !== 'undefined' ? globalThis : {},
  F61 =
    (sL1 =
      (aL1 = (nL1 = ISA[Af]) !== null && nL1 !== void 0 ? nL1 : GSA[Af]) !== null && aL1 !== void 0
        ? aL1
        : DSA[Af]) !== null && sL1 !== void 0
      ? sL1
      : { instance: ZSA._getInstance };
ISA[Af] = F61;
GSA[Af] = F61;
DSA[Af] = F61;

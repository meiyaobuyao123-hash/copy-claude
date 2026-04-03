// Module: Dl
// Params: fSA

Object.defineProperty(fSA, '__esModule', { value: !0 });
fSA.StatsigMetadataProvider = fSA.SDK_VERSION = void 0;
fSA.SDK_VERSION = '3.12.1';
var XR1 = { sdkVersion: fSA.SDK_VERSION, sdkType: 'js-mono' };
fSA.StatsigMetadataProvider = {
  get: () => XR1,
  add: (A) => {
    XR1 = Object.assign(Object.assign({}, XR1), A);
  },
};

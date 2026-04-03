// Module: oc1
// Params: B92

Object.defineProperty(B92, '__esModule', { value: !0 });
B92.normalizeType = B92.normalizeArch = void 0;
var Vf6 = (A) => {
  switch (A) {
    case 'arm':
      return 'arm32';
    case 'ppc':
      return 'ppc32';
    case 'x64':
      return 'amd64';
    default:
      return A;
  }
};
B92.normalizeArch = Vf6;
var Kf6 = (A) => {
  switch (A) {
    case 'sunos':
      return 'solaris';
    case 'win32':
      return 'windows';
    default:
      return A;
  }
};
B92.normalizeType = Kf6;

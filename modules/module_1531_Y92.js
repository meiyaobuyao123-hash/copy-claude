// Module: Y92
// Params: D92

Object.defineProperty(D92, '__esModule', { value: !0 });
D92.hostDetector = void 0;
var tc1 = wN(),
  I92 = D1('os'),
  zf6 = A92(),
  wf6 = oc1();
class G92 {
  detect(A) {
    return {
      attributes: {
        [tc1.SEMRESATTRS_HOST_NAME]: I92.hostname(),
        [tc1.SEMRESATTRS_HOST_ARCH]: wf6.normalizeArch(I92.arch()),
        [tc1.SEMRESATTRS_HOST_ID]: zf6.getMachineId(),
      },
    };
  }
}
D92.hostDetector = new G92();

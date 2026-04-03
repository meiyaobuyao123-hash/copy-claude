// Module: pm0
// Params: Pw8,um0

var dm0 = () => process.platform === 'linux',
  wF1 = null,
  dK6 = () => {
    if (!wF1)
      if (dm0() && process.report) {
        let A = process.report.excludeNetwork;
        ((process.report.excludeNetwork = !0),
          (wF1 = process.report.getReport()),
          (process.report.excludeNetwork = A));
      } else wF1 = {};
    return wF1;
  };
um0.exports = { isLinux: dm0, getReport: dK6 };

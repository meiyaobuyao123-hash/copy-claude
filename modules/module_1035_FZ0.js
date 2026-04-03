// Module: FZ0
// Params: KG8,_x1

var WZ0 = (A = {}) => {
  let B = A.env || process.env;
  if ((A.platform || process.platform) !== 'win32') return 'PATH';
  return (
    Object.keys(B)
      .reverse()
      .find((I) => I.toUpperCase() === 'PATH') || 'Path'
  );
};
_x1.exports = WZ0;
_x1.exports.default = WZ0;

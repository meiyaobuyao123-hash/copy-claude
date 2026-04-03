// Module: an
// Params: O78,UI0

var DO4 =
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ? (...A) => console.error('SEMVER', ...A)
    : () => {};
UI0.exports = DO4;

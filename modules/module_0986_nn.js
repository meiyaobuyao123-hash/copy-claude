// Module: nn
// Params: R78,EI0

var IO4 = Number.MAX_SAFE_INTEGER || 9007199254740991,
  GO4 = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
EI0.exports = {
  MAX_LENGTH: 256,
  MAX_SAFE_COMPONENT_LENGTH: 16,
  MAX_SAFE_BUILD_LENGTH: 250,
  MAX_SAFE_INTEGER: IO4,
  RELEASE_TYPES: GO4,
  SEMVER_SPEC_VERSION: '2.0.0',
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2,
};

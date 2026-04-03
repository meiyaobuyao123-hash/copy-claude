// Module: IE2
// Params: ns8,QE2

var PB5 = D1('os'),
  WK = BE2(),
  qZ = process.env,
  Od = void 0;
if (WK('no-color') || WK('no-colors') || WK('color=false')) Od = !1;
else if (WK('color') || WK('colors') || WK('color=true') || WK('color=always')) Od = !0;
if ('FORCE_COLOR' in qZ) Od = qZ.FORCE_COLOR.length === 0 || parseInt(qZ.FORCE_COLOR, 10) !== 0;
function SB5(A) {
  if (A === 0) return !1;
  return { level: A, hasBasic: !0, has256: A >= 2, has16m: A >= 3 };
}
function _B5(A) {
  if (Od === !1) return 0;
  if (WK('color=16m') || WK('color=full') || WK('color=truecolor')) return 3;
  if (WK('color=256')) return 2;
  if (A && !A.isTTY && Od !== !0) return 0;
  var B = Od ? 1 : 0;
  if (process.platform === 'win32') {
    var Q = PB5.release().split('.');
    if (
      Number(process.versions.node.split('.')[0]) >= 8 &&
      Number(Q[0]) >= 10 &&
      Number(Q[2]) >= 10586
    )
      return Number(Q[2]) >= 14931 ? 3 : 2;
    return 1;
  }
  if ('CI' in qZ) {
    if (
      ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (G) {
        return G in qZ;
      }) ||
      qZ.CI_NAME === 'codeship'
    )
      return 1;
    return B;
  }
  if ('TEAMCITY_VERSION' in qZ)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(qZ.TEAMCITY_VERSION) ? 1 : 0;
  if ('TERM_PROGRAM' in qZ) {
    var I = parseInt((qZ.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (qZ.TERM_PROGRAM) {
      case 'iTerm.app':
        return I >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
    }
  }
  if (/-256(color)?$/i.test(qZ.TERM)) return 2;
  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(qZ.TERM)) return 1;
  if ('COLORTERM' in qZ) return 1;
  if (qZ.TERM === 'dumb') return B;
  return B;
}
function Qt1(A) {
  var B = _B5(A);
  return SB5(B);
}
QE2.exports = { supportsColor: Qt1, stdout: Qt1(process.stdout), stderr: Qt1(process.stderr) };

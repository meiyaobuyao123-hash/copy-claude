// Module: Bm0
// Params: mz8,Am0

var dV6 = D1('os'),
  eh0 = D1('tty'),
  JC = Qc(),
  { env: JI } = process,
  rL;
if (JC('no-color') || JC('no-colors') || JC('color=false') || JC('color=never')) rL = 0;
else if (JC('color') || JC('colors') || JC('color=true') || JC('color=always')) rL = 1;
if ('FORCE_COLOR' in JI)
  if (JI.FORCE_COLOR === 'true') rL = 1;
  else if (JI.FORCE_COLOR === 'false') rL = 0;
  else rL = JI.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(JI.FORCE_COLOR, 10), 3);
function ku1(A) {
  if (A === 0) return !1;
  return { level: A, hasBasic: !0, has256: A >= 2, has16m: A >= 3 };
}
function xu1(A, B) {
  if (rL === 0) return 0;
  if (JC('color=16m') || JC('color=full') || JC('color=truecolor')) return 3;
  if (JC('color=256')) return 2;
  if (A && !B && rL === void 0) return 0;
  let Q = rL || 0;
  if (JI.TERM === 'dumb') return Q;
  if (process.platform === 'win32') {
    let I = dV6.release().split('.');
    if (Number(I[0]) >= 10 && Number(I[2]) >= 10586) return Number(I[2]) >= 14931 ? 3 : 2;
    return 1;
  }
  if ('CI' in JI) {
    if (
      ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (I) => I in JI
      ) ||
      JI.CI_NAME === 'codeship'
    )
      return 1;
    return Q;
  }
  if ('TEAMCITY_VERSION' in JI)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(JI.TEAMCITY_VERSION) ? 1 : 0;
  if (JI.COLORTERM === 'truecolor') return 3;
  if ('TERM_PROGRAM' in JI) {
    let I = parseInt((JI.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (JI.TERM_PROGRAM) {
      case 'iTerm.app':
        return I >= 3 ? 3 : 2;
      case 'Apple_Terminal':
        return 2;
    }
  }
  if (/-256(color)?$/i.test(JI.TERM)) return 2;
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(JI.TERM)) return 1;
  if ('COLORTERM' in JI) return 1;
  return Q;
}
function uV6(A) {
  let B = xu1(A, A && A.isTTY);
  return ku1(B);
}
Am0.exports = {
  supportsColor: uV6,
  stdout: ku1(xu1(!0, eh0.isatty(1))),
  stderr: ku1(xu1(!0, eh0.isatty(2))),
};

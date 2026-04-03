// Module: e30
// Params: i28,t30

var yL4 = D1('os'),
  o30 = D1('tty'),
  bJ = Qc(),
  { env: AI } = process,
  pM;
if (bJ('no-color') || bJ('no-colors') || bJ('color=false') || bJ('color=never')) pM = 0;
else if (bJ('color') || bJ('colors') || bJ('color=true') || bJ('color=always')) pM = 1;
if ('FORCE_COLOR' in AI)
  if (AI.FORCE_COLOR === 'true') pM = 1;
  else if (AI.FORCE_COLOR === 'false') pM = 0;
  else pM = AI.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(AI.FORCE_COLOR, 10), 3);
function Wk1(A) {
  if (A === 0) return !1;
  return { level: A, hasBasic: !0, has256: A >= 2, has16m: A >= 3 };
}
function Fk1(A, B) {
  if (pM === 0) return 0;
  if (bJ('color=16m') || bJ('color=full') || bJ('color=truecolor')) return 3;
  if (bJ('color=256')) return 2;
  if (A && !B && pM === void 0) return 0;
  let Q = pM || 0;
  if (AI.TERM === 'dumb') return Q;
  if (process.platform === 'win32') {
    let I = yL4.release().split('.');
    if (Number(I[0]) >= 10 && Number(I[2]) >= 10586) return Number(I[2]) >= 14931 ? 3 : 2;
    return 1;
  }
  if ('CI' in AI) {
    if (
      ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (I) => I in AI
      ) ||
      AI.CI_NAME === 'codeship'
    )
      return 1;
    return Q;
  }
  if ('TEAMCITY_VERSION' in AI)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(AI.TEAMCITY_VERSION) ? 1 : 0;
  if (AI.COLORTERM === 'truecolor') return 3;
  if ('TERM_PROGRAM' in AI) {
    let I = parseInt((AI.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (AI.TERM_PROGRAM) {
      case 'iTerm.app':
        return I >= 3 ? 3 : 2;
      case 'Apple_Terminal':
        return 2;
    }
  }
  if (/-256(color)?$/i.test(AI.TERM)) return 2;
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(AI.TERM)) return 1;
  if ('COLORTERM' in AI) return 1;
  return Q;
}
function kL4(A) {
  let B = Fk1(A, A && A.isTTY);
  return Wk1(B);
}
t30.exports = {
  supportsColor: kL4,
  stdout: Wk1(Fk1(!0, o30.isatty(1))),
  stderr: Wk1(Fk1(!0, o30.isatty(2))),
};

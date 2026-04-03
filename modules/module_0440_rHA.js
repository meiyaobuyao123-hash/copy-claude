// Module: rHA
// Params: nO5,sHA

var JM9 = D1('os'),
  aHA = D1('tty'),
  zJ = Qc(),
  { env: a7 } = process,
  l91;
if (zJ('no-color') || zJ('no-colors') || zJ('color=false') || zJ('color=never')) l91 = 0;
else if (zJ('color') || zJ('colors') || zJ('color=true') || zJ('color=always')) l91 = 1;
function CM9() {
  if ('FORCE_COLOR' in a7) {
    if (a7.FORCE_COLOR === 'true') return 1;
    if (a7.FORCE_COLOR === 'false') return 0;
    return a7.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(a7.FORCE_COLOR, 10), 3);
  }
}
function XM9(A) {
  if (A === 0) return !1;
  return { level: A, hasBasic: !0, has256: A >= 2, has16m: A >= 3 };
}
function VM9(A, { streamIsTTY: B, sniffFlags: Q = !0 } = {}) {
  let I = CM9();
  if (I !== void 0) l91 = I;
  let G = Q ? l91 : I;
  if (G === 0) return 0;
  if (Q) {
    if (zJ('color=16m') || zJ('color=full') || zJ('color=truecolor')) return 3;
    if (zJ('color=256')) return 2;
  }
  if (A && !B && G === void 0) return 0;
  let D = G || 0;
  if (a7.TERM === 'dumb') return D;
  if (process.platform === 'win32') {
    let Z = JM9.release().split('.');
    if (Number(Z[0]) >= 10 && Number(Z[2]) >= 10586) return Number(Z[2]) >= 14931 ? 3 : 2;
    return 1;
  }
  if ('CI' in a7) {
    if (
      ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE', 'DRONE'].some(
        (Z) => Z in a7
      ) ||
      a7.CI_NAME === 'codeship'
    )
      return 1;
    return D;
  }
  if ('TEAMCITY_VERSION' in a7)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a7.TEAMCITY_VERSION) ? 1 : 0;
  if (a7.COLORTERM === 'truecolor') return 3;
  if ('TERM_PROGRAM' in a7) {
    let Z = Number.parseInt((a7.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
    switch (a7.TERM_PROGRAM) {
      case 'iTerm.app':
        return Z >= 3 ? 3 : 2;
      case 'Apple_Terminal':
        return 2;
    }
  }
  if (/-256(color)?$/i.test(a7.TERM)) return 2;
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a7.TERM)) return 1;
  if ('COLORTERM' in a7) return 1;
  return D;
}
function yq1(A, B = {}) {
  let Q = VM9(A, { streamIsTTY: A && A.isTTY, ...B });
  return XM9(Q);
}
sHA.exports = {
  supportsColor: yq1,
  stdout: yq1({ isTTY: aHA.isatty(1) }),
  stderr: yq1({ isTTY: aHA.isatty(2) }),
};

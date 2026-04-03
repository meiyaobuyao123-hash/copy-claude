// Module: QQ0
// Params: n28,BQ0

var xL4 = e30(),
  Ab = Qc();
function AQ0(A) {
  if (/^\d{3,4}$/.test(A)) {
    let Q = /(\d{1,2})(\d{2})/.exec(A);
    return { major: 0, minor: parseInt(Q[1], 10), patch: parseInt(Q[2], 10) };
  }
  let B = (A || '').split('.').map((Q) => parseInt(Q, 10));
  return { major: B[0], minor: B[1], patch: B[2] };
}
function Jk1(A) {
  let { env: B } = process;
  if ('FORCE_HYPERLINK' in B)
    return !(B.FORCE_HYPERLINK.length > 0 && parseInt(B.FORCE_HYPERLINK, 10) === 0);
  if (Ab('no-hyperlink') || Ab('no-hyperlinks') || Ab('hyperlink=false') || Ab('hyperlink=never'))
    return !1;
  if (Ab('hyperlink=true') || Ab('hyperlink=always')) return !0;
  if ('NETLIFY' in B) return !0;
  if (!xL4.supportsColor(A)) return !1;
  if (A && !A.isTTY) return !1;
  if (process.platform === 'win32') return !1;
  if ('CI' in B) return !1;
  if ('TEAMCITY_VERSION' in B) return !1;
  if ('TERM_PROGRAM' in B) {
    let Q = AQ0(B.TERM_PROGRAM_VERSION);
    switch (B.TERM_PROGRAM) {
      case 'iTerm.app':
        if (Q.major === 3) return Q.minor >= 1;
        return Q.major > 3;
      case 'WezTerm':
        return Q.major >= 20200620;
      case 'vscode':
        return Q.major > 1 || (Q.major === 1 && Q.minor >= 72);
    }
  }
  if ('VTE_VERSION' in B) {
    if (B.VTE_VERSION === '0.50.0') return !1;
    let Q = AQ0(B.VTE_VERSION);
    return Q.major > 0 || Q.minor >= 50;
  }
  return !1;
}
BQ0.exports = { supportsHyperlink: Jk1, stdout: Jk1(process.stdout), stderr: Jk1(process.stderr) };

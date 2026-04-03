// Module: AzA
// Params: tHA,n91

var KM9 = D1('tty'),
  i91 = D1('util');
tHA.init = $M9;
tHA.log = EM9;
tHA.formatArgs = zM9;
tHA.save = UM9;
tHA.load = NM9;
tHA.useColors = HM9;
tHA.destroy = i91.deprecate(
  () => {},
  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);
tHA.colors = [6, 2, 3, 4, 5, 1];
try {
  let A = rHA();
  if (A && (A.stderr || A).level >= 2)
    tHA.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76,
      77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162,
      163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199,
      200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
    ];
} catch (A) {}
tHA.inspectOpts = Object.keys(process.env)
  .filter((A) => {
    return /^debug_/i.test(A);
  })
  .reduce((A, B) => {
    let Q = B.substring(6)
        .toLowerCase()
        .replace(/_([a-z])/g, (G, D) => {
          return D.toUpperCase();
        }),
      I = process.env[B];
    if (/^(yes|on|true|enabled)$/i.test(I)) I = !0;
    else if (/^(no|off|false|disabled)$/i.test(I)) I = !1;
    else if (I === 'null') I = null;
    else I = Number(I);
    return ((A[Q] = I), A);
  }, {});
function HM9() {
  return 'colors' in tHA.inspectOpts
    ? Boolean(tHA.inspectOpts.colors)
    : KM9.isatty(process.stderr.fd);
}
function zM9(A) {
  let { namespace: B, useColors: Q } = this;
  if (Q) {
    let I = this.color,
      G = '\x1B[3' + (I < 8 ? I : '8;5;' + I),
      D = `  ${G};1m${B} \x1B[0m`;
    ((A[0] =
      D +
      A[0]
        .split(
          `
`
        )
        .join(
          `
` + D
        )),
      A.push(G + 'm+' + n91.exports.humanize(this.diff) + '\x1B[0m'));
  } else A[0] = wM9() + B + ' ' + A[0];
}
function wM9() {
  if (tHA.inspectOpts.hideDate) return '';
  return new Date().toISOString() + ' ';
}
function EM9(...A) {
  return process.stderr.write(
    i91.formatWithOptions(tHA.inspectOpts, ...A) +
      `
`
  );
}
function UM9(A) {
  if (A) process.env.DEBUG = A;
  else delete process.env.DEBUG;
}
function NM9() {
  return process.env.DEBUG;
}
function $M9(A) {
  A.inspectOpts = {};
  let B = Object.keys(tHA.inspectOpts);
  for (let Q = 0; Q < B.length; Q++) A.inspectOpts[B[Q]] = tHA.inspectOpts[B[Q]];
}
n91.exports = jq1()(tHA);
var { formatters: oHA } = n91.exports;
oHA.o = function (A) {
  return (
    (this.inspectOpts.colors = this.useColors),
    i91
      .inspect(A, this.inspectOpts)
      .split(
        `
`
      )
      .map((B) => B.trim())
      .join(' ')
  );
};
oHA.O = function (A) {
  return ((this.inspectOpts.colors = this.useColors), i91.inspect(A, this.inspectOpts));
};

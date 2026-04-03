// Module: eqA
// Params: Z_5,tqA

function lS9(A) {
  return {
    name: 'Shell Session',
    aliases: ['console'],
    contains: [
      {
        className: 'meta',
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: { end: /[^\\](?=\s*$)/, subLanguage: 'bash' },
      },
    ],
  };
}
tqA.exports = lS9;

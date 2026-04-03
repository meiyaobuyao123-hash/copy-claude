// Module: kMA
// Params: U_5,yMA

function z_9(A) {
  return {
    name: 'Tagger Script',
    contains: [
      {
        className: 'comment',
        begin: /\$noop\(/,
        end: /\)/,
        contains: [{ begin: /\(/, end: /\)/, contains: ['self', { begin: /\\./ }] }],
        relevance: 10,
      },
      { className: 'keyword', begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/, end: /\(/, excludeEnd: !0 },
      { className: 'variable', begin: /%[_a-zA-Z0-9:]*/, end: '%' },
      { className: 'symbol', begin: /\\./ },
    ],
  };
}
yMA.exports = z_9;

// Module: o$A
// Params: yS5,r$A

function GS9(A) {
  return {
    name: 'PHP template',
    subLanguage: 'xml',
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: 'php',
        contains: [
          { begin: '/\\*', end: '\\*/', skip: !0 },
          { begin: 'b"', end: '"', skip: !0 },
          { begin: "b'", end: "'", skip: !0 },
          A.inherit(A.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0,
          }),
          A.inherit(A.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0,
          }),
        ],
      },
    ],
  };
}
r$A.exports = GS9;

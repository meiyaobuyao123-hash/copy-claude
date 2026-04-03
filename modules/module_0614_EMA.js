// Module: EMA
// Params: H_5,wMA

function B_9(A) {
  return {
    name: 'STEP Part 21',
    aliases: ['p21', 'step', 'stp'],
    case_insensitive: !0,
    keywords: { $pattern: '[A-Z_][A-Z0-9_.]*', keyword: 'HEADER ENDSEC DATA' },
    contains: [
      { className: 'meta', begin: 'ISO-10303-21;', relevance: 10 },
      { className: 'meta', begin: 'END-ISO-10303-21;', relevance: 10 },
      A.C_LINE_COMMENT_MODE,
      A.C_BLOCK_COMMENT_MODE,
      A.COMMENT('/\\*\\*!', '\\*/'),
      A.C_NUMBER_MODE,
      A.inherit(A.APOS_STRING_MODE, { illegal: null }),
      A.inherit(A.QUOTE_STRING_MODE, { illegal: null }),
      { className: 'string', begin: "'", end: "'" },
      { className: 'symbol', variants: [{ begin: '#', end: '\\d+', illegal: '\\W' }] },
    ],
  };
}
wMA.exports = B_9;

// Module: bMA
// Params: $_5,vMA

function E_9(A) {
  return {
    name: 'Test Anything Protocol',
    case_insensitive: !0,
    contains: [
      A.HASH_COMMENT_MODE,
      {
        className: 'meta',
        variants: [{ begin: '^TAP version (\\d+)$' }, { begin: '^1\\.\\.(\\d+)$' }],
      },
      { begin: /---$/, end: '\\.\\.\\.$', subLanguage: 'yaml', relevance: 0 },
      { className: 'number', begin: ' (\\d+) ' },
      { className: 'symbol', variants: [{ begin: '^ok' }, { begin: '^not ok' }] },
    ],
  };
}
vMA.exports = E_9;

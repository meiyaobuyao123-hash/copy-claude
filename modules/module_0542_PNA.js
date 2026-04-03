// Module: PNA
// Params: oP5,TNA

function FP9(A) {
  return {
    name: 'LDIF',
    contains: [
      {
        className: 'attribute',
        begin: '^dn',
        end: ': ',
        excludeEnd: !0,
        starts: { end: '$', relevance: 0 },
        relevance: 10,
      },
      {
        className: 'attribute',
        begin: '^\\w',
        end: ': ',
        excludeEnd: !0,
        starts: { end: '$', relevance: 0 },
      },
      { className: 'literal', begin: '^-', end: '$' },
      A.HASH_COMMENT_MODE,
    ],
  };
}
TNA.exports = FP9;

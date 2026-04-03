// Module: YqA
// Params: bS5,ZqA

function FS9(A) {
  return {
    name: 'Python profiler',
    contains: [
      A.C_NUMBER_MODE,
      { begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':', excludeEnd: !0 },
      {
        begin: '(ncalls|tottime|cumtime)',
        end: '$',
        keywords: 'ncalls tottime|10 cumtime|10 filename',
        relevance: 10,
      },
      { begin: 'function calls', end: '$', contains: [A.C_NUMBER_MODE], relevance: 10 },
      A.APOS_STRING_MODE,
      A.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\\(',
        end: '\\)$',
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
      },
    ],
  };
}
ZqA.exports = FS9;

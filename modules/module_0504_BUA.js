// Module: BUA
// Params: VP5,AUA

function nO9(A) {
  if (!A) return null;
  if (typeof A === 'string') return A;
  return A.source;
}
function aO9(...A) {
  return A.map((Q) => nO9(Q)).join('');
}
function sO9(A) {
  return {
    name: 'Erlang REPL',
    keywords: {
      built_in: 'spawn spawn_link self',
      keyword:
        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor',
    },
    contains: [
      { className: 'meta', begin: '^[0-9]+> ', relevance: 10 },
      A.COMMENT('%', '$'),
      {
        className: 'number',
        begin:
          '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
        relevance: 0,
      },
      A.APOS_STRING_MODE,
      A.QUOTE_STRING_MODE,
      { begin: aO9(/\?(::)?/, /([A-Z]\w*)/, /((::)[A-Z]\w*)*/) },
      { begin: '->' },
      { begin: 'ok' },
      { begin: '!' },
      {
        begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        relevance: 0,
      },
      { begin: "[A-Z][a-zA-Z0-9_']*", relevance: 0 },
    ],
  };
}
AUA.exports = sO9;

// Module: BqA
// Params: xS5,AqA

function ZS9(A) {
  let B = {
      keyword:
        'actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor',
      meta: 'iso val tag trn box ref',
      literal: 'this false true',
    },
    Q = { className: 'string', begin: '"""', end: '"""', relevance: 10 },
    I = { className: 'string', begin: '"', end: '"', contains: [A.BACKSLASH_ESCAPE] },
    G = { className: 'string', begin: "'", end: "'", contains: [A.BACKSLASH_ESCAPE], relevance: 0 },
    D = { className: 'type', begin: '\\b_?[A-Z][\\w]*', relevance: 0 },
    Z = { begin: A.IDENT_RE + "'", relevance: 0 };
  return {
    name: 'Pony',
    keywords: B,
    contains: [
      D,
      Q,
      I,
      G,
      Z,
      {
        className: 'number',
        begin:
          '(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
        relevance: 0,
      },
      A.C_LINE_COMMENT_MODE,
      A.C_BLOCK_COMMENT_MODE,
    ],
  };
}
AqA.exports = ZS9;

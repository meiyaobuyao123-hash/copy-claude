// Module: IUA
// Params: KP5,QUA

function rO9(A) {
  let Q = "([a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*|[a-z'][a-zA-Z0-9_']*)",
    I = {
      keyword:
        'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor',
      literal: 'false true',
    },
    G = A.COMMENT('%', '$'),
    D = {
      className: 'number',
      begin:
        '\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)',
      relevance: 0,
    },
    Z = { begin: "fun\\s+[a-z'][a-zA-Z0-9_']*/\\d+" },
    Y = {
      begin: Q + '\\(',
      end: '\\)',
      returnBegin: !0,
      relevance: 0,
      contains: [
        { begin: Q, relevance: 0 },
        { begin: '\\(', end: '\\)', endsWithParent: !0, returnEnd: !0, relevance: 0 },
      ],
    },
    W = { begin: /\{/, end: /\}/, relevance: 0 },
    F = { begin: '\\b_([A-Z][A-Za-z0-9_]*)?', relevance: 0 },
    J = { begin: '[A-Z][a-zA-Z0-9_]*', relevance: 0 },
    C = {
      begin: '#' + A.UNDERSCORE_IDENT_RE,
      relevance: 0,
      returnBegin: !0,
      contains: [
        { begin: '#' + A.UNDERSCORE_IDENT_RE, relevance: 0 },
        { begin: /\{/, end: /\}/, relevance: 0 },
      ],
    },
    X = { beginKeywords: 'fun receive if try case', end: 'end', keywords: I };
  X.contains = [
    G,
    Z,
    A.inherit(A.APOS_STRING_MODE, { className: '' }),
    X,
    Y,
    A.QUOTE_STRING_MODE,
    D,
    W,
    F,
    J,
    C,
  ];
  let V = [G, Z, X, Y, A.QUOTE_STRING_MODE, D, W, F, J, C];
  ((Y.contains[1].contains = V), (W.contains = V), (C.contains[1].contains = V));
  let K = [
      '-module',
      '-record',
      '-undef',
      '-export',
      '-ifdef',
      '-ifndef',
      '-author',
      '-copyright',
      '-doc',
      '-vsn',
      '-import',
      '-include',
      '-include_lib',
      '-compile',
      '-define',
      '-else',
      '-endif',
      '-file',
      '-behaviour',
      '-behavior',
      '-spec',
    ],
    U = { className: 'params', begin: '\\(', end: '\\)', contains: V };
  return {
    name: 'Erlang',
    aliases: ['erl'],
    keywords: I,
    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
    contains: [
      {
        className: 'function',
        begin: "^[a-z'][a-zA-Z0-9_']*\\s*\\(",
        end: '->',
        returnBegin: !0,
        illegal: '\\(|#|//|/\\*|\\\\|:|;',
        contains: [U, A.inherit(A.TITLE_MODE, { begin: "[a-z'][a-zA-Z0-9_']*" })],
        starts: { end: ';|\\.', keywords: I, contains: V },
      },
      G,
      {
        begin: '^-',
        end: '\\.',
        relevance: 0,
        excludeEnd: !0,
        returnBegin: !0,
        keywords: { $pattern: '-' + A.IDENT_RE, keyword: K.map((N) => `${N}|1.5`).join(' ') },
        contains: [U],
      },
      D,
      A.QUOTE_STRING_MODE,
      C,
      F,
      J,
      W,
      { begin: /\.$/ },
    ],
  };
}
QUA.exports = rO9;

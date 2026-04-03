// Module: iEA
// Params: FP5,lEA

function dO9(A) {
  let I = {
      $pattern: '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?',
      keyword:
        'and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0',
    },
    G = { className: 'subst', begin: /#\{/, end: /\}/, keywords: I },
    D = {
      className: 'number',
      begin:
        '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
      relevance: 0,
    },
    Z = `[/|([{<"']`,
    Y = {
      className: 'string',
      begin: `~[a-z](?=[/|([{<"'])`,
      contains: [
        {
          endsParent: !0,
          contains: [
            {
              contains: [A.BACKSLASH_ESCAPE, G],
              variants: [
                { begin: /"/, end: /"/ },
                { begin: /'/, end: /'/ },
                { begin: /\//, end: /\// },
                { begin: /\|/, end: /\|/ },
                { begin: /\(/, end: /\)/ },
                { begin: /\[/, end: /\]/ },
                { begin: /\{/, end: /\}/ },
                { begin: /</, end: />/ },
              ],
            },
          ],
        },
      ],
    },
    W = {
      className: 'string',
      begin: `~[A-Z](?=[/|([{<"'])`,
      contains: [
        { begin: /"/, end: /"/ },
        { begin: /'/, end: /'/ },
        { begin: /\//, end: /\// },
        { begin: /\|/, end: /\|/ },
        { begin: /\(/, end: /\)/ },
        { begin: /\[/, end: /\]/ },
        { begin: /\{/, end: /\}/ },
        { begin: /</, end: />/ },
      ],
    },
    F = {
      className: 'string',
      contains: [A.BACKSLASH_ESCAPE, G],
      variants: [
        { begin: /"""/, end: /"""/ },
        { begin: /'''/, end: /'''/ },
        { begin: /~S"""/, end: /"""/, contains: [] },
        { begin: /~S"/, end: /"/, contains: [] },
        { begin: /~S'''/, end: /'''/, contains: [] },
        { begin: /~S'/, end: /'/, contains: [] },
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
      ],
    },
    J = {
      className: 'function',
      beginKeywords: 'def defp defmacro',
      end: /\B\b/,
      contains: [
        A.inherit(A.TITLE_MODE, { begin: '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?', endsParent: !0 }),
      ],
    },
    C = A.inherit(J, {
      className: 'class',
      beginKeywords: 'defimpl defmodule defprotocol defrecord',
      end: /\bdo\b|$|;/,
    }),
    X = [
      F,
      W,
      Y,
      A.HASH_COMMENT_MODE,
      C,
      J,
      { begin: '::' },
      {
        className: 'symbol',
        begin: ':(?![\\s:])',
        contains: [
          F,
          {
            begin:
              '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?',
          },
        ],
        relevance: 0,
      },
      { className: 'symbol', begin: '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?:(?!:)', relevance: 0 },
      D,
      { className: 'variable', begin: '(\\$\\W)|((\\$|@@?)(\\w+))' },
      { begin: '->' },
      {
        begin: '(' + A.RE_STARTERS_RE + ')\\s*',
        contains: [
          A.HASH_COMMENT_MODE,
          { begin: /\/: (?=\d+\s*[,\]])/, relevance: 0, contains: [D] },
          {
            className: 'regexp',
            illegal: '\\n',
            contains: [A.BACKSLASH_ESCAPE, G],
            variants: [
              { begin: '/', end: '/[a-z]*' },
              { begin: '%r\\[', end: '\\][a-z]*' },
            ],
          },
        ],
        relevance: 0,
      },
    ];
  return ((G.contains = X), { name: 'Elixir', keywords: I, contains: X });
}
lEA.exports = dO9;

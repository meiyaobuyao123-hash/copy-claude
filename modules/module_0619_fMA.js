// Module: fMA
// Params: N_5,xMA

function w_9(A) {
  var B = 'true false yes no null',
    Q = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
    I = {
      className: 'attr',
      variants: [
        { begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
        { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
        { begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)" },
      ],
    },
    G = {
      className: 'template-variable',
      variants: [
        { begin: /\{\{/, end: /\}\}/ },
        { begin: /%\{/, end: /\}/ },
      ],
    },
    D = {
      className: 'string',
      relevance: 0,
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /\S+/ }],
      contains: [A.BACKSLASH_ESCAPE, G],
    },
    Z = A.inherit(D, {
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }],
    }),
    Y = '[0-9]{4}(-[0-9][0-9]){0,2}',
    W = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?',
    F = '(\\.[0-9]*)?',
    J = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?',
    C = { className: 'number', begin: '\\b' + Y + W + F + J + '\\b' },
    X = { end: ',', endsWithParent: !0, excludeEnd: !0, keywords: B, relevance: 0 },
    V = { begin: /\{/, end: /\}/, contains: [X], illegal: '\\n', relevance: 0 },
    K = { begin: '\\[', end: '\\]', contains: [X], illegal: '\\n', relevance: 0 },
    U = [
      I,
      { className: 'meta', begin: '^---\\s*$', relevance: 10 },
      {
        className: 'string',
        begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*',
      },
      {
        begin: '<%[%=-]?',
        end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
      },
      { className: 'type', begin: '!\\w+!' + Q },
      { className: 'type', begin: '!<' + Q + '>' },
      { className: 'type', begin: '!' + Q },
      { className: 'type', begin: '!!' + Q },
      { className: 'meta', begin: '&' + A.UNDERSCORE_IDENT_RE + '$' },
      { className: 'meta', begin: '\\*' + A.UNDERSCORE_IDENT_RE + '$' },
      { className: 'bullet', begin: '-(?=[ ]|$)', relevance: 0 },
      A.HASH_COMMENT_MODE,
      { beginKeywords: B, keywords: { literal: B } },
      C,
      { className: 'number', begin: A.C_NUMBER_RE + '\\b', relevance: 0 },
      V,
      K,
      D,
    ],
    N = [...U];
  return (
    N.pop(),
    N.push(Z),
    (X.contains = N),
    { name: 'YAML', case_insensitive: !0, aliases: ['yml'], contains: U }
  );
}
xMA.exports = w_9;

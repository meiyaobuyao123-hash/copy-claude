// Module: ONA
// Params: rP5,RNA

function ZP9(A) {
  if (!A) return null;
  if (typeof A === 'string') return A;
  return A.source;
}
function YP9(...A) {
  return '(' + A.map((Q) => ZP9(Q)).join('|') + ')';
}
function WP9(A) {
  let B = YP9(
      ...[
        '(?:NeedsTeXFormat|RequirePackage|GetIdInfo)',
        'Provides(?:Expl)?(?:Package|Class|File)',
        '(?:DeclareOption|ProcessOptions)',
        '(?:documentclass|usepackage|input|include)',
        'makeat(?:letter|other)',
        'ExplSyntax(?:On|Off)',
        '(?:new|renew|provide)?command',
        '(?:re)newenvironment',
        '(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand',
        '(?:New|Renew|Provide|Declare)DocumentEnvironment',
        '(?:(?:e|g|x)?def|let)',
        '(?:begin|end)',
        '(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)',
        'caption',
        '(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)',
        '(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)',
        '(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)',
        '(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)',
        '(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)',
        '(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)',
      ].map((g) => g + '(?![a-zA-Z@:_])')
    ),
    Q = new RegExp(
      [
        '(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*',
        '[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}',
        '[qs]__?[a-zA-Z](?:_?[a-zA-Z])+',
        'use(?:_i)?:[a-zA-Z]*',
        '(?:else|fi|or):',
        '(?:if|cs|exp):w',
        '(?:hbox|vbox):n',
        '::[a-zA-Z]_unbraced',
        '::[a-zA-Z:]',
      ]
        .map((g) => g + '(?![a-zA-Z:_])')
        .join('|')
    ),
    I = [{ begin: /[a-zA-Z@]+/ }, { begin: /[^a-zA-Z@]?/ }],
    G = [
      { begin: /\^{6}[0-9a-f]{6}/ },
      { begin: /\^{5}[0-9a-f]{5}/ },
      { begin: /\^{4}[0-9a-f]{4}/ },
      { begin: /\^{3}[0-9a-f]{3}/ },
      { begin: /\^{2}[0-9a-f]{2}/ },
      { begin: /\^{2}[\u0000-\u007f]/ },
    ],
    D = {
      className: 'keyword',
      begin: /\\/,
      relevance: 0,
      contains: [
        { endsParent: !0, begin: B },
        { endsParent: !0, begin: Q },
        { endsParent: !0, variants: G },
        { endsParent: !0, relevance: 0, variants: I },
      ],
    },
    Z = { className: 'params', relevance: 0, begin: /#+\d?/ },
    Y = { variants: G },
    W = { className: 'built_in', relevance: 0, begin: /[$&^_]/ },
    F = { className: 'meta', begin: '% !TeX', end: '$', relevance: 10 },
    J = A.COMMENT('%', '$', { relevance: 0 }),
    C = [D, Z, Y, W, F, J],
    X = { begin: /\{/, end: /\}/, relevance: 0, contains: ['self', ...C] },
    V = A.inherit(X, { relevance: 0, endsParent: !0, contains: [X, ...C] }),
    K = { begin: /\[/, end: /\]/, endsParent: !0, relevance: 0, contains: [X, ...C] },
    U = { begin: /\s+/, relevance: 0 },
    N = [V],
    q = [K],
    M = function (g, Y1) {
      return { contains: [U], starts: { relevance: 0, contains: g, starts: Y1 } };
    },
    R = function (g, Y1) {
      return {
        begin: '\\\\' + g + '(?![a-zA-Z@:_])',
        keywords: { $pattern: /\\[a-zA-Z]+/, keyword: '\\' + g },
        relevance: 0,
        contains: [U],
        starts: Y1,
      };
    },
    T = function (g, Y1) {
      return A.inherit(
        {
          begin: '\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{' + g + '\\})',
          keywords: { $pattern: /\\[a-zA-Z]+/, keyword: '\\begin' },
          relevance: 0,
        },
        M(N, Y1)
      );
    },
    O = (g = 'string') => {
      return A.END_SAME_AS_BEGIN({
        className: g,
        begin: /(.|\r?\n)/,
        end: /(.|\r?\n)/,
        excludeBegin: !0,
        excludeEnd: !0,
        endsParent: !0,
      });
    },
    S = function (g) {
      return { className: 'string', end: '(?=\\\\end\\{' + g + '\\})' };
    },
    f = (g = 'string') => {
      return {
        relevance: 0,
        begin: /\{/,
        starts: {
          endsParent: !0,
          contains: [
            {
              className: g,
              end: /(?=\})/,
              endsParent: !0,
              contains: [{ begin: /\{/, end: /\}/, relevance: 0, contains: ['self'] }],
            },
          ],
        },
      };
    },
    a = [
      ...['verb', 'lstinline'].map((g) => R(g, { contains: [O()] })),
      R('mint', M(N, { contains: [O()] })),
      R('mintinline', M(N, { contains: [f(), O()] })),
      R('url', { contains: [f('link'), f('link')] }),
      R('hyperref', { contains: [f('link')] }),
      R('href', M(q, { contains: [f('link')] })),
      ...[].concat(
        ...['', '\\*'].map((g) => [
          T('verbatim' + g, S('verbatim' + g)),
          T('filecontents' + g, M(N, S('filecontents' + g))),
          ...['', 'B', 'L'].map((Y1) => T(Y1 + 'Verbatim' + g, M(q, S(Y1 + 'Verbatim' + g)))),
        ])
      ),
      T('minted', M(q, M(N, S('minted')))),
    ];
  return { name: 'LaTeX', aliases: ['tex'], contains: [...a, ...C] };
}
RNA.exports = WP9;

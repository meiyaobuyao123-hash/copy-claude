// Module: mUA
// Params: yP5,hUA

function MT9(A) {
  let B = { variants: [A.COMMENT('--', '$'), A.COMMENT(/\{-/, /-\}/, { contains: ['self'] })] },
    Q = { className: 'meta', begin: /\{-#/, end: /#-\}/ },
    I = { className: 'meta', begin: '^#', end: '$' },
    G = { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
    D = {
      begin: '\\(',
      end: '\\)',
      illegal: '"',
      contains: [
        Q,
        I,
        { className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' },
        A.inherit(A.TITLE_MODE, { begin: "[_a-z][\\w']*" }),
        B,
      ],
    },
    Z = { begin: /\{/, end: /\}/, contains: D.contains };
  return {
    name: 'Haskell',
    aliases: ['hs'],
    keywords:
      'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
    contains: [
      {
        beginKeywords: 'module',
        end: 'where',
        keywords: 'module where',
        contains: [D, B],
        illegal: '\\W\\.|;',
      },
      {
        begin: '\\bimport\\b',
        end: '$',
        keywords: 'import qualified as hiding',
        contains: [D, B],
        illegal: '\\W\\.|;',
      },
      {
        className: 'class',
        begin: '^(\\s*)?(class|instance)\\b',
        end: 'where',
        keywords: 'class family instance where',
        contains: [G, D, B],
      },
      {
        className: 'class',
        begin: '\\b(data|(new)?type)\\b',
        end: '$',
        keywords: 'data family type newtype deriving',
        contains: [Q, G, D, Z, B],
      },
      { beginKeywords: 'default', end: '$', contains: [G, D, B] },
      { beginKeywords: 'infix infixl infixr', end: '$', contains: [A.C_NUMBER_MODE, B] },
      {
        begin: '\\bforeign\\b',
        end: '$',
        keywords: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
        contains: [G, A.QUOTE_STRING_MODE, B],
      },
      { className: 'meta', begin: '#!\\/usr\\/bin\\/env runhaskell', end: '$' },
      Q,
      I,
      A.QUOTE_STRING_MODE,
      A.C_NUMBER_MODE,
      G,
      A.inherit(A.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
      B,
      { begin: '->|<-' },
    ],
  };
}
hUA.exports = MT9;

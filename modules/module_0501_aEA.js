// Module: aEA
// Params: JP5,nEA

function uO9(A) {
  let B = { variants: [A.COMMENT('--', '$'), A.COMMENT(/\{-/, /-\}/, { contains: ['self'] })] },
    Q = { className: 'type', begin: "\\b[A-Z][\\w']*", relevance: 0 },
    I = {
      begin: '\\(',
      end: '\\)',
      illegal: '"',
      contains: [{ className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' }, B],
    },
    G = { begin: /\{/, end: /\}/, contains: I.contains },
    D = { className: 'string', begin: "'\\\\?.", end: "'", illegal: '.' };
  return {
    name: 'Elm',
    keywords:
      'let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription',
    contains: [
      {
        beginKeywords: 'port effect module',
        end: 'exposing',
        keywords: 'port effect module where command subscription exposing',
        contains: [I, B],
        illegal: '\\W\\.|;',
      },
      {
        begin: 'import',
        end: '$',
        keywords: 'import as exposing',
        contains: [I, B],
        illegal: '\\W\\.|;',
      },
      { begin: 'type', end: '$', keywords: 'type alias', contains: [Q, I, G, B] },
      { beginKeywords: 'infix infixl infixr', end: '$', contains: [A.C_NUMBER_MODE, B] },
      { begin: 'port', end: '$', keywords: 'port', contains: [B] },
      D,
      A.QUOTE_STRING_MODE,
      A.C_NUMBER_MODE,
      Q,
      A.inherit(A.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
      B,
      { begin: '->|<-' },
    ],
    illegal: /;/,
  };
}
nEA.exports = uO9;

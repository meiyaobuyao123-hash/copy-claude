// Module: IMA
// Params: W_5,QMA

function nS9(A) {
  let Q = { className: 'string', begin: '\\$.{1}' },
    I = { className: 'symbol', begin: '#' + A.UNDERSCORE_IDENT_RE };
  return {
    name: 'Smalltalk',
    aliases: ['st'],
    keywords: 'self super nil true false thisContext',
    contains: [
      A.COMMENT('"', '"'),
      A.APOS_STRING_MODE,
      { className: 'type', begin: '\\b[A-Z][A-Za-z0-9_]*', relevance: 0 },
      { begin: '[a-z][a-zA-Z0-9_]*:', relevance: 0 },
      A.C_NUMBER_MODE,
      I,
      Q,
      {
        begin: '\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|',
        returnBegin: !0,
        end: /\|/,
        illegal: /\S/,
        contains: [{ begin: '(\\|[ ]*)?[a-z][a-zA-Z0-9_]*' }],
      },
      { begin: '#\\(', end: '\\)', contains: [A.APOS_STRING_MODE, Q, A.C_NUMBER_MODE, I] },
    ],
  };
}
QMA.exports = nS9;

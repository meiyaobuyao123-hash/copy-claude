// Module: uwA
// Params: xT5,dwA

function iR9(A) {
  let B =
      'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var',
    Q = 'false true',
    I = [
      A.C_LINE_COMMENT_MODE,
      A.COMMENT(/\{/, /\}/, { relevance: 0 }),
      A.COMMENT(/\(\*/, /\*\)/, { relevance: 10 }),
    ],
    G = { className: 'string', begin: /'/, end: /'/, contains: [{ begin: /''/ }] },
    D = { className: 'string', begin: /(#\d+)+/ },
    Z = { className: 'number', begin: '\\b\\d+(\\.\\d+)?(DT|D|T)', relevance: 0 },
    Y = { className: 'string', begin: '"', end: '"' },
    W = {
      className: 'function',
      beginKeywords: 'procedure',
      end: /[:;]/,
      keywords: 'procedure|10',
      contains: [
        A.TITLE_MODE,
        { className: 'params', begin: /\(/, end: /\)/, keywords: B, contains: [G, D] },
      ].concat(I),
    },
    F = {
      className: 'class',
      begin:
        'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
      returnBegin: !0,
      contains: [A.TITLE_MODE, W],
    };
  return {
    name: 'C/AL',
    case_insensitive: !0,
    keywords: { keyword: B, literal: 'false true' },
    illegal: /\/\*/,
    contains: [G, D, Z, Y, A.NUMBER_MODE, F, W],
  };
}
dwA.exports = iR9;

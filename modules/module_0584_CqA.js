// Module: CqA
// Params: hS5,JqA

function CS9(A) {
  var B = '[ \\t\\f]*',
    Q = '[ \\t\\f]+',
    I = B + '[:=]' + B,
    G = Q,
    D = '(' + I + '|' + G + ')',
    Z = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+',
    Y = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
    W = {
      end: D,
      relevance: 0,
      starts: {
        className: 'string',
        end: /$/,
        relevance: 0,
        contains: [{ begin: '\\\\\\\\' }, { begin: '\\\\\\n' }],
      },
    };
  return {
    name: '.properties',
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      A.COMMENT('^\\s*[!#]', '$'),
      {
        returnBegin: !0,
        variants: [
          { begin: Z + I, relevance: 1 },
          { begin: Z + G, relevance: 0 },
        ],
        contains: [{ className: 'attr', begin: Z, endsParent: !0, relevance: 0 }],
        starts: W,
      },
      {
        begin: Y + D,
        returnBegin: !0,
        relevance: 0,
        contains: [{ className: 'meta', begin: Y, endsParent: !0, relevance: 0 }],
        starts: W,
      },
      { className: 'attr', relevance: 0, begin: Y + B + '$' },
    ],
  };
}
JqA.exports = CS9;

// Module: vwA
// Params: jT5,fwA

function gR9(A) {
  let B = { className: 'literal', begin: /[+-]/, relevance: 0 };
  return {
    name: 'Brainfuck',
    aliases: ['bf'],
    contains: [
      A.COMMENT(
        `[^\\[\\]\\.,\\+\\-<> \r
]`,
        `[\\[\\]\\.,\\+\\-<> \r
]`,
        { returnEnd: !0, relevance: 0 }
      ),
      { className: 'title', begin: '[\\[\\]]', relevance: 0 },
      { className: 'string', begin: '[\\.,]', relevance: 0 },
      { begin: /(?:\+\+|--)/, contains: [B] },
      B,
    ],
  };
}
fwA.exports = gR9;

// Module: xwA
// Params: _T5,kwA

function bR9(A) {
  return {
    name: 'Backus–Naur Form',
    contains: [
      { className: 'attribute', begin: /</, end: />/ },
      {
        begin: /::=/,
        end: /$/,
        contains: [
          { begin: /</, end: />/ },
          A.C_LINE_COMMENT_MODE,
          A.C_BLOCK_COMMENT_MODE,
          A.APOS_STRING_MODE,
          A.QUOTE_STRING_MODE,
        ],
      },
    ],
  };
}
kwA.exports = bR9;

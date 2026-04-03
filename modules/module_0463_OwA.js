// Module: OwA
// Params: OT5,RwA

function jR9(A) {
  let B = {
      className: 'variable',
      variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }],
    },
    Q =
      'BEGIN END if else while do for in break continue delete next nextfile function func exit|10',
    I = {
      className: 'string',
      contains: [A.BACKSLASH_ESCAPE],
      variants: [
        { begin: /(u|b)?r?'''/, end: /'''/, relevance: 10 },
        { begin: /(u|b)?r?"""/, end: /"""/, relevance: 10 },
        { begin: /(u|r|ur)'/, end: /'/, relevance: 10 },
        { begin: /(u|r|ur)"/, end: /"/, relevance: 10 },
        { begin: /(b|br)'/, end: /'/ },
        { begin: /(b|br)"/, end: /"/ },
        A.APOS_STRING_MODE,
        A.QUOTE_STRING_MODE,
      ],
    };
  return {
    name: 'Awk',
    keywords: {
      keyword:
        'BEGIN END if else while do for in break continue delete next nextfile function func exit|10',
    },
    contains: [B, I, A.REGEXP_MODE, A.HASH_COMMENT_MODE, A.NUMBER_MODE],
  };
}
RwA.exports = jR9;

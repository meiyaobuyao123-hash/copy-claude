// Module: zNA
// Params: lP5,HNA

function AP9(A) {
  let B = { literal: 'true false null' },
    Q = [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE],
    I = [A.QUOTE_STRING_MODE, A.C_NUMBER_MODE],
    G = { end: ',', endsWithParent: !0, excludeEnd: !0, contains: I, keywords: B },
    D = {
      begin: /\{/,
      end: /\}/,
      contains: [
        { className: 'attr', begin: /"/, end: /"/, contains: [A.BACKSLASH_ESCAPE], illegal: '\\n' },
        A.inherit(G, { begin: /:/ }),
      ].concat(Q),
      illegal: '\\S',
    },
    Z = { begin: '\\[', end: '\\]', contains: [A.inherit(G)], illegal: '\\S' };
  return (
    I.push(D, Z),
    Q.forEach(function (Y) {
      I.push(Y);
    }),
    { name: 'JSON', contains: I, keywords: B, illegal: '\\S' }
  );
}
HNA.exports = AP9;

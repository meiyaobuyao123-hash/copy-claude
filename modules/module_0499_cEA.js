// Module: cEA
// Params: WP5,pEA

function mO9(A) {
  let B = A.COMMENT(/\(\*/, /\*\)/),
    Q = { className: 'attribute', begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/ },
    G = {
      begin: /=/,
      end: /[.;]/,
      contains: [
        B,
        { className: 'meta', begin: /\?.*\?/ },
        {
          className: 'string',
          variants: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, { begin: '`', end: '`' }],
        },
      ],
    };
  return { name: 'Extended Backus-Naur Form', illegal: /\S/, contains: [B, Q, G] };
}
pEA.exports = mO9;

// Module: UUA
// Params: qP5,EUA

function YT9(A) {
  let I = {
      $pattern: '[A-Z_][A-Z0-9_.]*',
      keyword:
        'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR',
    },
    G = { className: 'meta', begin: '([O])([0-9]+)' },
    D = A.inherit(A.C_NUMBER_MODE, {
      begin: '([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|' + A.C_NUMBER_RE,
    }),
    Z = [
      A.C_LINE_COMMENT_MODE,
      A.C_BLOCK_COMMENT_MODE,
      A.COMMENT(/\(/, /\)/),
      D,
      A.inherit(A.APOS_STRING_MODE, { illegal: null }),
      A.inherit(A.QUOTE_STRING_MODE, { illegal: null }),
      { className: 'name', begin: '([G])([0-9]+\\.?[0-9]?)' },
      { className: 'name', begin: '([M])([0-9]+\\.?[0-9]?)' },
      { className: 'attr', begin: '(VC|VS|#)', end: '(\\d+)' },
      { className: 'attr', begin: '(VZOFX|VZOFY|VZOFZ)' },
      {
        className: 'built_in',
        begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
        contains: [D],
        end: '\\]',
      },
      { className: 'symbol', variants: [{ begin: 'N', end: '\\d+', illegal: '\\W' }] },
    ];
  return {
    name: 'G-code (ISO 6983)',
    aliases: ['nc'],
    case_insensitive: !0,
    keywords: I,
    contains: [{ className: 'meta', begin: '%' }, G].concat(Z),
  };
}
EUA.exports = YT9;

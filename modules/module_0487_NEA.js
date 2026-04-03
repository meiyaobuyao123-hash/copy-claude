// Module: NEA
// Params: rT5,UEA

function OO9(A) {
  let B = {
      $pattern: A.UNDERSCORE_IDENT_RE,
      keyword:
        'abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
      built_in:
        'bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring',
      literal: 'false null true',
    },
    Q = '(0|[1-9][\\d_]*)',
    I = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
    G = '0[bB][01_]+',
    D = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
    Z = '0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
    Y = '([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))',
    W =
      '((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|' +
      Y +
      ')|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)' +
      Y +
      '?)',
    F =
      '(0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))',
    J = '((0|[1-9][\\d_]*)|0[bB][01_]+|' + Z + ')',
    C = '(' + F + '|' + W + ')',
    X = `\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,
    V = { className: 'number', begin: '\\b' + J + '(L|u|U|Lu|LU|uL|UL)?', relevance: 0 },
    K = {
      className: 'number',
      begin: '\\b(' + C + '([fF]|L|i|[fF]i|Li)?|' + J + '(i|[fF]i|Li))',
      relevance: 0,
    },
    U = { className: 'string', begin: "'(" + X + '|.)', end: "'", illegal: '.' },
    q = { className: 'string', begin: '"', contains: [{ begin: X, relevance: 0 }], end: '"[cwd]?' },
    M = { className: 'string', begin: '[rq]"', end: '"[cwd]?', relevance: 5 },
    R = { className: 'string', begin: '`', end: '`[cwd]?' },
    T = { className: 'string', begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?', relevance: 10 },
    O = { className: 'string', begin: 'q"\\{', end: '\\}"' },
    S = { className: 'meta', begin: '^#!', end: '$', relevance: 5 },
    f = { className: 'meta', begin: '#(line)', end: '$', relevance: 5 },
    a = { className: 'keyword', begin: '@[a-zA-Z_][a-zA-Z_\\d]*' },
    g = A.COMMENT('\\/\\+', '\\+\\/', { contains: ['self'], relevance: 10 });
  return {
    name: 'D',
    keywords: B,
    contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, g, T, q, M, R, O, K, V, U, S, f, a],
  };
}
UEA.exports = OO9;

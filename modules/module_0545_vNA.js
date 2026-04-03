// Module: vNA
// Params: AS5,fNA

function wP9(A) {
  var B = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*',
    Q = '\\|[^]*?\\|',
    I = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?',
    G = { className: 'literal', begin: '\\b(t{1}|nil)\\b' },
    D = {
      className: 'number',
      variants: [
        { begin: I, relevance: 0 },
        { begin: '#(b|B)[0-1]+(/[0-1]+)?' },
        { begin: '#(o|O)[0-7]+(/[0-7]+)?' },
        { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' },
        { begin: '#(c|C)\\(' + I + ' +' + I, end: '\\)' },
      ],
    },
    Z = A.inherit(A.QUOTE_STRING_MODE, { illegal: null }),
    Y = A.COMMENT(';', '$', { relevance: 0 }),
    W = { begin: '\\*', end: '\\*' },
    F = { className: 'symbol', begin: '[:&]' + B },
    J = { begin: B, relevance: 0 },
    C = { begin: Q },
    X = { begin: '\\(', end: '\\)', contains: ['self', G, Z, D, J] },
    V = {
      contains: [D, Z, W, F, X, J],
      variants: [
        { begin: "['`]\\(", end: '\\)' },
        { begin: '\\(quote ', end: '\\)', keywords: { name: 'quote' } },
        { begin: "'" + Q },
      ],
    },
    K = { variants: [{ begin: "'" + B }, { begin: "#'" + B + '(::' + B + ')*' }] },
    U = { begin: '\\(\\s*', end: '\\)' },
    N = { endsWithParent: !0, relevance: 0 };
  return (
    (U.contains = [{ className: 'name', variants: [{ begin: B, relevance: 0 }, { begin: Q }] }, N]),
    (N.contains = [V, K, U, G, D, Z, Y, W, F, C, J]),
    { name: 'Lisp', illegal: /\S/, contains: [D, A.SHEBANG(), G, Z, Y, V, K, U, J] }
  );
}
fNA.exports = wP9;

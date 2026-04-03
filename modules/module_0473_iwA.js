// Module: iwA
// Params: vT5,lwA

function aR9(A) {
  let B =
      'assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty',
    Q =
      'shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small',
    I = 'doc by license see throws tagged',
    G = {
      className: 'subst',
      excludeBegin: !0,
      excludeEnd: !0,
      begin: /``/,
      end: /``/,
      keywords: B,
      relevance: 10,
    },
    D = [
      { className: 'string', begin: '"""', end: '"""', relevance: 10 },
      { className: 'string', begin: '"', end: '"', contains: [G] },
      { className: 'string', begin: "'", end: "'" },
      {
        className: 'number',
        begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
        relevance: 0,
      },
    ];
  return (
    (G.contains = D),
    {
      name: 'Ceylon',
      keywords: { keyword: B + ' ' + Q, meta: 'doc by license see throws tagged' },
      illegal: '\\$[^01]|#[^0-9a-fA-F]',
      contains: [
        A.C_LINE_COMMENT_MODE,
        A.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        { className: 'meta', begin: '@[a-z]\\w*(?::"[^"]*")?' },
      ].concat(D),
    }
  );
}
lwA.exports = aR9;

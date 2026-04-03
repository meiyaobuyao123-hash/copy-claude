// Module: p$A
// Params: PS5,u$A

function AS9(A) {
  let B = A.COMMENT(/\{/, /\}/, { contains: ['self'] });
  return {
    name: 'Parser3',
    subLanguage: 'xml',
    relevance: 0,
    contains: [
      A.COMMENT('^#', '$'),
      A.COMMENT(/\^rem\{/, /\}/, { relevance: 10, contains: [B] }),
      { className: 'meta', begin: '^@(?:BASE|USE|CLASS|OPTIONS)$', relevance: 10 },
      { className: 'title', begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$' },
      { className: 'variable', begin: /\$\{?[\w\-.:]+\}?/ },
      { className: 'keyword', begin: /\^[\w\-.:]+/ },
      { className: 'number', begin: '\\^#[0-9a-fA-F]+' },
      A.C_NUMBER_MODE,
    ],
  };
}
u$A.exports = AS9;

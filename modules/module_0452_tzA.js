// Module: tzA
// Params: HT5,ozA

function VR9(A) {
  let B = { className: 'number', begin: /[$%]\d+/ },
    Q = { className: 'number', begin: /\d+/ },
    I = { className: 'number', begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/ },
    G = { className: 'number', begin: /:\d{1,5}/ };
  return {
    name: 'Apache config',
    aliases: ['apacheconf'],
    case_insensitive: !0,
    contains: [
      A.HASH_COMMENT_MODE,
      {
        className: 'section',
        begin: /<\/?/,
        end: />/,
        contains: [I, G, A.inherit(A.QUOTE_STRING_MODE, { relevance: 0 })],
      },
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername',
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: { literal: 'on off all deny allow' },
          contains: [
            { className: 'meta', begin: /\s\[/, end: /\]$/ },
            { className: 'variable', begin: /[\$%]\{/, end: /\}/, contains: ['self', B] },
            I,
            Q,
            A.QUOTE_STRING_MODE,
          ],
        },
      },
    ],
    illegal: /\S/,
  };
}
ozA.exports = VR9;

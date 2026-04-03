// Module: qEA
// Params: oT5,$EA

function TO9(A) {
  if (!A) return null;
  if (typeof A === 'string') return A;
  return A.source;
}
function PO9(...A) {
  return A.map((Q) => TO9(Q)).join('');
}
function SO9(A) {
  let B = { begin: /<\/?[A-Za-z_]/, end: '>', subLanguage: 'xml', relevance: 0 },
    Q = { begin: '^[-\\*]{3,}', end: '$' },
    I = {
      className: 'code',
      variants: [
        { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
        { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
        { begin: '```', end: '```+[ ]*$' },
        { begin: '~~~', end: '~~~+[ ]*$' },
        { begin: '`.+?`' },
        {
          begin: '(?=^( {4}|\\t))',
          contains: [{ begin: '^( {4}|\\t)', end: '(\\n)$' }],
          relevance: 0,
        },
      ],
    },
    G = {
      className: 'bullet',
      begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
      end: '\\s+',
      excludeEnd: !0,
    },
    D = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        { className: 'symbol', begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 },
        { className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 },
      ],
    },
    Y = {
      variants: [
        { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
        { begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 },
        { begin: PO9(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), relevance: 2 },
        { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
        { begin: /\[.+?\]\(.*?\)/, relevance: 0 },
      ],
      returnBegin: !0,
      contains: [
        {
          className: 'string',
          relevance: 0,
          begin: '\\[',
          end: '\\]',
          excludeBegin: !0,
          returnEnd: !0,
        },
        {
          className: 'link',
          relevance: 0,
          begin: '\\]\\(',
          end: '\\)',
          excludeBegin: !0,
          excludeEnd: !0,
        },
        {
          className: 'symbol',
          relevance: 0,
          begin: '\\]\\[',
          end: '\\]',
          excludeBegin: !0,
          excludeEnd: !0,
        },
      ],
    },
    W = {
      className: 'strong',
      contains: [],
      variants: [
        { begin: /_{2}/, end: /_{2}/ },
        { begin: /\*{2}/, end: /\*{2}/ },
      ],
    },
    F = {
      className: 'emphasis',
      contains: [],
      variants: [
        { begin: /\*(?!\*)/, end: /\*/ },
        { begin: /_(?!_)/, end: /_/, relevance: 0 },
      ],
    };
  (W.contains.push(F), F.contains.push(W));
  let J = [B, Y];
  return (
    (W.contains = W.contains.concat(J)),
    (F.contains = F.contains.concat(J)),
    (J = J.concat(W, F)),
    {
      name: 'Markdown',
      aliases: ['md', 'mkdown', 'mkd'],
      contains: [
        {
          className: 'section',
          variants: [
            { begin: '^#{1,6}', end: '$', contains: J },
            {
              begin: '(?=^.+?\\n[=-]{2,}$)',
              contains: [{ begin: '^[=-]*$' }, { begin: '^', end: '\\n', contains: J }],
            },
          ],
        },
        B,
        G,
        W,
        F,
        { className: 'quote', begin: '^>\\s+', contains: J, end: '$' },
        I,
        Q,
        Y,
        D,
      ],
    }
  );
}
$EA.exports = SO9;

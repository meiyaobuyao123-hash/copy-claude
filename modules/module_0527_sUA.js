// Module: sUA
// Params: vP5,aUA

function jT9(A) {
  if (!A) return null;
  if (typeof A === 'string') return A;
  return A.source;
}
function yT9(...A) {
  return A.map((Q) => jT9(Q)).join('');
}
function kT9(A) {
  let I = {
      className: 'attribute',
      begin: yT9('^', /[A-Za-z][A-Za-z0-9-]*/, '(?=\\:\\s)'),
      starts: {
        contains: [
          {
            className: 'punctuation',
            begin: /: /,
            relevance: 0,
            starts: { end: '$', relevance: 0 },
          },
        ],
      },
    },
    G = [I, { begin: '\\n\\n', starts: { subLanguage: [], endsWithParent: !0 } }];
  return {
    name: 'HTTP',
    aliases: ['https'],
    illegal: /\S/,
    contains: [
      {
        begin: '^(?=HTTP/(2|1\\.[01]) \\d{3})',
        end: /$/,
        contains: [
          { className: 'meta', begin: 'HTTP/(2|1\\.[01])' },
          { className: 'number', begin: '\\b\\d{3}\\b' },
        ],
        starts: { end: /\b\B/, illegal: /\S/, contains: G },
      },
      {
        begin: '(?=^[A-Z]+ (.*?) HTTP/(2|1\\.[01])$)',
        end: /$/,
        contains: [
          { className: 'string', begin: ' ', end: ' ', excludeBegin: !0, excludeEnd: !0 },
          { className: 'meta', begin: 'HTTP/(2|1\\.[01])' },
          { className: 'keyword', begin: '[A-Z]+' },
        ],
        starts: { end: /\b\B/, illegal: /\S/, contains: G },
      },
      A.inherit(I, { relevance: 0 }),
    ],
  };
}
aUA.exports = kT9;

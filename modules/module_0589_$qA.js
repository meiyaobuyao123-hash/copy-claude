// Module: $qA
// Params: cS5,NqA

function US9(A) {
  return {
    aliases: ['pycon'],
    contains: [
      {
        className: 'meta',
        starts: { end: / |$/, starts: { end: '$', subLanguage: 'python' } },
        variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
      },
    ],
  };
}
NqA.exports = US9;

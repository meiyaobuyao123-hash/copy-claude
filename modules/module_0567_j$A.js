// Module: j$A
// Params: qS5,_$A

function aP9(A) {
  return {
    name: 'Node REPL',
    contains: [
      {
        className: 'meta',
        starts: { end: / |$/, starts: { end: '$', subLanguage: 'javascript' } },
        variants: [{ begin: /^>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
      },
    ],
  };
}
_$A.exports = aP9;

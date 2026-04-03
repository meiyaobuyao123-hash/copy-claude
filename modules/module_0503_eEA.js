// Module: eEA
// Params: XP5,tEA

function iO9(A) {
  return {
    name: 'ERB',
    subLanguage: 'xml',
    contains: [
      A.COMMENT('<%#', '%>'),
      { begin: '<%[%=-]?', end: '[%-]?%>', subLanguage: 'ruby', excludeBegin: !0, excludeEnd: !0 },
    ],
  };
}
tEA.exports = iO9;

// Module: NNA
// Params: nP5,UNA

function QP9(A) {
  return {
    name: 'Julia REPL',
    contains: [
      {
        className: 'meta',
        begin: /^julia>/,
        relevance: 10,
        starts: { end: /^(?![ ]{6})/, subLanguage: 'julia' },
        aliases: ['jldoctest'],
      },
    ],
  };
}
UNA.exports = QP9;

// Module: twA
// Params: hT5,owA

function oR9(A) {
  return {
    name: 'Clojure REPL',
    contains: [
      {
        className: 'meta',
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: { end: /$/, subLanguage: 'clojure' },
      },
    ],
  };
}
owA.exports = oR9;

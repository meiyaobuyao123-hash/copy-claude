// Module: HE2
// Params: es8,KE2

KE2.exports = function (A) {
  var B = [
    'underline',
    'inverse',
    'grey',
    'yellow',
    'red',
    'green',
    'blue',
    'white',
    'cyan',
    'magenta',
    'brightYellow',
    'brightRed',
    'brightGreen',
    'brightBlue',
    'brightWhite',
    'brightCyan',
    'brightMagenta',
  ];
  return function (Q, I, G) {
    return Q === ' ' ? Q : A[B[Math.round(Math.random() * (B.length - 2))]](Q);
  };
};

// Module: T40
// Params: gi5,O40

var R40 = D1('child_process'),
  q40 = R40.spawn,
  SE4 = R40.exec;
O40.exports = function (A, B, Q) {
  if (typeof B === 'function' && Q === void 0) ((Q = B), (B = void 0));
  if (((A = parseInt(A)), Number.isNaN(A)))
    if (Q) return Q(new Error('pid must be a number'));
    else throw new Error('pid must be a number');
  var I = {},
    G = {};
  switch (((I[A] = []), (G[A] = 1), process.platform)) {
    case 'win32':
      SE4('taskkill /pid ' + A + ' /T /F', Q);
      break;
    case 'darwin':
      qj1(
        A,
        I,
        G,
        function (D) {
          return q40('pgrep', ['-P', D]);
        },
        function () {
          M40(I, B, Q);
        }
      );
      break;
    default:
      qj1(
        A,
        I,
        G,
        function (D) {
          return q40('ps', ['-o', 'pid', '--no-headers', '--ppid', D]);
        },
        function () {
          M40(I, B, Q);
        }
      );
      break;
  }
};
function M40(A, B, Q) {
  var I = {};
  try {
    Object.keys(A).forEach(function (G) {
      if (
        (A[G].forEach(function (D) {
          if (!I[D]) (L40(D, B), (I[D] = 1));
        }),
        !I[G])
      )
        (L40(G, B), (I[G] = 1));
    });
  } catch (G) {
    if (Q) return Q(G);
    else throw G;
  }
  if (Q) return Q();
}
function L40(A, B) {
  try {
    process.kill(parseInt(A, 10), B);
  } catch (Q) {
    if (Q.code !== 'ESRCH') throw Q;
  }
}
function qj1(A, B, Q, I, G) {
  var D = I(A),
    Z = '';
  D.stdout.on('data', function (F) {
    var F = F.toString('ascii');
    Z += F;
  });
  var Y = function (W) {
    if ((delete Q[A], W != 0)) {
      if (Object.keys(Q).length == 0) G();
      return;
    }
    Z.match(/\d+/g).forEach(function (F) {
      ((F = parseInt(F, 10)), B[A].push(F), (B[F] = []), (Q[F] = 1), qj1(F, B, Q, I, G));
    });
  };
  D.on('close', Y);
}

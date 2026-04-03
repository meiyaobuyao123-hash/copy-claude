// Module: qyA
// Params: dg5,$yA

var $d9 = bR1();
function qd9(A) {
  let B = ['mkdir', 'realpath', 'stat', 'rmdir', 'utimes'],
    Q = { ...A };
  return (
    B.forEach((I) => {
      Q[I] = (...G) => {
        let D = G.pop(),
          Z;
        try {
          Z = A[`${I}Sync`](...G);
        } catch (Y) {
          return D(Y);
        }
        D(null, Z);
      };
    }),
    Q
  );
}
function Md9(A) {
  return (...B) =>
    new Promise((Q, I) => {
      (B.push((G, D) => {
        if (G) I(G);
        else Q(D);
      }),
        A(...B));
    });
}
function Ld9(A) {
  return (...B) => {
    let Q, I;
    if (
      (B.push((G, D) => {
        ((Q = G), (I = D));
      }),
      A(...B),
      Q)
    )
      throw Q;
    return I;
  };
}
function Rd9(A) {
  if (
    ((A = { ...A }),
    (A.fs = qd9(A.fs || $d9)),
    (typeof A.retries === 'number' && A.retries > 0) ||
      (A.retries && typeof A.retries.retries === 'number' && A.retries.retries > 0))
  )
    throw Object.assign(new Error('Cannot use retries with the sync api'), { code: 'ESYNC' });
  return A;
}
$yA.exports = { toPromise: Md9, toSync: Ld9, toSyncOptions: Rd9 };

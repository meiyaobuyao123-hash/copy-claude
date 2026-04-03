// Module: M72
// Params: q72

var vi1 = q72,
  $72 = (vi1.isAbsolute = function A(B) {
    return /^(?:\/|\w+:)/.test(B);
  }),
  fi1 = (vi1.normalize = function A(B) {
    B = B.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
    var Q = B.split('/'),
      I = $72(B),
      G = '';
    if (I) G = Q.shift() + '/';
    for (var D = 0; D < Q.length; )
      if (Q[D] === '..')
        if (D > 0 && Q[D - 1] !== '..') Q.splice(--D, 2);
        else if (I) Q.splice(D, 1);
        else ++D;
      else if (Q[D] === '.') Q.splice(D, 1);
      else ++D;
    return G + Q.join('/');
  });
vi1.resolve = function A(B, Q, I) {
  if (!I) Q = fi1(Q);
  if ($72(Q)) return Q;
  if (!I) B = fi1(B);
  return (B = B.replace(/(?:\/|^)[^/]+$/, '')).length ? fi1(B + '/' + Q) : Q;
};

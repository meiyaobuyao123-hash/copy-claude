// Module: Pi1
// Params: lQ2

Object.defineProperty(lQ2, '__esModule', { value: !0 });
lQ2.makeClientConstructor = cQ2;
lQ2.loadPackageDefinition = Pp6;
var vo = Ri1(),
  Rp6 = {
    unary: vo.Client.prototype.makeUnaryRequest,
    server_stream: vo.Client.prototype.makeServerStreamRequest,
    client_stream: vo.Client.prototype.makeClientStreamRequest,
    bidi: vo.Client.prototype.makeBidiStreamRequest,
  };
function Ti1(A) {
  return ['__proto__', 'prototype', 'constructor'].includes(A);
}
function cQ2(A, B, Q) {
  if (!Q) Q = {};
  class I extends vo.Client {}
  return (
    Object.keys(A).forEach((G) => {
      if (Ti1(G)) return;
      let D = A[G],
        Z;
      if (typeof G === 'string' && G.charAt(0) === '$')
        throw new Error('Method names cannot start with $');
      if (D.requestStream)
        if (D.responseStream) Z = 'bidi';
        else Z = 'client_stream';
      else if (D.responseStream) Z = 'server_stream';
      else Z = 'unary';
      let { requestSerialize: Y, responseDeserialize: W } = D,
        F = Op6(Rp6[Z], D.path, Y, W);
      if (
        ((I.prototype[G] = F),
        Object.assign(I.prototype[G], D),
        D.originalName && !Ti1(D.originalName))
      )
        I.prototype[D.originalName] = I.prototype[G];
    }),
    (I.service = A),
    (I.serviceName = B),
    I
  );
}
function Op6(A, B, Q, I) {
  return function (...G) {
    return A.call(this, B, Q, I, ...G);
  };
}
function Tp6(A) {
  return 'format' in A;
}
function Pp6(A) {
  let B = {};
  for (let Q in A)
    if (Object.prototype.hasOwnProperty.call(A, Q)) {
      let I = A[Q],
        G = Q.split('.');
      if (G.some((Y) => Ti1(Y))) continue;
      let D = G[G.length - 1],
        Z = B;
      for (let Y of G.slice(0, -1)) {
        if (!Z[Y]) Z[Y] = {};
        Z = Z[Y];
      }
      if (Tp6(I)) Z[D] = I;
      else Z[D] = cQ2(I, D, {});
    }
  return B;
}

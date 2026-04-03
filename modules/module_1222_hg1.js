// Module: hg1
// Params: gC8,lO0

var c06 = vO0(),
  Ug = zg().Buffer,
  Pz = D1('crypto'),
  gO0 = Rg1(),
  bO0 = D1('util'),
  l06 = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
  Fs = 'secret must be a string or buffer',
  Eg = 'key must be a string or a buffer',
  i06 = 'key must be a string, a buffer or an object',
  bg1 = typeof Pz.createPublicKey === 'function';
if (bg1) ((Eg += ' or a KeyObject'), (Fs += 'or a KeyObject'));
function hO0(A) {
  if (Ug.isBuffer(A)) return;
  if (typeof A === 'string') return;
  if (!bg1) throw $V(Eg);
  if (typeof A !== 'object') throw $V(Eg);
  if (typeof A.type !== 'string') throw $V(Eg);
  if (typeof A.asymmetricKeyType !== 'string') throw $V(Eg);
  if (typeof A.export !== 'function') throw $V(Eg);
}
function mO0(A) {
  if (Ug.isBuffer(A)) return;
  if (typeof A === 'string') return;
  if (typeof A === 'object') return;
  throw $V(i06);
}
function n06(A) {
  if (Ug.isBuffer(A)) return;
  if (typeof A === 'string') return A;
  if (!bg1) throw $V(Fs);
  if (typeof A !== 'object') throw $V(Fs);
  if (A.type !== 'secret') throw $V(Fs);
  if (typeof A.export !== 'function') throw $V(Fs);
}
function gg1(A) {
  return A.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function dO0(A) {
  A = A.toString();
  var B = 4 - (A.length % 4);
  if (B !== 4) for (var Q = 0; Q < B; ++Q) A += '=';
  return A.replace(/\-/g, '+').replace(/_/g, '/');
}
function $V(A) {
  var B = [].slice.call(arguments, 1),
    Q = bO0.format.bind(bO0, A).apply(null, B);
  return new TypeError(Q);
}
function a06(A) {
  return Ug.isBuffer(A) || typeof A === 'string';
}
function Js(A) {
  if (!a06(A)) A = JSON.stringify(A);
  return A;
}
function uO0(A) {
  return function B(Q, I) {
    (n06(I), (Q = Js(Q)));
    var G = Pz.createHmac('sha' + A, I),
      D = (G.update(Q), G.digest('base64'));
    return gg1(D);
  };
}
function s06(A) {
  return function B(Q, I, G) {
    var D = uO0(A)(Q, G);
    return c06(Ug.from(I), Ug.from(D));
  };
}
function pO0(A) {
  return function B(Q, I) {
    (mO0(I), (Q = Js(Q)));
    var G = Pz.createSign('RSA-SHA' + A),
      D = (G.update(Q), G.sign(I, 'base64'));
    return gg1(D);
  };
}
function cO0(A) {
  return function B(Q, I, G) {
    (hO0(G), (Q = Js(Q)), (I = dO0(I)));
    var D = Pz.createVerify('RSA-SHA' + A);
    return (D.update(Q), D.verify(G, I, 'base64'));
  };
}
function r06(A) {
  return function B(Q, I) {
    (mO0(I), (Q = Js(Q)));
    var G = Pz.createSign('RSA-SHA' + A),
      D =
        (G.update(Q),
        G.sign(
          {
            key: I,
            padding: Pz.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: Pz.constants.RSA_PSS_SALTLEN_DIGEST,
          },
          'base64'
        ));
    return gg1(D);
  };
}
function o06(A) {
  return function B(Q, I, G) {
    (hO0(G), (Q = Js(Q)), (I = dO0(I)));
    var D = Pz.createVerify('RSA-SHA' + A);
    return (
      D.update(Q),
      D.verify(
        {
          key: G,
          padding: Pz.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: Pz.constants.RSA_PSS_SALTLEN_DIGEST,
        },
        I,
        'base64'
      )
    );
  };
}
function t06(A) {
  var B = pO0(A);
  return function Q() {
    var I = B.apply(null, arguments);
    return ((I = gO0.derToJose(I, 'ES' + A)), I);
  };
}
function e06(A) {
  var B = cO0(A);
  return function Q(I, G, D) {
    G = gO0.joseToDer(G, 'ES' + A).toString('base64');
    var Z = B(I, G, D);
    return Z;
  };
}
function A26() {
  return function A() {
    return '';
  };
}
function B26() {
  return function A(B, Q) {
    return Q === '';
  };
}
lO0.exports = function A(B) {
  var Q = { hs: uO0, rs: pO0, ps: r06, es: t06, none: A26 },
    I = { hs: s06, rs: cO0, ps: o06, es: e06, none: B26 },
    G = B.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
  if (!G) throw $V(l06, B);
  var D = (G[1] || G[3]).toLowerCase(),
    Z = G[2];
  return { sign: Q[D](Z), verify: I[D](Z) };
};

// Module: U_A
// Params: Ff

var tg9 =
  (Ff && Ff.__awaiter) ||
  function (A, B, Q, I) {
    function G(D) {
      return D instanceof Q
        ? D
        : new Q(function (Z) {
            Z(D);
          });
    }
    return new (Q || (Q = Promise))(function (D, Z) {
      function Y(J) {
        try {
          F(I.next(J));
        } catch (C) {
          Z(C);
        }
      }
      function W(J) {
        try {
          F(I.throw(J));
        } catch (C) {
          Z(C);
        }
      }
      function F(J) {
        J.done ? D(J.value) : G(J.value).then(Y, W);
      }
      F((I = I.apply(A, B || [])).next());
    });
  };
Object.defineProperty(Ff, '__esModule', { value: !0 });
Ff._fetchTxtRecords = void 0;
var eg9 = new Uint8Array([
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101,
    116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
  ]),
  Ah9 = 'https://cloudflare-dns.com/dns-query',
  Bh9 = ['i', 'e', 'd'],
  Qh9 = 200;
function Ih9(A) {
  return tg9(this, void 0, void 0, function* () {
    let B = yield A(Ah9, {
      method: 'POST',
      headers: { 'Content-Type': 'application/dns-message', Accept: 'application/dns-message' },
      body: eg9,
    });
    if (!B.ok) {
      let G = new Error('Failed to fetch TXT records from DNS');
      throw ((G.name = 'DnsTxtFetchError'), G);
    }
    let Q = yield B.arrayBuffer(),
      I = new Uint8Array(Q);
    return Gh9(I);
  });
}
Ff._fetchTxtRecords = Ih9;
function Gh9(A) {
  let B = A.findIndex(
    (I, G) =>
      G < Qh9 && String.fromCharCode(I) === '=' && Bh9.includes(String.fromCharCode(A[G - 1]))
  );
  if (B === -1) {
    let I = new Error('Failed to parse TXT records from DNS');
    throw ((I.name = 'DnsTxtParseError'), I);
  }
  let Q = '';
  for (let I = B - 1; I < A.length; I++) Q += String.fromCharCode(A[I]);
  return Q.split(',');
}

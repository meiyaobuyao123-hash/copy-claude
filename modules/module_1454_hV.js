// Module: hV
// Params: hl0

Object.defineProperty(hl0, '__esModule', { value: !0 });
hl0.equalsCaseInsensitive =
  hl0.binarySearchUB =
  hl0.setEquals =
  hl0.FlatMap =
  hl0.isPromiseAllSettledRejectionResult =
  hl0.PromiseAllSettled =
  hl0.callWithTimeout =
  hl0.TimeoutError =
  hl0.instrumentationScopeId =
  hl0.hashAttributes =
  hl0.isNotNullish =
    void 0;
function VN6(A) {
  return A !== void 0 && A !== null;
}
hl0.isNotNullish = VN6;
function KN6(A) {
  let B = Object.keys(A);
  if (B.length === 0) return '';
  return ((B = B.sort()), JSON.stringify(B.map((Q) => [Q, A[Q]])));
}
hl0.hashAttributes = KN6;
function HN6(A) {
  return `${A.name}:${A.version ?? ''}:${A.schemaUrl ?? ''}`;
}
hl0.instrumentationScopeId = HN6;
class eF1 extends Error {
  constructor(A) {
    super(A);
    Object.setPrototypeOf(this, eF1.prototype);
  }
}
hl0.TimeoutError = eF1;
function zN6(A, B) {
  let Q,
    I = new Promise(function G(D, Z) {
      Q = setTimeout(function Y() {
        Z(new eF1('Operation timed out.'));
      }, B);
    });
  return Promise.race([A, I]).then(
    (G) => {
      return (clearTimeout(Q), G);
    },
    (G) => {
      throw (clearTimeout(Q), G);
    }
  );
}
hl0.callWithTimeout = zN6;
async function wN6(A) {
  return Promise.all(
    A.map(async (B) => {
      try {
        return { status: 'fulfilled', value: await B };
      } catch (Q) {
        return { status: 'rejected', reason: Q };
      }
    })
  );
}
hl0.PromiseAllSettled = wN6;
function EN6(A) {
  return A.status === 'rejected';
}
hl0.isPromiseAllSettledRejectionResult = EN6;
function UN6(A, B) {
  let Q = [];
  return (
    A.forEach((I) => {
      Q.push(...B(I));
    }),
    Q
  );
}
hl0.FlatMap = UN6;
function NN6(A, B) {
  if (A.size !== B.size) return !1;
  for (let Q of A) if (!B.has(Q)) return !1;
  return !0;
}
hl0.setEquals = NN6;
function $N6(A, B) {
  let Q = 0,
    I = A.length - 1,
    G = A.length;
  while (I >= Q) {
    let D = Q + Math.trunc((I - Q) / 2);
    if (A[D] < B) Q = D + 1;
    else ((G = D), (I = D - 1));
  }
  return G;
}
hl0.binarySearchUB = $N6;
function qN6(A, B) {
  return A.toLowerCase() === B.toLowerCase();
}
hl0.equalsCaseInsensitive = qN6;

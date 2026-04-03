// Module: gL0
// Params: NY

var w16 =
    (NY && NY.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  E16 =
    (NY && NY.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  vL0 =
    (NY && NY.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) w16(B, A, Q);
      }
      return (E16(B, A), B);
    };
Object.defineProperty(NY, '__esModule', { value: !0 });
NY.req = NY.json = NY.toBuffer = void 0;
var U16 = vL0(D1('http')),
  N16 = vL0(D1('https'));
async function bL0(A) {
  let B = 0,
    Q = [];
  for await (let I of A) ((B += I.length), Q.push(I));
  return Buffer.concat(Q, B);
}
NY.toBuffer = bL0;
async function $16(A) {
  let Q = (await bL0(A)).toString('utf8');
  try {
    return JSON.parse(Q);
  } catch (I) {
    let G = I;
    throw ((G.message += ` (input: ${Q})`), G);
  }
}
NY.json = $16;
function q16(A, B = {}) {
  let I = ((typeof A === 'string' ? A : A.href).startsWith('https:') ? N16 : U16).request(A, B),
    G = new Promise((D, Z) => {
      I.once('response', D).once('error', Z).end();
    });
  return ((I.then = G.then.bind(G)), I);
}
NY.req = q16;

// Module: iI2
// Params: cI2

Object.defineProperty(cI2, '__esModule', { value: !0 });
cI2.loadFileDescriptorSetFromObject =
  cI2.loadFileDescriptorSetFromBuffer =
  cI2.fromJSON =
  cI2.loadSync =
  cI2.load =
  cI2.IdempotencyLevel =
  cI2.isAnyExtension =
  cI2.Long =
    void 0;
var il6 = z72(),
  Jw = PC1(),
  Kn1 = OI2(),
  Hn1 = fI2(),
  nl6 = vI2();
cI2.Long = nl6;
function al6(A) {
  return '@type' in A && typeof A['@type'] === 'string';
}
cI2.isAnyExtension = al6;
var mI2;
(function (A) {
  ((A.IDEMPOTENCY_UNKNOWN = 'IDEMPOTENCY_UNKNOWN'),
    (A.NO_SIDE_EFFECTS = 'NO_SIDE_EFFECTS'),
    (A.IDEMPOTENT = 'IDEMPOTENT'));
})((mI2 = cI2.IdempotencyLevel || (cI2.IdempotencyLevel = {})));
var dI2 = { longs: String, enums: String, bytes: String, defaults: !0, oneofs: !0, json: !0 };
function sl6(A, B) {
  if (A === '') return B;
  else return A + '.' + B;
}
function rl6(A) {
  return A instanceof Jw.Service || A instanceof Jw.Type || A instanceof Jw.Enum;
}
function ol6(A) {
  return A instanceof Jw.Namespace || A instanceof Jw.Root;
}
function uI2(A, B) {
  let Q = sl6(B, A.name);
  if (rl6(A)) return [[Q, A]];
  else if (ol6(A) && typeof A.nested !== 'undefined')
    return Object.keys(A.nested)
      .map((I) => {
        return uI2(A.nested[I], Q);
      })
      .reduce((I, G) => I.concat(G), []);
  return [];
}
function bI2(A, B) {
  return function Q(I) {
    return A.toObject(A.decode(I), B);
  };
}
function gI2(A) {
  return function B(Q) {
    if (Array.isArray(Q))
      throw new Error(
        `Failed to serialize message: expected object with ${A.name} structure, got array instead`
      );
    let I = A.fromObject(Q);
    return A.encode(I).finish();
  };
}
function tl6(A) {
  return (A || []).reduce(
    (B, Q) => {
      for (let [I, G] of Object.entries(Q))
        switch (I) {
          case 'uninterpreted_option':
            B.uninterpreted_option.push(Q.uninterpreted_option);
            break;
          default:
            B[I] = G;
        }
      return B;
    },
    { deprecated: !1, idempotency_level: mI2.IDEMPOTENCY_UNKNOWN, uninterpreted_option: [] }
  );
}
function el6(A, B, Q, I) {
  let { resolvedRequestType: G, resolvedResponseType: D } = A;
  return {
    path: '/' + B + '/' + A.name,
    requestStream: !!A.requestStream,
    responseStream: !!A.responseStream,
    requestSerialize: gI2(G),
    requestDeserialize: bI2(G, Q),
    responseSerialize: gI2(D),
    responseDeserialize: bI2(D, Q),
    originalName: il6(A.name),
    requestType: Vn1(G, I),
    responseType: Vn1(D, I),
    options: tl6(A.parsedOptions),
  };
}
function Ai6(A, B, Q, I) {
  let G = {};
  for (let D of A.methodsArray) G[D.name] = el6(D, B, Q, I);
  return G;
}
function Vn1(A, B) {
  let Q = A.toDescriptor('proto3');
  return {
    format: 'Protocol Buffer 3 DescriptorProto',
    type: Q.$type.toObject(Q, dI2),
    fileDescriptorProtos: B,
  };
}
function Bi6(A, B) {
  let Q = A.toDescriptor('proto3');
  return {
    format: 'Protocol Buffer 3 EnumDescriptorProto',
    type: Q.$type.toObject(Q, dI2),
    fileDescriptorProtos: B,
  };
}
function Qi6(A, B, Q, I) {
  if (A instanceof Jw.Service) return Ai6(A, B, Q, I);
  else if (A instanceof Jw.Type) return Vn1(A, I);
  else if (A instanceof Jw.Enum) return Bi6(A, I);
  else throw new Error('Type mismatch in reflection object handling');
}
function jC1(A, B) {
  let Q = {};
  A.resolveAll();
  let G = A.toDescriptor('proto3').file.map((D) =>
    Buffer.from(Kn1.FileDescriptorProto.encode(D).finish())
  );
  for (let [D, Z] of uI2(A, '')) Q[D] = Qi6(Z, D, B, G);
  return Q;
}
function pI2(A, B) {
  B = B || {};
  let Q = Jw.Root.fromDescriptor(A);
  return (Q.resolveAll(), jC1(Q, B));
}
function Ii6(A, B) {
  return Hn1.loadProtosWithOptions(A, B).then((Q) => {
    return jC1(Q, B);
  });
}
cI2.load = Ii6;
function Gi6(A, B) {
  let Q = Hn1.loadProtosWithOptionsSync(A, B);
  return jC1(Q, B);
}
cI2.loadSync = Gi6;
function Di6(A, B) {
  B = B || {};
  let Q = Jw.Root.fromJSON(A);
  return (Q.resolveAll(), jC1(Q, B));
}
cI2.fromJSON = Di6;
function Zi6(A, B) {
  let Q = Kn1.FileDescriptorSet.decode(A);
  return pI2(Q, B);
}
cI2.loadFileDescriptorSetFromBuffer = Zi6;
function Yi6(A, B) {
  let Q = Kn1.FileDescriptorSet.fromObject(A);
  return pI2(Q, B);
}
cI2.loadFileDescriptorSetFromObject = Yi6;
Hn1.addCommonProtos();

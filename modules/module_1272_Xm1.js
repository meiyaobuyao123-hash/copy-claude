// Module: Xm1
// Params: NV8,Kj0

var { Blob: g86, File: h86 } = D1('node:buffer'),
  { kState: eU } = OL(),
  { webidl: jz } = WG();
class yz {
  constructor(A, B, Q = {}) {
    let I = B,
      G = Q.type,
      D = Q.lastModified ?? Date.now();
    this[eU] = { blobLike: A, name: I, type: G, lastModified: D };
  }
  stream(...A) {
    return (jz.brandCheck(this, yz), this[eU].blobLike.stream(...A));
  }
  arrayBuffer(...A) {
    return (jz.brandCheck(this, yz), this[eU].blobLike.arrayBuffer(...A));
  }
  slice(...A) {
    return (jz.brandCheck(this, yz), this[eU].blobLike.slice(...A));
  }
  text(...A) {
    return (jz.brandCheck(this, yz), this[eU].blobLike.text(...A));
  }
  get size() {
    return (jz.brandCheck(this, yz), this[eU].blobLike.size);
  }
  get type() {
    return (jz.brandCheck(this, yz), this[eU].blobLike.type);
  }
  get name() {
    return (jz.brandCheck(this, yz), this[eU].name);
  }
  get lastModified() {
    return (jz.brandCheck(this, yz), this[eU].lastModified);
  }
  get [Symbol.toStringTag]() {
    return 'File';
  }
}
jz.converters.Blob = jz.interfaceConverter(g86);
function m86(A) {
  return (
    A instanceof h86 ||
    (A &&
      (typeof A.stream === 'function' || typeof A.arrayBuffer === 'function') &&
      A[Symbol.toStringTag] === 'File')
  );
}
Kj0.exports = { FileLike: yz, isFileLike: m86 };

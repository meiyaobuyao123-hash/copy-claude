// Module: xAA
// Params: kAA

Object.defineProperty(kAA, '__esModule', { value: !0 });
function hP2(A) {
  let B = [],
    Q = {};
  return {
    add(I, G) {
      while (B.length >= A) {
        let D = B.shift();
        if (D !== void 0) delete Q[D];
      }
      if (Q[I]) this.delete(I);
      (B.push(I), (Q[I] = G));
    },
    clear() {
      ((Q = {}), (B = []));
    },
    get(I) {
      return Q[I];
    },
    size() {
      return B.length;
    },
    delete(I) {
      if (!Q[I]) return !1;
      delete Q[I];
      for (let G = 0; G < B.length; G++)
        if (B[G] === I) {
          B.splice(G, 1);
          break;
        }
      return !0;
    },
  };
}
kAA.makeFifoCache = hP2;

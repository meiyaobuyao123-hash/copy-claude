// Module: XD
// Params: w32

Object.defineProperty(w32, '__esModule', { value: !0 });
w32.Metadata = void 0;
var Qd6 = r8(),
  Id6 = O6(),
  Gd6 = lJ1(),
  Dd6 = /^[0-9a-z_.-]+$/,
  Zd6 = /^[ -~]*$/;
function Yd6(A) {
  return Dd6.test(A);
}
function Wd6(A) {
  return Zd6.test(A);
}
function z32(A) {
  return A.endsWith('-bin');
}
function Fd6(A) {
  return !A.startsWith('grpc-');
}
function iJ1(A) {
  return A.toLowerCase();
}
function H32(A, B) {
  if (!Yd6(A)) throw new Error('Metadata key "' + A + '" contains illegal characters');
  if (B !== null && B !== void 0)
    if (z32(A)) {
      if (!Buffer.isBuffer(B)) throw new Error("keys that end with '-bin' must have Buffer values");
    } else {
      if (Buffer.isBuffer(B))
        throw new Error("keys that don't end with '-bin' must have String values");
      if (!Wd6(B)) throw new Error('Metadata string value "' + B + '" contains illegal characters');
    }
}
class nJ1 {
  constructor(A = {}) {
    ((this.internalRepr = new Map()), (this.options = A));
  }
  set(A, B) {
    ((A = iJ1(A)), H32(A, B), this.internalRepr.set(A, [B]));
  }
  add(A, B) {
    ((A = iJ1(A)), H32(A, B));
    let Q = this.internalRepr.get(A);
    if (Q === void 0) this.internalRepr.set(A, [B]);
    else Q.push(B);
  }
  remove(A) {
    ((A = iJ1(A)), this.internalRepr.delete(A));
  }
  get(A) {
    return ((A = iJ1(A)), this.internalRepr.get(A) || []);
  }
  getMap() {
    let A = {};
    for (let [B, Q] of this.internalRepr)
      if (Q.length > 0) {
        let I = Q[0];
        A[B] = Buffer.isBuffer(I) ? Buffer.from(I) : I;
      }
    return A;
  }
  clone() {
    let A = new nJ1(this.options),
      B = A.internalRepr;
    for (let [Q, I] of this.internalRepr) {
      let G = I.map((D) => {
        if (Buffer.isBuffer(D)) return Buffer.from(D);
        else return D;
      });
      B.set(Q, G);
    }
    return A;
  }
  merge(A) {
    for (let [B, Q] of A.internalRepr) {
      let I = (this.internalRepr.get(B) || []).concat(Q);
      this.internalRepr.set(B, I);
    }
  }
  setOptions(A) {
    this.options = A;
  }
  getOptions() {
    return this.options;
  }
  toHttp2Headers() {
    let A = {};
    for (let [B, Q] of this.internalRepr) A[B] = Q.map(Jd6);
    return A;
  }
  toJSON() {
    let A = {};
    for (let [B, Q] of this.internalRepr) A[B] = Q;
    return A;
  }
  static fromHttp2Headers(A) {
    let B = new nJ1();
    for (let Q of Object.keys(A)) {
      if (Q.charAt(0) === ':') continue;
      let I = A[Q];
      try {
        if (z32(Q)) {
          if (Array.isArray(I))
            I.forEach((G) => {
              B.add(Q, Buffer.from(G, 'base64'));
            });
          else if (I !== void 0)
            if (Fd6(Q))
              I.split(',').forEach((G) => {
                B.add(Q, Buffer.from(G.trim(), 'base64'));
              });
            else B.add(Q, Buffer.from(I, 'base64'));
        } else if (Array.isArray(I))
          I.forEach((G) => {
            B.add(Q, G);
          });
        else if (I !== void 0) B.add(Q, I);
      } catch (G) {
        let D = `Failed to add metadata entry ${Q}: ${I}. ${Gd6.getErrorMessage(G)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
        Qd6.log(Id6.LogVerbosity.ERROR, D);
      }
    }
    return B;
  }
}
w32.Metadata = nJ1;
var Jd6 = (A) => {
  return Buffer.isBuffer(A) ? A.toString('base64') : A;
};

// Module: sJ1
// Params: U32

Object.defineProperty(U32, '__esModule', { value: !0 });
U32.CallCredentials = void 0;
var Yi1 = XD();
function Cd6(A) {
  return 'getRequestHeaders' in A && typeof A.getRequestHeaders === 'function';
}
class Jm {
  static createFromMetadataGenerator(A) {
    return new Wi1(A);
  }
  static createFromGoogleCredential(A) {
    return Jm.createFromMetadataGenerator((B, Q) => {
      let I;
      if (Cd6(A)) I = A.getRequestHeaders(B.service_url);
      else
        I = new Promise((G, D) => {
          A.getRequestMetadata(B.service_url, (Z, Y) => {
            if (Z) {
              D(Z);
              return;
            }
            if (!Y) {
              D(new Error('Headers not set by metadata plugin'));
              return;
            }
            G(Y);
          });
        });
      I.then(
        (G) => {
          let D = new Yi1.Metadata();
          for (let Z of Object.keys(G)) D.add(Z, G[Z]);
          Q(null, D);
        },
        (G) => {
          Q(G);
        }
      );
    });
  }
  static createEmpty() {
    return new Fi1();
  }
}
U32.CallCredentials = Jm;
class aJ1 extends Jm {
  constructor(A) {
    super();
    this.creds = A;
  }
  async generateMetadata(A) {
    let B = new Yi1.Metadata(),
      Q = await Promise.all(this.creds.map((I) => I.generateMetadata(A)));
    for (let I of Q) B.merge(I);
    return B;
  }
  compose(A) {
    return new aJ1(this.creds.concat([A]));
  }
  _equals(A) {
    if (this === A) return !0;
    if (A instanceof aJ1) return this.creds.every((B, Q) => B._equals(A.creds[Q]));
    else return !1;
  }
}
class Wi1 extends Jm {
  constructor(A) {
    super();
    this.metadataGenerator = A;
  }
  generateMetadata(A) {
    return new Promise((B, Q) => {
      this.metadataGenerator(A, (I, G) => {
        if (G !== void 0) B(G);
        else Q(I);
      });
    });
  }
  compose(A) {
    return new aJ1([this, A]);
  }
  _equals(A) {
    if (this === A) return !0;
    if (A instanceof Wi1) return this.metadataGenerator === A.metadataGenerator;
    else return !1;
  }
}
class Fi1 extends Jm {
  generateMetadata(A) {
    return Promise.resolve(new Yi1.Metadata());
  }
  compose(A) {
    return A;
  }
  _equals(A) {
    return A instanceof Fi1;
  }
}

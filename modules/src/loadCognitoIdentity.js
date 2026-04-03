// Module: of1
// Params: hY8,UX0

var { defineProperty: mG1, getOwnPropertyDescriptor: Bg4, getOwnPropertyNames: FX0 } = Object,
  Qg4 = Object.prototype.hasOwnProperty,
  tW = (A, B) => mG1(A, 'name', { value: B, configurable: !0 }),
  Ig4 = (A, B) =>
    function Q() {
      return (A && (B = A[FX0(A)[0]]((A = 0))), B);
    },
  JX0 = (A, B) => {
    for (var Q in B) mG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Gg4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of FX0(B))
        if (!Qg4.call(A, G) && G !== Q)
          mG1(A, G, { get: () => B[G], enumerable: !(I = Bg4(B, G)) || I.enumerable });
    }
    return A;
  },
  Dg4 = (A) => Gg4(mG1({}, '__esModule', { value: !0 }), A),
  af1 = {};
JX0(af1, {
  CognitoIdentityClient: () => hG1.CognitoIdentityClient,
  GetCredentialsForIdentityCommand: () => hG1.GetCredentialsForIdentityCommand,
  GetIdCommand: () => hG1.GetIdCommand,
});
var hG1,
  CX0 = Ig4({
    'src/loadCognitoIdentity.ts'() {
      hG1 = WX0();
    },
  }),
  XX0 = {};
JX0(XX0, { fromCognitoIdentity: () => rf1, fromCognitoIdentityPool: () => wX0 });
UX0.exports = Dg4(XX0);
var dG1 = t7();
function sf1(A) {
  return Promise.all(
    Object.keys(A).reduce((B, Q) => {
      let I = A[Q];
      if (typeof I === 'string') B.push([Q, I]);
      else B.push(I().then((G) => [Q, G]));
      return B;
    }, [])
  ).then((B) =>
    B.reduce((Q, [I, G]) => {
      return ((Q[I] = G), Q);
    }, {})
  );
}
tW(sf1, 'resolveLogins');
function rf1(A) {
  return async (B) => {
    A.logger?.debug('@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity');
    let { GetCredentialsForIdentityCommand: Q, CognitoIdentityClient: I } =
        await Promise.resolve().then(() => (CX0(), af1)),
      G = tW(
        (F) => A.clientConfig?.[F] ?? A.parentClientConfig?.[F] ?? B?.callerClientConfig?.[F],
        'fromConfigs'
      ),
      {
        Credentials: {
          AccessKeyId: D = VX0(A.logger),
          Expiration: Z,
          SecretKey: Y = HX0(A.logger),
          SessionToken: W,
        } = KX0(A.logger),
      } = await (
        A.client ??
        new I(
          Object.assign({}, A.clientConfig ?? {}, { region: G('region'), profile: G('profile') })
        )
      ).send(
        new Q({
          CustomRoleArn: A.customRoleArn,
          IdentityId: A.identityId,
          Logins: A.logins ? await sf1(A.logins) : void 0,
        })
      );
    return {
      identityId: A.identityId,
      accessKeyId: D,
      secretAccessKey: Y,
      sessionToken: W,
      expiration: Z,
    };
  };
}
tW(rf1, 'fromCognitoIdentity');
function VX0(A) {
  throw new dG1.CredentialsProviderError(
    'Response from Amazon Cognito contained no access key ID',
    { logger: A }
  );
}
tW(VX0, 'throwOnMissingAccessKeyId');
function KX0(A) {
  throw new dG1.CredentialsProviderError('Response from Amazon Cognito contained no credentials', {
    logger: A,
  });
}
tW(KX0, 'throwOnMissingCredentials');
function HX0(A) {
  throw new dG1.CredentialsProviderError('Response from Amazon Cognito contained no secret key', {
    logger: A,
  });
}
tW(HX0, 'throwOnMissingSecretKey');
var nf1 = 'IdentityIds',
  Zg4 = class {
    constructor(A = 'aws:cognito-identity-ids') {
      this.dbName = A;
    }
    static {
      tW(this, 'IndexedDbStorage');
    }
    getItem(A) {
      return this.withObjectStore('readonly', (B) => {
        let Q = B.get(A);
        return new Promise((I) => {
          ((Q.onerror = () => I(null)), (Q.onsuccess = () => I(Q.result ? Q.result.value : null)));
        });
      }).catch(() => null);
    }
    removeItem(A) {
      return this.withObjectStore('readwrite', (B) => {
        let Q = B.delete(A);
        return new Promise((I, G) => {
          ((Q.onerror = () => G(Q.error)), (Q.onsuccess = () => I()));
        });
      });
    }
    setItem(A, B) {
      return this.withObjectStore('readwrite', (Q) => {
        let I = Q.put({ id: A, value: B });
        return new Promise((G, D) => {
          ((I.onerror = () => D(I.error)), (I.onsuccess = () => G()));
        });
      });
    }
    getDb() {
      let A = self.indexedDB.open(this.dbName, 1);
      return new Promise((B, Q) => {
        ((A.onsuccess = () => {
          B(A.result);
        }),
          (A.onerror = () => {
            Q(A.error);
          }),
          (A.onblocked = () => {
            Q(new Error('Unable to access DB'));
          }),
          (A.onupgradeneeded = () => {
            let I = A.result;
            ((I.onerror = () => {
              Q(new Error('Failed to create object store'));
            }),
              I.createObjectStore(nf1, { keyPath: 'id' }));
          }));
      });
    }
    withObjectStore(A, B) {
      return this.getDb().then((Q) => {
        let I = Q.transaction(nf1, A);
        return (
          (I.oncomplete = () => Q.close()),
          new Promise((G, D) => {
            ((I.onerror = () => D(I.error)), G(B(I.objectStore(nf1))));
          }).catch((G) => {
            throw (Q.close(), G);
          })
        );
      });
    }
  },
  Yg4 = class {
    constructor(A = {}) {
      this.store = A;
    }
    static {
      tW(this, 'InMemoryStorage');
    }
    getItem(A) {
      if (A in this.store) return this.store[A];
      return null;
    }
    removeItem(A) {
      delete this.store[A];
    }
    setItem(A, B) {
      this.store[A] = B;
    }
  },
  Wg4 = new Yg4();
function zX0() {
  if (typeof self === 'object' && self.indexedDB) return new Zg4();
  if (typeof window === 'object' && window.localStorage) return window.localStorage;
  return Wg4;
}
tW(zX0, 'localStorage');
function wX0({
  accountId: A,
  cache: B = zX0(),
  client: Q,
  clientConfig: I,
  customRoleArn: G,
  identityPoolId: D,
  logins: Z,
  userIdentifier: Y = !Z || Object.keys(Z).length === 0 ? 'ANONYMOUS' : void 0,
  logger: W,
  parentClientConfig: F,
}) {
  W?.debug('@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity');
  let J = Y ? `aws:cognito-identity-credentials:${D}:${Y}` : void 0,
    C = tW(async (X) => {
      let { GetIdCommand: V, CognitoIdentityClient: K } = await Promise.resolve().then(
          () => (CX0(), af1)
        ),
        U = tW((M) => I?.[M] ?? F?.[M] ?? X?.callerClientConfig?.[M], 'fromConfigs'),
        N = Q ?? new K(Object.assign({}, I ?? {}, { region: U('region'), profile: U('profile') })),
        q = J && (await B.getItem(J));
      if (!q) {
        let { IdentityId: M = EX0(W) } = await N.send(
          new V({ AccountId: A, IdentityPoolId: D, Logins: Z ? await sf1(Z) : void 0 })
        );
        if (((q = M), J)) Promise.resolve(B.setItem(J, q)).catch(() => {});
      }
      return ((C = rf1({ client: N, customRoleArn: G, logins: Z, identityId: q })), C(X));
    }, 'provider');
  return (X) =>
    C(X).catch(async (V) => {
      if (J) Promise.resolve(B.removeItem(J)).catch(() => {});
      throw V;
    });
}
tW(wX0, 'fromCognitoIdentityPool');
function EX0(A) {
  throw new dG1.CredentialsProviderError('Response from Amazon Cognito contained no identity ID', {
    logger: A,
  });
}
tW(EX0, 'throwOnMissingId');

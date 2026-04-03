// Module: kv0
// Params: UK8,yv0

var { kConstruct: zZ6 } = SW1(),
  { urlEquals: wZ6, getFieldValues: id1 } = _v0(),
  { kEnumerableProperty: lS, isDisturbed: EZ6 } = I6(),
  { webidl: R9 } = WG(),
  { Response: UZ6, cloneResponse: NZ6, fromInnerResponse: $Z6 } = Br(),
  { Request: DN, fromInnerRequest: qZ6 } = Jh(),
  { kState: yV } = OL(),
  { fetching: MZ6 } = Ir(),
  { urlIsHttpHttpsScheme: _W1, createDeferredPromise: Vh, readAllBytes: LZ6 } = GF(),
  nd1 = D1('node:assert');
class uz {
  #A;
  constructor() {
    if (arguments[0] !== zZ6) R9.illegalConstructor();
    (R9.util.markAsUncloneable(this), (this.#A = arguments[1]));
  }
  async match(A, B = {}) {
    R9.brandCheck(this, uz);
    let Q = 'Cache.match';
    (R9.argumentLengthCheck(arguments, 1, Q),
      (A = R9.converters.RequestInfo(A, Q, 'request')),
      (B = R9.converters.CacheQueryOptions(B, Q, 'options')));
    let I = this.#G(A, B, 1);
    if (I.length === 0) return;
    return I[0];
  }
  async matchAll(A = void 0, B = {}) {
    R9.brandCheck(this, uz);
    let Q = 'Cache.matchAll';
    if (A !== void 0) A = R9.converters.RequestInfo(A, Q, 'request');
    return ((B = R9.converters.CacheQueryOptions(B, Q, 'options')), this.#G(A, B));
  }
  async add(A) {
    R9.brandCheck(this, uz);
    let B = 'Cache.add';
    (R9.argumentLengthCheck(arguments, 1, B), (A = R9.converters.RequestInfo(A, B, 'request')));
    let Q = [A];
    return await this.addAll(Q);
  }
  async addAll(A) {
    R9.brandCheck(this, uz);
    let B = 'Cache.addAll';
    R9.argumentLengthCheck(arguments, 1, B);
    let Q = [],
      I = [];
    for (let C of A) {
      if (C === void 0)
        throw R9.errors.conversionFailed({
          prefix: B,
          argument: 'Argument 1',
          types: ['undefined is not allowed'],
        });
      if (((C = R9.converters.RequestInfo(C)), typeof C === 'string')) continue;
      let X = C[yV];
      if (!_W1(X.url) || X.method !== 'GET')
        throw R9.errors.exception({
          header: B,
          message: 'Expected http/s scheme when method is not GET.',
        });
    }
    let G = [];
    for (let C of A) {
      let X = new DN(C)[yV];
      if (!_W1(X.url)) throw R9.errors.exception({ header: B, message: 'Expected http/s scheme.' });
      ((X.initiator = 'fetch'), (X.destination = 'subresource'), I.push(X));
      let V = Vh();
      (G.push(
        MZ6({
          request: X,
          processResponse(K) {
            if (K.type === 'error' || K.status === 206 || K.status < 200 || K.status > 299)
              V.reject(
                R9.errors.exception({
                  header: 'Cache.addAll',
                  message: 'Received an invalid status code or the request failed.',
                })
              );
            else if (K.headersList.contains('vary')) {
              let U = id1(K.headersList.get('vary'));
              for (let N of U)
                if (N === '*') {
                  V.reject(
                    R9.errors.exception({
                      header: 'Cache.addAll',
                      message: 'invalid vary field value',
                    })
                  );
                  for (let q of G) q.abort();
                  return;
                }
            }
          },
          processResponseEndOfBody(K) {
            if (K.aborted) {
              V.reject(new DOMException('aborted', 'AbortError'));
              return;
            }
            V.resolve(K);
          },
        })
      ),
        Q.push(V.promise));
    }
    let Z = await Promise.all(Q),
      Y = [],
      W = 0;
    for (let C of Z) {
      let X = { type: 'put', request: I[W], response: C };
      (Y.push(X), W++);
    }
    let F = Vh(),
      J = null;
    try {
      this.#B(Y);
    } catch (C) {
      J = C;
    }
    return (
      queueMicrotask(() => {
        if (J === null) F.resolve(void 0);
        else F.reject(J);
      }),
      F.promise
    );
  }
  async put(A, B) {
    R9.brandCheck(this, uz);
    let Q = 'Cache.put';
    (R9.argumentLengthCheck(arguments, 2, Q),
      (A = R9.converters.RequestInfo(A, Q, 'request')),
      (B = R9.converters.Response(B, Q, 'response')));
    let I = null;
    if (A instanceof DN) I = A[yV];
    else I = new DN(A)[yV];
    if (!_W1(I.url) || I.method !== 'GET')
      throw R9.errors.exception({
        header: Q,
        message: 'Expected an http/s scheme when method is not GET',
      });
    let G = B[yV];
    if (G.status === 206) throw R9.errors.exception({ header: Q, message: 'Got 206 status' });
    if (G.headersList.contains('vary')) {
      let X = id1(G.headersList.get('vary'));
      for (let V of X)
        if (V === '*') throw R9.errors.exception({ header: Q, message: 'Got * vary field value' });
    }
    if (G.body && (EZ6(G.body.stream) || G.body.stream.locked))
      throw R9.errors.exception({ header: Q, message: 'Response body is locked or disturbed' });
    let D = NZ6(G),
      Z = Vh();
    if (G.body != null) {
      let V = G.body.stream.getReader();
      LZ6(V).then(Z.resolve, Z.reject);
    } else Z.resolve(void 0);
    let Y = [],
      W = { type: 'put', request: I, response: D };
    Y.push(W);
    let F = await Z.promise;
    if (D.body != null) D.body.source = F;
    let J = Vh(),
      C = null;
    try {
      this.#B(Y);
    } catch (X) {
      C = X;
    }
    return (
      queueMicrotask(() => {
        if (C === null) J.resolve();
        else J.reject(C);
      }),
      J.promise
    );
  }
  async delete(A, B = {}) {
    R9.brandCheck(this, uz);
    let Q = 'Cache.delete';
    (R9.argumentLengthCheck(arguments, 1, Q),
      (A = R9.converters.RequestInfo(A, Q, 'request')),
      (B = R9.converters.CacheQueryOptions(B, Q, 'options')));
    let I = null;
    if (A instanceof DN) {
      if (((I = A[yV]), I.method !== 'GET' && !B.ignoreMethod)) return !1;
    } else (nd1(typeof A === 'string'), (I = new DN(A)[yV]));
    let G = [],
      D = { type: 'delete', request: I, options: B };
    G.push(D);
    let Z = Vh(),
      Y = null,
      W;
    try {
      W = this.#B(G);
    } catch (F) {
      Y = F;
    }
    return (
      queueMicrotask(() => {
        if (Y === null) Z.resolve(!!W?.length);
        else Z.reject(Y);
      }),
      Z.promise
    );
  }
  async keys(A = void 0, B = {}) {
    R9.brandCheck(this, uz);
    let Q = 'Cache.keys';
    if (A !== void 0) A = R9.converters.RequestInfo(A, Q, 'request');
    B = R9.converters.CacheQueryOptions(B, Q, 'options');
    let I = null;
    if (A !== void 0) {
      if (A instanceof DN) {
        if (((I = A[yV]), I.method !== 'GET' && !B.ignoreMethod)) return [];
      } else if (typeof A === 'string') I = new DN(A)[yV];
    }
    let G = Vh(),
      D = [];
    if (A === void 0) for (let Z of this.#A) D.push(Z[0]);
    else {
      let Z = this.#Q(I, B);
      for (let Y of Z) D.push(Y[0]);
    }
    return (
      queueMicrotask(() => {
        let Z = [];
        for (let Y of D) {
          let W = qZ6(Y, new AbortController().signal, 'immutable');
          Z.push(W);
        }
        G.resolve(Object.freeze(Z));
      }),
      G.promise
    );
  }
  #B(A) {
    let B = this.#A,
      Q = [...B],
      I = [],
      G = [];
    try {
      for (let D of A) {
        if (D.type !== 'delete' && D.type !== 'put')
          throw R9.errors.exception({
            header: 'Cache.#batchCacheOperations',
            message: 'operation type does not match "delete" or "put"',
          });
        if (D.type === 'delete' && D.response != null)
          throw R9.errors.exception({
            header: 'Cache.#batchCacheOperations',
            message: 'delete operation should not have an associated response',
          });
        if (this.#Q(D.request, D.options, I).length)
          throw new DOMException('???', 'InvalidStateError');
        let Z;
        if (D.type === 'delete') {
          if (((Z = this.#Q(D.request, D.options)), Z.length === 0)) return [];
          for (let Y of Z) {
            let W = B.indexOf(Y);
            (nd1(W !== -1), B.splice(W, 1));
          }
        } else if (D.type === 'put') {
          if (D.response == null)
            throw R9.errors.exception({
              header: 'Cache.#batchCacheOperations',
              message: 'put operation should have an associated response',
            });
          let Y = D.request;
          if (!_W1(Y.url))
            throw R9.errors.exception({
              header: 'Cache.#batchCacheOperations',
              message: 'expected http or https scheme',
            });
          if (Y.method !== 'GET')
            throw R9.errors.exception({
              header: 'Cache.#batchCacheOperations',
              message: 'not get method',
            });
          if (D.options != null)
            throw R9.errors.exception({
              header: 'Cache.#batchCacheOperations',
              message: 'options must not be defined',
            });
          Z = this.#Q(D.request);
          for (let W of Z) {
            let F = B.indexOf(W);
            (nd1(F !== -1), B.splice(F, 1));
          }
          (B.push([D.request, D.response]), I.push([D.request, D.response]));
        }
        G.push([D.request, D.response]);
      }
      return G;
    } catch (D) {
      throw ((this.#A.length = 0), (this.#A = Q), D);
    }
  }
  #Q(A, B, Q) {
    let I = [],
      G = Q ?? this.#A;
    for (let D of G) {
      let [Z, Y] = D;
      if (this.#I(A, Z, Y, B)) I.push(D);
    }
    return I;
  }
  #I(A, B, Q = null, I) {
    let G = new URL(A.url),
      D = new URL(B.url);
    if (I?.ignoreSearch) ((D.search = ''), (G.search = ''));
    if (!wZ6(G, D, !0)) return !1;
    if (Q == null || I?.ignoreVary || !Q.headersList.contains('vary')) return !0;
    let Z = id1(Q.headersList.get('vary'));
    for (let Y of Z) {
      if (Y === '*') return !1;
      let W = B.headersList.get(Y),
        F = A.headersList.get(Y);
      if (W !== F) return !1;
    }
    return !0;
  }
  #G(A, B, Q = 1 / 0) {
    let I = null;
    if (A !== void 0) {
      if (A instanceof DN) {
        if (((I = A[yV]), I.method !== 'GET' && !B.ignoreMethod)) return [];
      } else if (typeof A === 'string') I = new DN(A)[yV];
    }
    let G = [];
    if (A === void 0) for (let Z of this.#A) G.push(Z[1]);
    else {
      let Z = this.#Q(I, B);
      for (let Y of Z) G.push(Y[1]);
    }
    let D = [];
    for (let Z of G) {
      let Y = $Z6(Z, 'immutable');
      if ((D.push(Y.clone()), D.length >= Q)) break;
    }
    return Object.freeze(D);
  }
}
Object.defineProperties(uz.prototype, {
  [Symbol.toStringTag]: { value: 'Cache', configurable: !0 },
  match: lS,
  matchAll: lS,
  add: lS,
  addAll: lS,
  put: lS,
  delete: lS,
  keys: lS,
});
var jv0 = [
  { key: 'ignoreSearch', converter: R9.converters.boolean, defaultValue: () => !1 },
  { key: 'ignoreMethod', converter: R9.converters.boolean, defaultValue: () => !1 },
  { key: 'ignoreVary', converter: R9.converters.boolean, defaultValue: () => !1 },
];
R9.converters.CacheQueryOptions = R9.dictionaryConverter(jv0);
R9.converters.MultiCacheQueryOptions = R9.dictionaryConverter([
  ...jv0,
  { key: 'cacheName', converter: R9.converters.DOMString },
]);
R9.converters.Response = R9.interfaceConverter(UZ6);
R9.converters['sequence<RequestInfo>'] = R9.sequenceConverter(R9.converters.RequestInfo);
yv0.exports = { Cache: uz };

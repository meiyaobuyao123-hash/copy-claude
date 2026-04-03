// Module: q3A
// Params: $3A,JU1

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ (function (A) {
  if (typeof $3A === 'object' && typeof JU1 !== 'undefined') JU1.exports = A();
  else if (typeof define === 'function' && define.amd) define([], A);
  else {
    var B;
    if (typeof window !== 'undefined') B = window;
    else if (typeof global !== 'undefined') B = global;
    else if (typeof self !== 'undefined') B = self;
    else B = this;
    B.localforage = A();
  }
})(function () {
  var A, B, Q;
  return (function I(G, D, Z) {
    function Y(J, C) {
      if (!D[J]) {
        if (!G[J]) {
          var X = D1;
          if (!C && X) return X(J, !0);
          if (W) return W(J, !0);
          var V = new Error("Cannot find module '" + J + "'");
          throw ((V.code = 'MODULE_NOT_FOUND'), V);
        }
        var K = (D[J] = { exports: {} });
        G[J][0].call(
          K.exports,
          function (U) {
            var N = G[J][1][U];
            return Y(N ? N : U);
          },
          K,
          K.exports,
          I,
          G,
          D,
          Z
        );
      }
      return D[J].exports;
    }
    var W = D1;
    for (var F = 0; F < Z.length; F++) Y(Z[F]);
    return Y;
  })(
    {
      1: [
        function (I, G, D) {
          (function (Z) {
            var Y = Z.MutationObserver || Z.WebKitMutationObserver,
              W;
            if (Y) {
              var F = 0,
                J = new Y(U),
                C = Z.document.createTextNode('');
              (J.observe(C, { characterData: !0 }),
                (W = function () {
                  C.data = F = ++F % 2;
                }));
            } else if (!Z.setImmediate && typeof Z.MessageChannel !== 'undefined') {
              var X = new Z.MessageChannel();
              ((X.port1.onmessage = U),
                (W = function () {
                  X.port2.postMessage(0);
                }));
            } else if (
              'document' in Z &&
              'onreadystatechange' in Z.document.createElement('script')
            )
              W = function () {
                var q = Z.document.createElement('script');
                ((q.onreadystatechange = function () {
                  (U(), (q.onreadystatechange = null), q.parentNode.removeChild(q), (q = null));
                }),
                  Z.document.documentElement.appendChild(q));
              };
            else
              W = function () {
                setTimeout(U, 0);
              };
            var V,
              K = [];
            function U() {
              V = !0;
              var q,
                M,
                R = K.length;
              while (R) {
                ((M = K), (K = []), (q = -1));
                while (++q < R) M[q]();
                R = K.length;
              }
              V = !1;
            }
            G.exports = N;
            function N(q) {
              if (K.push(q) === 1 && !V) W();
            }
          }).call(
            this,
            typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                  ? window
                  : {}
          );
        },
        {},
      ],
      2: [
        function (I, G, D) {
          var Z = I(1);
          function Y() {}
          var W = {},
            F = ['REJECTED'],
            J = ['FULFILLED'],
            C = ['PENDING'];
          G.exports = X;
          function X(S) {
            if (typeof S !== 'function') throw new TypeError('resolver must be a function');
            if (((this.state = C), (this.queue = []), (this.outcome = void 0), S !== Y)) N(this, S);
          }
          ((X.prototype.catch = function (S) {
            return this.then(null, S);
          }),
            (X.prototype.then = function (S, f) {
              if (
                (typeof S !== 'function' && this.state === J) ||
                (typeof f !== 'function' && this.state === F)
              )
                return this;
              var a = new this.constructor(Y);
              if (this.state !== C) {
                var g = this.state === J ? S : f;
                K(a, g, this.outcome);
              } else this.queue.push(new V(a, S, f));
              return a;
            }));
          function V(S, f, a) {
            if (((this.promise = S), typeof f === 'function'))
              ((this.onFulfilled = f), (this.callFulfilled = this.otherCallFulfilled));
            if (typeof a === 'function')
              ((this.onRejected = a), (this.callRejected = this.otherCallRejected));
          }
          ((V.prototype.callFulfilled = function (S) {
            W.resolve(this.promise, S);
          }),
            (V.prototype.otherCallFulfilled = function (S) {
              K(this.promise, this.onFulfilled, S);
            }),
            (V.prototype.callRejected = function (S) {
              W.reject(this.promise, S);
            }),
            (V.prototype.otherCallRejected = function (S) {
              K(this.promise, this.onRejected, S);
            }));
          function K(S, f, a) {
            Z(function () {
              var g;
              try {
                g = f(a);
              } catch (Y1) {
                return W.reject(S, Y1);
              }
              if (g === S) W.reject(S, new TypeError('Cannot resolve promise with itself'));
              else W.resolve(S, g);
            });
          }
          ((W.resolve = function (S, f) {
            var a = q(U, f);
            if (a.status === 'error') return W.reject(S, a.value);
            var g = a.value;
            if (g) N(S, g);
            else {
              ((S.state = J), (S.outcome = f));
              var Y1 = -1,
                r = S.queue.length;
              while (++Y1 < r) S.queue[Y1].callFulfilled(f);
            }
            return S;
          }),
            (W.reject = function (S, f) {
              ((S.state = F), (S.outcome = f));
              var a = -1,
                g = S.queue.length;
              while (++a < g) S.queue[a].callRejected(f);
              return S;
            }));
          function U(S) {
            var f = S && S.then;
            if (S && (typeof S === 'object' || typeof S === 'function') && typeof f === 'function')
              return function a() {
                f.apply(S, arguments);
              };
          }
          function N(S, f) {
            var a = !1;
            function g(H1) {
              if (a) return;
              ((a = !0), W.reject(S, H1));
            }
            function Y1(H1) {
              if (a) return;
              ((a = !0), W.resolve(S, H1));
            }
            function r() {
              f(Y1, g);
            }
            var w1 = q(r);
            if (w1.status === 'error') g(w1.value);
          }
          function q(S, f) {
            var a = {};
            try {
              ((a.value = S(f)), (a.status = 'success'));
            } catch (g) {
              ((a.status = 'error'), (a.value = g));
            }
            return a;
          }
          X.resolve = M;
          function M(S) {
            if (S instanceof this) return S;
            return W.resolve(new this(Y), S);
          }
          X.reject = R;
          function R(S) {
            var f = new this(Y);
            return W.reject(f, S);
          }
          X.all = T;
          function T(S) {
            var f = this;
            if (Object.prototype.toString.call(S) !== '[object Array]')
              return this.reject(new TypeError('must be an array'));
            var a = S.length,
              g = !1;
            if (!a) return this.resolve([]);
            var Y1 = new Array(a),
              r = 0,
              w1 = -1,
              H1 = new this(Y);
            while (++w1 < a) x(S[w1], w1);
            return H1;
            function x(F1, x1) {
              f.resolve(F1).then(o1, function (a1) {
                if (!g) ((g = !0), W.reject(H1, a1));
              });
              function o1(a1) {
                if (((Y1[x1] = a1), ++r === a && !g)) ((g = !0), W.resolve(H1, Y1));
              }
            }
          }
          X.race = O;
          function O(S) {
            var f = this;
            if (Object.prototype.toString.call(S) !== '[object Array]')
              return this.reject(new TypeError('must be an array'));
            var a = S.length,
              g = !1;
            if (!a) return this.resolve([]);
            var Y1 = -1,
              r = new this(Y);
            while (++Y1 < a) w1(S[Y1]);
            return r;
            function w1(H1) {
              f.resolve(H1).then(
                function (x) {
                  if (!g) ((g = !0), W.resolve(r, x));
                },
                function (x) {
                  if (!g) ((g = !0), W.reject(r, x));
                }
              );
            }
          }
        },
        { 1: 1 },
      ],
      3: [
        function (I, G, D) {
          (function (Z) {
            if (typeof Z.Promise !== 'function') Z.Promise = I(2);
          }).call(
            this,
            typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                  ? window
                  : {}
          );
        },
        { 2: 2 },
      ],
      4: [
        function (I, G, D) {
          var Z =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (C1) {
                  return typeof C1;
                }
              : function (C1) {
                  return C1 &&
                    typeof Symbol === 'function' &&
                    C1.constructor === Symbol &&
                    C1 !== Symbol.prototype
                    ? 'symbol'
                    : typeof C1;
                };
          function Y(C1, c1) {
            if (!(C1 instanceof c1)) throw new TypeError('Cannot call a class as a function');
          }
          function W() {
            try {
              if (typeof indexedDB !== 'undefined') return indexedDB;
              if (typeof webkitIndexedDB !== 'undefined') return webkitIndexedDB;
              if (typeof mozIndexedDB !== 'undefined') return mozIndexedDB;
              if (typeof OIndexedDB !== 'undefined') return OIndexedDB;
              if (typeof msIndexedDB !== 'undefined') return msIndexedDB;
            } catch (C1) {
              return;
            }
          }
          var F = W();
          function J() {
            try {
              if (!F || !F.open) return !1;
              var C1 =
                  typeof openDatabase !== 'undefined' &&
                  /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                  !/Chrome/.test(navigator.userAgent) &&
                  !/BlackBerry/.test(navigator.platform),
                c1 = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;
              return (
                (!C1 || c1) &&
                typeof indexedDB !== 'undefined' &&
                typeof IDBKeyRange !== 'undefined'
              );
            } catch (P1) {
              return !1;
            }
          }
          function C(C1, c1) {
            ((C1 = C1 || []), (c1 = c1 || {}));
            try {
              return new Blob(C1, c1);
            } catch (DA) {
              if (DA.name !== 'TypeError') throw DA;
              var P1 =
                  typeof BlobBuilder !== 'undefined'
                    ? BlobBuilder
                    : typeof MSBlobBuilder !== 'undefined'
                      ? MSBlobBuilder
                      : typeof MozBlobBuilder !== 'undefined'
                        ? MozBlobBuilder
                        : WebKitBlobBuilder,
                QA = new P1();
              for (var XA = 0; XA < C1.length; XA += 1) QA.append(C1[XA]);
              return QA.getBlob(c1.type);
            }
          }
          if (typeof Promise === 'undefined') I(3);
          var X = Promise;
          function V(C1, c1) {
            if (c1)
              C1.then(
                function (P1) {
                  c1(null, P1);
                },
                function (P1) {
                  c1(P1);
                }
              );
          }
          function K(C1, c1, P1) {
            if (typeof c1 === 'function') C1.then(c1);
            if (typeof P1 === 'function') C1.catch(P1);
          }
          function U(C1) {
            if (typeof C1 !== 'string')
              (console.warn(C1 + ' used as a key, but it is not a string.'), (C1 = String(C1)));
            return C1;
          }
          function N() {
            if (arguments.length && typeof arguments[arguments.length - 1] === 'function')
              return arguments[arguments.length - 1];
          }
          var q = 'local-forage-detect-blob-support',
            M = void 0,
            R = {},
            T = Object.prototype.toString,
            O = 'readonly',
            S = 'readwrite';
          function f(C1) {
            var c1 = C1.length,
              P1 = new ArrayBuffer(c1),
              QA = new Uint8Array(P1);
            for (var XA = 0; XA < c1; XA++) QA[XA] = C1.charCodeAt(XA);
            return P1;
          }
          function a(C1) {
            return new X(function (c1) {
              var P1 = C1.transaction(q, S),
                QA = C(['']);
              (P1.objectStore(q).put(QA, 'key'),
                (P1.onabort = function (XA) {
                  (XA.preventDefault(), XA.stopPropagation(), c1(!1));
                }),
                (P1.oncomplete = function () {
                  var XA = navigator.userAgent.match(/Chrome\/(\d+)/),
                    DA = navigator.userAgent.match(/Edge\//);
                  c1(DA || !XA || parseInt(XA[1], 10) >= 43);
                }));
            }).catch(function () {
              return !1;
            });
          }
          function g(C1) {
            if (typeof M === 'boolean') return X.resolve(M);
            return a(C1).then(function (c1) {
              return ((M = c1), M);
            });
          }
          function Y1(C1) {
            var c1 = R[C1.name],
              P1 = {};
            if (
              ((P1.promise = new X(function (QA, XA) {
                ((P1.resolve = QA), (P1.reject = XA));
              })),
              c1.deferredOperations.push(P1),
              !c1.dbReady)
            )
              c1.dbReady = P1.promise;
            else
              c1.dbReady = c1.dbReady.then(function () {
                return P1.promise;
              });
          }
          function r(C1) {
            var c1 = R[C1.name],
              P1 = c1.deferredOperations.pop();
            if (P1) return (P1.resolve(), P1.promise);
          }
          function w1(C1, c1) {
            var P1 = R[C1.name],
              QA = P1.deferredOperations.pop();
            if (QA) return (QA.reject(c1), QA.promise);
          }
          function H1(C1, c1) {
            return new X(function (P1, QA) {
              if (((R[C1.name] = R[C1.name] || B1()), C1.db))
                if (c1) (Y1(C1), C1.db.close());
                else return P1(C1.db);
              var XA = [C1.name];
              if (c1) XA.push(C1.version);
              var DA = F.open.apply(F, XA);
              if (c1)
                DA.onupgradeneeded = function (gA) {
                  var eA = DA.result;
                  try {
                    if ((eA.createObjectStore(C1.storeName), gA.oldVersion <= 1))
                      eA.createObjectStore(q);
                  } catch (oA) {
                    if (oA.name === 'ConstraintError')
                      console.warn(
                        'The database "' +
                          C1.name +
                          '" has been upgraded from version ' +
                          gA.oldVersion +
                          ' to version ' +
                          gA.newVersion +
                          ', but the storage "' +
                          C1.storeName +
                          '" already exists.'
                      );
                    else throw oA;
                  }
                };
              ((DA.onerror = function (gA) {
                (gA.preventDefault(), QA(DA.error));
              }),
                (DA.onsuccess = function () {
                  var gA = DA.result;
                  ((gA.onversionchange = function (eA) {
                    eA.target.close();
                  }),
                    P1(gA),
                    r(C1));
                }));
            });
          }
          function x(C1) {
            return H1(C1, !1);
          }
          function F1(C1) {
            return H1(C1, !0);
          }
          function x1(C1, c1) {
            if (!C1.db) return !0;
            var P1 = !C1.db.objectStoreNames.contains(C1.storeName),
              QA = C1.version < C1.db.version,
              XA = C1.version > C1.db.version;
            if (QA) {
              if (C1.version !== c1)
                console.warn(
                  'The database "' +
                    C1.name +
                    `" can't be downgraded from version ` +
                    C1.db.version +
                    ' to version ' +
                    C1.version +
                    '.'
                );
              C1.version = C1.db.version;
            }
            if (XA || P1) {
              if (P1) {
                var DA = C1.db.version + 1;
                if (DA > C1.version) C1.version = DA;
              }
              return !0;
            }
            return !1;
          }
          function o1(C1) {
            return new X(function (c1, P1) {
              var QA = new FileReader();
              ((QA.onerror = P1),
                (QA.onloadend = function (XA) {
                  var DA = btoa(XA.target.result || '');
                  c1({ __local_forage_encoded_blob: !0, data: DA, type: C1.type });
                }),
                QA.readAsBinaryString(C1));
            });
          }
          function a1(C1) {
            var c1 = f(atob(C1.data));
            return C([c1], { type: C1.type });
          }
          function PA(C1) {
            return C1 && C1.__local_forage_encoded_blob;
          }
          function cA(C1) {
            var c1 = this,
              P1 = c1._initReady().then(function () {
                var QA = R[c1._dbInfo.name];
                if (QA && QA.dbReady) return QA.dbReady;
              });
            return (K(P1, C1, C1), P1);
          }
          function FA(C1) {
            Y1(C1);
            var c1 = R[C1.name],
              P1 = c1.forages;
            for (var QA = 0; QA < P1.length; QA++) {
              var XA = P1[QA];
              if (XA._dbInfo.db) (XA._dbInfo.db.close(), (XA._dbInfo.db = null));
            }
            return (
              (C1.db = null),
              x(C1)
                .then(function (DA) {
                  if (((C1.db = DA), x1(C1))) return F1(C1);
                  return DA;
                })
                .then(function (DA) {
                  C1.db = c1.db = DA;
                  for (var gA = 0; gA < P1.length; gA++) P1[gA]._dbInfo.db = DA;
                })
                .catch(function (DA) {
                  throw (w1(C1, DA), DA);
                })
            );
          }
          function f1(C1, c1, P1, QA) {
            if (QA === void 0) QA = 1;
            try {
              var XA = C1.db.transaction(C1.storeName, c1);
              P1(null, XA);
            } catch (DA) {
              if (
                QA > 0 &&
                (!C1.db || DA.name === 'InvalidStateError' || DA.name === 'NotFoundError')
              )
                return X.resolve()
                  .then(function () {
                    if (
                      !C1.db ||
                      (DA.name === 'NotFoundError' &&
                        !C1.db.objectStoreNames.contains(C1.storeName) &&
                        C1.version <= C1.db.version)
                    ) {
                      if (C1.db) C1.version = C1.db.version + 1;
                      return F1(C1);
                    }
                  })
                  .then(function () {
                    return FA(C1).then(function () {
                      f1(C1, c1, P1, QA - 1);
                    });
                  })
                  .catch(P1);
              P1(DA);
            }
          }
          function B1() {
            return { forages: [], db: null, dbReady: null, deferredOperations: [] };
          }
          function v1(C1) {
            var c1 = this,
              P1 = { db: null };
            if (C1) for (var QA in C1) P1[QA] = C1[QA];
            var XA = R[P1.name];
            if (!XA) ((XA = B1()), (R[P1.name] = XA));
            if ((XA.forages.push(c1), !c1._initReady))
              ((c1._initReady = c1.ready), (c1.ready = cA));
            var DA = [];
            function gA() {
              return X.resolve();
            }
            for (var eA = 0; eA < XA.forages.length; eA++) {
              var oA = XA.forages[eA];
              if (oA !== c1) DA.push(oA._initReady().catch(gA));
            }
            var V0 = XA.forages.slice(0);
            return X.all(DA)
              .then(function () {
                return ((P1.db = XA.db), x(P1));
              })
              .then(function (E0) {
                if (((P1.db = E0), x1(P1, c1._defaultConfig.version))) return F1(P1);
                return E0;
              })
              .then(function (E0) {
                ((P1.db = XA.db = E0), (c1._dbInfo = P1));
                for (var d0 = 0; d0 < V0.length; d0++) {
                  var q9 = V0[d0];
                  if (q9 !== c1) ((q9._dbInfo.db = P1.db), (q9._dbInfo.version = P1.version));
                }
              });
          }
          function M1(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = new X(function (XA, DA) {
              P1.ready()
                .then(function () {
                  f1(P1._dbInfo, O, function (gA, eA) {
                    if (gA) return DA(gA);
                    try {
                      var oA = eA.objectStore(P1._dbInfo.storeName),
                        V0 = oA.get(C1);
                      ((V0.onsuccess = function () {
                        var E0 = V0.result;
                        if (E0 === void 0) E0 = null;
                        if (PA(E0)) E0 = a1(E0);
                        XA(E0);
                      }),
                        (V0.onerror = function () {
                          DA(V0.error);
                        }));
                    } catch (E0) {
                      DA(E0);
                    }
                  });
                })
                .catch(DA);
            });
            return (V(QA, c1), QA);
          }
          function AA(C1, c1) {
            var P1 = this,
              QA = new X(function (XA, DA) {
                P1.ready()
                  .then(function () {
                    f1(P1._dbInfo, O, function (gA, eA) {
                      if (gA) return DA(gA);
                      try {
                        var oA = eA.objectStore(P1._dbInfo.storeName),
                          V0 = oA.openCursor(),
                          E0 = 1;
                        ((V0.onsuccess = function () {
                          var d0 = V0.result;
                          if (d0) {
                            var q9 = d0.value;
                            if (PA(q9)) q9 = a1(q9);
                            var r9 = C1(q9, d0.key, E0++);
                            if (r9 !== void 0) XA(r9);
                            else d0.continue();
                          } else XA();
                        }),
                          (V0.onerror = function () {
                            DA(V0.error);
                          }));
                      } catch (d0) {
                        DA(d0);
                      }
                    });
                  })
                  .catch(DA);
              });
            return (V(QA, c1), QA);
          }
          function NA(C1, c1, P1) {
            var QA = this;
            C1 = U(C1);
            var XA = new X(function (DA, gA) {
              var eA;
              QA.ready()
                .then(function () {
                  if (((eA = QA._dbInfo), T.call(c1) === '[object Blob]'))
                    return g(eA.db).then(function (oA) {
                      if (oA) return c1;
                      return o1(c1);
                    });
                  return c1;
                })
                .then(function (oA) {
                  f1(QA._dbInfo, S, function (V0, E0) {
                    if (V0) return gA(V0);
                    try {
                      var d0 = E0.objectStore(QA._dbInfo.storeName);
                      if (oA === null) oA = void 0;
                      var q9 = d0.put(oA, C1);
                      ((E0.oncomplete = function () {
                        if (oA === void 0) oA = null;
                        DA(oA);
                      }),
                        (E0.onabort = E0.onerror =
                          function () {
                            var r9 = q9.error ? q9.error : q9.transaction.error;
                            gA(r9);
                          }));
                    } catch (r9) {
                      gA(r9);
                    }
                  });
                })
                .catch(gA);
            });
            return (V(XA, P1), XA);
          }
          function OA(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = new X(function (XA, DA) {
              P1.ready()
                .then(function () {
                  f1(P1._dbInfo, S, function (gA, eA) {
                    if (gA) return DA(gA);
                    try {
                      var oA = eA.objectStore(P1._dbInfo.storeName),
                        V0 = oA.delete(C1);
                      ((eA.oncomplete = function () {
                        XA();
                      }),
                        (eA.onerror = function () {
                          DA(V0.error);
                        }),
                        (eA.onabort = function () {
                          var E0 = V0.error ? V0.error : V0.transaction.error;
                          DA(E0);
                        }));
                    } catch (E0) {
                      DA(E0);
                    }
                  });
                })
                .catch(DA);
            });
            return (V(QA, c1), QA);
          }
          function o(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    f1(c1._dbInfo, S, function (DA, gA) {
                      if (DA) return XA(DA);
                      try {
                        var eA = gA.objectStore(c1._dbInfo.storeName),
                          oA = eA.clear();
                        ((gA.oncomplete = function () {
                          QA();
                        }),
                          (gA.onabort = gA.onerror =
                            function () {
                              var V0 = oA.error ? oA.error : oA.transaction.error;
                              XA(V0);
                            }));
                      } catch (V0) {
                        XA(V0);
                      }
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function A1(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    f1(c1._dbInfo, O, function (DA, gA) {
                      if (DA) return XA(DA);
                      try {
                        var eA = gA.objectStore(c1._dbInfo.storeName),
                          oA = eA.count();
                        ((oA.onsuccess = function () {
                          QA(oA.result);
                        }),
                          (oA.onerror = function () {
                            XA(oA.error);
                          }));
                      } catch (V0) {
                        XA(V0);
                      }
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function I1(C1, c1) {
            var P1 = this,
              QA = new X(function (XA, DA) {
                if (C1 < 0) {
                  XA(null);
                  return;
                }
                P1.ready()
                  .then(function () {
                    f1(P1._dbInfo, O, function (gA, eA) {
                      if (gA) return DA(gA);
                      try {
                        var oA = eA.objectStore(P1._dbInfo.storeName),
                          V0 = !1,
                          E0 = oA.openKeyCursor();
                        ((E0.onsuccess = function () {
                          var d0 = E0.result;
                          if (!d0) {
                            XA(null);
                            return;
                          }
                          if (C1 === 0) XA(d0.key);
                          else if (!V0) ((V0 = !0), d0.advance(C1));
                          else XA(d0.key);
                        }),
                          (E0.onerror = function () {
                            DA(E0.error);
                          }));
                      } catch (d0) {
                        DA(d0);
                      }
                    });
                  })
                  .catch(DA);
              });
            return (V(QA, c1), QA);
          }
          function E1(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    f1(c1._dbInfo, O, function (DA, gA) {
                      if (DA) return XA(DA);
                      try {
                        var eA = gA.objectStore(c1._dbInfo.storeName),
                          oA = eA.openKeyCursor(),
                          V0 = [];
                        ((oA.onsuccess = function () {
                          var E0 = oA.result;
                          if (!E0) {
                            QA(V0);
                            return;
                          }
                          (V0.push(E0.key), E0.continue());
                        }),
                          (oA.onerror = function () {
                            XA(oA.error);
                          }));
                      } catch (E0) {
                        XA(E0);
                      }
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function N1(C1, c1) {
            c1 = N.apply(this, arguments);
            var P1 = this.config();
            if (((C1 = (typeof C1 !== 'function' && C1) || {}), !C1.name))
              ((C1.name = C1.name || P1.name), (C1.storeName = C1.storeName || P1.storeName));
            var QA = this,
              XA;
            if (!C1.name) XA = X.reject('Invalid arguments');
            else {
              var DA = C1.name === P1.name && QA._dbInfo.db,
                gA = DA
                  ? X.resolve(QA._dbInfo.db)
                  : x(C1).then(function (eA) {
                      var oA = R[C1.name],
                        V0 = oA.forages;
                      oA.db = eA;
                      for (var E0 = 0; E0 < V0.length; E0++) V0[E0]._dbInfo.db = eA;
                      return eA;
                    });
              if (!C1.storeName)
                XA = gA.then(function (eA) {
                  Y1(C1);
                  var oA = R[C1.name],
                    V0 = oA.forages;
                  eA.close();
                  for (var E0 = 0; E0 < V0.length; E0++) {
                    var d0 = V0[E0];
                    d0._dbInfo.db = null;
                  }
                  var q9 = new X(function (r9, L4) {
                    var o6 = F.deleteDatabase(C1.name);
                    ((o6.onerror = function () {
                      var P6 = o6.result;
                      if (P6) P6.close();
                      L4(o6.error);
                    }),
                      (o6.onblocked = function () {
                        console.warn(
                          'dropInstance blocked for database "' +
                            C1.name +
                            '" until all open connections are closed'
                        );
                      }),
                      (o6.onsuccess = function () {
                        var P6 = o6.result;
                        if (P6) P6.close();
                        r9(P6);
                      }));
                  });
                  return q9
                    .then(function (r9) {
                      oA.db = r9;
                      for (var L4 = 0; L4 < V0.length; L4++) {
                        var o6 = V0[L4];
                        r(o6._dbInfo);
                      }
                    })
                    .catch(function (r9) {
                      throw ((w1(C1, r9) || X.resolve()).catch(function () {}), r9);
                    });
                });
              else
                XA = gA.then(function (eA) {
                  if (!eA.objectStoreNames.contains(C1.storeName)) return;
                  var oA = eA.version + 1;
                  Y1(C1);
                  var V0 = R[C1.name],
                    E0 = V0.forages;
                  eA.close();
                  for (var d0 = 0; d0 < E0.length; d0++) {
                    var q9 = E0[d0];
                    ((q9._dbInfo.db = null), (q9._dbInfo.version = oA));
                  }
                  var r9 = new X(function (L4, o6) {
                    var P6 = F.open(C1.name, oA);
                    ((P6.onerror = function (aB) {
                      var k7 = P6.result;
                      (k7.close(), o6(aB));
                    }),
                      (P6.onupgradeneeded = function () {
                        var aB = P6.result;
                        aB.deleteObjectStore(C1.storeName);
                      }),
                      (P6.onsuccess = function () {
                        var aB = P6.result;
                        (aB.close(), L4(aB));
                      }));
                  });
                  return r9
                    .then(function (L4) {
                      V0.db = L4;
                      for (var o6 = 0; o6 < E0.length; o6++) {
                        var P6 = E0[o6];
                        ((P6._dbInfo.db = L4), r(P6._dbInfo));
                      }
                    })
                    .catch(function (L4) {
                      throw ((w1(C1, L4) || X.resolve()).catch(function () {}), L4);
                    });
                });
            }
            return (V(XA, c1), XA);
          }
          var t = {
            _driver: 'asyncStorage',
            _initStorage: v1,
            _support: J(),
            iterate: AA,
            getItem: M1,
            setItem: NA,
            removeItem: OA,
            clear: o,
            length: A1,
            key: I1,
            keys: E1,
            dropInstance: N1,
          };
          function S1() {
            return typeof openDatabase === 'function';
          }
          var k1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            d1 = '~~local_forage_type~',
            e1 = /^~~local_forage_type~([^~]+)~/,
            IA = '__lfsc__:',
            zA = IA.length,
            X0 = 'arbf',
            kA = 'blob',
            z0 = 'si08',
            s2 = 'ui08',
            B2 = 'uic8',
            E2 = 'si16',
            g2 = 'si32',
            Q9 = 'ur16',
            o4 = 'ui32',
            Z0 = 'fl32',
            h0 = 'fl64',
            m0 = zA + X0.length,
            L0 = Object.prototype.toString;
          function H0(C1) {
            var c1 = C1.length * 0.75,
              P1 = C1.length,
              QA,
              XA = 0,
              DA,
              gA,
              eA,
              oA;
            if (C1[C1.length - 1] === '=') {
              if ((c1--, C1[C1.length - 2] === '=')) c1--;
            }
            var V0 = new ArrayBuffer(c1),
              E0 = new Uint8Array(V0);
            for (QA = 0; QA < P1; QA += 4)
              ((DA = k1.indexOf(C1[QA])),
                (gA = k1.indexOf(C1[QA + 1])),
                (eA = k1.indexOf(C1[QA + 2])),
                (oA = k1.indexOf(C1[QA + 3])),
                (E0[XA++] = (DA << 2) | (gA >> 4)),
                (E0[XA++] = ((gA & 15) << 4) | (eA >> 2)),
                (E0[XA++] = ((eA & 3) << 6) | (oA & 63)));
            return V0;
          }
          function j2(C1) {
            var c1 = new Uint8Array(C1),
              P1 = '',
              QA;
            for (QA = 0; QA < c1.length; QA += 3)
              ((P1 += k1[c1[QA] >> 2]),
                (P1 += k1[((c1[QA] & 3) << 4) | (c1[QA + 1] >> 4)]),
                (P1 += k1[((c1[QA + 1] & 15) << 2) | (c1[QA + 2] >> 6)]),
                (P1 += k1[c1[QA + 2] & 63]));
            if (c1.length % 3 === 2) P1 = P1.substring(0, P1.length - 1) + '=';
            else if (c1.length % 3 === 1) P1 = P1.substring(0, P1.length - 2) + '==';
            return P1;
          }
          function y9(C1, c1) {
            var P1 = '';
            if (C1) P1 = L0.call(C1);
            if (
              C1 &&
              (P1 === '[object ArrayBuffer]' ||
                (C1.buffer && L0.call(C1.buffer) === '[object ArrayBuffer]'))
            ) {
              var QA,
                XA = IA;
              if (C1 instanceof ArrayBuffer) ((QA = C1), (XA += X0));
              else if (((QA = C1.buffer), P1 === '[object Int8Array]')) XA += z0;
              else if (P1 === '[object Uint8Array]') XA += s2;
              else if (P1 === '[object Uint8ClampedArray]') XA += B2;
              else if (P1 === '[object Int16Array]') XA += E2;
              else if (P1 === '[object Uint16Array]') XA += Q9;
              else if (P1 === '[object Int32Array]') XA += g2;
              else if (P1 === '[object Uint32Array]') XA += o4;
              else if (P1 === '[object Float32Array]') XA += Z0;
              else if (P1 === '[object Float64Array]') XA += h0;
              else c1(new Error('Failed to get type for BinaryArray'));
              c1(XA + j2(QA));
            } else if (P1 === '[object Blob]') {
              var DA = new FileReader();
              ((DA.onload = function () {
                var gA = d1 + C1.type + '~' + j2(this.result);
                c1(IA + kA + gA);
              }),
                DA.readAsArrayBuffer(C1));
            } else
              try {
                c1(JSON.stringify(C1));
              } catch (gA) {
                (console.error("Couldn't convert value into a JSON string: ", C1), c1(null, gA));
              }
          }
          function z8(C1) {
            if (C1.substring(0, zA) !== IA) return JSON.parse(C1);
            var c1 = C1.substring(m0),
              P1 = C1.substring(zA, m0),
              QA;
            if (P1 === kA && e1.test(c1)) {
              var XA = c1.match(e1);
              ((QA = XA[1]), (c1 = c1.substring(XA[0].length)));
            }
            var DA = H0(c1);
            switch (P1) {
              case X0:
                return DA;
              case kA:
                return C([DA], { type: QA });
              case z0:
                return new Int8Array(DA);
              case s2:
                return new Uint8Array(DA);
              case B2:
                return new Uint8ClampedArray(DA);
              case E2:
                return new Int16Array(DA);
              case Q9:
                return new Uint16Array(DA);
              case g2:
                return new Int32Array(DA);
              case o4:
                return new Uint32Array(DA);
              case Z0:
                return new Float32Array(DA);
              case h0:
                return new Float64Array(DA);
              default:
                throw new Error('Unkown type: ' + P1);
            }
          }
          var zB = { serialize: y9, deserialize: z8, stringToBuffer: H0, bufferToString: j2 };
          function H6(C1, c1, P1, QA) {
            C1.executeSql(
              'CREATE TABLE IF NOT EXISTS ' +
                c1.storeName +
                ' (id INTEGER PRIMARY KEY, key unique, value)',
              [],
              P1,
              QA
            );
          }
          function T2(C1) {
            var c1 = this,
              P1 = { db: null };
            if (C1)
              for (var QA in C1) P1[QA] = typeof C1[QA] !== 'string' ? C1[QA].toString() : C1[QA];
            var XA = new X(function (DA, gA) {
              try {
                P1.db = openDatabase(P1.name, String(P1.version), P1.description, P1.size);
              } catch (eA) {
                return gA(eA);
              }
              P1.db.transaction(function (eA) {
                H6(
                  eA,
                  P1,
                  function () {
                    ((c1._dbInfo = P1), DA());
                  },
                  function (oA, V0) {
                    gA(V0);
                  }
                );
              }, gA);
            });
            return ((P1.serializer = zB), XA);
          }
          function x4(C1, c1, P1, QA, XA, DA) {
            C1.executeSql(
              P1,
              QA,
              XA,
              function (gA, eA) {
                if (eA.code === eA.SYNTAX_ERR)
                  gA.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                    [c1.storeName],
                    function (oA, V0) {
                      if (!V0.rows.length)
                        H6(
                          oA,
                          c1,
                          function () {
                            oA.executeSql(P1, QA, XA, DA);
                          },
                          DA
                        );
                      else DA(oA, eA);
                    },
                    DA
                  );
                else DA(gA, eA);
              },
              DA
            );
          }
          function f0(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = new X(function (XA, DA) {
              P1.ready()
                .then(function () {
                  var gA = P1._dbInfo;
                  gA.db.transaction(function (eA) {
                    x4(
                      eA,
                      gA,
                      'SELECT * FROM ' + gA.storeName + ' WHERE key = ? LIMIT 1',
                      [C1],
                      function (oA, V0) {
                        var E0 = V0.rows.length ? V0.rows.item(0).value : null;
                        if (E0) E0 = gA.serializer.deserialize(E0);
                        XA(E0);
                      },
                      function (oA, V0) {
                        DA(V0);
                      }
                    );
                  });
                })
                .catch(DA);
            });
            return (V(QA, c1), QA);
          }
          function U2(C1, c1) {
            var P1 = this,
              QA = new X(function (XA, DA) {
                P1.ready()
                  .then(function () {
                    var gA = P1._dbInfo;
                    gA.db.transaction(function (eA) {
                      x4(
                        eA,
                        gA,
                        'SELECT * FROM ' + gA.storeName,
                        [],
                        function (oA, V0) {
                          var E0 = V0.rows,
                            d0 = E0.length;
                          for (var q9 = 0; q9 < d0; q9++) {
                            var r9 = E0.item(q9),
                              L4 = r9.value;
                            if (L4) L4 = gA.serializer.deserialize(L4);
                            if (((L4 = C1(L4, r9.key, q9 + 1)), L4 !== void 0)) {
                              XA(L4);
                              return;
                            }
                          }
                          XA();
                        },
                        function (oA, V0) {
                          DA(V0);
                        }
                      );
                    });
                  })
                  .catch(DA);
              });
            return (V(QA, c1), QA);
          }
          function r2(C1, c1, P1, QA) {
            var XA = this;
            C1 = U(C1);
            var DA = new X(function (gA, eA) {
              XA.ready()
                .then(function () {
                  if (c1 === void 0) c1 = null;
                  var oA = c1,
                    V0 = XA._dbInfo;
                  V0.serializer.serialize(c1, function (E0, d0) {
                    if (d0) eA(d0);
                    else
                      V0.db.transaction(
                        function (q9) {
                          x4(
                            q9,
                            V0,
                            'INSERT OR REPLACE INTO ' +
                              V0.storeName +
                              ' (key, value) VALUES (?, ?)',
                            [C1, E0],
                            function () {
                              gA(oA);
                            },
                            function (r9, L4) {
                              eA(L4);
                            }
                          );
                        },
                        function (q9) {
                          if (q9.code === q9.QUOTA_ERR) {
                            if (QA > 0) {
                              gA(r2.apply(XA, [C1, oA, P1, QA - 1]));
                              return;
                            }
                            eA(q9);
                          }
                        }
                      );
                  });
                })
                .catch(eA);
            });
            return (V(DA, P1), DA);
          }
          function T6(C1, c1, P1) {
            return r2.apply(this, [C1, c1, P1, 1]);
          }
          function w8(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = new X(function (XA, DA) {
              P1.ready()
                .then(function () {
                  var gA = P1._dbInfo;
                  gA.db.transaction(function (eA) {
                    x4(
                      eA,
                      gA,
                      'DELETE FROM ' + gA.storeName + ' WHERE key = ?',
                      [C1],
                      function () {
                        XA();
                      },
                      function (oA, V0) {
                        DA(V0);
                      }
                    );
                  });
                })
                .catch(DA);
            });
            return (V(QA, c1), QA);
          }
          function u3(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    var DA = c1._dbInfo;
                    DA.db.transaction(function (gA) {
                      x4(
                        gA,
                        DA,
                        'DELETE FROM ' + DA.storeName,
                        [],
                        function () {
                          QA();
                        },
                        function (eA, oA) {
                          XA(oA);
                        }
                      );
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function iB(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    var DA = c1._dbInfo;
                    DA.db.transaction(function (gA) {
                      x4(
                        gA,
                        DA,
                        'SELECT COUNT(key) as c FROM ' + DA.storeName,
                        [],
                        function (eA, oA) {
                          var V0 = oA.rows.item(0).c;
                          QA(V0);
                        },
                        function (eA, oA) {
                          XA(oA);
                        }
                      );
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function z6(C1, c1) {
            var P1 = this,
              QA = new X(function (XA, DA) {
                P1.ready()
                  .then(function () {
                    var gA = P1._dbInfo;
                    gA.db.transaction(function (eA) {
                      x4(
                        eA,
                        gA,
                        'SELECT key FROM ' + gA.storeName + ' WHERE id = ? LIMIT 1',
                        [C1 + 1],
                        function (oA, V0) {
                          var E0 = V0.rows.length ? V0.rows.item(0).key : null;
                          XA(E0);
                        },
                        function (oA, V0) {
                          DA(V0);
                        }
                      );
                    });
                  })
                  .catch(DA);
              });
            return (V(QA, c1), QA);
          }
          function H3(C1) {
            var c1 = this,
              P1 = new X(function (QA, XA) {
                c1.ready()
                  .then(function () {
                    var DA = c1._dbInfo;
                    DA.db.transaction(function (gA) {
                      x4(
                        gA,
                        DA,
                        'SELECT key FROM ' + DA.storeName,
                        [],
                        function (eA, oA) {
                          var V0 = [];
                          for (var E0 = 0; E0 < oA.rows.length; E0++) V0.push(oA.rows.item(E0).key);
                          QA(V0);
                        },
                        function (eA, oA) {
                          XA(oA);
                        }
                      );
                    });
                  })
                  .catch(XA);
              });
            return (V(P1, C1), P1);
          }
          function E8(C1) {
            return new X(function (c1, P1) {
              C1.transaction(
                function (QA) {
                  QA.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                    [],
                    function (XA, DA) {
                      var gA = [];
                      for (var eA = 0; eA < DA.rows.length; eA++) gA.push(DA.rows.item(eA).name);
                      c1({ db: C1, storeNames: gA });
                    },
                    function (XA, DA) {
                      P1(DA);
                    }
                  );
                },
                function (QA) {
                  P1(QA);
                }
              );
            });
          }
          function QB(C1, c1) {
            c1 = N.apply(this, arguments);
            var P1 = this.config();
            if (((C1 = (typeof C1 !== 'function' && C1) || {}), !C1.name))
              ((C1.name = C1.name || P1.name), (C1.storeName = C1.storeName || P1.storeName));
            var QA = this,
              XA;
            if (!C1.name) XA = X.reject('Invalid arguments');
            else
              XA = new X(function (DA) {
                var gA;
                if (C1.name === P1.name) gA = QA._dbInfo.db;
                else gA = openDatabase(C1.name, '', '', 0);
                if (!C1.storeName) DA(E8(gA));
                else DA({ db: gA, storeNames: [C1.storeName] });
              }).then(function (DA) {
                return new X(function (gA, eA) {
                  DA.db.transaction(
                    function (oA) {
                      function V0(r9) {
                        return new X(function (L4, o6) {
                          oA.executeSql(
                            'DROP TABLE IF EXISTS ' + r9,
                            [],
                            function () {
                              L4();
                            },
                            function (P6, aB) {
                              o6(aB);
                            }
                          );
                        });
                      }
                      var E0 = [];
                      for (var d0 = 0, q9 = DA.storeNames.length; d0 < q9; d0++)
                        E0.push(V0(DA.storeNames[d0]));
                      X.all(E0)
                        .then(function () {
                          gA();
                        })
                        .catch(function (r9) {
                          eA(r9);
                        });
                    },
                    function (oA) {
                      eA(oA);
                    }
                  );
                });
              });
            return (V(XA, c1), XA);
          }
          var OQ = {
            _driver: 'webSQLStorage',
            _initStorage: T2,
            _support: S1(),
            iterate: U2,
            getItem: f0,
            setItem: T6,
            removeItem: w8,
            clear: u3,
            length: iB,
            key: z6,
            keys: H3,
            dropInstance: QB,
          };
          function V2() {
            try {
              return (
                typeof localStorage !== 'undefined' &&
                'setItem' in localStorage &&
                !!localStorage.setItem
              );
            } catch (C1) {
              return !1;
            }
          }
          function N9(C1, c1) {
            var P1 = C1.name + '/';
            if (C1.storeName !== c1.storeName) P1 += C1.storeName + '/';
            return P1;
          }
          function z3() {
            var C1 = '_localforage_support_test';
            try {
              return (localStorage.setItem(C1, !0), localStorage.removeItem(C1), !1);
            } catch (c1) {
              return !0;
            }
          }
          function G7() {
            return !z3() || localStorage.length > 0;
          }
          function IB(C1) {
            var c1 = this,
              P1 = {};
            if (C1) for (var QA in C1) P1[QA] = C1[QA];
            if (((P1.keyPrefix = N9(C1, c1._defaultConfig)), !G7())) return X.reject();
            return ((c1._dbInfo = P1), (P1.serializer = zB), X.resolve());
          }
          function nB(C1) {
            var c1 = this,
              P1 = c1.ready().then(function () {
                var QA = c1._dbInfo.keyPrefix;
                for (var XA = localStorage.length - 1; XA >= 0; XA--) {
                  var DA = localStorage.key(XA);
                  if (DA.indexOf(QA) === 0) localStorage.removeItem(DA);
                }
              });
            return (V(P1, C1), P1);
          }
          function $G(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = P1.ready().then(function () {
              var XA = P1._dbInfo,
                DA = localStorage.getItem(XA.keyPrefix + C1);
              if (DA) DA = XA.serializer.deserialize(DA);
              return DA;
            });
            return (V(QA, c1), QA);
          }
          function OZ(C1, c1) {
            var P1 = this,
              QA = P1.ready().then(function () {
                var XA = P1._dbInfo,
                  DA = XA.keyPrefix,
                  gA = DA.length,
                  eA = localStorage.length,
                  oA = 1;
                for (var V0 = 0; V0 < eA; V0++) {
                  var E0 = localStorage.key(V0);
                  if (E0.indexOf(DA) !== 0) continue;
                  var d0 = localStorage.getItem(E0);
                  if (d0) d0 = XA.serializer.deserialize(d0);
                  if (((d0 = C1(d0, E0.substring(gA), oA++)), d0 !== void 0)) return d0;
                }
              });
            return (V(QA, c1), QA);
          }
          function D7(C1, c1) {
            var P1 = this,
              QA = P1.ready().then(function () {
                var XA = P1._dbInfo,
                  DA;
                try {
                  DA = localStorage.key(C1);
                } catch (gA) {
                  DA = null;
                }
                if (DA) DA = DA.substring(XA.keyPrefix.length);
                return DA;
              });
            return (V(QA, c1), QA);
          }
          function w3(C1) {
            var c1 = this,
              P1 = c1.ready().then(function () {
                var QA = c1._dbInfo,
                  XA = localStorage.length,
                  DA = [];
                for (var gA = 0; gA < XA; gA++) {
                  var eA = localStorage.key(gA);
                  if (eA.indexOf(QA.keyPrefix) === 0) DA.push(eA.substring(QA.keyPrefix.length));
                }
                return DA;
              });
            return (V(P1, C1), P1);
          }
          function OD(C1) {
            var c1 = this,
              P1 = c1.keys().then(function (QA) {
                return QA.length;
              });
            return (V(P1, C1), P1);
          }
          function TD(C1, c1) {
            var P1 = this;
            C1 = U(C1);
            var QA = P1.ready().then(function () {
              var XA = P1._dbInfo;
              localStorage.removeItem(XA.keyPrefix + C1);
            });
            return (V(QA, c1), QA);
          }
          function PD(C1, c1, P1) {
            var QA = this;
            C1 = U(C1);
            var XA = QA.ready().then(function () {
              if (c1 === void 0) c1 = null;
              var DA = c1;
              return new X(function (gA, eA) {
                var oA = QA._dbInfo;
                oA.serializer.serialize(c1, function (V0, E0) {
                  if (E0) eA(E0);
                  else
                    try {
                      (localStorage.setItem(oA.keyPrefix + C1, V0), gA(DA));
                    } catch (d0) {
                      if (
                        d0.name === 'QuotaExceededError' ||
                        d0.name === 'NS_ERROR_DOM_QUOTA_REACHED'
                      )
                        eA(d0);
                      eA(d0);
                    }
                });
              });
            });
            return (V(XA, P1), XA);
          }
          function GB(C1, c1) {
            if (
              ((c1 = N.apply(this, arguments)),
              (C1 = (typeof C1 !== 'function' && C1) || {}),
              !C1.name)
            ) {
              var P1 = this.config();
              ((C1.name = C1.name || P1.name), (C1.storeName = C1.storeName || P1.storeName));
            }
            var QA = this,
              XA;
            if (!C1.name) XA = X.reject('Invalid arguments');
            else
              XA = new X(function (DA) {
                if (!C1.storeName) DA(C1.name + '/');
                else DA(N9(C1, QA._defaultConfig));
              }).then(function (DA) {
                for (var gA = localStorage.length - 1; gA >= 0; gA--) {
                  var eA = localStorage.key(gA);
                  if (eA.indexOf(DA) === 0) localStorage.removeItem(eA);
                }
              });
            return (V(XA, c1), XA);
          }
          var TZ = {
              _driver: 'localStorageWrapper',
              _initStorage: IB,
              _support: V2(),
              iterate: OZ,
              getItem: $G,
              setItem: PD,
              removeItem: TD,
              clear: nB,
              length: OD,
              key: D7,
              keys: w3,
              dropInstance: GB,
            },
            O1 = function C1(c1, P1) {
              return (
                c1 === P1 ||
                (typeof c1 === 'number' && typeof P1 === 'number' && isNaN(c1) && isNaN(P1))
              );
            },
            R1 = function C1(c1, P1) {
              var QA = c1.length,
                XA = 0;
              while (XA < QA) {
                if (O1(c1[XA], P1)) return !0;
                XA++;
              }
              return !1;
            },
            p1 =
              Array.isArray ||
              function (C1) {
                return Object.prototype.toString.call(C1) === '[object Array]';
              },
            JA = {},
            ZA = {},
            $A = { INDEXEDDB: t, WEBSQL: OQ, LOCALSTORAGE: TZ },
            rA = [$A.INDEXEDDB._driver, $A.WEBSQL._driver, $A.LOCALSTORAGE._driver],
            bA = ['dropInstance'],
            sA = [
              'clear',
              'getItem',
              'iterate',
              'key',
              'keys',
              'length',
              'removeItem',
              'setItem',
            ].concat(bA),
            fA = {
              description: '',
              driver: rA.slice(),
              name: 'localforage',
              size: 4980736,
              storeName: 'keyvaluepairs',
              version: 1,
            };
          function iA(C1, c1) {
            C1[c1] = function () {
              var P1 = arguments;
              return C1.ready().then(function () {
                return C1[c1].apply(C1, P1);
              });
            };
          }
          function P2() {
            for (var C1 = 1; C1 < arguments.length; C1++) {
              var c1 = arguments[C1];
              if (c1) {
                for (var P1 in c1)
                  if (c1.hasOwnProperty(P1))
                    if (p1(c1[P1])) arguments[0][P1] = c1[P1].slice();
                    else arguments[0][P1] = c1[P1];
              }
            }
            return arguments[0];
          }
          var F2 = (function () {
              function C1(c1) {
                Y(this, C1);
                for (var P1 in $A)
                  if ($A.hasOwnProperty(P1)) {
                    var QA = $A[P1],
                      XA = QA._driver;
                    if (((this[P1] = XA), !JA[XA])) this.defineDriver(QA);
                  }
                ((this._defaultConfig = P2({}, fA)),
                  (this._config = P2({}, this._defaultConfig, c1)),
                  (this._driverSet = null),
                  (this._initDriver = null),
                  (this._ready = !1),
                  (this._dbInfo = null),
                  this._wrapLibraryMethodsWithReady(),
                  this.setDriver(this._config.driver).catch(function () {}));
              }
              return (
                (C1.prototype.config = function c1(P1) {
                  if ((typeof P1 === 'undefined' ? 'undefined' : Z(P1)) === 'object') {
                    if (this._ready)
                      return new Error("Can't call config() after localforage has been used.");
                    for (var QA in P1) {
                      if (QA === 'storeName') P1[QA] = P1[QA].replace(/\W/g, '_');
                      if (QA === 'version' && typeof P1[QA] !== 'number')
                        return new Error('Database version must be a number.');
                      this._config[QA] = P1[QA];
                    }
                    if ('driver' in P1 && P1.driver) return this.setDriver(this._config.driver);
                    return !0;
                  } else if (typeof P1 === 'string') return this._config[P1];
                  else return this._config;
                }),
                (C1.prototype.defineDriver = function c1(P1, QA, XA) {
                  var DA = new X(function (gA, eA) {
                    try {
                      var oA = P1._driver,
                        V0 = new Error(
                          'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                        );
                      if (!P1._driver) {
                        eA(V0);
                        return;
                      }
                      var E0 = sA.concat('_initStorage');
                      for (var d0 = 0, q9 = E0.length; d0 < q9; d0++) {
                        var r9 = E0[d0],
                          L4 = !R1(bA, r9);
                        if ((L4 || P1[r9]) && typeof P1[r9] !== 'function') {
                          eA(V0);
                          return;
                        }
                      }
                      var o6 = function aB() {
                        var k7 = function GW(_D) {
                          return function () {
                            var K4 = new Error(
                                'Method ' + _D + ' is not implemented by the current driver'
                              ),
                              f7 = X.reject(K4);
                            return (V(f7, arguments[arguments.length - 1]), f7);
                          };
                        };
                        for (var SD = 0, IW = bA.length; SD < IW; SD++) {
                          var x7 = bA[SD];
                          if (!P1[x7]) P1[x7] = k7(x7);
                        }
                      };
                      o6();
                      var P6 = function aB(k7) {
                        if (JA[oA]) console.info('Redefining LocalForage driver: ' + oA);
                        ((JA[oA] = P1), (ZA[oA] = k7), gA());
                      };
                      if ('_support' in P1)
                        if (P1._support && typeof P1._support === 'function')
                          P1._support().then(P6, eA);
                        else P6(!!P1._support);
                      else P6(!0);
                    } catch (aB) {
                      eA(aB);
                    }
                  });
                  return (K(DA, QA, XA), DA);
                }),
                (C1.prototype.driver = function c1() {
                  return this._driver || null;
                }),
                (C1.prototype.getDriver = function c1(P1, QA, XA) {
                  var DA = JA[P1] ? X.resolve(JA[P1]) : X.reject(new Error('Driver not found.'));
                  return (K(DA, QA, XA), DA);
                }),
                (C1.prototype.getSerializer = function c1(P1) {
                  var QA = X.resolve(zB);
                  return (K(QA, P1), QA);
                }),
                (C1.prototype.ready = function c1(P1) {
                  var QA = this,
                    XA = QA._driverSet.then(function () {
                      if (QA._ready === null) QA._ready = QA._initDriver();
                      return QA._ready;
                    });
                  return (K(XA, P1, P1), XA);
                }),
                (C1.prototype.setDriver = function c1(P1, QA, XA) {
                  var DA = this;
                  if (!p1(P1)) P1 = [P1];
                  var gA = this._getSupportedDrivers(P1);
                  function eA() {
                    DA._config.driver = DA.driver();
                  }
                  function oA(d0) {
                    return (
                      DA._extend(d0),
                      eA(),
                      (DA._ready = DA._initStorage(DA._config)),
                      DA._ready
                    );
                  }
                  function V0(d0) {
                    return function () {
                      var q9 = 0;
                      function r9() {
                        while (q9 < d0.length) {
                          var L4 = d0[q9];
                          return (
                            q9++,
                            (DA._dbInfo = null),
                            (DA._ready = null),
                            DA.getDriver(L4).then(oA).catch(r9)
                          );
                        }
                        eA();
                        var o6 = new Error('No available storage method found.');
                        return ((DA._driverSet = X.reject(o6)), DA._driverSet);
                      }
                      return r9();
                    };
                  }
                  var E0 =
                    this._driverSet !== null
                      ? this._driverSet.catch(function () {
                          return X.resolve();
                        })
                      : X.resolve();
                  return (
                    (this._driverSet = E0.then(function () {
                      var d0 = gA[0];
                      return (
                        (DA._dbInfo = null),
                        (DA._ready = null),
                        DA.getDriver(d0).then(function (q9) {
                          ((DA._driver = q9._driver),
                            eA(),
                            DA._wrapLibraryMethodsWithReady(),
                            (DA._initDriver = V0(gA)));
                        })
                      );
                    }).catch(function () {
                      eA();
                      var d0 = new Error('No available storage method found.');
                      return ((DA._driverSet = X.reject(d0)), DA._driverSet);
                    })),
                    K(this._driverSet, QA, XA),
                    this._driverSet
                  );
                }),
                (C1.prototype.supports = function c1(P1) {
                  return !!ZA[P1];
                }),
                (C1.prototype._extend = function c1(P1) {
                  P2(this, P1);
                }),
                (C1.prototype._getSupportedDrivers = function c1(P1) {
                  var QA = [];
                  for (var XA = 0, DA = P1.length; XA < DA; XA++) {
                    var gA = P1[XA];
                    if (this.supports(gA)) QA.push(gA);
                  }
                  return QA;
                }),
                (C1.prototype._wrapLibraryMethodsWithReady = function c1() {
                  for (var P1 = 0, QA = sA.length; P1 < QA; P1++) iA(this, sA[P1]);
                }),
                (C1.prototype.createInstance = function c1(P1) {
                  return new C1(P1);
                }),
                C1
              );
            })(),
            $9 = new F2();
          G.exports = $9;
        },
        { 3: 3 },
      ],
    },
    {},
    [4]
  )(4);
});

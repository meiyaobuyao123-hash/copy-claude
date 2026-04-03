// Module: LC1
// Params: GT8,t72

t72.exports = HF;
var MC1 = $m();
((HF.prototype = Object.create(MC1.prototype)).constructor = HF).className = 'Root';
var Bn1 = NR(),
  s72 = lV(),
  rc6 = Em(),
  qR = VI(),
  r72,
  An1,
  lo;
function HF(A) {
  (MC1.call(this, '', A), (this.deferred = []), (this.files = []));
}
HF.fromJSON = function A(B, Q) {
  if (!Q) Q = new HF();
  if (B.options) Q.setOptions(B.options);
  return Q.addJSON(B.nested);
};
HF.prototype.resolvePath = qR.path.resolve;
HF.prototype.fetch = qR.fetch;
function o72() {}
HF.prototype.load = function A(B, Q, I) {
  if (typeof Q === 'function') ((I = Q), (Q = void 0));
  var G = this;
  if (!I) return qR.asPromise(A, G, B, Q);
  var D = I === o72;
  function Z(V, K) {
    if (!I) return;
    if (D) throw V;
    var U = I;
    ((I = null), U(V, K));
  }
  function Y(V) {
    var K = V.lastIndexOf('google/protobuf/');
    if (K > -1) {
      var U = V.substring(K);
      if (U in lo) return U;
    }
    return null;
  }
  function W(V, K) {
    try {
      if (qR.isString(K) && K.charAt(0) === '{') K = JSON.parse(K);
      if (!qR.isString(K)) G.setOptions(K.options).addJSON(K.nested);
      else {
        An1.filename = V;
        var U = An1(K, G, Q),
          N,
          q = 0;
        if (U.imports) {
          for (; q < U.imports.length; ++q)
            if ((N = Y(U.imports[q]) || G.resolvePath(V, U.imports[q]))) F(N);
        }
        if (U.weakImports) {
          for (q = 0; q < U.weakImports.length; ++q)
            if ((N = Y(U.weakImports[q]) || G.resolvePath(V, U.weakImports[q]))) F(N, !0);
        }
      }
    } catch (M) {
      Z(M);
    }
    if (!D && !J) Z(null, G);
  }
  function F(V, K) {
    if (((V = Y(V) || V), G.files.indexOf(V) > -1)) return;
    if ((G.files.push(V), V in lo)) {
      if (D) W(V, lo[V]);
      else
        (++J,
          setTimeout(function () {
            (--J, W(V, lo[V]));
          }));
      return;
    }
    if (D) {
      var U;
      try {
        U = qR.fs.readFileSync(V).toString('utf8');
      } catch (N) {
        if (!K) Z(N);
        return;
      }
      W(V, U);
    } else
      (++J,
        G.fetch(V, function (N, q) {
          if ((--J, !I)) return;
          if (N) {
            if (!K) Z(N);
            else if (!J) Z(null, G);
            return;
          }
          W(V, q);
        }));
  }
  var J = 0;
  if (qR.isString(B)) B = [B];
  for (var C = 0, X; C < B.length; ++C) if ((X = G.resolvePath('', B[C]))) F(X);
  if (D) return G;
  if (!J) Z(null, G);
  return;
};
HF.prototype.loadSync = function A(B, Q) {
  if (!qR.isNode) throw Error('not supported');
  return this.load(B, Q, o72);
};
HF.prototype.resolveAll = function A() {
  if (this.deferred.length)
    throw Error(
      'unresolvable extensions: ' +
        this.deferred
          .map(function (B) {
            return "'extend " + B.extend + "' in " + B.parent.fullName;
          })
          .join(', ')
    );
  return MC1.prototype.resolveAll.call(this);
};
var qC1 = /^[A-Z]/;
function a72(A, B) {
  var Q = B.parent.lookup(B.extend);
  if (Q) {
    var I = new Bn1(B.fullName, B.id, B.type, B.rule, void 0, B.options);
    if (Q.get(I.name)) return !0;
    return ((I.declaringField = B), (B.extensionField = I), Q.add(I), !0);
  }
  return !1;
}
HF.prototype._handleAdd = function A(B) {
  if (B instanceof Bn1) {
    if (B.extend !== void 0 && !B.extensionField) {
      if (!a72(this, B)) this.deferred.push(B);
    }
  } else if (B instanceof s72) {
    if (qC1.test(B.name)) B.parent[B.name] = B.values;
  } else if (!(B instanceof rc6)) {
    if (B instanceof r72)
      for (var Q = 0; Q < this.deferred.length; )
        if (a72(this, this.deferred[Q])) this.deferred.splice(Q, 1);
        else ++Q;
    for (var I = 0; I < B.nestedArray.length; ++I) this._handleAdd(B._nestedArray[I]);
    if (qC1.test(B.name)) B.parent[B.name] = B;
  }
};
HF.prototype._handleRemove = function A(B) {
  if (B instanceof Bn1) {
    if (B.extend !== void 0)
      if (B.extensionField)
        (B.extensionField.parent.remove(B.extensionField), (B.extensionField = null));
      else {
        var Q = this.deferred.indexOf(B);
        if (Q > -1) this.deferred.splice(Q, 1);
      }
  } else if (B instanceof s72) {
    if (qC1.test(B.name)) delete B.parent[B.name];
  } else if (B instanceof MC1) {
    for (var I = 0; I < B.nestedArray.length; ++I) this._handleRemove(B._nestedArray[I]);
    if (qC1.test(B.name)) delete B.parent[B.name];
  }
};
HF._configure = function (A, B, Q) {
  ((r72 = A), (An1 = B), (lo = Q));
};

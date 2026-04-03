// Module: kr1
// Params: j45

var QK2 = h3();
j45.property = function (A) {
  if (Array.isArray(A.type)) {
    var B = Object.create(null);
    A.type.forEach(function (G) {
      B[G.value || G] = G.alias || G;
    });
    var Q = A.missing;
    if (Q === void 0) Q = null;
    var I = A.invalid;
    if (I === void 0) I = Q;
    return {
      get: function () {
        var G = this._getattr(A.name);
        if (G === null) return Q;
        if (((G = B[G.toLowerCase()]), G !== void 0)) return G;
        if (I !== null) return I;
        return G;
      },
      set: function (G) {
        this._setattr(A.name, G);
      },
    };
  } else if (A.type === Boolean)
    return {
      get: function () {
        return this.hasAttribute(A.name);
      },
      set: function (G) {
        if (G) this._setattr(A.name, '');
        else this.removeAttribute(A.name);
      },
    };
  else if (
    A.type === Number ||
    A.type === 'long' ||
    A.type === 'unsigned long' ||
    A.type === 'limited unsigned long with fallback'
  )
    return _45(A);
  else if (!A.type || A.type === String)
    return {
      get: function () {
        return this._getattr(A.name) || '';
      },
      set: function (G) {
        if (A.treatNullAsEmptyString && G === null) G = '';
        this._setattr(A.name, G);
      },
    };
  else if (typeof A.type === 'function') return A.type(A.name, A);
  throw new Error('Invalid attribute definition');
};
function _45(A) {
  var B;
  if (typeof A.default === 'function') B = A.default;
  else if (typeof A.default === 'number')
    B = function () {
      return A.default;
    };
  else
    B = function () {
      QK2.assert(!1, typeof A.default);
    };
  var Q = A.type === 'unsigned long',
    I = A.type === 'long',
    G = A.type === 'limited unsigned long with fallback',
    D = A.min,
    Z = A.max,
    Y = A.setmin;
  if (D === void 0) {
    if (Q) D = 0;
    if (I) D = -2147483648;
    if (G) D = 1;
  }
  if (Z === void 0) {
    if (Q || I || G) Z = 2147483647;
  }
  return {
    get: function () {
      var W = this._getattr(A.name),
        F = A.float ? parseFloat(W) : parseInt(W, 10);
      if (W === null || !isFinite(F) || (D !== void 0 && F < D) || (Z !== void 0 && F > Z))
        return B.call(this);
      if (Q || I || G) {
        if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(W)) return B.call(this);
        F = F | 0;
      }
      return F;
    },
    set: function (W) {
      if (!A.float) W = Math.floor(W);
      if (Y !== void 0 && W < Y) QK2.IndexSizeError(A.name + ' set to ' + W);
      if (Q) W = W < 0 || W > 2147483647 ? B.call(this) : W | 0;
      else if (G) W = W < 1 || W > 2147483647 ? B.call(this) : W | 0;
      else if (I) W = W < -2147483648 || W > 2147483647 ? B.call(this) : W | 0;
      this._setattr(A.name, String(W));
    },
  };
}
j45.registerChangeHandler = function (A, B, Q) {
  var I = A.prototype;
  if (!Object.prototype.hasOwnProperty.call(I, '_attributeChangeHandlers'))
    I._attributeChangeHandlers = Object.create(I._attributeChangeHandlers || null);
  I._attributeChangeHandlers[B] = Q;
};

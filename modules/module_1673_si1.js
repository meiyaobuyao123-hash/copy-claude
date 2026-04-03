// Module: si1
// Params: l72

var mc6 = l72,
  dc6 = EC1();
mc6['.google.protobuf.Any'] = {
  fromObject: function (A) {
    if (A && A['@type']) {
      var B = A['@type'].substring(A['@type'].lastIndexOf('/') + 1),
        Q = this.lookup(B);
      if (Q) {
        var I = A['@type'].charAt(0) === '.' ? A['@type'].slice(1) : A['@type'];
        if (I.indexOf('/') === -1) I = '/' + I;
        return this.create({ type_url: I, value: Q.encode(Q.fromObject(A)).finish() });
      }
    }
    return this.fromObject(A);
  },
  toObject: function (A, B) {
    var Q = 'type.googleapis.com/',
      I = '',
      G = '';
    if (B && B.json && A.type_url && A.value) {
      ((G = A.type_url.substring(A.type_url.lastIndexOf('/') + 1)),
        (I = A.type_url.substring(0, A.type_url.lastIndexOf('/') + 1)));
      var D = this.lookup(G);
      if (D) A = D.decode(A.value);
    }
    if (!(A instanceof this.ctor) && A instanceof dc6) {
      var Z = A.$type.toObject(A, B),
        Y = A.$type.fullName[0] === '.' ? A.$type.fullName.slice(1) : A.$type.fullName;
      if (I === '') I = Q;
      return ((G = I + Y), (Z['@type'] = G), Z);
    }
    return this.toObject(A, B);
  },
};

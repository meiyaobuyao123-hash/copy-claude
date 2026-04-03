// Module: cV1
// Params: Nl8,ZH2

ZH2.exports = wG;
function wG(A) {
  if (!A) return Object.create(wG.prototype);
  this.url = A.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, '');
  var B = wG.pattern.exec(this.url);
  if (B) {
    if (B[2]) this.scheme = B[2];
    if (B[4]) {
      var Q = B[4].match(wG.userinfoPattern);
      if (Q) ((this.username = Q[1]), (this.password = Q[3]), (B[4] = B[4].substring(Q[0].length)));
      if (B[4].match(wG.portPattern)) {
        var I = B[4].lastIndexOf(':');
        ((this.host = B[4].substring(0, I)), (this.port = B[4].substring(I + 1)));
      } else this.host = B[4];
    }
    if (B[5]) this.path = B[5];
    if (B[6]) this.query = B[7];
    if (B[8]) this.fragment = B[9];
  }
}
wG.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
wG.userinfoPattern = /^([^@:]*)(:([^@]*))?@/;
wG.portPattern = /:\d+$/;
wG.authorityPattern = /^[^:\/?#]+:\/\//;
wG.hierarchyPattern = /^[^:\/?#]+:\//;
wG.percentEncode = function A(B) {
  var Q = B.charCodeAt(0);
  if (Q < 256) return '%' + Q.toString(16);
  else throw Error("can't percent-encode codepoints > 255 yet");
};
wG.prototype = {
  constructor: wG,
  isAbsolute: function () {
    return !!this.scheme;
  },
  isAuthorityBased: function () {
    return wG.authorityPattern.test(this.url);
  },
  isHierarchical: function () {
    return wG.hierarchyPattern.test(this.url);
  },
  toString: function () {
    var A = '';
    if (this.scheme !== void 0) A += this.scheme + ':';
    if (this.isAbsolute()) {
      if (((A += '//'), this.username || this.password)) {
        if (((A += this.username || ''), this.password)) A += ':' + this.password;
        A += '@';
      }
      if (this.host) A += this.host;
    }
    if (this.port !== void 0) A += ':' + this.port;
    if (this.path !== void 0) A += this.path;
    if (this.query !== void 0) A += '?' + this.query;
    if (this.fragment !== void 0) A += '#' + this.fragment;
    return A;
  },
  resolve: function (A) {
    var B = this,
      Q = new wG(A),
      I = new wG();
    if (Q.scheme !== void 0)
      ((I.scheme = Q.scheme),
        (I.username = Q.username),
        (I.password = Q.password),
        (I.host = Q.host),
        (I.port = Q.port),
        (I.path = D(Q.path)),
        (I.query = Q.query));
    else if (((I.scheme = B.scheme), Q.host !== void 0))
      ((I.username = Q.username),
        (I.password = Q.password),
        (I.host = Q.host),
        (I.port = Q.port),
        (I.path = D(Q.path)),
        (I.query = Q.query));
    else if (
      ((I.username = B.username),
      (I.password = B.password),
      (I.host = B.host),
      (I.port = B.port),
      !Q.path)
    )
      if (((I.path = B.path), Q.query !== void 0)) I.query = Q.query;
      else I.query = B.query;
    else {
      if (Q.path.charAt(0) === '/') I.path = D(Q.path);
      else ((I.path = G(B.path, Q.path)), (I.path = D(I.path)));
      I.query = Q.query;
    }
    return ((I.fragment = Q.fragment), I.toString());
    function G(Z, Y) {
      if (B.host !== void 0 && !B.path) return '/' + Y;
      var W = Z.lastIndexOf('/');
      if (W === -1) return Y;
      else return Z.substring(0, W + 1) + Y;
    }
    function D(Z) {
      if (!Z) return Z;
      var Y = '';
      while (Z.length > 0) {
        if (Z === '.' || Z === '..') {
          Z = '';
          break;
        }
        var W = Z.substring(0, 2),
          F = Z.substring(0, 3),
          J = Z.substring(0, 4);
        if (F === '../') Z = Z.substring(3);
        else if (W === './') Z = Z.substring(2);
        else if (F === '/./') Z = '/' + Z.substring(3);
        else if (W === '/.' && Z.length === 2) Z = '/';
        else if (J === '/../' || (F === '/..' && Z.length === 3))
          ((Z = '/' + Z.substring(4)), (Y = Y.replace(/\/?[^\/]*$/, '')));
        else {
          var C = Z.match(/(\/?([^\/]*))/)[0];
          ((Y += C), (Z = Z.substring(C.length)));
        }
      }
      return Y;
    }
  },
};

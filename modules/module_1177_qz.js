// Module: qz
// Params: Oe4,BF

var Dg = D1('punycode'),
  iM0 = lM0(),
  oM0 = { ftp: 21, file: null, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
  X6 = Symbol('failure');
function nM0(A) {
  return Dg.ucs2.decode(A).length;
}
function aM0(A, B) {
  let Q = A[B];
  return isNaN(Q) ? void 0 : String.fromCodePoint(Q);
}
function na(A) {
  return A >= 48 && A <= 57;
}
function aa(A) {
  return (A >= 65 && A <= 90) || (A >= 97 && A <= 122);
}
function Be4(A) {
  return aa(A) || na(A);
}
function HV(A) {
  return na(A) || (A >= 65 && A <= 70) || (A >= 97 && A <= 102);
}
function sM0(A) {
  return A === '.' || A.toLowerCase() === '%2e';
}
function Qe4(A) {
  return ((A = A.toLowerCase()), A === '..' || A === '%2e.' || A === '.%2e' || A === '%2e%2e');
}
function Ie4(A, B) {
  return aa(A) && (B === 58 || B === 124);
}
function tM0(A) {
  return A.length === 2 && aa(A.codePointAt(0)) && (A[1] === ':' || A[1] === '|');
}
function Ge4(A) {
  return A.length === 2 && aa(A.codePointAt(0)) && A[1] === ':';
}
function De4(A) {
  return A.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function Ze4(A) {
  return A.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function ib1(A) {
  return oM0[A] !== void 0;
}
function R7(A) {
  return ib1(A.scheme);
}
function Ye4(A) {
  return oM0[A];
}
function eM0(A) {
  let B = A.toString(16).toUpperCase();
  if (B.length === 1) B = '0' + B;
  return '%' + B;
}
function We4(A) {
  let B = new Buffer(A),
    Q = '';
  for (let I = 0; I < B.length; ++I) Q += eM0(B[I]);
  return Q;
}
function Fe4(A) {
  let B = new Buffer(A),
    Q = [];
  for (let I = 0; I < B.length; ++I)
    if (B[I] !== 37) Q.push(B[I]);
    else if (B[I] === 37 && HV(B[I + 1]) && HV(B[I + 2]))
      (Q.push(parseInt(B.slice(I + 1, I + 3).toString(), 16)), (I += 2));
    else Q.push(B[I]);
  return new Buffer(Q).toString();
}
function _Z1(A) {
  return A <= 31 || A > 126;
}
var Je4 = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
function AL0(A) {
  return _Z1(A) || Je4.has(A);
}
var Ce4 = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
function ab1(A) {
  return AL0(A) || Ce4.has(A);
}
function US(A, B) {
  let Q = String.fromCodePoint(A);
  if (B(A)) return We4(Q);
  return Q;
}
function Xe4(A) {
  let B = 10;
  if (A.length >= 2 && A.charAt(0) === '0' && A.charAt(1).toLowerCase() === 'x')
    ((A = A.substring(2)), (B = 16));
  else if (A.length >= 2 && A.charAt(0) === '0') ((A = A.substring(1)), (B = 8));
  if (A === '') return 0;
  if ((B === 10 ? /[^0-9]/ : B === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(A)) return X6;
  return parseInt(A, B);
}
function Ve4(A) {
  let B = A.split('.');
  if (B[B.length - 1] === '') {
    if (B.length > 1) B.pop();
  }
  if (B.length > 4) return A;
  let Q = [];
  for (let D of B) {
    if (D === '') return A;
    let Z = Xe4(D);
    if (Z === X6) return A;
    Q.push(Z);
  }
  for (let D = 0; D < Q.length - 1; ++D) if (Q[D] > 255) return X6;
  if (Q[Q.length - 1] >= Math.pow(256, 5 - Q.length)) return X6;
  let I = Q.pop(),
    G = 0;
  for (let D of Q) ((I += D * Math.pow(256, 3 - G)), ++G);
  return I;
}
function Ke4(A) {
  let B = '',
    Q = A;
  for (let I = 1; I <= 4; ++I) {
    if (((B = String(Q % 256) + B), I !== 4)) B = '.' + B;
    Q = Math.floor(Q / 256);
  }
  return B;
}
function He4(A) {
  let B = [0, 0, 0, 0, 0, 0, 0, 0],
    Q = 0,
    I = null,
    G = 0;
  if (((A = Dg.ucs2.decode(A)), A[G] === 58)) {
    if (A[G + 1] !== 58) return X6;
    ((G += 2), ++Q, (I = Q));
  }
  while (G < A.length) {
    if (Q === 8) return X6;
    if (A[G] === 58) {
      if (I !== null) return X6;
      (++G, ++Q, (I = Q));
      continue;
    }
    let D = 0,
      Z = 0;
    while (Z < 4 && HV(A[G])) ((D = D * 16 + parseInt(aM0(A, G), 16)), ++G, ++Z);
    if (A[G] === 46) {
      if (Z === 0) return X6;
      if (((G -= Z), Q > 6)) return X6;
      let Y = 0;
      while (A[G] !== void 0) {
        let W = null;
        if (Y > 0)
          if (A[G] === 46 && Y < 4) ++G;
          else return X6;
        if (!na(A[G])) return X6;
        while (na(A[G])) {
          let F = parseInt(aM0(A, G));
          if (W === null) W = F;
          else if (W === 0) return X6;
          else W = W * 10 + F;
          if (W > 255) return X6;
          ++G;
        }
        if (((B[Q] = B[Q] * 256 + W), ++Y, Y === 2 || Y === 4)) ++Q;
      }
      if (Y !== 4) return X6;
      break;
    } else if (A[G] === 58) {
      if ((++G, A[G] === void 0)) return X6;
    } else if (A[G] !== void 0) return X6;
    ((B[Q] = D), ++Q);
  }
  if (I !== null) {
    let D = Q - I;
    Q = 7;
    while (Q !== 0 && D > 0) {
      let Z = B[I + D - 1];
      ((B[I + D - 1] = B[Q]), (B[Q] = Z), --Q, --D);
    }
  } else if (I === null && Q !== 8) return X6;
  return B;
}
function ze4(A) {
  let B = '',
    I = Ee4(A).idx,
    G = !1;
  for (let D = 0; D <= 7; ++D) {
    if (G && A[D] === 0) continue;
    else if (G) G = !1;
    if (I === D) {
      ((B += D === 0 ? '::' : ':'), (G = !0));
      continue;
    }
    if (((B += A[D].toString(16)), D !== 7)) B += ':';
  }
  return B;
}
function nb1(A, B) {
  if (A[0] === '[') {
    if (A[A.length - 1] !== ']') return X6;
    return He4(A.substring(1, A.length - 1));
  }
  if (!B) return we4(A);
  let Q = Fe4(A),
    I = iM0.toASCII(Q, !1, iM0.PROCESSING_OPTIONS.NONTRANSITIONAL, !1);
  if (I === null) return X6;
  if (De4(I)) return X6;
  let G = Ve4(I);
  if (typeof G === 'number' || G === X6) return G;
  return I;
}
function we4(A) {
  if (Ze4(A)) return X6;
  let B = '',
    Q = Dg.ucs2.decode(A);
  for (let I = 0; I < Q.length; ++I) B += US(Q[I], _Z1);
  return B;
}
function Ee4(A) {
  let B = null,
    Q = 1,
    I = null,
    G = 0;
  for (let D = 0; D < A.length; ++D)
    if (A[D] !== 0) {
      if (G > Q) ((B = I), (Q = G));
      ((I = null), (G = 0));
    } else {
      if (I === null) I = D;
      ++G;
    }
  if (G > Q) ((B = I), (Q = G));
  return { idx: B, len: Q };
}
function sb1(A) {
  if (typeof A === 'number') return Ke4(A);
  if (A instanceof Array) return '[' + ze4(A) + ']';
  return A;
}
function Ue4(A) {
  return A.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, '');
}
function Ne4(A) {
  return A.replace(/\u0009|\u000A|\u000D/g, '');
}
function BL0(A) {
  let B = A.path;
  if (B.length === 0) return;
  if (A.scheme === 'file' && B.length === 1 && qe4(B[0])) return;
  B.pop();
}
function QL0(A) {
  return A.username !== '' || A.password !== '';
}
function $e4(A) {
  return A.host === null || A.host === '' || A.cannotBeABaseURL || A.scheme === 'file';
}
function qe4(A) {
  return /^[A-Za-z]:$/.test(A);
}
function S3(A, B, Q, I, G) {
  if (
    ((this.pointer = 0),
    (this.input = A),
    (this.base = B || null),
    (this.encodingOverride = Q || 'utf-8'),
    (this.stateOverride = G),
    (this.url = I),
    (this.failure = !1),
    (this.parseError = !1),
    !this.url)
  ) {
    this.url = {
      scheme: '',
      username: '',
      password: '',
      host: null,
      port: null,
      path: [],
      query: null,
      fragment: null,
      cannotBeABaseURL: !1,
    };
    let Z = Ue4(this.input);
    if (Z !== this.input) this.parseError = !0;
    this.input = Z;
  }
  let D = Ne4(this.input);
  if (D !== this.input) this.parseError = !0;
  ((this.input = D),
    (this.state = G || 'scheme start'),
    (this.buffer = ''),
    (this.atFlag = !1),
    (this.arrFlag = !1),
    (this.passwordTokenSeenFlag = !1),
    (this.input = Dg.ucs2.decode(this.input)));
  for (; this.pointer <= this.input.length; ++this.pointer) {
    let Z = this.input[this.pointer],
      Y = isNaN(Z) ? void 0 : String.fromCodePoint(Z),
      W = this['parse ' + this.state](Z, Y);
    if (!W) break;
    else if (W === X6) {
      this.failure = !0;
      break;
    }
  }
}
S3.prototype['parse scheme start'] = function A(B, Q) {
  if (aa(B)) ((this.buffer += Q.toLowerCase()), (this.state = 'scheme'));
  else if (!this.stateOverride) ((this.state = 'no scheme'), --this.pointer);
  else return ((this.parseError = !0), X6);
  return !0;
};
S3.prototype['parse scheme'] = function A(B, Q) {
  if (Be4(B) || B === 43 || B === 45 || B === 46) this.buffer += Q.toLowerCase();
  else if (B === 58) {
    if (this.stateOverride) {
      if (R7(this.url) && !ib1(this.buffer)) return !1;
      if (!R7(this.url) && ib1(this.buffer)) return !1;
      if ((QL0(this.url) || this.url.port !== null) && this.buffer === 'file') return !1;
      if (this.url.scheme === 'file' && (this.url.host === '' || this.url.host === null)) return !1;
    }
    if (((this.url.scheme = this.buffer), (this.buffer = ''), this.stateOverride)) return !1;
    if (this.url.scheme === 'file') {
      if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47)
        this.parseError = !0;
      this.state = 'file';
    } else if (R7(this.url) && this.base !== null && this.base.scheme === this.url.scheme)
      this.state = 'special relative or authority';
    else if (R7(this.url)) this.state = 'special authority slashes';
    else if (this.input[this.pointer + 1] === 47)
      ((this.state = 'path or authority'), ++this.pointer);
    else
      ((this.url.cannotBeABaseURL = !0),
        this.url.path.push(''),
        (this.state = 'cannot-be-a-base-URL path'));
  } else if (!this.stateOverride)
    ((this.buffer = ''), (this.state = 'no scheme'), (this.pointer = -1));
  else return ((this.parseError = !0), X6);
  return !0;
};
S3.prototype['parse no scheme'] = function A(B) {
  if (this.base === null || (this.base.cannotBeABaseURL && B !== 35)) return X6;
  else if (this.base.cannotBeABaseURL && B === 35)
    ((this.url.scheme = this.base.scheme),
      (this.url.path = this.base.path.slice()),
      (this.url.query = this.base.query),
      (this.url.fragment = ''),
      (this.url.cannotBeABaseURL = !0),
      (this.state = 'fragment'));
  else if (this.base.scheme === 'file') ((this.state = 'file'), --this.pointer);
  else ((this.state = 'relative'), --this.pointer);
  return !0;
};
S3.prototype['parse special relative or authority'] = function A(B) {
  if (B === 47 && this.input[this.pointer + 1] === 47)
    ((this.state = 'special authority ignore slashes'), ++this.pointer);
  else ((this.parseError = !0), (this.state = 'relative'), --this.pointer);
  return !0;
};
S3.prototype['parse path or authority'] = function A(B) {
  if (B === 47) this.state = 'authority';
  else ((this.state = 'path'), --this.pointer);
  return !0;
};
S3.prototype['parse relative'] = function A(B) {
  if (((this.url.scheme = this.base.scheme), isNaN(B)))
    ((this.url.username = this.base.username),
      (this.url.password = this.base.password),
      (this.url.host = this.base.host),
      (this.url.port = this.base.port),
      (this.url.path = this.base.path.slice()),
      (this.url.query = this.base.query));
  else if (B === 47) this.state = 'relative slash';
  else if (B === 63)
    ((this.url.username = this.base.username),
      (this.url.password = this.base.password),
      (this.url.host = this.base.host),
      (this.url.port = this.base.port),
      (this.url.path = this.base.path.slice()),
      (this.url.query = ''),
      (this.state = 'query'));
  else if (B === 35)
    ((this.url.username = this.base.username),
      (this.url.password = this.base.password),
      (this.url.host = this.base.host),
      (this.url.port = this.base.port),
      (this.url.path = this.base.path.slice()),
      (this.url.query = this.base.query),
      (this.url.fragment = ''),
      (this.state = 'fragment'));
  else if (R7(this.url) && B === 92) ((this.parseError = !0), (this.state = 'relative slash'));
  else
    ((this.url.username = this.base.username),
      (this.url.password = this.base.password),
      (this.url.host = this.base.host),
      (this.url.port = this.base.port),
      (this.url.path = this.base.path.slice(0, this.base.path.length - 1)),
      (this.state = 'path'),
      --this.pointer);
  return !0;
};
S3.prototype['parse relative slash'] = function A(B) {
  if (R7(this.url) && (B === 47 || B === 92)) {
    if (B === 92) this.parseError = !0;
    this.state = 'special authority ignore slashes';
  } else if (B === 47) this.state = 'authority';
  else
    ((this.url.username = this.base.username),
      (this.url.password = this.base.password),
      (this.url.host = this.base.host),
      (this.url.port = this.base.port),
      (this.state = 'path'),
      --this.pointer);
  return !0;
};
S3.prototype['parse special authority slashes'] = function A(B) {
  if (B === 47 && this.input[this.pointer + 1] === 47)
    ((this.state = 'special authority ignore slashes'), ++this.pointer);
  else ((this.parseError = !0), (this.state = 'special authority ignore slashes'), --this.pointer);
  return !0;
};
S3.prototype['parse special authority ignore slashes'] = function A(B) {
  if (B !== 47 && B !== 92) ((this.state = 'authority'), --this.pointer);
  else this.parseError = !0;
  return !0;
};
S3.prototype['parse authority'] = function A(B, Q) {
  if (B === 64) {
    if (((this.parseError = !0), this.atFlag)) this.buffer = '%40' + this.buffer;
    this.atFlag = !0;
    let I = nM0(this.buffer);
    for (let G = 0; G < I; ++G) {
      let D = this.buffer.codePointAt(G);
      if (D === 58 && !this.passwordTokenSeenFlag) {
        this.passwordTokenSeenFlag = !0;
        continue;
      }
      let Z = US(D, ab1);
      if (this.passwordTokenSeenFlag) this.url.password += Z;
      else this.url.username += Z;
    }
    this.buffer = '';
  } else if (isNaN(B) || B === 47 || B === 63 || B === 35 || (R7(this.url) && B === 92)) {
    if (this.atFlag && this.buffer === '') return ((this.parseError = !0), X6);
    ((this.pointer -= nM0(this.buffer) + 1), (this.buffer = ''), (this.state = 'host'));
  } else this.buffer += Q;
  return !0;
};
S3.prototype['parse hostname'] = S3.prototype['parse host'] = function A(B, Q) {
  if (this.stateOverride && this.url.scheme === 'file')
    (--this.pointer, (this.state = 'file host'));
  else if (B === 58 && !this.arrFlag) {
    if (this.buffer === '') return ((this.parseError = !0), X6);
    let I = nb1(this.buffer, R7(this.url));
    if (I === X6) return X6;
    if (
      ((this.url.host = I),
      (this.buffer = ''),
      (this.state = 'port'),
      this.stateOverride === 'hostname')
    )
      return !1;
  } else if (isNaN(B) || B === 47 || B === 63 || B === 35 || (R7(this.url) && B === 92)) {
    if ((--this.pointer, R7(this.url) && this.buffer === '')) return ((this.parseError = !0), X6);
    else if (this.stateOverride && this.buffer === '' && (QL0(this.url) || this.url.port !== null))
      return ((this.parseError = !0), !1);
    let I = nb1(this.buffer, R7(this.url));
    if (I === X6) return X6;
    if (((this.url.host = I), (this.buffer = ''), (this.state = 'path start'), this.stateOverride))
      return !1;
  } else {
    if (B === 91) this.arrFlag = !0;
    else if (B === 93) this.arrFlag = !1;
    this.buffer += Q;
  }
  return !0;
};
S3.prototype['parse port'] = function A(B, Q) {
  if (na(B)) this.buffer += Q;
  else if (
    isNaN(B) ||
    B === 47 ||
    B === 63 ||
    B === 35 ||
    (R7(this.url) && B === 92) ||
    this.stateOverride
  ) {
    if (this.buffer !== '') {
      let I = parseInt(this.buffer);
      if (I > Math.pow(2, 16) - 1) return ((this.parseError = !0), X6);
      ((this.url.port = I === Ye4(this.url.scheme) ? null : I), (this.buffer = ''));
    }
    if (this.stateOverride) return !1;
    ((this.state = 'path start'), --this.pointer);
  } else return ((this.parseError = !0), X6);
  return !0;
};
var Me4 = new Set([47, 92, 63, 35]);
S3.prototype['parse file'] = function A(B) {
  if (((this.url.scheme = 'file'), B === 47 || B === 92)) {
    if (B === 92) this.parseError = !0;
    this.state = 'file slash';
  } else if (this.base !== null && this.base.scheme === 'file')
    if (isNaN(B))
      ((this.url.host = this.base.host),
        (this.url.path = this.base.path.slice()),
        (this.url.query = this.base.query));
    else if (B === 63)
      ((this.url.host = this.base.host),
        (this.url.path = this.base.path.slice()),
        (this.url.query = ''),
        (this.state = 'query'));
    else if (B === 35)
      ((this.url.host = this.base.host),
        (this.url.path = this.base.path.slice()),
        (this.url.query = this.base.query),
        (this.url.fragment = ''),
        (this.state = 'fragment'));
    else {
      if (
        this.input.length - this.pointer - 1 === 0 ||
        !Ie4(B, this.input[this.pointer + 1]) ||
        (this.input.length - this.pointer - 1 >= 2 && !Me4.has(this.input[this.pointer + 2]))
      )
        ((this.url.host = this.base.host), (this.url.path = this.base.path.slice()), BL0(this.url));
      else this.parseError = !0;
      ((this.state = 'path'), --this.pointer);
    }
  else ((this.state = 'path'), --this.pointer);
  return !0;
};
S3.prototype['parse file slash'] = function A(B) {
  if (B === 47 || B === 92) {
    if (B === 92) this.parseError = !0;
    this.state = 'file host';
  } else {
    if (this.base !== null && this.base.scheme === 'file')
      if (Ge4(this.base.path[0])) this.url.path.push(this.base.path[0]);
      else this.url.host = this.base.host;
    ((this.state = 'path'), --this.pointer);
  }
  return !0;
};
S3.prototype['parse file host'] = function A(B, Q) {
  if (isNaN(B) || B === 47 || B === 92 || B === 63 || B === 35)
    if ((--this.pointer, !this.stateOverride && tM0(this.buffer)))
      ((this.parseError = !0), (this.state = 'path'));
    else if (this.buffer === '') {
      if (((this.url.host = ''), this.stateOverride)) return !1;
      this.state = 'path start';
    } else {
      let I = nb1(this.buffer, R7(this.url));
      if (I === X6) return X6;
      if (I === 'localhost') I = '';
      if (((this.url.host = I), this.stateOverride)) return !1;
      ((this.buffer = ''), (this.state = 'path start'));
    }
  else this.buffer += Q;
  return !0;
};
S3.prototype['parse path start'] = function A(B) {
  if (R7(this.url)) {
    if (B === 92) this.parseError = !0;
    if (((this.state = 'path'), B !== 47 && B !== 92)) --this.pointer;
  } else if (!this.stateOverride && B === 63) ((this.url.query = ''), (this.state = 'query'));
  else if (!this.stateOverride && B === 35) ((this.url.fragment = ''), (this.state = 'fragment'));
  else if (B !== void 0) {
    if (((this.state = 'path'), B !== 47)) --this.pointer;
  }
  return !0;
};
S3.prototype['parse path'] = function A(B) {
  if (
    isNaN(B) ||
    B === 47 ||
    (R7(this.url) && B === 92) ||
    (!this.stateOverride && (B === 63 || B === 35))
  ) {
    if (R7(this.url) && B === 92) this.parseError = !0;
    if (Qe4(this.buffer)) {
      if ((BL0(this.url), B !== 47 && !(R7(this.url) && B === 92))) this.url.path.push('');
    } else if (sM0(this.buffer) && B !== 47 && !(R7(this.url) && B === 92)) this.url.path.push('');
    else if (!sM0(this.buffer)) {
      if (this.url.scheme === 'file' && this.url.path.length === 0 && tM0(this.buffer)) {
        if (this.url.host !== '' && this.url.host !== null)
          ((this.parseError = !0), (this.url.host = ''));
        this.buffer = this.buffer[0] + ':';
      }
      this.url.path.push(this.buffer);
    }
    if (((this.buffer = ''), this.url.scheme === 'file' && (B === void 0 || B === 63 || B === 35)))
      while (this.url.path.length > 1 && this.url.path[0] === '')
        ((this.parseError = !0), this.url.path.shift());
    if (B === 63) ((this.url.query = ''), (this.state = 'query'));
    if (B === 35) ((this.url.fragment = ''), (this.state = 'fragment'));
  } else {
    if (B === 37 && (!HV(this.input[this.pointer + 1]) || !HV(this.input[this.pointer + 2])))
      this.parseError = !0;
    this.buffer += US(B, AL0);
  }
  return !0;
};
S3.prototype['parse cannot-be-a-base-URL path'] = function A(B) {
  if (B === 63) ((this.url.query = ''), (this.state = 'query'));
  else if (B === 35) ((this.url.fragment = ''), (this.state = 'fragment'));
  else {
    if (!isNaN(B) && B !== 37) this.parseError = !0;
    if (B === 37 && (!HV(this.input[this.pointer + 1]) || !HV(this.input[this.pointer + 2])))
      this.parseError = !0;
    if (!isNaN(B)) this.url.path[0] = this.url.path[0] + US(B, _Z1);
  }
  return !0;
};
S3.prototype['parse query'] = function A(B, Q) {
  if (isNaN(B) || (!this.stateOverride && B === 35)) {
    if (!R7(this.url) || this.url.scheme === 'ws' || this.url.scheme === 'wss')
      this.encodingOverride = 'utf-8';
    let I = new Buffer(this.buffer);
    for (let G = 0; G < I.length; ++G)
      if (I[G] < 33 || I[G] > 126 || I[G] === 34 || I[G] === 35 || I[G] === 60 || I[G] === 62)
        this.url.query += eM0(I[G]);
      else this.url.query += String.fromCodePoint(I[G]);
    if (((this.buffer = ''), B === 35)) ((this.url.fragment = ''), (this.state = 'fragment'));
  } else {
    if (B === 37 && (!HV(this.input[this.pointer + 1]) || !HV(this.input[this.pointer + 2])))
      this.parseError = !0;
    this.buffer += Q;
  }
  return !0;
};
S3.prototype['parse fragment'] = function A(B) {
  if (isNaN(B));
  else if (B === 0) this.parseError = !0;
  else {
    if (B === 37 && (!HV(this.input[this.pointer + 1]) || !HV(this.input[this.pointer + 2])))
      this.parseError = !0;
    this.url.fragment += US(B, _Z1);
  }
  return !0;
};
function Le4(A, B) {
  let Q = A.scheme + ':';
  if (A.host !== null) {
    if (((Q += '//'), A.username !== '' || A.password !== '')) {
      if (((Q += A.username), A.password !== '')) Q += ':' + A.password;
      Q += '@';
    }
    if (((Q += sb1(A.host)), A.port !== null)) Q += ':' + A.port;
  } else if (A.host === null && A.scheme === 'file') Q += '//';
  if (A.cannotBeABaseURL) Q += A.path[0];
  else for (let I of A.path) Q += '/' + I;
  if (A.query !== null) Q += '?' + A.query;
  if (!B && A.fragment !== null) Q += '#' + A.fragment;
  return Q;
}
function Re4(A) {
  let B = A.scheme + '://';
  if (((B += sb1(A.host)), A.port !== null)) B += ':' + A.port;
  return B;
}
Oe4.serializeURL = Le4;
Oe4.serializeURLOrigin = function (A) {
  switch (A.scheme) {
    case 'blob':
      try {
        return Oe4.serializeURLOrigin(Oe4.parseURL(A.path[0]));
      } catch (B) {
        return 'null';
      }
    case 'ftp':
    case 'gopher':
    case 'http':
    case 'https':
    case 'ws':
    case 'wss':
      return Re4({ scheme: A.scheme, host: A.host, port: A.port });
    case 'file':
      return 'file://';
    default:
      return 'null';
  }
};
Oe4.basicURLParse = function (A, B) {
  if (B === void 0) B = {};
  let Q = new S3(A, B.baseURL, B.encodingOverride, B.url, B.stateOverride);
  if (Q.failure) return 'failure';
  return Q.url;
};
Oe4.setTheUsername = function (A, B) {
  A.username = '';
  let Q = Dg.ucs2.decode(B);
  for (let I = 0; I < Q.length; ++I) A.username += US(Q[I], ab1);
};
Oe4.setThePassword = function (A, B) {
  A.password = '';
  let Q = Dg.ucs2.decode(B);
  for (let I = 0; I < Q.length; ++I) A.password += US(Q[I], ab1);
};
Oe4.serializeHost = sb1;
Oe4.cannotHaveAUsernamePasswordPort = $e4;
Oe4.serializeInteger = function (A) {
  return String(A);
};
Oe4.parseURL = function (A, B) {
  if (B === void 0) B = {};
  return Oe4.basicURLParse(A, { baseURL: B.baseURL, encodingOverride: B.encodingOverride });
};

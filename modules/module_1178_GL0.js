// Module: GL0
// Params: xe4

var _3 = qz();
xe4.implementation = class A {
  constructor(B) {
    let Q = B[0],
      I = B[1],
      G = null;
    if (I !== void 0) {
      if (((G = _3.basicURLParse(I)), G === 'failure')) throw new TypeError('Invalid base URL');
    }
    let D = _3.basicURLParse(Q, { baseURL: G });
    if (D === 'failure') throw new TypeError('Invalid URL');
    this._url = D;
  }
  get href() {
    return _3.serializeURL(this._url);
  }
  set href(B) {
    let Q = _3.basicURLParse(B);
    if (Q === 'failure') throw new TypeError('Invalid URL');
    this._url = Q;
  }
  get origin() {
    return _3.serializeURLOrigin(this._url);
  }
  get protocol() {
    return this._url.scheme + ':';
  }
  set protocol(B) {
    _3.basicURLParse(B + ':', { url: this._url, stateOverride: 'scheme start' });
  }
  get username() {
    return this._url.username;
  }
  set username(B) {
    if (_3.cannotHaveAUsernamePasswordPort(this._url)) return;
    _3.setTheUsername(this._url, B);
  }
  get password() {
    return this._url.password;
  }
  set password(B) {
    if (_3.cannotHaveAUsernamePasswordPort(this._url)) return;
    _3.setThePassword(this._url, B);
  }
  get host() {
    let B = this._url;
    if (B.host === null) return '';
    if (B.port === null) return _3.serializeHost(B.host);
    return _3.serializeHost(B.host) + ':' + _3.serializeInteger(B.port);
  }
  set host(B) {
    if (this._url.cannotBeABaseURL) return;
    _3.basicURLParse(B, { url: this._url, stateOverride: 'host' });
  }
  get hostname() {
    if (this._url.host === null) return '';
    return _3.serializeHost(this._url.host);
  }
  set hostname(B) {
    if (this._url.cannotBeABaseURL) return;
    _3.basicURLParse(B, { url: this._url, stateOverride: 'hostname' });
  }
  get port() {
    if (this._url.port === null) return '';
    return _3.serializeInteger(this._url.port);
  }
  set port(B) {
    if (_3.cannotHaveAUsernamePasswordPort(this._url)) return;
    if (B === '') this._url.port = null;
    else _3.basicURLParse(B, { url: this._url, stateOverride: 'port' });
  }
  get pathname() {
    if (this._url.cannotBeABaseURL) return this._url.path[0];
    if (this._url.path.length === 0) return '';
    return '/' + this._url.path.join('/');
  }
  set pathname(B) {
    if (this._url.cannotBeABaseURL) return;
    ((this._url.path = []), _3.basicURLParse(B, { url: this._url, stateOverride: 'path start' }));
  }
  get search() {
    if (this._url.query === null || this._url.query === '') return '';
    return '?' + this._url.query;
  }
  set search(B) {
    let Q = this._url;
    if (B === '') {
      Q.query = null;
      return;
    }
    let I = B[0] === '?' ? B.substring(1) : B;
    ((Q.query = ''), _3.basicURLParse(I, { url: Q, stateOverride: 'query' }));
  }
  get hash() {
    if (this._url.fragment === null || this._url.fragment === '') return '';
    return '#' + this._url.fragment;
  }
  set hash(B) {
    if (B === '') {
      this._url.fragment = null;
      return;
    }
    let Q = B[0] === '#' ? B.substring(1) : B;
    ((this._url.fragment = ''), _3.basicURLParse(Q, { url: this._url, stateOverride: 'fragment' }));
  }
  toJSON() {
    return this.href;
  }
};

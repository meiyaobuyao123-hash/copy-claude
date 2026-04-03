// Module: Ud1
// Params: qI6,Ed1

var { getResponseData: UI6, buildKey: NI6, addMockDispatch: Kd1 } = os(),
  {
    kDispatches: BW1,
    kDispatchKey: QW1,
    kDefaultHeaders: Hd1,
    kDefaultTrailers: zd1,
    kContentLength: wd1,
    kMockDispatch: IW1,
  } = Zh(),
  { InvalidArgumentError: mz } = y5(),
  { buildURL: $I6 } = I6();
class ts {
  constructor(A) {
    this[IW1] = A;
  }
  delay(A) {
    if (typeof A !== 'number' || !Number.isInteger(A) || A <= 0)
      throw new mz('waitInMs must be a valid integer > 0');
    return ((this[IW1].delay = A), this);
  }
  persist() {
    return ((this[IW1].persist = !0), this);
  }
  times(A) {
    if (typeof A !== 'number' || !Number.isInteger(A) || A <= 0)
      throw new mz('repeatTimes must be a valid integer > 0');
    return ((this[IW1].times = A), this);
  }
}
class qx0 {
  constructor(A, B) {
    if (typeof A !== 'object') throw new mz('opts must be an object');
    if (typeof A.path === 'undefined') throw new mz('opts.path must be defined');
    if (typeof A.method === 'undefined') A.method = 'GET';
    if (typeof A.path === 'string')
      if (A.query) A.path = $I6(A.path, A.query);
      else {
        let Q = new URL(A.path, 'data://');
        A.path = Q.pathname + Q.search;
      }
    if (typeof A.method === 'string') A.method = A.method.toUpperCase();
    ((this[QW1] = NI6(A)), (this[BW1] = B), (this[Hd1] = {}), (this[zd1] = {}), (this[wd1] = !1));
  }
  createMockScopeDispatchData({ statusCode: A, data: B, responseOptions: Q }) {
    let I = UI6(B),
      G = this[wd1] ? { 'content-length': I.length } : {},
      D = { ...this[Hd1], ...G, ...Q.headers },
      Z = { ...this[zd1], ...Q.trailers };
    return { statusCode: A, data: B, headers: D, trailers: Z };
  }
  validateReplyParameters(A) {
    if (typeof A.statusCode === 'undefined') throw new mz('statusCode must be defined');
    if (typeof A.responseOptions !== 'object' || A.responseOptions === null)
      throw new mz('responseOptions must be an object');
  }
  reply(A) {
    if (typeof A === 'function') {
      let G = (Z) => {
          let Y = A(Z);
          if (typeof Y !== 'object' || Y === null)
            throw new mz('reply options callback must return an object');
          let W = { data: '', responseOptions: {}, ...Y };
          return (this.validateReplyParameters(W), { ...this.createMockScopeDispatchData(W) });
        },
        D = Kd1(this[BW1], this[QW1], G);
      return new ts(D);
    }
    let B = {
      statusCode: A,
      data: arguments[1] === void 0 ? '' : arguments[1],
      responseOptions: arguments[2] === void 0 ? {} : arguments[2],
    };
    this.validateReplyParameters(B);
    let Q = this.createMockScopeDispatchData(B),
      I = Kd1(this[BW1], this[QW1], Q);
    return new ts(I);
  }
  replyWithError(A) {
    if (typeof A === 'undefined') throw new mz('error must be defined');
    let B = Kd1(this[BW1], this[QW1], { error: A });
    return new ts(B);
  }
  defaultReplyHeaders(A) {
    if (typeof A === 'undefined') throw new mz('headers must be defined');
    return ((this[Hd1] = A), this);
  }
  defaultReplyTrailers(A) {
    if (typeof A === 'undefined') throw new mz('trailers must be defined');
    return ((this[zd1] = A), this);
  }
  replyContentLength() {
    return ((this[wd1] = !0), this);
  }
}
qI6.MockInterceptor = qx0;
qI6.MockScope = ts;

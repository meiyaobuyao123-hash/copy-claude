// Module: Ov0
// Params: zK8,Rv0

var { staticPropertyDescriptors: Xh, readOperation: TW1, fireAProgressEvent: Mv0 } = qv0(),
  { kState: cS, kError: Lv0, kResult: PW1, kEvents: k5, kAborted: CZ6 } = pd1(),
  { webidl: Y8 } = WG(),
  { kEnumerableProperty: LY } = I6();
class a5 extends EventTarget {
  constructor() {
    super();
    ((this[cS] = 'empty'),
      (this[PW1] = null),
      (this[Lv0] = null),
      (this[k5] = {
        loadend: null,
        error: null,
        abort: null,
        load: null,
        progress: null,
        loadstart: null,
      }));
  }
  readAsArrayBuffer(A) {
    (Y8.brandCheck(this, a5),
      Y8.argumentLengthCheck(arguments, 1, 'FileReader.readAsArrayBuffer'),
      (A = Y8.converters.Blob(A, { strict: !1 })),
      TW1(this, A, 'ArrayBuffer'));
  }
  readAsBinaryString(A) {
    (Y8.brandCheck(this, a5),
      Y8.argumentLengthCheck(arguments, 1, 'FileReader.readAsBinaryString'),
      (A = Y8.converters.Blob(A, { strict: !1 })),
      TW1(this, A, 'BinaryString'));
  }
  readAsText(A, B = void 0) {
    if (
      (Y8.brandCheck(this, a5),
      Y8.argumentLengthCheck(arguments, 1, 'FileReader.readAsText'),
      (A = Y8.converters.Blob(A, { strict: !1 })),
      B !== void 0)
    )
      B = Y8.converters.DOMString(B, 'FileReader.readAsText', 'encoding');
    TW1(this, A, 'Text', B);
  }
  readAsDataURL(A) {
    (Y8.brandCheck(this, a5),
      Y8.argumentLengthCheck(arguments, 1, 'FileReader.readAsDataURL'),
      (A = Y8.converters.Blob(A, { strict: !1 })),
      TW1(this, A, 'DataURL'));
  }
  abort() {
    if (this[cS] === 'empty' || this[cS] === 'done') {
      this[PW1] = null;
      return;
    }
    if (this[cS] === 'loading') ((this[cS] = 'done'), (this[PW1] = null));
    if (((this[CZ6] = !0), Mv0('abort', this), this[cS] !== 'loading')) Mv0('loadend', this);
  }
  get readyState() {
    switch ((Y8.brandCheck(this, a5), this[cS])) {
      case 'empty':
        return this.EMPTY;
      case 'loading':
        return this.LOADING;
      case 'done':
        return this.DONE;
    }
  }
  get result() {
    return (Y8.brandCheck(this, a5), this[PW1]);
  }
  get error() {
    return (Y8.brandCheck(this, a5), this[Lv0]);
  }
  get onloadend() {
    return (Y8.brandCheck(this, a5), this[k5].loadend);
  }
  set onloadend(A) {
    if ((Y8.brandCheck(this, a5), this[k5].loadend))
      this.removeEventListener('loadend', this[k5].loadend);
    if (typeof A === 'function') ((this[k5].loadend = A), this.addEventListener('loadend', A));
    else this[k5].loadend = null;
  }
  get onerror() {
    return (Y8.brandCheck(this, a5), this[k5].error);
  }
  set onerror(A) {
    if ((Y8.brandCheck(this, a5), this[k5].error))
      this.removeEventListener('error', this[k5].error);
    if (typeof A === 'function') ((this[k5].error = A), this.addEventListener('error', A));
    else this[k5].error = null;
  }
  get onloadstart() {
    return (Y8.brandCheck(this, a5), this[k5].loadstart);
  }
  set onloadstart(A) {
    if ((Y8.brandCheck(this, a5), this[k5].loadstart))
      this.removeEventListener('loadstart', this[k5].loadstart);
    if (typeof A === 'function') ((this[k5].loadstart = A), this.addEventListener('loadstart', A));
    else this[k5].loadstart = null;
  }
  get onprogress() {
    return (Y8.brandCheck(this, a5), this[k5].progress);
  }
  set onprogress(A) {
    if ((Y8.brandCheck(this, a5), this[k5].progress))
      this.removeEventListener('progress', this[k5].progress);
    if (typeof A === 'function') ((this[k5].progress = A), this.addEventListener('progress', A));
    else this[k5].progress = null;
  }
  get onload() {
    return (Y8.brandCheck(this, a5), this[k5].load);
  }
  set onload(A) {
    if ((Y8.brandCheck(this, a5), this[k5].load)) this.removeEventListener('load', this[k5].load);
    if (typeof A === 'function') ((this[k5].load = A), this.addEventListener('load', A));
    else this[k5].load = null;
  }
  get onabort() {
    return (Y8.brandCheck(this, a5), this[k5].abort);
  }
  set onabort(A) {
    if ((Y8.brandCheck(this, a5), this[k5].abort))
      this.removeEventListener('abort', this[k5].abort);
    if (typeof A === 'function') ((this[k5].abort = A), this.addEventListener('abort', A));
    else this[k5].abort = null;
  }
}
a5.EMPTY = a5.prototype.EMPTY = 0;
a5.LOADING = a5.prototype.LOADING = 1;
a5.DONE = a5.prototype.DONE = 2;
Object.defineProperties(a5.prototype, {
  EMPTY: Xh,
  LOADING: Xh,
  DONE: Xh,
  readAsArrayBuffer: LY,
  readAsBinaryString: LY,
  readAsText: LY,
  readAsDataURL: LY,
  abort: LY,
  readyState: LY,
  result: LY,
  error: LY,
  onloadstart: LY,
  onprogress: LY,
  onload: LY,
  onabort: LY,
  onerror: LY,
  onloadend: LY,
  [Symbol.toStringTag]: { value: 'FileReader', writable: !1, enumerable: !1, configurable: !0 },
});
Object.defineProperties(a5, { EMPTY: Xh, LOADING: Xh, DONE: Xh });
Rv0.exports = { FileReader: a5 };

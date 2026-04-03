// Module: sF1
// Params: ep0

Object.defineProperty(ep0, '__esModule', { value: !0 });
ep0.NonRecordingSpan = void 0;
var dE6 = aF1();
class tp0 {
  constructor(A = dE6.INVALID_SPAN_CONTEXT) {
    this._spanContext = A;
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(A, B) {
    return this;
  }
  setAttributes(A) {
    return this;
  }
  addEvent(A, B) {
    return this;
  }
  addLink(A) {
    return this;
  }
  addLinks(A) {
    return this;
  }
  setStatus(A) {
    return this;
  }
  updateName(A) {
    return this;
  }
  end(A) {}
  isRecording() {
    return !1;
  }
  recordException(A, B) {}
}
ep0.NonRecordingSpan = tp0;

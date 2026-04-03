// Module: So
// Params: c32

Object.defineProperty(c32, '__esModule', { value: !0 });
c32.BackoffTimeout = void 0;
var Eu6 = O6(),
  Uu6 = r8(),
  Nu6 = 'backoff',
  $u6 = 1000,
  qu6 = 1.6,
  Mu6 = 120000,
  Lu6 = 0.2;
function Ru6(A, B) {
  return Math.random() * (B - A) + A;
}
class IC1 {
  constructor(A, B) {
    if (
      ((this.callback = A),
      (this.initialDelay = $u6),
      (this.multiplier = qu6),
      (this.maxDelay = Mu6),
      (this.jitter = Lu6),
      (this.running = !1),
      (this.hasRef = !0),
      (this.startTime = new Date()),
      (this.endTime = new Date()),
      (this.id = IC1.getNextId()),
      B)
    ) {
      if (B.initialDelay) this.initialDelay = B.initialDelay;
      if (B.multiplier) this.multiplier = B.multiplier;
      if (B.jitter) this.jitter = B.jitter;
      if (B.maxDelay) this.maxDelay = B.maxDelay;
    }
    (this.trace(
      'constructed initialDelay=' +
        this.initialDelay +
        ' multiplier=' +
        this.multiplier +
        ' jitter=' +
        this.jitter +
        ' maxDelay=' +
        this.maxDelay
    ),
      (this.nextDelay = this.initialDelay),
      (this.timerId = setTimeout(() => {}, 0)),
      clearTimeout(this.timerId));
  }
  static getNextId() {
    return this.nextId++;
  }
  trace(A) {
    Uu6.trace(Eu6.LogVerbosity.DEBUG, Nu6, '{' + this.id + '} ' + A);
  }
  runTimer(A) {
    var B, Q;
    if (
      (this.trace('runTimer(delay=' + A + ')'),
      (this.endTime = this.startTime),
      this.endTime.setMilliseconds(this.endTime.getMilliseconds() + A),
      clearTimeout(this.timerId),
      (this.timerId = setTimeout(() => {
        (this.trace('timer fired'), (this.running = !1), this.callback());
      }, A)),
      !this.hasRef)
    )
      (Q = (B = this.timerId).unref) === null || Q === void 0 || Q.call(B);
  }
  runOnce() {
    (this.trace('runOnce()'),
      (this.running = !0),
      (this.startTime = new Date()),
      this.runTimer(this.nextDelay));
    let A = Math.min(this.nextDelay * this.multiplier, this.maxDelay),
      B = A * this.jitter;
    this.nextDelay = A + Ru6(-B, B);
  }
  stop() {
    (this.trace('stop()'), clearTimeout(this.timerId), (this.running = !1));
  }
  reset() {
    if (
      (this.trace('reset() running=' + this.running),
      (this.nextDelay = this.initialDelay),
      this.running)
    ) {
      let A = new Date(),
        B = this.startTime;
      if (
        (B.setMilliseconds(B.getMilliseconds() + this.nextDelay), clearTimeout(this.timerId), A < B)
      )
        this.runTimer(B.getTime() - A.getTime());
      else this.running = !1;
    }
  }
  isRunning() {
    return this.running;
  }
  ref() {
    var A, B;
    ((this.hasRef = !0), (B = (A = this.timerId).ref) === null || B === void 0 || B.call(A));
  }
  unref() {
    var A, B;
    ((this.hasRef = !1), (B = (A = this.timerId).unref) === null || B === void 0 || B.call(A));
  }
  getEndTime() {
    return this.endTime;
  }
}
c32.BackoffTimeout = IC1;
IC1.nextId = 0;

// Module: ER
// Params: u32

Object.defineProperty(u32, '__esModule', { value: !0 });
u32.QueuePicker = u32.UnavailablePicker = u32.PickResultType = void 0;
var Ku6 = XD(),
  Hu6 = O6(),
  QC1;
(function (A) {
  ((A[(A.COMPLETE = 0)] = 'COMPLETE'),
    (A[(A.QUEUE = 1)] = 'QUEUE'),
    (A[(A.TRANSIENT_FAILURE = 2)] = 'TRANSIENT_FAILURE'),
    (A[(A.DROP = 3)] = 'DROP'));
})(QC1 || (u32.PickResultType = QC1 = {}));
class m32 {
  constructor(A) {
    this.status = Object.assign(
      {
        code: Hu6.Status.UNAVAILABLE,
        details: 'No connection established',
        metadata: new Ku6.Metadata(),
      },
      A
    );
  }
  pick(A) {
    return {
      pickResultType: QC1.TRANSIENT_FAILURE,
      subchannel: null,
      status: this.status,
      onCallStarted: null,
      onCallEnded: null,
    };
  }
}
u32.UnavailablePicker = m32;
class d32 {
  constructor(A, B) {
    ((this.loadBalancer = A), (this.childPicker = B), (this.calledExitIdle = !1));
  }
  pick(A) {
    if (!this.calledExitIdle)
      (process.nextTick(() => {
        this.loadBalancer.exitIdle();
      }),
        (this.calledExitIdle = !0));
    if (this.childPicker) return this.childPicker.pick(A);
    else
      return {
        pickResultType: QC1.QUEUE,
        subchannel: null,
        status: null,
        onCallStarted: null,
        onCallEnded: null,
      };
  }
}
u32.QueuePicker = d32;

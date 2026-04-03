// Module: _Q2
// Params: PQ2

Object.defineProperty(PQ2, '__esModule', { value: !0 });
PQ2.InterceptingListenerImpl = void 0;
PQ2.isInterceptingListener = Vp6;
function Vp6(A) {
  return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1;
}
class TQ2 {
  constructor(A, B) {
    ((this.listener = A),
      (this.nextListener = B),
      (this.processingMetadata = !1),
      (this.hasPendingMessage = !1),
      (this.processingMessage = !1),
      (this.pendingStatus = null));
  }
  processPendingMessage() {
    if (this.hasPendingMessage)
      (this.nextListener.onReceiveMessage(this.pendingMessage),
        (this.pendingMessage = null),
        (this.hasPendingMessage = !1));
  }
  processPendingStatus() {
    if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus);
  }
  onReceiveMetadata(A) {
    ((this.processingMetadata = !0),
      this.listener.onReceiveMetadata(A, (B) => {
        ((this.processingMetadata = !1),
          this.nextListener.onReceiveMetadata(B),
          this.processPendingMessage(),
          this.processPendingStatus());
      }));
  }
  onReceiveMessage(A) {
    ((this.processingMessage = !0),
      this.listener.onReceiveMessage(A, (B) => {
        if (((this.processingMessage = !1), this.processingMetadata))
          ((this.pendingMessage = B), (this.hasPendingMessage = !0));
        else (this.nextListener.onReceiveMessage(B), this.processPendingStatus());
      }));
  }
  onReceiveStatus(A) {
    this.listener.onReceiveStatus(A, (B) => {
      if (this.processingMetadata || this.processingMessage) this.pendingStatus = B;
      else this.nextListener.onReceiveStatus(B);
    });
  }
}
PQ2.InterceptingListenerImpl = TQ2;

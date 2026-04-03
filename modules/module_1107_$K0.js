// Module: $K0
// Params: UK0

Object.defineProperty(UK0, '__esModule', { value: !0 });
UK0.Sha256 = void 0;
var EK0 = Bv1(),
  oG1 = Qv1(),
  rG1 = aV0(),
  Gv1 = wK0(),
  dh4 = (function () {
    function A(B) {
      ((this.secret = B), (this.hash = new rG1.RawSha256()), this.reset());
    }
    return (
      (A.prototype.update = function (B) {
        if (Gv1.isEmptyData(B) || this.error) return;
        try {
          this.hash.update(Gv1.convertToBuffer(B));
        } catch (Q) {
          this.error = Q;
        }
      }),
      (A.prototype.digestSync = function () {
        if (this.error) throw this.error;
        if (this.outer) {
          if (!this.outer.finished) this.outer.update(this.hash.digest());
          return this.outer.digest();
        }
        return this.hash.digest();
      }),
      (A.prototype.digest = function () {
        return EK0.__awaiter(this, void 0, void 0, function () {
          return EK0.__generator(this, function (B) {
            return [2, this.digestSync()];
          });
        });
      }),
      (A.prototype.reset = function () {
        if (((this.hash = new rG1.RawSha256()), this.secret)) {
          this.outer = new rG1.RawSha256();
          var B = uh4(this.secret),
            Q = new Uint8Array(oG1.BLOCK_SIZE);
          Q.set(B);
          for (var I = 0; I < oG1.BLOCK_SIZE; I++) ((B[I] ^= 54), (Q[I] ^= 92));
          (this.hash.update(B), this.outer.update(Q));
          for (var I = 0; I < B.byteLength; I++) B[I] = 0;
        }
      }),
      A
    );
  })();
UK0.Sha256 = dh4;
function uh4(A) {
  var B = Gv1.convertToBuffer(A);
  if (B.byteLength > oG1.BLOCK_SIZE) {
    var Q = new rG1.RawSha256();
    (Q.update(B), (B = Q.digest()));
  }
  var I = new Uint8Array(oG1.BLOCK_SIZE);
  return (I.set(B), I);
}

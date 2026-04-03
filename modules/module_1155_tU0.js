// Module: tU0
// Params: rU0

Object.defineProperty(rU0, '__esModule', { value: !0 });
rU0.AwsCrc32 = void 0;
var aU0 = av1(),
  tv1 = ov1(),
  sU0 = mD1(),
  Ii4 = (function () {
    function A() {
      this.crc32 = new sU0.Crc32();
    }
    return (
      (A.prototype.update = function (B) {
        if (tv1.isEmptyData(B)) return;
        this.crc32.update(tv1.convertToBuffer(B));
      }),
      (A.prototype.digest = function () {
        return aU0.__awaiter(this, void 0, void 0, function () {
          return aU0.__generator(this, function (B) {
            return [2, tv1.numToUint8(this.crc32.digest())];
          });
        });
      }),
      (A.prototype.reset = function () {
        this.crc32 = new sU0.Crc32();
      }),
      A
    );
  })();
rU0.AwsCrc32 = Ii4;

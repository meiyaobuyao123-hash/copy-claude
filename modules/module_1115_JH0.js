// Module: JH0
// Params: WH0

Object.defineProperty(WH0, '__esModule', { value: !0 });
WH0.AwsCrc32 = void 0;
var ZH0 = Yv1(),
  Fv1 = Wv1(),
  YH0 = AD1(),
  Im4 = (function () {
    function A() {
      this.crc32 = new YH0.Crc32();
    }
    return (
      (A.prototype.update = function (B) {
        if (Fv1.isEmptyData(B)) return;
        this.crc32.update(Fv1.convertToBuffer(B));
      }),
      (A.prototype.digest = function () {
        return ZH0.__awaiter(this, void 0, void 0, function () {
          return ZH0.__generator(this, function (B) {
            return [2, Fv1.numToUint8(this.crc32.digest())];
          });
        });
      }),
      (A.prototype.reset = function () {
        this.crc32 = new YH0.Crc32();
      }),
      A
    );
  })();
WH0.AwsCrc32 = Im4;

// Module: Xw0
// Params: Jw0

Object.defineProperty(Jw0, '__esModule', { value: !0 });
Jw0.sdkStreamMixin = void 0;
var Fp4 = Ww0(),
  Jp4 = Mv1(),
  Pv1 = D1('stream'),
  Cp4 = D1('util'),
  Fw0 = 'The stream has already been transformed.',
  Xp4 = (A) => {
    var B, Q;
    if (!(A instanceof Pv1.Readable)) {
      let D =
        ((Q =
          (B = A === null || A === void 0 ? void 0 : A.__proto__) === null || B === void 0
            ? void 0
            : B.constructor) === null || Q === void 0
          ? void 0
          : Q.name) || A;
      throw new Error(
        `Unexpected stream implementation, expect Stream.Readable instance, got ${D}`
      );
    }
    let I = !1,
      G = async () => {
        if (I) throw new Error(Fw0);
        return ((I = !0), await Fp4.streamCollector(A));
      };
    return Object.assign(A, {
      transformToByteArray: G,
      transformToString: async (D) => {
        let Z = await G();
        if (D === void 0 || Buffer.isEncoding(D))
          return Jp4.fromArrayBuffer(Z.buffer, Z.byteOffset, Z.byteLength).toString(D);
        else return new Cp4.TextDecoder(D).decode(Z);
      },
      transformToWebStream: () => {
        if (I) throw new Error(Fw0);
        if (A.readableFlowing !== null)
          throw new Error('The stream has been consumed by other callbacks.');
        if (typeof Pv1.Readable.toWeb !== 'function')
          throw new Error(
            'Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.'
          );
        return ((I = !0), Pv1.Readable.toWeb(A));
      },
    });
  };
Jw0.sdkStreamMixin = Xp4;

// Module: xvA
// Params: yvA

Object.defineProperty(yvA, '__esModule', { value: !0 });
yvA.sdkStreamMixin = void 0;
var zn9 = GU(),
  wn9 = lG(),
  UO1 = D1('stream'),
  En9 = _vA(),
  jvA = 'The stream has already been transformed.',
  Un9 = (A) => {
    var B, Q;
    if (!(A instanceof UO1.Readable))
      try {
        return En9.sdkStreamMixin(A);
      } catch (D) {
        let Z =
          ((Q =
            (B = A === null || A === void 0 ? void 0 : A.__proto__) === null || B === void 0
              ? void 0
              : B.constructor) === null || Q === void 0
            ? void 0
            : Q.name) || A;
        throw new Error(
          `Unexpected stream implementation, expect Stream.Readable instance, got ${Z}`
        );
      }
    let I = !1,
      G = async () => {
        if (I) throw new Error(jvA);
        return ((I = !0), await zn9.streamCollector(A));
      };
    return Object.assign(A, {
      transformToByteArray: G,
      transformToString: async (D) => {
        let Z = await G();
        if (D === void 0 || Buffer.isEncoding(D))
          return wn9.fromArrayBuffer(Z.buffer, Z.byteOffset, Z.byteLength).toString(D);
        else return new TextDecoder(D).decode(Z);
      },
      transformToWebStream: () => {
        if (I) throw new Error(jvA);
        if (A.readableFlowing !== null)
          throw new Error('The stream has been consumed by other callbacks.');
        if (typeof UO1.Readable.toWeb !== 'function')
          throw new Error(
            'Readable.toWeb() is not supported. Please ensure a polyfill is available.'
          );
        return ((I = !0), UO1.Readable.toWeb(A));
      },
    });
  };
yvA.sdkStreamMixin = Un9;

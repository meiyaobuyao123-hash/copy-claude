// Module: _vA
// Params: PvA

Object.defineProperty(PvA, '__esModule', { value: !0 });
PvA.sdkStreamMixin = void 0;
var Cn9 = EvA(),
  Xn9 = Nf(),
  Vn9 = v51(),
  Kn9 = DQ(),
  RvA = tq(),
  OvA = 'The stream has already been transformed.',
  Hn9 = (A) => {
    var B, Q;
    if (!TvA(A) && !RvA.isReadableStream(A)) {
      let Z =
        ((Q =
          (B = A === null || A === void 0 ? void 0 : A.__proto__) === null || B === void 0
            ? void 0
            : B.constructor) === null || Q === void 0
          ? void 0
          : Q.name) || A;
      throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${Z}`);
    }
    let I = !1,
      G = async () => {
        if (I) throw new Error(OvA);
        return ((I = !0), await Cn9.streamCollector(A));
      },
      D = (Z) => {
        if (typeof Z.stream !== 'function')
          throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
        return Z.stream();
      };
    return Object.assign(A, {
      transformToByteArray: G,
      transformToString: async (Z) => {
        let Y = await G();
        if (Z === 'base64') return Xn9.toBase64(Y);
        else if (Z === 'hex') return Vn9.toHex(Y);
        else if (Z === void 0 || Z === 'utf8' || Z === 'utf-8') return Kn9.toUtf8(Y);
        else if (typeof TextDecoder === 'function') return new TextDecoder(Z).decode(Y);
        else
          throw new Error('TextDecoder is not available, please make sure polyfill is provided.');
      },
      transformToWebStream: () => {
        if (I) throw new Error(OvA);
        if (((I = !0), TvA(A))) return D(A);
        else if (RvA.isReadableStream(A)) return A;
        else throw new Error(`Cannot transform payload to web stream, got ${A}`);
      },
    });
  };
PvA.sdkStreamMixin = Hn9;
var TvA = (A) => typeof Blob === 'function' && A instanceof Blob;

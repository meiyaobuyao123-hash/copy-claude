// Module: _N1
// Params: NWA

Object.defineProperty(NWA, '__esModule', { value: !0 });
NWA.createInvalidObservableTypeError = void 0;
function yD9(A) {
  return new TypeError(
    'You provided ' +
      (A !== null && typeof A === 'object' ? 'an invalid object' : "'" + A + "'") +
      ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
  );
}
NWA.createInvalidObservableTypeError = yD9;

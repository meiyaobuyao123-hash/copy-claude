// Module: GYA
// Params: IYA

Object.defineProperty(IYA, '__esModule', { value: !0 });
IYA.performanceTimestampProvider = void 0;
IYA.performanceTimestampProvider = {
  now: function () {
    return (IYA.performanceTimestampProvider.delegate || performance).now();
  },
  delegate: void 0,
};

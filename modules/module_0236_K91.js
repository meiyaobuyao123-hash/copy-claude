// Module: K91
// Params: wYA

Object.defineProperty(wYA, '__esModule', { value: !0 });
wYA.dateTimestampProvider = void 0;
wYA.dateTimestampProvider = {
  now: function () {
    return (wYA.dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0,
};

// Module: MAA
// Params: qAA

Object.defineProperty(qAA, '__esModule', { value: !0 });
var RP2 = Kw1(),
  OP2 = Fw1();
function TP2(A, B, Q) {
  let I = [
    { type: 'client_report' },
    { timestamp: Q || OP2.dateTimestampInSeconds(), discarded_events: A },
  ];
  return RP2.createEnvelope(B ? { dsn: B } : {}, [I]);
}
qAA.createClientReportEnvelope = TP2;

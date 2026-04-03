// Module: fBA
// Params: xBA

Object.defineProperty(xBA, '__esModule', { value: !0 });
var kBA = tA();
function Qt2(A, B) {
  return kBA.extractRequestData(A, { include: B });
}
function It2(A, B, Q = {}) {
  return kBA.addRequestDataToEvent(A, B, { include: Q });
}
xBA.extractRequestData = Qt2;
xBA.parseRequest = It2;

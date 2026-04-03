// Module: aR1
// Params: ug5,aq

var Ef = NyA(),
  { toPromise: t61, toSync: e61, toSyncOptions: nR1 } = qyA();
async function MyA(A, B) {
  let Q = await t61(Ef.lock)(A, B);
  return t61(Q);
}
function Od9(A, B) {
  let Q = e61(Ef.lock)(A, nR1(B));
  return e61(Q);
}
function Td9(A, B) {
  return t61(Ef.unlock)(A, B);
}
function Pd9(A, B) {
  return e61(Ef.unlock)(A, nR1(B));
}
function Sd9(A, B) {
  return t61(Ef.check)(A, B);
}
function _d9(A, B) {
  return e61(Ef.check)(A, nR1(B));
}
aq.exports = MyA;
aq.exports.lock = MyA;
aq.exports.unlock = Td9;
aq.exports.lockSync = Od9;
aq.exports.unlockSync = Pd9;
aq.exports.check = Sd9;
aq.exports.checkSync = _d9;

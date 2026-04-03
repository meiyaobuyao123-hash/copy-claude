// Module: Nl1
// Params: N52,Ul1

Ul1.exports = ab6;
function ab6(moduleName) {
  try {
    var mod = eval('quire'.replace(/^/, 're'))(moduleName);
    if (mod && (mod.length || Object.keys(mod).length)) return mod;
  } catch (A) {}
  return null;
}

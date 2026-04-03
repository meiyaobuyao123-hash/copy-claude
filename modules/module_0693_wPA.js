// Module: wPA
// Params: Ux5,zPA

var cc;
zPA.exports = function () {
  if (!cc) {
    try {
      cc = Ic()('follow-redirects');
    } catch (A) {}
    if (typeof cc !== 'function') cc = function () {};
  }
  cc.apply(null, arguments);
};

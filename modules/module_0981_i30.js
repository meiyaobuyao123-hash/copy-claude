// Module: i30
// Params: p28,l30

var SL4 = u30();
function p30() {}
function c30() {}
c30.resetWarningCache = p30;
l30.exports = function () {
  function A(I, G, D, Z, Y, W) {
    if (W === SL4) return;
    var F = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
    );
    throw ((F.name = 'Invariant Violation'), F);
  }
  A.isRequired = A;
  function B() {
    return A;
  }
  var Q = {
    array: A,
    bigint: A,
    bool: A,
    func: A,
    number: A,
    object: A,
    string: A,
    symbol: A,
    any: A,
    arrayOf: B,
    element: A,
    elementType: A,
    instanceOf: B,
    node: A,
    objectOf: B,
    oneOf: B,
    oneOfType: B,
    shape: B,
    exact: B,
    checkPropTypes: c30,
    resetWarningCache: p30,
  };
  return ((Q.PropTypes = Q), Q);
};

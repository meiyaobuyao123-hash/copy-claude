// Module: b$
// Params: j4A

var { _optionalChain: _4A } = tA();
Object.defineProperty(j4A, '__esModule', { value: !0 });
function Op2(A) {
  let B = _4A([
    A,
    'call',
    (I) => I(),
    'access',
    (I) => I.getClient,
    'call',
    (I) => I(),
    'optionalAccess',
    (I) => I.getOptions,
    'call',
    (I) => I(),
  ]);
  return (_4A([B, 'optionalAccess', (I) => I.instrumenter]) || 'sentry') !== 'sentry';
}
j4A.shouldDisableAutoInstrumentation = Op2;

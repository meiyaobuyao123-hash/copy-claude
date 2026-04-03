// Module: rR0
// Params: sR0

Object.defineProperty(sR0, '__esModule', { value: !0 });
sR0.validate = Q06;
function Q06(A) {
  let B = [
    { invalid: 'uri', expected: 'url' },
    { invalid: 'json', expected: 'data' },
    { invalid: 'qs', expected: 'params' },
  ];
  for (let Q of B)
    if (A[Q.invalid]) {
      let I = `'${Q.invalid}' is not a valid configuration option. Please use '${Q.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
      throw new Error(I);
    }
}

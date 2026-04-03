// Module: veA
// Params: xeA

Object.defineProperty(xeA, '__esModule', { value: !0 });
xeA.resolveHttpAuthRuntimeConfig = xeA.getHttpAuthExtensionConfiguration = void 0;
var PW4 = (A) => {
  let { httpAuthSchemes: B, httpAuthSchemeProvider: Q, credentials: I } = A;
  return {
    setHttpAuthScheme(G) {
      let D = B.findIndex((Z) => Z.schemeId === G.schemeId);
      if (D === -1) B.push(G);
      else B.splice(D, 1, G);
    },
    httpAuthSchemes() {
      return B;
    },
    setHttpAuthSchemeProvider(G) {
      Q = G;
    },
    httpAuthSchemeProvider() {
      return Q;
    },
    setCredentials(G) {
      I = G;
    },
    credentials() {
      return I;
    },
  };
};
xeA.getHttpAuthExtensionConfiguration = PW4;
var SW4 = (A) => {
  return {
    httpAuthSchemes: A.httpAuthSchemes(),
    httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
    credentials: A.credentials(),
  };
};
xeA.resolveHttpAuthRuntimeConfig = SW4;

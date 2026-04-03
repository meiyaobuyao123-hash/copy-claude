// Module: qE
// Params: $2A

Object.defineProperty($2A, '__esModule', { value: !0 });
var lA1 = tA(),
  tw1 = vQ(),
  Nb2 = xu(),
  $b2 = DJ(),
  qb2 = oK(),
  ew1 = [];
function Mb2(A) {
  let B = {};
  return (
    A.forEach((Q) => {
      let { name: I } = Q,
        G = B[I];
      if (G && !G.isDefaultInstance && Q.isDefaultInstance) return;
      B[I] = Q;
    }),
    Object.keys(B).map((Q) => B[Q])
  );
}
function Lb2(A) {
  let B = A.defaultIntegrations || [],
    Q = A.integrations;
  B.forEach((Z) => {
    Z.isDefaultInstance = !0;
  });
  let I;
  if (Array.isArray(Q)) I = [...B, ...Q];
  else if (typeof Q === 'function') I = lA1.arrayify(Q(B));
  else I = B;
  let G = Mb2(I),
    D = Pb2(G, (Z) => Z.name === 'Debug');
  if (D !== -1) {
    let [Z] = G.splice(D, 1);
    G.push(Z);
  }
  return G;
}
function Rb2(A, B) {
  let Q = {};
  return (
    B.forEach((I) => {
      if (I) N2A(A, I, Q);
    }),
    Q
  );
}
function Ob2(A, B) {
  for (let Q of B) if (Q && Q.afterAllSetup) Q.afterAllSetup(A);
}
function N2A(A, B, Q) {
  if (Q[B.name]) {
    tw1.DEBUG_BUILD &&
      lA1.logger.log(`Integration skipped because it was already installed: ${B.name}`);
    return;
  }
  if (((Q[B.name] = B), ew1.indexOf(B.name) === -1))
    (B.setupOnce(Nb2.addGlobalEventProcessor, qb2.getCurrentHub), ew1.push(B.name));
  if (B.setup && typeof B.setup === 'function') B.setup(A);
  if (A.on && typeof B.preprocessEvent === 'function') {
    let I = B.preprocessEvent.bind(B);
    A.on('preprocessEvent', (G, D) => I(G, D, A));
  }
  if (A.addEventProcessor && typeof B.processEvent === 'function') {
    let I = B.processEvent.bind(B),
      G = Object.assign((D, Z) => I(D, Z, A), { id: B.name });
    A.addEventProcessor(G);
  }
  tw1.DEBUG_BUILD && lA1.logger.log(`Integration installed: ${B.name}`);
}
function Tb2(A) {
  let B = $b2.getClient();
  if (!B || !B.addIntegration) {
    tw1.DEBUG_BUILD &&
      lA1.logger.warn(`Cannot add integration "${A.name}" because no SDK Client is available.`);
    return;
  }
  B.addIntegration(A);
}
function Pb2(A, B) {
  for (let Q = 0; Q < A.length; Q++) if (B(A[Q]) === !0) return Q;
  return -1;
}
function Sb2(A, B) {
  return Object.assign(
    function Q(...I) {
      return B(...I);
    },
    { id: A }
  );
}
function _b2(A) {
  return A;
}
$2A.addIntegration = Tb2;
$2A.afterSetupIntegrations = Ob2;
$2A.convertIntegrationFnToClass = Sb2;
$2A.defineIntegration = _b2;
$2A.getIntegrationsToSetup = Lb2;
$2A.installedIntegrations = ew1;
$2A.setupIntegration = N2A;
$2A.setupIntegrations = Rb2;

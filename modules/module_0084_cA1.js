// Module: cA1
// Params: U2A

Object.defineProperty(U2A, '__esModule', { value: !0 });
var ow1 = tA(),
  Vb2 = '7';
function E2A(A) {
  let B = A.protocol ? `${A.protocol}:` : '',
    Q = A.port ? `:${A.port}` : '';
  return `${B}//${A.host}${Q}${A.path ? `/${A.path}` : ''}/api/`;
}
function Kb2(A) {
  return `${E2A(A)}${A.projectId}/envelope/`;
}
function Hb2(A, B) {
  return ow1.urlEncode({
    sentry_key: A.publicKey,
    sentry_version: Vb2,
    ...(B && { sentry_client: `${B.name}/${B.version}` }),
  });
}
function zb2(A, B = {}) {
  let Q = typeof B === 'string' ? B : B.tunnel,
    I = typeof B === 'string' || !B._metadata ? void 0 : B._metadata.sdk;
  return Q ? Q : `${Kb2(A)}?${Hb2(A, I)}`;
}
function wb2(A, B) {
  let Q = ow1.makeDsn(A);
  if (!Q) return '';
  let I = `${E2A(Q)}embed/error-page/`,
    G = `dsn=${ow1.dsnToString(Q)}`;
  for (let D in B) {
    if (D === 'dsn') continue;
    if (D === 'onClose') continue;
    if (D === 'user') {
      let Z = B.user;
      if (!Z) continue;
      if (Z.name) G += `&name=${encodeURIComponent(Z.name)}`;
      if (Z.email) G += `&email=${encodeURIComponent(Z.email)}`;
    } else G += `&${encodeURIComponent(D)}=${encodeURIComponent(B[D])}`;
  }
  return `${I}?${G}`;
}
U2A.getEnvelopeEndpointWithUrlEncodedAuth = zb2;
U2A.getReportDialogEndpoint = wb2;

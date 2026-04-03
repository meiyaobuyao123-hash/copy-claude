// Module: BnA
// Params: eiA

Object.defineProperty(eiA, '__esModule', { value: !0 });
eiA.getCredentials = eiA.createGetRequest = void 0;
var MP1 = t7(),
  iB4 = kiA(),
  nB4 = tiA(),
  aB4 = MO1();
function sB4(A) {
  return new iB4.HttpRequest({
    protocol: A.protocol,
    hostname: A.hostname,
    port: Number(A.port),
    path: A.pathname,
    query: Array.from(A.searchParams.entries()).reduce((B, [Q, I]) => {
      return ((B[Q] = I), B);
    }, {}),
    fragment: A.hash,
  });
}
eiA.createGetRequest = sB4;
async function rB4(A, B) {
  let I = await aB4.sdkStreamMixin(A.body).transformToString();
  if (A.statusCode === 200) {
    let G = JSON.parse(I);
    if (
      typeof G.AccessKeyId !== 'string' ||
      typeof G.SecretAccessKey !== 'string' ||
      typeof G.Token !== 'string' ||
      typeof G.Expiration !== 'string'
    )
      throw new MP1.CredentialsProviderError(
        'HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }',
        { logger: B }
      );
    return {
      accessKeyId: G.AccessKeyId,
      secretAccessKey: G.SecretAccessKey,
      sessionToken: G.Token,
      expiration: nB4.parseRfc3339DateTime(G.Expiration),
    };
  }
  if (A.statusCode >= 400 && A.statusCode < 500) {
    let G = {};
    try {
      G = JSON.parse(I);
    } catch (D) {}
    throw Object.assign(
      new MP1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
        logger: B,
      }),
      { Code: G.Code, Message: G.Message }
    );
  }
  throw new MP1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
    logger: B,
  });
}
eiA.getCredentials = rB4;

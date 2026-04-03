// Module: XB2
// Params: JB2

Object.defineProperty(JB2, '__esModule', { value: !0 });
JB2.createHttpAgent = JB2.compressAndSend = JB2.sendWithHttp = void 0;
var YB2 = D1('http'),
  WB2 = D1('https'),
  $h6 = D1('zlib'),
  qh6 = D1('stream'),
  ZB2 = DB2(),
  Mh6 = TJ1();
function Lh6(A, B, Q, I, G) {
  let D = new URL(A.url),
    Z = Number(process.versions.node.split('.')[0]),
    Y = {
      hostname: D.hostname,
      port: D.port,
      path: D.pathname,
      method: 'POST',
      headers: { ...A.headers() },
      agent: B,
    },
    F = (D.protocol === 'http:' ? YB2.request : WB2.request)(Y, (C) => {
      let X = [];
      (C.on('data', (V) => X.push(V)),
        C.on('end', () => {
          if (C.statusCode && C.statusCode < 299) I({ status: 'success', data: Buffer.concat(X) });
          else if (C.statusCode && ZB2.isExportRetryable(C.statusCode))
            I({
              status: 'retryable',
              retryInMillis: ZB2.parseRetryAfterToMills(C.headers['retry-after']),
            });
          else {
            let V = new Mh6.OTLPExporterError(
              C.statusMessage,
              C.statusCode,
              Buffer.concat(X).toString()
            );
            I({ status: 'failure', error: V });
          }
        }));
    });
  (F.setTimeout(G, () => {
    (F.destroy(), I({ status: 'failure', error: new Error('Request Timeout') }));
  }),
    F.on('error', (C) => {
      I({ status: 'failure', error: C });
    }));
  let J = Z >= 14 ? 'close' : 'abort';
  (F.on(J, () => {
    I({ status: 'failure', error: new Error('Request timed out') });
  }),
    FB2(F, A.compression, Q, (C) => {
      I({ status: 'failure', error: C });
    }));
}
JB2.sendWithHttp = Lh6;
function FB2(A, B, Q, I) {
  let G = Rh6(Q);
  if (B === 'gzip')
    (A.setHeader('Content-Encoding', 'gzip'),
      (G = G.on('error', I).pipe($h6.createGzip()).on('error', I)));
  G.pipe(A).on('error', I);
}
JB2.compressAndSend = FB2;
function Rh6(A) {
  let B = new qh6.Readable();
  return (B.push(A), B.push(null), B);
}
function Oh6(A, B) {
  return new (new URL(A).protocol === 'http:' ? YB2.Agent : WB2.Agent)(B);
}
JB2.createHttpAgent = Oh6;

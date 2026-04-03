// Module: Ft
// Params: KY2

Object.defineProperty(KY2, '__esModule', { value: !0 });
KY2.createOtlpGrpcExporterTransport =
  KY2.GrpcExporterTransport =
  KY2.createEmptyMetadata =
  KY2.createSslCredentials =
  KY2.createInsecureCredentials =
    void 0;
var wo6 = 0,
  Eo6 = 2;
function Uo6(A) {
  return A === 'gzip' ? Eo6 : wo6;
}
function No6() {
  let { credentials: A } = Wt();
  return A.createInsecure();
}
KY2.createInsecureCredentials = No6;
function $o6(A, B, Q) {
  let { credentials: I } = Wt();
  return I.createSsl(A, B, Q);
}
KY2.createSslCredentials = $o6;
function qo6() {
  let { Metadata: A } = Wt();
  return new A();
}
KY2.createEmptyMetadata = qo6;
class Pa1 {
  _parameters;
  _client;
  _metadata;
  constructor(A) {
    this._parameters = A;
  }
  shutdown() {
    this._client?.close();
  }
  send(A, B) {
    let Q = Buffer.from(A);
    if (this._client == null) {
      let { createServiceClientConstructor: I } = VY2();
      try {
        this._metadata = this._parameters.metadata();
      } catch (D) {
        return Promise.resolve({ status: 'failure', error: D });
      }
      let G = I(this._parameters.grpcPath, this._parameters.grpcName);
      try {
        this._client = new G(this._parameters.address, this._parameters.credentials(), {
          'grpc.default_compression_algorithm': Uo6(this._parameters.compression),
        });
      } catch (D) {
        return Promise.resolve({ status: 'failure', error: D });
      }
    }
    return new Promise((I) => {
      let G = Date.now() + B;
      if (this._metadata == null)
        return I({ error: new Error('metadata was null'), status: 'failure' });
      this._client.export(Q, this._metadata, { deadline: G }, (D, Z) => {
        if (D) I({ status: 'failure', error: D });
        else I({ data: Z, status: 'success' });
      });
    });
  }
}
KY2.GrpcExporterTransport = Pa1;
function Mo6(A) {
  return new Pa1(A);
}
KY2.createOtlpGrpcExporterTransport = Mo6;

// Module: Ch1
// Params: aT0

Object.defineProperty(aT0, '__esModule', { value: !0 });
aT0.IdentityPoolClient = void 0;
var D96 = qL(),
  Fh1 = NL(),
  Z96 = pT0(),
  Y96 = nT0();
class Jh1 extends D96.BaseExternalAccountClient {
  constructor(A, B) {
    super(A, B);
    let Q = Fh1.originalOrCamelOptions(A),
      I = Q.get('credential_source'),
      G = Q.get('subject_token_supplier');
    if (!I && !G)
      throw new Error('A credential source or subject token supplier must be specified.');
    if (I && G)
      throw new Error('Only one of credential source or subject token supplier can be specified.');
    if (G) ((this.subjectTokenSupplier = G), (this.credentialSourceType = 'programmatic'));
    else {
      let D = Fh1.originalOrCamelOptions(I),
        Z = Fh1.originalOrCamelOptions(D.get('format')),
        Y = Z.get('type') || 'text',
        W = Z.get('subject_token_field_name');
      if (Y !== 'json' && Y !== 'text') throw new Error(`Invalid credential_source format "${Y}"`);
      if (Y === 'json' && !W)
        throw new Error('Missing subject_token_field_name for JSON credential_source format');
      let F = D.get('file'),
        J = D.get('url'),
        C = D.get('headers');
      if (F && J)
        throw new Error(
          'No valid Identity Pool "credential_source" provided, must be either file or url.'
        );
      else if (F && !J)
        ((this.credentialSourceType = 'file'),
          (this.subjectTokenSupplier = new Z96.FileSubjectTokenSupplier({
            filePath: F,
            formatType: Y,
            subjectTokenFieldName: W,
          })));
      else if (!F && J)
        ((this.credentialSourceType = 'url'),
          (this.subjectTokenSupplier = new Y96.UrlSubjectTokenSupplier({
            url: J,
            formatType: Y,
            subjectTokenFieldName: W,
            headers: C,
            additionalGaxiosOptions: Jh1.RETRY_CONFIG,
          })));
      else
        throw new Error(
          'No valid Identity Pool "credential_source" provided, must be either file or url.'
        );
    }
  }
  async retrieveSubjectToken() {
    return this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
  }
}
aT0.IdentityPoolClient = Jh1;

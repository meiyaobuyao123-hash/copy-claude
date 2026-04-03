// Module: nT0
// Params: lT0

Object.defineProperty(lT0, '__esModule', { value: !0 });
lT0.UrlSubjectTokenSupplier = void 0;
class cT0 {
  constructor(A) {
    ((this.url = A.url),
      (this.formatType = A.formatType),
      (this.subjectTokenFieldName = A.subjectTokenFieldName),
      (this.headers = A.headers),
      (this.additionalGaxiosOptions = A.additionalGaxiosOptions));
  }
  async getSubjectToken(A) {
    let B = {
        ...this.additionalGaxiosOptions,
        url: this.url,
        method: 'GET',
        headers: this.headers,
        responseType: this.formatType,
      },
      Q;
    if (this.formatType === 'text') Q = (await A.transporter.request(B)).data;
    else if (this.formatType === 'json' && this.subjectTokenFieldName)
      Q = (await A.transporter.request(B)).data[this.subjectTokenFieldName];
    if (!Q) throw new Error('Unable to parse the subject_token from the credential_source URL');
    return Q;
  }
}
lT0.UrlSubjectTokenSupplier = cT0;

// Module: pT0
// Params: dT0

var Gh1, Dh1, Zh1;
Object.defineProperty(dT0, '__esModule', { value: !0 });
dT0.FileSubjectTokenSupplier = void 0;
var Yh1 = D1('util'),
  Wh1 = D1('fs'),
  Q96 = Yh1.promisify((Gh1 = Wh1.readFile) !== null && Gh1 !== void 0 ? Gh1 : () => {}),
  I96 = Yh1.promisify((Dh1 = Wh1.realpath) !== null && Dh1 !== void 0 ? Dh1 : () => {}),
  G96 = Yh1.promisify((Zh1 = Wh1.lstat) !== null && Zh1 !== void 0 ? Zh1 : () => {});
class mT0 {
  constructor(A) {
    ((this.filePath = A.filePath),
      (this.formatType = A.formatType),
      (this.subjectTokenFieldName = A.subjectTokenFieldName));
  }
  async getSubjectToken(A) {
    let B = this.filePath;
    try {
      if (((B = await I96(B)), !(await G96(B)).isFile())) throw new Error();
    } catch (G) {
      if (G instanceof Error)
        G.message = `The file at ${B} does not exist, or it is not a file. ${G.message}`;
      throw G;
    }
    let Q,
      I = await Q96(B, { encoding: 'utf8' });
    if (this.formatType === 'text') Q = I;
    else if (this.formatType === 'json' && this.subjectTokenFieldName)
      Q = JSON.parse(I)[this.subjectTokenFieldName];
    if (!Q) throw new Error('Unable to parse the subject_token from the credential_source file');
    return Q;
  }
}
dT0.FileSubjectTokenSupplier = mT0;

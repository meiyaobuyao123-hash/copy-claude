// Module: k22
// Params: j22

Object.defineProperty(j22, '__esModule', { value: !0 });
j22.envDetector = void 0;
var ax6 = C4(),
  sx6 = wN(),
  S22 = CD();
class _22 {
  _MAX_LENGTH = 255;
  _COMMA_SEPARATOR = ',';
  _LABEL_KEY_VALUE_SPLITTER = '=';
  _ERROR_MESSAGE_INVALID_CHARS =
    'should be a ASCII string with a length greater than 0 and not exceed ' +
    this._MAX_LENGTH +
    ' characters.';
  _ERROR_MESSAGE_INVALID_VALUE =
    'should be a ASCII string with a length not exceed ' + this._MAX_LENGTH + ' characters.';
  detect(A) {
    let B = {},
      Q = S22.getStringFromEnv('OTEL_RESOURCE_ATTRIBUTES'),
      I = S22.getStringFromEnv('OTEL_SERVICE_NAME');
    if (Q)
      try {
        let G = this._parseResourceAttributes(Q);
        Object.assign(B, G);
      } catch (G) {
        ax6.diag.debug(`EnvDetector failed: ${G.message}`);
      }
    if (I) B[sx6.SEMRESATTRS_SERVICE_NAME] = I;
    return { attributes: B };
  }
  _parseResourceAttributes(A) {
    if (!A) return {};
    let B = {},
      Q = A.split(this._COMMA_SEPARATOR, -1);
    for (let I of Q) {
      let G = I.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
      if (G.length !== 2) continue;
      let [D, Z] = G;
      if (((D = D.trim()), (Z = Z.trim().split(/^"|"$/).join('')), !this._isValidAndNotEmpty(D)))
        throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
      if (!this._isValid(Z))
        throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
      B[D] = decodeURIComponent(Z);
    }
    return B;
  }
  _isValid(A) {
    return A.length <= this._MAX_LENGTH && this._isBaggageOctetString(A);
  }
  _isBaggageOctetString(A) {
    for (let B = 0; B < A.length; B++) {
      let Q = A.charCodeAt(B);
      if (Q < 33 || Q === 44 || Q === 59 || Q === 92 || Q > 126) return !1;
    }
    return !0;
  }
  _isValidAndNotEmpty(A) {
    return A.length > 0 && this._isValid(A);
  }
}
j22.envDetector = new _22();

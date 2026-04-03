// Module: Xv0
// Params: VK8,Cv0

var { webidl: JF } = WG(),
  OW1 = Symbol('ProgressEvent state');
class Gr extends Event {
  constructor(A, B = {}) {
    ((A = JF.converters.DOMString(A, 'ProgressEvent constructor', 'type')),
      (B = JF.converters.ProgressEventInit(B ?? {})));
    super(A, B);
    this[OW1] = { lengthComputable: B.lengthComputable, loaded: B.loaded, total: B.total };
  }
  get lengthComputable() {
    return (JF.brandCheck(this, Gr), this[OW1].lengthComputable);
  }
  get loaded() {
    return (JF.brandCheck(this, Gr), this[OW1].loaded);
  }
  get total() {
    return (JF.brandCheck(this, Gr), this[OW1].total);
  }
}
JF.converters.ProgressEventInit = JF.dictionaryConverter([
  { key: 'lengthComputable', converter: JF.converters.boolean, defaultValue: () => !1 },
  { key: 'loaded', converter: JF.converters['unsigned long long'], defaultValue: () => 0 },
  { key: 'total', converter: JF.converters['unsigned long long'], defaultValue: () => 0 },
  { key: 'bubbles', converter: JF.converters.boolean, defaultValue: () => !1 },
  { key: 'cancelable', converter: JF.converters.boolean, defaultValue: () => !1 },
  { key: 'composed', converter: JF.converters.boolean, defaultValue: () => !1 },
]);
Cv0.exports = { ProgressEvent: Gr };

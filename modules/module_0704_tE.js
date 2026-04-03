// Module: tE
// Params: RSA

Object.defineProperty(RSA, '__esModule', { value: !0 });
RSA._setObjectInStorage = RSA._getObjectFromStorage = RSA.Storage = void 0;
var Zg9 = pG(),
  Yg9 = nT(),
  Ql = {},
  DR1 = {
    isReady: () => !0,
    isReadyResolver: () => null,
    getProviderName: () => 'InMemory',
    getItem: (A) => (Ql[A] ? Ql[A] : null),
    setItem: (A, B) => {
      Ql[A] = B;
    },
    removeItem: (A) => {
      delete Ql[A];
    },
    getAllKeys: () => Object.keys(Ql),
  },
  w61 = null;
try {
  let A = Yg9._getWindowSafe();
  if (A && A.localStorage && typeof A.localStorage.getItem === 'function')
    w61 = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => 'LocalStorage',
      getItem: (B) => A.localStorage.getItem(B),
      setItem: (B, Q) => A.localStorage.setItem(B, Q),
      removeItem: (B) => A.localStorage.removeItem(B),
      getAllKeys: () => Object.keys(A.localStorage),
    };
} catch (A) {
  Zg9.Log.warn('Failed to setup localStorageProvider.');
}
var GR1 = w61 !== null && w61 !== void 0 ? w61 : DR1,
  jH = GR1;
function Wg9(A) {
  try {
    return A();
  } catch (B) {
    if (B instanceof Error && B.name === 'SecurityError')
      return (RSA.Storage._setProvider(DR1), null);
    throw B;
  }
}
RSA.Storage = {
  isReady: () => jH.isReady(),
  isReadyResolver: () => jH.isReadyResolver(),
  getProviderName: () => jH.getProviderName(),
  getItem: (A) => Wg9(() => jH.getItem(A)),
  setItem: (A, B) => jH.setItem(A, B),
  removeItem: (A) => jH.removeItem(A),
  getAllKeys: () => jH.getAllKeys(),
  _setProvider: (A) => {
    ((GR1 = A), (jH = A));
  },
  _setDisabled: (A) => {
    if (A) jH = DR1;
    else jH = GR1;
  },
};
function Fg9(A) {
  let B = RSA.Storage.getItem(A);
  return JSON.parse(B !== null && B !== void 0 ? B : 'null');
}
RSA._getObjectFromStorage = Fg9;
function Jg9(A, B) {
  RSA.Storage.setItem(A, JSON.stringify(B));
}
RSA._setObjectInStorage = Jg9;

// Module: UK1
// Params: gs8,fw2

var to1 = [],
  xw2 = 0,
  MD = (A, B) => {
    if (xw2 >= B) to1.push(A);
  };
MD.WARN = 1;
MD.INFO = 2;
MD.DEBUG = 3;
MD.reset = () => {
  to1 = [];
};
MD.setDebugLevel = (A) => {
  xw2 = A;
};
MD.warn = (A) => MD(A, MD.WARN);
MD.info = (A) => MD(A, MD.INFO);
MD.debug = (A) => MD(A, MD.DEBUG);
MD.debugMessages = () => to1;
fw2.exports = MD;

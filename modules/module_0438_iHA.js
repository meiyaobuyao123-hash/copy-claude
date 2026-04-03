// Module: iHA
// Params: lHA,c91

lHA.formatArgs = tq9;
lHA.save = eq9;
lHA.load = AM9;
lHA.useColors = oq9;
lHA.storage = BM9();
lHA.destroy = (() => {
  let A = !1;
  return () => {
    if (!A)
      ((A = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
  };
})();
lHA.colors = [
  '#0000CC',
  '#0000FF',
  '#0033CC',
  '#0033FF',
  '#0066CC',
  '#0066FF',
  '#0099CC',
  '#0099FF',
  '#00CC00',
  '#00CC33',
  '#00CC66',
  '#00CC99',
  '#00CCCC',
  '#00CCFF',
  '#3300CC',
  '#3300FF',
  '#3333CC',
  '#3333FF',
  '#3366CC',
  '#3366FF',
  '#3399CC',
  '#3399FF',
  '#33CC00',
  '#33CC33',
  '#33CC66',
  '#33CC99',
  '#33CCCC',
  '#33CCFF',
  '#6600CC',
  '#6600FF',
  '#6633CC',
  '#6633FF',
  '#66CC00',
  '#66CC33',
  '#9900CC',
  '#9900FF',
  '#9933CC',
  '#9933FF',
  '#99CC00',
  '#99CC33',
  '#CC0000',
  '#CC0033',
  '#CC0066',
  '#CC0099',
  '#CC00CC',
  '#CC00FF',
  '#CC3300',
  '#CC3333',
  '#CC3366',
  '#CC3399',
  '#CC33CC',
  '#CC33FF',
  '#CC6600',
  '#CC6633',
  '#CC9900',
  '#CC9933',
  '#CCCC00',
  '#CCCC33',
  '#FF0000',
  '#FF0033',
  '#FF0066',
  '#FF0099',
  '#FF00CC',
  '#FF00FF',
  '#FF3300',
  '#FF3333',
  '#FF3366',
  '#FF3399',
  '#FF33CC',
  '#FF33FF',
  '#FF6600',
  '#FF6633',
  '#FF9900',
  '#FF9933',
  '#FFCC00',
  '#FFCC33',
];
function oq9() {
  if (
    typeof window !== 'undefined' &&
    window.process &&
    (window.process.type === 'renderer' || window.process.__nwjs)
  )
    return !0;
  if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
  )
    return !1;
  let A;
  return (
    (typeof document !== 'undefined' &&
      document.documentElement &&
      document.documentElement.style &&
      document.documentElement.style.WebkitAppearance) ||
    (typeof window !== 'undefined' &&
      window.console &&
      (window.console.firebug || (window.console.exception && window.console.table))) ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent &&
      (A = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
      parseInt(A[1], 10) >= 31) ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
  );
}
function tq9(A) {
  if (
    ((A[0] =
      (this.useColors ? '%c' : '') +
      this.namespace +
      (this.useColors ? ' %c' : ' ') +
      A[0] +
      (this.useColors ? '%c ' : ' ') +
      '+' +
      c91.exports.humanize(this.diff)),
    !this.useColors)
  )
    return;
  let B = 'color: ' + this.color;
  A.splice(1, 0, B, 'color: inherit');
  let Q = 0,
    I = 0;
  (A[0].replace(/%[a-zA-Z%]/g, (G) => {
    if (G === '%%') return;
    if ((Q++, G === '%c')) I = Q;
  }),
    A.splice(I, 0, B));
}
lHA.log = console.debug || console.log || (() => {});
function eq9(A) {
  try {
    if (A) lHA.storage.setItem('debug', A);
    else lHA.storage.removeItem('debug');
  } catch (B) {}
}
function AM9() {
  let A;
  try {
    A = lHA.storage.getItem('debug');
  } catch (B) {}
  if (!A && typeof process !== 'undefined' && 'env' in process) A = process.env.DEBUG;
  return A;
}
function BM9() {
  try {
    return localStorage;
  } catch (A) {}
}
c91.exports = jq1()(lHA);
var { formatters: QM9 } = c91.exports;
QM9.j = function (A) {
  try {
    return JSON.stringify(A);
  } catch (B) {
    return '[UnexpectedJSONParseError]: ' + B.message;
  }
};

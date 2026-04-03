// Module: Yw1
// Params: s1A

Object.defineProperty(s1A, '__esModule', { value: !0 });
function oO2(A) {
  if (!A) return {};
  let B = A.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!B) return {};
  let Q = B[6] || '',
    I = B[8] || '';
  return { host: B[4], path: B[5], protocol: B[2], search: Q, hash: I, relative: B[5] + Q + I };
}
function tO2(A) {
  return A.split(/[\?#]/, 1)[0];
}
function eO2(A) {
  return A.split(/\\?\//).filter((B) => B.length > 0 && B !== ',').length;
}
function AT2(A) {
  let { protocol: B, host: Q, path: I } = A,
    G =
      (Q &&
        Q.replace(/^.*@/, '[filtered]:[filtered]@')
          .replace(/(:80)$/, '')
          .replace(/(:443)$/, '')) ||
      '';
  return `${B ? `${B}://` : ''}${G}${I}`;
}
s1A.getNumberOfUrlSegments = eO2;
s1A.getSanitizedUrlString = AT2;
s1A.parseUrl = oO2;
s1A.stripUrlQueryAndFragment = tO2;

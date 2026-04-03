// Module: HPA
// Params: Rv9

var Nv9 = D1('url').parse,
  $v9 = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 },
  qv9 =
    String.prototype.endsWith ||
    function (A) {
      return A.length <= this.length && this.indexOf(A, this.length - A.length) !== -1;
    };
function Mv9(A) {
  var B = typeof A === 'string' ? Nv9(A) : A || {},
    Q = B.protocol,
    I = B.host,
    G = B.port;
  if (typeof I !== 'string' || !I || typeof Q !== 'string') return '';
  if (
    ((Q = Q.split(':', 1)[0]),
    (I = I.replace(/:\d*$/, '')),
    (G = parseInt(G) || $v9[Q] || 0),
    !Lv9(I, G))
  )
    return '';
  var D =
    sx('npm_config_' + Q + '_proxy') ||
    sx(Q + '_proxy') ||
    sx('npm_config_proxy') ||
    sx('all_proxy');
  if (D && D.indexOf('://') === -1) D = Q + '://' + D;
  return D;
}
function Lv9(A, B) {
  var Q = (sx('npm_config_no_proxy') || sx('no_proxy')).toLowerCase();
  if (!Q) return !0;
  if (Q === '*') return !1;
  return Q.split(/[,\s]/).every(function (I) {
    if (!I) return !0;
    var G = I.match(/^(.+):(\d+)$/),
      D = G ? G[1] : I,
      Z = G ? parseInt(G[2]) : 0;
    if (Z && Z !== B) return !0;
    if (!/^[.*]/.test(D)) return A !== D;
    if (D.charAt(0) === '*') D = D.slice(1);
    return !qv9.call(A, D);
  });
}
function sx(A) {
  return process.env[A.toLowerCase()] || process.env[A.toUpperCase()] || '';
}
Rv9.getProxyForUrl = Mv9;

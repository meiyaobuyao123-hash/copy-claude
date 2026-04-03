// Module: _Z0
// Params: $G8,$b

var PZ0 = D1('child_process'),
  vx1 = LZ0(),
  bx1 = TZ0();
function SZ0(A, B, Q) {
  let I = vx1(A, B, Q),
    G = PZ0.spawn(I.command, I.args, I.options);
  return (bx1.hookChildProcess(G, I), G);
}
function U_4(A, B, Q) {
  let I = vx1(A, B, Q),
    G = PZ0.spawnSync(I.command, I.args, I.options);
  return ((G.error = G.error || bx1.verifyENOENTSync(G.status, I)), G);
}
$b.exports = SZ0;
$b.exports.spawn = SZ0;
$b.exports.sync = U_4;
$b.exports._parse = vx1;
$b.exports._enoent = bx1;

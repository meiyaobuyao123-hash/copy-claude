// Module: IU1
// Params: KBA

Object.defineProperty(KBA, '__esModule', { value: !0 });
var XBA = D1('path'),
  Go2 = tA();
function VBA(A) {
  return A.replace(/^[A-Z]:/, '').replace(/\\/g, '/');
}
function Do2(
  A = process.argv[1] ? Go2.dirname(process.argv[1]) : process.cwd(),
  B = XBA.sep === '\\'
) {
  let Q = B ? VBA(A) : A;
  return (I) => {
    if (!I) return;
    let G = B ? VBA(I) : I,
      { dir: D, base: Z, ext: Y } = XBA.posix.parse(G);
    if (Y === '.js' || Y === '.mjs' || Y === '.cjs') Z = Z.slice(0, Y.length * -1);
    if (!D) D = '.';
    let W = D.lastIndexOf('/node_modules');
    if (W > -1) return `${D.slice(W + 14).replace(/\//g, '.')}:${Z}`;
    if (D.startsWith(Q)) {
      let F = D.slice(Q.length + 1).replace(/\//g, '.');
      if (F) F += ':';
      return ((F += Z), F);
    }
    return Z;
  };
}
KBA.createGetModuleFromFilename = Do2;

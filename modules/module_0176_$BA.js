// Module: $BA
// Params: NBA

Object.defineProperty(NBA, '__esModule', { value: !0 });
var u01 = D1('fs'),
  DU1 = D1('path');
function yo2(A) {
  let B = DU1.resolve(A);
  if (!u01.existsSync(B))
    throw new Error(`Cannot read contents of ${B}. Directory does not exist.`);
  if (!u01.statSync(B).isDirectory())
    throw new Error(`Cannot read contents of ${B}, because it is not a directory.`);
  let Q = (I) => {
    return u01.readdirSync(I).reduce((G, D) => {
      let Z = DU1.join(I, D);
      if (u01.statSync(Z).isDirectory()) return G.concat(Q(Z));
      return (G.push(Z), G);
    }, []);
  };
  return Q(B).map((I) => DU1.relative(B, I));
}
NBA.deepReadDirSync = yo2;

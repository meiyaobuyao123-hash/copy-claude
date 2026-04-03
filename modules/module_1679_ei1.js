// Module: ei1
// Params: WT8,ZI2

ZI2.exports = Ql6;
var Bl6 = lV(),
  Gn1 = k_(),
  Dn1 = VI();
function DI2(A, B, Q, I) {
  return B.resolvedType.group
    ? A(
        'types[%i].encode(%s,w.uint32(%i)).uint32(%i)',
        Q,
        I,
        ((B.id << 3) | 3) >>> 0,
        ((B.id << 3) | 4) >>> 0
      )
    : A('types[%i].encode(%s,w.uint32(%i).fork()).ldelim()', Q, I, ((B.id << 3) | 2) >>> 0);
}
function Ql6(A) {
  var B = Dn1.codegen(['m', 'w'], A.name + '$encode')('if(!w)')('w=Writer.create()'),
    Q,
    I,
    G = A.fieldsArray.slice().sort(Dn1.compareFieldsById);
  for (var Q = 0; Q < G.length; ++Q) {
    var D = G[Q].resolve(),
      Z = A._fieldsArray.indexOf(D),
      Y = D.resolvedType instanceof Bl6 ? 'int32' : D.type,
      W = Gn1.basic[Y];
    if (((I = 'm' + Dn1.safeProp(D.name)), D.map)) {
      if (
        (B(
          'if(%s!=null&&Object.hasOwnProperty.call(m,%j)){',
          I,
          D.name
        )('for(var ks=Object.keys(%s),i=0;i<ks.length;++i){', I)(
          'w.uint32(%i).fork().uint32(%i).%s(ks[i])',
          ((D.id << 3) | 2) >>> 0,
          8 | Gn1.mapKey[D.keyType],
          D.keyType
        ),
        W === void 0)
      )
        B('types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()', Z, I);
      else B('.uint32(%i).%s(%s[ks[i]]).ldelim()', 16 | W, Y, I);
      B('}')('}');
    } else if (D.repeated) {
      if ((B('if(%s!=null&&%s.length){', I, I), D.packed && Gn1.packed[Y] !== void 0))
        B('w.uint32(%i).fork()', ((D.id << 3) | 2) >>> 0)('for(var i=0;i<%s.length;++i)', I)(
          'w.%s(%s[i])',
          Y,
          I
        )('w.ldelim()');
      else if ((B('for(var i=0;i<%s.length;++i)', I), W === void 0)) DI2(B, D, Z, I + '[i]');
      else B('w.uint32(%i).%s(%s[i])', ((D.id << 3) | W) >>> 0, Y, I);
      B('}');
    } else {
      if (D.optional) B('if(%s!=null&&Object.hasOwnProperty.call(m,%j))', I, D.name);
      if (W === void 0) DI2(B, D, Z, I);
      else B('w.uint32(%i).%s(%s)', ((D.id << 3) | W) >>> 0, Y, I);
    }
  }
  return B('return w');
}

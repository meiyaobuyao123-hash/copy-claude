// Module: ui1
// Params: eO8,d72

d72.exports = vc6;
var xc6 = lV(),
  qN = k_(),
  m72 = VI();
function fc6(A) {
  return "missing required '" + A.name + "'";
}
function vc6(A) {
  var B = m72.codegen(['r', 'l'], A.name + '$decode')('if(!(r instanceof Reader))')(
    'r=Reader.create(r)'
  )(
    'var c=l===undefined?r.len:r.pos+l,m=new this.ctor' +
      (A.fieldsArray.filter(function (Y) {
        return Y.map;
      }).length
        ? ',k,value'
        : '')
  )('while(r.pos<c){')('var t=r.uint32()');
  if (A.group) B('if((t&7)===4)')('break');
  B('switch(t>>>3){');
  var Q = 0;
  for (; Q < A.fieldsArray.length; ++Q) {
    var I = A._fieldsArray[Q].resolve(),
      G = I.resolvedType instanceof xc6 ? 'int32' : I.type,
      D = 'm' + m72.safeProp(I.name);
    if ((B('case %i: {', I.id), I.map)) {
      if (
        (B('if(%s===util.emptyObject)', D)('%s={}', D)('var c2 = r.uint32()+r.pos'),
        qN.defaults[I.keyType] !== void 0)
      )
        B('k=%j', qN.defaults[I.keyType]);
      else B('k=null');
      if (qN.defaults[G] !== void 0) B('value=%j', qN.defaults[G]);
      else B('value=null');
      if (
        (B('while(r.pos<c2){')('var tag2=r.uint32()')('switch(tag2>>>3){')(
          'case 1: k=r.%s(); break',
          I.keyType
        )('case 2:'),
        qN.basic[G] === void 0)
      )
        B('value=types[%i].decode(r,r.uint32())', Q);
      else B('value=r.%s()', G);
      if (
        (B('break')('default:')('r.skipType(tag2&7)')('break')('}')('}'),
        qN.long[I.keyType] !== void 0)
      )
        B('%s[typeof k==="object"?util.longToHash(k):k]=value', D);
      else B('%s[k]=value', D);
    } else if (I.repeated) {
      if ((B('if(!(%s&&%s.length))', D, D)('%s=[]', D), qN.packed[G] !== void 0))
        B('if((t&7)===2){')('var c2=r.uint32()+r.pos')('while(r.pos<c2)')('%s.push(r.%s())', D, G)(
          '}else'
        );
      if (qN.basic[G] === void 0)
        B(
          I.resolvedType.group
            ? '%s.push(types[%i].decode(r))'
            : '%s.push(types[%i].decode(r,r.uint32()))',
          D,
          Q
        );
      else B('%s.push(r.%s())', D, G);
    } else if (qN.basic[G] === void 0)
      B(
        I.resolvedType.group ? '%s=types[%i].decode(r)' : '%s=types[%i].decode(r,r.uint32())',
        D,
        Q
      );
    else B('%s=r.%s()', D, G);
    B('break')('}');
  }
  B('default:')('r.skipType(t&7)')('break')('}')('}');
  for (Q = 0; Q < A._fieldsArray.length; ++Q) {
    var Z = A._fieldsArray[Q];
    if (Z.required)
      B('if(!m.hasOwnProperty(%j))', Z.name)('throw util.ProtocolError(%j,{instance:m})', fc6(Z));
  }
  return B('return m');
}

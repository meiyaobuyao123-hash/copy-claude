// Module: ai1
// Params: c72

var p72 = c72,
  co = lV(),
  Zw = VI();
function ii1(A, B, Q, I) {
  var G = !1;
  if (B.resolvedType)
    if (B.resolvedType instanceof co) {
      A('switch(d%s){', I);
      for (var D = B.resolvedType.values, Z = Object.keys(D), Y = 0; Y < Z.length; ++Y) {
        if (D[Z[Y]] === B.typeDefault && !G) {
          if ((A('default:')('if(typeof(d%s)==="number"){m%s=d%s;break}', I, I, I), !B.repeated))
            A('break');
          G = !0;
        }
        A('case%j:', Z[Y])('case %i:', D[Z[Y]])('m%s=%j', I, D[Z[Y]])('break');
      }
      A('}');
    } else
      A('if(typeof d%s!=="object")', I)('throw TypeError(%j)', B.fullName + ': object expected')(
        'm%s=types[%i].fromObject(d%s)',
        I,
        Q,
        I
      );
  else {
    var W = !1;
    switch (B.type) {
      case 'double':
      case 'float':
        A('m%s=Number(d%s)', I, I);
        break;
      case 'uint32':
      case 'fixed32':
        A('m%s=d%s>>>0', I, I);
        break;
      case 'int32':
      case 'sint32':
      case 'sfixed32':
        A('m%s=d%s|0', I, I);
        break;
      case 'uint64':
        W = !0;
      case 'int64':
      case 'sint64':
      case 'fixed64':
      case 'sfixed64':
        A('if(util.Long)')('(m%s=util.Long.fromValue(d%s)).unsigned=%j', I, I, W)(
          'else if(typeof d%s==="string")',
          I
        )(
          'm%s=parseInt(d%s,10)',
          I,
          I
        )('else if(typeof d%s==="number")', I)(
          'm%s=d%s',
          I,
          I
        )('else if(typeof d%s==="object")', I)(
          'm%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)',
          I,
          I,
          I,
          W ? 'true' : ''
        );
        break;
      case 'bytes':
        A('if(typeof d%s==="string")', I)(
          'util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)',
          I,
          I,
          I
        )('else if(d%s.length >= 0)', I)('m%s=d%s', I, I);
        break;
      case 'string':
        A('m%s=String(d%s)', I, I);
        break;
      case 'bool':
        A('m%s=Boolean(d%s)', I, I);
        break;
    }
  }
  return A;
}
p72.fromObject = function A(B) {
  var Q = B.fieldsArray,
    I = Zw.codegen(['d'], B.name + '$fromObject')('if(d instanceof this.ctor)')('return d');
  if (!Q.length) return I('return new this.ctor');
  I('var m=new this.ctor');
  for (var G = 0; G < Q.length; ++G) {
    var D = Q[G].resolve(),
      Z = Zw.safeProp(D.name);
    if (D.map)
      (I('if(d%s){', Z)('if(typeof d%s!=="object")', Z)(
        'throw TypeError(%j)',
        D.fullName + ': object expected'
      )('m%s={}', Z)('for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){', Z),
        ii1(I, D, G, Z + '[ks[i]]')('}')('}'));
    else if (D.repeated)
      (I('if(d%s){', Z)('if(!Array.isArray(d%s))', Z)(
        'throw TypeError(%j)',
        D.fullName + ': array expected'
      )('m%s=[]', Z)('for(var i=0;i<d%s.length;++i){', Z),
        ii1(I, D, G, Z + '[i]')('}')('}'));
    else {
      if (!(D.resolvedType instanceof co)) I('if(d%s!=null){', Z);
      if ((ii1(I, D, G, Z), !(D.resolvedType instanceof co))) I('}');
    }
  }
  return I('return m');
};
function ni1(A, B, Q, I) {
  if (B.resolvedType)
    if (B.resolvedType instanceof co)
      A(
        'd%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s',
        I,
        Q,
        I,
        I,
        Q,
        I,
        I
      );
    else A('d%s=types[%i].toObject(m%s,o)', I, Q, I);
  else {
    var G = !1;
    switch (B.type) {
      case 'double':
      case 'float':
        A('d%s=o.json&&!isFinite(m%s)?String(m%s):m%s', I, I, I, I);
        break;
      case 'uint64':
        G = !0;
      case 'int64':
      case 'sint64':
      case 'fixed64':
      case 'sfixed64':
        A('if(typeof m%s==="number")', I)('d%s=o.longs===String?String(m%s):m%s', I, I, I)('else')(
          'd%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s',
          I,
          I,
          I,
          I,
          G ? 'true' : '',
          I
        );
        break;
      case 'bytes':
        A(
          'd%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s',
          I,
          I,
          I,
          I,
          I
        );
        break;
      default:
        A('d%s=m%s', I, I);
        break;
    }
  }
  return A;
}
p72.toObject = function A(B) {
  var Q = B.fieldsArray.slice().sort(Zw.compareFieldsById);
  if (!Q.length) return Zw.codegen()('return {}');
  var I = Zw.codegen(['m', 'o'], B.name + '$toObject')('if(!o)')('o={}')('var d={}'),
    G = [],
    D = [],
    Z = [],
    Y = 0;
  for (; Y < Q.length; ++Y)
    if (!Q[Y].partOf) (Q[Y].resolve().repeated ? G : Q[Y].map ? D : Z).push(Q[Y]);
  if (G.length) {
    I('if(o.arrays||o.defaults){');
    for (Y = 0; Y < G.length; ++Y) I('d%s=[]', Zw.safeProp(G[Y].name));
    I('}');
  }
  if (D.length) {
    I('if(o.objects||o.defaults){');
    for (Y = 0; Y < D.length; ++Y) I('d%s={}', Zw.safeProp(D[Y].name));
    I('}');
  }
  if (Z.length) {
    I('if(o.defaults){');
    for (Y = 0; Y < Z.length; ++Y) {
      var W = Z[Y],
        F = Zw.safeProp(W.name);
      if (W.resolvedType instanceof co)
        I('d%s=o.enums===String?%j:%j', F, W.resolvedType.valuesById[W.typeDefault], W.typeDefault);
      else if (W.long)
        I('if(util.Long){')(
          'var n=new util.Long(%i,%i,%j)',
          W.typeDefault.low,
          W.typeDefault.high,
          W.typeDefault.unsigned
        )(
          'd%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n',
          F
        )('}else')(
          'd%s=o.longs===String?%j:%i',
          F,
          W.typeDefault.toString(),
          W.typeDefault.toNumber()
        );
      else if (W.bytes) {
        var J = '[' + Array.prototype.slice.call(W.typeDefault).join(',') + ']';
        I(
          'if(o.bytes===String)d%s=%j',
          F,
          String.fromCharCode.apply(String, W.typeDefault)
        )('else{')('d%s=%s', F, J)(
          'if(o.bytes!==Array)d%s=util.newBuffer(d%s)',
          F,
          F
        )('}');
      } else I('d%s=%j', F, W.typeDefault);
    }
    I('}');
  }
  var C = !1;
  for (Y = 0; Y < Q.length; ++Y) {
    var W = Q[Y],
      X = B._fieldsArray.indexOf(W),
      F = Zw.safeProp(W.name);
    if (W.map) {
      if (!C) ((C = !0), I('var ks2'));
      (I('if(m%s&&(ks2=Object.keys(m%s)).length){', F, F)('d%s={}', F)(
        'for(var j=0;j<ks2.length;++j){'
      ),
        ni1(I, W, X, F + '[ks2[j]]')('}'));
    } else if (W.repeated)
      (I('if(m%s&&m%s.length){', F, F)('d%s=[]', F)('for(var j=0;j<m%s.length;++j){', F),
        ni1(I, W, X, F + '[j]')('}'));
    else if ((I('if(m%s!=null&&m.hasOwnProperty(%j)){', F, W.name), ni1(I, W, X, F), W.partOf))
      I('if(o.oneofs)')('d%s=%j', Zw.safeProp(W.partOf.name), W.name);
    I('}');
  }
  return I('return d');
};

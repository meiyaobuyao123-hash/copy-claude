// Module: li1
// Params: AT8,u72

u72.exports = hc6;
var bc6 = lV(),
  pi1 = VI();
function OC(A, B) {
  return (
    A.name +
    ': ' +
    B +
    (A.repeated && B !== 'array' ? '[]' : A.map && B !== 'object' ? '{k:' + A.keyType + '}' : '') +
    ' expected'
  );
}
function ci1(A, B, Q, I) {
  if (B.resolvedType)
    if (B.resolvedType instanceof bc6) {
      A('switch(%s){', I)('default:')('return%j', OC(B, 'enum value'));
      for (var G = Object.keys(B.resolvedType.values), D = 0; D < G.length; ++D)
        A('case %i:', B.resolvedType.values[G[D]]);
      A('break')('}');
    } else A('{')('var e=types[%i].verify(%s);', Q, I)('if(e)')('return%j+e', B.name + '.')('}');
  else
    switch (B.type) {
      case 'int32':
      case 'uint32':
      case 'sint32':
      case 'fixed32':
      case 'sfixed32':
        A('if(!util.isInteger(%s))', I)('return%j', OC(B, 'integer'));
        break;
      case 'int64':
      case 'uint64':
      case 'sint64':
      case 'fixed64':
      case 'sfixed64':
        A(
          'if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))',
          I,
          I,
          I,
          I
        )('return%j', OC(B, 'integer|Long'));
        break;
      case 'float':
      case 'double':
        A('if(typeof %s!=="number")', I)('return%j', OC(B, 'number'));
        break;
      case 'bool':
        A('if(typeof %s!=="boolean")', I)('return%j', OC(B, 'boolean'));
        break;
      case 'string':
        A('if(!util.isString(%s))', I)('return%j', OC(B, 'string'));
        break;
      case 'bytes':
        A(
          'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
          I,
          I,
          I
        )('return%j', OC(B, 'buffer'));
        break;
    }
  return A;
}
function gc6(A, B, Q) {
  switch (B.keyType) {
    case 'int32':
    case 'uint32':
    case 'sint32':
    case 'fixed32':
    case 'sfixed32':
      A('if(!util.key32Re.test(%s))', Q)('return%j', OC(B, 'integer key'));
      break;
    case 'int64':
    case 'uint64':
    case 'sint64':
    case 'fixed64':
    case 'sfixed64':
      A('if(!util.key64Re.test(%s))', Q)('return%j', OC(B, 'integer|Long key'));
      break;
    case 'bool':
      A('if(!util.key2Re.test(%s))', Q)('return%j', OC(B, 'boolean key'));
      break;
  }
  return A;
}
function hc6(A) {
  var B = pi1.codegen(['m'], A.name + '$verify')('if(typeof m!=="object"||m===null)')(
      'return%j',
      'object expected'
    ),
    Q = A.oneofsArray,
    I = {};
  if (Q.length) B('var p={}');
  for (var G = 0; G < A.fieldsArray.length; ++G) {
    var D = A._fieldsArray[G].resolve(),
      Z = 'm' + pi1.safeProp(D.name);
    if (D.optional) B('if(%s!=null&&m.hasOwnProperty(%j)){', Z, D.name);
    if (D.map)
      (B('if(!util.isObject(%s))', Z)('return%j', OC(D, 'object'))('var k=Object.keys(%s)', Z)(
        'for(var i=0;i<k.length;++i){'
      ),
        gc6(B, D, 'k[i]'),
        ci1(B, D, G, Z + '[k[i]]')('}'));
    else if (D.repeated)
      (B('if(!Array.isArray(%s))', Z)('return%j', OC(D, 'array'))(
        'for(var i=0;i<%s.length;++i){',
        Z
      ),
        ci1(B, D, G, Z + '[i]')('}'));
    else {
      if (D.partOf) {
        var Y = pi1.safeProp(D.partOf.name);
        if (I[D.partOf.name] === 1)
          B('if(p%s===1)', Y)('return%j', D.partOf.name + ': multiple values');
        ((I[D.partOf.name] = 1), B('p%s=1', Y));
      }
      ci1(B, D, G, Z);
    }
    if (D.optional) B('}');
  }
  return B('return null');
}

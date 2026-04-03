// Module: OI2
// Params: G6,RI2

var HZ = PC1();
RI2.exports = G6 = HZ.descriptor = HZ.Root.fromJSON(Jn1()).lookup('.google.protobuf');
var {
  Namespace: qI2,
  Root: io,
  Enum: LN,
  Type: LR,
  Field: RR,
  MapField: Pl6,
  OneOf: SC1,
  Service: no,
  Method: _C1,
} = HZ;
io.fromDescriptor = function A(B) {
  if (typeof B.length === 'number') B = G6.FileDescriptorSet.decode(B);
  var Q = new io();
  if (B.file) {
    var I, G;
    for (var D = 0, Z; D < B.file.length; ++D) {
      if (((G = Q), (I = B.file[D]).package && I.package.length)) G = Q.define(I.package);
      if (I.name && I.name.length) Q.files.push((G.filename = I.name));
      if (I.messageType)
        for (Z = 0; Z < I.messageType.length; ++Z)
          G.add(LR.fromDescriptor(I.messageType[Z], I.syntax));
      if (I.enumType)
        for (Z = 0; Z < I.enumType.length; ++Z) G.add(LN.fromDescriptor(I.enumType[Z]));
      if (I.extension)
        for (Z = 0; Z < I.extension.length; ++Z) G.add(RR.fromDescriptor(I.extension[Z]));
      if (I.service) for (Z = 0; Z < I.service.length; ++Z) G.add(no.fromDescriptor(I.service[Z]));
      var Y = Mm(I.options, G6.FileOptions);
      if (Y) {
        var W = Object.keys(Y);
        for (Z = 0; Z < W.length; ++Z) G.setOption(W[Z], Y[W[Z]]);
      }
    }
  }
  return Q;
};
io.prototype.toDescriptor = function A(B) {
  var Q = G6.FileDescriptorSet.create();
  return (MI2(this, Q.file, B), Q);
};
function MI2(A, B, Q) {
  var I = G6.FileDescriptorProto.create({
    name: A.filename || (A.fullName.substring(1).replace(/\./g, '_') || 'root') + '.proto',
  });
  if (Q) I.syntax = Q;
  if (!(A instanceof io)) I.package = A.fullName.substring(1);
  for (var G = 0, D; G < A.nestedArray.length; ++G)
    if ((D = A._nestedArray[G]) instanceof LR) I.messageType.push(D.toDescriptor(Q));
    else if (D instanceof LN) I.enumType.push(D.toDescriptor());
    else if (D instanceof RR) I.extension.push(D.toDescriptor(Q));
    else if (D instanceof no) I.service.push(D.toDescriptor());
    else if (D instanceof qI2) MI2(D, B, Q);
  if (
    ((I.options = Lm(A.options, G6.FileOptions)),
    I.messageType.length + I.enumType.length + I.extension.length + I.service.length)
  )
    B.push(I);
}
var Sl6 = 0;
LR.fromDescriptor = function A(B, Q) {
  if (typeof B.length === 'number') B = G6.DescriptorProto.decode(B);
  var I = new LR(B.name.length ? B.name : 'Type' + Sl6++, Mm(B.options, G6.MessageOptions)),
    G;
  if (B.oneofDecl)
    for (G = 0; G < B.oneofDecl.length; ++G) I.add(SC1.fromDescriptor(B.oneofDecl[G]));
  if (B.field)
    for (G = 0; G < B.field.length; ++G) {
      var D = RR.fromDescriptor(B.field[G], Q);
      if ((I.add(D), B.field[G].hasOwnProperty('oneofIndex')))
        I.oneofsArray[B.field[G].oneofIndex].add(D);
    }
  if (B.extension)
    for (G = 0; G < B.extension.length; ++G) I.add(RR.fromDescriptor(B.extension[G], Q));
  if (B.nestedType) {
    for (G = 0; G < B.nestedType.length; ++G)
      if (
        (I.add(LR.fromDescriptor(B.nestedType[G], Q)),
        B.nestedType[G].options && B.nestedType[G].options.mapEntry)
      )
        I.setOption('map_entry', !0);
  }
  if (B.enumType) for (G = 0; G < B.enumType.length; ++G) I.add(LN.fromDescriptor(B.enumType[G]));
  if (B.extensionRange && B.extensionRange.length) {
    I.extensions = [];
    for (G = 0; G < B.extensionRange.length; ++G)
      I.extensions.push([B.extensionRange[G].start, B.extensionRange[G].end]);
  }
  if ((B.reservedRange && B.reservedRange.length) || (B.reservedName && B.reservedName.length)) {
    if (((I.reserved = []), B.reservedRange))
      for (G = 0; G < B.reservedRange.length; ++G)
        I.reserved.push([B.reservedRange[G].start, B.reservedRange[G].end]);
    if (B.reservedName)
      for (G = 0; G < B.reservedName.length; ++G) I.reserved.push(B.reservedName[G]);
  }
  return I;
};
LR.prototype.toDescriptor = function A(B) {
  var Q = G6.DescriptorProto.create({ name: this.name }),
    I;
  for (I = 0; I < this.fieldsArray.length; ++I) {
    var G;
    if (
      (Q.field.push((G = this._fieldsArray[I].toDescriptor(B))),
      this._fieldsArray[I] instanceof Pl6)
    ) {
      var D = Cn1(this._fieldsArray[I].keyType, this._fieldsArray[I].resolvedKeyType),
        Z = Cn1(this._fieldsArray[I].type, this._fieldsArray[I].resolvedType),
        Y =
          Z === 11 || Z === 14
            ? (this._fieldsArray[I].resolvedType &&
                LI2(this.parent, this._fieldsArray[I].resolvedType)) ||
              this._fieldsArray[I].type
            : void 0;
      Q.nestedType.push(
        G6.DescriptorProto.create({
          name: G.typeName,
          field: [
            G6.FieldDescriptorProto.create({ name: 'key', number: 1, label: 1, type: D }),
            G6.FieldDescriptorProto.create({
              name: 'value',
              number: 2,
              label: 1,
              type: Z,
              typeName: Y,
            }),
          ],
          options: G6.MessageOptions.create({ mapEntry: !0 }),
        })
      );
    }
  }
  for (I = 0; I < this.oneofsArray.length; ++I)
    Q.oneofDecl.push(this._oneofsArray[I].toDescriptor());
  for (I = 0; I < this.nestedArray.length; ++I)
    if (this._nestedArray[I] instanceof RR) Q.field.push(this._nestedArray[I].toDescriptor(B));
    else if (this._nestedArray[I] instanceof LR)
      Q.nestedType.push(this._nestedArray[I].toDescriptor(B));
    else if (this._nestedArray[I] instanceof LN)
      Q.enumType.push(this._nestedArray[I].toDescriptor());
  if (this.extensions)
    for (I = 0; I < this.extensions.length; ++I)
      Q.extensionRange.push(
        G6.DescriptorProto.ExtensionRange.create({
          start: this.extensions[I][0],
          end: this.extensions[I][1],
        })
      );
  if (this.reserved)
    for (I = 0; I < this.reserved.length; ++I)
      if (typeof this.reserved[I] === 'string') Q.reservedName.push(this.reserved[I]);
      else
        Q.reservedRange.push(
          G6.DescriptorProto.ReservedRange.create({
            start: this.reserved[I][0],
            end: this.reserved[I][1],
          })
        );
  return ((Q.options = Lm(this.options, G6.MessageOptions)), Q);
};
var _l6 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
RR.fromDescriptor = function A(B, Q) {
  if (typeof B.length === 'number') B = G6.DescriptorProto.decode(B);
  if (typeof B.number !== 'number') throw Error('missing field id');
  var I;
  if (B.typeName && B.typeName.length) I = B.typeName;
  else I = fl6(B.type);
  var G;
  switch (B.label) {
    case 1:
      G = void 0;
      break;
    case 2:
      G = 'required';
      break;
    case 3:
      G = 'repeated';
      break;
    default:
      throw Error('illegal label: ' + B.label);
  }
  var D = B.extendee;
  if (B.extendee !== void 0) D = D.length ? D : void 0;
  var Z = new RR(B.name.length ? B.name : 'field' + B.number, B.number, I, G, D);
  if (((Z.options = Mm(B.options, G6.FieldOptions)), B.defaultValue && B.defaultValue.length)) {
    var Y = B.defaultValue;
    switch (Y) {
      case 'true':
      case 'TRUE':
        Y = !0;
        break;
      case 'false':
      case 'FALSE':
        Y = !1;
        break;
      default:
        var W = _l6.exec(Y);
        if (W) Y = parseInt(Y);
        break;
    }
    Z.setOption('default', Y);
  }
  if (vl6(B.type)) {
    if (Q === 'proto3') {
      if (B.options && !B.options.packed) Z.setOption('packed', !1);
    } else if (!(B.options && B.options.packed)) Z.setOption('packed', !1);
  }
  return Z;
};
RR.prototype.toDescriptor = function A(B) {
  var Q = G6.FieldDescriptorProto.create({ name: this.name, number: this.id });
  if (this.map) ((Q.type = 11), (Q.typeName = HZ.util.ucFirst(this.name)), (Q.label = 3));
  else {
    switch ((Q.type = Cn1(this.type, this.resolve().resolvedType))) {
      case 10:
      case 11:
      case 14:
        Q.typeName = this.resolvedType ? LI2(this.parent, this.resolvedType) : this.type;
        break;
    }
    switch (this.rule) {
      case 'repeated':
        Q.label = 3;
        break;
      case 'required':
        Q.label = 2;
        break;
      default:
        Q.label = 1;
        break;
    }
  }
  if (
    ((Q.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend),
    this.partOf)
  ) {
    if ((Q.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
      throw Error('missing oneof');
  }
  if (this.options) {
    if (((Q.options = Lm(this.options, G6.FieldOptions)), this.options.default != null))
      Q.defaultValue = String(this.options.default);
  }
  if (B === 'proto3') {
    if (!this.packed) (Q.options || (Q.options = G6.FieldOptions.create())).packed = !1;
  } else if (this.packed) (Q.options || (Q.options = G6.FieldOptions.create())).packed = !0;
  return Q;
};
var jl6 = 0;
LN.fromDescriptor = function A(B) {
  if (typeof B.length === 'number') B = G6.EnumDescriptorProto.decode(B);
  var Q = {};
  if (B.value)
    for (var I = 0; I < B.value.length; ++I) {
      var G = B.value[I].name,
        D = B.value[I].number || 0;
      Q[G && G.length ? G : 'NAME' + D] = D;
    }
  return new LN(
    B.name && B.name.length ? B.name : 'Enum' + jl6++,
    Q,
    Mm(B.options, G6.EnumOptions)
  );
};
LN.prototype.toDescriptor = function A() {
  var B = [];
  for (var Q = 0, I = Object.keys(this.values); Q < I.length; ++Q)
    B.push(G6.EnumValueDescriptorProto.create({ name: I[Q], number: this.values[I[Q]] }));
  return G6.EnumDescriptorProto.create({
    name: this.name,
    value: B,
    options: Lm(this.options, G6.EnumOptions),
  });
};
var yl6 = 0;
SC1.fromDescriptor = function A(B) {
  if (typeof B.length === 'number') B = G6.OneofDescriptorProto.decode(B);
  return new SC1(B.name && B.name.length ? B.name : 'oneof' + yl6++);
};
SC1.prototype.toDescriptor = function A() {
  return G6.OneofDescriptorProto.create({ name: this.name });
};
var kl6 = 0;
no.fromDescriptor = function A(B) {
  if (typeof B.length === 'number') B = G6.ServiceDescriptorProto.decode(B);
  var Q = new no(
    B.name && B.name.length ? B.name : 'Service' + kl6++,
    Mm(B.options, G6.ServiceOptions)
  );
  if (B.method) for (var I = 0; I < B.method.length; ++I) Q.add(_C1.fromDescriptor(B.method[I]));
  return Q;
};
no.prototype.toDescriptor = function A() {
  var B = [];
  for (var Q = 0; Q < this.methodsArray.length; ++Q) B.push(this._methodsArray[Q].toDescriptor());
  return G6.ServiceDescriptorProto.create({
    name: this.name,
    method: B,
    options: Lm(this.options, G6.ServiceOptions),
  });
};
var xl6 = 0;
_C1.fromDescriptor = function A(B) {
  if (typeof B.length === 'number') B = G6.MethodDescriptorProto.decode(B);
  return new _C1(
    B.name && B.name.length ? B.name : 'Method' + xl6++,
    'rpc',
    B.inputType,
    B.outputType,
    Boolean(B.clientStreaming),
    Boolean(B.serverStreaming),
    Mm(B.options, G6.MethodOptions)
  );
};
_C1.prototype.toDescriptor = function A() {
  return G6.MethodDescriptorProto.create({
    name: this.name,
    inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
    outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
    clientStreaming: this.requestStream,
    serverStreaming: this.responseStream,
    options: Lm(this.options, G6.MethodOptions),
  });
};
function fl6(A) {
  switch (A) {
    case 1:
      return 'double';
    case 2:
      return 'float';
    case 3:
      return 'int64';
    case 4:
      return 'uint64';
    case 5:
      return 'int32';
    case 6:
      return 'fixed64';
    case 7:
      return 'fixed32';
    case 8:
      return 'bool';
    case 9:
      return 'string';
    case 12:
      return 'bytes';
    case 13:
      return 'uint32';
    case 15:
      return 'sfixed32';
    case 16:
      return 'sfixed64';
    case 17:
      return 'sint32';
    case 18:
      return 'sint64';
  }
  throw Error('illegal type: ' + A);
}
function vl6(A) {
  switch (A) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return !0;
  }
  return !1;
}
function Cn1(A, B) {
  switch (A) {
    case 'double':
      return 1;
    case 'float':
      return 2;
    case 'int64':
      return 3;
    case 'uint64':
      return 4;
    case 'int32':
      return 5;
    case 'fixed64':
      return 6;
    case 'fixed32':
      return 7;
    case 'bool':
      return 8;
    case 'string':
      return 9;
    case 'bytes':
      return 12;
    case 'uint32':
      return 13;
    case 'sfixed32':
      return 15;
    case 'sfixed64':
      return 16;
    case 'sint32':
      return 17;
    case 'sint64':
      return 18;
  }
  if (B instanceof LN) return 14;
  if (B instanceof LR) return B.group ? 10 : 11;
  throw Error('illegal type: ' + A);
}
function Mm(A, B) {
  if (!A) return;
  var Q = [];
  for (var I = 0, G, D, Z; I < B.fieldsArray.length; ++I)
    if ((D = (G = B._fieldsArray[I]).name) !== 'uninterpretedOption') {
      if (A.hasOwnProperty(D)) {
        if (
          ((Z = A[D]),
          G.resolvedType instanceof LN &&
            typeof Z === 'number' &&
            G.resolvedType.valuesById[Z] !== void 0)
        )
          Z = G.resolvedType.valuesById[Z];
        Q.push(bl6(D), Z);
      }
    }
  return Q.length ? HZ.util.toObject(Q) : void 0;
}
function Lm(A, B) {
  if (!A) return;
  var Q = [];
  for (var I = 0, G = Object.keys(A), D, Z; I < G.length; ++I) {
    if (((Z = A[(D = G[I])]), D === 'default')) continue;
    var Y = B.fields[D];
    if (!Y && !(Y = B.fields[(D = HZ.util.camelCase(D))])) continue;
    Q.push(D, Z);
  }
  return Q.length ? B.fromObject(HZ.util.toObject(Q)) : void 0;
}
function LI2(A, B) {
  var Q = A.fullName.split('.'),
    I = B.fullName.split('.'),
    G = 0,
    D = 0,
    Z = I.length - 1;
  if (!(A instanceof io) && B instanceof qI2)
    while (G < Q.length && D < Z && Q[G] === I[D]) {
      var Y = B.lookup(Q[G++], !0);
      if (Y !== null && Y !== B) break;
      ++D;
    }
  else for (; G < Q.length && D < Z && Q[G] === I[D]; ++G, ++D);
  return I.slice(D).join('.');
}
function bl6(A) {
  return (
    A.substring(0, 1) +
    A.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function (B, Q) {
      return '_' + Q.toLowerCase();
    })
  );
}

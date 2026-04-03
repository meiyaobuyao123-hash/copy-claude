// Module: vJ1
// Params: o52,t52

Object.defineProperty(o52, '__esModule', { value: !0 });
var S9 = xl1(),
  LA = S9.Reader,
  k4 = S9.Writer,
  Z1 = S9.util,
  Q1 = S9.roots.default || (S9.roots.default = {});
Q1.opentelemetry = (function () {
  var A = {};
  return (
    (A.proto = (function () {
      var B = {};
      return (
        (B.common = (function () {
          var Q = {};
          return (
            (Q.v1 = (function () {
              var I = {};
              return (
                (I.AnyValue = (function () {
                  function G(Z) {
                    if (Z) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.stringValue = null),
                    (G.prototype.boolValue = null),
                    (G.prototype.intValue = null),
                    (G.prototype.doubleValue = null),
                    (G.prototype.arrayValue = null),
                    (G.prototype.kvlistValue = null),
                    (G.prototype.bytesValue = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, 'value', {
                      get: Z1.oneOfGetter(
                        (D = [
                          'stringValue',
                          'boolValue',
                          'intValue',
                          'doubleValue',
                          'arrayValue',
                          'kvlistValue',
                          'bytesValue',
                        ])
                      ),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (Y.stringValue != null && Object.hasOwnProperty.call(Y, 'stringValue'))
                        W.uint32(10).string(Y.stringValue);
                      if (Y.boolValue != null && Object.hasOwnProperty.call(Y, 'boolValue'))
                        W.uint32(16).bool(Y.boolValue);
                      if (Y.intValue != null && Object.hasOwnProperty.call(Y, 'intValue'))
                        W.uint32(24).int64(Y.intValue);
                      if (Y.doubleValue != null && Object.hasOwnProperty.call(Y, 'doubleValue'))
                        W.uint32(33).double(Y.doubleValue);
                      if (Y.arrayValue != null && Object.hasOwnProperty.call(Y, 'arrayValue'))
                        Q1.opentelemetry.proto.common.v1.ArrayValue.encode(
                          Y.arrayValue,
                          W.uint32(42).fork()
                        ).ldelim();
                      if (Y.kvlistValue != null && Object.hasOwnProperty.call(Y, 'kvlistValue'))
                        Q1.opentelemetry.proto.common.v1.KeyValueList.encode(
                          Y.kvlistValue,
                          W.uint32(50).fork()
                        ).ldelim();
                      if (Y.bytesValue != null && Object.hasOwnProperty.call(Y, 'bytesValue'))
                        W.uint32(58).bytes(Y.bytesValue);
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.common.v1.AnyValue();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 1: {
                            J.stringValue = Y.string();
                            break;
                          }
                          case 2: {
                            J.boolValue = Y.bool();
                            break;
                          }
                          case 3: {
                            J.intValue = Y.int64();
                            break;
                          }
                          case 4: {
                            J.doubleValue = Y.double();
                            break;
                          }
                          case 5: {
                            J.arrayValue = Q1.opentelemetry.proto.common.v1.ArrayValue.decode(
                              Y,
                              Y.uint32()
                            );
                            break;
                          }
                          case 6: {
                            J.kvlistValue = Q1.opentelemetry.proto.common.v1.KeyValueList.decode(
                              Y,
                              Y.uint32()
                            );
                            break;
                          }
                          case 7: {
                            J.bytesValue = Y.bytes();
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.stringValue != null && Y.hasOwnProperty('stringValue')) {
                        if (((W.value = 1), !Z1.isString(Y.stringValue)))
                          return 'stringValue: string expected';
                      }
                      if (Y.boolValue != null && Y.hasOwnProperty('boolValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (((W.value = 1), typeof Y.boolValue !== 'boolean'))
                          return 'boolValue: boolean expected';
                      }
                      if (Y.intValue != null && Y.hasOwnProperty('intValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (
                          ((W.value = 1),
                          !Z1.isInteger(Y.intValue) &&
                            !(
                              Y.intValue &&
                              Z1.isInteger(Y.intValue.low) &&
                              Z1.isInteger(Y.intValue.high)
                            ))
                        )
                          return 'intValue: integer|Long expected';
                      }
                      if (Y.doubleValue != null && Y.hasOwnProperty('doubleValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (((W.value = 1), typeof Y.doubleValue !== 'number'))
                          return 'doubleValue: number expected';
                      }
                      if (Y.arrayValue != null && Y.hasOwnProperty('arrayValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        W.value = 1;
                        {
                          var F = Q1.opentelemetry.proto.common.v1.ArrayValue.verify(Y.arrayValue);
                          if (F) return 'arrayValue.' + F;
                        }
                      }
                      if (Y.kvlistValue != null && Y.hasOwnProperty('kvlistValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        W.value = 1;
                        {
                          var F = Q1.opentelemetry.proto.common.v1.KeyValueList.verify(
                            Y.kvlistValue
                          );
                          if (F) return 'kvlistValue.' + F;
                        }
                      }
                      if (Y.bytesValue != null && Y.hasOwnProperty('bytesValue')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (
                          ((W.value = 1),
                          !(
                            (Y.bytesValue && typeof Y.bytesValue.length === 'number') ||
                            Z1.isString(Y.bytesValue)
                          ))
                        )
                          return 'bytesValue: buffer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (Y instanceof Q1.opentelemetry.proto.common.v1.AnyValue) return Y;
                      var W = new Q1.opentelemetry.proto.common.v1.AnyValue();
                      if (Y.stringValue != null) W.stringValue = String(Y.stringValue);
                      if (Y.boolValue != null) W.boolValue = Boolean(Y.boolValue);
                      if (Y.intValue != null) {
                        if (Z1.Long) (W.intValue = Z1.Long.fromValue(Y.intValue)).unsigned = !1;
                        else if (typeof Y.intValue === 'string')
                          W.intValue = parseInt(Y.intValue, 10);
                        else if (typeof Y.intValue === 'number') W.intValue = Y.intValue;
                        else if (typeof Y.intValue === 'object')
                          W.intValue = new Z1.LongBits(
                            Y.intValue.low >>> 0,
                            Y.intValue.high >>> 0
                          ).toNumber();
                      }
                      if (Y.doubleValue != null) W.doubleValue = Number(Y.doubleValue);
                      if (Y.arrayValue != null) {
                        if (typeof Y.arrayValue !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected'
                          );
                        W.arrayValue = Q1.opentelemetry.proto.common.v1.ArrayValue.fromObject(
                          Y.arrayValue
                        );
                      }
                      if (Y.kvlistValue != null) {
                        if (typeof Y.kvlistValue !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected'
                          );
                        W.kvlistValue = Q1.opentelemetry.proto.common.v1.KeyValueList.fromObject(
                          Y.kvlistValue
                        );
                      }
                      if (Y.bytesValue != null) {
                        if (typeof Y.bytesValue === 'string')
                          Z1.base64.decode(
                            Y.bytesValue,
                            (W.bytesValue = Z1.newBuffer(Z1.base64.length(Y.bytesValue))),
                            0
                          );
                        else if (Y.bytesValue.length >= 0) W.bytesValue = Y.bytesValue;
                      }
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (Y.stringValue != null && Y.hasOwnProperty('stringValue')) {
                        if (((F.stringValue = Y.stringValue), W.oneofs)) F.value = 'stringValue';
                      }
                      if (Y.boolValue != null && Y.hasOwnProperty('boolValue')) {
                        if (((F.boolValue = Y.boolValue), W.oneofs)) F.value = 'boolValue';
                      }
                      if (Y.intValue != null && Y.hasOwnProperty('intValue')) {
                        if (typeof Y.intValue === 'number')
                          F.intValue = W.longs === String ? String(Y.intValue) : Y.intValue;
                        else
                          F.intValue =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.intValue)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.intValue.low >>> 0,
                                    Y.intValue.high >>> 0
                                  ).toNumber()
                                : Y.intValue;
                        if (W.oneofs) F.value = 'intValue';
                      }
                      if (Y.doubleValue != null && Y.hasOwnProperty('doubleValue')) {
                        if (
                          ((F.doubleValue =
                            W.json && !isFinite(Y.doubleValue)
                              ? String(Y.doubleValue)
                              : Y.doubleValue),
                          W.oneofs)
                        )
                          F.value = 'doubleValue';
                      }
                      if (Y.arrayValue != null && Y.hasOwnProperty('arrayValue')) {
                        if (
                          ((F.arrayValue = Q1.opentelemetry.proto.common.v1.ArrayValue.toObject(
                            Y.arrayValue,
                            W
                          )),
                          W.oneofs)
                        )
                          F.value = 'arrayValue';
                      }
                      if (Y.kvlistValue != null && Y.hasOwnProperty('kvlistValue')) {
                        if (
                          ((F.kvlistValue = Q1.opentelemetry.proto.common.v1.KeyValueList.toObject(
                            Y.kvlistValue,
                            W
                          )),
                          W.oneofs)
                        )
                          F.value = 'kvlistValue';
                      }
                      if (Y.bytesValue != null && Y.hasOwnProperty('bytesValue')) {
                        if (
                          ((F.bytesValue =
                            W.bytes === String
                              ? Z1.base64.encode(Y.bytesValue, 0, Y.bytesValue.length)
                              : W.bytes === Array
                                ? Array.prototype.slice.call(Y.bytesValue)
                                : Y.bytesValue),
                          W.oneofs)
                        )
                          F.value = 'bytesValue';
                      }
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.common.v1.AnyValue';
                    }),
                    G
                  );
                })()),
                (I.ArrayValue = (function () {
                  function G(D) {
                    if (((this.values = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.values = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.values != null && Z.values.length)
                        for (var W = 0; W < Z.values.length; ++W)
                          Q1.opentelemetry.proto.common.v1.AnyValue.encode(
                            Z.values[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.common.v1.ArrayValue();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.values && F.values.length)) F.values = [];
                            F.values.push(
                              Q1.opentelemetry.proto.common.v1.AnyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.values != null && Z.hasOwnProperty('values')) {
                        if (!Array.isArray(Z.values)) return 'values: array expected';
                        for (var Y = 0; Y < Z.values.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.AnyValue.verify(Z.values[Y]);
                          if (W) return 'values.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.common.v1.ArrayValue) return Z;
                      var Y = new Q1.opentelemetry.proto.common.v1.ArrayValue();
                      if (Z.values) {
                        if (!Array.isArray(Z.values))
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.ArrayValue.values: array expected'
                          );
                        Y.values = [];
                        for (var W = 0; W < Z.values.length; ++W) {
                          if (typeof Z.values[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.common.v1.ArrayValue.values: object expected'
                            );
                          Y.values[W] = Q1.opentelemetry.proto.common.v1.AnyValue.fromObject(
                            Z.values[W]
                          );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.values = [];
                      if (Z.values && Z.values.length) {
                        W.values = [];
                        for (var F = 0; F < Z.values.length; ++F)
                          W.values[F] = Q1.opentelemetry.proto.common.v1.AnyValue.toObject(
                            Z.values[F],
                            Y
                          );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.common.v1.ArrayValue';
                    }),
                    G
                  );
                })()),
                (I.KeyValueList = (function () {
                  function G(D) {
                    if (((this.values = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.values = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.values != null && Z.values.length)
                        for (var W = 0; W < Z.values.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.values[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.common.v1.KeyValueList();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.values && F.values.length)) F.values = [];
                            F.values.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.values != null && Z.hasOwnProperty('values')) {
                        if (!Array.isArray(Z.values)) return 'values: array expected';
                        for (var Y = 0; Y < Z.values.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.values[Y]);
                          if (W) return 'values.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.common.v1.KeyValueList) return Z;
                      var Y = new Q1.opentelemetry.proto.common.v1.KeyValueList();
                      if (Z.values) {
                        if (!Array.isArray(Z.values))
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.KeyValueList.values: array expected'
                          );
                        Y.values = [];
                        for (var W = 0; W < Z.values.length; ++W) {
                          if (typeof Z.values[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.common.v1.KeyValueList.values: object expected'
                            );
                          Y.values[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.values[W]
                          );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.values = [];
                      if (Z.values && Z.values.length) {
                        W.values = [];
                        for (var F = 0; F < Z.values.length; ++F)
                          W.values[F] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.values[F],
                            Y
                          );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.common.v1.KeyValueList';
                    }),
                    G
                  );
                })()),
                (I.KeyValue = (function () {
                  function G(D) {
                    if (D) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.key = null),
                    (G.prototype.value = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.key != null && Object.hasOwnProperty.call(Z, 'key'))
                        Y.uint32(10).string(Z.key);
                      if (Z.value != null && Object.hasOwnProperty.call(Z, 'value'))
                        Q1.opentelemetry.proto.common.v1.AnyValue.encode(
                          Z.value,
                          Y.uint32(18).fork()
                        ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.common.v1.KeyValue();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.key = Z.string();
                            break;
                          }
                          case 2: {
                            F.value = Q1.opentelemetry.proto.common.v1.AnyValue.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.key != null && Z.hasOwnProperty('key')) {
                        if (!Z1.isString(Z.key)) return 'key: string expected';
                      }
                      if (Z.value != null && Z.hasOwnProperty('value')) {
                        var Y = Q1.opentelemetry.proto.common.v1.AnyValue.verify(Z.value);
                        if (Y) return 'value.' + Y;
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.common.v1.KeyValue) return Z;
                      var Y = new Q1.opentelemetry.proto.common.v1.KeyValue();
                      if (Z.key != null) Y.key = String(Z.key);
                      if (Z.value != null) {
                        if (typeof Z.value !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.KeyValue.value: object expected'
                          );
                        Y.value = Q1.opentelemetry.proto.common.v1.AnyValue.fromObject(Z.value);
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.defaults) ((W.key = ''), (W.value = null));
                      if (Z.key != null && Z.hasOwnProperty('key')) W.key = Z.key;
                      if (Z.value != null && Z.hasOwnProperty('value'))
                        W.value = Q1.opentelemetry.proto.common.v1.AnyValue.toObject(Z.value, Y);
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.common.v1.KeyValue';
                    }),
                    G
                  );
                })()),
                (I.InstrumentationScope = (function () {
                  function G(D) {
                    if (((this.attributes = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.name = null),
                    (G.prototype.version = null),
                    (G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.droppedAttributesCount = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.name != null && Object.hasOwnProperty.call(Z, 'name'))
                        Y.uint32(10).string(Z.name);
                      if (Z.version != null && Object.hasOwnProperty.call(Z, 'version'))
                        Y.uint32(18).string(Z.version);
                      if (Z.attributes != null && Z.attributes.length)
                        for (var W = 0; W < Z.attributes.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.attributes[W],
                            Y.uint32(26).fork()
                          ).ldelim();
                      if (
                        Z.droppedAttributesCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedAttributesCount')
                      )
                        Y.uint32(32).uint32(Z.droppedAttributesCount);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.common.v1.InstrumentationScope();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.name = Z.string();
                            break;
                          }
                          case 2: {
                            F.version = Z.string();
                            break;
                          }
                          case 3: {
                            if (!(F.attributes && F.attributes.length)) F.attributes = [];
                            F.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 4: {
                            F.droppedAttributesCount = Z.uint32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.name != null && Z.hasOwnProperty('name')) {
                        if (!Z1.isString(Z.name)) return 'name: string expected';
                      }
                      if (Z.version != null && Z.hasOwnProperty('version')) {
                        if (!Z1.isString(Z.version)) return 'version: string expected';
                      }
                      if (Z.attributes != null && Z.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Z.attributes)) return 'attributes: array expected';
                        for (var Y = 0; Y < Z.attributes.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.attributes[Y]);
                          if (W) return 'attributes.' + W;
                        }
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      ) {
                        if (!Z1.isInteger(Z.droppedAttributesCount))
                          return 'droppedAttributesCount: integer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.common.v1.InstrumentationScope)
                        return Z;
                      var Y = new Q1.opentelemetry.proto.common.v1.InstrumentationScope();
                      if (Z.name != null) Y.name = String(Z.name);
                      if (Z.version != null) Y.version = String(Z.version);
                      if (Z.attributes) {
                        if (!Array.isArray(Z.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected'
                          );
                        Y.attributes = [];
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          if (typeof Z.attributes[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected'
                            );
                          Y.attributes[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.attributes[W]
                          );
                        }
                      }
                      if (Z.droppedAttributesCount != null)
                        Y.droppedAttributesCount = Z.droppedAttributesCount >>> 0;
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.attributes = [];
                      if (Y.defaults)
                        ((W.name = ''), (W.version = ''), (W.droppedAttributesCount = 0));
                      if (Z.name != null && Z.hasOwnProperty('name')) W.name = Z.name;
                      if (Z.version != null && Z.hasOwnProperty('version')) W.version = Z.version;
                      if (Z.attributes && Z.attributes.length) {
                        W.attributes = [];
                        for (var F = 0; F < Z.attributes.length; ++F)
                          W.attributes[F] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.attributes[F],
                            Y
                          );
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      )
                        W.droppedAttributesCount = Z.droppedAttributesCount;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.common.v1.InstrumentationScope';
                    }),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        (B.resource = (function () {
          var Q = {};
          return (
            (Q.v1 = (function () {
              var I = {};
              return (
                (I.Resource = (function () {
                  function G(D) {
                    if (((this.attributes = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.droppedAttributesCount = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.attributes != null && Z.attributes.length)
                        for (var W = 0; W < Z.attributes.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.attributes[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      if (
                        Z.droppedAttributesCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedAttributesCount')
                      )
                        Y.uint32(16).uint32(Z.droppedAttributesCount);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.resource.v1.Resource();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.attributes && F.attributes.length)) F.attributes = [];
                            F.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 2: {
                            F.droppedAttributesCount = Z.uint32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.attributes != null && Z.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Z.attributes)) return 'attributes: array expected';
                        for (var Y = 0; Y < Z.attributes.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.attributes[Y]);
                          if (W) return 'attributes.' + W;
                        }
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      ) {
                        if (!Z1.isInteger(Z.droppedAttributesCount))
                          return 'droppedAttributesCount: integer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.resource.v1.Resource) return Z;
                      var Y = new Q1.opentelemetry.proto.resource.v1.Resource();
                      if (Z.attributes) {
                        if (!Array.isArray(Z.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.resource.v1.Resource.attributes: array expected'
                          );
                        Y.attributes = [];
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          if (typeof Z.attributes[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.resource.v1.Resource.attributes: object expected'
                            );
                          Y.attributes[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.attributes[W]
                          );
                        }
                      }
                      if (Z.droppedAttributesCount != null)
                        Y.droppedAttributesCount = Z.droppedAttributesCount >>> 0;
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.attributes = [];
                      if (Y.defaults) W.droppedAttributesCount = 0;
                      if (Z.attributes && Z.attributes.length) {
                        W.attributes = [];
                        for (var F = 0; F < Z.attributes.length; ++F)
                          W.attributes[F] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.attributes[F],
                            Y
                          );
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      )
                        W.droppedAttributesCount = Z.droppedAttributesCount;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.resource.v1.Resource';
                    }),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        (B.trace = (function () {
          var Q = {};
          return (
            (Q.v1 = (function () {
              var I = {};
              return (
                (I.TracesData = (function () {
                  function G(D) {
                    if (((this.resourceSpans = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resourceSpans = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resourceSpans != null && Z.resourceSpans.length)
                        for (var W = 0; W < Z.resourceSpans.length; ++W)
                          Q1.opentelemetry.proto.trace.v1.ResourceSpans.encode(
                            Z.resourceSpans[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.trace.v1.TracesData();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.resourceSpans && F.resourceSpans.length)) F.resourceSpans = [];
                            F.resourceSpans.push(
                              Q1.opentelemetry.proto.trace.v1.ResourceSpans.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resourceSpans != null && Z.hasOwnProperty('resourceSpans')) {
                        if (!Array.isArray(Z.resourceSpans)) return 'resourceSpans: array expected';
                        for (var Y = 0; Y < Z.resourceSpans.length; ++Y) {
                          var W = Q1.opentelemetry.proto.trace.v1.ResourceSpans.verify(
                            Z.resourceSpans[Y]
                          );
                          if (W) return 'resourceSpans.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.trace.v1.TracesData) return Z;
                      var Y = new Q1.opentelemetry.proto.trace.v1.TracesData();
                      if (Z.resourceSpans) {
                        if (!Array.isArray(Z.resourceSpans))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected'
                          );
                        Y.resourceSpans = [];
                        for (var W = 0; W < Z.resourceSpans.length; ++W) {
                          if (typeof Z.resourceSpans[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected'
                            );
                          Y.resourceSpans[W] =
                            Q1.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(
                              Z.resourceSpans[W]
                            );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.resourceSpans = [];
                      if (Z.resourceSpans && Z.resourceSpans.length) {
                        W.resourceSpans = [];
                        for (var F = 0; F < Z.resourceSpans.length; ++F)
                          W.resourceSpans[F] =
                            Q1.opentelemetry.proto.trace.v1.ResourceSpans.toObject(
                              Z.resourceSpans[F],
                              Y
                            );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.trace.v1.TracesData';
                    }),
                    G
                  );
                })()),
                (I.ResourceSpans = (function () {
                  function G(D) {
                    if (((this.scopeSpans = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resource = null),
                    (G.prototype.scopeSpans = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resource != null && Object.hasOwnProperty.call(Z, 'resource'))
                        Q1.opentelemetry.proto.resource.v1.Resource.encode(
                          Z.resource,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.scopeSpans != null && Z.scopeSpans.length)
                        for (var W = 0; W < Z.scopeSpans.length; ++W)
                          Q1.opentelemetry.proto.trace.v1.ScopeSpans.encode(
                            Z.scopeSpans[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.trace.v1.ResourceSpans();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.resource = Q1.opentelemetry.proto.resource.v1.Resource.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.scopeSpans && F.scopeSpans.length)) F.scopeSpans = [];
                            F.scopeSpans.push(
                              Q1.opentelemetry.proto.trace.v1.ScopeSpans.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resource != null && Z.hasOwnProperty('resource')) {
                        var Y = Q1.opentelemetry.proto.resource.v1.Resource.verify(Z.resource);
                        if (Y) return 'resource.' + Y;
                      }
                      if (Z.scopeSpans != null && Z.hasOwnProperty('scopeSpans')) {
                        if (!Array.isArray(Z.scopeSpans)) return 'scopeSpans: array expected';
                        for (var W = 0; W < Z.scopeSpans.length; ++W) {
                          var Y = Q1.opentelemetry.proto.trace.v1.ScopeSpans.verify(
                            Z.scopeSpans[W]
                          );
                          if (Y) return 'scopeSpans.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.trace.v1.ResourceSpans) return Z;
                      var Y = new Q1.opentelemetry.proto.trace.v1.ResourceSpans();
                      if (Z.resource != null) {
                        if (typeof Z.resource !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected'
                          );
                        Y.resource = Q1.opentelemetry.proto.resource.v1.Resource.fromObject(
                          Z.resource
                        );
                      }
                      if (Z.scopeSpans) {
                        if (!Array.isArray(Z.scopeSpans))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected'
                          );
                        Y.scopeSpans = [];
                        for (var W = 0; W < Z.scopeSpans.length; ++W) {
                          if (typeof Z.scopeSpans[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected'
                            );
                          Y.scopeSpans[W] = Q1.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(
                            Z.scopeSpans[W]
                          );
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.scopeSpans = [];
                      if (Y.defaults) ((W.resource = null), (W.schemaUrl = ''));
                      if (Z.resource != null && Z.hasOwnProperty('resource'))
                        W.resource = Q1.opentelemetry.proto.resource.v1.Resource.toObject(
                          Z.resource,
                          Y
                        );
                      if (Z.scopeSpans && Z.scopeSpans.length) {
                        W.scopeSpans = [];
                        for (var F = 0; F < Z.scopeSpans.length; ++F)
                          W.scopeSpans[F] = Q1.opentelemetry.proto.trace.v1.ScopeSpans.toObject(
                            Z.scopeSpans[F],
                            Y
                          );
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.trace.v1.ResourceSpans';
                    }),
                    G
                  );
                })()),
                (I.ScopeSpans = (function () {
                  function G(D) {
                    if (((this.spans = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.scope = null),
                    (G.prototype.spans = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.scope != null && Object.hasOwnProperty.call(Z, 'scope'))
                        Q1.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                          Z.scope,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.spans != null && Z.spans.length)
                        for (var W = 0; W < Z.spans.length; ++W)
                          Q1.opentelemetry.proto.trace.v1.Span.encode(
                            Z.spans[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.trace.v1.ScopeSpans();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.spans && F.spans.length)) F.spans = [];
                            F.spans.push(
                              Q1.opentelemetry.proto.trace.v1.Span.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.scope != null && Z.hasOwnProperty('scope')) {
                        var Y = Q1.opentelemetry.proto.common.v1.InstrumentationScope.verify(
                          Z.scope
                        );
                        if (Y) return 'scope.' + Y;
                      }
                      if (Z.spans != null && Z.hasOwnProperty('spans')) {
                        if (!Array.isArray(Z.spans)) return 'spans: array expected';
                        for (var W = 0; W < Z.spans.length; ++W) {
                          var Y = Q1.opentelemetry.proto.trace.v1.Span.verify(Z.spans[W]);
                          if (Y) return 'spans.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.trace.v1.ScopeSpans) return Z;
                      var Y = new Q1.opentelemetry.proto.trace.v1.ScopeSpans();
                      if (Z.scope != null) {
                        if (typeof Z.scope !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected'
                          );
                        Y.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(
                          Z.scope
                        );
                      }
                      if (Z.spans) {
                        if (!Array.isArray(Z.spans))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected'
                          );
                        Y.spans = [];
                        for (var W = 0; W < Z.spans.length; ++W) {
                          if (typeof Z.spans[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected'
                            );
                          Y.spans[W] = Q1.opentelemetry.proto.trace.v1.Span.fromObject(Z.spans[W]);
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.spans = [];
                      if (Y.defaults) ((W.scope = null), (W.schemaUrl = ''));
                      if (Z.scope != null && Z.hasOwnProperty('scope'))
                        W.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.toObject(
                          Z.scope,
                          Y
                        );
                      if (Z.spans && Z.spans.length) {
                        W.spans = [];
                        for (var F = 0; F < Z.spans.length; ++F)
                          W.spans[F] = Q1.opentelemetry.proto.trace.v1.Span.toObject(Z.spans[F], Y);
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.trace.v1.ScopeSpans';
                    }),
                    G
                  );
                })()),
                (I.Span = (function () {
                  function G(D) {
                    if (((this.attributes = []), (this.events = []), (this.links = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.traceId = null),
                    (G.prototype.spanId = null),
                    (G.prototype.traceState = null),
                    (G.prototype.parentSpanId = null),
                    (G.prototype.name = null),
                    (G.prototype.kind = null),
                    (G.prototype.startTimeUnixNano = null),
                    (G.prototype.endTimeUnixNano = null),
                    (G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.droppedAttributesCount = null),
                    (G.prototype.events = Z1.emptyArray),
                    (G.prototype.droppedEventsCount = null),
                    (G.prototype.links = Z1.emptyArray),
                    (G.prototype.droppedLinksCount = null),
                    (G.prototype.status = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.traceId != null && Object.hasOwnProperty.call(Z, 'traceId'))
                        Y.uint32(10).bytes(Z.traceId);
                      if (Z.spanId != null && Object.hasOwnProperty.call(Z, 'spanId'))
                        Y.uint32(18).bytes(Z.spanId);
                      if (Z.traceState != null && Object.hasOwnProperty.call(Z, 'traceState'))
                        Y.uint32(26).string(Z.traceState);
                      if (Z.parentSpanId != null && Object.hasOwnProperty.call(Z, 'parentSpanId'))
                        Y.uint32(34).bytes(Z.parentSpanId);
                      if (Z.name != null && Object.hasOwnProperty.call(Z, 'name'))
                        Y.uint32(42).string(Z.name);
                      if (Z.kind != null && Object.hasOwnProperty.call(Z, 'kind'))
                        Y.uint32(48).int32(Z.kind);
                      if (
                        Z.startTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Z, 'startTimeUnixNano')
                      )
                        Y.uint32(57).fixed64(Z.startTimeUnixNano);
                      if (
                        Z.endTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Z, 'endTimeUnixNano')
                      )
                        Y.uint32(65).fixed64(Z.endTimeUnixNano);
                      if (Z.attributes != null && Z.attributes.length)
                        for (var W = 0; W < Z.attributes.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.attributes[W],
                            Y.uint32(74).fork()
                          ).ldelim();
                      if (
                        Z.droppedAttributesCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedAttributesCount')
                      )
                        Y.uint32(80).uint32(Z.droppedAttributesCount);
                      if (Z.events != null && Z.events.length)
                        for (var W = 0; W < Z.events.length; ++W)
                          Q1.opentelemetry.proto.trace.v1.Span.Event.encode(
                            Z.events[W],
                            Y.uint32(90).fork()
                          ).ldelim();
                      if (
                        Z.droppedEventsCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedEventsCount')
                      )
                        Y.uint32(96).uint32(Z.droppedEventsCount);
                      if (Z.links != null && Z.links.length)
                        for (var W = 0; W < Z.links.length; ++W)
                          Q1.opentelemetry.proto.trace.v1.Span.Link.encode(
                            Z.links[W],
                            Y.uint32(106).fork()
                          ).ldelim();
                      if (
                        Z.droppedLinksCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedLinksCount')
                      )
                        Y.uint32(112).uint32(Z.droppedLinksCount);
                      if (Z.status != null && Object.hasOwnProperty.call(Z, 'status'))
                        Q1.opentelemetry.proto.trace.v1.Status.encode(
                          Z.status,
                          Y.uint32(122).fork()
                        ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.trace.v1.Span();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.traceId = Z.bytes();
                            break;
                          }
                          case 2: {
                            F.spanId = Z.bytes();
                            break;
                          }
                          case 3: {
                            F.traceState = Z.string();
                            break;
                          }
                          case 4: {
                            F.parentSpanId = Z.bytes();
                            break;
                          }
                          case 5: {
                            F.name = Z.string();
                            break;
                          }
                          case 6: {
                            F.kind = Z.int32();
                            break;
                          }
                          case 7: {
                            F.startTimeUnixNano = Z.fixed64();
                            break;
                          }
                          case 8: {
                            F.endTimeUnixNano = Z.fixed64();
                            break;
                          }
                          case 9: {
                            if (!(F.attributes && F.attributes.length)) F.attributes = [];
                            F.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 10: {
                            F.droppedAttributesCount = Z.uint32();
                            break;
                          }
                          case 11: {
                            if (!(F.events && F.events.length)) F.events = [];
                            F.events.push(
                              Q1.opentelemetry.proto.trace.v1.Span.Event.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 12: {
                            F.droppedEventsCount = Z.uint32();
                            break;
                          }
                          case 13: {
                            if (!(F.links && F.links.length)) F.links = [];
                            F.links.push(
                              Q1.opentelemetry.proto.trace.v1.Span.Link.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 14: {
                            F.droppedLinksCount = Z.uint32();
                            break;
                          }
                          case 15: {
                            F.status = Q1.opentelemetry.proto.trace.v1.Status.decode(Z, Z.uint32());
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.traceId != null && Z.hasOwnProperty('traceId')) {
                        if (
                          !(
                            (Z.traceId && typeof Z.traceId.length === 'number') ||
                            Z1.isString(Z.traceId)
                          )
                        )
                          return 'traceId: buffer expected';
                      }
                      if (Z.spanId != null && Z.hasOwnProperty('spanId')) {
                        if (
                          !(
                            (Z.spanId && typeof Z.spanId.length === 'number') ||
                            Z1.isString(Z.spanId)
                          )
                        )
                          return 'spanId: buffer expected';
                      }
                      if (Z.traceState != null && Z.hasOwnProperty('traceState')) {
                        if (!Z1.isString(Z.traceState)) return 'traceState: string expected';
                      }
                      if (Z.parentSpanId != null && Z.hasOwnProperty('parentSpanId')) {
                        if (
                          !(
                            (Z.parentSpanId && typeof Z.parentSpanId.length === 'number') ||
                            Z1.isString(Z.parentSpanId)
                          )
                        )
                          return 'parentSpanId: buffer expected';
                      }
                      if (Z.name != null && Z.hasOwnProperty('name')) {
                        if (!Z1.isString(Z.name)) return 'name: string expected';
                      }
                      if (Z.kind != null && Z.hasOwnProperty('kind'))
                        switch (Z.kind) {
                          default:
                            return 'kind: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 5:
                            break;
                        }
                      if (Z.startTimeUnixNano != null && Z.hasOwnProperty('startTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Z.startTimeUnixNano) &&
                          !(
                            Z.startTimeUnixNano &&
                            Z1.isInteger(Z.startTimeUnixNano.low) &&
                            Z1.isInteger(Z.startTimeUnixNano.high)
                          )
                        )
                          return 'startTimeUnixNano: integer|Long expected';
                      }
                      if (Z.endTimeUnixNano != null && Z.hasOwnProperty('endTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Z.endTimeUnixNano) &&
                          !(
                            Z.endTimeUnixNano &&
                            Z1.isInteger(Z.endTimeUnixNano.low) &&
                            Z1.isInteger(Z.endTimeUnixNano.high)
                          )
                        )
                          return 'endTimeUnixNano: integer|Long expected';
                      }
                      if (Z.attributes != null && Z.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Z.attributes)) return 'attributes: array expected';
                        for (var Y = 0; Y < Z.attributes.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.attributes[Y]);
                          if (W) return 'attributes.' + W;
                        }
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      ) {
                        if (!Z1.isInteger(Z.droppedAttributesCount))
                          return 'droppedAttributesCount: integer expected';
                      }
                      if (Z.events != null && Z.hasOwnProperty('events')) {
                        if (!Array.isArray(Z.events)) return 'events: array expected';
                        for (var Y = 0; Y < Z.events.length; ++Y) {
                          var W = Q1.opentelemetry.proto.trace.v1.Span.Event.verify(Z.events[Y]);
                          if (W) return 'events.' + W;
                        }
                      }
                      if (Z.droppedEventsCount != null && Z.hasOwnProperty('droppedEventsCount')) {
                        if (!Z1.isInteger(Z.droppedEventsCount))
                          return 'droppedEventsCount: integer expected';
                      }
                      if (Z.links != null && Z.hasOwnProperty('links')) {
                        if (!Array.isArray(Z.links)) return 'links: array expected';
                        for (var Y = 0; Y < Z.links.length; ++Y) {
                          var W = Q1.opentelemetry.proto.trace.v1.Span.Link.verify(Z.links[Y]);
                          if (W) return 'links.' + W;
                        }
                      }
                      if (Z.droppedLinksCount != null && Z.hasOwnProperty('droppedLinksCount')) {
                        if (!Z1.isInteger(Z.droppedLinksCount))
                          return 'droppedLinksCount: integer expected';
                      }
                      if (Z.status != null && Z.hasOwnProperty('status')) {
                        var W = Q1.opentelemetry.proto.trace.v1.Status.verify(Z.status);
                        if (W) return 'status.' + W;
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.trace.v1.Span) return Z;
                      var Y = new Q1.opentelemetry.proto.trace.v1.Span();
                      if (Z.traceId != null) {
                        if (typeof Z.traceId === 'string')
                          Z1.base64.decode(
                            Z.traceId,
                            (Y.traceId = Z1.newBuffer(Z1.base64.length(Z.traceId))),
                            0
                          );
                        else if (Z.traceId.length >= 0) Y.traceId = Z.traceId;
                      }
                      if (Z.spanId != null) {
                        if (typeof Z.spanId === 'string')
                          Z1.base64.decode(
                            Z.spanId,
                            (Y.spanId = Z1.newBuffer(Z1.base64.length(Z.spanId))),
                            0
                          );
                        else if (Z.spanId.length >= 0) Y.spanId = Z.spanId;
                      }
                      if (Z.traceState != null) Y.traceState = String(Z.traceState);
                      if (Z.parentSpanId != null) {
                        if (typeof Z.parentSpanId === 'string')
                          Z1.base64.decode(
                            Z.parentSpanId,
                            (Y.parentSpanId = Z1.newBuffer(Z1.base64.length(Z.parentSpanId))),
                            0
                          );
                        else if (Z.parentSpanId.length >= 0) Y.parentSpanId = Z.parentSpanId;
                      }
                      if (Z.name != null) Y.name = String(Z.name);
                      switch (Z.kind) {
                        default:
                          if (typeof Z.kind === 'number') {
                            Y.kind = Z.kind;
                            break;
                          }
                          break;
                        case 'SPAN_KIND_UNSPECIFIED':
                        case 0:
                          Y.kind = 0;
                          break;
                        case 'SPAN_KIND_INTERNAL':
                        case 1:
                          Y.kind = 1;
                          break;
                        case 'SPAN_KIND_SERVER':
                        case 2:
                          Y.kind = 2;
                          break;
                        case 'SPAN_KIND_CLIENT':
                        case 3:
                          Y.kind = 3;
                          break;
                        case 'SPAN_KIND_PRODUCER':
                        case 4:
                          Y.kind = 4;
                          break;
                        case 'SPAN_KIND_CONSUMER':
                        case 5:
                          Y.kind = 5;
                          break;
                      }
                      if (Z.startTimeUnixNano != null) {
                        if (Z1.Long)
                          (Y.startTimeUnixNano = Z1.Long.fromValue(Z.startTimeUnixNano)).unsigned =
                            !1;
                        else if (typeof Z.startTimeUnixNano === 'string')
                          Y.startTimeUnixNano = parseInt(Z.startTimeUnixNano, 10);
                        else if (typeof Z.startTimeUnixNano === 'number')
                          Y.startTimeUnixNano = Z.startTimeUnixNano;
                        else if (typeof Z.startTimeUnixNano === 'object')
                          Y.startTimeUnixNano = new Z1.LongBits(
                            Z.startTimeUnixNano.low >>> 0,
                            Z.startTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Z.endTimeUnixNano != null) {
                        if (Z1.Long)
                          (Y.endTimeUnixNano = Z1.Long.fromValue(Z.endTimeUnixNano)).unsigned = !1;
                        else if (typeof Z.endTimeUnixNano === 'string')
                          Y.endTimeUnixNano = parseInt(Z.endTimeUnixNano, 10);
                        else if (typeof Z.endTimeUnixNano === 'number')
                          Y.endTimeUnixNano = Z.endTimeUnixNano;
                        else if (typeof Z.endTimeUnixNano === 'object')
                          Y.endTimeUnixNano = new Z1.LongBits(
                            Z.endTimeUnixNano.low >>> 0,
                            Z.endTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Z.attributes) {
                        if (!Array.isArray(Z.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.Span.attributes: array expected'
                          );
                        Y.attributes = [];
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          if (typeof Z.attributes[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.Span.attributes: object expected'
                            );
                          Y.attributes[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.attributes[W]
                          );
                        }
                      }
                      if (Z.droppedAttributesCount != null)
                        Y.droppedAttributesCount = Z.droppedAttributesCount >>> 0;
                      if (Z.events) {
                        if (!Array.isArray(Z.events))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.Span.events: array expected'
                          );
                        Y.events = [];
                        for (var W = 0; W < Z.events.length; ++W) {
                          if (typeof Z.events[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.Span.events: object expected'
                            );
                          Y.events[W] = Q1.opentelemetry.proto.trace.v1.Span.Event.fromObject(
                            Z.events[W]
                          );
                        }
                      }
                      if (Z.droppedEventsCount != null)
                        Y.droppedEventsCount = Z.droppedEventsCount >>> 0;
                      if (Z.links) {
                        if (!Array.isArray(Z.links))
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.Span.links: array expected'
                          );
                        Y.links = [];
                        for (var W = 0; W < Z.links.length; ++W) {
                          if (typeof Z.links[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.trace.v1.Span.links: object expected'
                            );
                          Y.links[W] = Q1.opentelemetry.proto.trace.v1.Span.Link.fromObject(
                            Z.links[W]
                          );
                        }
                      }
                      if (Z.droppedLinksCount != null)
                        Y.droppedLinksCount = Z.droppedLinksCount >>> 0;
                      if (Z.status != null) {
                        if (typeof Z.status !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.trace.v1.Span.status: object expected'
                          );
                        Y.status = Q1.opentelemetry.proto.trace.v1.Status.fromObject(Z.status);
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults)
                        ((W.attributes = []), (W.events = []), (W.links = []));
                      if (Y.defaults) {
                        if (Y.bytes === String) W.traceId = '';
                        else if (((W.traceId = []), Y.bytes !== Array))
                          W.traceId = Z1.newBuffer(W.traceId);
                        if (Y.bytes === String) W.spanId = '';
                        else if (((W.spanId = []), Y.bytes !== Array))
                          W.spanId = Z1.newBuffer(W.spanId);
                        if (((W.traceState = ''), Y.bytes === String)) W.parentSpanId = '';
                        else if (((W.parentSpanId = []), Y.bytes !== Array))
                          W.parentSpanId = Z1.newBuffer(W.parentSpanId);
                        if (
                          ((W.name = ''),
                          (W.kind = Y.enums === String ? 'SPAN_KIND_UNSPECIFIED' : 0),
                          Z1.Long)
                        ) {
                          var F = new Z1.Long(0, 0, !1);
                          W.startTimeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.startTimeUnixNano = Y.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.endTimeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.endTimeUnixNano = Y.longs === String ? '0' : 0;
                        ((W.droppedAttributesCount = 0),
                          (W.droppedEventsCount = 0),
                          (W.droppedLinksCount = 0),
                          (W.status = null));
                      }
                      if (Z.traceId != null && Z.hasOwnProperty('traceId'))
                        W.traceId =
                          Y.bytes === String
                            ? Z1.base64.encode(Z.traceId, 0, Z.traceId.length)
                            : Y.bytes === Array
                              ? Array.prototype.slice.call(Z.traceId)
                              : Z.traceId;
                      if (Z.spanId != null && Z.hasOwnProperty('spanId'))
                        W.spanId =
                          Y.bytes === String
                            ? Z1.base64.encode(Z.spanId, 0, Z.spanId.length)
                            : Y.bytes === Array
                              ? Array.prototype.slice.call(Z.spanId)
                              : Z.spanId;
                      if (Z.traceState != null && Z.hasOwnProperty('traceState'))
                        W.traceState = Z.traceState;
                      if (Z.parentSpanId != null && Z.hasOwnProperty('parentSpanId'))
                        W.parentSpanId =
                          Y.bytes === String
                            ? Z1.base64.encode(Z.parentSpanId, 0, Z.parentSpanId.length)
                            : Y.bytes === Array
                              ? Array.prototype.slice.call(Z.parentSpanId)
                              : Z.parentSpanId;
                      if (Z.name != null && Z.hasOwnProperty('name')) W.name = Z.name;
                      if (Z.kind != null && Z.hasOwnProperty('kind'))
                        W.kind =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.trace.v1.Span.SpanKind[Z.kind] === void 0
                              ? Z.kind
                              : Q1.opentelemetry.proto.trace.v1.Span.SpanKind[Z.kind]
                            : Z.kind;
                      if (Z.startTimeUnixNano != null && Z.hasOwnProperty('startTimeUnixNano'))
                        if (typeof Z.startTimeUnixNano === 'number')
                          W.startTimeUnixNano =
                            Y.longs === String ? String(Z.startTimeUnixNano) : Z.startTimeUnixNano;
                        else
                          W.startTimeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.startTimeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.startTimeUnixNano.low >>> 0,
                                    Z.startTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.startTimeUnixNano;
                      if (Z.endTimeUnixNano != null && Z.hasOwnProperty('endTimeUnixNano'))
                        if (typeof Z.endTimeUnixNano === 'number')
                          W.endTimeUnixNano =
                            Y.longs === String ? String(Z.endTimeUnixNano) : Z.endTimeUnixNano;
                        else
                          W.endTimeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.endTimeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.endTimeUnixNano.low >>> 0,
                                    Z.endTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.endTimeUnixNano;
                      if (Z.attributes && Z.attributes.length) {
                        W.attributes = [];
                        for (var J = 0; J < Z.attributes.length; ++J)
                          W.attributes[J] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.attributes[J],
                            Y
                          );
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      )
                        W.droppedAttributesCount = Z.droppedAttributesCount;
                      if (Z.events && Z.events.length) {
                        W.events = [];
                        for (var J = 0; J < Z.events.length; ++J)
                          W.events[J] = Q1.opentelemetry.proto.trace.v1.Span.Event.toObject(
                            Z.events[J],
                            Y
                          );
                      }
                      if (Z.droppedEventsCount != null && Z.hasOwnProperty('droppedEventsCount'))
                        W.droppedEventsCount = Z.droppedEventsCount;
                      if (Z.links && Z.links.length) {
                        W.links = [];
                        for (var J = 0; J < Z.links.length; ++J)
                          W.links[J] = Q1.opentelemetry.proto.trace.v1.Span.Link.toObject(
                            Z.links[J],
                            Y
                          );
                      }
                      if (Z.droppedLinksCount != null && Z.hasOwnProperty('droppedLinksCount'))
                        W.droppedLinksCount = Z.droppedLinksCount;
                      if (Z.status != null && Z.hasOwnProperty('status'))
                        W.status = Q1.opentelemetry.proto.trace.v1.Status.toObject(Z.status, Y);
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.trace.v1.Span';
                    }),
                    (G.SpanKind = (function () {
                      var D = {},
                        Z = Object.create(D);
                      return (
                        (Z[(D[0] = 'SPAN_KIND_UNSPECIFIED')] = 0),
                        (Z[(D[1] = 'SPAN_KIND_INTERNAL')] = 1),
                        (Z[(D[2] = 'SPAN_KIND_SERVER')] = 2),
                        (Z[(D[3] = 'SPAN_KIND_CLIENT')] = 3),
                        (Z[(D[4] = 'SPAN_KIND_PRODUCER')] = 4),
                        (Z[(D[5] = 'SPAN_KIND_CONSUMER')] = 5),
                        Z
                      );
                    })()),
                    (G.Event = (function () {
                      function D(Z) {
                        if (((this.attributes = []), Z)) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.timeUnixNano = null),
                        (D.prototype.name = null),
                        (D.prototype.attributes = Z1.emptyArray),
                        (D.prototype.droppedAttributesCount = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.timeUnixNano != null &&
                            Object.hasOwnProperty.call(Y, 'timeUnixNano')
                          )
                            W.uint32(9).fixed64(Y.timeUnixNano);
                          if (Y.name != null && Object.hasOwnProperty.call(Y, 'name'))
                            W.uint32(18).string(Y.name);
                          if (Y.attributes != null && Y.attributes.length)
                            for (var F = 0; F < Y.attributes.length; ++F)
                              Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                                Y.attributes[F],
                                W.uint32(26).fork()
                              ).ldelim();
                          if (
                            Y.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(Y, 'droppedAttributesCount')
                          )
                            W.uint32(32).uint32(Y.droppedAttributesCount);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J = new Q1.opentelemetry.proto.trace.v1.Span.Event();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.timeUnixNano = Y.fixed64();
                                break;
                              }
                              case 2: {
                                J.name = Y.string();
                                break;
                              }
                              case 3: {
                                if (!(J.attributes && J.attributes.length)) J.attributes = [];
                                J.attributes.push(
                                  Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                                );
                                break;
                              }
                              case 4: {
                                J.droppedAttributesCount = Y.uint32();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano')) {
                            if (
                              !Z1.isInteger(Y.timeUnixNano) &&
                              !(
                                Y.timeUnixNano &&
                                Z1.isInteger(Y.timeUnixNano.low) &&
                                Z1.isInteger(Y.timeUnixNano.high)
                              )
                            )
                              return 'timeUnixNano: integer|Long expected';
                          }
                          if (Y.name != null && Y.hasOwnProperty('name')) {
                            if (!Z1.isString(Y.name)) return 'name: string expected';
                          }
                          if (Y.attributes != null && Y.hasOwnProperty('attributes')) {
                            if (!Array.isArray(Y.attributes)) return 'attributes: array expected';
                            for (var W = 0; W < Y.attributes.length; ++W) {
                              var F = Q1.opentelemetry.proto.common.v1.KeyValue.verify(
                                Y.attributes[W]
                              );
                              if (F) return 'attributes.' + F;
                            }
                          }
                          if (
                            Y.droppedAttributesCount != null &&
                            Y.hasOwnProperty('droppedAttributesCount')
                          ) {
                            if (!Z1.isInteger(Y.droppedAttributesCount))
                              return 'droppedAttributesCount: integer expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (Y instanceof Q1.opentelemetry.proto.trace.v1.Span.Event) return Y;
                          var W = new Q1.opentelemetry.proto.trace.v1.Span.Event();
                          if (Y.timeUnixNano != null) {
                            if (Z1.Long)
                              (W.timeUnixNano = Z1.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                            else if (typeof Y.timeUnixNano === 'string')
                              W.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                            else if (typeof Y.timeUnixNano === 'number')
                              W.timeUnixNano = Y.timeUnixNano;
                            else if (typeof Y.timeUnixNano === 'object')
                              W.timeUnixNano = new Z1.LongBits(
                                Y.timeUnixNano.low >>> 0,
                                Y.timeUnixNano.high >>> 0
                              ).toNumber();
                          }
                          if (Y.name != null) W.name = String(Y.name);
                          if (Y.attributes) {
                            if (!Array.isArray(Y.attributes))
                              throw TypeError(
                                '.opentelemetry.proto.trace.v1.Span.Event.attributes: array expected'
                              );
                            W.attributes = [];
                            for (var F = 0; F < Y.attributes.length; ++F) {
                              if (typeof Y.attributes[F] !== 'object')
                                throw TypeError(
                                  '.opentelemetry.proto.trace.v1.Span.Event.attributes: object expected'
                                );
                              W.attributes[F] =
                                Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                                  Y.attributes[F]
                                );
                            }
                          }
                          if (Y.droppedAttributesCount != null)
                            W.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.arrays || W.defaults) F.attributes = [];
                          if (W.defaults) {
                            if (Z1.Long) {
                              var J = new Z1.Long(0, 0, !1);
                              F.timeUnixNano =
                                W.longs === String
                                  ? J.toString()
                                  : W.longs === Number
                                    ? J.toNumber()
                                    : J;
                            } else F.timeUnixNano = W.longs === String ? '0' : 0;
                            ((F.name = ''), (F.droppedAttributesCount = 0));
                          }
                          if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano'))
                            if (typeof Y.timeUnixNano === 'number')
                              F.timeUnixNano =
                                W.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                            else
                              F.timeUnixNano =
                                W.longs === String
                                  ? Z1.Long.prototype.toString.call(Y.timeUnixNano)
                                  : W.longs === Number
                                    ? new Z1.LongBits(
                                        Y.timeUnixNano.low >>> 0,
                                        Y.timeUnixNano.high >>> 0
                                      ).toNumber()
                                    : Y.timeUnixNano;
                          if (Y.name != null && Y.hasOwnProperty('name')) F.name = Y.name;
                          if (Y.attributes && Y.attributes.length) {
                            F.attributes = [];
                            for (var C = 0; C < Y.attributes.length; ++C)
                              F.attributes[C] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                                Y.attributes[C],
                                W
                              );
                          }
                          if (
                            Y.droppedAttributesCount != null &&
                            Y.hasOwnProperty('droppedAttributesCount')
                          )
                            F.droppedAttributesCount = Y.droppedAttributesCount;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return Y + '/opentelemetry.proto.trace.v1.Span.Event';
                        }),
                        D
                      );
                    })()),
                    (G.Link = (function () {
                      function D(Z) {
                        if (((this.attributes = []), Z)) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.traceId = null),
                        (D.prototype.spanId = null),
                        (D.prototype.traceState = null),
                        (D.prototype.attributes = Z1.emptyArray),
                        (D.prototype.droppedAttributesCount = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (Y.traceId != null && Object.hasOwnProperty.call(Y, 'traceId'))
                            W.uint32(10).bytes(Y.traceId);
                          if (Y.spanId != null && Object.hasOwnProperty.call(Y, 'spanId'))
                            W.uint32(18).bytes(Y.spanId);
                          if (Y.traceState != null && Object.hasOwnProperty.call(Y, 'traceState'))
                            W.uint32(26).string(Y.traceState);
                          if (Y.attributes != null && Y.attributes.length)
                            for (var F = 0; F < Y.attributes.length; ++F)
                              Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                                Y.attributes[F],
                                W.uint32(34).fork()
                              ).ldelim();
                          if (
                            Y.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(Y, 'droppedAttributesCount')
                          )
                            W.uint32(40).uint32(Y.droppedAttributesCount);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J = new Q1.opentelemetry.proto.trace.v1.Span.Link();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.traceId = Y.bytes();
                                break;
                              }
                              case 2: {
                                J.spanId = Y.bytes();
                                break;
                              }
                              case 3: {
                                J.traceState = Y.string();
                                break;
                              }
                              case 4: {
                                if (!(J.attributes && J.attributes.length)) J.attributes = [];
                                J.attributes.push(
                                  Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                                );
                                break;
                              }
                              case 5: {
                                J.droppedAttributesCount = Y.uint32();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.traceId != null && Y.hasOwnProperty('traceId')) {
                            if (
                              !(
                                (Y.traceId && typeof Y.traceId.length === 'number') ||
                                Z1.isString(Y.traceId)
                              )
                            )
                              return 'traceId: buffer expected';
                          }
                          if (Y.spanId != null && Y.hasOwnProperty('spanId')) {
                            if (
                              !(
                                (Y.spanId && typeof Y.spanId.length === 'number') ||
                                Z1.isString(Y.spanId)
                              )
                            )
                              return 'spanId: buffer expected';
                          }
                          if (Y.traceState != null && Y.hasOwnProperty('traceState')) {
                            if (!Z1.isString(Y.traceState)) return 'traceState: string expected';
                          }
                          if (Y.attributes != null && Y.hasOwnProperty('attributes')) {
                            if (!Array.isArray(Y.attributes)) return 'attributes: array expected';
                            for (var W = 0; W < Y.attributes.length; ++W) {
                              var F = Q1.opentelemetry.proto.common.v1.KeyValue.verify(
                                Y.attributes[W]
                              );
                              if (F) return 'attributes.' + F;
                            }
                          }
                          if (
                            Y.droppedAttributesCount != null &&
                            Y.hasOwnProperty('droppedAttributesCount')
                          ) {
                            if (!Z1.isInteger(Y.droppedAttributesCount))
                              return 'droppedAttributesCount: integer expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (Y instanceof Q1.opentelemetry.proto.trace.v1.Span.Link) return Y;
                          var W = new Q1.opentelemetry.proto.trace.v1.Span.Link();
                          if (Y.traceId != null) {
                            if (typeof Y.traceId === 'string')
                              Z1.base64.decode(
                                Y.traceId,
                                (W.traceId = Z1.newBuffer(Z1.base64.length(Y.traceId))),
                                0
                              );
                            else if (Y.traceId.length >= 0) W.traceId = Y.traceId;
                          }
                          if (Y.spanId != null) {
                            if (typeof Y.spanId === 'string')
                              Z1.base64.decode(
                                Y.spanId,
                                (W.spanId = Z1.newBuffer(Z1.base64.length(Y.spanId))),
                                0
                              );
                            else if (Y.spanId.length >= 0) W.spanId = Y.spanId;
                          }
                          if (Y.traceState != null) W.traceState = String(Y.traceState);
                          if (Y.attributes) {
                            if (!Array.isArray(Y.attributes))
                              throw TypeError(
                                '.opentelemetry.proto.trace.v1.Span.Link.attributes: array expected'
                              );
                            W.attributes = [];
                            for (var F = 0; F < Y.attributes.length; ++F) {
                              if (typeof Y.attributes[F] !== 'object')
                                throw TypeError(
                                  '.opentelemetry.proto.trace.v1.Span.Link.attributes: object expected'
                                );
                              W.attributes[F] =
                                Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                                  Y.attributes[F]
                                );
                            }
                          }
                          if (Y.droppedAttributesCount != null)
                            W.droppedAttributesCount = Y.droppedAttributesCount >>> 0;
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.arrays || W.defaults) F.attributes = [];
                          if (W.defaults) {
                            if (W.bytes === String) F.traceId = '';
                            else if (((F.traceId = []), W.bytes !== Array))
                              F.traceId = Z1.newBuffer(F.traceId);
                            if (W.bytes === String) F.spanId = '';
                            else if (((F.spanId = []), W.bytes !== Array))
                              F.spanId = Z1.newBuffer(F.spanId);
                            ((F.traceState = ''), (F.droppedAttributesCount = 0));
                          }
                          if (Y.traceId != null && Y.hasOwnProperty('traceId'))
                            F.traceId =
                              W.bytes === String
                                ? Z1.base64.encode(Y.traceId, 0, Y.traceId.length)
                                : W.bytes === Array
                                  ? Array.prototype.slice.call(Y.traceId)
                                  : Y.traceId;
                          if (Y.spanId != null && Y.hasOwnProperty('spanId'))
                            F.spanId =
                              W.bytes === String
                                ? Z1.base64.encode(Y.spanId, 0, Y.spanId.length)
                                : W.bytes === Array
                                  ? Array.prototype.slice.call(Y.spanId)
                                  : Y.spanId;
                          if (Y.traceState != null && Y.hasOwnProperty('traceState'))
                            F.traceState = Y.traceState;
                          if (Y.attributes && Y.attributes.length) {
                            F.attributes = [];
                            for (var J = 0; J < Y.attributes.length; ++J)
                              F.attributes[J] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                                Y.attributes[J],
                                W
                              );
                          }
                          if (
                            Y.droppedAttributesCount != null &&
                            Y.hasOwnProperty('droppedAttributesCount')
                          )
                            F.droppedAttributesCount = Y.droppedAttributesCount;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return Y + '/opentelemetry.proto.trace.v1.Span.Link';
                        }),
                        D
                      );
                    })()),
                    G
                  );
                })()),
                (I.Status = (function () {
                  function G(D) {
                    if (D) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.message = null),
                    (G.prototype.code = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.message != null && Object.hasOwnProperty.call(Z, 'message'))
                        Y.uint32(18).string(Z.message);
                      if (Z.code != null && Object.hasOwnProperty.call(Z, 'code'))
                        Y.uint32(24).int32(Z.code);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.trace.v1.Status();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 2: {
                            F.message = Z.string();
                            break;
                          }
                          case 3: {
                            F.code = Z.int32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.message != null && Z.hasOwnProperty('message')) {
                        if (!Z1.isString(Z.message)) return 'message: string expected';
                      }
                      if (Z.code != null && Z.hasOwnProperty('code'))
                        switch (Z.code) {
                          default:
                            return 'code: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                            break;
                        }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.trace.v1.Status) return Z;
                      var Y = new Q1.opentelemetry.proto.trace.v1.Status();
                      if (Z.message != null) Y.message = String(Z.message);
                      switch (Z.code) {
                        default:
                          if (typeof Z.code === 'number') {
                            Y.code = Z.code;
                            break;
                          }
                          break;
                        case 'STATUS_CODE_UNSET':
                        case 0:
                          Y.code = 0;
                          break;
                        case 'STATUS_CODE_OK':
                        case 1:
                          Y.code = 1;
                          break;
                        case 'STATUS_CODE_ERROR':
                        case 2:
                          Y.code = 2;
                          break;
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.defaults)
                        ((W.message = ''), (W.code = Y.enums === String ? 'STATUS_CODE_UNSET' : 0));
                      if (Z.message != null && Z.hasOwnProperty('message')) W.message = Z.message;
                      if (Z.code != null && Z.hasOwnProperty('code'))
                        W.code =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.trace.v1.Status.StatusCode[Z.code] === void 0
                              ? Z.code
                              : Q1.opentelemetry.proto.trace.v1.Status.StatusCode[Z.code]
                            : Z.code;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.trace.v1.Status';
                    }),
                    (G.StatusCode = (function () {
                      var D = {},
                        Z = Object.create(D);
                      return (
                        (Z[(D[0] = 'STATUS_CODE_UNSET')] = 0),
                        (Z[(D[1] = 'STATUS_CODE_OK')] = 1),
                        (Z[(D[2] = 'STATUS_CODE_ERROR')] = 2),
                        Z
                      );
                    })()),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        (B.collector = (function () {
          var Q = {};
          return (
            (Q.trace = (function () {
              var I = {};
              return (
                (I.v1 = (function () {
                  var G = {};
                  return (
                    (G.TraceService = (function () {
                      function D(Z, Y, W) {
                        S9.rpc.Service.call(this, Z, Y, W);
                      }
                      return (
                        ((D.prototype = Object.create(S9.rpc.Service.prototype)).constructor = D),
                        (D.create = function Z(Y, W, F) {
                          return new this(Y, W, F);
                        }),
                        Object.defineProperty(
                          (D.prototype.export = function Z(Y, W) {
                            return this.rpcCall(
                              Z,
                              Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest,
                              Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
                              Y,
                              W
                            );
                          }),
                          'name',
                          { value: 'Export' }
                        ),
                        D
                      );
                    })()),
                    (G.ExportTraceServiceRequest = (function () {
                      function D(Z) {
                        if (((this.resourceSpans = []), Z)) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.resourceSpans = Z1.emptyArray),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (Y.resourceSpans != null && Y.resourceSpans.length)
                            for (var F = 0; F < Y.resourceSpans.length; ++F)
                              Q1.opentelemetry.proto.trace.v1.ResourceSpans.encode(
                                Y.resourceSpans[F],
                                W.uint32(10).fork()
                              ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                if (!(J.resourceSpans && J.resourceSpans.length))
                                  J.resourceSpans = [];
                                J.resourceSpans.push(
                                  Q1.opentelemetry.proto.trace.v1.ResourceSpans.decode(
                                    Y,
                                    Y.uint32()
                                  )
                                );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.resourceSpans != null && Y.hasOwnProperty('resourceSpans')) {
                            if (!Array.isArray(Y.resourceSpans))
                              return 'resourceSpans: array expected';
                            for (var W = 0; W < Y.resourceSpans.length; ++W) {
                              var F = Q1.opentelemetry.proto.trace.v1.ResourceSpans.verify(
                                Y.resourceSpans[W]
                              );
                              if (F) return 'resourceSpans.' + F;
                            }
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                          if (Y.resourceSpans) {
                            if (!Array.isArray(Y.resourceSpans))
                              throw TypeError(
                                '.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected'
                              );
                            W.resourceSpans = [];
                            for (var F = 0; F < Y.resourceSpans.length; ++F) {
                              if (typeof Y.resourceSpans[F] !== 'object')
                                throw TypeError(
                                  '.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected'
                                );
                              W.resourceSpans[F] =
                                Q1.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(
                                  Y.resourceSpans[F]
                                );
                            }
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.arrays || W.defaults) F.resourceSpans = [];
                          if (Y.resourceSpans && Y.resourceSpans.length) {
                            F.resourceSpans = [];
                            for (var J = 0; J < Y.resourceSpans.length; ++J)
                              F.resourceSpans[J] =
                                Q1.opentelemetry.proto.trace.v1.ResourceSpans.toObject(
                                  Y.resourceSpans[J],
                                  W
                                );
                          }
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportTraceServiceResponse = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.partialSuccess = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.partialSuccess != null &&
                            Object.hasOwnProperty.call(Y, 'partialSuccess')
                          )
                            Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(
                              Y.partialSuccess,
                              W.uint32(10).fork()
                            ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.partialSuccess =
                                  Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(
                                    Y,
                                    Y.uint32()
                                  );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess')) {
                            var W =
                              Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(
                                Y.partialSuccess
                              );
                            if (W) return 'partialSuccess.' + W;
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                          if (Y.partialSuccess != null) {
                            if (typeof Y.partialSuccess !== 'object')
                              throw TypeError(
                                '.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected'
                              );
                            W.partialSuccess =
                              Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(
                                Y.partialSuccess
                              );
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) F.partialSuccess = null;
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess'))
                            F.partialSuccess =
                              Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(
                                Y.partialSuccess,
                                W
                              );
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportTracePartialSuccess = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.rejectedSpans = null),
                        (D.prototype.errorMessage = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.rejectedSpans != null &&
                            Object.hasOwnProperty.call(Y, 'rejectedSpans')
                          )
                            W.uint32(8).int64(Y.rejectedSpans);
                          if (
                            Y.errorMessage != null &&
                            Object.hasOwnProperty.call(Y, 'errorMessage')
                          )
                            W.uint32(18).string(Y.errorMessage);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.rejectedSpans = Y.int64();
                                break;
                              }
                              case 2: {
                                J.errorMessage = Y.string();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.rejectedSpans != null && Y.hasOwnProperty('rejectedSpans')) {
                            if (
                              !Z1.isInteger(Y.rejectedSpans) &&
                              !(
                                Y.rejectedSpans &&
                                Z1.isInteger(Y.rejectedSpans.low) &&
                                Z1.isInteger(Y.rejectedSpans.high)
                              )
                            )
                              return 'rejectedSpans: integer|Long expected';
                          }
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage')) {
                            if (!Z1.isString(Y.errorMessage))
                              return 'errorMessage: string expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                          if (Y.rejectedSpans != null) {
                            if (Z1.Long)
                              (W.rejectedSpans = Z1.Long.fromValue(Y.rejectedSpans)).unsigned = !1;
                            else if (typeof Y.rejectedSpans === 'string')
                              W.rejectedSpans = parseInt(Y.rejectedSpans, 10);
                            else if (typeof Y.rejectedSpans === 'number')
                              W.rejectedSpans = Y.rejectedSpans;
                            else if (typeof Y.rejectedSpans === 'object')
                              W.rejectedSpans = new Z1.LongBits(
                                Y.rejectedSpans.low >>> 0,
                                Y.rejectedSpans.high >>> 0
                              ).toNumber();
                          }
                          if (Y.errorMessage != null) W.errorMessage = String(Y.errorMessage);
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) {
                            if (Z1.Long) {
                              var J = new Z1.Long(0, 0, !1);
                              F.rejectedSpans =
                                W.longs === String
                                  ? J.toString()
                                  : W.longs === Number
                                    ? J.toNumber()
                                    : J;
                            } else F.rejectedSpans = W.longs === String ? '0' : 0;
                            F.errorMessage = '';
                          }
                          if (Y.rejectedSpans != null && Y.hasOwnProperty('rejectedSpans'))
                            if (typeof Y.rejectedSpans === 'number')
                              F.rejectedSpans =
                                W.longs === String ? String(Y.rejectedSpans) : Y.rejectedSpans;
                            else
                              F.rejectedSpans =
                                W.longs === String
                                  ? Z1.Long.prototype.toString.call(Y.rejectedSpans)
                                  : W.longs === Number
                                    ? new Z1.LongBits(
                                        Y.rejectedSpans.low >>> 0,
                                        Y.rejectedSpans.high >>> 0
                                      ).toNumber()
                                    : Y.rejectedSpans;
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage'))
                            F.errorMessage = Y.errorMessage;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess'
                          );
                        }),
                        D
                      );
                    })()),
                    G
                  );
                })()),
                I
              );
            })()),
            (Q.metrics = (function () {
              var I = {};
              return (
                (I.v1 = (function () {
                  var G = {};
                  return (
                    (G.MetricsService = (function () {
                      function D(Z, Y, W) {
                        S9.rpc.Service.call(this, Z, Y, W);
                      }
                      return (
                        ((D.prototype = Object.create(S9.rpc.Service.prototype)).constructor = D),
                        (D.create = function Z(Y, W, F) {
                          return new this(Y, W, F);
                        }),
                        Object.defineProperty(
                          (D.prototype.export = function Z(Y, W) {
                            return this.rpcCall(
                              Z,
                              Q1.opentelemetry.proto.collector.metrics.v1
                                .ExportMetricsServiceRequest,
                              Q1.opentelemetry.proto.collector.metrics.v1
                                .ExportMetricsServiceResponse,
                              Y,
                              W
                            );
                          }),
                          'name',
                          { value: 'Export' }
                        ),
                        D
                      );
                    })()),
                    (G.ExportMetricsServiceRequest = (function () {
                      function D(Z) {
                        if (((this.resourceMetrics = []), Z)) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.resourceMetrics = Z1.emptyArray),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (Y.resourceMetrics != null && Y.resourceMetrics.length)
                            for (var F = 0; F < Y.resourceMetrics.length; ++F)
                              Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(
                                Y.resourceMetrics[F],
                                W.uint32(10).fork()
                              ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                if (!(J.resourceMetrics && J.resourceMetrics.length))
                                  J.resourceMetrics = [];
                                J.resourceMetrics.push(
                                  Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(
                                    Y,
                                    Y.uint32()
                                  )
                                );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.resourceMetrics != null && Y.hasOwnProperty('resourceMetrics')) {
                            if (!Array.isArray(Y.resourceMetrics))
                              return 'resourceMetrics: array expected';
                            for (var W = 0; W < Y.resourceMetrics.length; ++W) {
                              var F = Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(
                                Y.resourceMetrics[W]
                              );
                              if (F) return 'resourceMetrics.' + F;
                            }
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                          if (Y.resourceMetrics) {
                            if (!Array.isArray(Y.resourceMetrics))
                              throw TypeError(
                                '.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected'
                              );
                            W.resourceMetrics = [];
                            for (var F = 0; F < Y.resourceMetrics.length; ++F) {
                              if (typeof Y.resourceMetrics[F] !== 'object')
                                throw TypeError(
                                  '.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected'
                                );
                              W.resourceMetrics[F] =
                                Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(
                                  Y.resourceMetrics[F]
                                );
                            }
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.arrays || W.defaults) F.resourceMetrics = [];
                          if (Y.resourceMetrics && Y.resourceMetrics.length) {
                            F.resourceMetrics = [];
                            for (var J = 0; J < Y.resourceMetrics.length; ++J)
                              F.resourceMetrics[J] =
                                Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(
                                  Y.resourceMetrics[J],
                                  W
                                );
                          }
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y +
                            '/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportMetricsServiceResponse = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.partialSuccess = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.partialSuccess != null &&
                            Object.hasOwnProperty.call(Y, 'partialSuccess')
                          )
                            Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(
                              Y.partialSuccess,
                              W.uint32(10).fork()
                            ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.partialSuccess =
                                  Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(
                                    Y,
                                    Y.uint32()
                                  );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess')) {
                            var W =
                              Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(
                                Y.partialSuccess
                              );
                            if (W) return 'partialSuccess.' + W;
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                          if (Y.partialSuccess != null) {
                            if (typeof Y.partialSuccess !== 'object')
                              throw TypeError(
                                '.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected'
                              );
                            W.partialSuccess =
                              Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(
                                Y.partialSuccess
                              );
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) F.partialSuccess = null;
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess'))
                            F.partialSuccess =
                              Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(
                                Y.partialSuccess,
                                W
                              );
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y +
                            '/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportMetricsPartialSuccess = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.rejectedDataPoints = null),
                        (D.prototype.errorMessage = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.rejectedDataPoints != null &&
                            Object.hasOwnProperty.call(Y, 'rejectedDataPoints')
                          )
                            W.uint32(8).int64(Y.rejectedDataPoints);
                          if (
                            Y.errorMessage != null &&
                            Object.hasOwnProperty.call(Y, 'errorMessage')
                          )
                            W.uint32(18).string(Y.errorMessage);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.rejectedDataPoints = Y.int64();
                                break;
                              }
                              case 2: {
                                J.errorMessage = Y.string();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (
                            Y.rejectedDataPoints != null &&
                            Y.hasOwnProperty('rejectedDataPoints')
                          ) {
                            if (
                              !Z1.isInteger(Y.rejectedDataPoints) &&
                              !(
                                Y.rejectedDataPoints &&
                                Z1.isInteger(Y.rejectedDataPoints.low) &&
                                Z1.isInteger(Y.rejectedDataPoints.high)
                              )
                            )
                              return 'rejectedDataPoints: integer|Long expected';
                          }
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage')) {
                            if (!Z1.isString(Y.errorMessage))
                              return 'errorMessage: string expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                          if (Y.rejectedDataPoints != null) {
                            if (Z1.Long)
                              (W.rejectedDataPoints = Z1.Long.fromValue(
                                Y.rejectedDataPoints
                              )).unsigned = !1;
                            else if (typeof Y.rejectedDataPoints === 'string')
                              W.rejectedDataPoints = parseInt(Y.rejectedDataPoints, 10);
                            else if (typeof Y.rejectedDataPoints === 'number')
                              W.rejectedDataPoints = Y.rejectedDataPoints;
                            else if (typeof Y.rejectedDataPoints === 'object')
                              W.rejectedDataPoints = new Z1.LongBits(
                                Y.rejectedDataPoints.low >>> 0,
                                Y.rejectedDataPoints.high >>> 0
                              ).toNumber();
                          }
                          if (Y.errorMessage != null) W.errorMessage = String(Y.errorMessage);
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) {
                            if (Z1.Long) {
                              var J = new Z1.Long(0, 0, !1);
                              F.rejectedDataPoints =
                                W.longs === String
                                  ? J.toString()
                                  : W.longs === Number
                                    ? J.toNumber()
                                    : J;
                            } else F.rejectedDataPoints = W.longs === String ? '0' : 0;
                            F.errorMessage = '';
                          }
                          if (
                            Y.rejectedDataPoints != null &&
                            Y.hasOwnProperty('rejectedDataPoints')
                          )
                            if (typeof Y.rejectedDataPoints === 'number')
                              F.rejectedDataPoints =
                                W.longs === String
                                  ? String(Y.rejectedDataPoints)
                                  : Y.rejectedDataPoints;
                            else
                              F.rejectedDataPoints =
                                W.longs === String
                                  ? Z1.Long.prototype.toString.call(Y.rejectedDataPoints)
                                  : W.longs === Number
                                    ? new Z1.LongBits(
                                        Y.rejectedDataPoints.low >>> 0,
                                        Y.rejectedDataPoints.high >>> 0
                                      ).toNumber()
                                    : Y.rejectedDataPoints;
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage'))
                            F.errorMessage = Y.errorMessage;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y +
                            '/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess'
                          );
                        }),
                        D
                      );
                    })()),
                    G
                  );
                })()),
                I
              );
            })()),
            (Q.logs = (function () {
              var I = {};
              return (
                (I.v1 = (function () {
                  var G = {};
                  return (
                    (G.LogsService = (function () {
                      function D(Z, Y, W) {
                        S9.rpc.Service.call(this, Z, Y, W);
                      }
                      return (
                        ((D.prototype = Object.create(S9.rpc.Service.prototype)).constructor = D),
                        (D.create = function Z(Y, W, F) {
                          return new this(Y, W, F);
                        }),
                        Object.defineProperty(
                          (D.prototype.export = function Z(Y, W) {
                            return this.rpcCall(
                              Z,
                              Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest,
                              Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
                              Y,
                              W
                            );
                          }),
                          'name',
                          { value: 'Export' }
                        ),
                        D
                      );
                    })()),
                    (G.ExportLogsServiceRequest = (function () {
                      function D(Z) {
                        if (((this.resourceLogs = []), Z)) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.resourceLogs = Z1.emptyArray),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (Y.resourceLogs != null && Y.resourceLogs.length)
                            for (var F = 0; F < Y.resourceLogs.length; ++F)
                              Q1.opentelemetry.proto.logs.v1.ResourceLogs.encode(
                                Y.resourceLogs[F],
                                W.uint32(10).fork()
                              ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                if (!(J.resourceLogs && J.resourceLogs.length)) J.resourceLogs = [];
                                J.resourceLogs.push(
                                  Q1.opentelemetry.proto.logs.v1.ResourceLogs.decode(Y, Y.uint32())
                                );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.resourceLogs != null && Y.hasOwnProperty('resourceLogs')) {
                            if (!Array.isArray(Y.resourceLogs))
                              return 'resourceLogs: array expected';
                            for (var W = 0; W < Y.resourceLogs.length; ++W) {
                              var F = Q1.opentelemetry.proto.logs.v1.ResourceLogs.verify(
                                Y.resourceLogs[W]
                              );
                              if (F) return 'resourceLogs.' + F;
                            }
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                          if (Y.resourceLogs) {
                            if (!Array.isArray(Y.resourceLogs))
                              throw TypeError(
                                '.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected'
                              );
                            W.resourceLogs = [];
                            for (var F = 0; F < Y.resourceLogs.length; ++F) {
                              if (typeof Y.resourceLogs[F] !== 'object')
                                throw TypeError(
                                  '.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected'
                                );
                              W.resourceLogs[F] =
                                Q1.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(
                                  Y.resourceLogs[F]
                                );
                            }
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.arrays || W.defaults) F.resourceLogs = [];
                          if (Y.resourceLogs && Y.resourceLogs.length) {
                            F.resourceLogs = [];
                            for (var J = 0; J < Y.resourceLogs.length; ++J)
                              F.resourceLogs[J] =
                                Q1.opentelemetry.proto.logs.v1.ResourceLogs.toObject(
                                  Y.resourceLogs[J],
                                  W
                                );
                          }
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportLogsServiceResponse = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.partialSuccess = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.partialSuccess != null &&
                            Object.hasOwnProperty.call(Y, 'partialSuccess')
                          )
                            Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(
                              Y.partialSuccess,
                              W.uint32(10).fork()
                            ).ldelim();
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.partialSuccess =
                                  Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(
                                    Y,
                                    Y.uint32()
                                  );
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess')) {
                            var W =
                              Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(
                                Y.partialSuccess
                              );
                            if (W) return 'partialSuccess.' + W;
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                          if (Y.partialSuccess != null) {
                            if (typeof Y.partialSuccess !== 'object')
                              throw TypeError(
                                '.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected'
                              );
                            W.partialSuccess =
                              Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(
                                Y.partialSuccess
                              );
                          }
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) F.partialSuccess = null;
                          if (Y.partialSuccess != null && Y.hasOwnProperty('partialSuccess'))
                            F.partialSuccess =
                              Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(
                                Y.partialSuccess,
                                W
                              );
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse'
                          );
                        }),
                        D
                      );
                    })()),
                    (G.ExportLogsPartialSuccess = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.rejectedLogRecords = null),
                        (D.prototype.errorMessage = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (
                            Y.rejectedLogRecords != null &&
                            Object.hasOwnProperty.call(Y, 'rejectedLogRecords')
                          )
                            W.uint32(8).int64(Y.rejectedLogRecords);
                          if (
                            Y.errorMessage != null &&
                            Object.hasOwnProperty.call(Y, 'errorMessage')
                          )
                            W.uint32(18).string(Y.errorMessage);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.rejectedLogRecords = Y.int64();
                                break;
                              }
                              case 2: {
                                J.errorMessage = Y.string();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (
                            Y.rejectedLogRecords != null &&
                            Y.hasOwnProperty('rejectedLogRecords')
                          ) {
                            if (
                              !Z1.isInteger(Y.rejectedLogRecords) &&
                              !(
                                Y.rejectedLogRecords &&
                                Z1.isInteger(Y.rejectedLogRecords.low) &&
                                Z1.isInteger(Y.rejectedLogRecords.high)
                              )
                            )
                              return 'rejectedLogRecords: integer|Long expected';
                          }
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage')) {
                            if (!Z1.isString(Y.errorMessage))
                              return 'errorMessage: string expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                          if (Y.rejectedLogRecords != null) {
                            if (Z1.Long)
                              (W.rejectedLogRecords = Z1.Long.fromValue(
                                Y.rejectedLogRecords
                              )).unsigned = !1;
                            else if (typeof Y.rejectedLogRecords === 'string')
                              W.rejectedLogRecords = parseInt(Y.rejectedLogRecords, 10);
                            else if (typeof Y.rejectedLogRecords === 'number')
                              W.rejectedLogRecords = Y.rejectedLogRecords;
                            else if (typeof Y.rejectedLogRecords === 'object')
                              W.rejectedLogRecords = new Z1.LongBits(
                                Y.rejectedLogRecords.low >>> 0,
                                Y.rejectedLogRecords.high >>> 0
                              ).toNumber();
                          }
                          if (Y.errorMessage != null) W.errorMessage = String(Y.errorMessage);
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) {
                            if (Z1.Long) {
                              var J = new Z1.Long(0, 0, !1);
                              F.rejectedLogRecords =
                                W.longs === String
                                  ? J.toString()
                                  : W.longs === Number
                                    ? J.toNumber()
                                    : J;
                            } else F.rejectedLogRecords = W.longs === String ? '0' : 0;
                            F.errorMessage = '';
                          }
                          if (
                            Y.rejectedLogRecords != null &&
                            Y.hasOwnProperty('rejectedLogRecords')
                          )
                            if (typeof Y.rejectedLogRecords === 'number')
                              F.rejectedLogRecords =
                                W.longs === String
                                  ? String(Y.rejectedLogRecords)
                                  : Y.rejectedLogRecords;
                            else
                              F.rejectedLogRecords =
                                W.longs === String
                                  ? Z1.Long.prototype.toString.call(Y.rejectedLogRecords)
                                  : W.longs === Number
                                    ? new Z1.LongBits(
                                        Y.rejectedLogRecords.low >>> 0,
                                        Y.rejectedLogRecords.high >>> 0
                                      ).toNumber()
                                    : Y.rejectedLogRecords;
                          if (Y.errorMessage != null && Y.hasOwnProperty('errorMessage'))
                            F.errorMessage = Y.errorMessage;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess'
                          );
                        }),
                        D
                      );
                    })()),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        (B.metrics = (function () {
          var Q = {};
          return (
            (Q.v1 = (function () {
              var I = {};
              return (
                (I.MetricsData = (function () {
                  function G(D) {
                    if (((this.resourceMetrics = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resourceMetrics = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resourceMetrics != null && Z.resourceMetrics.length)
                        for (var W = 0; W < Z.resourceMetrics.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(
                            Z.resourceMetrics[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.MetricsData();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.resourceMetrics && F.resourceMetrics.length))
                              F.resourceMetrics = [];
                            F.resourceMetrics.push(
                              Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resourceMetrics != null && Z.hasOwnProperty('resourceMetrics')) {
                        if (!Array.isArray(Z.resourceMetrics))
                          return 'resourceMetrics: array expected';
                        for (var Y = 0; Y < Z.resourceMetrics.length; ++Y) {
                          var W = Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(
                            Z.resourceMetrics[Y]
                          );
                          if (W) return 'resourceMetrics.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.MetricsData) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.MetricsData();
                      if (Z.resourceMetrics) {
                        if (!Array.isArray(Z.resourceMetrics))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected'
                          );
                        Y.resourceMetrics = [];
                        for (var W = 0; W < Z.resourceMetrics.length; ++W) {
                          if (typeof Z.resourceMetrics[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected'
                            );
                          Y.resourceMetrics[W] =
                            Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(
                              Z.resourceMetrics[W]
                            );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.resourceMetrics = [];
                      if (Z.resourceMetrics && Z.resourceMetrics.length) {
                        W.resourceMetrics = [];
                        for (var F = 0; F < Z.resourceMetrics.length; ++F)
                          W.resourceMetrics[F] =
                            Q1.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(
                              Z.resourceMetrics[F],
                              Y
                            );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.MetricsData';
                    }),
                    G
                  );
                })()),
                (I.ResourceMetrics = (function () {
                  function G(D) {
                    if (((this.scopeMetrics = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resource = null),
                    (G.prototype.scopeMetrics = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resource != null && Object.hasOwnProperty.call(Z, 'resource'))
                        Q1.opentelemetry.proto.resource.v1.Resource.encode(
                          Z.resource,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.scopeMetrics != null && Z.scopeMetrics.length)
                        for (var W = 0; W < Z.scopeMetrics.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(
                            Z.scopeMetrics[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.ResourceMetrics();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.resource = Q1.opentelemetry.proto.resource.v1.Resource.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.scopeMetrics && F.scopeMetrics.length)) F.scopeMetrics = [];
                            F.scopeMetrics.push(
                              Q1.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resource != null && Z.hasOwnProperty('resource')) {
                        var Y = Q1.opentelemetry.proto.resource.v1.Resource.verify(Z.resource);
                        if (Y) return 'resource.' + Y;
                      }
                      if (Z.scopeMetrics != null && Z.hasOwnProperty('scopeMetrics')) {
                        if (!Array.isArray(Z.scopeMetrics)) return 'scopeMetrics: array expected';
                        for (var W = 0; W < Z.scopeMetrics.length; ++W) {
                          var Y = Q1.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(
                            Z.scopeMetrics[W]
                          );
                          if (Y) return 'scopeMetrics.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.ResourceMetrics) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.ResourceMetrics();
                      if (Z.resource != null) {
                        if (typeof Z.resource !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected'
                          );
                        Y.resource = Q1.opentelemetry.proto.resource.v1.Resource.fromObject(
                          Z.resource
                        );
                      }
                      if (Z.scopeMetrics) {
                        if (!Array.isArray(Z.scopeMetrics))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected'
                          );
                        Y.scopeMetrics = [];
                        for (var W = 0; W < Z.scopeMetrics.length; ++W) {
                          if (typeof Z.scopeMetrics[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected'
                            );
                          Y.scopeMetrics[W] =
                            Q1.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(
                              Z.scopeMetrics[W]
                            );
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.scopeMetrics = [];
                      if (Y.defaults) ((W.resource = null), (W.schemaUrl = ''));
                      if (Z.resource != null && Z.hasOwnProperty('resource'))
                        W.resource = Q1.opentelemetry.proto.resource.v1.Resource.toObject(
                          Z.resource,
                          Y
                        );
                      if (Z.scopeMetrics && Z.scopeMetrics.length) {
                        W.scopeMetrics = [];
                        for (var F = 0; F < Z.scopeMetrics.length; ++F)
                          W.scopeMetrics[F] =
                            Q1.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(
                              Z.scopeMetrics[F],
                              Y
                            );
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.ResourceMetrics';
                    }),
                    G
                  );
                })()),
                (I.ScopeMetrics = (function () {
                  function G(D) {
                    if (((this.metrics = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.scope = null),
                    (G.prototype.metrics = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.scope != null && Object.hasOwnProperty.call(Z, 'scope'))
                        Q1.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                          Z.scope,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.metrics != null && Z.metrics.length)
                        for (var W = 0; W < Z.metrics.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.Metric.encode(
                            Z.metrics[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.ScopeMetrics();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.metrics && F.metrics.length)) F.metrics = [];
                            F.metrics.push(
                              Q1.opentelemetry.proto.metrics.v1.Metric.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.scope != null && Z.hasOwnProperty('scope')) {
                        var Y = Q1.opentelemetry.proto.common.v1.InstrumentationScope.verify(
                          Z.scope
                        );
                        if (Y) return 'scope.' + Y;
                      }
                      if (Z.metrics != null && Z.hasOwnProperty('metrics')) {
                        if (!Array.isArray(Z.metrics)) return 'metrics: array expected';
                        for (var W = 0; W < Z.metrics.length; ++W) {
                          var Y = Q1.opentelemetry.proto.metrics.v1.Metric.verify(Z.metrics[W]);
                          if (Y) return 'metrics.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.ScopeMetrics) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.ScopeMetrics();
                      if (Z.scope != null) {
                        if (typeof Z.scope !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected'
                          );
                        Y.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(
                          Z.scope
                        );
                      }
                      if (Z.metrics) {
                        if (!Array.isArray(Z.metrics))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected'
                          );
                        Y.metrics = [];
                        for (var W = 0; W < Z.metrics.length; ++W) {
                          if (typeof Z.metrics[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected'
                            );
                          Y.metrics[W] = Q1.opentelemetry.proto.metrics.v1.Metric.fromObject(
                            Z.metrics[W]
                          );
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.metrics = [];
                      if (Y.defaults) ((W.scope = null), (W.schemaUrl = ''));
                      if (Z.scope != null && Z.hasOwnProperty('scope'))
                        W.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.toObject(
                          Z.scope,
                          Y
                        );
                      if (Z.metrics && Z.metrics.length) {
                        W.metrics = [];
                        for (var F = 0; F < Z.metrics.length; ++F)
                          W.metrics[F] = Q1.opentelemetry.proto.metrics.v1.Metric.toObject(
                            Z.metrics[F],
                            Y
                          );
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.ScopeMetrics';
                    }),
                    G
                  );
                })()),
                (I.Metric = (function () {
                  function G(Z) {
                    if (Z) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.name = null),
                    (G.prototype.description = null),
                    (G.prototype.unit = null),
                    (G.prototype.gauge = null),
                    (G.prototype.sum = null),
                    (G.prototype.histogram = null),
                    (G.prototype.exponentialHistogram = null),
                    (G.prototype.summary = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, 'data', {
                      get: Z1.oneOfGetter(
                        (D = ['gauge', 'sum', 'histogram', 'exponentialHistogram', 'summary'])
                      ),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (Y.name != null && Object.hasOwnProperty.call(Y, 'name'))
                        W.uint32(10).string(Y.name);
                      if (Y.description != null && Object.hasOwnProperty.call(Y, 'description'))
                        W.uint32(18).string(Y.description);
                      if (Y.unit != null && Object.hasOwnProperty.call(Y, 'unit'))
                        W.uint32(26).string(Y.unit);
                      if (Y.gauge != null && Object.hasOwnProperty.call(Y, 'gauge'))
                        Q1.opentelemetry.proto.metrics.v1.Gauge.encode(
                          Y.gauge,
                          W.uint32(42).fork()
                        ).ldelim();
                      if (Y.sum != null && Object.hasOwnProperty.call(Y, 'sum'))
                        Q1.opentelemetry.proto.metrics.v1.Sum.encode(
                          Y.sum,
                          W.uint32(58).fork()
                        ).ldelim();
                      if (Y.histogram != null && Object.hasOwnProperty.call(Y, 'histogram'))
                        Q1.opentelemetry.proto.metrics.v1.Histogram.encode(
                          Y.histogram,
                          W.uint32(74).fork()
                        ).ldelim();
                      if (
                        Y.exponentialHistogram != null &&
                        Object.hasOwnProperty.call(Y, 'exponentialHistogram')
                      )
                        Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(
                          Y.exponentialHistogram,
                          W.uint32(82).fork()
                        ).ldelim();
                      if (Y.summary != null && Object.hasOwnProperty.call(Y, 'summary'))
                        Q1.opentelemetry.proto.metrics.v1.Summary.encode(
                          Y.summary,
                          W.uint32(90).fork()
                        ).ldelim();
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.metrics.v1.Metric();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 1: {
                            J.name = Y.string();
                            break;
                          }
                          case 2: {
                            J.description = Y.string();
                            break;
                          }
                          case 3: {
                            J.unit = Y.string();
                            break;
                          }
                          case 5: {
                            J.gauge = Q1.opentelemetry.proto.metrics.v1.Gauge.decode(Y, Y.uint32());
                            break;
                          }
                          case 7: {
                            J.sum = Q1.opentelemetry.proto.metrics.v1.Sum.decode(Y, Y.uint32());
                            break;
                          }
                          case 9: {
                            J.histogram = Q1.opentelemetry.proto.metrics.v1.Histogram.decode(
                              Y,
                              Y.uint32()
                            );
                            break;
                          }
                          case 10: {
                            J.exponentialHistogram =
                              Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(
                                Y,
                                Y.uint32()
                              );
                            break;
                          }
                          case 11: {
                            J.summary = Q1.opentelemetry.proto.metrics.v1.Summary.decode(
                              Y,
                              Y.uint32()
                            );
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.name != null && Y.hasOwnProperty('name')) {
                        if (!Z1.isString(Y.name)) return 'name: string expected';
                      }
                      if (Y.description != null && Y.hasOwnProperty('description')) {
                        if (!Z1.isString(Y.description)) return 'description: string expected';
                      }
                      if (Y.unit != null && Y.hasOwnProperty('unit')) {
                        if (!Z1.isString(Y.unit)) return 'unit: string expected';
                      }
                      if (Y.gauge != null && Y.hasOwnProperty('gauge')) {
                        W.data = 1;
                        {
                          var F = Q1.opentelemetry.proto.metrics.v1.Gauge.verify(Y.gauge);
                          if (F) return 'gauge.' + F;
                        }
                      }
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (W.data === 1) return 'data: multiple values';
                        W.data = 1;
                        {
                          var F = Q1.opentelemetry.proto.metrics.v1.Sum.verify(Y.sum);
                          if (F) return 'sum.' + F;
                        }
                      }
                      if (Y.histogram != null && Y.hasOwnProperty('histogram')) {
                        if (W.data === 1) return 'data: multiple values';
                        W.data = 1;
                        {
                          var F = Q1.opentelemetry.proto.metrics.v1.Histogram.verify(Y.histogram);
                          if (F) return 'histogram.' + F;
                        }
                      }
                      if (
                        Y.exponentialHistogram != null &&
                        Y.hasOwnProperty('exponentialHistogram')
                      ) {
                        if (W.data === 1) return 'data: multiple values';
                        W.data = 1;
                        {
                          var F = Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(
                            Y.exponentialHistogram
                          );
                          if (F) return 'exponentialHistogram.' + F;
                        }
                      }
                      if (Y.summary != null && Y.hasOwnProperty('summary')) {
                        if (W.data === 1) return 'data: multiple values';
                        W.data = 1;
                        {
                          var F = Q1.opentelemetry.proto.metrics.v1.Summary.verify(Y.summary);
                          if (F) return 'summary.' + F;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (Y instanceof Q1.opentelemetry.proto.metrics.v1.Metric) return Y;
                      var W = new Q1.opentelemetry.proto.metrics.v1.Metric();
                      if (Y.name != null) W.name = String(Y.name);
                      if (Y.description != null) W.description = String(Y.description);
                      if (Y.unit != null) W.unit = String(Y.unit);
                      if (Y.gauge != null) {
                        if (typeof Y.gauge !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Metric.gauge: object expected'
                          );
                        W.gauge = Q1.opentelemetry.proto.metrics.v1.Gauge.fromObject(Y.gauge);
                      }
                      if (Y.sum != null) {
                        if (typeof Y.sum !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Metric.sum: object expected'
                          );
                        W.sum = Q1.opentelemetry.proto.metrics.v1.Sum.fromObject(Y.sum);
                      }
                      if (Y.histogram != null) {
                        if (typeof Y.histogram !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Metric.histogram: object expected'
                          );
                        W.histogram = Q1.opentelemetry.proto.metrics.v1.Histogram.fromObject(
                          Y.histogram
                        );
                      }
                      if (Y.exponentialHistogram != null) {
                        if (typeof Y.exponentialHistogram !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected'
                          );
                        W.exponentialHistogram =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(
                            Y.exponentialHistogram
                          );
                      }
                      if (Y.summary != null) {
                        if (typeof Y.summary !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Metric.summary: object expected'
                          );
                        W.summary = Q1.opentelemetry.proto.metrics.v1.Summary.fromObject(Y.summary);
                      }
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (W.defaults) ((F.name = ''), (F.description = ''), (F.unit = ''));
                      if (Y.name != null && Y.hasOwnProperty('name')) F.name = Y.name;
                      if (Y.description != null && Y.hasOwnProperty('description'))
                        F.description = Y.description;
                      if (Y.unit != null && Y.hasOwnProperty('unit')) F.unit = Y.unit;
                      if (Y.gauge != null && Y.hasOwnProperty('gauge')) {
                        if (
                          ((F.gauge = Q1.opentelemetry.proto.metrics.v1.Gauge.toObject(Y.gauge, W)),
                          W.oneofs)
                        )
                          F.data = 'gauge';
                      }
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (
                          ((F.sum = Q1.opentelemetry.proto.metrics.v1.Sum.toObject(Y.sum, W)),
                          W.oneofs)
                        )
                          F.data = 'sum';
                      }
                      if (Y.histogram != null && Y.hasOwnProperty('histogram')) {
                        if (
                          ((F.histogram = Q1.opentelemetry.proto.metrics.v1.Histogram.toObject(
                            Y.histogram,
                            W
                          )),
                          W.oneofs)
                        )
                          F.data = 'histogram';
                      }
                      if (
                        Y.exponentialHistogram != null &&
                        Y.hasOwnProperty('exponentialHistogram')
                      ) {
                        if (
                          ((F.exponentialHistogram =
                            Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(
                              Y.exponentialHistogram,
                              W
                            )),
                          W.oneofs)
                        )
                          F.data = 'exponentialHistogram';
                      }
                      if (Y.summary != null && Y.hasOwnProperty('summary')) {
                        if (
                          ((F.summary = Q1.opentelemetry.proto.metrics.v1.Summary.toObject(
                            Y.summary,
                            W
                          )),
                          W.oneofs)
                        )
                          F.data = 'summary';
                      }
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.metrics.v1.Metric';
                    }),
                    G
                  );
                })()),
                (I.Gauge = (function () {
                  function G(D) {
                    if (((this.dataPoints = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.dataPoints = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.dataPoints != null && Z.dataPoints.length)
                        for (var W = 0; W < Z.dataPoints.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(
                            Z.dataPoints[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.Gauge();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                            F.dataPoints.push(
                              Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.dataPoints != null && Z.hasOwnProperty('dataPoints')) {
                        if (!Array.isArray(Z.dataPoints)) return 'dataPoints: array expected';
                        for (var Y = 0; Y < Z.dataPoints.length; ++Y) {
                          var W = Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(
                            Z.dataPoints[Y]
                          );
                          if (W) return 'dataPoints.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.Gauge) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.Gauge();
                      if (Z.dataPoints) {
                        if (!Array.isArray(Z.dataPoints))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected'
                          );
                        Y.dataPoints = [];
                        for (var W = 0; W < Z.dataPoints.length; ++W) {
                          if (typeof Z.dataPoints[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected'
                            );
                          Y.dataPoints[W] =
                            Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(
                              Z.dataPoints[W]
                            );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.dataPoints = [];
                      if (Z.dataPoints && Z.dataPoints.length) {
                        W.dataPoints = [];
                        for (var F = 0; F < Z.dataPoints.length; ++F)
                          W.dataPoints[F] =
                            Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(
                              Z.dataPoints[F],
                              Y
                            );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.Gauge';
                    }),
                    G
                  );
                })()),
                (I.Sum = (function () {
                  function G(D) {
                    if (((this.dataPoints = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.dataPoints = Z1.emptyArray),
                    (G.prototype.aggregationTemporality = null),
                    (G.prototype.isMonotonic = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.dataPoints != null && Z.dataPoints.length)
                        for (var W = 0; W < Z.dataPoints.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(
                            Z.dataPoints[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      if (
                        Z.aggregationTemporality != null &&
                        Object.hasOwnProperty.call(Z, 'aggregationTemporality')
                      )
                        Y.uint32(16).int32(Z.aggregationTemporality);
                      if (Z.isMonotonic != null && Object.hasOwnProperty.call(Z, 'isMonotonic'))
                        Y.uint32(24).bool(Z.isMonotonic);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.Sum();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                            F.dataPoints.push(
                              Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          case 2: {
                            F.aggregationTemporality = Z.int32();
                            break;
                          }
                          case 3: {
                            F.isMonotonic = Z.bool();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.dataPoints != null && Z.hasOwnProperty('dataPoints')) {
                        if (!Array.isArray(Z.dataPoints)) return 'dataPoints: array expected';
                        for (var Y = 0; Y < Z.dataPoints.length; ++Y) {
                          var W = Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(
                            Z.dataPoints[Y]
                          );
                          if (W) return 'dataPoints.' + W;
                        }
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        switch (Z.aggregationTemporality) {
                          default:
                            return 'aggregationTemporality: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                            break;
                        }
                      if (Z.isMonotonic != null && Z.hasOwnProperty('isMonotonic')) {
                        if (typeof Z.isMonotonic !== 'boolean')
                          return 'isMonotonic: boolean expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.Sum) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.Sum();
                      if (Z.dataPoints) {
                        if (!Array.isArray(Z.dataPoints))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected'
                          );
                        Y.dataPoints = [];
                        for (var W = 0; W < Z.dataPoints.length; ++W) {
                          if (typeof Z.dataPoints[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected'
                            );
                          Y.dataPoints[W] =
                            Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(
                              Z.dataPoints[W]
                            );
                        }
                      }
                      switch (Z.aggregationTemporality) {
                        default:
                          if (typeof Z.aggregationTemporality === 'number') {
                            Y.aggregationTemporality = Z.aggregationTemporality;
                            break;
                          }
                          break;
                        case 'AGGREGATION_TEMPORALITY_UNSPECIFIED':
                        case 0:
                          Y.aggregationTemporality = 0;
                          break;
                        case 'AGGREGATION_TEMPORALITY_DELTA':
                        case 1:
                          Y.aggregationTemporality = 1;
                          break;
                        case 'AGGREGATION_TEMPORALITY_CUMULATIVE':
                        case 2:
                          Y.aggregationTemporality = 2;
                          break;
                      }
                      if (Z.isMonotonic != null) Y.isMonotonic = Boolean(Z.isMonotonic);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.dataPoints = [];
                      if (Y.defaults)
                        ((W.aggregationTemporality =
                          Y.enums === String ? 'AGGREGATION_TEMPORALITY_UNSPECIFIED' : 0),
                          (W.isMonotonic = !1));
                      if (Z.dataPoints && Z.dataPoints.length) {
                        W.dataPoints = [];
                        for (var F = 0; F < Z.dataPoints.length; ++F)
                          W.dataPoints[F] =
                            Q1.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(
                              Z.dataPoints[F],
                              Y
                            );
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        W.aggregationTemporality =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                Z.aggregationTemporality
                              ] === void 0
                              ? Z.aggregationTemporality
                              : Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                  Z.aggregationTemporality
                                ]
                            : Z.aggregationTemporality;
                      if (Z.isMonotonic != null && Z.hasOwnProperty('isMonotonic'))
                        W.isMonotonic = Z.isMonotonic;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.Sum';
                    }),
                    G
                  );
                })()),
                (I.Histogram = (function () {
                  function G(D) {
                    if (((this.dataPoints = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.dataPoints = Z1.emptyArray),
                    (G.prototype.aggregationTemporality = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.dataPoints != null && Z.dataPoints.length)
                        for (var W = 0; W < Z.dataPoints.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(
                            Z.dataPoints[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      if (
                        Z.aggregationTemporality != null &&
                        Object.hasOwnProperty.call(Z, 'aggregationTemporality')
                      )
                        Y.uint32(16).int32(Z.aggregationTemporality);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.Histogram();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                            F.dataPoints.push(
                              Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          case 2: {
                            F.aggregationTemporality = Z.int32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.dataPoints != null && Z.hasOwnProperty('dataPoints')) {
                        if (!Array.isArray(Z.dataPoints)) return 'dataPoints: array expected';
                        for (var Y = 0; Y < Z.dataPoints.length; ++Y) {
                          var W = Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(
                            Z.dataPoints[Y]
                          );
                          if (W) return 'dataPoints.' + W;
                        }
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        switch (Z.aggregationTemporality) {
                          default:
                            return 'aggregationTemporality: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                            break;
                        }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.Histogram) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.Histogram();
                      if (Z.dataPoints) {
                        if (!Array.isArray(Z.dataPoints))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected'
                          );
                        Y.dataPoints = [];
                        for (var W = 0; W < Z.dataPoints.length; ++W) {
                          if (typeof Z.dataPoints[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected'
                            );
                          Y.dataPoints[W] =
                            Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(
                              Z.dataPoints[W]
                            );
                        }
                      }
                      switch (Z.aggregationTemporality) {
                        default:
                          if (typeof Z.aggregationTemporality === 'number') {
                            Y.aggregationTemporality = Z.aggregationTemporality;
                            break;
                          }
                          break;
                        case 'AGGREGATION_TEMPORALITY_UNSPECIFIED':
                        case 0:
                          Y.aggregationTemporality = 0;
                          break;
                        case 'AGGREGATION_TEMPORALITY_DELTA':
                        case 1:
                          Y.aggregationTemporality = 1;
                          break;
                        case 'AGGREGATION_TEMPORALITY_CUMULATIVE':
                        case 2:
                          Y.aggregationTemporality = 2;
                          break;
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.dataPoints = [];
                      if (Y.defaults)
                        W.aggregationTemporality =
                          Y.enums === String ? 'AGGREGATION_TEMPORALITY_UNSPECIFIED' : 0;
                      if (Z.dataPoints && Z.dataPoints.length) {
                        W.dataPoints = [];
                        for (var F = 0; F < Z.dataPoints.length; ++F)
                          W.dataPoints[F] =
                            Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(
                              Z.dataPoints[F],
                              Y
                            );
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        W.aggregationTemporality =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                Z.aggregationTemporality
                              ] === void 0
                              ? Z.aggregationTemporality
                              : Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                  Z.aggregationTemporality
                                ]
                            : Z.aggregationTemporality;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.Histogram';
                    }),
                    G
                  );
                })()),
                (I.ExponentialHistogram = (function () {
                  function G(D) {
                    if (((this.dataPoints = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.dataPoints = Z1.emptyArray),
                    (G.prototype.aggregationTemporality = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.dataPoints != null && Z.dataPoints.length)
                        for (var W = 0; W < Z.dataPoints.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(
                            Z.dataPoints[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      if (
                        Z.aggregationTemporality != null &&
                        Object.hasOwnProperty.call(Z, 'aggregationTemporality')
                      )
                        Y.uint32(16).int32(Z.aggregationTemporality);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                            F.dataPoints.push(
                              Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          case 2: {
                            F.aggregationTemporality = Z.int32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.dataPoints != null && Z.hasOwnProperty('dataPoints')) {
                        if (!Array.isArray(Z.dataPoints)) return 'dataPoints: array expected';
                        for (var Y = 0; Y < Z.dataPoints.length; ++Y) {
                          var W =
                            Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(
                              Z.dataPoints[Y]
                            );
                          if (W) return 'dataPoints.' + W;
                        }
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        switch (Z.aggregationTemporality) {
                          default:
                            return 'aggregationTemporality: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                            break;
                        }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram)
                        return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                      if (Z.dataPoints) {
                        if (!Array.isArray(Z.dataPoints))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected'
                          );
                        Y.dataPoints = [];
                        for (var W = 0; W < Z.dataPoints.length; ++W) {
                          if (typeof Z.dataPoints[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected'
                            );
                          Y.dataPoints[W] =
                            Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(
                              Z.dataPoints[W]
                            );
                        }
                      }
                      switch (Z.aggregationTemporality) {
                        default:
                          if (typeof Z.aggregationTemporality === 'number') {
                            Y.aggregationTemporality = Z.aggregationTemporality;
                            break;
                          }
                          break;
                        case 'AGGREGATION_TEMPORALITY_UNSPECIFIED':
                        case 0:
                          Y.aggregationTemporality = 0;
                          break;
                        case 'AGGREGATION_TEMPORALITY_DELTA':
                        case 1:
                          Y.aggregationTemporality = 1;
                          break;
                        case 'AGGREGATION_TEMPORALITY_CUMULATIVE':
                        case 2:
                          Y.aggregationTemporality = 2;
                          break;
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.dataPoints = [];
                      if (Y.defaults)
                        W.aggregationTemporality =
                          Y.enums === String ? 'AGGREGATION_TEMPORALITY_UNSPECIFIED' : 0;
                      if (Z.dataPoints && Z.dataPoints.length) {
                        W.dataPoints = [];
                        for (var F = 0; F < Z.dataPoints.length; ++F)
                          W.dataPoints[F] =
                            Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(
                              Z.dataPoints[F],
                              Y
                            );
                      }
                      if (
                        Z.aggregationTemporality != null &&
                        Z.hasOwnProperty('aggregationTemporality')
                      )
                        W.aggregationTemporality =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                Z.aggregationTemporality
                              ] === void 0
                              ? Z.aggregationTemporality
                              : Q1.opentelemetry.proto.metrics.v1.AggregationTemporality[
                                  Z.aggregationTemporality
                                ]
                            : Z.aggregationTemporality;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.ExponentialHistogram';
                    }),
                    G
                  );
                })()),
                (I.Summary = (function () {
                  function G(D) {
                    if (((this.dataPoints = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.dataPoints = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.dataPoints != null && Z.dataPoints.length)
                        for (var W = 0; W < Z.dataPoints.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(
                            Z.dataPoints[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.Summary();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.dataPoints && F.dataPoints.length)) F.dataPoints = [];
                            F.dataPoints.push(
                              Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.dataPoints != null && Z.hasOwnProperty('dataPoints')) {
                        if (!Array.isArray(Z.dataPoints)) return 'dataPoints: array expected';
                        for (var Y = 0; Y < Z.dataPoints.length; ++Y) {
                          var W = Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(
                            Z.dataPoints[Y]
                          );
                          if (W) return 'dataPoints.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.Summary) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.Summary();
                      if (Z.dataPoints) {
                        if (!Array.isArray(Z.dataPoints))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected'
                          );
                        Y.dataPoints = [];
                        for (var W = 0; W < Z.dataPoints.length; ++W) {
                          if (typeof Z.dataPoints[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected'
                            );
                          Y.dataPoints[W] =
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(
                              Z.dataPoints[W]
                            );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.dataPoints = [];
                      if (Z.dataPoints && Z.dataPoints.length) {
                        W.dataPoints = [];
                        for (var F = 0; F < Z.dataPoints.length; ++F)
                          W.dataPoints[F] =
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(
                              Z.dataPoints[F],
                              Y
                            );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.Summary';
                    }),
                    G
                  );
                })()),
                (I.AggregationTemporality = (function () {
                  var G = {},
                    D = Object.create(G);
                  return (
                    (D[(G[0] = 'AGGREGATION_TEMPORALITY_UNSPECIFIED')] = 0),
                    (D[(G[1] = 'AGGREGATION_TEMPORALITY_DELTA')] = 1),
                    (D[(G[2] = 'AGGREGATION_TEMPORALITY_CUMULATIVE')] = 2),
                    D
                  );
                })()),
                (I.DataPointFlags = (function () {
                  var G = {},
                    D = Object.create(G);
                  return (
                    (D[(G[0] = 'DATA_POINT_FLAGS_DO_NOT_USE')] = 0),
                    (D[(G[1] = 'DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK')] = 1),
                    D
                  );
                })()),
                (I.NumberDataPoint = (function () {
                  function G(Z) {
                    if (((this.attributes = []), (this.exemplars = []), Z)) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.startTimeUnixNano = null),
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.asDouble = null),
                    (G.prototype.asInt = null),
                    (G.prototype.exemplars = Z1.emptyArray),
                    (G.prototype.flags = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, 'value', {
                      get: Z1.oneOfGetter((D = ['asDouble', 'asInt'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (
                        Y.startTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Y, 'startTimeUnixNano')
                      )
                        W.uint32(17).fixed64(Y.startTimeUnixNano);
                      if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, 'timeUnixNano'))
                        W.uint32(25).fixed64(Y.timeUnixNano);
                      if (Y.asDouble != null && Object.hasOwnProperty.call(Y, 'asDouble'))
                        W.uint32(33).double(Y.asDouble);
                      if (Y.exemplars != null && Y.exemplars.length)
                        for (var F = 0; F < Y.exemplars.length; ++F)
                          Q1.opentelemetry.proto.metrics.v1.Exemplar.encode(
                            Y.exemplars[F],
                            W.uint32(42).fork()
                          ).ldelim();
                      if (Y.asInt != null && Object.hasOwnProperty.call(Y, 'asInt'))
                        W.uint32(49).sfixed64(Y.asInt);
                      if (Y.attributes != null && Y.attributes.length)
                        for (var F = 0; F < Y.attributes.length; ++F)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Y.attributes[F],
                            W.uint32(58).fork()
                          ).ldelim();
                      if (Y.flags != null && Object.hasOwnProperty.call(Y, 'flags'))
                        W.uint32(64).uint32(Y.flags);
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.metrics.v1.NumberDataPoint();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 7: {
                            if (!(J.attributes && J.attributes.length)) J.attributes = [];
                            J.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 2: {
                            J.startTimeUnixNano = Y.fixed64();
                            break;
                          }
                          case 3: {
                            J.timeUnixNano = Y.fixed64();
                            break;
                          }
                          case 4: {
                            J.asDouble = Y.double();
                            break;
                          }
                          case 6: {
                            J.asInt = Y.sfixed64();
                            break;
                          }
                          case 5: {
                            if (!(J.exemplars && J.exemplars.length)) J.exemplars = [];
                            J.exemplars.push(
                              Q1.opentelemetry.proto.metrics.v1.Exemplar.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 8: {
                            J.flags = Y.uint32();
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.attributes != null && Y.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Y.attributes)) return 'attributes: array expected';
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          var J = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[F]);
                          if (J) return 'attributes.' + J;
                        }
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.startTimeUnixNano) &&
                          !(
                            Y.startTimeUnixNano &&
                            Z1.isInteger(Y.startTimeUnixNano.low) &&
                            Z1.isInteger(Y.startTimeUnixNano.high)
                          )
                        )
                          return 'startTimeUnixNano: integer|Long expected';
                      }
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.timeUnixNano) &&
                          !(
                            Y.timeUnixNano &&
                            Z1.isInteger(Y.timeUnixNano.low) &&
                            Z1.isInteger(Y.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (Y.asDouble != null && Y.hasOwnProperty('asDouble')) {
                        if (((W.value = 1), typeof Y.asDouble !== 'number'))
                          return 'asDouble: number expected';
                      }
                      if (Y.asInt != null && Y.hasOwnProperty('asInt')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (
                          ((W.value = 1),
                          !Z1.isInteger(Y.asInt) &&
                            !(Y.asInt && Z1.isInteger(Y.asInt.low) && Z1.isInteger(Y.asInt.high)))
                        )
                          return 'asInt: integer|Long expected';
                      }
                      if (Y.exemplars != null && Y.hasOwnProperty('exemplars')) {
                        if (!Array.isArray(Y.exemplars)) return 'exemplars: array expected';
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          var J = Q1.opentelemetry.proto.metrics.v1.Exemplar.verify(Y.exemplars[F]);
                          if (J) return 'exemplars.' + J;
                        }
                      }
                      if (Y.flags != null && Y.hasOwnProperty('flags')) {
                        if (!Z1.isInteger(Y.flags)) return 'flags: integer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (Y instanceof Q1.opentelemetry.proto.metrics.v1.NumberDataPoint) return Y;
                      var W = new Q1.opentelemetry.proto.metrics.v1.NumberDataPoint();
                      if (Y.attributes) {
                        if (!Array.isArray(Y.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected'
                          );
                        W.attributes = [];
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          if (typeof Y.attributes[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected'
                            );
                          W.attributes[F] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Y.attributes[F]
                          );
                        }
                      }
                      if (Y.startTimeUnixNano != null) {
                        if (Z1.Long)
                          (W.startTimeUnixNano = Z1.Long.fromValue(Y.startTimeUnixNano)).unsigned =
                            !1;
                        else if (typeof Y.startTimeUnixNano === 'string')
                          W.startTimeUnixNano = parseInt(Y.startTimeUnixNano, 10);
                        else if (typeof Y.startTimeUnixNano === 'number')
                          W.startTimeUnixNano = Y.startTimeUnixNano;
                        else if (typeof Y.startTimeUnixNano === 'object')
                          W.startTimeUnixNano = new Z1.LongBits(
                            Y.startTimeUnixNano.low >>> 0,
                            Y.startTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.timeUnixNano != null) {
                        if (Z1.Long)
                          (W.timeUnixNano = Z1.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                        else if (typeof Y.timeUnixNano === 'string')
                          W.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                        else if (typeof Y.timeUnixNano === 'number')
                          W.timeUnixNano = Y.timeUnixNano;
                        else if (typeof Y.timeUnixNano === 'object')
                          W.timeUnixNano = new Z1.LongBits(
                            Y.timeUnixNano.low >>> 0,
                            Y.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.asDouble != null) W.asDouble = Number(Y.asDouble);
                      if (Y.asInt != null) {
                        if (Z1.Long) (W.asInt = Z1.Long.fromValue(Y.asInt)).unsigned = !1;
                        else if (typeof Y.asInt === 'string') W.asInt = parseInt(Y.asInt, 10);
                        else if (typeof Y.asInt === 'number') W.asInt = Y.asInt;
                        else if (typeof Y.asInt === 'object')
                          W.asInt = new Z1.LongBits(
                            Y.asInt.low >>> 0,
                            Y.asInt.high >>> 0
                          ).toNumber();
                      }
                      if (Y.exemplars) {
                        if (!Array.isArray(Y.exemplars))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected'
                          );
                        W.exemplars = [];
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          if (typeof Y.exemplars[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected'
                            );
                          W.exemplars[F] = Q1.opentelemetry.proto.metrics.v1.Exemplar.fromObject(
                            Y.exemplars[F]
                          );
                        }
                      }
                      if (Y.flags != null) W.flags = Y.flags >>> 0;
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (W.arrays || W.defaults) ((F.exemplars = []), (F.attributes = []));
                      if (W.defaults) {
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.startTimeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.startTimeUnixNano = W.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.timeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.timeUnixNano = W.longs === String ? '0' : 0;
                        F.flags = 0;
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano'))
                        if (typeof Y.startTimeUnixNano === 'number')
                          F.startTimeUnixNano =
                            W.longs === String ? String(Y.startTimeUnixNano) : Y.startTimeUnixNano;
                        else
                          F.startTimeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.startTimeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.startTimeUnixNano.low >>> 0,
                                    Y.startTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.startTimeUnixNano;
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano'))
                        if (typeof Y.timeUnixNano === 'number')
                          F.timeUnixNano =
                            W.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                        else
                          F.timeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.timeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.timeUnixNano.low >>> 0,
                                    Y.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.timeUnixNano;
                      if (Y.asDouble != null && Y.hasOwnProperty('asDouble')) {
                        if (
                          ((F.asDouble =
                            W.json && !isFinite(Y.asDouble) ? String(Y.asDouble) : Y.asDouble),
                          W.oneofs)
                        )
                          F.value = 'asDouble';
                      }
                      if (Y.exemplars && Y.exemplars.length) {
                        F.exemplars = [];
                        for (var C = 0; C < Y.exemplars.length; ++C)
                          F.exemplars[C] = Q1.opentelemetry.proto.metrics.v1.Exemplar.toObject(
                            Y.exemplars[C],
                            W
                          );
                      }
                      if (Y.asInt != null && Y.hasOwnProperty('asInt')) {
                        if (typeof Y.asInt === 'number')
                          F.asInt = W.longs === String ? String(Y.asInt) : Y.asInt;
                        else
                          F.asInt =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.asInt)
                              : W.longs === Number
                                ? new Z1.LongBits(Y.asInt.low >>> 0, Y.asInt.high >>> 0).toNumber()
                                : Y.asInt;
                        if (W.oneofs) F.value = 'asInt';
                      }
                      if (Y.attributes && Y.attributes.length) {
                        F.attributes = [];
                        for (var C = 0; C < Y.attributes.length; ++C)
                          F.attributes[C] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Y.attributes[C],
                            W
                          );
                      }
                      if (Y.flags != null && Y.hasOwnProperty('flags')) F.flags = Y.flags;
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.metrics.v1.NumberDataPoint';
                    }),
                    G
                  );
                })()),
                (I.HistogramDataPoint = (function () {
                  function G(Z) {
                    if (
                      ((this.attributes = []),
                      (this.bucketCounts = []),
                      (this.explicitBounds = []),
                      (this.exemplars = []),
                      Z)
                    ) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.startTimeUnixNano = null),
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.count = null),
                    (G.prototype.sum = null),
                    (G.prototype.bucketCounts = Z1.emptyArray),
                    (G.prototype.explicitBounds = Z1.emptyArray),
                    (G.prototype.exemplars = Z1.emptyArray),
                    (G.prototype.flags = null),
                    (G.prototype.min = null),
                    (G.prototype.max = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, '_sum', {
                      get: Z1.oneOfGetter((D = ['sum'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    Object.defineProperty(G.prototype, '_min', {
                      get: Z1.oneOfGetter((D = ['min'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    Object.defineProperty(G.prototype, '_max', {
                      get: Z1.oneOfGetter((D = ['max'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (
                        Y.startTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Y, 'startTimeUnixNano')
                      )
                        W.uint32(17).fixed64(Y.startTimeUnixNano);
                      if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, 'timeUnixNano'))
                        W.uint32(25).fixed64(Y.timeUnixNano);
                      if (Y.count != null && Object.hasOwnProperty.call(Y, 'count'))
                        W.uint32(33).fixed64(Y.count);
                      if (Y.sum != null && Object.hasOwnProperty.call(Y, 'sum'))
                        W.uint32(41).double(Y.sum);
                      if (Y.bucketCounts != null && Y.bucketCounts.length) {
                        W.uint32(50).fork();
                        for (var F = 0; F < Y.bucketCounts.length; ++F)
                          W.fixed64(Y.bucketCounts[F]);
                        W.ldelim();
                      }
                      if (Y.explicitBounds != null && Y.explicitBounds.length) {
                        W.uint32(58).fork();
                        for (var F = 0; F < Y.explicitBounds.length; ++F)
                          W.double(Y.explicitBounds[F]);
                        W.ldelim();
                      }
                      if (Y.exemplars != null && Y.exemplars.length)
                        for (var F = 0; F < Y.exemplars.length; ++F)
                          Q1.opentelemetry.proto.metrics.v1.Exemplar.encode(
                            Y.exemplars[F],
                            W.uint32(66).fork()
                          ).ldelim();
                      if (Y.attributes != null && Y.attributes.length)
                        for (var F = 0; F < Y.attributes.length; ++F)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Y.attributes[F],
                            W.uint32(74).fork()
                          ).ldelim();
                      if (Y.flags != null && Object.hasOwnProperty.call(Y, 'flags'))
                        W.uint32(80).uint32(Y.flags);
                      if (Y.min != null && Object.hasOwnProperty.call(Y, 'min'))
                        W.uint32(89).double(Y.min);
                      if (Y.max != null && Object.hasOwnProperty.call(Y, 'max'))
                        W.uint32(97).double(Y.max);
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 9: {
                            if (!(J.attributes && J.attributes.length)) J.attributes = [];
                            J.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 2: {
                            J.startTimeUnixNano = Y.fixed64();
                            break;
                          }
                          case 3: {
                            J.timeUnixNano = Y.fixed64();
                            break;
                          }
                          case 4: {
                            J.count = Y.fixed64();
                            break;
                          }
                          case 5: {
                            J.sum = Y.double();
                            break;
                          }
                          case 6: {
                            if (!(J.bucketCounts && J.bucketCounts.length)) J.bucketCounts = [];
                            if ((C & 7) === 2) {
                              var X = Y.uint32() + Y.pos;
                              while (Y.pos < X) J.bucketCounts.push(Y.fixed64());
                            } else J.bucketCounts.push(Y.fixed64());
                            break;
                          }
                          case 7: {
                            if (!(J.explicitBounds && J.explicitBounds.length))
                              J.explicitBounds = [];
                            if ((C & 7) === 2) {
                              var X = Y.uint32() + Y.pos;
                              while (Y.pos < X) J.explicitBounds.push(Y.double());
                            } else J.explicitBounds.push(Y.double());
                            break;
                          }
                          case 8: {
                            if (!(J.exemplars && J.exemplars.length)) J.exemplars = [];
                            J.exemplars.push(
                              Q1.opentelemetry.proto.metrics.v1.Exemplar.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 10: {
                            J.flags = Y.uint32();
                            break;
                          }
                          case 11: {
                            J.min = Y.double();
                            break;
                          }
                          case 12: {
                            J.max = Y.double();
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.attributes != null && Y.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Y.attributes)) return 'attributes: array expected';
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          var J = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[F]);
                          if (J) return 'attributes.' + J;
                        }
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.startTimeUnixNano) &&
                          !(
                            Y.startTimeUnixNano &&
                            Z1.isInteger(Y.startTimeUnixNano.low) &&
                            Z1.isInteger(Y.startTimeUnixNano.high)
                          )
                        )
                          return 'startTimeUnixNano: integer|Long expected';
                      }
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.timeUnixNano) &&
                          !(
                            Y.timeUnixNano &&
                            Z1.isInteger(Y.timeUnixNano.low) &&
                            Z1.isInteger(Y.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (Y.count != null && Y.hasOwnProperty('count')) {
                        if (
                          !Z1.isInteger(Y.count) &&
                          !(Y.count && Z1.isInteger(Y.count.low) && Z1.isInteger(Y.count.high))
                        )
                          return 'count: integer|Long expected';
                      }
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (((W._sum = 1), typeof Y.sum !== 'number'))
                          return 'sum: number expected';
                      }
                      if (Y.bucketCounts != null && Y.hasOwnProperty('bucketCounts')) {
                        if (!Array.isArray(Y.bucketCounts)) return 'bucketCounts: array expected';
                        for (var F = 0; F < Y.bucketCounts.length; ++F)
                          if (
                            !Z1.isInteger(Y.bucketCounts[F]) &&
                            !(
                              Y.bucketCounts[F] &&
                              Z1.isInteger(Y.bucketCounts[F].low) &&
                              Z1.isInteger(Y.bucketCounts[F].high)
                            )
                          )
                            return 'bucketCounts: integer|Long[] expected';
                      }
                      if (Y.explicitBounds != null && Y.hasOwnProperty('explicitBounds')) {
                        if (!Array.isArray(Y.explicitBounds))
                          return 'explicitBounds: array expected';
                        for (var F = 0; F < Y.explicitBounds.length; ++F)
                          if (typeof Y.explicitBounds[F] !== 'number')
                            return 'explicitBounds: number[] expected';
                      }
                      if (Y.exemplars != null && Y.hasOwnProperty('exemplars')) {
                        if (!Array.isArray(Y.exemplars)) return 'exemplars: array expected';
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          var J = Q1.opentelemetry.proto.metrics.v1.Exemplar.verify(Y.exemplars[F]);
                          if (J) return 'exemplars.' + J;
                        }
                      }
                      if (Y.flags != null && Y.hasOwnProperty('flags')) {
                        if (!Z1.isInteger(Y.flags)) return 'flags: integer expected';
                      }
                      if (Y.min != null && Y.hasOwnProperty('min')) {
                        if (((W._min = 1), typeof Y.min !== 'number'))
                          return 'min: number expected';
                      }
                      if (Y.max != null && Y.hasOwnProperty('max')) {
                        if (((W._max = 1), typeof Y.max !== 'number'))
                          return 'max: number expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (Y instanceof Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint)
                        return Y;
                      var W = new Q1.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                      if (Y.attributes) {
                        if (!Array.isArray(Y.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected'
                          );
                        W.attributes = [];
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          if (typeof Y.attributes[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected'
                            );
                          W.attributes[F] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Y.attributes[F]
                          );
                        }
                      }
                      if (Y.startTimeUnixNano != null) {
                        if (Z1.Long)
                          (W.startTimeUnixNano = Z1.Long.fromValue(Y.startTimeUnixNano)).unsigned =
                            !1;
                        else if (typeof Y.startTimeUnixNano === 'string')
                          W.startTimeUnixNano = parseInt(Y.startTimeUnixNano, 10);
                        else if (typeof Y.startTimeUnixNano === 'number')
                          W.startTimeUnixNano = Y.startTimeUnixNano;
                        else if (typeof Y.startTimeUnixNano === 'object')
                          W.startTimeUnixNano = new Z1.LongBits(
                            Y.startTimeUnixNano.low >>> 0,
                            Y.startTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.timeUnixNano != null) {
                        if (Z1.Long)
                          (W.timeUnixNano = Z1.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                        else if (typeof Y.timeUnixNano === 'string')
                          W.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                        else if (typeof Y.timeUnixNano === 'number')
                          W.timeUnixNano = Y.timeUnixNano;
                        else if (typeof Y.timeUnixNano === 'object')
                          W.timeUnixNano = new Z1.LongBits(
                            Y.timeUnixNano.low >>> 0,
                            Y.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.count != null) {
                        if (Z1.Long) (W.count = Z1.Long.fromValue(Y.count)).unsigned = !1;
                        else if (typeof Y.count === 'string') W.count = parseInt(Y.count, 10);
                        else if (typeof Y.count === 'number') W.count = Y.count;
                        else if (typeof Y.count === 'object')
                          W.count = new Z1.LongBits(
                            Y.count.low >>> 0,
                            Y.count.high >>> 0
                          ).toNumber();
                      }
                      if (Y.sum != null) W.sum = Number(Y.sum);
                      if (Y.bucketCounts) {
                        if (!Array.isArray(Y.bucketCounts))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected'
                          );
                        W.bucketCounts = [];
                        for (var F = 0; F < Y.bucketCounts.length; ++F)
                          if (Z1.Long)
                            (W.bucketCounts[F] = Z1.Long.fromValue(Y.bucketCounts[F])).unsigned =
                              !1;
                          else if (typeof Y.bucketCounts[F] === 'string')
                            W.bucketCounts[F] = parseInt(Y.bucketCounts[F], 10);
                          else if (typeof Y.bucketCounts[F] === 'number')
                            W.bucketCounts[F] = Y.bucketCounts[F];
                          else if (typeof Y.bucketCounts[F] === 'object')
                            W.bucketCounts[F] = new Z1.LongBits(
                              Y.bucketCounts[F].low >>> 0,
                              Y.bucketCounts[F].high >>> 0
                            ).toNumber();
                      }
                      if (Y.explicitBounds) {
                        if (!Array.isArray(Y.explicitBounds))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected'
                          );
                        W.explicitBounds = [];
                        for (var F = 0; F < Y.explicitBounds.length; ++F)
                          W.explicitBounds[F] = Number(Y.explicitBounds[F]);
                      }
                      if (Y.exemplars) {
                        if (!Array.isArray(Y.exemplars))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected'
                          );
                        W.exemplars = [];
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          if (typeof Y.exemplars[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected'
                            );
                          W.exemplars[F] = Q1.opentelemetry.proto.metrics.v1.Exemplar.fromObject(
                            Y.exemplars[F]
                          );
                        }
                      }
                      if (Y.flags != null) W.flags = Y.flags >>> 0;
                      if (Y.min != null) W.min = Number(Y.min);
                      if (Y.max != null) W.max = Number(Y.max);
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (W.arrays || W.defaults)
                        ((F.bucketCounts = []),
                          (F.explicitBounds = []),
                          (F.exemplars = []),
                          (F.attributes = []));
                      if (W.defaults) {
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.startTimeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.startTimeUnixNano = W.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.timeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.timeUnixNano = W.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.count =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.count = W.longs === String ? '0' : 0;
                        F.flags = 0;
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano'))
                        if (typeof Y.startTimeUnixNano === 'number')
                          F.startTimeUnixNano =
                            W.longs === String ? String(Y.startTimeUnixNano) : Y.startTimeUnixNano;
                        else
                          F.startTimeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.startTimeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.startTimeUnixNano.low >>> 0,
                                    Y.startTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.startTimeUnixNano;
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano'))
                        if (typeof Y.timeUnixNano === 'number')
                          F.timeUnixNano =
                            W.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                        else
                          F.timeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.timeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.timeUnixNano.low >>> 0,
                                    Y.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.timeUnixNano;
                      if (Y.count != null && Y.hasOwnProperty('count'))
                        if (typeof Y.count === 'number')
                          F.count = W.longs === String ? String(Y.count) : Y.count;
                        else
                          F.count =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.count)
                              : W.longs === Number
                                ? new Z1.LongBits(Y.count.low >>> 0, Y.count.high >>> 0).toNumber()
                                : Y.count;
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (
                          ((F.sum = W.json && !isFinite(Y.sum) ? String(Y.sum) : Y.sum), W.oneofs)
                        )
                          F._sum = 'sum';
                      }
                      if (Y.bucketCounts && Y.bucketCounts.length) {
                        F.bucketCounts = [];
                        for (var C = 0; C < Y.bucketCounts.length; ++C)
                          if (typeof Y.bucketCounts[C] === 'number')
                            F.bucketCounts[C] =
                              W.longs === String ? String(Y.bucketCounts[C]) : Y.bucketCounts[C];
                          else
                            F.bucketCounts[C] =
                              W.longs === String
                                ? Z1.Long.prototype.toString.call(Y.bucketCounts[C])
                                : W.longs === Number
                                  ? new Z1.LongBits(
                                      Y.bucketCounts[C].low >>> 0,
                                      Y.bucketCounts[C].high >>> 0
                                    ).toNumber()
                                  : Y.bucketCounts[C];
                      }
                      if (Y.explicitBounds && Y.explicitBounds.length) {
                        F.explicitBounds = [];
                        for (var C = 0; C < Y.explicitBounds.length; ++C)
                          F.explicitBounds[C] =
                            W.json && !isFinite(Y.explicitBounds[C])
                              ? String(Y.explicitBounds[C])
                              : Y.explicitBounds[C];
                      }
                      if (Y.exemplars && Y.exemplars.length) {
                        F.exemplars = [];
                        for (var C = 0; C < Y.exemplars.length; ++C)
                          F.exemplars[C] = Q1.opentelemetry.proto.metrics.v1.Exemplar.toObject(
                            Y.exemplars[C],
                            W
                          );
                      }
                      if (Y.attributes && Y.attributes.length) {
                        F.attributes = [];
                        for (var C = 0; C < Y.attributes.length; ++C)
                          F.attributes[C] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Y.attributes[C],
                            W
                          );
                      }
                      if (Y.flags != null && Y.hasOwnProperty('flags')) F.flags = Y.flags;
                      if (Y.min != null && Y.hasOwnProperty('min')) {
                        if (
                          ((F.min = W.json && !isFinite(Y.min) ? String(Y.min) : Y.min), W.oneofs)
                        )
                          F._min = 'min';
                      }
                      if (Y.max != null && Y.hasOwnProperty('max')) {
                        if (
                          ((F.max = W.json && !isFinite(Y.max) ? String(Y.max) : Y.max), W.oneofs)
                        )
                          F._max = 'max';
                      }
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.metrics.v1.HistogramDataPoint';
                    }),
                    G
                  );
                })()),
                (I.ExponentialHistogramDataPoint = (function () {
                  function G(Z) {
                    if (((this.attributes = []), (this.exemplars = []), Z)) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.startTimeUnixNano = null),
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.count = null),
                    (G.prototype.sum = null),
                    (G.prototype.scale = null),
                    (G.prototype.zeroCount = null),
                    (G.prototype.positive = null),
                    (G.prototype.negative = null),
                    (G.prototype.flags = null),
                    (G.prototype.exemplars = Z1.emptyArray),
                    (G.prototype.min = null),
                    (G.prototype.max = null),
                    (G.prototype.zeroThreshold = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, '_sum', {
                      get: Z1.oneOfGetter((D = ['sum'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    Object.defineProperty(G.prototype, '_min', {
                      get: Z1.oneOfGetter((D = ['min'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    Object.defineProperty(G.prototype, '_max', {
                      get: Z1.oneOfGetter((D = ['max'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (Y.attributes != null && Y.attributes.length)
                        for (var F = 0; F < Y.attributes.length; ++F)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Y.attributes[F],
                            W.uint32(10).fork()
                          ).ldelim();
                      if (
                        Y.startTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Y, 'startTimeUnixNano')
                      )
                        W.uint32(17).fixed64(Y.startTimeUnixNano);
                      if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, 'timeUnixNano'))
                        W.uint32(25).fixed64(Y.timeUnixNano);
                      if (Y.count != null && Object.hasOwnProperty.call(Y, 'count'))
                        W.uint32(33).fixed64(Y.count);
                      if (Y.sum != null && Object.hasOwnProperty.call(Y, 'sum'))
                        W.uint32(41).double(Y.sum);
                      if (Y.scale != null && Object.hasOwnProperty.call(Y, 'scale'))
                        W.uint32(48).sint32(Y.scale);
                      if (Y.zeroCount != null && Object.hasOwnProperty.call(Y, 'zeroCount'))
                        W.uint32(57).fixed64(Y.zeroCount);
                      if (Y.positive != null && Object.hasOwnProperty.call(Y, 'positive'))
                        Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(
                          Y.positive,
                          W.uint32(66).fork()
                        ).ldelim();
                      if (Y.negative != null && Object.hasOwnProperty.call(Y, 'negative'))
                        Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(
                          Y.negative,
                          W.uint32(74).fork()
                        ).ldelim();
                      if (Y.flags != null && Object.hasOwnProperty.call(Y, 'flags'))
                        W.uint32(80).uint32(Y.flags);
                      if (Y.exemplars != null && Y.exemplars.length)
                        for (var F = 0; F < Y.exemplars.length; ++F)
                          Q1.opentelemetry.proto.metrics.v1.Exemplar.encode(
                            Y.exemplars[F],
                            W.uint32(90).fork()
                          ).ldelim();
                      if (Y.min != null && Object.hasOwnProperty.call(Y, 'min'))
                        W.uint32(97).double(Y.min);
                      if (Y.max != null && Object.hasOwnProperty.call(Y, 'max'))
                        W.uint32(105).double(Y.max);
                      if (Y.zeroThreshold != null && Object.hasOwnProperty.call(Y, 'zeroThreshold'))
                        W.uint32(113).double(Y.zeroThreshold);
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 1: {
                            if (!(J.attributes && J.attributes.length)) J.attributes = [];
                            J.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 2: {
                            J.startTimeUnixNano = Y.fixed64();
                            break;
                          }
                          case 3: {
                            J.timeUnixNano = Y.fixed64();
                            break;
                          }
                          case 4: {
                            J.count = Y.fixed64();
                            break;
                          }
                          case 5: {
                            J.sum = Y.double();
                            break;
                          }
                          case 6: {
                            J.scale = Y.sint32();
                            break;
                          }
                          case 7: {
                            J.zeroCount = Y.fixed64();
                            break;
                          }
                          case 8: {
                            J.positive =
                              Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(
                                Y,
                                Y.uint32()
                              );
                            break;
                          }
                          case 9: {
                            J.negative =
                              Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(
                                Y,
                                Y.uint32()
                              );
                            break;
                          }
                          case 10: {
                            J.flags = Y.uint32();
                            break;
                          }
                          case 11: {
                            if (!(J.exemplars && J.exemplars.length)) J.exemplars = [];
                            J.exemplars.push(
                              Q1.opentelemetry.proto.metrics.v1.Exemplar.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 12: {
                            J.min = Y.double();
                            break;
                          }
                          case 13: {
                            J.max = Y.double();
                            break;
                          }
                          case 14: {
                            J.zeroThreshold = Y.double();
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.attributes != null && Y.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Y.attributes)) return 'attributes: array expected';
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          var J = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Y.attributes[F]);
                          if (J) return 'attributes.' + J;
                        }
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.startTimeUnixNano) &&
                          !(
                            Y.startTimeUnixNano &&
                            Z1.isInteger(Y.startTimeUnixNano.low) &&
                            Z1.isInteger(Y.startTimeUnixNano.high)
                          )
                        )
                          return 'startTimeUnixNano: integer|Long expected';
                      }
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.timeUnixNano) &&
                          !(
                            Y.timeUnixNano &&
                            Z1.isInteger(Y.timeUnixNano.low) &&
                            Z1.isInteger(Y.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (Y.count != null && Y.hasOwnProperty('count')) {
                        if (
                          !Z1.isInteger(Y.count) &&
                          !(Y.count && Z1.isInteger(Y.count.low) && Z1.isInteger(Y.count.high))
                        )
                          return 'count: integer|Long expected';
                      }
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (((W._sum = 1), typeof Y.sum !== 'number'))
                          return 'sum: number expected';
                      }
                      if (Y.scale != null && Y.hasOwnProperty('scale')) {
                        if (!Z1.isInteger(Y.scale)) return 'scale: integer expected';
                      }
                      if (Y.zeroCount != null && Y.hasOwnProperty('zeroCount')) {
                        if (
                          !Z1.isInteger(Y.zeroCount) &&
                          !(
                            Y.zeroCount &&
                            Z1.isInteger(Y.zeroCount.low) &&
                            Z1.isInteger(Y.zeroCount.high)
                          )
                        )
                          return 'zeroCount: integer|Long expected';
                      }
                      if (Y.positive != null && Y.hasOwnProperty('positive')) {
                        var J =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(
                            Y.positive
                          );
                        if (J) return 'positive.' + J;
                      }
                      if (Y.negative != null && Y.hasOwnProperty('negative')) {
                        var J =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(
                            Y.negative
                          );
                        if (J) return 'negative.' + J;
                      }
                      if (Y.flags != null && Y.hasOwnProperty('flags')) {
                        if (!Z1.isInteger(Y.flags)) return 'flags: integer expected';
                      }
                      if (Y.exemplars != null && Y.hasOwnProperty('exemplars')) {
                        if (!Array.isArray(Y.exemplars)) return 'exemplars: array expected';
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          var J = Q1.opentelemetry.proto.metrics.v1.Exemplar.verify(Y.exemplars[F]);
                          if (J) return 'exemplars.' + J;
                        }
                      }
                      if (Y.min != null && Y.hasOwnProperty('min')) {
                        if (((W._min = 1), typeof Y.min !== 'number'))
                          return 'min: number expected';
                      }
                      if (Y.max != null && Y.hasOwnProperty('max')) {
                        if (((W._max = 1), typeof Y.max !== 'number'))
                          return 'max: number expected';
                      }
                      if (Y.zeroThreshold != null && Y.hasOwnProperty('zeroThreshold')) {
                        if (typeof Y.zeroThreshold !== 'number')
                          return 'zeroThreshold: number expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (
                        Y instanceof Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint
                      )
                        return Y;
                      var W = new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                      if (Y.attributes) {
                        if (!Array.isArray(Y.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected'
                          );
                        W.attributes = [];
                        for (var F = 0; F < Y.attributes.length; ++F) {
                          if (typeof Y.attributes[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected'
                            );
                          W.attributes[F] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Y.attributes[F]
                          );
                        }
                      }
                      if (Y.startTimeUnixNano != null) {
                        if (Z1.Long)
                          (W.startTimeUnixNano = Z1.Long.fromValue(Y.startTimeUnixNano)).unsigned =
                            !1;
                        else if (typeof Y.startTimeUnixNano === 'string')
                          W.startTimeUnixNano = parseInt(Y.startTimeUnixNano, 10);
                        else if (typeof Y.startTimeUnixNano === 'number')
                          W.startTimeUnixNano = Y.startTimeUnixNano;
                        else if (typeof Y.startTimeUnixNano === 'object')
                          W.startTimeUnixNano = new Z1.LongBits(
                            Y.startTimeUnixNano.low >>> 0,
                            Y.startTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.timeUnixNano != null) {
                        if (Z1.Long)
                          (W.timeUnixNano = Z1.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                        else if (typeof Y.timeUnixNano === 'string')
                          W.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                        else if (typeof Y.timeUnixNano === 'number')
                          W.timeUnixNano = Y.timeUnixNano;
                        else if (typeof Y.timeUnixNano === 'object')
                          W.timeUnixNano = new Z1.LongBits(
                            Y.timeUnixNano.low >>> 0,
                            Y.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.count != null) {
                        if (Z1.Long) (W.count = Z1.Long.fromValue(Y.count)).unsigned = !1;
                        else if (typeof Y.count === 'string') W.count = parseInt(Y.count, 10);
                        else if (typeof Y.count === 'number') W.count = Y.count;
                        else if (typeof Y.count === 'object')
                          W.count = new Z1.LongBits(
                            Y.count.low >>> 0,
                            Y.count.high >>> 0
                          ).toNumber();
                      }
                      if (Y.sum != null) W.sum = Number(Y.sum);
                      if (Y.scale != null) W.scale = Y.scale | 0;
                      if (Y.zeroCount != null) {
                        if (Z1.Long) (W.zeroCount = Z1.Long.fromValue(Y.zeroCount)).unsigned = !1;
                        else if (typeof Y.zeroCount === 'string')
                          W.zeroCount = parseInt(Y.zeroCount, 10);
                        else if (typeof Y.zeroCount === 'number') W.zeroCount = Y.zeroCount;
                        else if (typeof Y.zeroCount === 'object')
                          W.zeroCount = new Z1.LongBits(
                            Y.zeroCount.low >>> 0,
                            Y.zeroCount.high >>> 0
                          ).toNumber();
                      }
                      if (Y.positive != null) {
                        if (typeof Y.positive !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected'
                          );
                        W.positive =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(
                            Y.positive
                          );
                      }
                      if (Y.negative != null) {
                        if (typeof Y.negative !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected'
                          );
                        W.negative =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(
                            Y.negative
                          );
                      }
                      if (Y.flags != null) W.flags = Y.flags >>> 0;
                      if (Y.exemplars) {
                        if (!Array.isArray(Y.exemplars))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected'
                          );
                        W.exemplars = [];
                        for (var F = 0; F < Y.exemplars.length; ++F) {
                          if (typeof Y.exemplars[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected'
                            );
                          W.exemplars[F] = Q1.opentelemetry.proto.metrics.v1.Exemplar.fromObject(
                            Y.exemplars[F]
                          );
                        }
                      }
                      if (Y.min != null) W.min = Number(Y.min);
                      if (Y.max != null) W.max = Number(Y.max);
                      if (Y.zeroThreshold != null) W.zeroThreshold = Number(Y.zeroThreshold);
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (W.arrays || W.defaults) ((F.attributes = []), (F.exemplars = []));
                      if (W.defaults) {
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.startTimeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.startTimeUnixNano = W.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.timeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.timeUnixNano = W.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.count =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.count = W.longs === String ? '0' : 0;
                        if (((F.scale = 0), Z1.Long)) {
                          var J = new Z1.Long(0, 0, !1);
                          F.zeroCount =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.zeroCount = W.longs === String ? '0' : 0;
                        ((F.positive = null),
                          (F.negative = null),
                          (F.flags = 0),
                          (F.zeroThreshold = 0));
                      }
                      if (Y.attributes && Y.attributes.length) {
                        F.attributes = [];
                        for (var C = 0; C < Y.attributes.length; ++C)
                          F.attributes[C] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Y.attributes[C],
                            W
                          );
                      }
                      if (Y.startTimeUnixNano != null && Y.hasOwnProperty('startTimeUnixNano'))
                        if (typeof Y.startTimeUnixNano === 'number')
                          F.startTimeUnixNano =
                            W.longs === String ? String(Y.startTimeUnixNano) : Y.startTimeUnixNano;
                        else
                          F.startTimeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.startTimeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.startTimeUnixNano.low >>> 0,
                                    Y.startTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.startTimeUnixNano;
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano'))
                        if (typeof Y.timeUnixNano === 'number')
                          F.timeUnixNano =
                            W.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                        else
                          F.timeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.timeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.timeUnixNano.low >>> 0,
                                    Y.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.timeUnixNano;
                      if (Y.count != null && Y.hasOwnProperty('count'))
                        if (typeof Y.count === 'number')
                          F.count = W.longs === String ? String(Y.count) : Y.count;
                        else
                          F.count =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.count)
                              : W.longs === Number
                                ? new Z1.LongBits(Y.count.low >>> 0, Y.count.high >>> 0).toNumber()
                                : Y.count;
                      if (Y.sum != null && Y.hasOwnProperty('sum')) {
                        if (
                          ((F.sum = W.json && !isFinite(Y.sum) ? String(Y.sum) : Y.sum), W.oneofs)
                        )
                          F._sum = 'sum';
                      }
                      if (Y.scale != null && Y.hasOwnProperty('scale')) F.scale = Y.scale;
                      if (Y.zeroCount != null && Y.hasOwnProperty('zeroCount'))
                        if (typeof Y.zeroCount === 'number')
                          F.zeroCount = W.longs === String ? String(Y.zeroCount) : Y.zeroCount;
                        else
                          F.zeroCount =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.zeroCount)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.zeroCount.low >>> 0,
                                    Y.zeroCount.high >>> 0
                                  ).toNumber()
                                : Y.zeroCount;
                      if (Y.positive != null && Y.hasOwnProperty('positive'))
                        F.positive =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(
                            Y.positive,
                            W
                          );
                      if (Y.negative != null && Y.hasOwnProperty('negative'))
                        F.negative =
                          Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(
                            Y.negative,
                            W
                          );
                      if (Y.flags != null && Y.hasOwnProperty('flags')) F.flags = Y.flags;
                      if (Y.exemplars && Y.exemplars.length) {
                        F.exemplars = [];
                        for (var C = 0; C < Y.exemplars.length; ++C)
                          F.exemplars[C] = Q1.opentelemetry.proto.metrics.v1.Exemplar.toObject(
                            Y.exemplars[C],
                            W
                          );
                      }
                      if (Y.min != null && Y.hasOwnProperty('min')) {
                        if (
                          ((F.min = W.json && !isFinite(Y.min) ? String(Y.min) : Y.min), W.oneofs)
                        )
                          F._min = 'min';
                      }
                      if (Y.max != null && Y.hasOwnProperty('max')) {
                        if (
                          ((F.max = W.json && !isFinite(Y.max) ? String(Y.max) : Y.max), W.oneofs)
                        )
                          F._max = 'max';
                      }
                      if (Y.zeroThreshold != null && Y.hasOwnProperty('zeroThreshold'))
                        F.zeroThreshold =
                          W.json && !isFinite(Y.zeroThreshold)
                            ? String(Y.zeroThreshold)
                            : Y.zeroThreshold;
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint';
                    }),
                    (G.Buckets = (function () {
                      function Z(Y) {
                        if (((this.bucketCounts = []), Y)) {
                          for (var W = Object.keys(Y), F = 0; F < W.length; ++F)
                            if (Y[W[F]] != null) this[W[F]] = Y[W[F]];
                        }
                      }
                      return (
                        (Z.prototype.offset = null),
                        (Z.prototype.bucketCounts = Z1.emptyArray),
                        (Z.create = function Y(W) {
                          return new Z(W);
                        }),
                        (Z.encode = function Y(W, F) {
                          if (!F) F = k4.create();
                          if (W.offset != null && Object.hasOwnProperty.call(W, 'offset'))
                            F.uint32(8).sint32(W.offset);
                          if (W.bucketCounts != null && W.bucketCounts.length) {
                            F.uint32(18).fork();
                            for (var J = 0; J < W.bucketCounts.length; ++J)
                              F.uint64(W.bucketCounts[J]);
                            F.ldelim();
                          }
                          return F;
                        }),
                        (Z.encodeDelimited = function Y(W, F) {
                          return this.encode(W, F).ldelim();
                        }),
                        (Z.decode = function Y(W, F) {
                          if (!(W instanceof LA)) W = LA.create(W);
                          var J = F === void 0 ? W.len : W.pos + F,
                            C =
                              new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                          while (W.pos < J) {
                            var X = W.uint32();
                            switch (X >>> 3) {
                              case 1: {
                                C.offset = W.sint32();
                                break;
                              }
                              case 2: {
                                if (!(C.bucketCounts && C.bucketCounts.length)) C.bucketCounts = [];
                                if ((X & 7) === 2) {
                                  var V = W.uint32() + W.pos;
                                  while (W.pos < V) C.bucketCounts.push(W.uint64());
                                } else C.bucketCounts.push(W.uint64());
                                break;
                              }
                              default:
                                W.skipType(X & 7);
                                break;
                            }
                          }
                          return C;
                        }),
                        (Z.decodeDelimited = function Y(W) {
                          if (!(W instanceof LA)) W = new LA(W);
                          return this.decode(W, W.uint32());
                        }),
                        (Z.verify = function Y(W) {
                          if (typeof W !== 'object' || W === null) return 'object expected';
                          if (W.offset != null && W.hasOwnProperty('offset')) {
                            if (!Z1.isInteger(W.offset)) return 'offset: integer expected';
                          }
                          if (W.bucketCounts != null && W.hasOwnProperty('bucketCounts')) {
                            if (!Array.isArray(W.bucketCounts))
                              return 'bucketCounts: array expected';
                            for (var F = 0; F < W.bucketCounts.length; ++F)
                              if (
                                !Z1.isInteger(W.bucketCounts[F]) &&
                                !(
                                  W.bucketCounts[F] &&
                                  Z1.isInteger(W.bucketCounts[F].low) &&
                                  Z1.isInteger(W.bucketCounts[F].high)
                                )
                              )
                                return 'bucketCounts: integer|Long[] expected';
                          }
                          return null;
                        }),
                        (Z.fromObject = function Y(W) {
                          if (
                            W instanceof
                            Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets
                          )
                            return W;
                          var F =
                            new Q1.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                          if (W.offset != null) F.offset = W.offset | 0;
                          if (W.bucketCounts) {
                            if (!Array.isArray(W.bucketCounts))
                              throw TypeError(
                                '.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected'
                              );
                            F.bucketCounts = [];
                            for (var J = 0; J < W.bucketCounts.length; ++J)
                              if (Z1.Long)
                                (F.bucketCounts[J] = Z1.Long.fromValue(
                                  W.bucketCounts[J]
                                )).unsigned = !0;
                              else if (typeof W.bucketCounts[J] === 'string')
                                F.bucketCounts[J] = parseInt(W.bucketCounts[J], 10);
                              else if (typeof W.bucketCounts[J] === 'number')
                                F.bucketCounts[J] = W.bucketCounts[J];
                              else if (typeof W.bucketCounts[J] === 'object')
                                F.bucketCounts[J] = new Z1.LongBits(
                                  W.bucketCounts[J].low >>> 0,
                                  W.bucketCounts[J].high >>> 0
                                ).toNumber(!0);
                          }
                          return F;
                        }),
                        (Z.toObject = function Y(W, F) {
                          if (!F) F = {};
                          var J = {};
                          if (F.arrays || F.defaults) J.bucketCounts = [];
                          if (F.defaults) J.offset = 0;
                          if (W.offset != null && W.hasOwnProperty('offset')) J.offset = W.offset;
                          if (W.bucketCounts && W.bucketCounts.length) {
                            J.bucketCounts = [];
                            for (var C = 0; C < W.bucketCounts.length; ++C)
                              if (typeof W.bucketCounts[C] === 'number')
                                J.bucketCounts[C] =
                                  F.longs === String
                                    ? String(W.bucketCounts[C])
                                    : W.bucketCounts[C];
                              else
                                J.bucketCounts[C] =
                                  F.longs === String
                                    ? Z1.Long.prototype.toString.call(W.bucketCounts[C])
                                    : F.longs === Number
                                      ? new Z1.LongBits(
                                          W.bucketCounts[C].low >>> 0,
                                          W.bucketCounts[C].high >>> 0
                                        ).toNumber(!0)
                                      : W.bucketCounts[C];
                          }
                          return J;
                        }),
                        (Z.prototype.toJSON = function Y() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (Z.getTypeUrl = function Y(W) {
                          if (W === void 0) W = 'type.googleapis.com';
                          return (
                            W +
                            '/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets'
                          );
                        }),
                        Z
                      );
                    })()),
                    G
                  );
                })()),
                (I.SummaryDataPoint = (function () {
                  function G(D) {
                    if (((this.attributes = []), (this.quantileValues = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.startTimeUnixNano = null),
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.count = null),
                    (G.prototype.sum = null),
                    (G.prototype.quantileValues = Z1.emptyArray),
                    (G.prototype.flags = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (
                        Z.startTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Z, 'startTimeUnixNano')
                      )
                        Y.uint32(17).fixed64(Z.startTimeUnixNano);
                      if (Z.timeUnixNano != null && Object.hasOwnProperty.call(Z, 'timeUnixNano'))
                        Y.uint32(25).fixed64(Z.timeUnixNano);
                      if (Z.count != null && Object.hasOwnProperty.call(Z, 'count'))
                        Y.uint32(33).fixed64(Z.count);
                      if (Z.sum != null && Object.hasOwnProperty.call(Z, 'sum'))
                        Y.uint32(41).double(Z.sum);
                      if (Z.quantileValues != null && Z.quantileValues.length)
                        for (var W = 0; W < Z.quantileValues.length; ++W)
                          Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(
                            Z.quantileValues[W],
                            Y.uint32(50).fork()
                          ).ldelim();
                      if (Z.attributes != null && Z.attributes.length)
                        for (var W = 0; W < Z.attributes.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.attributes[W],
                            Y.uint32(58).fork()
                          ).ldelim();
                      if (Z.flags != null && Object.hasOwnProperty.call(Z, 'flags'))
                        Y.uint32(64).uint32(Z.flags);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 7: {
                            if (!(F.attributes && F.attributes.length)) F.attributes = [];
                            F.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 2: {
                            F.startTimeUnixNano = Z.fixed64();
                            break;
                          }
                          case 3: {
                            F.timeUnixNano = Z.fixed64();
                            break;
                          }
                          case 4: {
                            F.count = Z.fixed64();
                            break;
                          }
                          case 5: {
                            F.sum = Z.double();
                            break;
                          }
                          case 6: {
                            if (!(F.quantileValues && F.quantileValues.length))
                              F.quantileValues = [];
                            F.quantileValues.push(
                              Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(
                                Z,
                                Z.uint32()
                              )
                            );
                            break;
                          }
                          case 8: {
                            F.flags = Z.uint32();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.attributes != null && Z.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Z.attributes)) return 'attributes: array expected';
                        for (var Y = 0; Y < Z.attributes.length; ++Y) {
                          var W = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.attributes[Y]);
                          if (W) return 'attributes.' + W;
                        }
                      }
                      if (Z.startTimeUnixNano != null && Z.hasOwnProperty('startTimeUnixNano')) {
                        if (
                          !Z1.isInteger(Z.startTimeUnixNano) &&
                          !(
                            Z.startTimeUnixNano &&
                            Z1.isInteger(Z.startTimeUnixNano.low) &&
                            Z1.isInteger(Z.startTimeUnixNano.high)
                          )
                        )
                          return 'startTimeUnixNano: integer|Long expected';
                      }
                      if (Z.timeUnixNano != null && Z.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Z.timeUnixNano) &&
                          !(
                            Z.timeUnixNano &&
                            Z1.isInteger(Z.timeUnixNano.low) &&
                            Z1.isInteger(Z.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (Z.count != null && Z.hasOwnProperty('count')) {
                        if (
                          !Z1.isInteger(Z.count) &&
                          !(Z.count && Z1.isInteger(Z.count.low) && Z1.isInteger(Z.count.high))
                        )
                          return 'count: integer|Long expected';
                      }
                      if (Z.sum != null && Z.hasOwnProperty('sum')) {
                        if (typeof Z.sum !== 'number') return 'sum: number expected';
                      }
                      if (Z.quantileValues != null && Z.hasOwnProperty('quantileValues')) {
                        if (!Array.isArray(Z.quantileValues))
                          return 'quantileValues: array expected';
                        for (var Y = 0; Y < Z.quantileValues.length; ++Y) {
                          var W =
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(
                              Z.quantileValues[Y]
                            );
                          if (W) return 'quantileValues.' + W;
                        }
                      }
                      if (Z.flags != null && Z.hasOwnProperty('flags')) {
                        if (!Z1.isInteger(Z.flags)) return 'flags: integer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint) return Z;
                      var Y = new Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                      if (Z.attributes) {
                        if (!Array.isArray(Z.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected'
                          );
                        Y.attributes = [];
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          if (typeof Z.attributes[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected'
                            );
                          Y.attributes[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.attributes[W]
                          );
                        }
                      }
                      if (Z.startTimeUnixNano != null) {
                        if (Z1.Long)
                          (Y.startTimeUnixNano = Z1.Long.fromValue(Z.startTimeUnixNano)).unsigned =
                            !1;
                        else if (typeof Z.startTimeUnixNano === 'string')
                          Y.startTimeUnixNano = parseInt(Z.startTimeUnixNano, 10);
                        else if (typeof Z.startTimeUnixNano === 'number')
                          Y.startTimeUnixNano = Z.startTimeUnixNano;
                        else if (typeof Z.startTimeUnixNano === 'object')
                          Y.startTimeUnixNano = new Z1.LongBits(
                            Z.startTimeUnixNano.low >>> 0,
                            Z.startTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Z.timeUnixNano != null) {
                        if (Z1.Long)
                          (Y.timeUnixNano = Z1.Long.fromValue(Z.timeUnixNano)).unsigned = !1;
                        else if (typeof Z.timeUnixNano === 'string')
                          Y.timeUnixNano = parseInt(Z.timeUnixNano, 10);
                        else if (typeof Z.timeUnixNano === 'number')
                          Y.timeUnixNano = Z.timeUnixNano;
                        else if (typeof Z.timeUnixNano === 'object')
                          Y.timeUnixNano = new Z1.LongBits(
                            Z.timeUnixNano.low >>> 0,
                            Z.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Z.count != null) {
                        if (Z1.Long) (Y.count = Z1.Long.fromValue(Z.count)).unsigned = !1;
                        else if (typeof Z.count === 'string') Y.count = parseInt(Z.count, 10);
                        else if (typeof Z.count === 'number') Y.count = Z.count;
                        else if (typeof Z.count === 'object')
                          Y.count = new Z1.LongBits(
                            Z.count.low >>> 0,
                            Z.count.high >>> 0
                          ).toNumber();
                      }
                      if (Z.sum != null) Y.sum = Number(Z.sum);
                      if (Z.quantileValues) {
                        if (!Array.isArray(Z.quantileValues))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected'
                          );
                        Y.quantileValues = [];
                        for (var W = 0; W < Z.quantileValues.length; ++W) {
                          if (typeof Z.quantileValues[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected'
                            );
                          Y.quantileValues[W] =
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(
                              Z.quantileValues[W]
                            );
                        }
                      }
                      if (Z.flags != null) Y.flags = Z.flags >>> 0;
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) ((W.quantileValues = []), (W.attributes = []));
                      if (Y.defaults) {
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.startTimeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.startTimeUnixNano = Y.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.timeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.timeUnixNano = Y.longs === String ? '0' : 0;
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.count =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.count = Y.longs === String ? '0' : 0;
                        ((W.sum = 0), (W.flags = 0));
                      }
                      if (Z.startTimeUnixNano != null && Z.hasOwnProperty('startTimeUnixNano'))
                        if (typeof Z.startTimeUnixNano === 'number')
                          W.startTimeUnixNano =
                            Y.longs === String ? String(Z.startTimeUnixNano) : Z.startTimeUnixNano;
                        else
                          W.startTimeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.startTimeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.startTimeUnixNano.low >>> 0,
                                    Z.startTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.startTimeUnixNano;
                      if (Z.timeUnixNano != null && Z.hasOwnProperty('timeUnixNano'))
                        if (typeof Z.timeUnixNano === 'number')
                          W.timeUnixNano =
                            Y.longs === String ? String(Z.timeUnixNano) : Z.timeUnixNano;
                        else
                          W.timeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.timeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.timeUnixNano.low >>> 0,
                                    Z.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.timeUnixNano;
                      if (Z.count != null && Z.hasOwnProperty('count'))
                        if (typeof Z.count === 'number')
                          W.count = Y.longs === String ? String(Z.count) : Z.count;
                        else
                          W.count =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.count)
                              : Y.longs === Number
                                ? new Z1.LongBits(Z.count.low >>> 0, Z.count.high >>> 0).toNumber()
                                : Z.count;
                      if (Z.sum != null && Z.hasOwnProperty('sum'))
                        W.sum = Y.json && !isFinite(Z.sum) ? String(Z.sum) : Z.sum;
                      if (Z.quantileValues && Z.quantileValues.length) {
                        W.quantileValues = [];
                        for (var J = 0; J < Z.quantileValues.length; ++J)
                          W.quantileValues[J] =
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(
                              Z.quantileValues[J],
                              Y
                            );
                      }
                      if (Z.attributes && Z.attributes.length) {
                        W.attributes = [];
                        for (var J = 0; J < Z.attributes.length; ++J)
                          W.attributes[J] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.attributes[J],
                            Y
                          );
                      }
                      if (Z.flags != null && Z.hasOwnProperty('flags')) W.flags = Z.flags;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.metrics.v1.SummaryDataPoint';
                    }),
                    (G.ValueAtQuantile = (function () {
                      function D(Z) {
                        if (Z) {
                          for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                            if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                        }
                      }
                      return (
                        (D.prototype.quantile = null),
                        (D.prototype.value = null),
                        (D.create = function Z(Y) {
                          return new D(Y);
                        }),
                        (D.encode = function Z(Y, W) {
                          if (!W) W = k4.create();
                          if (Y.quantile != null && Object.hasOwnProperty.call(Y, 'quantile'))
                            W.uint32(9).double(Y.quantile);
                          if (Y.value != null && Object.hasOwnProperty.call(Y, 'value'))
                            W.uint32(17).double(Y.value);
                          return W;
                        }),
                        (D.encodeDelimited = function Z(Y, W) {
                          return this.encode(Y, W).ldelim();
                        }),
                        (D.decode = function Z(Y, W) {
                          if (!(Y instanceof LA)) Y = LA.create(Y);
                          var F = W === void 0 ? Y.len : Y.pos + W,
                            J =
                              new Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                          while (Y.pos < F) {
                            var C = Y.uint32();
                            switch (C >>> 3) {
                              case 1: {
                                J.quantile = Y.double();
                                break;
                              }
                              case 2: {
                                J.value = Y.double();
                                break;
                              }
                              default:
                                Y.skipType(C & 7);
                                break;
                            }
                          }
                          return J;
                        }),
                        (D.decodeDelimited = function Z(Y) {
                          if (!(Y instanceof LA)) Y = new LA(Y);
                          return this.decode(Y, Y.uint32());
                        }),
                        (D.verify = function Z(Y) {
                          if (typeof Y !== 'object' || Y === null) return 'object expected';
                          if (Y.quantile != null && Y.hasOwnProperty('quantile')) {
                            if (typeof Y.quantile !== 'number') return 'quantile: number expected';
                          }
                          if (Y.value != null && Y.hasOwnProperty('value')) {
                            if (typeof Y.value !== 'number') return 'value: number expected';
                          }
                          return null;
                        }),
                        (D.fromObject = function Z(Y) {
                          if (
                            Y instanceof
                            Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile
                          )
                            return Y;
                          var W =
                            new Q1.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                          if (Y.quantile != null) W.quantile = Number(Y.quantile);
                          if (Y.value != null) W.value = Number(Y.value);
                          return W;
                        }),
                        (D.toObject = function Z(Y, W) {
                          if (!W) W = {};
                          var F = {};
                          if (W.defaults) ((F.quantile = 0), (F.value = 0));
                          if (Y.quantile != null && Y.hasOwnProperty('quantile'))
                            F.quantile =
                              W.json && !isFinite(Y.quantile) ? String(Y.quantile) : Y.quantile;
                          if (Y.value != null && Y.hasOwnProperty('value'))
                            F.value = W.json && !isFinite(Y.value) ? String(Y.value) : Y.value;
                          return F;
                        }),
                        (D.prototype.toJSON = function Z() {
                          return this.constructor.toObject(this, S9.util.toJSONOptions);
                        }),
                        (D.getTypeUrl = function Z(Y) {
                          if (Y === void 0) Y = 'type.googleapis.com';
                          return (
                            Y + '/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile'
                          );
                        }),
                        D
                      );
                    })()),
                    G
                  );
                })()),
                (I.Exemplar = (function () {
                  function G(Z) {
                    if (((this.filteredAttributes = []), Z)) {
                      for (var Y = Object.keys(Z), W = 0; W < Y.length; ++W)
                        if (Z[Y[W]] != null) this[Y[W]] = Z[Y[W]];
                    }
                  }
                  ((G.prototype.filteredAttributes = Z1.emptyArray),
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.asDouble = null),
                    (G.prototype.asInt = null),
                    (G.prototype.spanId = null),
                    (G.prototype.traceId = null));
                  var D;
                  return (
                    Object.defineProperty(G.prototype, 'value', {
                      get: Z1.oneOfGetter((D = ['asDouble', 'asInt'])),
                      set: Z1.oneOfSetter(D),
                    }),
                    (G.create = function Z(Y) {
                      return new G(Y);
                    }),
                    (G.encode = function Z(Y, W) {
                      if (!W) W = k4.create();
                      if (Y.timeUnixNano != null && Object.hasOwnProperty.call(Y, 'timeUnixNano'))
                        W.uint32(17).fixed64(Y.timeUnixNano);
                      if (Y.asDouble != null && Object.hasOwnProperty.call(Y, 'asDouble'))
                        W.uint32(25).double(Y.asDouble);
                      if (Y.spanId != null && Object.hasOwnProperty.call(Y, 'spanId'))
                        W.uint32(34).bytes(Y.spanId);
                      if (Y.traceId != null && Object.hasOwnProperty.call(Y, 'traceId'))
                        W.uint32(42).bytes(Y.traceId);
                      if (Y.asInt != null && Object.hasOwnProperty.call(Y, 'asInt'))
                        W.uint32(49).sfixed64(Y.asInt);
                      if (Y.filteredAttributes != null && Y.filteredAttributes.length)
                        for (var F = 0; F < Y.filteredAttributes.length; ++F)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Y.filteredAttributes[F],
                            W.uint32(58).fork()
                          ).ldelim();
                      return W;
                    }),
                    (G.encodeDelimited = function Z(Y, W) {
                      return this.encode(Y, W).ldelim();
                    }),
                    (G.decode = function Z(Y, W) {
                      if (!(Y instanceof LA)) Y = LA.create(Y);
                      var F = W === void 0 ? Y.len : Y.pos + W,
                        J = new Q1.opentelemetry.proto.metrics.v1.Exemplar();
                      while (Y.pos < F) {
                        var C = Y.uint32();
                        switch (C >>> 3) {
                          case 7: {
                            if (!(J.filteredAttributes && J.filteredAttributes.length))
                              J.filteredAttributes = [];
                            J.filteredAttributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Y, Y.uint32())
                            );
                            break;
                          }
                          case 2: {
                            J.timeUnixNano = Y.fixed64();
                            break;
                          }
                          case 3: {
                            J.asDouble = Y.double();
                            break;
                          }
                          case 6: {
                            J.asInt = Y.sfixed64();
                            break;
                          }
                          case 4: {
                            J.spanId = Y.bytes();
                            break;
                          }
                          case 5: {
                            J.traceId = Y.bytes();
                            break;
                          }
                          default:
                            Y.skipType(C & 7);
                            break;
                        }
                      }
                      return J;
                    }),
                    (G.decodeDelimited = function Z(Y) {
                      if (!(Y instanceof LA)) Y = new LA(Y);
                      return this.decode(Y, Y.uint32());
                    }),
                    (G.verify = function Z(Y) {
                      if (typeof Y !== 'object' || Y === null) return 'object expected';
                      var W = {};
                      if (Y.filteredAttributes != null && Y.hasOwnProperty('filteredAttributes')) {
                        if (!Array.isArray(Y.filteredAttributes))
                          return 'filteredAttributes: array expected';
                        for (var F = 0; F < Y.filteredAttributes.length; ++F) {
                          var J = Q1.opentelemetry.proto.common.v1.KeyValue.verify(
                            Y.filteredAttributes[F]
                          );
                          if (J) return 'filteredAttributes.' + J;
                        }
                      }
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Y.timeUnixNano) &&
                          !(
                            Y.timeUnixNano &&
                            Z1.isInteger(Y.timeUnixNano.low) &&
                            Z1.isInteger(Y.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (Y.asDouble != null && Y.hasOwnProperty('asDouble')) {
                        if (((W.value = 1), typeof Y.asDouble !== 'number'))
                          return 'asDouble: number expected';
                      }
                      if (Y.asInt != null && Y.hasOwnProperty('asInt')) {
                        if (W.value === 1) return 'value: multiple values';
                        if (
                          ((W.value = 1),
                          !Z1.isInteger(Y.asInt) &&
                            !(Y.asInt && Z1.isInteger(Y.asInt.low) && Z1.isInteger(Y.asInt.high)))
                        )
                          return 'asInt: integer|Long expected';
                      }
                      if (Y.spanId != null && Y.hasOwnProperty('spanId')) {
                        if (
                          !(
                            (Y.spanId && typeof Y.spanId.length === 'number') ||
                            Z1.isString(Y.spanId)
                          )
                        )
                          return 'spanId: buffer expected';
                      }
                      if (Y.traceId != null && Y.hasOwnProperty('traceId')) {
                        if (
                          !(
                            (Y.traceId && typeof Y.traceId.length === 'number') ||
                            Z1.isString(Y.traceId)
                          )
                        )
                          return 'traceId: buffer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function Z(Y) {
                      if (Y instanceof Q1.opentelemetry.proto.metrics.v1.Exemplar) return Y;
                      var W = new Q1.opentelemetry.proto.metrics.v1.Exemplar();
                      if (Y.filteredAttributes) {
                        if (!Array.isArray(Y.filteredAttributes))
                          throw TypeError(
                            '.opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected'
                          );
                        W.filteredAttributes = [];
                        for (var F = 0; F < Y.filteredAttributes.length; ++F) {
                          if (typeof Y.filteredAttributes[F] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected'
                            );
                          W.filteredAttributes[F] =
                            Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                              Y.filteredAttributes[F]
                            );
                        }
                      }
                      if (Y.timeUnixNano != null) {
                        if (Z1.Long)
                          (W.timeUnixNano = Z1.Long.fromValue(Y.timeUnixNano)).unsigned = !1;
                        else if (typeof Y.timeUnixNano === 'string')
                          W.timeUnixNano = parseInt(Y.timeUnixNano, 10);
                        else if (typeof Y.timeUnixNano === 'number')
                          W.timeUnixNano = Y.timeUnixNano;
                        else if (typeof Y.timeUnixNano === 'object')
                          W.timeUnixNano = new Z1.LongBits(
                            Y.timeUnixNano.low >>> 0,
                            Y.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Y.asDouble != null) W.asDouble = Number(Y.asDouble);
                      if (Y.asInt != null) {
                        if (Z1.Long) (W.asInt = Z1.Long.fromValue(Y.asInt)).unsigned = !1;
                        else if (typeof Y.asInt === 'string') W.asInt = parseInt(Y.asInt, 10);
                        else if (typeof Y.asInt === 'number') W.asInt = Y.asInt;
                        else if (typeof Y.asInt === 'object')
                          W.asInt = new Z1.LongBits(
                            Y.asInt.low >>> 0,
                            Y.asInt.high >>> 0
                          ).toNumber();
                      }
                      if (Y.spanId != null) {
                        if (typeof Y.spanId === 'string')
                          Z1.base64.decode(
                            Y.spanId,
                            (W.spanId = Z1.newBuffer(Z1.base64.length(Y.spanId))),
                            0
                          );
                        else if (Y.spanId.length >= 0) W.spanId = Y.spanId;
                      }
                      if (Y.traceId != null) {
                        if (typeof Y.traceId === 'string')
                          Z1.base64.decode(
                            Y.traceId,
                            (W.traceId = Z1.newBuffer(Z1.base64.length(Y.traceId))),
                            0
                          );
                        else if (Y.traceId.length >= 0) W.traceId = Y.traceId;
                      }
                      return W;
                    }),
                    (G.toObject = function Z(Y, W) {
                      if (!W) W = {};
                      var F = {};
                      if (W.arrays || W.defaults) F.filteredAttributes = [];
                      if (W.defaults) {
                        if (Z1.Long) {
                          var J = new Z1.Long(0, 0, !1);
                          F.timeUnixNano =
                            W.longs === String
                              ? J.toString()
                              : W.longs === Number
                                ? J.toNumber()
                                : J;
                        } else F.timeUnixNano = W.longs === String ? '0' : 0;
                        if (W.bytes === String) F.spanId = '';
                        else if (((F.spanId = []), W.bytes !== Array))
                          F.spanId = Z1.newBuffer(F.spanId);
                        if (W.bytes === String) F.traceId = '';
                        else if (((F.traceId = []), W.bytes !== Array))
                          F.traceId = Z1.newBuffer(F.traceId);
                      }
                      if (Y.timeUnixNano != null && Y.hasOwnProperty('timeUnixNano'))
                        if (typeof Y.timeUnixNano === 'number')
                          F.timeUnixNano =
                            W.longs === String ? String(Y.timeUnixNano) : Y.timeUnixNano;
                        else
                          F.timeUnixNano =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.timeUnixNano)
                              : W.longs === Number
                                ? new Z1.LongBits(
                                    Y.timeUnixNano.low >>> 0,
                                    Y.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Y.timeUnixNano;
                      if (Y.asDouble != null && Y.hasOwnProperty('asDouble')) {
                        if (
                          ((F.asDouble =
                            W.json && !isFinite(Y.asDouble) ? String(Y.asDouble) : Y.asDouble),
                          W.oneofs)
                        )
                          F.value = 'asDouble';
                      }
                      if (Y.spanId != null && Y.hasOwnProperty('spanId'))
                        F.spanId =
                          W.bytes === String
                            ? Z1.base64.encode(Y.spanId, 0, Y.spanId.length)
                            : W.bytes === Array
                              ? Array.prototype.slice.call(Y.spanId)
                              : Y.spanId;
                      if (Y.traceId != null && Y.hasOwnProperty('traceId'))
                        F.traceId =
                          W.bytes === String
                            ? Z1.base64.encode(Y.traceId, 0, Y.traceId.length)
                            : W.bytes === Array
                              ? Array.prototype.slice.call(Y.traceId)
                              : Y.traceId;
                      if (Y.asInt != null && Y.hasOwnProperty('asInt')) {
                        if (typeof Y.asInt === 'number')
                          F.asInt = W.longs === String ? String(Y.asInt) : Y.asInt;
                        else
                          F.asInt =
                            W.longs === String
                              ? Z1.Long.prototype.toString.call(Y.asInt)
                              : W.longs === Number
                                ? new Z1.LongBits(Y.asInt.low >>> 0, Y.asInt.high >>> 0).toNumber()
                                : Y.asInt;
                        if (W.oneofs) F.value = 'asInt';
                      }
                      if (Y.filteredAttributes && Y.filteredAttributes.length) {
                        F.filteredAttributes = [];
                        for (var C = 0; C < Y.filteredAttributes.length; ++C)
                          F.filteredAttributes[C] =
                            Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                              Y.filteredAttributes[C],
                              W
                            );
                      }
                      return F;
                    }),
                    (G.prototype.toJSON = function Z() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function Z(Y) {
                      if (Y === void 0) Y = 'type.googleapis.com';
                      return Y + '/opentelemetry.proto.metrics.v1.Exemplar';
                    }),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        (B.logs = (function () {
          var Q = {};
          return (
            (Q.v1 = (function () {
              var I = {};
              return (
                (I.LogsData = (function () {
                  function G(D) {
                    if (((this.resourceLogs = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resourceLogs = Z1.emptyArray),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resourceLogs != null && Z.resourceLogs.length)
                        for (var W = 0; W < Z.resourceLogs.length; ++W)
                          Q1.opentelemetry.proto.logs.v1.ResourceLogs.encode(
                            Z.resourceLogs[W],
                            Y.uint32(10).fork()
                          ).ldelim();
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.logs.v1.LogsData();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            if (!(F.resourceLogs && F.resourceLogs.length)) F.resourceLogs = [];
                            F.resourceLogs.push(
                              Q1.opentelemetry.proto.logs.v1.ResourceLogs.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resourceLogs != null && Z.hasOwnProperty('resourceLogs')) {
                        if (!Array.isArray(Z.resourceLogs)) return 'resourceLogs: array expected';
                        for (var Y = 0; Y < Z.resourceLogs.length; ++Y) {
                          var W = Q1.opentelemetry.proto.logs.v1.ResourceLogs.verify(
                            Z.resourceLogs[Y]
                          );
                          if (W) return 'resourceLogs.' + W;
                        }
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.logs.v1.LogsData) return Z;
                      var Y = new Q1.opentelemetry.proto.logs.v1.LogsData();
                      if (Z.resourceLogs) {
                        if (!Array.isArray(Z.resourceLogs))
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected'
                          );
                        Y.resourceLogs = [];
                        for (var W = 0; W < Z.resourceLogs.length; ++W) {
                          if (typeof Z.resourceLogs[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected'
                            );
                          Y.resourceLogs[W] =
                            Q1.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(
                              Z.resourceLogs[W]
                            );
                        }
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.resourceLogs = [];
                      if (Z.resourceLogs && Z.resourceLogs.length) {
                        W.resourceLogs = [];
                        for (var F = 0; F < Z.resourceLogs.length; ++F)
                          W.resourceLogs[F] = Q1.opentelemetry.proto.logs.v1.ResourceLogs.toObject(
                            Z.resourceLogs[F],
                            Y
                          );
                      }
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.logs.v1.LogsData';
                    }),
                    G
                  );
                })()),
                (I.ResourceLogs = (function () {
                  function G(D) {
                    if (((this.scopeLogs = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.resource = null),
                    (G.prototype.scopeLogs = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.resource != null && Object.hasOwnProperty.call(Z, 'resource'))
                        Q1.opentelemetry.proto.resource.v1.Resource.encode(
                          Z.resource,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.scopeLogs != null && Z.scopeLogs.length)
                        for (var W = 0; W < Z.scopeLogs.length; ++W)
                          Q1.opentelemetry.proto.logs.v1.ScopeLogs.encode(
                            Z.scopeLogs[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.logs.v1.ResourceLogs();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.resource = Q1.opentelemetry.proto.resource.v1.Resource.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.scopeLogs && F.scopeLogs.length)) F.scopeLogs = [];
                            F.scopeLogs.push(
                              Q1.opentelemetry.proto.logs.v1.ScopeLogs.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.resource != null && Z.hasOwnProperty('resource')) {
                        var Y = Q1.opentelemetry.proto.resource.v1.Resource.verify(Z.resource);
                        if (Y) return 'resource.' + Y;
                      }
                      if (Z.scopeLogs != null && Z.hasOwnProperty('scopeLogs')) {
                        if (!Array.isArray(Z.scopeLogs)) return 'scopeLogs: array expected';
                        for (var W = 0; W < Z.scopeLogs.length; ++W) {
                          var Y = Q1.opentelemetry.proto.logs.v1.ScopeLogs.verify(Z.scopeLogs[W]);
                          if (Y) return 'scopeLogs.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.logs.v1.ResourceLogs) return Z;
                      var Y = new Q1.opentelemetry.proto.logs.v1.ResourceLogs();
                      if (Z.resource != null) {
                        if (typeof Z.resource !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected'
                          );
                        Y.resource = Q1.opentelemetry.proto.resource.v1.Resource.fromObject(
                          Z.resource
                        );
                      }
                      if (Z.scopeLogs) {
                        if (!Array.isArray(Z.scopeLogs))
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected'
                          );
                        Y.scopeLogs = [];
                        for (var W = 0; W < Z.scopeLogs.length; ++W) {
                          if (typeof Z.scopeLogs[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected'
                            );
                          Y.scopeLogs[W] = Q1.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(
                            Z.scopeLogs[W]
                          );
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.scopeLogs = [];
                      if (Y.defaults) ((W.resource = null), (W.schemaUrl = ''));
                      if (Z.resource != null && Z.hasOwnProperty('resource'))
                        W.resource = Q1.opentelemetry.proto.resource.v1.Resource.toObject(
                          Z.resource,
                          Y
                        );
                      if (Z.scopeLogs && Z.scopeLogs.length) {
                        W.scopeLogs = [];
                        for (var F = 0; F < Z.scopeLogs.length; ++F)
                          W.scopeLogs[F] = Q1.opentelemetry.proto.logs.v1.ScopeLogs.toObject(
                            Z.scopeLogs[F],
                            Y
                          );
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.logs.v1.ResourceLogs';
                    }),
                    G
                  );
                })()),
                (I.ScopeLogs = (function () {
                  function G(D) {
                    if (((this.logRecords = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.scope = null),
                    (G.prototype.logRecords = Z1.emptyArray),
                    (G.prototype.schemaUrl = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.scope != null && Object.hasOwnProperty.call(Z, 'scope'))
                        Q1.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                          Z.scope,
                          Y.uint32(10).fork()
                        ).ldelim();
                      if (Z.logRecords != null && Z.logRecords.length)
                        for (var W = 0; W < Z.logRecords.length; ++W)
                          Q1.opentelemetry.proto.logs.v1.LogRecord.encode(
                            Z.logRecords[W],
                            Y.uint32(18).fork()
                          ).ldelim();
                      if (Z.schemaUrl != null && Object.hasOwnProperty.call(Z, 'schemaUrl'))
                        Y.uint32(26).string(Z.schemaUrl);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.logs.v1.ScopeLogs();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 2: {
                            if (!(F.logRecords && F.logRecords.length)) F.logRecords = [];
                            F.logRecords.push(
                              Q1.opentelemetry.proto.logs.v1.LogRecord.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 3: {
                            F.schemaUrl = Z.string();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.scope != null && Z.hasOwnProperty('scope')) {
                        var Y = Q1.opentelemetry.proto.common.v1.InstrumentationScope.verify(
                          Z.scope
                        );
                        if (Y) return 'scope.' + Y;
                      }
                      if (Z.logRecords != null && Z.hasOwnProperty('logRecords')) {
                        if (!Array.isArray(Z.logRecords)) return 'logRecords: array expected';
                        for (var W = 0; W < Z.logRecords.length; ++W) {
                          var Y = Q1.opentelemetry.proto.logs.v1.LogRecord.verify(Z.logRecords[W]);
                          if (Y) return 'logRecords.' + Y;
                        }
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl')) {
                        if (!Z1.isString(Z.schemaUrl)) return 'schemaUrl: string expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.logs.v1.ScopeLogs) return Z;
                      var Y = new Q1.opentelemetry.proto.logs.v1.ScopeLogs();
                      if (Z.scope != null) {
                        if (typeof Z.scope !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected'
                          );
                        Y.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(
                          Z.scope
                        );
                      }
                      if (Z.logRecords) {
                        if (!Array.isArray(Z.logRecords))
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected'
                          );
                        Y.logRecords = [];
                        for (var W = 0; W < Z.logRecords.length; ++W) {
                          if (typeof Z.logRecords[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected'
                            );
                          Y.logRecords[W] = Q1.opentelemetry.proto.logs.v1.LogRecord.fromObject(
                            Z.logRecords[W]
                          );
                        }
                      }
                      if (Z.schemaUrl != null) Y.schemaUrl = String(Z.schemaUrl);
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.logRecords = [];
                      if (Y.defaults) ((W.scope = null), (W.schemaUrl = ''));
                      if (Z.scope != null && Z.hasOwnProperty('scope'))
                        W.scope = Q1.opentelemetry.proto.common.v1.InstrumentationScope.toObject(
                          Z.scope,
                          Y
                        );
                      if (Z.logRecords && Z.logRecords.length) {
                        W.logRecords = [];
                        for (var F = 0; F < Z.logRecords.length; ++F)
                          W.logRecords[F] = Q1.opentelemetry.proto.logs.v1.LogRecord.toObject(
                            Z.logRecords[F],
                            Y
                          );
                      }
                      if (Z.schemaUrl != null && Z.hasOwnProperty('schemaUrl'))
                        W.schemaUrl = Z.schemaUrl;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.logs.v1.ScopeLogs';
                    }),
                    G
                  );
                })()),
                (I.SeverityNumber = (function () {
                  var G = {},
                    D = Object.create(G);
                  return (
                    (D[(G[0] = 'SEVERITY_NUMBER_UNSPECIFIED')] = 0),
                    (D[(G[1] = 'SEVERITY_NUMBER_TRACE')] = 1),
                    (D[(G[2] = 'SEVERITY_NUMBER_TRACE2')] = 2),
                    (D[(G[3] = 'SEVERITY_NUMBER_TRACE3')] = 3),
                    (D[(G[4] = 'SEVERITY_NUMBER_TRACE4')] = 4),
                    (D[(G[5] = 'SEVERITY_NUMBER_DEBUG')] = 5),
                    (D[(G[6] = 'SEVERITY_NUMBER_DEBUG2')] = 6),
                    (D[(G[7] = 'SEVERITY_NUMBER_DEBUG3')] = 7),
                    (D[(G[8] = 'SEVERITY_NUMBER_DEBUG4')] = 8),
                    (D[(G[9] = 'SEVERITY_NUMBER_INFO')] = 9),
                    (D[(G[10] = 'SEVERITY_NUMBER_INFO2')] = 10),
                    (D[(G[11] = 'SEVERITY_NUMBER_INFO3')] = 11),
                    (D[(G[12] = 'SEVERITY_NUMBER_INFO4')] = 12),
                    (D[(G[13] = 'SEVERITY_NUMBER_WARN')] = 13),
                    (D[(G[14] = 'SEVERITY_NUMBER_WARN2')] = 14),
                    (D[(G[15] = 'SEVERITY_NUMBER_WARN3')] = 15),
                    (D[(G[16] = 'SEVERITY_NUMBER_WARN4')] = 16),
                    (D[(G[17] = 'SEVERITY_NUMBER_ERROR')] = 17),
                    (D[(G[18] = 'SEVERITY_NUMBER_ERROR2')] = 18),
                    (D[(G[19] = 'SEVERITY_NUMBER_ERROR3')] = 19),
                    (D[(G[20] = 'SEVERITY_NUMBER_ERROR4')] = 20),
                    (D[(G[21] = 'SEVERITY_NUMBER_FATAL')] = 21),
                    (D[(G[22] = 'SEVERITY_NUMBER_FATAL2')] = 22),
                    (D[(G[23] = 'SEVERITY_NUMBER_FATAL3')] = 23),
                    (D[(G[24] = 'SEVERITY_NUMBER_FATAL4')] = 24),
                    D
                  );
                })()),
                (I.LogRecordFlags = (function () {
                  var G = {},
                    D = Object.create(G);
                  return (
                    (D[(G[0] = 'LOG_RECORD_FLAGS_DO_NOT_USE')] = 0),
                    (D[(G[255] = 'LOG_RECORD_FLAGS_TRACE_FLAGS_MASK')] = 255),
                    D
                  );
                })()),
                (I.LogRecord = (function () {
                  function G(D) {
                    if (((this.attributes = []), D)) {
                      for (var Z = Object.keys(D), Y = 0; Y < Z.length; ++Y)
                        if (D[Z[Y]] != null) this[Z[Y]] = D[Z[Y]];
                    }
                  }
                  return (
                    (G.prototype.timeUnixNano = null),
                    (G.prototype.observedTimeUnixNano = null),
                    (G.prototype.severityNumber = null),
                    (G.prototype.severityText = null),
                    (G.prototype.body = null),
                    (G.prototype.attributes = Z1.emptyArray),
                    (G.prototype.droppedAttributesCount = null),
                    (G.prototype.flags = null),
                    (G.prototype.traceId = null),
                    (G.prototype.spanId = null),
                    (G.create = function D(Z) {
                      return new G(Z);
                    }),
                    (G.encode = function D(Z, Y) {
                      if (!Y) Y = k4.create();
                      if (Z.timeUnixNano != null && Object.hasOwnProperty.call(Z, 'timeUnixNano'))
                        Y.uint32(9).fixed64(Z.timeUnixNano);
                      if (
                        Z.severityNumber != null &&
                        Object.hasOwnProperty.call(Z, 'severityNumber')
                      )
                        Y.uint32(16).int32(Z.severityNumber);
                      if (Z.severityText != null && Object.hasOwnProperty.call(Z, 'severityText'))
                        Y.uint32(26).string(Z.severityText);
                      if (Z.body != null && Object.hasOwnProperty.call(Z, 'body'))
                        Q1.opentelemetry.proto.common.v1.AnyValue.encode(
                          Z.body,
                          Y.uint32(42).fork()
                        ).ldelim();
                      if (Z.attributes != null && Z.attributes.length)
                        for (var W = 0; W < Z.attributes.length; ++W)
                          Q1.opentelemetry.proto.common.v1.KeyValue.encode(
                            Z.attributes[W],
                            Y.uint32(50).fork()
                          ).ldelim();
                      if (
                        Z.droppedAttributesCount != null &&
                        Object.hasOwnProperty.call(Z, 'droppedAttributesCount')
                      )
                        Y.uint32(56).uint32(Z.droppedAttributesCount);
                      if (Z.flags != null && Object.hasOwnProperty.call(Z, 'flags'))
                        Y.uint32(69).fixed32(Z.flags);
                      if (Z.traceId != null && Object.hasOwnProperty.call(Z, 'traceId'))
                        Y.uint32(74).bytes(Z.traceId);
                      if (Z.spanId != null && Object.hasOwnProperty.call(Z, 'spanId'))
                        Y.uint32(82).bytes(Z.spanId);
                      if (
                        Z.observedTimeUnixNano != null &&
                        Object.hasOwnProperty.call(Z, 'observedTimeUnixNano')
                      )
                        Y.uint32(89).fixed64(Z.observedTimeUnixNano);
                      return Y;
                    }),
                    (G.encodeDelimited = function D(Z, Y) {
                      return this.encode(Z, Y).ldelim();
                    }),
                    (G.decode = function D(Z, Y) {
                      if (!(Z instanceof LA)) Z = LA.create(Z);
                      var W = Y === void 0 ? Z.len : Z.pos + Y,
                        F = new Q1.opentelemetry.proto.logs.v1.LogRecord();
                      while (Z.pos < W) {
                        var J = Z.uint32();
                        switch (J >>> 3) {
                          case 1: {
                            F.timeUnixNano = Z.fixed64();
                            break;
                          }
                          case 11: {
                            F.observedTimeUnixNano = Z.fixed64();
                            break;
                          }
                          case 2: {
                            F.severityNumber = Z.int32();
                            break;
                          }
                          case 3: {
                            F.severityText = Z.string();
                            break;
                          }
                          case 5: {
                            F.body = Q1.opentelemetry.proto.common.v1.AnyValue.decode(
                              Z,
                              Z.uint32()
                            );
                            break;
                          }
                          case 6: {
                            if (!(F.attributes && F.attributes.length)) F.attributes = [];
                            F.attributes.push(
                              Q1.opentelemetry.proto.common.v1.KeyValue.decode(Z, Z.uint32())
                            );
                            break;
                          }
                          case 7: {
                            F.droppedAttributesCount = Z.uint32();
                            break;
                          }
                          case 8: {
                            F.flags = Z.fixed32();
                            break;
                          }
                          case 9: {
                            F.traceId = Z.bytes();
                            break;
                          }
                          case 10: {
                            F.spanId = Z.bytes();
                            break;
                          }
                          default:
                            Z.skipType(J & 7);
                            break;
                        }
                      }
                      return F;
                    }),
                    (G.decodeDelimited = function D(Z) {
                      if (!(Z instanceof LA)) Z = new LA(Z);
                      return this.decode(Z, Z.uint32());
                    }),
                    (G.verify = function D(Z) {
                      if (typeof Z !== 'object' || Z === null) return 'object expected';
                      if (Z.timeUnixNano != null && Z.hasOwnProperty('timeUnixNano')) {
                        if (
                          !Z1.isInteger(Z.timeUnixNano) &&
                          !(
                            Z.timeUnixNano &&
                            Z1.isInteger(Z.timeUnixNano.low) &&
                            Z1.isInteger(Z.timeUnixNano.high)
                          )
                        )
                          return 'timeUnixNano: integer|Long expected';
                      }
                      if (
                        Z.observedTimeUnixNano != null &&
                        Z.hasOwnProperty('observedTimeUnixNano')
                      ) {
                        if (
                          !Z1.isInteger(Z.observedTimeUnixNano) &&
                          !(
                            Z.observedTimeUnixNano &&
                            Z1.isInteger(Z.observedTimeUnixNano.low) &&
                            Z1.isInteger(Z.observedTimeUnixNano.high)
                          )
                        )
                          return 'observedTimeUnixNano: integer|Long expected';
                      }
                      if (Z.severityNumber != null && Z.hasOwnProperty('severityNumber'))
                        switch (Z.severityNumber) {
                          default:
                            return 'severityNumber: enum value expected';
                          case 0:
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 5:
                          case 6:
                          case 7:
                          case 8:
                          case 9:
                          case 10:
                          case 11:
                          case 12:
                          case 13:
                          case 14:
                          case 15:
                          case 16:
                          case 17:
                          case 18:
                          case 19:
                          case 20:
                          case 21:
                          case 22:
                          case 23:
                          case 24:
                            break;
                        }
                      if (Z.severityText != null && Z.hasOwnProperty('severityText')) {
                        if (!Z1.isString(Z.severityText)) return 'severityText: string expected';
                      }
                      if (Z.body != null && Z.hasOwnProperty('body')) {
                        var Y = Q1.opentelemetry.proto.common.v1.AnyValue.verify(Z.body);
                        if (Y) return 'body.' + Y;
                      }
                      if (Z.attributes != null && Z.hasOwnProperty('attributes')) {
                        if (!Array.isArray(Z.attributes)) return 'attributes: array expected';
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          var Y = Q1.opentelemetry.proto.common.v1.KeyValue.verify(Z.attributes[W]);
                          if (Y) return 'attributes.' + Y;
                        }
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      ) {
                        if (!Z1.isInteger(Z.droppedAttributesCount))
                          return 'droppedAttributesCount: integer expected';
                      }
                      if (Z.flags != null && Z.hasOwnProperty('flags')) {
                        if (!Z1.isInteger(Z.flags)) return 'flags: integer expected';
                      }
                      if (Z.traceId != null && Z.hasOwnProperty('traceId')) {
                        if (
                          !(
                            (Z.traceId && typeof Z.traceId.length === 'number') ||
                            Z1.isString(Z.traceId)
                          )
                        )
                          return 'traceId: buffer expected';
                      }
                      if (Z.spanId != null && Z.hasOwnProperty('spanId')) {
                        if (
                          !(
                            (Z.spanId && typeof Z.spanId.length === 'number') ||
                            Z1.isString(Z.spanId)
                          )
                        )
                          return 'spanId: buffer expected';
                      }
                      return null;
                    }),
                    (G.fromObject = function D(Z) {
                      if (Z instanceof Q1.opentelemetry.proto.logs.v1.LogRecord) return Z;
                      var Y = new Q1.opentelemetry.proto.logs.v1.LogRecord();
                      if (Z.timeUnixNano != null) {
                        if (Z1.Long)
                          (Y.timeUnixNano = Z1.Long.fromValue(Z.timeUnixNano)).unsigned = !1;
                        else if (typeof Z.timeUnixNano === 'string')
                          Y.timeUnixNano = parseInt(Z.timeUnixNano, 10);
                        else if (typeof Z.timeUnixNano === 'number')
                          Y.timeUnixNano = Z.timeUnixNano;
                        else if (typeof Z.timeUnixNano === 'object')
                          Y.timeUnixNano = new Z1.LongBits(
                            Z.timeUnixNano.low >>> 0,
                            Z.timeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      if (Z.observedTimeUnixNano != null) {
                        if (Z1.Long)
                          (Y.observedTimeUnixNano = Z1.Long.fromValue(
                            Z.observedTimeUnixNano
                          )).unsigned = !1;
                        else if (typeof Z.observedTimeUnixNano === 'string')
                          Y.observedTimeUnixNano = parseInt(Z.observedTimeUnixNano, 10);
                        else if (typeof Z.observedTimeUnixNano === 'number')
                          Y.observedTimeUnixNano = Z.observedTimeUnixNano;
                        else if (typeof Z.observedTimeUnixNano === 'object')
                          Y.observedTimeUnixNano = new Z1.LongBits(
                            Z.observedTimeUnixNano.low >>> 0,
                            Z.observedTimeUnixNano.high >>> 0
                          ).toNumber();
                      }
                      switch (Z.severityNumber) {
                        default:
                          if (typeof Z.severityNumber === 'number') {
                            Y.severityNumber = Z.severityNumber;
                            break;
                          }
                          break;
                        case 'SEVERITY_NUMBER_UNSPECIFIED':
                        case 0:
                          Y.severityNumber = 0;
                          break;
                        case 'SEVERITY_NUMBER_TRACE':
                        case 1:
                          Y.severityNumber = 1;
                          break;
                        case 'SEVERITY_NUMBER_TRACE2':
                        case 2:
                          Y.severityNumber = 2;
                          break;
                        case 'SEVERITY_NUMBER_TRACE3':
                        case 3:
                          Y.severityNumber = 3;
                          break;
                        case 'SEVERITY_NUMBER_TRACE4':
                        case 4:
                          Y.severityNumber = 4;
                          break;
                        case 'SEVERITY_NUMBER_DEBUG':
                        case 5:
                          Y.severityNumber = 5;
                          break;
                        case 'SEVERITY_NUMBER_DEBUG2':
                        case 6:
                          Y.severityNumber = 6;
                          break;
                        case 'SEVERITY_NUMBER_DEBUG3':
                        case 7:
                          Y.severityNumber = 7;
                          break;
                        case 'SEVERITY_NUMBER_DEBUG4':
                        case 8:
                          Y.severityNumber = 8;
                          break;
                        case 'SEVERITY_NUMBER_INFO':
                        case 9:
                          Y.severityNumber = 9;
                          break;
                        case 'SEVERITY_NUMBER_INFO2':
                        case 10:
                          Y.severityNumber = 10;
                          break;
                        case 'SEVERITY_NUMBER_INFO3':
                        case 11:
                          Y.severityNumber = 11;
                          break;
                        case 'SEVERITY_NUMBER_INFO4':
                        case 12:
                          Y.severityNumber = 12;
                          break;
                        case 'SEVERITY_NUMBER_WARN':
                        case 13:
                          Y.severityNumber = 13;
                          break;
                        case 'SEVERITY_NUMBER_WARN2':
                        case 14:
                          Y.severityNumber = 14;
                          break;
                        case 'SEVERITY_NUMBER_WARN3':
                        case 15:
                          Y.severityNumber = 15;
                          break;
                        case 'SEVERITY_NUMBER_WARN4':
                        case 16:
                          Y.severityNumber = 16;
                          break;
                        case 'SEVERITY_NUMBER_ERROR':
                        case 17:
                          Y.severityNumber = 17;
                          break;
                        case 'SEVERITY_NUMBER_ERROR2':
                        case 18:
                          Y.severityNumber = 18;
                          break;
                        case 'SEVERITY_NUMBER_ERROR3':
                        case 19:
                          Y.severityNumber = 19;
                          break;
                        case 'SEVERITY_NUMBER_ERROR4':
                        case 20:
                          Y.severityNumber = 20;
                          break;
                        case 'SEVERITY_NUMBER_FATAL':
                        case 21:
                          Y.severityNumber = 21;
                          break;
                        case 'SEVERITY_NUMBER_FATAL2':
                        case 22:
                          Y.severityNumber = 22;
                          break;
                        case 'SEVERITY_NUMBER_FATAL3':
                        case 23:
                          Y.severityNumber = 23;
                          break;
                        case 'SEVERITY_NUMBER_FATAL4':
                        case 24:
                          Y.severityNumber = 24;
                          break;
                      }
                      if (Z.severityText != null) Y.severityText = String(Z.severityText);
                      if (Z.body != null) {
                        if (typeof Z.body !== 'object')
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.LogRecord.body: object expected'
                          );
                        Y.body = Q1.opentelemetry.proto.common.v1.AnyValue.fromObject(Z.body);
                      }
                      if (Z.attributes) {
                        if (!Array.isArray(Z.attributes))
                          throw TypeError(
                            '.opentelemetry.proto.logs.v1.LogRecord.attributes: array expected'
                          );
                        Y.attributes = [];
                        for (var W = 0; W < Z.attributes.length; ++W) {
                          if (typeof Z.attributes[W] !== 'object')
                            throw TypeError(
                              '.opentelemetry.proto.logs.v1.LogRecord.attributes: object expected'
                            );
                          Y.attributes[W] = Q1.opentelemetry.proto.common.v1.KeyValue.fromObject(
                            Z.attributes[W]
                          );
                        }
                      }
                      if (Z.droppedAttributesCount != null)
                        Y.droppedAttributesCount = Z.droppedAttributesCount >>> 0;
                      if (Z.flags != null) Y.flags = Z.flags >>> 0;
                      if (Z.traceId != null) {
                        if (typeof Z.traceId === 'string')
                          Z1.base64.decode(
                            Z.traceId,
                            (Y.traceId = Z1.newBuffer(Z1.base64.length(Z.traceId))),
                            0
                          );
                        else if (Z.traceId.length >= 0) Y.traceId = Z.traceId;
                      }
                      if (Z.spanId != null) {
                        if (typeof Z.spanId === 'string')
                          Z1.base64.decode(
                            Z.spanId,
                            (Y.spanId = Z1.newBuffer(Z1.base64.length(Z.spanId))),
                            0
                          );
                        else if (Z.spanId.length >= 0) Y.spanId = Z.spanId;
                      }
                      return Y;
                    }),
                    (G.toObject = function D(Z, Y) {
                      if (!Y) Y = {};
                      var W = {};
                      if (Y.arrays || Y.defaults) W.attributes = [];
                      if (Y.defaults) {
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.timeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.timeUnixNano = Y.longs === String ? '0' : 0;
                        if (
                          ((W.severityNumber =
                            Y.enums === String ? 'SEVERITY_NUMBER_UNSPECIFIED' : 0),
                          (W.severityText = ''),
                          (W.body = null),
                          (W.droppedAttributesCount = 0),
                          (W.flags = 0),
                          Y.bytes === String)
                        )
                          W.traceId = '';
                        else if (((W.traceId = []), Y.bytes !== Array))
                          W.traceId = Z1.newBuffer(W.traceId);
                        if (Y.bytes === String) W.spanId = '';
                        else if (((W.spanId = []), Y.bytes !== Array))
                          W.spanId = Z1.newBuffer(W.spanId);
                        if (Z1.Long) {
                          var F = new Z1.Long(0, 0, !1);
                          W.observedTimeUnixNano =
                            Y.longs === String
                              ? F.toString()
                              : Y.longs === Number
                                ? F.toNumber()
                                : F;
                        } else W.observedTimeUnixNano = Y.longs === String ? '0' : 0;
                      }
                      if (Z.timeUnixNano != null && Z.hasOwnProperty('timeUnixNano'))
                        if (typeof Z.timeUnixNano === 'number')
                          W.timeUnixNano =
                            Y.longs === String ? String(Z.timeUnixNano) : Z.timeUnixNano;
                        else
                          W.timeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.timeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.timeUnixNano.low >>> 0,
                                    Z.timeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.timeUnixNano;
                      if (Z.severityNumber != null && Z.hasOwnProperty('severityNumber'))
                        W.severityNumber =
                          Y.enums === String
                            ? Q1.opentelemetry.proto.logs.v1.SeverityNumber[Z.severityNumber] ===
                              void 0
                              ? Z.severityNumber
                              : Q1.opentelemetry.proto.logs.v1.SeverityNumber[Z.severityNumber]
                            : Z.severityNumber;
                      if (Z.severityText != null && Z.hasOwnProperty('severityText'))
                        W.severityText = Z.severityText;
                      if (Z.body != null && Z.hasOwnProperty('body'))
                        W.body = Q1.opentelemetry.proto.common.v1.AnyValue.toObject(Z.body, Y);
                      if (Z.attributes && Z.attributes.length) {
                        W.attributes = [];
                        for (var J = 0; J < Z.attributes.length; ++J)
                          W.attributes[J] = Q1.opentelemetry.proto.common.v1.KeyValue.toObject(
                            Z.attributes[J],
                            Y
                          );
                      }
                      if (
                        Z.droppedAttributesCount != null &&
                        Z.hasOwnProperty('droppedAttributesCount')
                      )
                        W.droppedAttributesCount = Z.droppedAttributesCount;
                      if (Z.flags != null && Z.hasOwnProperty('flags')) W.flags = Z.flags;
                      if (Z.traceId != null && Z.hasOwnProperty('traceId'))
                        W.traceId =
                          Y.bytes === String
                            ? Z1.base64.encode(Z.traceId, 0, Z.traceId.length)
                            : Y.bytes === Array
                              ? Array.prototype.slice.call(Z.traceId)
                              : Z.traceId;
                      if (Z.spanId != null && Z.hasOwnProperty('spanId'))
                        W.spanId =
                          Y.bytes === String
                            ? Z1.base64.encode(Z.spanId, 0, Z.spanId.length)
                            : Y.bytes === Array
                              ? Array.prototype.slice.call(Z.spanId)
                              : Z.spanId;
                      if (
                        Z.observedTimeUnixNano != null &&
                        Z.hasOwnProperty('observedTimeUnixNano')
                      )
                        if (typeof Z.observedTimeUnixNano === 'number')
                          W.observedTimeUnixNano =
                            Y.longs === String
                              ? String(Z.observedTimeUnixNano)
                              : Z.observedTimeUnixNano;
                        else
                          W.observedTimeUnixNano =
                            Y.longs === String
                              ? Z1.Long.prototype.toString.call(Z.observedTimeUnixNano)
                              : Y.longs === Number
                                ? new Z1.LongBits(
                                    Z.observedTimeUnixNano.low >>> 0,
                                    Z.observedTimeUnixNano.high >>> 0
                                  ).toNumber()
                                : Z.observedTimeUnixNano;
                      return W;
                    }),
                    (G.prototype.toJSON = function D() {
                      return this.constructor.toObject(this, S9.util.toJSONOptions);
                    }),
                    (G.getTypeUrl = function D(Z) {
                      if (Z === void 0) Z = 'type.googleapis.com';
                      return Z + '/opentelemetry.proto.logs.v1.LogRecord';
                    }),
                    G
                  );
                })()),
                I
              );
            })()),
            Q
          );
        })()),
        B
      );
    })()),
    A
  );
})();
t52.exports = Q1;

// Module: ID2
// Params: BD2

Object.defineProperty(BD2, '__esModule', { value: !0 });
BD2.CompressionFilterFactory = BD2.CompressionFilter = void 0;
var uC1 = D1('zlib'),
  rG2 = vn1(),
  Sm = O6(),
  rn6 = bn1(),
  on6 = r8(),
  tn6 = (A) => {
    return typeof A === 'number' && typeof rG2.CompressionAlgorithms[A] === 'string';
  };
class At {
  async writeMessage(A, B) {
    let Q = A;
    if (B) Q = await this.compressMessage(Q);
    let I = Buffer.allocUnsafe(Q.length + 5);
    return (I.writeUInt8(B ? 1 : 0, 0), I.writeUInt32BE(Q.length, 1), Q.copy(I, 5), I);
  }
  async readMessage(A) {
    let B = A.readUInt8(0) === 1,
      Q = A.slice(5);
    if (B) Q = await this.decompressMessage(Q);
    return Q;
  }
}
class _m extends At {
  async compressMessage(A) {
    return A;
  }
  async writeMessage(A, B) {
    let Q = Buffer.allocUnsafe(A.length + 5);
    return (Q.writeUInt8(0, 0), Q.writeUInt32BE(A.length, 1), A.copy(Q, 5), Q);
  }
  decompressMessage(A) {
    return Promise.reject(
      new Error('Received compressed message but "grpc-encoding" header was identity')
    );
  }
}
class oG2 extends At {
  constructor(A) {
    super();
    this.maxRecvMessageLength = A;
  }
  compressMessage(A) {
    return new Promise((B, Q) => {
      uC1.deflate(A, (I, G) => {
        if (I) Q(I);
        else B(G);
      });
    });
  }
  decompressMessage(A) {
    return new Promise((B, Q) => {
      let I = 0,
        G = [],
        D = uC1.createInflate();
      (D.on('data', (Z) => {
        if (
          (G.push(Z),
          (I += Z.byteLength),
          this.maxRecvMessageLength !== -1 && I > this.maxRecvMessageLength)
        )
          (D.destroy(),
            Q({
              code: Sm.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`,
            }));
      }),
        D.on('end', () => {
          B(Buffer.concat(G));
        }),
        D.write(A),
        D.end());
    });
  }
}
class tG2 extends At {
  constructor(A) {
    super();
    this.maxRecvMessageLength = A;
  }
  compressMessage(A) {
    return new Promise((B, Q) => {
      uC1.gzip(A, (I, G) => {
        if (I) Q(I);
        else B(G);
      });
    });
  }
  decompressMessage(A) {
    return new Promise((B, Q) => {
      let I = 0,
        G = [],
        D = uC1.createGunzip();
      (D.on('data', (Z) => {
        if (
          (G.push(Z),
          (I += Z.byteLength),
          this.maxRecvMessageLength !== -1 && I > this.maxRecvMessageLength)
        )
          (D.destroy(),
            Q({
              code: Sm.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`,
            }));
      }),
        D.on('end', () => {
          B(Buffer.concat(G));
        }),
        D.write(A),
        D.end());
    });
  }
}
class eG2 extends At {
  constructor(A) {
    super();
    this.compressionName = A;
  }
  compressMessage(A) {
    return Promise.reject(
      new Error(
        `Received message compressed with unsupported compression method ${this.compressionName}`
      )
    );
  }
  decompressMessage(A) {
    return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
  }
}
function sG2(A, B) {
  switch (A) {
    case 'identity':
      return new _m();
    case 'deflate':
      return new oG2(B);
    case 'gzip':
      return new tG2(B);
    default:
      return new eG2(A);
  }
}
class gn1 extends rn6.BaseFilter {
  constructor(A, B) {
    var Q, I, G;
    super();
    ((this.sharedFilterConfig = B),
      (this.sendCompression = new _m()),
      (this.receiveCompression = new _m()),
      (this.currentCompressionAlgorithm = 'identity'));
    let D = A['grpc.default_compression_algorithm'];
    if (
      ((this.maxReceiveMessageLength =
        (Q = A['grpc.max_receive_message_length']) !== null && Q !== void 0
          ? Q
          : Sm.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH),
      (this.maxSendMessageLength =
        (I = A['grpc.max_send_message_length']) !== null && I !== void 0
          ? I
          : Sm.DEFAULT_MAX_SEND_MESSAGE_LENGTH),
      D !== void 0)
    )
      if (tn6(D)) {
        let Z = rG2.CompressionAlgorithms[D],
          Y =
            (G = B.serverSupportedEncodingHeader) === null || G === void 0 ? void 0 : G.split(',');
        if (!Y || Y.includes(Z))
          ((this.currentCompressionAlgorithm = Z),
            (this.sendCompression = sG2(this.currentCompressionAlgorithm, -1)));
      } else
        on6.log(
          Sm.LogVerbosity.ERROR,
          `Invalid value provided for grpc.default_compression_algorithm option: ${D}`
        );
  }
  async sendMetadata(A) {
    let B = await A;
    if (
      (B.set('grpc-accept-encoding', 'identity,deflate,gzip'),
      B.set('accept-encoding', 'identity'),
      this.currentCompressionAlgorithm === 'identity')
    )
      B.remove('grpc-encoding');
    else B.set('grpc-encoding', this.currentCompressionAlgorithm);
    return B;
  }
  receiveMetadata(A) {
    let B = A.get('grpc-encoding');
    if (B.length > 0) {
      let I = B[0];
      if (typeof I === 'string') this.receiveCompression = sG2(I, this.maxReceiveMessageLength);
    }
    A.remove('grpc-encoding');
    let Q = A.get('grpc-accept-encoding')[0];
    if (Q) {
      if (
        ((this.sharedFilterConfig.serverSupportedEncodingHeader = Q),
        !Q.split(',').includes(this.currentCompressionAlgorithm))
      )
        ((this.sendCompression = new _m()), (this.currentCompressionAlgorithm = 'identity'));
    }
    return (A.remove('grpc-accept-encoding'), A);
  }
  async sendMessage(A) {
    var B;
    let Q = await A;
    if (this.maxSendMessageLength !== -1 && Q.message.length > this.maxSendMessageLength)
      throw {
        code: Sm.Status.RESOURCE_EXHAUSTED,
        details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`,
      };
    let I;
    if (this.sendCompression instanceof _m) I = !1;
    else I = (((B = Q.flags) !== null && B !== void 0 ? B : 0) & 2) === 0;
    return { message: await this.sendCompression.writeMessage(Q.message, I), flags: Q.flags };
  }
  async receiveMessage(A) {
    return this.receiveCompression.readMessage(await A);
  }
}
BD2.CompressionFilter = gn1;
class AD2 {
  constructor(A, B) {
    ((this.options = B), (this.sharedFilterConfig = {}));
  }
  createFilter() {
    return new gn1(this.options, this.sharedFilterConfig);
  }
}
BD2.CompressionFilterFactory = AD2;

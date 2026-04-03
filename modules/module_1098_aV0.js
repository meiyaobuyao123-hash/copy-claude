// Module: aV0
// Params: iV0

Object.defineProperty(iV0, '__esModule', { value: !0 });
iV0.RawSha256 = void 0;
var lJ = Qv1(),
  Nh4 = (function () {
    function A() {
      ((this.state = Int32Array.from(lJ.INIT)),
        (this.temp = new Int32Array(64)),
        (this.buffer = new Uint8Array(64)),
        (this.bufferLength = 0),
        (this.bytesHashed = 0),
        (this.finished = !1));
    }
    return (
      (A.prototype.update = function (B) {
        if (this.finished) throw new Error('Attempted to update an already finished hash.');
        var Q = 0,
          I = B.byteLength;
        if (((this.bytesHashed += I), this.bytesHashed * 8 > lJ.MAX_HASHABLE_LENGTH))
          throw new Error('Cannot hash more than 2^53 - 1 bits');
        while (I > 0)
          if (
            ((this.buffer[this.bufferLength++] = B[Q++]), I--, this.bufferLength === lJ.BLOCK_SIZE)
          )
            (this.hashBuffer(), (this.bufferLength = 0));
      }),
      (A.prototype.digest = function () {
        if (!this.finished) {
          var B = this.bytesHashed * 8,
            Q = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
            I = this.bufferLength;
          if ((Q.setUint8(this.bufferLength++, 128), I % lJ.BLOCK_SIZE >= lJ.BLOCK_SIZE - 8)) {
            for (var G = this.bufferLength; G < lJ.BLOCK_SIZE; G++) Q.setUint8(G, 0);
            (this.hashBuffer(), (this.bufferLength = 0));
          }
          for (var G = this.bufferLength; G < lJ.BLOCK_SIZE - 8; G++) Q.setUint8(G, 0);
          (Q.setUint32(lJ.BLOCK_SIZE - 8, Math.floor(B / 4294967296), !0),
            Q.setUint32(lJ.BLOCK_SIZE - 4, B),
            this.hashBuffer(),
            (this.finished = !0));
        }
        var D = new Uint8Array(lJ.DIGEST_LENGTH);
        for (var G = 0; G < 8; G++)
          ((D[G * 4] = (this.state[G] >>> 24) & 255),
            (D[G * 4 + 1] = (this.state[G] >>> 16) & 255),
            (D[G * 4 + 2] = (this.state[G] >>> 8) & 255),
            (D[G * 4 + 3] = (this.state[G] >>> 0) & 255));
        return D;
      }),
      (A.prototype.hashBuffer = function () {
        var B = this,
          Q = B.buffer,
          I = B.state,
          G = I[0],
          D = I[1],
          Z = I[2],
          Y = I[3],
          W = I[4],
          F = I[5],
          J = I[6],
          C = I[7];
        for (var X = 0; X < lJ.BLOCK_SIZE; X++) {
          if (X < 16)
            this.temp[X] =
              ((Q[X * 4] & 255) << 24) |
              ((Q[X * 4 + 1] & 255) << 16) |
              ((Q[X * 4 + 2] & 255) << 8) |
              (Q[X * 4 + 3] & 255);
          else {
            var V = this.temp[X - 2],
              K = ((V >>> 17) | (V << 15)) ^ ((V >>> 19) | (V << 13)) ^ (V >>> 10);
            V = this.temp[X - 15];
            var U = ((V >>> 7) | (V << 25)) ^ ((V >>> 18) | (V << 14)) ^ (V >>> 3);
            this.temp[X] = ((K + this.temp[X - 7]) | 0) + ((U + this.temp[X - 16]) | 0);
          }
          var N =
              ((((((W >>> 6) | (W << 26)) ^ ((W >>> 11) | (W << 21)) ^ ((W >>> 25) | (W << 7))) +
                ((W & F) ^ (~W & J))) |
                0) +
                ((C + ((lJ.KEY[X] + this.temp[X]) | 0)) | 0)) |
              0,
            q =
              ((((G >>> 2) | (G << 30)) ^ ((G >>> 13) | (G << 19)) ^ ((G >>> 22) | (G << 10))) +
                ((G & D) ^ (G & Z) ^ (D & Z))) |
              0;
          ((C = J),
            (J = F),
            (F = W),
            (W = (Y + N) | 0),
            (Y = Z),
            (Z = D),
            (D = G),
            (G = (N + q) | 0));
        }
        ((I[0] += G),
          (I[1] += D),
          (I[2] += Z),
          (I[3] += Y),
          (I[4] += W),
          (I[5] += F),
          (I[6] += J),
          (I[7] += C));
      }),
      A
    );
  })();
iV0.RawSha256 = Nh4;

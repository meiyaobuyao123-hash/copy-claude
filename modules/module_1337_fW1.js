// Module: fW1
// Params: SK8,Wb0

var { maxUnsigned16Bit: HY6 } = iS(),
  od1,
  Xr = null,
  wh = 16386;
try {
  od1 = D1('node:crypto');
} catch {
  od1 = {
    randomFillSync: function A(B, Q, I) {
      for (let G = 0; G < B.length; ++G) B[G] = (Math.random() * 255) | 0;
      return B;
    },
  };
}
function zY6() {
  if (wh === 16386) ((wh = 0), od1.randomFillSync((Xr ??= Buffer.allocUnsafe(16386)), 0, 16386));
  return [Xr[wh++], Xr[wh++], Xr[wh++], Xr[wh++]];
}
class Yb0 {
  constructor(A) {
    this.frameData = A;
  }
  createFrame(A) {
    let B = this.frameData,
      Q = zY6(),
      I = B?.byteLength ?? 0,
      G = I,
      D = 6;
    if (I > HY6) ((D += 8), (G = 127));
    else if (I > 125) ((D += 2), (G = 126));
    let Z = Buffer.allocUnsafe(I + D);
    ((Z[0] = Z[1] = 0), (Z[0] |= 128), (Z[0] = (Z[0] & 240) + A));
    /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */ if (
      ((Z[D - 4] = Q[0]),
      (Z[D - 3] = Q[1]),
      (Z[D - 2] = Q[2]),
      (Z[D - 1] = Q[3]),
      (Z[1] = G),
      G === 126)
    )
      Z.writeUInt16BE(I, 2);
    else if (G === 127) ((Z[2] = Z[3] = 0), Z.writeUIntBE(I, 4, 6));
    Z[1] |= 128;
    for (let Y = 0; Y < I; ++Y) Z[D + Y] = B[Y] ^ Q[Y & 3];
    return Z;
  }
}
Wb0.exports = { WebsocketFrameSend: Yb0 };

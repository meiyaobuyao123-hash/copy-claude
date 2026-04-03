// Module: Eb0
// Params: jK8,wb0

var { createInflateRaw: xY6, Z_DEFAULT_WINDOWBITS: fY6 } = D1('node:zlib'),
  { isValidClientWindowBits: vY6 } = Cr(),
  bY6 = Buffer.from([0, 0, 255, 255]),
  gW1 = Symbol('kBuffer'),
  hW1 = Symbol('kLength');
class zb0 {
  #A;
  #B = {};
  constructor(A) {
    ((this.#B.serverNoContextTakeover = A.has('server_no_context_takeover')),
      (this.#B.serverMaxWindowBits = A.get('server_max_window_bits')));
  }
  decompress(A, B, Q) {
    if (!this.#A) {
      let I = fY6;
      if (this.#B.serverMaxWindowBits) {
        if (!vY6(this.#B.serverMaxWindowBits)) {
          Q(new Error('Invalid server_max_window_bits'));
          return;
        }
        I = Number.parseInt(this.#B.serverMaxWindowBits);
      }
      ((this.#A = xY6({ windowBits: I })),
        (this.#A[gW1] = []),
        (this.#A[hW1] = 0),
        this.#A.on('data', (G) => {
          (this.#A[gW1].push(G), (this.#A[hW1] += G.length));
        }),
        this.#A.on('error', (G) => {
          ((this.#A = null), Q(G));
        }));
    }
    if ((this.#A.write(A), B)) this.#A.write(bY6);
    this.#A.flush(() => {
      let I = Buffer.concat(this.#A[gW1], this.#A[hW1]);
      ((this.#A[gW1].length = 0), (this.#A[hW1] = 0), Q(null, I));
    });
  }
}
wb0.exports = { PerMessageDeflate: zb0 };

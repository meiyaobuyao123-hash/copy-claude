// Module: qv0
// Params: HK8,$v0

var { kState: Ch, kError: cd1, kResult: Hv0, kAborted: Dr, kLastProgressEventFired: ld1 } = pd1(),
  { ProgressEvent: IZ6 } = Xv0(),
  { getEncoding: zv0 } = Kv0(),
  { serializeAMimeType: GZ6, parseMIMEType: wv0 } = $Y(),
  { types: DZ6 } = D1('node:util'),
  { StringDecoder: Ev0 } = D1('string_decoder'),
  { btoa: Uv0 } = D1('node:buffer'),
  ZZ6 = { enumerable: !0, writable: !1, configurable: !1 };
function YZ6(A, B, Q, I) {
  if (A[Ch] === 'loading') throw new DOMException('Invalid state', 'InvalidStateError');
  ((A[Ch] = 'loading'), (A[Hv0] = null), (A[cd1] = null));
  let D = B.stream().getReader(),
    Z = [],
    Y = D.read(),
    W = !0;
  (async () => {
    while (!A[Dr])
      try {
        let { done: F, value: J } = await Y;
        if (W && !A[Dr])
          queueMicrotask(() => {
            gL('loadstart', A);
          });
        if (((W = !1), !F && DZ6.isUint8Array(J))) {
          if ((Z.push(J), (A[ld1] === void 0 || Date.now() - A[ld1] >= 50) && !A[Dr]))
            ((A[ld1] = Date.now()),
              queueMicrotask(() => {
                gL('progress', A);
              }));
          Y = D.read();
        } else if (F) {
          queueMicrotask(() => {
            A[Ch] = 'done';
            try {
              let C = WZ6(Z, Q, B.type, I);
              if (A[Dr]) return;
              ((A[Hv0] = C), gL('load', A));
            } catch (C) {
              ((A[cd1] = C), gL('error', A));
            }
            if (A[Ch] !== 'loading') gL('loadend', A);
          });
          break;
        }
      } catch (F) {
        if (A[Dr]) return;
        queueMicrotask(() => {
          if (((A[Ch] = 'done'), (A[cd1] = F), gL('error', A), A[Ch] !== 'loading'))
            gL('loadend', A);
        });
        break;
      }
  })();
}
function gL(A, B) {
  let Q = new IZ6(A, { bubbles: !1, cancelable: !1 });
  B.dispatchEvent(Q);
}
function WZ6(A, B, Q, I) {
  switch (B) {
    case 'DataURL': {
      let G = 'data:',
        D = wv0(Q || 'application/octet-stream');
      if (D !== 'failure') G += GZ6(D);
      G += ';base64,';
      let Z = new Ev0('latin1');
      for (let Y of A) G += Uv0(Z.write(Y));
      return ((G += Uv0(Z.end())), G);
    }
    case 'Text': {
      let G = 'failure';
      if (I) G = zv0(I);
      if (G === 'failure' && Q) {
        let D = wv0(Q);
        if (D !== 'failure') G = zv0(D.parameters.get('charset'));
      }
      if (G === 'failure') G = 'UTF-8';
      return FZ6(A, G);
    }
    case 'ArrayBuffer':
      return Nv0(A).buffer;
    case 'BinaryString': {
      let G = '',
        D = new Ev0('latin1');
      for (let Z of A) G += D.write(Z);
      return ((G += D.end()), G);
    }
  }
}
function FZ6(A, B) {
  let Q = Nv0(A),
    I = JZ6(Q),
    G = 0;
  if (I !== null) ((B = I), (G = I === 'UTF-8' ? 3 : 2));
  let D = Q.slice(G);
  return new TextDecoder(B).decode(D);
}
function JZ6(A) {
  let [B, Q, I] = A;
  if (B === 239 && Q === 187 && I === 191) return 'UTF-8';
  else if (B === 254 && Q === 255) return 'UTF-16BE';
  else if (B === 255 && Q === 254) return 'UTF-16LE';
  return null;
}
function Nv0(A) {
  let B = A.reduce((I, G) => {
      return I + G.byteLength;
    }, 0),
    Q = 0;
  return A.reduce((I, G) => {
    return (I.set(G, Q), (Q += G.byteLength), I);
  }, new Uint8Array(B));
}
$v0.exports = { staticPropertyDescriptors: ZZ6, readOperation: YZ6, fireAProgressEvent: gL };

// Module: Dw1
// Params: c1A

Object.defineProperty(c1A, '__esModule', { value: !0 });
var mO2 = QJ(),
  EE;
(function (A) {
  A[(A.PENDING = 0)] = 'PENDING';
  let Q = 1;
  A[(A.RESOLVED = Q)] = 'RESOLVED';
  let I = 2;
  A[(A.REJECTED = I)] = 'REJECTED';
})(EE || (EE = {}));
function dO2(A) {
  return new sK((B) => {
    B(A);
  });
}
function uO2(A) {
  return new sK((B, Q) => {
    Q(A);
  });
}
class sK {
  constructor(A) {
    (sK.prototype.__init.call(this),
      sK.prototype.__init2.call(this),
      sK.prototype.__init3.call(this),
      sK.prototype.__init4.call(this),
      (this._state = EE.PENDING),
      (this._handlers = []));
    try {
      A(this._resolve, this._reject);
    } catch (B) {
      this._reject(B);
    }
  }
  then(A, B) {
    return new sK((Q, I) => {
      (this._handlers.push([
        !1,
        (G) => {
          if (!A) Q(G);
          else
            try {
              Q(A(G));
            } catch (D) {
              I(D);
            }
        },
        (G) => {
          if (!B) I(G);
          else
            try {
              Q(B(G));
            } catch (D) {
              I(D);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(A) {
    return this.then((B) => B, A);
  }
  finally(A) {
    return new sK((B, Q) => {
      let I, G;
      return this.then(
        (D) => {
          if (((G = !1), (I = D), A)) A();
        },
        (D) => {
          if (((G = !0), (I = D), A)) A();
        }
      ).then(() => {
        if (G) {
          Q(I);
          return;
        }
        B(I);
      });
    });
  }
  __init() {
    this._resolve = (A) => {
      this._setResult(EE.RESOLVED, A);
    };
  }
  __init2() {
    this._reject = (A) => {
      this._setResult(EE.REJECTED, A);
    };
  }
  __init3() {
    this._setResult = (A, B) => {
      if (this._state !== EE.PENDING) return;
      if (mO2.isThenable(B)) {
        B.then(this._resolve, this._reject);
        return;
      }
      ((this._state = A), (this._value = B), this._executeHandlers());
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === EE.PENDING) return;
      let A = this._handlers.slice();
      ((this._handlers = []),
        A.forEach((B) => {
          if (B[0]) return;
          if (this._state === EE.RESOLVED) B[1](this._value);
          if (this._state === EE.REJECTED) B[2](this._value);
          B[0] = !0;
        }));
    };
  }
}
c1A.SyncPromise = sK;
c1A.rejectedSyncPromise = uO2;
c1A.resolvedSyncPromise = dO2;

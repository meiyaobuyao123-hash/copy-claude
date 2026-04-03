// Module: qC
// Params: YQ2

Object.defineProperty(YQ2, '__esModule', { value: !0 });
YQ2.EndpointMap = void 0;
YQ2.isTcpSubchannelAddress = yo;
YQ2.subchannelAddressEqual = DC1;
YQ2.subchannelAddressToString = GQ2;
YQ2.stringToSubchannelAddress = iu6;
YQ2.endpointEqual = nu6;
YQ2.endpointToString = au6;
YQ2.endpointHasAddress = DQ2;
var IQ2 = D1('net');
function yo(A) {
  return 'port' in A;
}
function DC1(A, B) {
  if (!A && !B) return !0;
  if (!A || !B) return !1;
  if (yo(A)) return yo(B) && A.host === B.host && A.port === B.port;
  else return !yo(B) && A.path === B.path;
}
function GQ2(A) {
  if (yo(A))
    if (IQ2.isIPv6(A.host)) return '[' + A.host + ']:' + A.port;
    else return A.host + ':' + A.port;
  else return A.path;
}
var lu6 = 443;
function iu6(A, B) {
  if (IQ2.isIP(A)) return { host: A, port: B !== null && B !== void 0 ? B : lu6 };
  else return { path: A };
}
function nu6(A, B) {
  if (A.addresses.length !== B.addresses.length) return !1;
  for (let Q = 0; Q < A.addresses.length; Q++) if (!DC1(A.addresses[Q], B.addresses[Q])) return !1;
  return !0;
}
function au6(A) {
  return '[' + A.addresses.map(GQ2).join(', ') + ']';
}
function DQ2(A, B) {
  for (let Q of A.addresses) if (DC1(Q, B)) return !0;
  return !1;
}
function jo(A, B) {
  if (A.addresses.length !== B.addresses.length) return !1;
  for (let Q of A.addresses) {
    let I = !1;
    for (let G of B.addresses)
      if (DC1(Q, G)) {
        I = !0;
        break;
      }
    if (!I) return !1;
  }
  return !0;
}
class ZQ2 {
  constructor() {
    this.map = new Set();
  }
  get size() {
    return this.map.size;
  }
  getForSubchannelAddress(A) {
    for (let B of this.map) if (DQ2(B.key, A)) return B.value;
    return;
  }
  deleteMissing(A) {
    let B = [];
    for (let Q of this.map) {
      let I = !1;
      for (let G of A) if (jo(G, Q.key)) I = !0;
      if (!I) (B.push(Q.value), this.map.delete(Q));
    }
    return B;
  }
  get(A) {
    for (let B of this.map) if (jo(A, B.key)) return B.value;
    return;
  }
  set(A, B) {
    for (let Q of this.map)
      if (jo(A, Q.key)) {
        Q.value = B;
        return;
      }
    this.map.add({ key: A, value: B });
  }
  delete(A) {
    for (let B of this.map)
      if (jo(A, B.key)) {
        this.map.delete(B);
        return;
      }
  }
  has(A) {
    for (let B of this.map) if (jo(A, B.key)) return !0;
    return !1;
  }
  clear() {
    this.map.clear();
  }
  *keys() {
    for (let A of this.map) yield A.key;
  }
  *values() {
    for (let A of this.map) yield A.value;
  }
  *entries() {
    for (let A of this.map) yield [A.key, A.value];
  }
}
YQ2.EndpointMap = ZQ2;

// Module: UJ1
// Params: x22

Object.defineProperty(x22, '__esModule', { value: !0 });
x22.execAsync = void 0;
var rx6 = D1('child_process'),
  ox6 = D1('util');
x22.execAsync = ox6.promisify(rx6.exec);

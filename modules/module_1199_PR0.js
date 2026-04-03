// Module: PR0
// Params: OR0

Object.defineProperty(OR0, '__esModule', { value: !0 });
OR0.Colours = void 0;
class a4 {
  static isEnabled(A) {
    return A.isTTY && (typeof A.getColorDepth === 'function' ? A.getColorDepth() > 2 : !0);
  }
  static refresh() {
    if (((a4.enabled = a4.isEnabled(process.stderr)), !this.enabled))
      ((a4.reset = ''),
        (a4.bright = ''),
        (a4.dim = ''),
        (a4.red = ''),
        (a4.green = ''),
        (a4.yellow = ''),
        (a4.blue = ''),
        (a4.magenta = ''),
        (a4.cyan = ''),
        (a4.white = ''),
        (a4.grey = ''));
    else
      ((a4.reset = '\x1B[0m'),
        (a4.bright = '\x1B[1m'),
        (a4.dim = '\x1B[2m'),
        (a4.red = '\x1B[31m'),
        (a4.green = '\x1B[32m'),
        (a4.yellow = '\x1B[33m'),
        (a4.blue = '\x1B[34m'),
        (a4.magenta = '\x1B[35m'),
        (a4.cyan = '\x1B[36m'),
        (a4.white = '\x1B[37m'),
        (a4.grey = '\x1B[90m'));
  }
}
OR0.Colours = a4;
a4.enabled = !1;
a4.reset = '';
a4.bright = '';
a4.dim = '';
a4.red = '';
a4.green = '';
a4.yellow = '';
a4.blue = '';
a4.magenta = '';
a4.cyan = '';
a4.white = '';
a4.grey = '';
a4.refresh();

// Module: xl1
// Params: r52

var kY = r52;
kY.build = 'minimal';
kY.Writer = kJ1();
kY.BufferWriter = f52();
kY.Reader = fJ1();
kY.BufferReader = c52();
kY.util = Bw();
kY.rpc = yl1();
kY.roots = kl1();
kY.configure = s52;
function s52() {
  (kY.util._configure(),
    kY.Writer._configure(kY.BufferWriter),
    kY.Reader._configure(kY.BufferReader));
}
s52();

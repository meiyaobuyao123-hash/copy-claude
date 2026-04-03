// Module: AWA
// Params: oYA

Object.defineProperty(oYA, '__esModule', { value: !0 });
oYA.animationFrame = oYA.animationFrameScheduler = void 0;
var WD9 = sYA(),
  FD9 = rYA();
oYA.animationFrameScheduler = new FD9.AnimationFrameScheduler(WD9.AnimationFrameAction);
oYA.animationFrame = oYA.animationFrameScheduler;

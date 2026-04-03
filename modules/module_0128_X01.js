// Module: X01
// Params: J6A

Object.defineProperty(J6A, '__esModule', { value: !0 });
var Ec2 = eu(),
  Uc2 = () => {
    let A = Ec2.getNavigationEntry();
    return (A && A.activationStart) || 0;
  };
J6A.getActivationStart = Uc2;

// Module: pC1
// Params: DD2

Object.defineProperty(DD2, '__esModule', { value: !0 });
DD2.restrictControlPlaneStatusCode = Va6;
var Hw = O6(),
  Xa6 = [
    Hw.Status.OK,
    Hw.Status.INVALID_ARGUMENT,
    Hw.Status.NOT_FOUND,
    Hw.Status.ALREADY_EXISTS,
    Hw.Status.FAILED_PRECONDITION,
    Hw.Status.ABORTED,
    Hw.Status.OUT_OF_RANGE,
    Hw.Status.DATA_LOSS,
  ];
function Va6(A, B) {
  if (Xa6.includes(A))
    return {
      code: Hw.Status.INTERNAL,
      details: `Invalid status from control plane: ${A} ${Hw.Status[A]} ${B}`,
    };
  else return { code: A, details: B };
}

// Module: Qf0
// Params: GK8,Bf0

var QG6 = eY1();
Bf0.exports = (A) => {
  return (B) => {
    return function Q(I, G) {
      return B(
        I,
        new QG6({ ...I, retryOptions: { ...A, ...I.retryOptions } }, { handler: G, dispatch: B })
      );
    };
  };
};

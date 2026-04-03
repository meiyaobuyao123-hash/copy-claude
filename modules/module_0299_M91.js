// Module: M91
// Params: QJA

Object.defineProperty(QJA, '__esModule', { value: !0 });
QJA.combineLatestInit = QJA.combineLatest = void 0;
var oY9 = G8(),
  tY9 = lN1(),
  eFA = mE(),
  AJA = lI(),
  eY9 = Jq(),
  oFA = IY(),
  AW9 = iN1(),
  BW9 = t2(),
  QW9 = hE();
function IW9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = oFA.popScheduler(A),
    I = oFA.popResultSelector(A),
    G = tY9.argsArgArrayOrObject(A),
    D = G.args,
    Z = G.keys;
  if (D.length === 0) return eFA.from([], Q);
  var Y = new oY9.Observable(
    BJA(
      D,
      Q,
      Z
        ? function (W) {
            return AW9.createObject(Z, W);
          }
        : AJA.identity
    )
  );
  return I ? Y.pipe(eY9.mapOneOrManyArgs(I)) : Y;
}
QJA.combineLatest = IW9;
function BJA(A, B, Q) {
  if (Q === void 0) Q = AJA.identity;
  return function (I) {
    tFA(
      B,
      function () {
        var G = A.length,
          D = new Array(G),
          Z = G,
          Y = G,
          W = function (J) {
            tFA(
              B,
              function () {
                var C = eFA.from(A[J], B),
                  X = !1;
                C.subscribe(
                  BW9.createOperatorSubscriber(
                    I,
                    function (V) {
                      if (((D[J] = V), !X)) ((X = !0), Y--);
                      if (!Y) I.next(Q(D.slice()));
                    },
                    function () {
                      if (!--Z) I.complete();
                    }
                  )
                );
              },
              I
            );
          };
        for (var F = 0; F < G; F++) W(F);
      },
      I
    );
  };
}
QJA.combineLatestInit = BJA;
function tFA(A, B, Q) {
  if (A) QW9.executeSchedule(Q, A, B);
  else B();
}

// Module: HR0
// Params: VC8,KR0

var hZ1 = null,
  IA6 =
    /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
  GA6 =
    /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
  DA6 = function (A) {
    var B = {
      strict: !1,
      storeAsString: !1,
      alwaysParseAsBig: !1,
      useNativeBigInt: !1,
      protoAction: 'error',
      constructorAction: 'error',
    };
    if (A !== void 0 && A !== null) {
      if (A.strict === !0) B.strict = !0;
      if (A.storeAsString === !0) B.storeAsString = !0;
      if (
        ((B.alwaysParseAsBig = A.alwaysParseAsBig === !0 ? A.alwaysParseAsBig : !1),
        (B.useNativeBigInt = A.useNativeBigInt === !0 ? A.useNativeBigInt : !1),
        typeof A.constructorAction !== 'undefined')
      )
        if (
          A.constructorAction === 'error' ||
          A.constructorAction === 'ignore' ||
          A.constructorAction === 'preserve'
        )
          B.constructorAction = A.constructorAction;
        else
          throw new Error(
            `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${A.constructorAction}`
          );
      if (typeof A.protoAction !== 'undefined')
        if (A.protoAction === 'error' || A.protoAction === 'ignore' || A.protoAction === 'preserve')
          B.protoAction = A.protoAction;
        else
          throw new Error(
            `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${A.protoAction}`
          );
    }
    var Q,
      I,
      G = {
        '"': '"',
        '\\': '\\',
        '/': '/',
        b: '\b',
        f: '\f',
        n: `
`,
        r: '\r',
        t: '\t',
      },
      D,
      Z = function (U) {
        throw { name: 'SyntaxError', message: U, at: Q, text: D };
      },
      Y = function (U) {
        if (U && U !== I) Z("Expected '" + U + "' instead of '" + I + "'");
        return ((I = D.charAt(Q)), (Q += 1), I);
      },
      W = function () {
        var U,
          N = '';
        if (I === '-') ((N = '-'), Y('-'));
        while (I >= '0' && I <= '9') ((N += I), Y());
        if (I === '.') {
          N += '.';
          while (Y() && I >= '0' && I <= '9') N += I;
        }
        if (I === 'e' || I === 'E') {
          if (((N += I), Y(), I === '-' || I === '+')) ((N += I), Y());
          while (I >= '0' && I <= '9') ((N += I), Y());
        }
        if (((U = +N), !isFinite(U))) Z('Bad number');
        else {
          if (hZ1 == null) hZ1 = Cg1();
          if (N.length > 15)
            return B.storeAsString ? N : B.useNativeBigInt ? BigInt(N) : new hZ1(N);
          else return !B.alwaysParseAsBig ? U : B.useNativeBigInt ? BigInt(U) : new hZ1(U);
        }
      },
      F = function () {
        var U,
          N,
          q = '',
          M;
        if (I === '"') {
          var R = Q;
          while (Y()) {
            if (I === '"') {
              if (Q - 1 > R) q += D.substring(R, Q - 1);
              return (Y(), q);
            }
            if (I === '\\') {
              if (Q - 1 > R) q += D.substring(R, Q - 1);
              if ((Y(), I === 'u')) {
                M = 0;
                for (N = 0; N < 4; N += 1) {
                  if (((U = parseInt(Y(), 16)), !isFinite(U))) break;
                  M = M * 16 + U;
                }
                q += String.fromCharCode(M);
              } else if (typeof G[I] === 'string') q += G[I];
              else break;
              R = Q;
            }
          }
        }
        Z('Bad string');
      },
      J = function () {
        while (I && I <= ' ') Y();
      },
      C = function () {
        switch (I) {
          case 't':
            return (Y('t'), Y('r'), Y('u'), Y('e'), !0);
          case 'f':
            return (Y('f'), Y('a'), Y('l'), Y('s'), Y('e'), !1);
          case 'n':
            return (Y('n'), Y('u'), Y('l'), Y('l'), null);
        }
        Z("Unexpected '" + I + "'");
      },
      X,
      V = function () {
        var U = [];
        if (I === '[') {
          if ((Y('['), J(), I === ']')) return (Y(']'), U);
          while (I) {
            if ((U.push(X()), J(), I === ']')) return (Y(']'), U);
            (Y(','), J());
          }
        }
        Z('Bad array');
      },
      K = function () {
        var U,
          N = Object.create(null);
        if (I === '{') {
          if ((Y('{'), J(), I === '}')) return (Y('}'), N);
          while (I) {
            if (((U = F()), J(), Y(':'), B.strict === !0 && Object.hasOwnProperty.call(N, U)))
              Z('Duplicate key "' + U + '"');
            if (IA6.test(U) === !0)
              if (B.protoAction === 'error') Z('Object contains forbidden prototype property');
              else if (B.protoAction === 'ignore') X();
              else N[U] = X();
            else if (GA6.test(U) === !0)
              if (B.constructorAction === 'error')
                Z('Object contains forbidden constructor property');
              else if (B.constructorAction === 'ignore') X();
              else N[U] = X();
            else N[U] = X();
            if ((J(), I === '}')) return (Y('}'), N);
            (Y(','), J());
          }
        }
        Z('Bad object');
      };
    return (
      (X = function () {
        switch ((J(), I)) {
          case '{':
            return K();
          case '[':
            return V();
          case '"':
            return F();
          case '-':
            return W();
          default:
            return I >= '0' && I <= '9' ? W() : C();
        }
      }),
      function (U, N) {
        var q;
        if (((D = U + ''), (Q = 0), (I = ' '), (q = X()), J(), I)) Z('Syntax error');
        return typeof N === 'function'
          ? (function M(R, T) {
              var O,
                S,
                f = R[T];
              if (f && typeof f === 'object')
                Object.keys(f).forEach(function (a) {
                  if (((S = M(f, a)), S !== void 0)) f[a] = S;
                  else delete f[a];
                });
              return N.call(R, T, f);
            })({ '': q }, '')
          : q;
      }
    );
  };
KR0.exports = DA6;

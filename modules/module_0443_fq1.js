// Module: fq1
// Params: jW

var __dirname =
    '/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/spawn-rx/lib/src',
  wJ =
    (jW && jW.__assign) ||
    function () {
      return (
        (wJ =
          Object.assign ||
          function (A) {
            for (var B, Q = 1, I = arguments.length; Q < I; Q++) {
              B = arguments[Q];
              for (var G in B) if (Object.prototype.hasOwnProperty.call(B, G)) A[G] = B[G];
            }
            return A;
          }),
        wJ.apply(this, arguments)
      );
    },
  SM9 =
    (jW && jW.__rest) ||
    function (A, B) {
      var Q = {};
      for (var I in A)
        if (Object.prototype.hasOwnProperty.call(A, I) && B.indexOf(I) < 0) Q[I] = A[I];
      if (A != null && typeof Object.getOwnPropertySymbols === 'function') {
        for (var G = 0, I = Object.getOwnPropertySymbols(A); G < I.length; G++)
          if (B.indexOf(I[G]) < 0 && Object.prototype.propertyIsEnumerable.call(A, I[G]))
            Q[I[G]] = A[I[G]];
      }
      return Q;
    },
  _M9 =
    (jW && jW.__spreadArray) ||
    function (A, B, Q) {
      if (Q || arguments.length === 2) {
        for (var I = 0, G = B.length, D; I < G; I++)
          if (D || !(I in B)) {
            if (!D) D = Array.prototype.slice.call(B, 0, I);
            D[I] = B[I];
          }
      }
      return A.concat(D || Array.prototype.slice.call(B));
    };
Object.defineProperty(jW, '__esModule', { value: !0 });
jW.findActualExecutable = a91;
jW.spawnDetached = xq1;
jW.spawn = Zc;
jW.spawnDetachedPromise = xM9;
jW.spawnPromise = fM9;
var Gc = D1('path'),
  jM9 = D1('net'),
  Dc = D1('fs'),
  Tq = fHA(),
  BzA = dHA(),
  yM9 = D1('child_process'),
  kM9 = Ic(),
  GzA = process.platform === 'win32',
  Wx = kM9.default('spawn-rx');
function QzA(A) {
  try {
    return Dc.statSync(A);
  } catch (B) {
    return null;
  }
}
function IzA(A) {
  if (A.match(/[\\/]/)) return (Wx('Path has slash in directory, bailing'), A);
  var B = Gc.join('.', A);
  if (QzA(B)) return (Wx('Found executable in currect directory: '.concat(B)), Dc.realpathSync(B));
  var Q = process.env.PATH.split(GzA ? ';' : ':');
  for (var I = 0, G = Q; I < G.length; I++) {
    var D = G[I],
      Z = Gc.join(D, A);
    if (QzA(Z)) return Dc.realpathSync(Z);
  }
  return (Wx('Failed to find executable anywhere in path'), A);
}
function a91(A, B) {
  if (process.platform !== 'win32') return { cmd: IzA(A), args: B };
  if (!Dc.existsSync(A)) {
    var Q = ['.exe', '.bat', '.cmd', '.ps1'];
    for (var I = 0, G = Q; I < G.length; I++) {
      var D = G[I],
        Z = IzA(''.concat(A).concat(D));
      if (Dc.existsSync(Z)) return a91(Z, B);
    }
  }
  if (A.match(/\.ps1$/i)) {
    var Y = Gc.join(
        process.env.SYSTEMROOT,
        'System32',
        'WindowsPowerShell',
        'v1.0',
        'PowerShell.exe'
      ),
      W = ['-ExecutionPolicy', 'Unrestricted', '-NoLogo', '-NonInteractive', '-File', A];
    return { cmd: Y, args: W.concat(B) };
  }
  if (A.match(/\.(bat|cmd)$/i)) {
    var Y = Gc.join(process.env.SYSTEMROOT, 'System32', 'cmd.exe'),
      F = _M9(['/C', A], B, !0);
    return { cmd: Y, args: F };
  }
  if (A.match(/\.(js)$/i)) {
    var Y = process.execPath,
      J = [A];
    return { cmd: Y, args: J.concat(B) };
  }
  return { cmd: A, args: B };
}
function xq1(A, B, Q) {
  var I = a91(A, B !== null && B !== void 0 ? B : []),
    G = I.cmd,
    D = I.args;
  if (!GzA) return Zc(G, D, Object.assign({}, Q || {}, { detached: !0 }));
  var Z = [G].concat(D),
    Y = Gc.join(__dirname, '..', '..', 'vendor', 'jobber', 'Jobber.exe'),
    W = wJ(wJ({}, Q !== null && Q !== void 0 ? Q : {}), { detached: !0, jobber: !0 });
  return (Wx('spawnDetached: '.concat(Y, ', ').concat(Z)), Zc(Y, Z, W));
}
function Zc(A, B, Q) {
  Q = Q !== null && Q !== void 0 ? Q : {};
  var I = new Tq.Observable(function (G) {
    var { stdin: D, jobber: Z, split: Y, encoding: W } = Q,
      F = SM9(Q, ['stdin', 'jobber', 'split', 'encoding']),
      J = a91(A, B),
      C = J.cmd,
      X = J.args;
    Wx('spawning process: '.concat(C, ' ').concat(X.join(), ', ').concat(JSON.stringify(F)));
    var V = yM9.spawn(C, X, F),
      K = function (R) {
        return function (T) {
          if (T.length < 1) return;
          if (Q.echoOutput) (R === 'stdout' ? process.stdout : process.stderr).write(T);
          var O = '<< String sent back was too long >>';
          try {
            if (typeof T === 'string') O = T.toString();
            else O = T.toString(W || 'utf8');
          } catch (S) {
            O = '<< Lost chunk of process output for '
              .concat(A, ' - length was ')
              .concat(T.length, '>>');
          }
          G.next({ source: R, text: O });
        };
      },
      U = new Tq.Subscription();
    if (Q.stdin)
      if (V.stdin)
        U.add(
          Q.stdin.subscribe({
            next: function (R) {
              return V.stdin.write(R);
            },
            error: G.error.bind(G),
            complete: function () {
              return V.stdin.end();
            },
          })
        );
      else
        G.error(
          new Error(
            "opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"
          )
        );
    var N = null,
      q = null,
      M = !1;
    if (V.stdout)
      ((q = new Tq.AsyncSubject()),
        V.stdout.on('data', K('stdout')),
        V.stdout.on('close', function () {
          (q.next(!0), q.complete());
        }));
    else q = Tq.of(!0);
    if (V.stderr)
      ((N = new Tq.AsyncSubject()),
        V.stderr.on('data', K('stderr')),
        V.stderr.on('close', function () {
          (N.next(!0), N.complete());
        }));
    else N = Tq.of(!0);
    return (
      V.on('error', function (R) {
        ((M = !0), G.error(R));
      }),
      V.on('close', function (R) {
        M = !0;
        var T = Tq.merge(q, N).pipe(
          BzA.reduce(function (O) {
            return O;
          }, !0)
        );
        if (R === 0)
          T.subscribe(function () {
            return G.complete();
          });
        else
          T.subscribe(function () {
            var O = new Error('Failed with exit code: '.concat(R));
            ((O.exitCode = R), (O.code = R), G.error(O));
          });
      }),
      U.add(
        new Tq.Subscription(function () {
          if (M) return;
          if ((Wx('Killing process: '.concat(C, ' ').concat(X.join())), Q.jobber))
            (jM9.connect('\\\\.\\pipe\\jobber-'.concat(V.pid)),
              setTimeout(function () {
                return V.kill();
              }, 5000));
          else V.kill();
        })
      ),
      U
    );
  });
  return Q.split
    ? I
    : I.pipe(
        BzA.map(function (G) {
          return G === null || G === void 0 ? void 0 : G.text;
        })
      );
}
function DzA(A) {
  return new Promise(function (B, Q) {
    var I = '';
    A.subscribe({
      next: function (G) {
        return (I += G);
      },
      error: function (G) {
        var D = new Error(
          ''
            .concat(
              I,
              `
`
            )
            .concat(G.message)
        );
        if ('exitCode' in G) ((D.exitCode = G.exitCode), (D.code = G.exitCode));
        Q(D);
      },
      complete: function () {
        return B(I);
      },
    });
  });
}
function ZzA(A) {
  return new Promise(function (B, Q) {
    var I = '',
      G = '';
    A.subscribe({
      next: function (D) {
        return D.source === 'stdout' ? (I += D.text) : (G += D.text);
      },
      error: function (D) {
        var Z = new Error(
          ''
            .concat(
              I,
              `
`
            )
            .concat(D.message)
        );
        if ('exitCode' in D)
          ((Z.exitCode = D.exitCode), (Z.code = D.exitCode), (Z.stdout = I), (Z.stderr = G));
        Q(Z);
      },
      complete: function () {
        return B([I, G]);
      },
    });
  });
}
function xM9(A, B, Q) {
  if (Q === null || Q === void 0 ? void 0 : Q.split)
    return ZzA(xq1(A, B, wJ(wJ({}, Q !== null && Q !== void 0 ? Q : {}), { split: !0 })));
  else return DzA(xq1(A, B, wJ(wJ({}, Q !== null && Q !== void 0 ? Q : {}), { split: !1 })));
}
function fM9(A, B, Q) {
  if (Q === null || Q === void 0 ? void 0 : Q.split)
    return ZzA(Zc(A, B, wJ(wJ({}, Q !== null && Q !== void 0 ? Q : {}), { split: !0 })));
  else return DzA(Zc(A, B, wJ(wJ({}, Q !== null && Q !== void 0 ? Q : {}), { split: !1 })));
}

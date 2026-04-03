// Module: z$2
// Params: h75

var x75 = D1('node:events').EventEmitter,
  Ae1 = D1('node:child_process'),
  cN = D1('node:path'),
  Be1 = D1('node:fs'),
  d3 = D1('node:process'),
  { Argument: f75, humanReadableArgName: v75 } = DH1(),
  { CommanderError: Qe1 } = se(),
  { Help: b75 } = tt1(),
  { Option: V$2, DualOptions: g75 } = et1(),
  { suggestSimilar: K$2 } = X$2();
class Ie1 extends x75 {
  constructor(A) {
    super();
    ((this.commands = []),
      (this.options = []),
      (this.parent = null),
      (this._allowUnknownOption = !1),
      (this._allowExcessArguments = !0),
      (this.registeredArguments = []),
      (this._args = this.registeredArguments),
      (this.args = []),
      (this.rawArgs = []),
      (this.processedArgs = []),
      (this._scriptPath = null),
      (this._name = A || ''),
      (this._optionValues = {}),
      (this._optionValueSources = {}),
      (this._storeOptionsAsProperties = !1),
      (this._actionHandler = null),
      (this._executableHandler = !1),
      (this._executableFile = null),
      (this._executableDir = null),
      (this._defaultCommandName = null),
      (this._exitCallback = null),
      (this._aliases = []),
      (this._combineFlagAndOptionalValue = !0),
      (this._description = ''),
      (this._summary = ''),
      (this._argsDescription = void 0),
      (this._enablePositionalOptions = !1),
      (this._passThroughOptions = !1),
      (this._lifeCycleHooks = {}),
      (this._showHelpAfterError = !1),
      (this._showSuggestionAfterError = !0),
      (this._outputConfiguration = {
        writeOut: (B) => d3.stdout.write(B),
        writeErr: (B) => d3.stderr.write(B),
        getOutHelpWidth: () => (d3.stdout.isTTY ? d3.stdout.columns : void 0),
        getErrHelpWidth: () => (d3.stderr.isTTY ? d3.stderr.columns : void 0),
        outputError: (B, Q) => Q(B),
      }),
      (this._hidden = !1),
      (this._helpOption = void 0),
      (this._addImplicitHelpCommand = void 0),
      (this._helpCommand = void 0),
      (this._helpConfiguration = {}));
  }
  copyInheritedSettings(A) {
    return (
      (this._outputConfiguration = A._outputConfiguration),
      (this._helpOption = A._helpOption),
      (this._helpCommand = A._helpCommand),
      (this._helpConfiguration = A._helpConfiguration),
      (this._exitCallback = A._exitCallback),
      (this._storeOptionsAsProperties = A._storeOptionsAsProperties),
      (this._combineFlagAndOptionalValue = A._combineFlagAndOptionalValue),
      (this._allowExcessArguments = A._allowExcessArguments),
      (this._enablePositionalOptions = A._enablePositionalOptions),
      (this._showHelpAfterError = A._showHelpAfterError),
      (this._showSuggestionAfterError = A._showSuggestionAfterError),
      this
    );
  }
  _getCommandAndAncestors() {
    let A = [];
    for (let B = this; B; B = B.parent) A.push(B);
    return A;
  }
  command(A, B, Q) {
    let I = B,
      G = Q;
    if (typeof I === 'object' && I !== null) ((G = I), (I = null));
    G = G || {};
    let [, D, Z] = A.match(/([^ ]+) *(.*)/),
      Y = this.createCommand(D);
    if (I) (Y.description(I), (Y._executableHandler = !0));
    if (G.isDefault) this._defaultCommandName = Y._name;
    if (((Y._hidden = !!(G.noHelp || G.hidden)), (Y._executableFile = G.executableFile || null), Z))
      Y.arguments(Z);
    if ((this._registerCommand(Y), (Y.parent = this), Y.copyInheritedSettings(this), I))
      return this;
    return Y;
  }
  createCommand(A) {
    return new Ie1(A);
  }
  createHelp() {
    return Object.assign(new b75(), this.configureHelp());
  }
  configureHelp(A) {
    if (A === void 0) return this._helpConfiguration;
    return ((this._helpConfiguration = A), this);
  }
  configureOutput(A) {
    if (A === void 0) return this._outputConfiguration;
    return (Object.assign(this._outputConfiguration, A), this);
  }
  showHelpAfterError(A = !0) {
    if (typeof A !== 'string') A = !!A;
    return ((this._showHelpAfterError = A), this);
  }
  showSuggestionAfterError(A = !0) {
    return ((this._showSuggestionAfterError = !!A), this);
  }
  addCommand(A, B) {
    if (!A._name)
      throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
    if (((B = B || {}), B.isDefault)) this._defaultCommandName = A._name;
    if (B.noHelp || B.hidden) A._hidden = !0;
    return (this._registerCommand(A), (A.parent = this), A._checkForBrokenPassThrough(), this);
  }
  createArgument(A, B) {
    return new f75(A, B);
  }
  argument(A, B, Q, I) {
    let G = this.createArgument(A, B);
    if (typeof Q === 'function') G.default(I).argParser(Q);
    else G.default(Q);
    return (this.addArgument(G), this);
  }
  arguments(A) {
    return (
      A.trim()
        .split(/ +/)
        .forEach((B) => {
          this.argument(B);
        }),
      this
    );
  }
  addArgument(A) {
    let B = this.registeredArguments.slice(-1)[0];
    if (B && B.variadic) throw new Error(`only the last argument can be variadic '${B.name()}'`);
    if (A.required && A.defaultValue !== void 0 && A.parseArg === void 0)
      throw new Error(`a default value for a required argument is never used: '${A.name()}'`);
    return (this.registeredArguments.push(A), this);
  }
  helpCommand(A, B) {
    if (typeof A === 'boolean') return ((this._addImplicitHelpCommand = A), this);
    A = A ?? 'help [command]';
    let [, Q, I] = A.match(/([^ ]+) *(.*)/),
      G = B ?? 'display help for command',
      D = this.createCommand(Q);
    if ((D.helpOption(!1), I)) D.arguments(I);
    if (G) D.description(G);
    return ((this._addImplicitHelpCommand = !0), (this._helpCommand = D), this);
  }
  addHelpCommand(A, B) {
    if (typeof A !== 'object') return (this.helpCommand(A, B), this);
    return ((this._addImplicitHelpCommand = !0), (this._helpCommand = A), this);
  }
  _getHelpCommand() {
    if (
      this._addImplicitHelpCommand ??
      (this.commands.length && !this._actionHandler && !this._findCommand('help'))
    ) {
      if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
      return this._helpCommand;
    }
    return null;
  }
  hook(A, B) {
    let Q = ['preSubcommand', 'preAction', 'postAction'];
    if (!Q.includes(A))
      throw new Error(`Unexpected value for event passed to hook : '${A}'.
Expecting one of '${Q.join("', '")}'`);
    if (this._lifeCycleHooks[A]) this._lifeCycleHooks[A].push(B);
    else this._lifeCycleHooks[A] = [B];
    return this;
  }
  exitOverride(A) {
    if (A) this._exitCallback = A;
    else
      this._exitCallback = (B) => {
        if (B.code !== 'commander.executeSubCommandAsync') throw B;
      };
    return this;
  }
  _exit(A, B, Q) {
    if (this._exitCallback) this._exitCallback(new Qe1(A, B, Q));
    d3.exit(A);
  }
  action(A) {
    let B = (Q) => {
      let I = this.registeredArguments.length,
        G = Q.slice(0, I);
      if (this._storeOptionsAsProperties) G[I] = this;
      else G[I] = this.opts();
      return (G.push(this), A.apply(this, G));
    };
    return ((this._actionHandler = B), this);
  }
  createOption(A, B) {
    return new V$2(A, B);
  }
  _callParseArg(A, B, Q, I) {
    try {
      return A.parseArg(B, Q);
    } catch (G) {
      if (G.code === 'commander.invalidArgument') {
        let D = `${I} ${G.message}`;
        this.error(D, { exitCode: G.exitCode, code: G.code });
      }
      throw G;
    }
  }
  _registerOption(A) {
    let B = (A.short && this._findOption(A.short)) || (A.long && this._findOption(A.long));
    if (B) {
      let Q = A.long && this._findOption(A.long) ? A.long : A.short;
      throw new Error(`Cannot add option '${A.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${Q}'
-  already used by option '${B.flags}'`);
    }
    this.options.push(A);
  }
  _registerCommand(A) {
    let B = (I) => {
        return [I.name()].concat(I.aliases());
      },
      Q = B(A).find((I) => this._findCommand(I));
    if (Q) {
      let I = B(this._findCommand(Q)).join('|'),
        G = B(A).join('|');
      throw new Error(`cannot add command '${G}' as already have command '${I}'`);
    }
    this.commands.push(A);
  }
  addOption(A) {
    this._registerOption(A);
    let B = A.name(),
      Q = A.attributeName();
    if (A.negate) {
      let G = A.long.replace(/^--no-/, '--');
      if (!this._findOption(G))
        this.setOptionValueWithSource(
          Q,
          A.defaultValue === void 0 ? !0 : A.defaultValue,
          'default'
        );
    } else if (A.defaultValue !== void 0)
      this.setOptionValueWithSource(Q, A.defaultValue, 'default');
    let I = (G, D, Z) => {
      if (G == null && A.presetArg !== void 0) G = A.presetArg;
      let Y = this.getOptionValue(Q);
      if (G !== null && A.parseArg) G = this._callParseArg(A, G, Y, D);
      else if (G !== null && A.variadic) G = A._concatValue(G, Y);
      if (G == null)
        if (A.negate) G = !1;
        else if (A.isBoolean() || A.optional) G = !0;
        else G = '';
      this.setOptionValueWithSource(Q, G, Z);
    };
    if (
      (this.on('option:' + B, (G) => {
        let D = `error: option '${A.flags}' argument '${G}' is invalid.`;
        I(G, D, 'cli');
      }),
      A.envVar)
    )
      this.on('optionEnv:' + B, (G) => {
        let D = `error: option '${A.flags}' value '${G}' from env '${A.envVar}' is invalid.`;
        I(G, D, 'env');
      });
    return this;
  }
  _optionEx(A, B, Q, I, G) {
    if (typeof B === 'object' && B instanceof V$2)
      throw new Error(
        'To add an Option object use addOption() instead of option() or requiredOption()'
      );
    let D = this.createOption(B, Q);
    if ((D.makeOptionMandatory(!!A.mandatory), typeof I === 'function')) D.default(G).argParser(I);
    else if (I instanceof RegExp) {
      let Z = I;
      ((I = (Y, W) => {
        let F = Z.exec(Y);
        return F ? F[0] : W;
      }),
        D.default(G).argParser(I));
    } else D.default(I);
    return this.addOption(D);
  }
  option(A, B, Q, I) {
    return this._optionEx({}, A, B, Q, I);
  }
  requiredOption(A, B, Q, I) {
    return this._optionEx({ mandatory: !0 }, A, B, Q, I);
  }
  combineFlagAndOptionalValue(A = !0) {
    return ((this._combineFlagAndOptionalValue = !!A), this);
  }
  allowUnknownOption(A = !0) {
    return ((this._allowUnknownOption = !!A), this);
  }
  allowExcessArguments(A = !0) {
    return ((this._allowExcessArguments = !!A), this);
  }
  enablePositionalOptions(A = !0) {
    return ((this._enablePositionalOptions = !!A), this);
  }
  passThroughOptions(A = !0) {
    return ((this._passThroughOptions = !!A), this._checkForBrokenPassThrough(), this);
  }
  _checkForBrokenPassThrough() {
    if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions)
      throw new Error(
        `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`
      );
  }
  storeOptionsAsProperties(A = !0) {
    if (this.options.length)
      throw new Error('call .storeOptionsAsProperties() before adding options');
    if (Object.keys(this._optionValues).length)
      throw new Error('call .storeOptionsAsProperties() before setting option values');
    return ((this._storeOptionsAsProperties = !!A), this);
  }
  getOptionValue(A) {
    if (this._storeOptionsAsProperties) return this[A];
    return this._optionValues[A];
  }
  setOptionValue(A, B) {
    return this.setOptionValueWithSource(A, B, void 0);
  }
  setOptionValueWithSource(A, B, Q) {
    if (this._storeOptionsAsProperties) this[A] = B;
    else this._optionValues[A] = B;
    return ((this._optionValueSources[A] = Q), this);
  }
  getOptionValueSource(A) {
    return this._optionValueSources[A];
  }
  getOptionValueSourceWithGlobals(A) {
    let B;
    return (
      this._getCommandAndAncestors().forEach((Q) => {
        if (Q.getOptionValueSource(A) !== void 0) B = Q.getOptionValueSource(A);
      }),
      B
    );
  }
  _prepareUserArgs(A, B) {
    if (A !== void 0 && !Array.isArray(A))
      throw new Error('first parameter to parse must be array or undefined');
    if (((B = B || {}), A === void 0 && B.from === void 0)) {
      if (d3.versions?.electron) B.from = 'electron';
      let I = d3.execArgv ?? [];
      if (I.includes('-e') || I.includes('--eval') || I.includes('-p') || I.includes('--print'))
        B.from = 'eval';
    }
    if (A === void 0) A = d3.argv;
    this.rawArgs = A.slice();
    let Q;
    switch (B.from) {
      case void 0:
      case 'node':
        ((this._scriptPath = A[1]), (Q = A.slice(2)));
        break;
      case 'electron':
        if (d3.defaultApp) ((this._scriptPath = A[1]), (Q = A.slice(2)));
        else Q = A.slice(1);
        break;
      case 'user':
        Q = A.slice(0);
        break;
      case 'eval':
        Q = A.slice(1);
        break;
      default:
        throw new Error(`unexpected parse option { from: '${B.from}' }`);
    }
    if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
    return ((this._name = this._name || 'program'), Q);
  }
  parse(A, B) {
    let Q = this._prepareUserArgs(A, B);
    return (this._parseCommand([], Q), this);
  }
  async parseAsync(A, B) {
    let Q = this._prepareUserArgs(A, B);
    return (await this._parseCommand([], Q), this);
  }
  _executeSubCommand(A, B) {
    B = B.slice();
    let Q = !1,
      I = ['.js', '.ts', '.tsx', '.mjs', '.cjs'];
    function G(F, J) {
      let C = cN.resolve(F, J);
      if (Be1.existsSync(C)) return C;
      if (I.includes(cN.extname(J))) return;
      let X = I.find((V) => Be1.existsSync(`${C}${V}`));
      if (X) return `${C}${X}`;
      return;
    }
    (this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions());
    let D = A._executableFile || `${this._name}-${A._name}`,
      Z = this._executableDir || '';
    if (this._scriptPath) {
      let F;
      try {
        F = Be1.realpathSync(this._scriptPath);
      } catch (J) {
        F = this._scriptPath;
      }
      Z = cN.resolve(cN.dirname(F), Z);
    }
    if (Z) {
      let F = G(Z, D);
      if (!F && !A._executableFile && this._scriptPath) {
        let J = cN.basename(this._scriptPath, cN.extname(this._scriptPath));
        if (J !== this._name) F = G(Z, `${J}-${A._name}`);
      }
      D = F || D;
    }
    Q = I.includes(cN.extname(D));
    let Y;
    if (d3.platform !== 'win32')
      if (Q)
        (B.unshift(D),
          (B = H$2(d3.execArgv).concat(B)),
          (Y = Ae1.spawn(d3.argv[0], B, { stdio: 'inherit' })));
      else Y = Ae1.spawn(D, B, { stdio: 'inherit' });
    else
      (B.unshift(D),
        (B = H$2(d3.execArgv).concat(B)),
        (Y = Ae1.spawn(d3.execPath, B, { stdio: 'inherit' })));
    if (!Y.killed)
      ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'].forEach((J) => {
        d3.on(J, () => {
          if (Y.killed === !1 && Y.exitCode === null) Y.kill(J);
        });
      });
    let W = this._exitCallback;
    (Y.on('close', (F) => {
      if (((F = F ?? 1), !W)) d3.exit(F);
      else W(new Qe1(F, 'commander.executeSubCommandAsync', '(close)'));
    }),
      Y.on('error', (F) => {
        if (F.code === 'ENOENT') {
          let J = Z
              ? `searched for local subcommand relative to directory '${Z}'`
              : 'no directory for search for local subcommand, use .executableDir() to supply a custom directory',
            C = `'${D}' does not exist
 - if '${A._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${J}`;
          throw new Error(C);
        } else if (F.code === 'EACCES') throw new Error(`'${D}' not executable`);
        if (!W) d3.exit(1);
        else {
          let J = new Qe1(1, 'commander.executeSubCommandAsync', '(error)');
          ((J.nestedError = F), W(J));
        }
      }),
      (this.runningCommand = Y));
  }
  _dispatchSubcommand(A, B, Q) {
    let I = this._findCommand(A);
    if (!I) this.help({ error: !0 });
    let G;
    return (
      (G = this._chainOrCallSubCommandHook(G, I, 'preSubcommand')),
      (G = this._chainOrCall(G, () => {
        if (I._executableHandler) this._executeSubCommand(I, B.concat(Q));
        else return I._parseCommand(B, Q);
      })),
      G
    );
  }
  _dispatchHelpCommand(A) {
    if (!A) this.help();
    let B = this._findCommand(A);
    if (B && !B._executableHandler) B.help();
    return this._dispatchSubcommand(
      A,
      [],
      [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? '--help']
    );
  }
  _checkNumberOfArguments() {
    if (
      (this.registeredArguments.forEach((A, B) => {
        if (A.required && this.args[B] == null) this.missingArgument(A.name());
      }),
      this.registeredArguments.length > 0 &&
        this.registeredArguments[this.registeredArguments.length - 1].variadic)
    )
      return;
    if (this.args.length > this.registeredArguments.length) this._excessArguments(this.args);
  }
  _processArguments() {
    let A = (Q, I, G) => {
      let D = I;
      if (I !== null && Q.parseArg) {
        let Z = `error: command-argument value '${I}' is invalid for argument '${Q.name()}'.`;
        D = this._callParseArg(Q, I, G, Z);
      }
      return D;
    };
    this._checkNumberOfArguments();
    let B = [];
    (this.registeredArguments.forEach((Q, I) => {
      let G = Q.defaultValue;
      if (Q.variadic) {
        if (I < this.args.length) {
          if (((G = this.args.slice(I)), Q.parseArg))
            G = G.reduce((D, Z) => {
              return A(Q, Z, D);
            }, Q.defaultValue);
        } else if (G === void 0) G = [];
      } else if (I < this.args.length) {
        if (((G = this.args[I]), Q.parseArg)) G = A(Q, G, Q.defaultValue);
      }
      B[I] = G;
    }),
      (this.processedArgs = B));
  }
  _chainOrCall(A, B) {
    if (A && A.then && typeof A.then === 'function') return A.then(() => B());
    return B();
  }
  _chainOrCallHooks(A, B) {
    let Q = A,
      I = [];
    if (
      (this._getCommandAndAncestors()
        .reverse()
        .filter((G) => G._lifeCycleHooks[B] !== void 0)
        .forEach((G) => {
          G._lifeCycleHooks[B].forEach((D) => {
            I.push({ hookedCommand: G, callback: D });
          });
        }),
      B === 'postAction')
    )
      I.reverse();
    return (
      I.forEach((G) => {
        Q = this._chainOrCall(Q, () => {
          return G.callback(G.hookedCommand, this);
        });
      }),
      Q
    );
  }
  _chainOrCallSubCommandHook(A, B, Q) {
    let I = A;
    if (this._lifeCycleHooks[Q] !== void 0)
      this._lifeCycleHooks[Q].forEach((G) => {
        I = this._chainOrCall(I, () => {
          return G(this, B);
        });
      });
    return I;
  }
  _parseCommand(A, B) {
    let Q = this.parseOptions(B);
    if (
      (this._parseOptionsEnv(),
      this._parseOptionsImplied(),
      (A = A.concat(Q.operands)),
      (B = Q.unknown),
      (this.args = A.concat(B)),
      A && this._findCommand(A[0]))
    )
      return this._dispatchSubcommand(A[0], A.slice(1), B);
    if (this._getHelpCommand() && A[0] === this._getHelpCommand().name())
      return this._dispatchHelpCommand(A[1]);
    if (this._defaultCommandName)
      return (
        this._outputHelpIfRequested(B),
        this._dispatchSubcommand(this._defaultCommandName, A, B)
      );
    if (
      this.commands.length &&
      this.args.length === 0 &&
      !this._actionHandler &&
      !this._defaultCommandName
    )
      this.help({ error: !0 });
    (this._outputHelpIfRequested(Q.unknown),
      this._checkForMissingMandatoryOptions(),
      this._checkForConflictingOptions());
    let I = () => {
        if (Q.unknown.length > 0) this.unknownOption(Q.unknown[0]);
      },
      G = `command:${this.name()}`;
    if (this._actionHandler) {
      (I(), this._processArguments());
      let D;
      if (
        ((D = this._chainOrCallHooks(D, 'preAction')),
        (D = this._chainOrCall(D, () => this._actionHandler(this.processedArgs))),
        this.parent)
      )
        D = this._chainOrCall(D, () => {
          this.parent.emit(G, A, B);
        });
      return ((D = this._chainOrCallHooks(D, 'postAction')), D);
    }
    if (this.parent && this.parent.listenerCount(G))
      (I(), this._processArguments(), this.parent.emit(G, A, B));
    else if (A.length) {
      if (this._findCommand('*')) return this._dispatchSubcommand('*', A, B);
      if (this.listenerCount('command:*')) this.emit('command:*', A, B);
      else if (this.commands.length) this.unknownCommand();
      else (I(), this._processArguments());
    } else if (this.commands.length) (I(), this.help({ error: !0 }));
    else (I(), this._processArguments());
  }
  _findCommand(A) {
    if (!A) return;
    return this.commands.find((B) => B._name === A || B._aliases.includes(A));
  }
  _findOption(A) {
    return this.options.find((B) => B.is(A));
  }
  _checkForMissingMandatoryOptions() {
    this._getCommandAndAncestors().forEach((A) => {
      A.options.forEach((B) => {
        if (B.mandatory && A.getOptionValue(B.attributeName()) === void 0)
          A.missingMandatoryOptionValue(B);
      });
    });
  }
  _checkForConflictingLocalOptions() {
    let A = this.options.filter((Q) => {
      let I = Q.attributeName();
      if (this.getOptionValue(I) === void 0) return !1;
      return this.getOptionValueSource(I) !== 'default';
    });
    A.filter((Q) => Q.conflictsWith.length > 0).forEach((Q) => {
      let I = A.find((G) => Q.conflictsWith.includes(G.attributeName()));
      if (I) this._conflictingOption(Q, I);
    });
  }
  _checkForConflictingOptions() {
    this._getCommandAndAncestors().forEach((A) => {
      A._checkForConflictingLocalOptions();
    });
  }
  parseOptions(A) {
    let B = [],
      Q = [],
      I = B,
      G = A.slice();
    function D(Y) {
      return Y.length > 1 && Y[0] === '-';
    }
    let Z = null;
    while (G.length) {
      let Y = G.shift();
      if (Y === '--') {
        if (I === Q) I.push(Y);
        I.push(...G);
        break;
      }
      if (Z && !D(Y)) {
        this.emit(`option:${Z.name()}`, Y);
        continue;
      }
      if (((Z = null), D(Y))) {
        let W = this._findOption(Y);
        if (W) {
          if (W.required) {
            let F = G.shift();
            if (F === void 0) this.optionMissingArgument(W);
            this.emit(`option:${W.name()}`, F);
          } else if (W.optional) {
            let F = null;
            if (G.length > 0 && !D(G[0])) F = G.shift();
            this.emit(`option:${W.name()}`, F);
          } else this.emit(`option:${W.name()}`);
          Z = W.variadic ? W : null;
          continue;
        }
      }
      if (Y.length > 2 && Y[0] === '-' && Y[1] !== '-') {
        let W = this._findOption(`-${Y[1]}`);
        if (W) {
          if (W.required || (W.optional && this._combineFlagAndOptionalValue))
            this.emit(`option:${W.name()}`, Y.slice(2));
          else (this.emit(`option:${W.name()}`), G.unshift(`-${Y.slice(2)}`));
          continue;
        }
      }
      if (/^--[^=]+=/.test(Y)) {
        let W = Y.indexOf('='),
          F = this._findOption(Y.slice(0, W));
        if (F && (F.required || F.optional)) {
          this.emit(`option:${F.name()}`, Y.slice(W + 1));
          continue;
        }
      }
      if (D(Y)) I = Q;
      if (
        (this._enablePositionalOptions || this._passThroughOptions) &&
        B.length === 0 &&
        Q.length === 0
      ) {
        if (this._findCommand(Y)) {
          if ((B.push(Y), G.length > 0)) Q.push(...G);
          break;
        } else if (this._getHelpCommand() && Y === this._getHelpCommand().name()) {
          if ((B.push(Y), G.length > 0)) B.push(...G);
          break;
        } else if (this._defaultCommandName) {
          if ((Q.push(Y), G.length > 0)) Q.push(...G);
          break;
        }
      }
      if (this._passThroughOptions) {
        if ((I.push(Y), G.length > 0)) I.push(...G);
        break;
      }
      I.push(Y);
    }
    return { operands: B, unknown: Q };
  }
  opts() {
    if (this._storeOptionsAsProperties) {
      let A = {},
        B = this.options.length;
      for (let Q = 0; Q < B; Q++) {
        let I = this.options[Q].attributeName();
        A[I] = I === this._versionOptionName ? this._version : this[I];
      }
      return A;
    }
    return this._optionValues;
  }
  optsWithGlobals() {
    return this._getCommandAndAncestors().reduce((A, B) => Object.assign(A, B.opts()), {});
  }
  error(A, B) {
    if (
      (this._outputConfiguration.outputError(
        `${A}
`,
        this._outputConfiguration.writeErr
      ),
      typeof this._showHelpAfterError === 'string')
    )
      this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
    else if (this._showHelpAfterError)
      (this._outputConfiguration.writeErr(`
`),
        this.outputHelp({ error: !0 }));
    let Q = B || {},
      I = Q.exitCode || 1,
      G = Q.code || 'commander.error';
    this._exit(I, G, A);
  }
  _parseOptionsEnv() {
    this.options.forEach((A) => {
      if (A.envVar && A.envVar in d3.env) {
        let B = A.attributeName();
        if (
          this.getOptionValue(B) === void 0 ||
          ['default', 'config', 'env'].includes(this.getOptionValueSource(B))
        )
          if (A.required || A.optional) this.emit(`optionEnv:${A.name()}`, d3.env[A.envVar]);
          else this.emit(`optionEnv:${A.name()}`);
      }
    });
  }
  _parseOptionsImplied() {
    let A = new g75(this.options),
      B = (Q) => {
        return (
          this.getOptionValue(Q) !== void 0 &&
          !['default', 'implied'].includes(this.getOptionValueSource(Q))
        );
      };
    this.options
      .filter(
        (Q) =>
          Q.implied !== void 0 &&
          B(Q.attributeName()) &&
          A.valueFromOption(this.getOptionValue(Q.attributeName()), Q)
      )
      .forEach((Q) => {
        Object.keys(Q.implied)
          .filter((I) => !B(I))
          .forEach((I) => {
            this.setOptionValueWithSource(I, Q.implied[I], 'implied');
          });
      });
  }
  missingArgument(A) {
    let B = `error: missing required argument '${A}'`;
    this.error(B, { code: 'commander.missingArgument' });
  }
  optionMissingArgument(A) {
    let B = `error: option '${A.flags}' argument missing`;
    this.error(B, { code: 'commander.optionMissingArgument' });
  }
  missingMandatoryOptionValue(A) {
    let B = `error: required option '${A.flags}' not specified`;
    this.error(B, { code: 'commander.missingMandatoryOptionValue' });
  }
  _conflictingOption(A, B) {
    let Q = (D) => {
        let Z = D.attributeName(),
          Y = this.getOptionValue(Z),
          W = this.options.find((J) => J.negate && Z === J.attributeName()),
          F = this.options.find((J) => !J.negate && Z === J.attributeName());
        if (
          W &&
          ((W.presetArg === void 0 && Y === !1) || (W.presetArg !== void 0 && Y === W.presetArg))
        )
          return W;
        return F || D;
      },
      I = (D) => {
        let Z = Q(D),
          Y = Z.attributeName();
        if (this.getOptionValueSource(Y) === 'env') return `environment variable '${Z.envVar}'`;
        return `option '${Z.flags}'`;
      },
      G = `error: ${I(A)} cannot be used with ${I(B)}`;
    this.error(G, { code: 'commander.conflictingOption' });
  }
  unknownOption(A) {
    if (this._allowUnknownOption) return;
    let B = '';
    if (A.startsWith('--') && this._showSuggestionAfterError) {
      let I = [],
        G = this;
      do {
        let D = G.createHelp()
          .visibleOptions(G)
          .filter((Z) => Z.long)
          .map((Z) => Z.long);
        ((I = I.concat(D)), (G = G.parent));
      } while (G && !G._enablePositionalOptions);
      B = K$2(A, I);
    }
    let Q = `error: unknown option '${A}'${B}`;
    this.error(Q, { code: 'commander.unknownOption' });
  }
  _excessArguments(A) {
    if (this._allowExcessArguments) return;
    let B = this.registeredArguments.length,
      Q = B === 1 ? '' : 's',
      G = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ''}. Expected ${B} argument${Q} but got ${A.length}.`;
    this.error(G, { code: 'commander.excessArguments' });
  }
  unknownCommand() {
    let A = this.args[0],
      B = '';
    if (this._showSuggestionAfterError) {
      let I = [];
      (this.createHelp()
        .visibleCommands(this)
        .forEach((G) => {
          if ((I.push(G.name()), G.alias())) I.push(G.alias());
        }),
        (B = K$2(A, I)));
    }
    let Q = `error: unknown command '${A}'${B}`;
    this.error(Q, { code: 'commander.unknownCommand' });
  }
  version(A, B, Q) {
    if (A === void 0) return this._version;
    ((this._version = A), (B = B || '-V, --version'), (Q = Q || 'output the version number'));
    let I = this.createOption(B, Q);
    return (
      (this._versionOptionName = I.attributeName()),
      this._registerOption(I),
      this.on('option:' + I.name(), () => {
        (this._outputConfiguration.writeOut(`${A}
`),
          this._exit(0, 'commander.version', A));
      }),
      this
    );
  }
  description(A, B) {
    if (A === void 0 && B === void 0) return this._description;
    if (((this._description = A), B)) this._argsDescription = B;
    return this;
  }
  summary(A) {
    if (A === void 0) return this._summary;
    return ((this._summary = A), this);
  }
  alias(A) {
    if (A === void 0) return this._aliases[0];
    let B = this;
    if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler)
      B = this.commands[this.commands.length - 1];
    if (A === B._name) throw new Error("Command alias can't be the same as its name");
    let Q = this.parent?._findCommand(A);
    if (Q) {
      let I = [Q.name()].concat(Q.aliases()).join('|');
      throw new Error(
        `cannot add alias '${A}' to command '${this.name()}' as already have command '${I}'`
      );
    }
    return (B._aliases.push(A), this);
  }
  aliases(A) {
    if (A === void 0) return this._aliases;
    return (A.forEach((B) => this.alias(B)), this);
  }
  usage(A) {
    if (A === void 0) {
      if (this._usage) return this._usage;
      let B = this.registeredArguments.map((Q) => {
        return v75(Q);
      });
      return []
        .concat(
          this.options.length || this._helpOption !== null ? '[options]' : [],
          this.commands.length ? '[command]' : [],
          this.registeredArguments.length ? B : []
        )
        .join(' ');
    }
    return ((this._usage = A), this);
  }
  name(A) {
    if (A === void 0) return this._name;
    return ((this._name = A), this);
  }
  nameFromFilename(A) {
    return ((this._name = cN.basename(A, cN.extname(A))), this);
  }
  executableDir(A) {
    if (A === void 0) return this._executableDir;
    return ((this._executableDir = A), this);
  }
  helpInformation(A) {
    let B = this.createHelp();
    if (B.helpWidth === void 0)
      B.helpWidth =
        A && A.error
          ? this._outputConfiguration.getErrHelpWidth()
          : this._outputConfiguration.getOutHelpWidth();
    return B.formatHelp(this, B);
  }
  _getHelpContext(A) {
    A = A || {};
    let B = { error: !!A.error },
      Q;
    if (B.error) Q = (I) => this._outputConfiguration.writeErr(I);
    else Q = (I) => this._outputConfiguration.writeOut(I);
    return ((B.write = A.write || Q), (B.command = this), B);
  }
  outputHelp(A) {
    let B;
    if (typeof A === 'function') ((B = A), (A = void 0));
    let Q = this._getHelpContext(A);
    (this._getCommandAndAncestors()
      .reverse()
      .forEach((G) => G.emit('beforeAllHelp', Q)),
      this.emit('beforeHelp', Q));
    let I = this.helpInformation(Q);
    if (B) {
      if (((I = B(I)), typeof I !== 'string' && !Buffer.isBuffer(I)))
        throw new Error('outputHelp callback must return a string or a Buffer');
    }
    if ((Q.write(I), this._getHelpOption()?.long)) this.emit(this._getHelpOption().long);
    (this.emit('afterHelp', Q),
      this._getCommandAndAncestors().forEach((G) => G.emit('afterAllHelp', Q)));
  }
  helpOption(A, B) {
    if (typeof A === 'boolean') {
      if (A) this._helpOption = this._helpOption ?? void 0;
      else this._helpOption = null;
      return this;
    }
    return (
      (A = A ?? '-h, --help'),
      (B = B ?? 'display help for command'),
      (this._helpOption = this.createOption(A, B)),
      this
    );
  }
  _getHelpOption() {
    if (this._helpOption === void 0) this.helpOption(void 0, void 0);
    return this._helpOption;
  }
  addHelpOption(A) {
    return ((this._helpOption = A), this);
  }
  help(A) {
    this.outputHelp(A);
    let B = d3.exitCode || 0;
    if (B === 0 && A && typeof A !== 'function' && A.error) B = 1;
    this._exit(B, 'commander.help', '(outputHelp)');
  }
  addHelpText(A, B) {
    let Q = ['beforeAll', 'before', 'after', 'afterAll'];
    if (!Q.includes(A))
      throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${Q.join("', '")}'`);
    let I = `${A}Help`;
    return (
      this.on(I, (G) => {
        let D;
        if (typeof B === 'function') D = B({ error: G.error, command: G.command });
        else D = B;
        if (D)
          G.write(`${D}
`);
      }),
      this
    );
  }
  _outputHelpIfRequested(A) {
    let B = this._getHelpOption();
    if (B && A.find((I) => B.is(I)))
      (this.outputHelp(), this._exit(0, 'commander.helpDisplayed', '(outputHelp)'));
  }
}
function H$2(A) {
  return A.map((B) => {
    if (!B.startsWith('--inspect')) return B;
    let Q,
      I = '127.0.0.1',
      G = '9229',
      D;
    if ((D = B.match(/^(--inspect(-brk)?)$/)) !== null) Q = D[1];
    else if ((D = B.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null)
      if (((Q = D[1]), /^\d+$/.test(D[3]))) G = D[3];
      else I = D[3];
    else if ((D = B.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null)
      ((Q = D[1]), (I = D[3]), (G = D[4]));
    if (Q && G !== '0') return `${Q}=${I}:${parseInt(G) + 1}`;
    return B;
  });
}
h75.Command = Ie1;

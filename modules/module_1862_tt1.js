// Module: tt1
// Params: q75

var { humanReadableArgName: $75 } = DH1();
class F$2 {
  constructor() {
    ((this.helpWidth = void 0),
      (this.sortSubcommands = !1),
      (this.sortOptions = !1),
      (this.showGlobalOptions = !1));
  }
  visibleCommands(A) {
    let B = A.commands.filter((I) => !I._hidden),
      Q = A._getHelpCommand();
    if (Q && !Q._hidden) B.push(Q);
    if (this.sortSubcommands)
      B.sort((I, G) => {
        return I.name().localeCompare(G.name());
      });
    return B;
  }
  compareOptions(A, B) {
    let Q = (I) => {
      return I.short ? I.short.replace(/^-/, '') : I.long.replace(/^--/, '');
    };
    return Q(A).localeCompare(Q(B));
  }
  visibleOptions(A) {
    let B = A.options.filter((I) => !I.hidden),
      Q = A._getHelpOption();
    if (Q && !Q.hidden) {
      let I = Q.short && A._findOption(Q.short),
        G = Q.long && A._findOption(Q.long);
      if (!I && !G) B.push(Q);
      else if (Q.long && !G) B.push(A.createOption(Q.long, Q.description));
      else if (Q.short && !I) B.push(A.createOption(Q.short, Q.description));
    }
    if (this.sortOptions) B.sort(this.compareOptions);
    return B;
  }
  visibleGlobalOptions(A) {
    if (!this.showGlobalOptions) return [];
    let B = [];
    for (let Q = A.parent; Q; Q = Q.parent) {
      let I = Q.options.filter((G) => !G.hidden);
      B.push(...I);
    }
    if (this.sortOptions) B.sort(this.compareOptions);
    return B;
  }
  visibleArguments(A) {
    if (A._argsDescription)
      A.registeredArguments.forEach((B) => {
        B.description = B.description || A._argsDescription[B.name()] || '';
      });
    if (A.registeredArguments.find((B) => B.description)) return A.registeredArguments;
    return [];
  }
  subcommandTerm(A) {
    let B = A.registeredArguments.map((Q) => $75(Q)).join(' ');
    return (
      A._name +
      (A._aliases[0] ? '|' + A._aliases[0] : '') +
      (A.options.length ? ' [options]' : '') +
      (B ? ' ' + B : '')
    );
  }
  optionTerm(A) {
    return A.flags;
  }
  argumentTerm(A) {
    return A.name();
  }
  longestSubcommandTermLength(A, B) {
    return B.visibleCommands(A).reduce((Q, I) => {
      return Math.max(Q, B.subcommandTerm(I).length);
    }, 0);
  }
  longestOptionTermLength(A, B) {
    return B.visibleOptions(A).reduce((Q, I) => {
      return Math.max(Q, B.optionTerm(I).length);
    }, 0);
  }
  longestGlobalOptionTermLength(A, B) {
    return B.visibleGlobalOptions(A).reduce((Q, I) => {
      return Math.max(Q, B.optionTerm(I).length);
    }, 0);
  }
  longestArgumentTermLength(A, B) {
    return B.visibleArguments(A).reduce((Q, I) => {
      return Math.max(Q, B.argumentTerm(I).length);
    }, 0);
  }
  commandUsage(A) {
    let B = A._name;
    if (A._aliases[0]) B = B + '|' + A._aliases[0];
    let Q = '';
    for (let I = A.parent; I; I = I.parent) Q = I.name() + ' ' + Q;
    return Q + B + ' ' + A.usage();
  }
  commandDescription(A) {
    return A.description();
  }
  subcommandDescription(A) {
    return A.summary() || A.description();
  }
  optionDescription(A) {
    let B = [];
    if (A.argChoices) B.push(`choices: ${A.argChoices.map((Q) => JSON.stringify(Q)).join(', ')}`);
    if (A.defaultValue !== void 0) {
      if (A.required || A.optional || (A.isBoolean() && typeof A.defaultValue === 'boolean'))
        B.push(`default: ${A.defaultValueDescription || JSON.stringify(A.defaultValue)}`);
    }
    if (A.presetArg !== void 0 && A.optional) B.push(`preset: ${JSON.stringify(A.presetArg)}`);
    if (A.envVar !== void 0) B.push(`env: ${A.envVar}`);
    if (B.length > 0) return `${A.description} (${B.join(', ')})`;
    return A.description;
  }
  argumentDescription(A) {
    let B = [];
    if (A.argChoices) B.push(`choices: ${A.argChoices.map((Q) => JSON.stringify(Q)).join(', ')}`);
    if (A.defaultValue !== void 0)
      B.push(`default: ${A.defaultValueDescription || JSON.stringify(A.defaultValue)}`);
    if (B.length > 0) {
      let Q = `(${B.join(', ')})`;
      if (A.description) return `${A.description} ${Q}`;
      return Q;
    }
    return A.description;
  }
  formatHelp(A, B) {
    let Q = B.padWidth(A, B),
      I = B.helpWidth || 80,
      G = 2,
      D = 2;
    function Z(V, K) {
      if (K) {
        let U = `${V.padEnd(Q + 2)}${K}`;
        return B.wrap(U, I - 2, Q + 2);
      }
      return V;
    }
    function Y(V) {
      return V.join(
        `
`
      ).replace(/^/gm, ' '.repeat(2));
    }
    let W = [`Usage: ${B.commandUsage(A)}`, ''],
      F = B.commandDescription(A);
    if (F.length > 0) W = W.concat([B.wrap(F, I, 0), '']);
    let J = B.visibleArguments(A).map((V) => {
      return Z(B.argumentTerm(V), B.argumentDescription(V));
    });
    if (J.length > 0) W = W.concat(['Arguments:', Y(J), '']);
    let C = B.visibleOptions(A).map((V) => {
      return Z(B.optionTerm(V), B.optionDescription(V));
    });
    if (C.length > 0) W = W.concat(['Options:', Y(C), '']);
    if (this.showGlobalOptions) {
      let V = B.visibleGlobalOptions(A).map((K) => {
        return Z(B.optionTerm(K), B.optionDescription(K));
      });
      if (V.length > 0) W = W.concat(['Global Options:', Y(V), '']);
    }
    let X = B.visibleCommands(A).map((V) => {
      return Z(B.subcommandTerm(V), B.subcommandDescription(V));
    });
    if (X.length > 0) W = W.concat(['Commands:', Y(X), '']);
    return W.join(`
`);
  }
  padWidth(A, B) {
    return Math.max(
      B.longestOptionTermLength(A, B),
      B.longestGlobalOptionTermLength(A, B),
      B.longestSubcommandTermLength(A, B),
      B.longestArgumentTermLength(A, B)
    );
  }
  wrap(A, B, Q, I = 40) {
    let D = new RegExp(`[\\n][${' \\f\\t\\v   -   　\uFEFF'}]+`);
    if (A.match(D)) return A;
    let Z = B - Q;
    if (Z < I) return A;
    let Y = A.slice(0, Q),
      W = A.slice(Q).replace(
        `\r
`,
        `
`
      ),
      F = ' '.repeat(Q),
      C = `\\s${'​'}`,
      X = new RegExp(
        `
|.{1,${Z - 1}}([${C}]|$)|[^${C}]+?([${C}]|$)`,
        'g'
      ),
      V = W.match(X) || [];
    return (
      Y +
      V.map((K, U) => {
        if (
          K ===
          `
`
        )
          return '';
        return (U > 0 ? F : '') + K.trimEnd();
      }).join(`
`)
    );
  }
}
q75.Help = F$2;

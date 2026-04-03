// Module: S$A
// Params: $S5,P$A

function nP9(A) {
  let B = {
      keyword: 'rec with let in inherit assert if else then',
      literal: 'true false or and null',
      built_in:
        'import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation',
    },
    Q = { className: 'subst', begin: /\$\{/, end: /\}/, keywords: B },
    I = {
      begin: /[a-zA-Z0-9-_]+(\s*=)/,
      returnBegin: !0,
      relevance: 0,
      contains: [{ className: 'attr', begin: /\S+/ }],
    },
    G = {
      className: 'string',
      contains: [Q],
      variants: [
        { begin: "''", end: "''" },
        { begin: '"', end: '"' },
      ],
    },
    D = [A.NUMBER_MODE, A.HASH_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, G, I];
  return ((Q.contains = D), { name: 'Nix', aliases: ['nixos'], keywords: B, contains: D });
}
P$A.exports = nP9;

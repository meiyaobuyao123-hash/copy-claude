// Module: aNA
// Params: ZS5,nNA

function jP9(A) {
  let B = {
      className: 'variable',
      variants: [
        { begin: '\\$\\(' + A.UNDERSCORE_IDENT_RE + '\\)', contains: [A.BACKSLASH_ESCAPE] },
        { begin: /\$[@%<?\^\+\*]/ },
      ],
    },
    Q = { className: 'string', begin: /"/, end: /"/, contains: [A.BACKSLASH_ESCAPE, B] },
    I = {
      className: 'variable',
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: {
        built_in:
          'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value',
      },
      contains: [B],
    },
    G = { begin: '^' + A.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)' },
    D = {
      className: 'meta',
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: { $pattern: /[\.\w]+/, 'meta-keyword': '.PHONY' },
    },
    Z = { className: 'section', begin: /^[^\s]+:/, end: /$/, contains: [B] };
  return {
    name: 'Makefile',
    aliases: ['mk', 'mak', 'make'],
    keywords: {
      $pattern: /[\w-]+/,
      keyword:
        'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
    },
    contains: [A.HASH_COMMENT_MODE, B, Q, I, G, D, Z],
  };
}
nNA.exports = jP9;

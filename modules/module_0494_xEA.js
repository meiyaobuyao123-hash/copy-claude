// Module: xEA
// Params: IP5,kEA

function fO9(A) {
  return {
    name: 'Dockerfile',
    aliases: ['docker'],
    case_insensitive: !0,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [
      A.HASH_COMMENT_MODE,
      A.APOS_STRING_MODE,
      A.QUOTE_STRING_MODE,
      A.NUMBER_MODE,
      {
        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
        starts: { end: /[^\\]$/, subLanguage: 'bash' },
      },
    ],
    illegal: '</',
  };
}
kEA.exports = fO9;

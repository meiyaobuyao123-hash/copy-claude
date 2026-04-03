// Module: KNA
// Params: cP5,VNA

function eT9(A) {
  let Q = {
      className: 'params',
      begin: /\(/,
      end: /\)/,
      contains: [
        {
          begin: /[\w-]+ *=/,
          returnBegin: !0,
          relevance: 0,
          contains: [{ className: 'attr', begin: /[\w-]+/ }],
        },
      ],
      relevance: 0,
    },
    I = { className: 'function', begin: /:[\w\-.]+/, relevance: 0 },
    G = { className: 'string', begin: /\B([\/.])[\w\-.\/=]+/ },
    D = { className: 'params', begin: /--[\w\-=\/]+/ };
  return {
    name: 'JBoss CLI',
    aliases: ['wildfly-cli'],
    keywords: {
      $pattern: '[a-z-]+',
      keyword:
        'alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source',
      literal: 'true false',
    },
    contains: [A.HASH_COMMENT_MODE, A.QUOTE_STRING_MODE, D, I, G, Q],
  };
}
VNA.exports = eT9;

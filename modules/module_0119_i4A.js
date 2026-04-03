// Module: i4A
// Params: l4A

Object.defineProperty(l4A, '__esModule', { value: !0 });
var LE1 = I4(),
  c4A = tA(),
  sp2 = sZ(),
  rp2 = b$();
function op2(A) {
  return !!A && !!A.$use;
}
class W01 {
  static __initStatic() {
    this.id = 'Prisma';
  }
  constructor(A = {}) {
    if (((this.name = W01.id), op2(A.client) && !A.client._sentryInstrumented)) {
      c4A.addNonEnumerableProperty(A.client, '_sentryInstrumented', !0);
      let B = {};
      try {
        let Q = A.client._engineConfig;
        if (Q) {
          let { activeProvider: I, clientVersion: G } = Q;
          if (I) B['db.system'] = I;
          if (G) B['db.prisma.version'] = G;
        }
      } catch (Q) {}
      A.client.$use((Q, I) => {
        if (rp2.shouldDisableAutoInstrumentation(LE1.getCurrentHub)) return I(Q);
        let { action: G, model: D } = Q;
        return LE1.startSpan(
          {
            name: D ? `${D} ${G}` : G,
            onlyIfParent: !0,
            op: 'db.prisma',
            attributes: { [LE1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.db.prisma' },
            data: { ...B, 'db.operation': G },
          },
          () => I(Q)
        );
      });
    } else
      sp2.DEBUG_BUILD &&
        c4A.logger.warn(
          'Unsupported Prisma client provided to PrismaIntegration. Provided client:',
          A.client
        );
  }
  setupOnce() {}
}
W01.__initStatic();
l4A.Prisma = W01;

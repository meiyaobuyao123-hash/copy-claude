// Module: t4A
// Params: o4A

var { _optionalChain: RE1 } = tA();
Object.defineProperty(o4A, '__esModule', { value: !0 });
var gG = tA(),
  J01 = sZ(),
  Bc2 = b$();
class C01 {
  static __initStatic() {
    this.id = 'Apollo';
  }
  constructor(A = { useNestjs: !1 }) {
    ((this.name = C01.id), (this._useNest = !!A.useNestjs));
  }
  loadDependency() {
    if (this._useNest) this._module = this._module || gG.loadModule('@nestjs/graphql');
    else this._module = this._module || gG.loadModule('apollo-server-core');
    return this._module;
  }
  setupOnce(A, B) {
    if (Bc2.shouldDisableAutoInstrumentation(B)) {
      J01.DEBUG_BUILD &&
        gG.logger.log('Apollo Integration is skipped because of instrumenter configuration.');
      return;
    }
    if (this._useNest) {
      let Q = this.loadDependency();
      if (!Q) {
        J01.DEBUG_BUILD &&
          gG.logger.error(
            'Apollo-NestJS Integration was unable to require @nestjs/graphql package.'
          );
        return;
      }
      gG.fill(Q.GraphQLFactory.prototype, 'mergeWithSchema', function (I) {
        return function (...G) {
          return (
            gG.fill(this.resolversExplorerService, 'explore', function (D) {
              return function () {
                let Z = gG.arrayify(D.call(this));
                return r4A(Z, B);
              };
            }),
            I.call(this, ...G)
          );
        };
      });
    } else {
      let Q = this.loadDependency();
      if (!Q) {
        J01.DEBUG_BUILD &&
          gG.logger.error('Apollo Integration was unable to require apollo-server-core package.');
        return;
      }
      gG.fill(Q.ApolloServerBase.prototype, 'constructSchema', function (I) {
        return function () {
          if (!this.config.resolvers) {
            if (J01.DEBUG_BUILD) {
              if (this.config.schema)
                (gG.logger.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead.'
                ),
                  gG.logger.warn());
              else if (this.config.modules)
                gG.logger.warn(
                  'Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.'
                );
              gG.logger.error(
                'Skipping tracing as no resolvers found on the `ApolloServer` instance.'
              );
            }
            return I.call(this);
          }
          let G = gG.arrayify(this.config.resolvers);
          return ((this.config.resolvers = r4A(G, B)), I.call(this));
        };
      });
    }
  }
}
C01.__initStatic();
function r4A(A, B) {
  return A.map((Q) => {
    return (
      Object.keys(Q).forEach((I) => {
        Object.keys(Q[I]).forEach((G) => {
          if (typeof Q[I][G] !== 'function') return;
          Qc2(Q, I, G, B);
        });
      }),
      Q
    );
  });
}
function Qc2(A, B, Q, I) {
  gG.fill(A[B], Q, function (G) {
    return function (...D) {
      let Y = I().getScope().getSpan(),
        W = RE1([
          Y,
          'optionalAccess',
          (J) => J.startChild,
          'call',
          (J) =>
            J({ description: `${B}.${Q}`, op: 'graphql.resolve', origin: 'auto.graphql.apollo' }),
        ]),
        F = G.call(this, ...D);
      if (gG.isThenable(F))
        return F.then((J) => {
          return (RE1([W, 'optionalAccess', (C) => C.end, 'call', (C) => C()]), J);
        });
      return (RE1([W, 'optionalAccess', (J) => J.end, 'call', (J) => J()]), F);
    };
  });
}
o4A.Apollo = C01;

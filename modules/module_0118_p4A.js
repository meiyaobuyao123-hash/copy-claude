// Module: p4A
// Params: u4A

var { _optionalChain: g$ } = tA();
Object.defineProperty(u4A, '__esModule', { value: !0 });
var ru = tA(),
  d4A = sZ(),
  cp2 = b$(),
  lp2 = [
    'aggregate',
    'bulkWrite',
    'countDocuments',
    'createIndex',
    'createIndexes',
    'deleteMany',
    'deleteOne',
    'distinct',
    'drop',
    'dropIndex',
    'dropIndexes',
    'estimatedDocumentCount',
    'find',
    'findOne',
    'findOneAndDelete',
    'findOneAndReplace',
    'findOneAndUpdate',
    'indexes',
    'indexExists',
    'indexInformation',
    'initializeOrderedBulkOp',
    'insertMany',
    'insertOne',
    'isCapped',
    'mapReduce',
    'options',
    'parallelCollectionScan',
    'rename',
    'replaceOne',
    'stats',
    'updateMany',
    'updateOne',
  ],
  ip2 = {
    bulkWrite: ['operations'],
    countDocuments: ['query'],
    createIndex: ['fieldOrSpec'],
    createIndexes: ['indexSpecs'],
    deleteMany: ['filter'],
    deleteOne: ['filter'],
    distinct: ['key', 'query'],
    dropIndex: ['indexName'],
    find: ['query'],
    findOne: ['query'],
    findOneAndDelete: ['filter'],
    findOneAndReplace: ['filter', 'replacement'],
    findOneAndUpdate: ['filter', 'update'],
    indexExists: ['indexes'],
    insertMany: ['docs'],
    insertOne: ['doc'],
    mapReduce: ['map', 'reduce'],
    rename: ['newName'],
    replaceOne: ['filter', 'doc'],
    updateMany: ['filter', 'update'],
    updateOne: ['filter', 'update'],
  };
function np2(A) {
  return A && typeof A === 'object' && A.once && typeof A.once === 'function';
}
class Y01 {
  static __initStatic() {
    this.id = 'Mongo';
  }
  constructor(A = {}) {
    ((this.name = Y01.id),
      (this._operations = Array.isArray(A.operations) ? A.operations : lp2),
      (this._describeOperations = 'describeOperations' in A ? A.describeOperations : !0),
      (this._useMongoose = !!A.useMongoose));
  }
  loadDependency() {
    let A = this._useMongoose ? 'mongoose' : 'mongodb';
    return (this._module = this._module || ru.loadModule(A));
  }
  setupOnce(A, B) {
    if (cp2.shouldDisableAutoInstrumentation(B)) {
      d4A.DEBUG_BUILD &&
        ru.logger.log('Mongo Integration is skipped because of instrumenter configuration.');
      return;
    }
    let Q = this.loadDependency();
    if (!Q) {
      let I = this._useMongoose ? 'mongoose' : 'mongodb';
      d4A.DEBUG_BUILD &&
        ru.logger.error(`Mongo Integration was unable to require \`${I}\` package.`);
      return;
    }
    this._instrumentOperations(Q.Collection, this._operations, B);
  }
  _instrumentOperations(A, B, Q) {
    B.forEach((I) => this._patchOperation(A, I, Q));
  }
  _patchOperation(A, B, Q) {
    if (!(B in A.prototype)) return;
    let I = this._getSpanContextFromOperationArguments.bind(this);
    ru.fill(A.prototype, B, function (G) {
      return function (...D) {
        let Z = D[D.length - 1],
          Y = Q(),
          W = Y.getScope(),
          F = Y.getClient(),
          J = W.getSpan(),
          C = g$([
            F,
            'optionalAccess',
            (V) => V.getOptions,
            'call',
            (V) => V(),
            'access',
            (V) => V.sendDefaultPii,
          ]);
        if (typeof Z !== 'function' || (B === 'mapReduce' && D.length === 2)) {
          let V = g$([
              J,
              'optionalAccess',
              (U) => U.startChild,
              'call',
              (U) => U(I(this, B, D, C)),
            ]),
            K = G.call(this, ...D);
          if (ru.isThenable(K))
            return K.then((U) => {
              return (g$([V, 'optionalAccess', (N) => N.end, 'call', (N) => N()]), U);
            });
          else if (np2(K)) {
            let U = K;
            try {
              U.once('close', () => {
                g$([V, 'optionalAccess', (N) => N.end, 'call', (N) => N()]);
              });
            } catch (N) {
              g$([V, 'optionalAccess', (q) => q.end, 'call', (q) => q()]);
            }
            return U;
          } else return (g$([V, 'optionalAccess', (U) => U.end, 'call', (U) => U()]), K);
        }
        let X = g$([
          J,
          'optionalAccess',
          (V) => V.startChild,
          'call',
          (V) => V(I(this, B, D.slice(0, -1))),
        ]);
        return G.call(this, ...D.slice(0, -1), function (V, K) {
          (g$([X, 'optionalAccess', (U) => U.end, 'call', (U) => U()]), Z(V, K));
        });
      };
    });
  }
  _getSpanContextFromOperationArguments(A, B, Q, I = !1) {
    let G = {
        'db.system': 'mongodb',
        'db.name': A.dbName,
        'db.operation': B,
        'db.mongodb.collection': A.collectionName,
      },
      D = { op: 'db', origin: 'auto.db.mongo', description: B, data: G },
      Z = ip2[B],
      Y = Array.isArray(this._describeOperations)
        ? this._describeOperations.includes(B)
        : this._describeOperations;
    if (!Z || !Y || !I) return D;
    try {
      if (B === 'mapReduce') {
        let [W, F] = Q;
        ((G[Z[0]] = typeof W === 'string' ? W : W.name || '<anonymous>'),
          (G[Z[1]] = typeof F === 'string' ? F : F.name || '<anonymous>'));
      } else for (let W = 0; W < Z.length; W++) G[`db.mongodb.${Z[W]}`] = JSON.stringify(Q[W]);
    } catch (W) {}
    return D;
  }
}
Y01.__initStatic();
u4A.Mongo = Y01;

// Module: A6A
// Params: e4A,h$

Object.defineProperty(e4A, '__esModule', { value: !0 });
var BT = tA(),
  Gc2 = [
    () => {
      return new (BT.dynamicRequire(h$, './apollo').Apollo)();
    },
    () => {
      return new (BT.dynamicRequire(h$, './apollo').Apollo)({ useNestjs: !0 });
    },
    () => {
      return new (BT.dynamicRequire(h$, './graphql').GraphQL)();
    },
    () => {
      return new (BT.dynamicRequire(h$, './mongo').Mongo)();
    },
    () => {
      return new (BT.dynamicRequire(h$, './mongo').Mongo)({ mongoose: !0 });
    },
    () => {
      return new (BT.dynamicRequire(h$, './mysql').Mysql)();
    },
    () => {
      return new (BT.dynamicRequire(h$, './postgres').Postgres)();
    },
  ];
e4A.lazyLoadedNodePerformanceMonitoringIntegrations = Gc2;

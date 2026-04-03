// Module: Wt
// Params: V8

Object.defineProperty(V8, '__esModule', { value: !0 });
V8.experimental =
  V8.ServerInterceptingCall =
  V8.ResponderBuilder =
  V8.ServerListenerBuilder =
  V8.addAdminServicesToServer =
  V8.getChannelzHandlers =
  V8.getChannelzServiceDefinition =
  V8.InterceptorConfigurationError =
  V8.InterceptingCall =
  V8.RequesterBuilder =
  V8.ListenerBuilder =
  V8.StatusBuilder =
  V8.getClientChannel =
  V8.ServerCredentials =
  V8.Server =
  V8.setLogVerbosity =
  V8.setLogger =
  V8.load =
  V8.loadObject =
  V8.CallCredentials =
  V8.ChannelCredentials =
  V8.waitForClientReady =
  V8.closeClient =
  V8.Channel =
  V8.makeGenericClientConstructor =
  V8.makeClientConstructor =
  V8.loadPackageDefinition =
  V8.Client =
  V8.compressionAlgorithms =
  V8.propagate =
  V8.connectivityState =
  V8.status =
  V8.logVerbosity =
  V8.Metadata =
  V8.credentials =
    void 0;
var YX1 = sJ1();
Object.defineProperty(V8, 'CallCredentials', {
  enumerable: !0,
  get: function () {
    return YX1.CallCredentials;
  },
});
var gr6 = Oi1();
Object.defineProperty(V8, 'Channel', {
  enumerable: !0,
  get: function () {
    return gr6.ChannelImplementation;
  },
});
var hr6 = vn1();
Object.defineProperty(V8, 'compressionAlgorithms', {
  enumerable: !0,
  get: function () {
    return hr6.CompressionAlgorithms;
  },
});
var mr6 = $C();
Object.defineProperty(V8, 'connectivityState', {
  enumerable: !0,
  get: function () {
    return mr6.ConnectivityState;
  },
});
var WX1 = To();
Object.defineProperty(V8, 'ChannelCredentials', {
  enumerable: !0,
  get: function () {
    return WX1.ChannelCredentials;
  },
});
var YY2 = Ri1();
Object.defineProperty(V8, 'Client', {
  enumerable: !0,
  get: function () {
    return YY2.Client;
  },
});
var Ra1 = O6();
Object.defineProperty(V8, 'logVerbosity', {
  enumerable: !0,
  get: function () {
    return Ra1.LogVerbosity;
  },
});
Object.defineProperty(V8, 'status', {
  enumerable: !0,
  get: function () {
    return Ra1.Status;
  },
});
Object.defineProperty(V8, 'propagate', {
  enumerable: !0,
  get: function () {
    return Ra1.Propagate;
  },
});
var WY2 = r8(),
  Oa1 = Pi1();
Object.defineProperty(V8, 'loadPackageDefinition', {
  enumerable: !0,
  get: function () {
    return Oa1.loadPackageDefinition;
  },
});
Object.defineProperty(V8, 'makeClientConstructor', {
  enumerable: !0,
  get: function () {
    return Oa1.makeClientConstructor;
  },
});
Object.defineProperty(V8, 'makeGenericClientConstructor', {
  enumerable: !0,
  get: function () {
    return Oa1.makeClientConstructor;
  },
});
var dr6 = XD();
Object.defineProperty(V8, 'Metadata', {
  enumerable: !0,
  get: function () {
    return dr6.Metadata;
  },
});
var ur6 = VZ2();
Object.defineProperty(V8, 'Server', {
  enumerable: !0,
  get: function () {
    return ur6.Server;
  },
});
var pr6 = oC1();
Object.defineProperty(V8, 'ServerCredentials', {
  enumerable: !0,
  get: function () {
    return pr6.ServerCredentials;
  },
});
var cr6 = wZ2();
Object.defineProperty(V8, 'StatusBuilder', {
  enumerable: !0,
  get: function () {
    return cr6.StatusBuilder;
  },
});
V8.credentials = {
  combineChannelCredentials: (A, ...B) => {
    return B.reduce((Q, I) => Q.compose(I), A);
  },
  combineCallCredentials: (A, ...B) => {
    return B.reduce((Q, I) => Q.compose(I), A);
  },
  createInsecure: WX1.ChannelCredentials.createInsecure,
  createSsl: WX1.ChannelCredentials.createSsl,
  createFromSecureContext: WX1.ChannelCredentials.createFromSecureContext,
  createFromMetadataGenerator: YX1.CallCredentials.createFromMetadataGenerator,
  createFromGoogleCredential: YX1.CallCredentials.createFromGoogleCredential,
  createEmpty: YX1.CallCredentials.createEmpty,
};
var lr6 = (A) => A.close();
V8.closeClient = lr6;
var ir6 = (A, B, Q) => A.waitForReady(B, Q);
V8.waitForClientReady = ir6;
var nr6 = (A, B) => {
  throw new Error(
    'Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead'
  );
};
V8.loadObject = nr6;
var ar6 = (A, B, Q) => {
  throw new Error(
    'Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead'
  );
};
V8.load = ar6;
var sr6 = (A) => {
  WY2.setLogger(A);
};
V8.setLogger = sr6;
var rr6 = (A) => {
  WY2.setLoggerVerbosity(A);
};
V8.setLogVerbosity = rr6;
var or6 = (A) => {
  return YY2.Client.prototype.getChannel.call(A);
};
V8.getClientChannel = or6;
var FX1 = Mi1();
Object.defineProperty(V8, 'ListenerBuilder', {
  enumerable: !0,
  get: function () {
    return FX1.ListenerBuilder;
  },
});
Object.defineProperty(V8, 'RequesterBuilder', {
  enumerable: !0,
  get: function () {
    return FX1.RequesterBuilder;
  },
});
Object.defineProperty(V8, 'InterceptingCall', {
  enumerable: !0,
  get: function () {
    return FX1.InterceptingCall;
  },
});
Object.defineProperty(V8, 'InterceptorConfigurationError', {
  enumerable: !0,
  get: function () {
    return FX1.InterceptorConfigurationError;
  },
});
var FY2 = b_();
Object.defineProperty(V8, 'getChannelzServiceDefinition', {
  enumerable: !0,
  get: function () {
    return FY2.getChannelzServiceDefinition;
  },
});
Object.defineProperty(V8, 'getChannelzHandlers', {
  enumerable: !0,
  get: function () {
    return FY2.getChannelzHandlers;
  },
});
var tr6 = ZC1();
Object.defineProperty(V8, 'addAdminServicesToServer', {
  enumerable: !0,
  get: function () {
    return tr6.addAdminServicesToServer;
  },
});
var Ta1 = Ia1();
Object.defineProperty(V8, 'ServerListenerBuilder', {
  enumerable: !0,
  get: function () {
    return Ta1.ServerListenerBuilder;
  },
});
Object.defineProperty(V8, 'ResponderBuilder', {
  enumerable: !0,
  get: function () {
    return Ta1.ResponderBuilder;
  },
});
Object.defineProperty(V8, 'ServerInterceptingCall', {
  enumerable: !0,
  get: function () {
    return Ta1.ServerInterceptingCall;
  },
});
var er6 = Ca1();
V8.experimental = er6;
var Ao6 = On1(),
  Bo6 = hZ2(),
  Qo6 = lZ2(),
  Io6 = BX1(),
  Go6 = tZ2(),
  Do6 = ZY2(),
  Zo6 = b_();
(() => {
  (Ao6.setup(), Bo6.setup(), Qo6.setup(), Io6.setup(), Go6.setup(), Do6.setup(), Zo6.setup());
})();

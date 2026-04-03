// Module: b_
// Params: ZG2

var __dirname =
  '/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@grpc/grpc-js/build/src';
Object.defineProperty(ZG2, '__esModule', { value: !0 });
ZG2.registerChannelzSocket =
  ZG2.registerChannelzServer =
  ZG2.registerChannelzSubchannel =
  ZG2.registerChannelzChannel =
  ZG2.ChannelzCallTrackerStub =
  ZG2.ChannelzCallTracker =
  ZG2.ChannelzChildrenTrackerStub =
  ZG2.ChannelzChildrenTracker =
  ZG2.ChannelzTrace =
  ZG2.ChannelzTraceStub =
    void 0;
ZG2.unregisterChannelzRef = Ei6;
ZG2.getChannelzHandlers = GG2;
ZG2.getChannelzServiceDefinition = DG2;
ZG2.setup = Si6;
var kC1 = D1('net'),
  v_ = wQ2(),
  so = $C(),
  ro = O6(),
  Ki6 = qC(),
  Hi6 = ZC1(),
  zi6 = Pi1();
function zn1(A) {
  return { channel_id: A.id, name: A.name };
}
function wn1(A) {
  return { subchannel_id: A.id, name: A.name };
}
function wi6(A) {
  return { server_id: A.id };
}
function xC1(A) {
  return { socket_id: A.id, name: A.name };
}
var nI2 = 32,
  En1 = 100;
class oI2 {
  constructor() {
    ((this.events = []), (this.creationTimestamp = new Date()), (this.eventsLogged = 0));
  }
  addTrace() {}
  getTraceMessage() {
    return {
      creation_timestamp: Cw(this.creationTimestamp),
      num_events_logged: this.eventsLogged,
      events: [],
    };
  }
}
ZG2.ChannelzTraceStub = oI2;
class tI2 {
  constructor() {
    ((this.events = []), (this.eventsLogged = 0), (this.creationTimestamp = new Date()));
  }
  addTrace(A, B, Q) {
    let I = new Date();
    if (
      (this.events.push({
        description: B,
        severity: A,
        timestamp: I,
        childChannel: (Q === null || Q === void 0 ? void 0 : Q.kind) === 'channel' ? Q : void 0,
        childSubchannel:
          (Q === null || Q === void 0 ? void 0 : Q.kind) === 'subchannel' ? Q : void 0,
      }),
      this.events.length >= nI2 * 2)
    )
      this.events = this.events.slice(nI2);
    this.eventsLogged += 1;
  }
  getTraceMessage() {
    return {
      creation_timestamp: Cw(this.creationTimestamp),
      num_events_logged: this.eventsLogged,
      events: this.events.map((A) => {
        return {
          description: A.description,
          severity: A.severity,
          timestamp: Cw(A.timestamp),
          channel_ref: A.childChannel ? zn1(A.childChannel) : null,
          subchannel_ref: A.childSubchannel ? wn1(A.childSubchannel) : null,
        };
      }),
    };
  }
}
ZG2.ChannelzTrace = tI2;
class Un1 {
  constructor() {
    ((this.channelChildren = new v_.OrderedMap()),
      (this.subchannelChildren = new v_.OrderedMap()),
      (this.socketChildren = new v_.OrderedMap()),
      (this.trackerMap = {
        ['channel']: this.channelChildren,
        ['subchannel']: this.subchannelChildren,
        ['socket']: this.socketChildren,
      }));
  }
  refChild(A) {
    let B = this.trackerMap[A.kind],
      Q = B.find(A.id);
    if (Q.equals(B.end())) B.setElement(A.id, { ref: A, count: 1 }, Q);
    else Q.pointer[1].count += 1;
  }
  unrefChild(A) {
    let B = this.trackerMap[A.kind],
      Q = B.getElementByKey(A.id);
    if (Q !== void 0) {
      if (((Q.count -= 1), Q.count === 0)) B.eraseElementByKey(A.id);
    }
  }
  getChildLists() {
    return {
      channels: this.channelChildren,
      subchannels: this.subchannelChildren,
      sockets: this.socketChildren,
    };
  }
}
ZG2.ChannelzChildrenTracker = Un1;
class eI2 extends Un1 {
  refChild() {}
  unrefChild() {}
}
ZG2.ChannelzChildrenTrackerStub = eI2;
class Nn1 {
  constructor() {
    ((this.callsStarted = 0),
      (this.callsSucceeded = 0),
      (this.callsFailed = 0),
      (this.lastCallStartedTimestamp = null));
  }
  addCallStarted() {
    ((this.callsStarted += 1), (this.lastCallStartedTimestamp = new Date()));
  }
  addCallSucceeded() {
    this.callsSucceeded += 1;
  }
  addCallFailed() {
    this.callsFailed += 1;
  }
}
ZG2.ChannelzCallTracker = Nn1;
class AG2 extends Nn1 {
  addCallStarted() {}
  addCallSucceeded() {}
  addCallFailed() {}
}
ZG2.ChannelzCallTrackerStub = AG2;
var RN = {
    ['channel']: new v_.OrderedMap(),
    ['subchannel']: new v_.OrderedMap(),
    ['server']: new v_.OrderedMap(),
    ['socket']: new v_.OrderedMap(),
  },
  fC1 = (A) => {
    let B = 1;
    function Q() {
      return B++;
    }
    let I = RN[A];
    return (G, D, Z) => {
      let Y = Q(),
        W = { id: Y, name: G, kind: A };
      if (Z) I.setElement(Y, { ref: W, getInfo: D });
      return W;
    };
  };
ZG2.registerChannelzChannel = fC1('channel');
ZG2.registerChannelzSubchannel = fC1('subchannel');
ZG2.registerChannelzServer = fC1('server');
ZG2.registerChannelzSocket = fC1('socket');
function Ei6(A) {
  RN[A.kind].eraseElementByKey(A.id);
}
function Ui6(A) {
  let B = Number.parseInt(A, 16);
  return [(B / 256) | 0, B % 256];
}
function aI2(A) {
  if (A === '') return [];
  let B = A.split(':').map((I) => Ui6(I));
  return [].concat(...B);
}
function Ni6(A) {
  return kC1.isIPv6(A) && A.toLowerCase().startsWith('::ffff:') && kC1.isIPv4(A.substring(7));
}
function sI2(A) {
  return Buffer.from(Uint8Array.from(A.split('.').map((B) => Number.parseInt(B))));
}
function $i6(A) {
  if (kC1.isIPv4(A)) return sI2(A);
  else if (Ni6(A)) return sI2(A.substring(7));
  else if (kC1.isIPv6(A)) {
    let B,
      Q,
      I = A.indexOf('::');
    if (I === -1) ((B = A), (Q = ''));
    else ((B = A.substring(0, I)), (Q = A.substring(I + 2)));
    let G = Buffer.from(aI2(B)),
      D = Buffer.from(aI2(Q)),
      Z = Buffer.alloc(16 - G.length - D.length, 0);
    return Buffer.concat([G, Z, D]);
  } else return null;
}
function BG2(A) {
  switch (A) {
    case so.ConnectivityState.CONNECTING:
      return { state: 'CONNECTING' };
    case so.ConnectivityState.IDLE:
      return { state: 'IDLE' };
    case so.ConnectivityState.READY:
      return { state: 'READY' };
    case so.ConnectivityState.SHUTDOWN:
      return { state: 'SHUTDOWN' };
    case so.ConnectivityState.TRANSIENT_FAILURE:
      return { state: 'TRANSIENT_FAILURE' };
    default:
      return { state: 'UNKNOWN' };
  }
}
function Cw(A) {
  if (!A) return null;
  let B = A.getTime();
  return { seconds: (B / 1000) | 0, nanos: (B % 1000) * 1e6 };
}
function QG2(A) {
  let B = A.getInfo(),
    Q = [],
    I = [];
  return (
    B.children.channels.forEach((G) => {
      Q.push(zn1(G[1].ref));
    }),
    B.children.subchannels.forEach((G) => {
      I.push(wn1(G[1].ref));
    }),
    {
      ref: zn1(A.ref),
      data: {
        target: B.target,
        state: BG2(B.state),
        calls_started: B.callTracker.callsStarted,
        calls_succeeded: B.callTracker.callsSucceeded,
        calls_failed: B.callTracker.callsFailed,
        last_call_started_timestamp: Cw(B.callTracker.lastCallStartedTimestamp),
        trace: B.trace.getTraceMessage(),
      },
      channel_ref: Q,
      subchannel_ref: I,
    }
  );
}
function qi6(A, B) {
  let Q = parseInt(A.request.channel_id, 10),
    I = RN.channel.getElementByKey(Q);
  if (I === void 0) {
    B({ code: ro.Status.NOT_FOUND, details: 'No channel data found for id ' + Q });
    return;
  }
  B(null, { channel: QG2(I) });
}
function Mi6(A, B) {
  let Q = parseInt(A.request.max_results, 10) || En1,
    I = [],
    G = parseInt(A.request.start_channel_id, 10),
    D = RN.channel,
    Z;
  for (Z = D.lowerBound(G); !Z.equals(D.end()) && I.length < Q; Z = Z.next())
    I.push(QG2(Z.pointer[1]));
  B(null, { channel: I, end: Z.equals(D.end()) });
}
function IG2(A) {
  let B = A.getInfo(),
    Q = [];
  return (
    B.listenerChildren.sockets.forEach((I) => {
      Q.push(xC1(I[1].ref));
    }),
    {
      ref: wi6(A.ref),
      data: {
        calls_started: B.callTracker.callsStarted,
        calls_succeeded: B.callTracker.callsSucceeded,
        calls_failed: B.callTracker.callsFailed,
        last_call_started_timestamp: Cw(B.callTracker.lastCallStartedTimestamp),
        trace: B.trace.getTraceMessage(),
      },
      listen_socket: Q,
    }
  );
}
function Li6(A, B) {
  let Q = parseInt(A.request.server_id, 10),
    G = RN.server.getElementByKey(Q);
  if (G === void 0) {
    B({ code: ro.Status.NOT_FOUND, details: 'No server data found for id ' + Q });
    return;
  }
  B(null, { server: IG2(G) });
}
function Ri6(A, B) {
  let Q = parseInt(A.request.max_results, 10) || En1,
    I = parseInt(A.request.start_server_id, 10),
    G = RN.server,
    D = [],
    Z;
  for (Z = G.lowerBound(I); !Z.equals(G.end()) && D.length < Q; Z = Z.next())
    D.push(IG2(Z.pointer[1]));
  B(null, { server: D, end: Z.equals(G.end()) });
}
function Oi6(A, B) {
  let Q = parseInt(A.request.subchannel_id, 10),
    I = RN.subchannel.getElementByKey(Q);
  if (I === void 0) {
    B({ code: ro.Status.NOT_FOUND, details: 'No subchannel data found for id ' + Q });
    return;
  }
  let G = I.getInfo(),
    D = [];
  G.children.sockets.forEach((Y) => {
    D.push(xC1(Y[1].ref));
  });
  let Z = {
    ref: wn1(I.ref),
    data: {
      target: G.target,
      state: BG2(G.state),
      calls_started: G.callTracker.callsStarted,
      calls_succeeded: G.callTracker.callsSucceeded,
      calls_failed: G.callTracker.callsFailed,
      last_call_started_timestamp: Cw(G.callTracker.lastCallStartedTimestamp),
      trace: G.trace.getTraceMessage(),
    },
    socket_ref: D,
  };
  B(null, { subchannel: Z });
}
function rI2(A) {
  var B;
  if (Ki6.isTcpSubchannelAddress(A))
    return {
      address: 'tcpip_address',
      tcpip_address: {
        ip_address: (B = $i6(A.host)) !== null && B !== void 0 ? B : void 0,
        port: A.port,
      },
    };
  else return { address: 'uds_address', uds_address: { filename: A.path } };
}
function Ti6(A, B) {
  var Q, I, G, D, Z;
  let Y = parseInt(A.request.socket_id, 10),
    W = RN.socket.getElementByKey(Y);
  if (W === void 0) {
    B({ code: ro.Status.NOT_FOUND, details: 'No socket data found for id ' + Y });
    return;
  }
  let F = W.getInfo(),
    J = F.security
      ? {
          model: 'tls',
          tls: {
            cipher_suite: F.security.cipherSuiteStandardName ? 'standard_name' : 'other_name',
            standard_name:
              (Q = F.security.cipherSuiteStandardName) !== null && Q !== void 0 ? Q : void 0,
            other_name: (I = F.security.cipherSuiteOtherName) !== null && I !== void 0 ? I : void 0,
            local_certificate:
              (G = F.security.localCertificate) !== null && G !== void 0 ? G : void 0,
            remote_certificate:
              (D = F.security.remoteCertificate) !== null && D !== void 0 ? D : void 0,
          },
        }
      : null,
    C = {
      ref: xC1(W.ref),
      local: F.localAddress ? rI2(F.localAddress) : null,
      remote: F.remoteAddress ? rI2(F.remoteAddress) : null,
      remote_name: (Z = F.remoteName) !== null && Z !== void 0 ? Z : void 0,
      security: J,
      data: {
        keep_alives_sent: F.keepAlivesSent,
        streams_started: F.streamsStarted,
        streams_succeeded: F.streamsSucceeded,
        streams_failed: F.streamsFailed,
        last_local_stream_created_timestamp: Cw(F.lastLocalStreamCreatedTimestamp),
        last_remote_stream_created_timestamp: Cw(F.lastRemoteStreamCreatedTimestamp),
        messages_received: F.messagesReceived,
        messages_sent: F.messagesSent,
        last_message_received_timestamp: Cw(F.lastMessageReceivedTimestamp),
        last_message_sent_timestamp: Cw(F.lastMessageSentTimestamp),
        local_flow_control_window: F.localFlowControlWindow
          ? { value: F.localFlowControlWindow }
          : null,
        remote_flow_control_window: F.remoteFlowControlWindow
          ? { value: F.remoteFlowControlWindow }
          : null,
      },
    };
  B(null, { socket: C });
}
function Pi6(A, B) {
  let Q = parseInt(A.request.server_id, 10),
    I = RN.server.getElementByKey(Q);
  if (I === void 0) {
    B({ code: ro.Status.NOT_FOUND, details: 'No server data found for id ' + Q });
    return;
  }
  let G = parseInt(A.request.start_socket_id, 10),
    D = parseInt(A.request.max_results, 10) || En1,
    Y = I.getInfo().sessionChildren.sockets,
    W = [],
    F;
  for (F = Y.lowerBound(G); !F.equals(Y.end()) && W.length < D; F = F.next())
    W.push(xC1(F.pointer[1].ref));
  B(null, { socket_ref: W, end: F.equals(Y.end()) });
}
function GG2() {
  return {
    GetChannel: qi6,
    GetTopChannels: Mi6,
    GetServer: Li6,
    GetServers: Ri6,
    GetSubchannel: Oi6,
    GetSocket: Ti6,
    GetServerSockets: Pi6,
  };
}
var yC1 = null;
function DG2() {
  if (yC1) return yC1;
  let A = iI2().loadSync,
    B = A('channelz.proto', {
      keepCase: !0,
      longs: String,
      enums: String,
      defaults: !0,
      oneofs: !0,
      includeDirs: [`${__dirname}/../../proto`],
    });
  return ((yC1 = zi6.loadPackageDefinition(B).grpc.channelz.v1.Channelz.service), yC1);
}
function Si6() {
  Hi6.registerAdminService(DG2, GG2);
}

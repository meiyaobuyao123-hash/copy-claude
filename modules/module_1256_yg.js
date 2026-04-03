// Module: yg
// Params: GV8,cS0

var b5 = D1('node:diagnostics_channel'),
  uh1 = D1('node:util'),
  zY1 = uh1.debuglog('undici'),
  dh1 = uh1.debuglog('fetch'),
  TS = uh1.debuglog('websocket'),
  pS0 = !1,
  U66 = {
    beforeConnect: b5.channel('undici:client:beforeConnect'),
    connected: b5.channel('undici:client:connected'),
    connectError: b5.channel('undici:client:connectError'),
    sendHeaders: b5.channel('undici:client:sendHeaders'),
    create: b5.channel('undici:request:create'),
    bodySent: b5.channel('undici:request:bodySent'),
    headers: b5.channel('undici:request:headers'),
    trailers: b5.channel('undici:request:trailers'),
    error: b5.channel('undici:request:error'),
    open: b5.channel('undici:websocket:open'),
    close: b5.channel('undici:websocket:close'),
    socketError: b5.channel('undici:websocket:socket_error'),
    ping: b5.channel('undici:websocket:ping'),
    pong: b5.channel('undici:websocket:pong'),
  };
if (zY1.enabled || dh1.enabled) {
  let A = dh1.enabled ? dh1 : zY1;
  (b5.channel('undici:client:beforeConnect').subscribe((B) => {
    let {
      connectParams: { version: Q, protocol: I, port: G, host: D },
    } = B;
    A('connecting to %s using %s%s', `${D}${G ? `:${G}` : ''}`, I, Q);
  }),
    b5.channel('undici:client:connected').subscribe((B) => {
      let {
        connectParams: { version: Q, protocol: I, port: G, host: D },
      } = B;
      A('connected to %s using %s%s', `${D}${G ? `:${G}` : ''}`, I, Q);
    }),
    b5.channel('undici:client:connectError').subscribe((B) => {
      let {
        connectParams: { version: Q, protocol: I, port: G, host: D },
        error: Z,
      } = B;
      A('connection to %s using %s%s errored - %s', `${D}${G ? `:${G}` : ''}`, I, Q, Z.message);
    }),
    b5.channel('undici:client:sendHeaders').subscribe((B) => {
      let {
        request: { method: Q, path: I, origin: G },
      } = B;
      A('sending request to %s %s/%s', Q, G, I);
    }),
    b5.channel('undici:request:headers').subscribe((B) => {
      let {
        request: { method: Q, path: I, origin: G },
        response: { statusCode: D },
      } = B;
      A('received response to %s %s/%s - HTTP %d', Q, G, I, D);
    }),
    b5.channel('undici:request:trailers').subscribe((B) => {
      let {
        request: { method: Q, path: I, origin: G },
      } = B;
      A('trailers received from %s %s/%s', Q, G, I);
    }),
    b5.channel('undici:request:error').subscribe((B) => {
      let {
        request: { method: Q, path: I, origin: G },
        error: D,
      } = B;
      A('request to %s %s/%s errored - %s', Q, G, I, D.message);
    }),
    (pS0 = !0));
}
if (TS.enabled) {
  if (!pS0) {
    let A = zY1.enabled ? zY1 : TS;
    (b5.channel('undici:client:beforeConnect').subscribe((B) => {
      let {
        connectParams: { version: Q, protocol: I, port: G, host: D },
      } = B;
      A('connecting to %s%s using %s%s', D, G ? `:${G}` : '', I, Q);
    }),
      b5.channel('undici:client:connected').subscribe((B) => {
        let {
          connectParams: { version: Q, protocol: I, port: G, host: D },
        } = B;
        A('connected to %s%s using %s%s', D, G ? `:${G}` : '', I, Q);
      }),
      b5.channel('undici:client:connectError').subscribe((B) => {
        let {
          connectParams: { version: Q, protocol: I, port: G, host: D },
          error: Z,
        } = B;
        A('connection to %s%s using %s%s errored - %s', D, G ? `:${G}` : '', I, Q, Z.message);
      }),
      b5.channel('undici:client:sendHeaders').subscribe((B) => {
        let {
          request: { method: Q, path: I, origin: G },
        } = B;
        A('sending request to %s %s/%s', Q, G, I);
      }));
  }
  (b5.channel('undici:websocket:open').subscribe((A) => {
    let {
      address: { address: B, port: Q },
    } = A;
    TS('connection opened %s%s', B, Q ? `:${Q}` : '');
  }),
    b5.channel('undici:websocket:close').subscribe((A) => {
      let { websocket: B, code: Q, reason: I } = A;
      TS('closed connection to %s - %s %s', B.url, Q, I);
    }),
    b5.channel('undici:websocket:socket_error').subscribe((A) => {
      TS('connection errored - %s', A.message);
    }),
    b5.channel('undici:websocket:ping').subscribe((A) => {
      TS('ping received');
    }),
    b5.channel('undici:websocket:pong').subscribe((A) => {
      TS('pong received');
    }));
}
cS0.exports = { channels: U66 };

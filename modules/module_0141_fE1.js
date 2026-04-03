// Module: fE1
// Params: r6A

Object.defineProperty(r6A, '__esModule', { value: !0 });
var RE = I4(),
  R8 = tA(),
  RW = sZ(),
  IT = hy(),
  OE = LW(),
  ol2 = H01(),
  TE = l6A(),
  tl2 = eu(),
  el2 = 2147483647;
function E7(A) {
  return A / 1000;
}
function xE1() {
  return OE.WINDOW && OE.WINDOW.addEventListener && OE.WINDOW.performance;
}
var i6A = 0,
  M3 = {},
  BH,
  Qp;
function Ai2() {
  let A = xE1();
  if (A && R8.browserPerformanceTimeOrigin) {
    if (A.mark) OE.WINDOW.performance.mark('sentry-tracing-init');
    let B = Zi2(),
      Q = Gi2(),
      I = Di2(),
      G = Yi2();
    return () => {
      (B(), Q(), I(), G());
    };
  }
  return () => {
    return;
  };
}
function Bi2() {
  IT.addPerformanceInstrumentationHandler('longtask', ({ entries: A }) => {
    for (let B of A) {
      let Q = RE.getActiveTransaction();
      if (!Q) return;
      let I = E7(R8.browserPerformanceTimeOrigin + B.startTime),
        G = E7(B.duration);
      Q.startChild({
        description: 'Main UI thread blocked',
        op: 'ui.long-task',
        origin: 'auto.ui.browser.metrics',
        startTimestamp: I,
        endTimestamp: I + G,
      });
    }
  });
}
function Qi2() {
  IT.addPerformanceInstrumentationHandler('event', ({ entries: A }) => {
    for (let B of A) {
      let Q = RE.getActiveTransaction();
      if (!Q) return;
      if (B.name === 'click') {
        let I = E7(R8.browserPerformanceTimeOrigin + B.startTime),
          G = E7(B.duration),
          D = {
            description: R8.htmlTreeAsString(B.target),
            op: `ui.interaction.${B.name}`,
            origin: 'auto.ui.browser.metrics',
            startTimestamp: I,
            endTimestamp: I + G,
          },
          Z = R8.getComponentName(B.target);
        if (Z) D.attributes = { 'ui.component_name': Z };
        Q.startChild(D);
      }
    }
  });
}
function Ii2(A, B) {
  if (xE1() && R8.browserPerformanceTimeOrigin) {
    let I = Wi2(A, B);
    return () => {
      I();
    };
  }
  return () => {
    return;
  };
}
function Gi2() {
  return IT.addClsInstrumentationHandler(({ metric: A }) => {
    let B = A.entries[A.entries.length - 1];
    if (!B) return;
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding CLS'),
      (M3.cls = { value: A.value, unit: '' }),
      (Qp = B));
  }, !0);
}
function Di2() {
  return IT.addLcpInstrumentationHandler(({ metric: A }) => {
    let B = A.entries[A.entries.length - 1];
    if (!B) return;
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding LCP'),
      (M3.lcp = { value: A.value, unit: 'millisecond' }),
      (BH = B));
  }, !0);
}
function Zi2() {
  return IT.addFidInstrumentationHandler(({ metric: A }) => {
    let B = A.entries[A.entries.length - 1];
    if (!B) return;
    let Q = E7(R8.browserPerformanceTimeOrigin),
      I = E7(B.startTime);
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding FID'),
      (M3.fid = { value: A.value, unit: 'millisecond' }),
      (M3['mark.fid'] = { value: Q + I, unit: 'second' }));
  });
}
function Yi2() {
  return IT.addTtfbInstrumentationHandler(({ metric: A }) => {
    if (!A.entries[A.entries.length - 1]) return;
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding TTFB'),
      (M3.ttfb = { value: A.value, unit: 'millisecond' }));
  });
}
var n6A = {
  click: 'click',
  pointerdown: 'click',
  pointerup: 'click',
  mousedown: 'click',
  mouseup: 'click',
  touchstart: 'click',
  touchend: 'click',
  mouseover: 'hover',
  mouseout: 'hover',
  mouseenter: 'hover',
  mouseleave: 'hover',
  pointerover: 'hover',
  pointerout: 'hover',
  pointerenter: 'hover',
  pointerleave: 'hover',
  dragstart: 'drag',
  dragend: 'drag',
  drag: 'drag',
  dragenter: 'drag',
  dragleave: 'drag',
  dragover: 'drag',
  drop: 'drag',
  keydown: 'press',
  keyup: 'press',
  keypress: 'press',
  input: 'press',
};
function Wi2(A, B) {
  return IT.addInpInstrumentationHandler(({ metric: Q }) => {
    if (Q.value === void 0) return;
    let I = Q.entries.find((R) => R.duration === Q.value && n6A[R.name] !== void 0),
      G = RE.getClient();
    if (!I || !G) return;
    let D = n6A[I.name],
      Z = G.getOptions(),
      Y = E7(R8.browserPerformanceTimeOrigin + I.startTime),
      W = E7(Q.value),
      F = I.interactionId !== void 0 ? A[I.interactionId] : void 0;
    if (F === void 0) return;
    let { routeName: J, parentContext: C, activeTransaction: X, user: V, replayId: K } = F,
      U = V !== void 0 ? V.email || V.id || V.ip_address : void 0,
      N = X !== void 0 ? X.getProfileId() : void 0,
      q = new RE.Span({
        startTimestamp: Y,
        endTimestamp: Y + W,
        op: `ui.interaction.${D}`,
        name: R8.htmlTreeAsString(I.target),
        attributes: {
          release: Z.release,
          environment: Z.environment,
          transaction: J,
          ...(U !== void 0 && U !== '' ? { user: U } : {}),
          ...(N !== void 0 ? { profile_id: N } : {}),
          ...(K !== void 0 ? { replay_id: K } : {}),
        },
        exclusiveTime: Q.value,
        measurements: { inp: { value: Q.value, unit: 'millisecond' } },
      }),
      M = Hi2(C, Z, B);
    if (!M) return;
    if (Math.random() < M) {
      let R = q ? RE.createSpanEnvelope([q], G.getDsn()) : void 0,
        T = G && G.getTransport();
      if (T && R)
        T.send(R).then(null, (O) => {
          RW.DEBUG_BUILD && R8.logger.error('Error while sending interaction:', O);
        });
      return;
    }
  });
}
function Fi2(A) {
  let B = xE1();
  if (!B || !OE.WINDOW.performance.getEntries || !R8.browserPerformanceTimeOrigin) return;
  RW.DEBUG_BUILD && R8.logger.log('[Tracing] Adding & adjusting spans using Performance API');
  let Q = E7(R8.browserPerformanceTimeOrigin),
    I = B.getEntries(),
    { op: G, start_timestamp: D } = RE.spanToJSON(A);
  if (
    (I.slice(i6A).forEach((Z) => {
      let Y = E7(Z.startTime),
        W = E7(Z.duration);
      if (A.op === 'navigation' && D && Q + Y < D) return;
      switch (Z.entryType) {
        case 'navigation': {
          Ji2(A, Z, Q);
          break;
        }
        case 'mark':
        case 'paint':
        case 'measure': {
          a6A(A, Z, Y, W, Q);
          let F = ol2.getVisibilityWatcher(),
            J = Z.startTime < F.firstHiddenTime;
          if (Z.name === 'first-paint' && J)
            (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding FP'),
              (M3.fp = { value: Z.startTime, unit: 'millisecond' }));
          if (Z.name === 'first-contentful-paint' && J)
            (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding FCP'),
              (M3.fcp = { value: Z.startTime, unit: 'millisecond' }));
          break;
        }
        case 'resource': {
          s6A(A, Z, Z.name, Y, W, Q);
          break;
        }
      }
    }),
    (i6A = Math.max(I.length - 1, 0)),
    Xi2(A),
    G === 'pageload')
  ) {
    (Ki2(M3),
      ['fcp', 'fp', 'lcp'].forEach((Y) => {
        if (!M3[Y] || !D || Q >= D) return;
        let W = M3[Y].value,
          F = Q + E7(W),
          J = Math.abs((F - D) * 1000),
          C = J - W;
        (RW.DEBUG_BUILD && R8.logger.log(`[Measurements] Normalized ${Y} from ${W} to ${J} (${C})`),
          (M3[Y].value = J));
      }));
    let Z = M3['mark.fid'];
    if (Z && M3.fid)
      (TE._startChild(A, {
        description: 'first input delay',
        endTimestamp: Z.value + E7(M3.fid.value),
        op: 'ui.action',
        origin: 'auto.ui.browser.metrics',
        startTimestamp: Z.value,
      }),
        delete M3['mark.fid']);
    if (!('fcp' in M3)) delete M3.cls;
    (Object.keys(M3).forEach((Y) => {
      RE.setMeasurement(Y, M3[Y].value, M3[Y].unit);
    }),
      Vi2(A));
  }
  ((BH = void 0), (Qp = void 0), (M3 = {}));
}
function a6A(A, B, Q, I, G) {
  let D = G + Q,
    Z = D + I;
  return (
    TE._startChild(A, {
      description: B.name,
      endTimestamp: Z,
      op: B.entryType,
      origin: 'auto.resource.browser.metrics',
      startTimestamp: D,
    }),
    D
  );
}
function Ji2(A, B, Q) {
  (['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((I) => {
    E01(A, B, I, Q);
  }),
    E01(A, B, 'secureConnection', Q, 'TLS/SSL', 'connectEnd'),
    E01(A, B, 'fetch', Q, 'cache', 'domainLookupStart'),
    E01(A, B, 'domainLookup', Q, 'DNS'),
    Ci2(A, B, Q));
}
function E01(A, B, Q, I, G, D) {
  let Z = D ? B[D] : B[`${Q}End`],
    Y = B[`${Q}Start`];
  if (!Y || !Z) return;
  TE._startChild(A, {
    op: 'browser',
    origin: 'auto.browser.browser.metrics',
    description: G || Q,
    startTimestamp: I + E7(Y),
    endTimestamp: I + E7(Z),
  });
}
function Ci2(A, B, Q) {
  if (B.responseEnd)
    (TE._startChild(A, {
      op: 'browser',
      origin: 'auto.browser.browser.metrics',
      description: 'request',
      startTimestamp: Q + E7(B.requestStart),
      endTimestamp: Q + E7(B.responseEnd),
    }),
      TE._startChild(A, {
        op: 'browser',
        origin: 'auto.browser.browser.metrics',
        description: 'response',
        startTimestamp: Q + E7(B.responseStart),
        endTimestamp: Q + E7(B.responseEnd),
      }));
}
function s6A(A, B, Q, I, G, D) {
  if (B.initiatorType === 'xmlhttprequest' || B.initiatorType === 'fetch') return;
  let Z = R8.parseUrl(Q),
    Y = {};
  if (
    (kE1(Y, B, 'transferSize', 'http.response_transfer_size'),
    kE1(Y, B, 'encodedBodySize', 'http.response_content_length'),
    kE1(Y, B, 'decodedBodySize', 'http.decoded_response_content_length'),
    'renderBlockingStatus' in B)
  )
    Y['resource.render_blocking_status'] = B.renderBlockingStatus;
  if (Z.protocol) Y['url.scheme'] = Z.protocol.split(':').pop();
  if (Z.host) Y['server.address'] = Z.host;
  Y['url.same_origin'] = Q.includes(OE.WINDOW.location.origin);
  let W = D + I,
    F = W + G;
  TE._startChild(A, {
    description: Q.replace(OE.WINDOW.location.origin, ''),
    endTimestamp: F,
    op: B.initiatorType ? `resource.${B.initiatorType}` : 'resource.other',
    origin: 'auto.resource.browser.metrics',
    startTimestamp: W,
    data: Y,
  });
}
function Xi2(A) {
  let B = OE.WINDOW.navigator;
  if (!B) return;
  let Q = B.connection;
  if (Q) {
    if (Q.effectiveType) A.setTag('effectiveConnectionType', Q.effectiveType);
    if (Q.type) A.setTag('connectionType', Q.type);
    if (TE.isMeasurementValue(Q.rtt)) M3['connection.rtt'] = { value: Q.rtt, unit: 'millisecond' };
  }
  if (TE.isMeasurementValue(B.deviceMemory)) A.setTag('deviceMemory', `${B.deviceMemory} GB`);
  if (TE.isMeasurementValue(B.hardwareConcurrency))
    A.setTag('hardwareConcurrency', String(B.hardwareConcurrency));
}
function Vi2(A) {
  if (BH) {
    if ((RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding LCP Data'), BH.element))
      A.setTag('lcp.element', R8.htmlTreeAsString(BH.element));
    if (BH.id) A.setTag('lcp.id', BH.id);
    if (BH.url) A.setTag('lcp.url', BH.url.trim().slice(0, 200));
    A.setTag('lcp.size', BH.size);
  }
  if (Qp && Qp.sources)
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding CLS Data'),
      Qp.sources.forEach((B, Q) => A.setTag(`cls.source.${Q + 1}`, R8.htmlTreeAsString(B.node))));
}
function kE1(A, B, Q, I) {
  let G = B[Q];
  if (G != null && G < el2) A[I] = G;
}
function Ki2(A) {
  let B = tl2.getNavigationEntry();
  if (!B) return;
  let { responseStart: Q, requestStart: I } = B;
  if (I <= Q)
    (RW.DEBUG_BUILD && R8.logger.log('[Measurements] Adding TTFB Request Time'),
      (A['ttfb.requestTime'] = { value: Q - I, unit: 'millisecond' }));
}
function Hi2(A, B, Q) {
  if (!RE.hasTracingEnabled(B)) return !1;
  let I;
  if (A !== void 0 && typeof B.tracesSampler === 'function')
    I = B.tracesSampler({
      transactionContext: A,
      name: A.name,
      parentSampled: A.parentSampled,
      attributes: { ...A.data, ...A.attributes },
      location: OE.WINDOW.location,
    });
  else if (A !== void 0 && A.sampled !== void 0) I = A.sampled;
  else if (typeof B.tracesSampleRate !== 'undefined') I = B.tracesSampleRate;
  else I = 1;
  if (!RE.isValidSampleRate(I))
    return (
      RW.DEBUG_BUILD &&
        R8.logger.warn('[Tracing] Discarding interaction span because of invalid sample rate.'),
      !1
    );
  if (I === !0) return Q;
  else if (I === !1) return 0;
  return I * Q;
}
r6A._addMeasureSpans = a6A;
r6A._addResourceSpans = s6A;
r6A.addPerformanceEntries = Fi2;
r6A.startTrackingINP = Ii2;
r6A.startTrackingInteractions = Qi2;
r6A.startTrackingLongTasks = Bi2;
r6A.startTrackingWebVitals = Ai2;

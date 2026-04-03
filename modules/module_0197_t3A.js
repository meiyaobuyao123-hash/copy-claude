// Module: t3A
// Params: o3A

Object.defineProperty(o3A, '__esModule', { value: !0 });
var jE = I4(),
  WH = tA(),
  n01 = Xp(),
  l3A = 'HttpClient',
  I19 = (A = {}) => {
    let B = { failedRequestStatusCodes: [[500, 599]], failedRequestTargets: [/.*/], ...A };
    return {
      name: l3A,
      setupOnce() {},
      setup(Q) {
        (X19(Q, B), V19(Q, B));
      },
    };
  },
  i3A = jE.defineIntegration(I19),
  G19 = jE.convertIntegrationFnToClass(l3A, i3A);
function D19(A, B, Q, I) {
  if (a3A(A, Q.status, Q.url)) {
    let G = K19(B, I),
      D,
      Z,
      Y,
      W;
    if (r3A())
      [{ headers: D, cookies: Y }, { headers: Z, cookies: W }] = [
        { cookieHeader: 'Cookie', obj: G },
        { cookieHeader: 'Set-Cookie', obj: Q },
      ].map(({ cookieHeader: J, obj: C }) => {
        let X = W19(C.headers),
          V;
        try {
          let K = X[J] || X[J.toLowerCase()] || void 0;
          if (K) V = n3A(K);
        } catch (K) {
          n01.DEBUG_BUILD && WH.logger.log(`Could not extract cookies from header ${J}`);
        }
        return { headers: X, cookies: V };
      });
    let F = s3A({
      url: G.url,
      method: G.method,
      status: Q.status,
      requestHeaders: D,
      responseHeaders: Z,
      requestCookies: Y,
      responseCookies: W,
    });
    jE.captureEvent(F);
  }
}
function Z19(A, B, Q, I) {
  if (a3A(A, B.status, B.responseURL)) {
    let G, D, Z;
    if (r3A()) {
      try {
        let W = B.getResponseHeader('Set-Cookie') || B.getResponseHeader('set-cookie') || void 0;
        if (W) D = n3A(W);
      } catch (W) {
        n01.DEBUG_BUILD && WH.logger.log('Could not extract cookies from response headers');
      }
      try {
        Z = F19(B);
      } catch (W) {
        n01.DEBUG_BUILD && WH.logger.log('Could not extract headers from response');
      }
      G = I;
    }
    let Y = s3A({
      url: B.responseURL,
      method: Q,
      status: B.status,
      requestHeaders: G,
      responseHeaders: Z,
      responseCookies: D,
    });
    jE.captureEvent(Y);
  }
}
function Y19(A) {
  if (A) {
    let B = A['Content-Length'] || A['content-length'];
    if (B) return parseInt(B, 10);
  }
  return;
}
function n3A(A) {
  return A.split('; ').reduce((B, Q) => {
    let [I, G] = Q.split('=');
    return ((B[I] = G), B);
  }, {});
}
function W19(A) {
  let B = {};
  return (
    A.forEach((Q, I) => {
      B[I] = Q;
    }),
    B
  );
}
function F19(A) {
  let B = A.getAllResponseHeaders();
  if (!B) return {};
  return B.split(
    `\r
`
  ).reduce((Q, I) => {
    let [G, D] = I.split(': ');
    return ((Q[G] = D), Q);
  }, {});
}
function J19(A, B) {
  return A.some((Q) => {
    if (typeof Q === 'string') return B.includes(Q);
    return Q.test(B);
  });
}
function C19(A, B) {
  return A.some((Q) => {
    if (typeof Q === 'number') return Q === B;
    return B >= Q[0] && B <= Q[1];
  });
}
function X19(A, B) {
  if (!WH.supportsNativeFetch()) return;
  WH.addFetchInstrumentationHandler((Q) => {
    if (jE.getClient() !== A) return;
    let { response: I, args: G } = Q,
      [D, Z] = G;
    if (!I) return;
    D19(B, D, I, Z);
  });
}
function V19(A, B) {
  if (!('XMLHttpRequest' in WH.GLOBAL_OBJ)) return;
  WH.addXhrInstrumentationHandler((Q) => {
    if (jE.getClient() !== A) return;
    let I = Q.xhr,
      G = I[WH.SENTRY_XHR_DATA_KEY];
    if (!G) return;
    let { method: D, request_headers: Z } = G;
    try {
      Z19(B, I, D, Z);
    } catch (Y) {
      n01.DEBUG_BUILD &&
        WH.logger.warn('Error while extracting response event form XHR response', Y);
    }
  });
}
function a3A(A, B, Q) {
  return (
    C19(A.failedRequestStatusCodes, B) &&
    J19(A.failedRequestTargets, Q) &&
    !jE.isSentryRequestUrl(Q, jE.getClient())
  );
}
function s3A(A) {
  let B = `HTTP Client Error with status code: ${A.status}`,
    Q = {
      message: B,
      exception: { values: [{ type: 'Error', value: B }] },
      request: {
        url: A.url,
        method: A.method,
        headers: A.requestHeaders,
        cookies: A.requestCookies,
      },
      contexts: {
        response: {
          status_code: A.status,
          headers: A.responseHeaders,
          cookies: A.responseCookies,
          body_size: Y19(A.responseHeaders),
        },
      },
    };
  return (WH.addExceptionMechanism(Q, { type: 'http.client', handled: !1 }), Q);
}
function K19(A, B) {
  if (!B && A instanceof Request) return A;
  if (A instanceof Request && A.bodyUsed) return A;
  return new Request(A, B);
}
function r3A() {
  let A = jE.getClient();
  return A ? Boolean(A.getOptions().sendDefaultPii) : !1;
}
o3A.HttpClient = G19;
o3A.httpClientIntegration = i3A;

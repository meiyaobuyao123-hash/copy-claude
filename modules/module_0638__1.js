// Module: _1
// Params: ny9

var yc = Symbol.for('react.element'),
  yy9 = Symbol.for('react.portal'),
  ky9 = Symbol.for('react.fragment'),
  xy9 = Symbol.for('react.strict_mode'),
  fy9 = Symbol.for('react.profiler'),
  vy9 = Symbol.for('react.provider'),
  by9 = Symbol.for('react.context'),
  gy9 = Symbol.for('react.forward_ref'),
  hy9 = Symbol.for('react.suspense'),
  my9 = Symbol.for('react.memo'),
  dy9 = Symbol.for('react.lazy'),
  _RA = Symbol.iterator;
function uy9(A) {
  if (A === null || typeof A !== 'object') return null;
  return ((A = (_RA && A[_RA]) || A['@@iterator']), typeof A === 'function' ? A : null);
}
var kRA = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xRA = Object.assign,
  fRA = {};
function mx(A, B, Q) {
  ((this.props = A), (this.context = B), (this.refs = fRA), (this.updater = Q || kRA));
}
mx.prototype.isReactComponent = {};
mx.prototype.setState = function (A, B) {
  if (typeof A !== 'object' && typeof A !== 'function' && A != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, A, B, 'setState');
};
mx.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, 'forceUpdate');
};
function vRA() {}
vRA.prototype = mx.prototype;
function gM1(A, B, Q) {
  ((this.props = A), (this.context = B), (this.refs = fRA), (this.updater = Q || kRA));
}
var hM1 = (gM1.prototype = new vRA());
hM1.constructor = gM1;
xRA(hM1, mx.prototype);
hM1.isPureReactComponent = !0;
var jRA = Array.isArray,
  bRA = Object.prototype.hasOwnProperty,
  mM1 = { current: null },
  gRA = { key: !0, ref: !0, __self: !0, __source: !0 };
function hRA(A, B, Q) {
  var I,
    G = {},
    D = null,
    Z = null;
  if (B != null)
    for (I in (B.ref !== void 0 && (Z = B.ref), B.key !== void 0 && (D = '' + B.key), B))
      bRA.call(B, I) && !gRA.hasOwnProperty(I) && (G[I] = B[I]);
  var Y = arguments.length - 2;
  if (Y === 1) G.children = Q;
  else if (1 < Y) {
    for (var W = Array(Y), F = 0; F < Y; F++) W[F] = arguments[F + 2];
    G.children = W;
  }
  if (A && A.defaultProps) for (I in ((Y = A.defaultProps), Y)) G[I] === void 0 && (G[I] = Y[I]);
  return { $$typeof: yc, type: A, key: D, ref: Z, props: G, _owner: mM1.current };
}
function py9(A, B) {
  return { $$typeof: yc, type: A.type, key: B, ref: A.ref, props: A.props, _owner: A._owner };
}
function dM1(A) {
  return typeof A === 'object' && A !== null && A.$$typeof === yc;
}
function cy9(A) {
  var B = { '=': '=0', ':': '=2' };
  return (
    '$' +
    A.replace(/[=:]/g, function (Q) {
      return B[Q];
    })
  );
}
var yRA = /\/+/g;
function bM1(A, B) {
  return typeof A === 'object' && A !== null && A.key != null ? cy9('' + A.key) : B.toString(36);
}
function b41(A, B, Q, I, G) {
  var D = typeof A;
  if (D === 'undefined' || D === 'boolean') A = null;
  var Z = !1;
  if (A === null) Z = !0;
  else
    switch (D) {
      case 'string':
      case 'number':
        Z = !0;
        break;
      case 'object':
        switch (A.$$typeof) {
          case yc:
          case yy9:
            Z = !0;
        }
    }
  if (Z)
    return (
      (Z = A),
      (G = G(Z)),
      (A = I === '' ? '.' + bM1(Z, 0) : I),
      jRA(G)
        ? ((Q = ''),
          A != null && (Q = A.replace(yRA, '$&/') + '/'),
          b41(G, B, Q, '', function (F) {
            return F;
          }))
        : G != null &&
          (dM1(G) &&
            (G = py9(
              G,
              Q +
                (!G.key || (Z && Z.key === G.key) ? '' : ('' + G.key).replace(yRA, '$&/') + '/') +
                A
            )),
          B.push(G)),
      1
    );
  if (((Z = 0), (I = I === '' ? '.' : I + ':'), jRA(A)))
    for (var Y = 0; Y < A.length; Y++) {
      D = A[Y];
      var W = I + bM1(D, Y);
      Z += b41(D, B, Q, W, G);
    }
  else if (((W = uy9(A)), typeof W === 'function'))
    for (A = W.call(A), Y = 0; !(D = A.next()).done; )
      ((D = D.value), (W = I + bM1(D, Y++)), (Z += b41(D, B, Q, W, G)));
  else if (D === 'object')
    throw (
      (B = String(A)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (B === '[object Object]' ? 'object with keys {' + Object.keys(A).join(', ') + '}' : B) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  return Z;
}
function v41(A, B, Q) {
  if (A == null) return A;
  var I = [],
    G = 0;
  return (
    b41(A, I, '', '', function (D) {
      return B.call(Q, D, G++);
    }),
    I
  );
}
function ly9(A) {
  if (A._status === -1) {
    var B = A._result;
    ((B = B()),
      B.then(
        function (Q) {
          if (A._status === 0 || A._status === -1) ((A._status = 1), (A._result = Q));
        },
        function (Q) {
          if (A._status === 0 || A._status === -1) ((A._status = 2), (A._result = Q));
        }
      ),
      A._status === -1 && ((A._status = 0), (A._result = B)));
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var eD = { current: null },
  g41 = { transition: null },
  iy9 = { ReactCurrentDispatcher: eD, ReactCurrentBatchConfig: g41, ReactCurrentOwner: mM1 };
function mRA() {
  throw Error('act(...) is not supported in production builds of React.');
}
ny9.Children = {
  map: v41,
  forEach: function (A, B, Q) {
    v41(
      A,
      function () {
        B.apply(this, arguments);
      },
      Q
    );
  },
  count: function (A) {
    var B = 0;
    return (
      v41(A, function () {
        B++;
      }),
      B
    );
  },
  toArray: function (A) {
    return (
      v41(A, function (B) {
        return B;
      }) || []
    );
  },
  only: function (A) {
    if (!dM1(A))
      throw Error('React.Children.only expected to receive a single React element child.');
    return A;
  },
};
ny9.Component = mx;
ny9.Fragment = ky9;
ny9.Profiler = fy9;
ny9.PureComponent = gM1;
ny9.StrictMode = xy9;
ny9.Suspense = hy9;
ny9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy9;
ny9.act = mRA;
ny9.cloneElement = function (A, B, Q) {
  if (A === null || A === void 0)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + A + '.'
    );
  var I = xRA({}, A.props),
    G = A.key,
    D = A.ref,
    Z = A._owner;
  if (B != null) {
    if (
      (B.ref !== void 0 && ((D = B.ref), (Z = mM1.current)),
      B.key !== void 0 && (G = '' + B.key),
      A.type && A.type.defaultProps)
    )
      var Y = A.type.defaultProps;
    for (W in B)
      bRA.call(B, W) &&
        !gRA.hasOwnProperty(W) &&
        (I[W] = B[W] === void 0 && Y !== void 0 ? Y[W] : B[W]);
  }
  var W = arguments.length - 2;
  if (W === 1) I.children = Q;
  else if (1 < W) {
    Y = Array(W);
    for (var F = 0; F < W; F++) Y[F] = arguments[F + 2];
    I.children = Y;
  }
  return { $$typeof: yc, type: A.type, key: G, ref: D, props: I, _owner: Z };
};
ny9.createContext = function (A) {
  return (
    (A = {
      $$typeof: by9,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (A.Provider = { $$typeof: vy9, _context: A }),
    (A.Consumer = A)
  );
};
ny9.createElement = hRA;
ny9.createFactory = function (A) {
  var B = hRA.bind(null, A);
  return ((B.type = A), B);
};
ny9.createRef = function () {
  return { current: null };
};
ny9.forwardRef = function (A) {
  return { $$typeof: gy9, render: A };
};
ny9.isValidElement = dM1;
ny9.lazy = function (A) {
  return { $$typeof: dy9, _payload: { _status: -1, _result: A }, _init: ly9 };
};
ny9.memo = function (A, B) {
  return { $$typeof: my9, type: A, compare: B === void 0 ? null : B };
};
ny9.startTransition = function (A) {
  var B = g41.transition;
  g41.transition = {};
  try {
    A();
  } finally {
    g41.transition = B;
  }
};
ny9.unstable_act = mRA;
ny9.useCallback = function (A, B) {
  return eD.current.useCallback(A, B);
};
ny9.useContext = function (A) {
  return eD.current.useContext(A);
};
ny9.useDebugValue = function () {};
ny9.useDeferredValue = function (A) {
  return eD.current.useDeferredValue(A);
};
ny9.useEffect = function (A, B) {
  return eD.current.useEffect(A, B);
};
ny9.useId = function () {
  return eD.current.useId();
};
ny9.useImperativeHandle = function (A, B, Q) {
  return eD.current.useImperativeHandle(A, B, Q);
};
ny9.useInsertionEffect = function (A, B) {
  return eD.current.useInsertionEffect(A, B);
};
ny9.useLayoutEffect = function (A, B) {
  return eD.current.useLayoutEffect(A, B);
};
ny9.useMemo = function (A, B) {
  return eD.current.useMemo(A, B);
};
ny9.useReducer = function (A, B, Q) {
  return eD.current.useReducer(A, B, Q);
};
ny9.useRef = function (A) {
  return eD.current.useRef(A);
};
ny9.useState = function (A) {
  return eD.current.useState(A);
};
ny9.useSyncExternalStore = function (A, B, Q) {
  return eD.current.useSyncExternalStore(A, B, Q);
};
ny9.useTransition = function () {
  return eD.current.useTransition();
};
ny9.version = '18.3.1';

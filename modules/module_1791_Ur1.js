// Module: Ur1
// Params: nc8,SV2

var Gj = Wd(),
  D45 = Er1(),
  Z45 = h3();
SV2.exports = PV2;
function PV2() {}
PV2.prototype = {
  addEventListener: function A(B, Q, I) {
    if (!Q) return;
    if (I === void 0) I = !1;
    if (!this._listeners) this._listeners = Object.create(null);
    if (!this._listeners[B]) this._listeners[B] = [];
    var G = this._listeners[B];
    for (var D = 0, Z = G.length; D < Z; D++) {
      var Y = G[D];
      if (Y.listener === Q && Y.capture === I) return;
    }
    var W = { listener: Q, capture: I };
    if (typeof Q === 'function') W.f = Q;
    G.push(W);
  },
  removeEventListener: function A(B, Q, I) {
    if (I === void 0) I = !1;
    if (this._listeners) {
      var G = this._listeners[B];
      if (G)
        for (var D = 0, Z = G.length; D < Z; D++) {
          var Y = G[D];
          if (Y.listener === Q && Y.capture === I) {
            if (G.length === 1) this._listeners[B] = void 0;
            else G.splice(D, 1);
            return;
          }
        }
    }
  },
  dispatchEvent: function A(B) {
    return this._dispatchEvent(B, !1);
  },
  _dispatchEvent: function A(B, Q) {
    if (typeof Q !== 'boolean') Q = !1;
    function I(F, J) {
      var { type: C, eventPhase: X } = J;
      if (((J.currentTarget = F), X !== Gj.CAPTURING_PHASE && F._handlers && F._handlers[C])) {
        var V = F._handlers[C],
          K;
        if (typeof V === 'function') K = V.call(J.currentTarget, J);
        else {
          var U = V.handleEvent;
          if (typeof U !== 'function')
            throw new TypeError('handleEvent property of event handler object isnot a function.');
          K = U.call(V, J);
        }
        switch (J.type) {
          case 'mouseover':
            if (K === !0) J.preventDefault();
            break;
          case 'beforeunload':
          default:
            if (K === !1) J.preventDefault();
            break;
        }
      }
      var N = F._listeners && F._listeners[C];
      if (!N) return;
      N = N.slice();
      for (var q = 0, M = N.length; q < M; q++) {
        if (J._immediatePropagationStopped) return;
        var R = N[q];
        if ((X === Gj.CAPTURING_PHASE && !R.capture) || (X === Gj.BUBBLING_PHASE && R.capture))
          continue;
        if (R.f) R.f.call(J.currentTarget, J);
        else {
          var T = R.listener.handleEvent;
          if (typeof T !== 'function')
            throw new TypeError('handleEvent property of event listener object is not a function.');
          T.call(R.listener, J);
        }
      }
    }
    if (!B._initialized || B._dispatching) Z45.InvalidStateError();
    ((B.isTrusted = Q), (B._dispatching = !0), (B.target = this));
    var G = [];
    for (var D = this.parentNode; D; D = D.parentNode) G.push(D);
    B.eventPhase = Gj.CAPTURING_PHASE;
    for (var Z = G.length - 1; Z >= 0; Z--) if ((I(G[Z], B), B._propagationStopped)) break;
    if (!B._propagationStopped) ((B.eventPhase = Gj.AT_TARGET), I(this, B));
    if (B.bubbles && !B._propagationStopped) {
      B.eventPhase = Gj.BUBBLING_PHASE;
      for (var Y = 0, W = G.length; Y < W; Y++) if ((I(G[Y], B), B._propagationStopped)) break;
    }
    if (
      ((B._dispatching = !1),
      (B.eventPhase = Gj.AT_TARGET),
      (B.currentTarget = null),
      Q && !B.defaultPrevented && B instanceof D45)
    )
      switch (B.type) {
        case 'mousedown':
          this._armed = { x: B.clientX, y: B.clientY, t: B.timeStamp };
          break;
        case 'mouseout':
        case 'mouseover':
          this._armed = null;
          break;
        case 'mouseup':
          if (this._isClick(B)) this._doClick(B);
          this._armed = null;
          break;
      }
    return !B.defaultPrevented;
  },
  _isClick: function (A) {
    return (
      this._armed !== null &&
      A.type === 'mouseup' &&
      A.isTrusted &&
      A.button === 0 &&
      A.timeStamp - this._armed.t < 1000 &&
      Math.abs(A.clientX - this._armed.x) < 10 &&
      Math.abs(A.clientY - this._armed.Y) < 10
    );
  },
  _doClick: function (A) {
    if (this._click_in_progress) return;
    this._click_in_progress = !0;
    var B = this;
    while (B && !B._post_click_activation_steps) B = B.parentNode;
    if (B && B._pre_click_activation_steps) B._pre_click_activation_steps();
    var Q = this.ownerDocument.createEvent('MouseEvent');
    Q.initMouseEvent(
      'click',
      !0,
      !0,
      this.ownerDocument.defaultView,
      1,
      A.screenX,
      A.screenY,
      A.clientX,
      A.clientY,
      A.ctrlKey,
      A.altKey,
      A.shiftKey,
      A.metaKey,
      A.button,
      null
    );
    var I = this._dispatchEvent(Q, !0);
    if (B) {
      if (I) {
        if (B._post_click_activation_steps) B._post_click_activation_steps(Q);
      } else if (B._cancelled_activation_steps) B._cancelled_activation_steps();
    }
  },
  _setEventHandler: function A(B, Q) {
    if (!this._handlers) this._handlers = Object.create(null);
    this._handlers[B] = Q;
  },
  _getEventHandler: function A(B) {
    return (this._handlers && this._handlers[B]) || null;
  },
};

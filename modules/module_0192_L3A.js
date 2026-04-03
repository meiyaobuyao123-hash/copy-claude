// Module: L3A
// Params: M3A

Object.defineProperty(M3A, '__esModule', { value: !0 });
var YH = tA(),
  ve2 = q3A(),
  HT = Xp(),
  p$ = YH.GLOBAL_OBJ;
class Vp {
  static __initStatic() {
    this.id = 'Offline';
  }
  constructor(A = {}) {
    ((this.name = Vp.id),
      (this.maxStoredEvents = A.maxStoredEvents || 30),
      (this.offlineEventStore = ve2.createInstance({ name: 'sentry/offlineEventStore' })));
  }
  setupOnce(A, B) {
    if (((this.hub = B()), 'addEventListener' in p$))
      p$.addEventListener('online', () => {
        this._sendEvents().catch(() => {
          HT.DEBUG_BUILD && YH.logger.warn('could not send cached events');
        });
      });
    let Q = (I) => {
      if (this.hub && this.hub.getIntegration(Vp)) {
        if ('navigator' in p$ && 'onLine' in p$.navigator && !p$.navigator.onLine)
          return (
            HT.DEBUG_BUILD &&
              YH.logger.log('Event dropped due to being a offline - caching instead'),
            this._cacheEvent(I)
              .then((G) => this._enforceMaxEvents())
              .catch((G) => {
                HT.DEBUG_BUILD && YH.logger.warn('could not cache event while offline');
              }),
            null
          );
      }
      return I;
    };
    if (
      ((Q.id = this.name),
      A(Q),
      'navigator' in p$ && 'onLine' in p$.navigator && p$.navigator.onLine)
    )
      this._sendEvents().catch(() => {
        HT.DEBUG_BUILD && YH.logger.warn('could not send cached events');
      });
  }
  async _cacheEvent(A) {
    return this.offlineEventStore.setItem(YH.uuid4(), YH.normalize(A));
  }
  async _enforceMaxEvents() {
    let A = [];
    return this.offlineEventStore
      .iterate((B, Q, I) => {
        A.push({ cacheKey: Q, event: B });
      })
      .then(() =>
        this._purgeEvents(
          A.sort((B, Q) => (Q.event.timestamp || 0) - (B.event.timestamp || 0))
            .slice(this.maxStoredEvents < A.length ? this.maxStoredEvents : A.length)
            .map((B) => B.cacheKey)
        )
      )
      .catch((B) => {
        HT.DEBUG_BUILD && YH.logger.warn('could not enforce max events');
      });
  }
  async _purgeEvent(A) {
    return this.offlineEventStore.removeItem(A);
  }
  async _purgeEvents(A) {
    return Promise.all(A.map((B) => this._purgeEvent(B))).then();
  }
  async _sendEvents() {
    return this.offlineEventStore.iterate((A, B, Q) => {
      if (this.hub)
        (this.hub.captureEvent(A),
          this._purgeEvent(B).catch((I) => {
            HT.DEBUG_BUILD && YH.logger.warn('could not purge event from cache');
          }));
      else HT.DEBUG_BUILD && YH.logger.warn('no hub found - could not send cached event');
    });
  }
}
Vp.__initStatic();
M3A.Offline = Vp;

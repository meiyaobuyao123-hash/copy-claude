// Module: O6
// Params: F32

Object.defineProperty(F32, '__esModule', { value: !0 });
F32.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH =
  F32.DEFAULT_MAX_SEND_MESSAGE_LENGTH =
  F32.Propagate =
  F32.LogVerbosity =
  F32.Status =
    void 0;
var Z32;
(function (A) {
  ((A[(A.OK = 0)] = 'OK'),
    (A[(A.CANCELLED = 1)] = 'CANCELLED'),
    (A[(A.UNKNOWN = 2)] = 'UNKNOWN'),
    (A[(A.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
    (A[(A.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
    (A[(A.NOT_FOUND = 5)] = 'NOT_FOUND'),
    (A[(A.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
    (A[(A.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
    (A[(A.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
    (A[(A.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
    (A[(A.ABORTED = 10)] = 'ABORTED'),
    (A[(A.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
    (A[(A.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
    (A[(A.INTERNAL = 13)] = 'INTERNAL'),
    (A[(A.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
    (A[(A.DATA_LOSS = 15)] = 'DATA_LOSS'),
    (A[(A.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'));
})(Z32 || (F32.Status = Z32 = {}));
var Y32;
(function (A) {
  ((A[(A.DEBUG = 0)] = 'DEBUG'),
    (A[(A.INFO = 1)] = 'INFO'),
    (A[(A.ERROR = 2)] = 'ERROR'),
    (A[(A.NONE = 3)] = 'NONE'));
})(Y32 || (F32.LogVerbosity = Y32 = {}));
var W32;
(function (A) {
  ((A[(A.DEADLINE = 1)] = 'DEADLINE'),
    (A[(A.CENSUS_STATS_CONTEXT = 2)] = 'CENSUS_STATS_CONTEXT'),
    (A[(A.CENSUS_TRACING_CONTEXT = 4)] = 'CENSUS_TRACING_CONTEXT'),
    (A[(A.CANCELLATION = 8)] = 'CANCELLATION'),
    (A[(A.DEFAULTS = 65535)] = 'DEFAULTS'));
})(W32 || (F32.Propagate = W32 = {}));
F32.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
F32.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304;

// Module: Ry
// Params: d0A

Object.defineProperty(d0A, '__esModule', { value: !0 });
d0A.SpanStatus = void 0;
(function (A) {
  A.Ok = 'ok';
  let Q = 'deadline_exceeded';
  A.DeadlineExceeded = Q;
  let I = 'unauthenticated';
  A.Unauthenticated = I;
  let G = 'permission_denied';
  A.PermissionDenied = G;
  let D = 'not_found';
  A.NotFound = D;
  let Z = 'resource_exhausted';
  A.ResourceExhausted = Z;
  let Y = 'invalid_argument';
  A.InvalidArgument = Y;
  let W = 'unimplemented';
  A.Unimplemented = W;
  let F = 'unavailable';
  A.Unavailable = F;
  let J = 'internal_error';
  A.InternalError = J;
  let C = 'unknown_error';
  A.UnknownError = C;
  let X = 'cancelled';
  A.Cancelled = X;
  let V = 'already_exists';
  A.AlreadyExists = V;
  let K = 'failed_precondition';
  A.FailedPrecondition = K;
  let U = 'aborted';
  A.Aborted = U;
  let N = 'out_of_range';
  A.OutOfRange = N;
  let q = 'data_loss';
  A.DataLoss = q;
})(d0A.SpanStatus || (d0A.SpanStatus = {}));
function dw1(A) {
  if (A < 400 && A >= 100) return 'ok';
  if (A >= 400 && A < 500)
    switch (A) {
      case 401:
        return 'unauthenticated';
      case 403:
        return 'permission_denied';
      case 404:
        return 'not_found';
      case 409:
        return 'already_exists';
      case 413:
        return 'failed_precondition';
      case 429:
        return 'resource_exhausted';
      default:
        return 'invalid_argument';
    }
  if (A >= 500 && A < 600)
    switch (A) {
      case 501:
        return 'unimplemented';
      case 503:
        return 'unavailable';
      case 504:
        return 'deadline_exceeded';
      default:
        return 'internal_error';
    }
  return 'unknown_error';
}
var kf2 = dw1;
function xf2(A, B) {
  (A.setTag('http.status_code', String(B)), A.setData('http.response.status_code', B));
  let Q = dw1(B);
  if (Q !== 'unknown_error') A.setStatus(Q);
}
d0A.getSpanStatusFromHttpCode = dw1;
d0A.setHttpStatus = xf2;
d0A.spanStatusfromHttpCode = kf2;

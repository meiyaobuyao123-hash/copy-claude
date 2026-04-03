// Module: y5
// Params: AV8,$S0

class j3 extends Error {
  constructor(A) {
    super(A);
    ((this.name = 'UndiciError'), (this.code = 'UND_ERR'));
  }
}
class AS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'ConnectTimeoutError'),
      (this.message = A || 'Connect Timeout Error'),
      (this.code = 'UND_ERR_CONNECT_TIMEOUT'));
  }
}
class BS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'HeadersTimeoutError'),
      (this.message = A || 'Headers Timeout Error'),
      (this.code = 'UND_ERR_HEADERS_TIMEOUT'));
  }
}
class QS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'HeadersOverflowError'),
      (this.message = A || 'Headers Overflow Error'),
      (this.code = 'UND_ERR_HEADERS_OVERFLOW'));
  }
}
class IS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'BodyTimeoutError'),
      (this.message = A || 'Body Timeout Error'),
      (this.code = 'UND_ERR_BODY_TIMEOUT'));
  }
}
class GS0 extends j3 {
  constructor(A, B, Q, I) {
    super(A);
    ((this.name = 'ResponseStatusCodeError'),
      (this.message = A || 'Response Status Code Error'),
      (this.code = 'UND_ERR_RESPONSE_STATUS_CODE'),
      (this.body = I),
      (this.status = B),
      (this.statusCode = B),
      (this.headers = Q));
  }
}
class DS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'InvalidArgumentError'),
      (this.message = A || 'Invalid Argument Error'),
      (this.code = 'UND_ERR_INVALID_ARG'));
  }
}
class ZS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'InvalidReturnValueError'),
      (this.message = A || 'Invalid Return Value Error'),
      (this.code = 'UND_ERR_INVALID_RETURN_VALUE'));
  }
}
class fh1 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'AbortError'), (this.message = A || 'The operation was aborted'));
  }
}
class YS0 extends fh1 {
  constructor(A) {
    super(A);
    ((this.name = 'AbortError'),
      (this.message = A || 'Request aborted'),
      (this.code = 'UND_ERR_ABORTED'));
  }
}
class WS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'InformationalError'),
      (this.message = A || 'Request information'),
      (this.code = 'UND_ERR_INFO'));
  }
}
class FS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'RequestContentLengthMismatchError'),
      (this.message = A || 'Request body length does not match content-length header'),
      (this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH'));
  }
}
class JS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'ResponseContentLengthMismatchError'),
      (this.message = A || 'Response body length does not match content-length header'),
      (this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH'));
  }
}
class CS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'ClientDestroyedError'),
      (this.message = A || 'The client is destroyed'),
      (this.code = 'UND_ERR_DESTROYED'));
  }
}
class XS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'ClientClosedError'),
      (this.message = A || 'The client is closed'),
      (this.code = 'UND_ERR_CLOSED'));
  }
}
class VS0 extends j3 {
  constructor(A, B) {
    super(A);
    ((this.name = 'SocketError'),
      (this.message = A || 'Socket error'),
      (this.code = 'UND_ERR_SOCKET'),
      (this.socket = B));
  }
}
class KS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'NotSupportedError'),
      (this.message = A || 'Not supported error'),
      (this.code = 'UND_ERR_NOT_SUPPORTED'));
  }
}
class HS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'MissingUpstreamError'),
      (this.message = A || 'No upstream has been added to the BalancedPool'),
      (this.code = 'UND_ERR_BPL_MISSING_UPSTREAM'));
  }
}
class zS0 extends Error {
  constructor(A, B, Q) {
    super(A);
    ((this.name = 'HTTPParserError'),
      (this.code = B ? `HPE_${B}` : void 0),
      (this.data = Q ? Q.toString() : void 0));
  }
}
class wS0 extends j3 {
  constructor(A) {
    super(A);
    ((this.name = 'ResponseExceededMaxSizeError'),
      (this.message = A || 'Response content exceeded max size'),
      (this.code = 'UND_ERR_RES_EXCEEDED_MAX_SIZE'));
  }
}
class ES0 extends j3 {
  constructor(A, B, { headers: Q, data: I }) {
    super(A);
    ((this.name = 'RequestRetryError'),
      (this.message = A || 'Request retry error'),
      (this.code = 'UND_ERR_REQ_RETRY'),
      (this.statusCode = B),
      (this.data = I),
      (this.headers = Q));
  }
}
class US0 extends j3 {
  constructor(A, B, { headers: Q, data: I }) {
    super(A);
    ((this.name = 'ResponseError'),
      (this.message = A || 'Response error'),
      (this.code = 'UND_ERR_RESPONSE'),
      (this.statusCode = B),
      (this.data = I),
      (this.headers = Q));
  }
}
class NS0 extends j3 {
  constructor(A, B, Q) {
    super(B, { cause: A, ...(Q ?? {}) });
    ((this.name = 'SecureProxyConnectionError'),
      (this.message = B || 'Secure Proxy Connection failed'),
      (this.code = 'UND_ERR_PRX_TLS'),
      (this.cause = A));
  }
}
$S0.exports = {
  AbortError: fh1,
  HTTPParserError: zS0,
  UndiciError: j3,
  HeadersTimeoutError: BS0,
  HeadersOverflowError: QS0,
  BodyTimeoutError: IS0,
  RequestContentLengthMismatchError: FS0,
  ConnectTimeoutError: AS0,
  ResponseStatusCodeError: GS0,
  InvalidArgumentError: DS0,
  InvalidReturnValueError: ZS0,
  RequestAbortedError: YS0,
  ClientDestroyedError: CS0,
  ClientClosedError: XS0,
  InformationalError: WS0,
  SocketError: VS0,
  NotSupportedError: KS0,
  ResponseContentLengthMismatchError: JS0,
  BalancedPoolMissingUpstreamError: HS0,
  ResponseExceededMaxSizeError: wS0,
  RequestRetryError: ES0,
  ResponseError: US0,
  SecureProxyConnectionError: NS0,
};

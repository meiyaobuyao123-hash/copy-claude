// Module: h3
// Params: P95

var g3 = SV1(),
  RQ = g3,
  T95 = _V1().isApiWritable;
P95.NAMESPACE = {
  HTML: 'http://www.w3.org/1999/xhtml',
  XML: 'http://www.w3.org/XML/1998/namespace',
  XMLNS: 'http://www.w3.org/2000/xmlns/',
  MATHML: 'http://www.w3.org/1998/Math/MathML',
  SVG: 'http://www.w3.org/2000/svg',
  XLINK: 'http://www.w3.org/1999/xlink',
};
P95.IndexSizeError = function () {
  throw new g3(RQ.INDEX_SIZE_ERR);
};
P95.HierarchyRequestError = function () {
  throw new g3(RQ.HIERARCHY_REQUEST_ERR);
};
P95.WrongDocumentError = function () {
  throw new g3(RQ.WRONG_DOCUMENT_ERR);
};
P95.InvalidCharacterError = function () {
  throw new g3(RQ.INVALID_CHARACTER_ERR);
};
P95.NoModificationAllowedError = function () {
  throw new g3(RQ.NO_MODIFICATION_ALLOWED_ERR);
};
P95.NotFoundError = function () {
  throw new g3(RQ.NOT_FOUND_ERR);
};
P95.NotSupportedError = function () {
  throw new g3(RQ.NOT_SUPPORTED_ERR);
};
P95.InvalidStateError = function () {
  throw new g3(RQ.INVALID_STATE_ERR);
};
P95.SyntaxError = function () {
  throw new g3(RQ.SYNTAX_ERR);
};
P95.InvalidModificationError = function () {
  throw new g3(RQ.INVALID_MODIFICATION_ERR);
};
P95.NamespaceError = function () {
  throw new g3(RQ.NAMESPACE_ERR);
};
P95.InvalidAccessError = function () {
  throw new g3(RQ.INVALID_ACCESS_ERR);
};
P95.TypeMismatchError = function () {
  throw new g3(RQ.TYPE_MISMATCH_ERR);
};
P95.SecurityError = function () {
  throw new g3(RQ.SECURITY_ERR);
};
P95.NetworkError = function () {
  throw new g3(RQ.NETWORK_ERR);
};
P95.AbortError = function () {
  throw new g3(RQ.ABORT_ERR);
};
P95.UrlMismatchError = function () {
  throw new g3(RQ.URL_MISMATCH_ERR);
};
P95.QuotaExceededError = function () {
  throw new g3(RQ.QUOTA_EXCEEDED_ERR);
};
P95.TimeoutError = function () {
  throw new g3(RQ.TIMEOUT_ERR);
};
P95.InvalidNodeTypeError = function () {
  throw new g3(RQ.INVALID_NODE_TYPE_ERR);
};
P95.DataCloneError = function () {
  throw new g3(RQ.DATA_CLONE_ERR);
};
P95.nyi = function () {
  throw new Error('NotYetImplemented');
};
P95.shouldOverride = function () {
  throw new Error('Abstract function; should be overriding in subclass.');
};
P95.assert = function (A, B) {
  if (!A)
    throw new Error(
      'Assertion failed: ' +
        (B || '') +
        `
` +
        new Error().stack
    );
};
P95.expose = function (A, B) {
  for (var Q in A) Object.defineProperty(B.prototype, Q, { value: A[Q], writable: T95 });
};
P95.merge = function (A, B) {
  for (var Q in B) A[Q] = B[Q];
};
P95.documentOrder = function (A, B) {
  return 3 - (A.compareDocumentPosition(B) & 6);
};
P95.toASCIILowerCase = function (A) {
  return A.replace(/[A-Z]+/g, function (B) {
    return B.toLowerCase();
  });
};
P95.toASCIIUpperCase = function (A) {
  return A.replace(/[a-z]+/g, function (B) {
    return B.toUpperCase();
  });
};

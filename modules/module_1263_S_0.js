// Module: S_0
// Params: N_0

Object.defineProperty(N_0, '__esModule', { value: !0 });
N_0.SPECIAL_HEADERS =
  N_0.HEADER_STATE =
  N_0.MINOR =
  N_0.MAJOR =
  N_0.CONNECTION_TOKEN_CHARS =
  N_0.HEADER_CHARS =
  N_0.TOKEN =
  N_0.STRICT_TOKEN =
  N_0.HEX =
  N_0.URL_CHAR =
  N_0.STRICT_URL_CHAR =
  N_0.USERINFO_CHARS =
  N_0.MARK =
  N_0.ALPHANUM =
  N_0.NUM =
  N_0.HEX_MAP =
  N_0.NUM_MAP =
  N_0.ALPHA =
  N_0.FINISH =
  N_0.H_METHOD_MAP =
  N_0.METHOD_MAP =
  N_0.METHODS_RTSP =
  N_0.METHODS_ICE =
  N_0.METHODS_HTTP =
  N_0.METHODS =
  N_0.LENIENT_FLAGS =
  N_0.FLAGS =
  N_0.TYPE =
  N_0.ERROR =
    void 0;
var p66 = X_0(),
  c66;
(function (A) {
  ((A[(A.OK = 0)] = 'OK'),
    (A[(A.INTERNAL = 1)] = 'INTERNAL'),
    (A[(A.STRICT = 2)] = 'STRICT'),
    (A[(A.LF_EXPECTED = 3)] = 'LF_EXPECTED'),
    (A[(A.UNEXPECTED_CONTENT_LENGTH = 4)] = 'UNEXPECTED_CONTENT_LENGTH'),
    (A[(A.CLOSED_CONNECTION = 5)] = 'CLOSED_CONNECTION'),
    (A[(A.INVALID_METHOD = 6)] = 'INVALID_METHOD'),
    (A[(A.INVALID_URL = 7)] = 'INVALID_URL'),
    (A[(A.INVALID_CONSTANT = 8)] = 'INVALID_CONSTANT'),
    (A[(A.INVALID_VERSION = 9)] = 'INVALID_VERSION'),
    (A[(A.INVALID_HEADER_TOKEN = 10)] = 'INVALID_HEADER_TOKEN'),
    (A[(A.INVALID_CONTENT_LENGTH = 11)] = 'INVALID_CONTENT_LENGTH'),
    (A[(A.INVALID_CHUNK_SIZE = 12)] = 'INVALID_CHUNK_SIZE'),
    (A[(A.INVALID_STATUS = 13)] = 'INVALID_STATUS'),
    (A[(A.INVALID_EOF_STATE = 14)] = 'INVALID_EOF_STATE'),
    (A[(A.INVALID_TRANSFER_ENCODING = 15)] = 'INVALID_TRANSFER_ENCODING'),
    (A[(A.CB_MESSAGE_BEGIN = 16)] = 'CB_MESSAGE_BEGIN'),
    (A[(A.CB_HEADERS_COMPLETE = 17)] = 'CB_HEADERS_COMPLETE'),
    (A[(A.CB_MESSAGE_COMPLETE = 18)] = 'CB_MESSAGE_COMPLETE'),
    (A[(A.CB_CHUNK_HEADER = 19)] = 'CB_CHUNK_HEADER'),
    (A[(A.CB_CHUNK_COMPLETE = 20)] = 'CB_CHUNK_COMPLETE'),
    (A[(A.PAUSED = 21)] = 'PAUSED'),
    (A[(A.PAUSED_UPGRADE = 22)] = 'PAUSED_UPGRADE'),
    (A[(A.PAUSED_H2_UPGRADE = 23)] = 'PAUSED_H2_UPGRADE'),
    (A[(A.USER = 24)] = 'USER'));
})((c66 = N_0.ERROR || (N_0.ERROR = {})));
var l66;
(function (A) {
  ((A[(A.BOTH = 0)] = 'BOTH'),
    (A[(A.REQUEST = 1)] = 'REQUEST'),
    (A[(A.RESPONSE = 2)] = 'RESPONSE'));
})((l66 = N_0.TYPE || (N_0.TYPE = {})));
var i66;
(function (A) {
  ((A[(A.CONNECTION_KEEP_ALIVE = 1)] = 'CONNECTION_KEEP_ALIVE'),
    (A[(A.CONNECTION_CLOSE = 2)] = 'CONNECTION_CLOSE'),
    (A[(A.CONNECTION_UPGRADE = 4)] = 'CONNECTION_UPGRADE'),
    (A[(A.CHUNKED = 8)] = 'CHUNKED'),
    (A[(A.UPGRADE = 16)] = 'UPGRADE'),
    (A[(A.CONTENT_LENGTH = 32)] = 'CONTENT_LENGTH'),
    (A[(A.SKIPBODY = 64)] = 'SKIPBODY'),
    (A[(A.TRAILING = 128)] = 'TRAILING'),
    (A[(A.TRANSFER_ENCODING = 512)] = 'TRANSFER_ENCODING'));
})((i66 = N_0.FLAGS || (N_0.FLAGS = {})));
var n66;
(function (A) {
  ((A[(A.HEADERS = 1)] = 'HEADERS'),
    (A[(A.CHUNKED_LENGTH = 2)] = 'CHUNKED_LENGTH'),
    (A[(A.KEEP_ALIVE = 4)] = 'KEEP_ALIVE'));
})((n66 = N_0.LENIENT_FLAGS || (N_0.LENIENT_FLAGS = {})));
var k9;
(function (A) {
  ((A[(A.DELETE = 0)] = 'DELETE'),
    (A[(A.GET = 1)] = 'GET'),
    (A[(A.HEAD = 2)] = 'HEAD'),
    (A[(A.POST = 3)] = 'POST'),
    (A[(A.PUT = 4)] = 'PUT'),
    (A[(A.CONNECT = 5)] = 'CONNECT'),
    (A[(A.OPTIONS = 6)] = 'OPTIONS'),
    (A[(A.TRACE = 7)] = 'TRACE'),
    (A[(A.COPY = 8)] = 'COPY'),
    (A[(A.LOCK = 9)] = 'LOCK'),
    (A[(A.MKCOL = 10)] = 'MKCOL'),
    (A[(A.MOVE = 11)] = 'MOVE'),
    (A[(A.PROPFIND = 12)] = 'PROPFIND'),
    (A[(A.PROPPATCH = 13)] = 'PROPPATCH'),
    (A[(A.SEARCH = 14)] = 'SEARCH'),
    (A[(A.UNLOCK = 15)] = 'UNLOCK'),
    (A[(A.BIND = 16)] = 'BIND'),
    (A[(A.REBIND = 17)] = 'REBIND'),
    (A[(A.UNBIND = 18)] = 'UNBIND'),
    (A[(A.ACL = 19)] = 'ACL'),
    (A[(A.REPORT = 20)] = 'REPORT'),
    (A[(A.MKACTIVITY = 21)] = 'MKACTIVITY'),
    (A[(A.CHECKOUT = 22)] = 'CHECKOUT'),
    (A[(A.MERGE = 23)] = 'MERGE'),
    (A[(A['M-SEARCH'] = 24)] = 'M-SEARCH'),
    (A[(A.NOTIFY = 25)] = 'NOTIFY'),
    (A[(A.SUBSCRIBE = 26)] = 'SUBSCRIBE'),
    (A[(A.UNSUBSCRIBE = 27)] = 'UNSUBSCRIBE'),
    (A[(A.PATCH = 28)] = 'PATCH'),
    (A[(A.PURGE = 29)] = 'PURGE'),
    (A[(A.MKCALENDAR = 30)] = 'MKCALENDAR'),
    (A[(A.LINK = 31)] = 'LINK'),
    (A[(A.UNLINK = 32)] = 'UNLINK'),
    (A[(A.SOURCE = 33)] = 'SOURCE'),
    (A[(A.PRI = 34)] = 'PRI'),
    (A[(A.DESCRIBE = 35)] = 'DESCRIBE'),
    (A[(A.ANNOUNCE = 36)] = 'ANNOUNCE'),
    (A[(A.SETUP = 37)] = 'SETUP'),
    (A[(A.PLAY = 38)] = 'PLAY'),
    (A[(A.PAUSE = 39)] = 'PAUSE'),
    (A[(A.TEARDOWN = 40)] = 'TEARDOWN'),
    (A[(A.GET_PARAMETER = 41)] = 'GET_PARAMETER'),
    (A[(A.SET_PARAMETER = 42)] = 'SET_PARAMETER'),
    (A[(A.REDIRECT = 43)] = 'REDIRECT'),
    (A[(A.RECORD = 44)] = 'RECORD'),
    (A[(A.FLUSH = 45)] = 'FLUSH'));
})((k9 = N_0.METHODS || (N_0.METHODS = {})));
N_0.METHODS_HTTP = [
  k9.DELETE,
  k9.GET,
  k9.HEAD,
  k9.POST,
  k9.PUT,
  k9.CONNECT,
  k9.OPTIONS,
  k9.TRACE,
  k9.COPY,
  k9.LOCK,
  k9.MKCOL,
  k9.MOVE,
  k9.PROPFIND,
  k9.PROPPATCH,
  k9.SEARCH,
  k9.UNLOCK,
  k9.BIND,
  k9.REBIND,
  k9.UNBIND,
  k9.ACL,
  k9.REPORT,
  k9.MKACTIVITY,
  k9.CHECKOUT,
  k9.MERGE,
  k9['M-SEARCH'],
  k9.NOTIFY,
  k9.SUBSCRIBE,
  k9.UNSUBSCRIBE,
  k9.PATCH,
  k9.PURGE,
  k9.MKCALENDAR,
  k9.LINK,
  k9.UNLINK,
  k9.PRI,
  k9.SOURCE,
];
N_0.METHODS_ICE = [k9.SOURCE];
N_0.METHODS_RTSP = [
  k9.OPTIONS,
  k9.DESCRIBE,
  k9.ANNOUNCE,
  k9.SETUP,
  k9.PLAY,
  k9.PAUSE,
  k9.TEARDOWN,
  k9.GET_PARAMETER,
  k9.SET_PARAMETER,
  k9.REDIRECT,
  k9.RECORD,
  k9.FLUSH,
  k9.GET,
  k9.POST,
];
N_0.METHOD_MAP = p66.enumToMap(k9);
N_0.H_METHOD_MAP = {};
Object.keys(N_0.METHOD_MAP).forEach((A) => {
  if (/^H/.test(A)) N_0.H_METHOD_MAP[A] = N_0.METHOD_MAP[A];
});
var a66;
(function (A) {
  ((A[(A.SAFE = 0)] = 'SAFE'),
    (A[(A.SAFE_WITH_CB = 1)] = 'SAFE_WITH_CB'),
    (A[(A.UNSAFE = 2)] = 'UNSAFE'));
})((a66 = N_0.FINISH || (N_0.FINISH = {})));
N_0.ALPHA = [];
for (let A = 65; A <= 90; A++)
  (N_0.ALPHA.push(String.fromCharCode(A)), N_0.ALPHA.push(String.fromCharCode(A + 32)));
N_0.NUM_MAP = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
N_0.HEX_MAP = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};
N_0.NUM = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
N_0.ALPHANUM = N_0.ALPHA.concat(N_0.NUM);
N_0.MARK = ['-', '_', '.', '!', '~', '*', "'", '(', ')'];
N_0.USERINFO_CHARS = N_0.ALPHANUM.concat(N_0.MARK).concat(['%', ';', ':', '&', '=', '+', '$', ',']);
N_0.STRICT_URL_CHAR = [
  '!',
  '"',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
].concat(N_0.ALPHANUM);
N_0.URL_CHAR = N_0.STRICT_URL_CHAR.concat(['\t', '\f']);
for (let A = 128; A <= 255; A++) N_0.URL_CHAR.push(A);
N_0.HEX = N_0.NUM.concat(['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']);
N_0.STRICT_TOKEN = [
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '*',
  '+',
  '-',
  '.',
  '^',
  '_',
  '`',
  '|',
  '~',
].concat(N_0.ALPHANUM);
N_0.TOKEN = N_0.STRICT_TOKEN.concat([' ']);
N_0.HEADER_CHARS = ['\t'];
for (let A = 32; A <= 255; A++) if (A !== 127) N_0.HEADER_CHARS.push(A);
N_0.CONNECTION_TOKEN_CHARS = N_0.HEADER_CHARS.filter((A) => A !== 44);
N_0.MAJOR = N_0.NUM_MAP;
N_0.MINOR = N_0.MAJOR;
var gg;
(function (A) {
  ((A[(A.GENERAL = 0)] = 'GENERAL'),
    (A[(A.CONNECTION = 1)] = 'CONNECTION'),
    (A[(A.CONTENT_LENGTH = 2)] = 'CONTENT_LENGTH'),
    (A[(A.TRANSFER_ENCODING = 3)] = 'TRANSFER_ENCODING'),
    (A[(A.UPGRADE = 4)] = 'UPGRADE'),
    (A[(A.CONNECTION_KEEP_ALIVE = 5)] = 'CONNECTION_KEEP_ALIVE'),
    (A[(A.CONNECTION_CLOSE = 6)] = 'CONNECTION_CLOSE'),
    (A[(A.CONNECTION_UPGRADE = 7)] = 'CONNECTION_UPGRADE'),
    (A[(A.TRANSFER_ENCODING_CHUNKED = 8)] = 'TRANSFER_ENCODING_CHUNKED'));
})((gg = N_0.HEADER_STATE || (N_0.HEADER_STATE = {})));
N_0.SPECIAL_HEADERS = {
  connection: gg.CONNECTION,
  'content-length': gg.CONTENT_LENGTH,
  'proxy-connection': gg.CONNECTION,
  'transfer-encoding': gg.TRANSFER_ENCODING,
  upgrade: gg.UPGRADE,
};

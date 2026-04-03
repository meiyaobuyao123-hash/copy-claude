// Module: HM0
// Params: ZJ8,KM0

var { defineProperty: zZ1, getOwnPropertyDescriptor: Ms4, getOwnPropertyNames: Ls4 } = Object,
  Rs4 = Object.prototype.hasOwnProperty,
  q1 = (A, B) => zZ1(A, 'name', { value: B, configurable: !0 }),
  Os4 = (A, B) => {
    for (var Q in B) zZ1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ts4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ls4(B))
        if (!Rs4.call(A, G) && G !== Q)
          zZ1(A, G, { get: () => B[G], enumerable: !(I = Ms4(B, G)) || I.enumerable });
    }
    return A;
  },
  Ps4 = (A) => Ts4(zZ1({}, '__esModule', { value: !0 }), A),
  t$0 = {};
Os4(t$0, {
  AccessDeniedException: () => Aq0,
  ApplyGuardrailCommand: () => DM0,
  ApplyGuardrailRequestFilterSensitiveLog: () => wq0,
  AsyncInvokeOutputDataConfig: () => Nb1,
  AsyncInvokeStatus: () => hs4,
  AsyncInvokeSummaryFilterSensitiveLog: () => Vq0,
  BedrockRuntime: () => VM0,
  BedrockRuntimeClient: () => jb1,
  BedrockRuntimeServiceException: () => UY,
  BidirectionalInputPayloadPartFilterSensitiveLog: () => Or4,
  BidirectionalOutputPayloadPartFilterSensitiveLog: () => Pr4,
  CachePointType: () => Zr4,
  ConflictException: () => Gq0,
  ContentBlock: () => CZ1,
  ContentBlockDelta: () => Rb1,
  ContentBlockDeltaEventFilterSensitiveLog: () => Lq0,
  ContentBlockDeltaFilterSensitiveLog: () => Mq0,
  ContentBlockFilterSensitiveLog: () => Eq0,
  ContentBlockStart: () => Ob1,
  ConversationRole: () => Vr4,
  ConverseCommand: () => ZM0,
  ConverseOutput: () => Mb1,
  ConverseOutputFilterSensitiveLog: () => Nq0,
  ConverseRequestFilterSensitiveLog: () => Uq0,
  ConverseResponseFilterSensitiveLog: () => $q0,
  ConverseStreamCommand: () => YM0,
  ConverseStreamOutput: () => Tb1,
  ConverseStreamOutputFilterSensitiveLog: () => Rr4,
  ConverseStreamRequestFilterSensitiveLog: () => qq0,
  ConverseStreamResponseFilterSensitiveLog: () => Rq0,
  DocumentFormat: () => Yr4,
  DocumentSource: () => GZ1,
  GetAsyncInvokeCommand: () => WM0,
  GetAsyncInvokeResponseFilterSensitiveLog: () => Xq0,
  GuardrailAction: () => is4,
  GuardrailContentBlock: () => IZ1,
  GuardrailContentBlockFilterSensitiveLog: () => zq0,
  GuardrailContentFilterConfidence: () => as4,
  GuardrailContentFilterStrength: () => ss4,
  GuardrailContentFilterType: () => rs4,
  GuardrailContentPolicyAction: () => ns4,
  GuardrailContentQualifier: () => ps4,
  GuardrailContentSource: () => ls4,
  GuardrailContextualGroundingFilterType: () => ts4,
  GuardrailContextualGroundingPolicyAction: () => os4,
  GuardrailConverseContentBlock: () => ZZ1,
  GuardrailConverseContentBlockFilterSensitiveLog: () => yb1,
  GuardrailConverseContentQualifier: () => Fr4,
  GuardrailConverseImageBlockFilterSensitiveLog: () => $r4,
  GuardrailConverseImageFormat: () => Wr4,
  GuardrailConverseImageSource: () => DZ1,
  GuardrailConverseImageSourceFilterSensitiveLog: () => Nr4,
  GuardrailImageBlockFilterSensitiveLog: () => Ur4,
  GuardrailImageFormat: () => us4,
  GuardrailImageSource: () => QZ1,
  GuardrailImageSourceFilterSensitiveLog: () => Er4,
  GuardrailManagedWordType: () => Gr4,
  GuardrailOutputScope: () => cs4,
  GuardrailPiiEntityType: () => Ar4,
  GuardrailSensitiveInformationPolicyAction: () => es4,
  GuardrailStreamProcessingMode: () => zr4,
  GuardrailTopicPolicyAction: () => Br4,
  GuardrailTopicType: () => Qr4,
  GuardrailTrace: () => Dr4,
  GuardrailWordPolicyAction: () => Ir4,
  ImageFormat: () => Jr4,
  ImageSource: () => YZ1,
  InternalServerException: () => Bq0,
  InvokeModelCommand: () => FM0,
  InvokeModelRequestFilterSensitiveLog: () => Oq0,
  InvokeModelResponseFilterSensitiveLog: () => Tq0,
  InvokeModelWithBidirectionalStreamCommand: () => JM0,
  InvokeModelWithBidirectionalStreamInput: () => HZ1,
  InvokeModelWithBidirectionalStreamInputFilterSensitiveLog: () => Tr4,
  InvokeModelWithBidirectionalStreamOutput: () => Pb1,
  InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog: () => Sr4,
  InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog: () => Pq0,
  InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog: () => Sq0,
  InvokeModelWithResponseStreamCommand: () => CM0,
  InvokeModelWithResponseStreamRequestFilterSensitiveLog: () => _q0,
  InvokeModelWithResponseStreamResponseFilterSensitiveLog: () => jq0,
  ListAsyncInvokesCommand: () => mb1,
  ListAsyncInvokesResponseFilterSensitiveLog: () => Kq0,
  MessageFilterSensitiveLog: () => wZ1,
  ModelErrorException: () => Wq0,
  ModelNotReadyException: () => Fq0,
  ModelStreamErrorException: () => Cq0,
  ModelTimeoutException: () => Jq0,
  PayloadPartFilterSensitiveLog: () => _r4,
  PerformanceConfigLatency: () => Kr4,
  PromptVariableValues: () => $b1,
  ReasoningContentBlock: () => WZ1,
  ReasoningContentBlockDelta: () => Lb1,
  ReasoningContentBlockDeltaFilterSensitiveLog: () => Lr4,
  ReasoningContentBlockFilterSensitiveLog: () => Mr4,
  ReasoningTextBlockFilterSensitiveLog: () => qr4,
  ResourceNotFoundException: () => Dq0,
  ResponseStream: () => Sb1,
  ResponseStreamFilterSensitiveLog: () => jr4,
  ServiceQuotaExceededException: () => Zq0,
  ServiceUnavailableException: () => Yq0,
  SortAsyncInvocationBy: () => ms4,
  SortOrder: () => ds4,
  StartAsyncInvokeCommand: () => XM0,
  StartAsyncInvokeRequestFilterSensitiveLog: () => Hq0,
  StopReason: () => Hr4,
  SystemContentBlock: () => XZ1,
  SystemContentBlockFilterSensitiveLog: () => kb1,
  ThrottlingException: () => Qq0,
  Tool: () => KZ1,
  ToolChoice: () => qb1,
  ToolInputSchema: () => VZ1,
  ToolResultContentBlock: () => JZ1,
  ToolResultStatus: () => Xr4,
  Trace: () => wr4,
  ValidationException: () => Iq0,
  VideoFormat: () => Cr4,
  VideoSource: () => FZ1,
  __Client: () => h1.Client,
  paginateListAsyncInvokes: () => $t4,
});
KM0.exports = Ps4(t$0);
var e$0 = KE0(),
  h$0 = WP(),
  Ss4 = FP(),
  _s4 = JP(),
  m$0 = FM(),
  js4 = QZ(),
  AF = o7(),
  ys4 = wE0(),
  ks4 = zP(),
  $z = mH(),
  d$0 = gW(),
  u$0 = lv1(),
  xs4 = q1((A) => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      defaultSigningName: 'bedrock',
    });
  }, 'resolveClientEndpointParameters'),
  gU = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  fs4 = y$0(),
  p$0 = OP(),
  c$0 = g$0(),
  h1 = ua(),
  vs4 = q1((A) => {
    let { httpAuthSchemes: B, httpAuthSchemeProvider: Q, credentials: I } = A;
    return {
      setHttpAuthScheme(G) {
        let D = B.findIndex((Z) => Z.schemeId === G.schemeId);
        if (D === -1) B.push(G);
        else B.splice(D, 1, G);
      },
      httpAuthSchemes() {
        return B;
      },
      setHttpAuthSchemeProvider(G) {
        Q = G;
      },
      httpAuthSchemeProvider() {
        return Q;
      },
      setCredentials(G) {
        I = G;
      },
      credentials() {
        return I;
      },
    };
  }, 'getHttpAuthExtensionConfiguration'),
  bs4 = q1((A) => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials(),
    };
  }, 'resolveHttpAuthRuntimeConfig'),
  gs4 = q1((A, B) => {
    let Q = Object.assign(
      p$0.getAwsRegionExtensionConfiguration(A),
      h1.getDefaultExtensionConfiguration(A),
      c$0.getHttpHandlerExtensionConfiguration(A),
      vs4(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        p$0.resolveAwsRegionExtensionConfiguration(Q),
        h1.resolveDefaultRuntimeConfig(Q),
        c$0.resolveHttpHandlerRuntimeConfig(Q),
        bs4(Q)
      )
    );
  }, 'resolveRuntimeExtensions'),
  jb1 = class extends h1.Client {
    static {
      q1(this, 'BedrockRuntimeClient');
    }
    config;
    constructor(...[A]) {
      let B = fs4.getRuntimeConfig(A || {});
      super(B);
      this.initConfig = B;
      let Q = xs4(B),
        I = m$0.resolveUserAgentConfig(Q),
        G = d$0.resolveRetryConfig(I),
        D = js4.resolveRegionConfig(G),
        Z = h$0.resolveHostHeaderConfig(D),
        Y = $z.resolveEndpointConfig(Z),
        W = ys4.resolveEventStreamSerdeConfig(Y),
        F = u$0.resolveHttpAuthSchemeConfig(W),
        J = e$0.resolveEventStreamConfig(F),
        C = gs4(J, A?.extensions || []);
      ((this.config = C),
        this.middlewareStack.use(m$0.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(d$0.getRetryPlugin(this.config)),
        this.middlewareStack.use(ks4.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(h$0.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(Ss4.getLoggerPlugin(this.config)),
        this.middlewareStack.use(_s4.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          AF.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              u$0.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: q1(
              async (X) =>
                new AF.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': X.credentials }),
              'identityProviderConfigProvider'
            ),
          })
        ),
        this.middlewareStack.use(AF.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  },
  hU = kH(),
  UY = class A extends h1.ServiceException {
    static {
      q1(this, 'BedrockRuntimeServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Aq0 = class A extends UY {
    static {
      q1(this, 'AccessDeniedException');
    }
    name = 'AccessDeniedException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'AccessDeniedException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Nb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.s3OutputDataConfig !== void 0) return Q.s3OutputDataConfig(B.s3OutputDataConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Nb1 || (Nb1 = {}));
var hs4 = { COMPLETED: 'Completed', FAILED: 'Failed', IN_PROGRESS: 'InProgress' },
  Bq0 = class A extends UY {
    static {
      q1(this, 'InternalServerException');
    }
    name = 'InternalServerException';
    $fault = 'server';
    constructor(B) {
      super({ name: 'InternalServerException', $fault: 'server', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Qq0 = class A extends UY {
    static {
      q1(this, 'ThrottlingException');
    }
    name = 'ThrottlingException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ThrottlingException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Iq0 = class A extends UY {
    static {
      q1(this, 'ValidationException');
    }
    name = 'ValidationException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ValidationException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  ms4 = { SUBMISSION_TIME: 'SubmissionTime' },
  ds4 = { ASCENDING: 'Ascending', DESCENDING: 'Descending' },
  Gq0 = class A extends UY {
    static {
      q1(this, 'ConflictException');
    }
    name = 'ConflictException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ConflictException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Dq0 = class A extends UY {
    static {
      q1(this, 'ResourceNotFoundException');
    }
    name = 'ResourceNotFoundException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ResourceNotFoundException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Zq0 = class A extends UY {
    static {
      q1(this, 'ServiceQuotaExceededException');
    }
    name = 'ServiceQuotaExceededException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ServiceQuotaExceededException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Yq0 = class A extends UY {
    static {
      q1(this, 'ServiceUnavailableException');
    }
    name = 'ServiceUnavailableException';
    $fault = 'server';
    constructor(B) {
      super({ name: 'ServiceUnavailableException', $fault: 'server', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  us4 = { JPEG: 'jpeg', PNG: 'png' },
  QZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.bytes !== void 0) return Q.bytes(B.bytes);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(QZ1 || (QZ1 = {}));
var ps4 = { GROUNDING_SOURCE: 'grounding_source', GUARD_CONTENT: 'guard_content', QUERY: 'query' },
  IZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.image !== void 0) return Q.image(B.image);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(IZ1 || (IZ1 = {}));
var cs4 = { FULL: 'FULL', INTERVENTIONS: 'INTERVENTIONS' },
  ls4 = { INPUT: 'INPUT', OUTPUT: 'OUTPUT' },
  is4 = { GUARDRAIL_INTERVENED: 'GUARDRAIL_INTERVENED', NONE: 'NONE' },
  ns4 = { BLOCKED: 'BLOCKED', NONE: 'NONE' },
  as4 = { HIGH: 'HIGH', LOW: 'LOW', MEDIUM: 'MEDIUM', NONE: 'NONE' },
  ss4 = { HIGH: 'HIGH', LOW: 'LOW', MEDIUM: 'MEDIUM', NONE: 'NONE' },
  rs4 = {
    HATE: 'HATE',
    INSULTS: 'INSULTS',
    MISCONDUCT: 'MISCONDUCT',
    PROMPT_ATTACK: 'PROMPT_ATTACK',
    SEXUAL: 'SEXUAL',
    VIOLENCE: 'VIOLENCE',
  },
  os4 = { BLOCKED: 'BLOCKED', NONE: 'NONE' },
  ts4 = { GROUNDING: 'GROUNDING', RELEVANCE: 'RELEVANCE' },
  es4 = { ANONYMIZED: 'ANONYMIZED', BLOCKED: 'BLOCKED', NONE: 'NONE' },
  Ar4 = {
    ADDRESS: 'ADDRESS',
    AGE: 'AGE',
    AWS_ACCESS_KEY: 'AWS_ACCESS_KEY',
    AWS_SECRET_KEY: 'AWS_SECRET_KEY',
    CA_HEALTH_NUMBER: 'CA_HEALTH_NUMBER',
    CA_SOCIAL_INSURANCE_NUMBER: 'CA_SOCIAL_INSURANCE_NUMBER',
    CREDIT_DEBIT_CARD_CVV: 'CREDIT_DEBIT_CARD_CVV',
    CREDIT_DEBIT_CARD_EXPIRY: 'CREDIT_DEBIT_CARD_EXPIRY',
    CREDIT_DEBIT_CARD_NUMBER: 'CREDIT_DEBIT_CARD_NUMBER',
    DRIVER_ID: 'DRIVER_ID',
    EMAIL: 'EMAIL',
    INTERNATIONAL_BANK_ACCOUNT_NUMBER: 'INTERNATIONAL_BANK_ACCOUNT_NUMBER',
    IP_ADDRESS: 'IP_ADDRESS',
    LICENSE_PLATE: 'LICENSE_PLATE',
    MAC_ADDRESS: 'MAC_ADDRESS',
    NAME: 'NAME',
    PASSWORD: 'PASSWORD',
    PHONE: 'PHONE',
    PIN: 'PIN',
    SWIFT_CODE: 'SWIFT_CODE',
    UK_NATIONAL_HEALTH_SERVICE_NUMBER: 'UK_NATIONAL_HEALTH_SERVICE_NUMBER',
    UK_NATIONAL_INSURANCE_NUMBER: 'UK_NATIONAL_INSURANCE_NUMBER',
    UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: 'UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER',
    URL: 'URL',
    USERNAME: 'USERNAME',
    US_BANK_ACCOUNT_NUMBER: 'US_BANK_ACCOUNT_NUMBER',
    US_BANK_ROUTING_NUMBER: 'US_BANK_ROUTING_NUMBER',
    US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: 'US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER',
    US_PASSPORT_NUMBER: 'US_PASSPORT_NUMBER',
    US_SOCIAL_SECURITY_NUMBER: 'US_SOCIAL_SECURITY_NUMBER',
    VEHICLE_IDENTIFICATION_NUMBER: 'VEHICLE_IDENTIFICATION_NUMBER',
  },
  Br4 = { BLOCKED: 'BLOCKED', NONE: 'NONE' },
  Qr4 = { DENY: 'DENY' },
  Ir4 = { BLOCKED: 'BLOCKED', NONE: 'NONE' },
  Gr4 = { PROFANITY: 'PROFANITY' },
  Dr4 = { DISABLED: 'disabled', ENABLED: 'enabled', ENABLED_FULL: 'enabled_full' },
  Zr4 = { DEFAULT: 'default' },
  Yr4 = {
    CSV: 'csv',
    DOC: 'doc',
    DOCX: 'docx',
    HTML: 'html',
    MD: 'md',
    PDF: 'pdf',
    TXT: 'txt',
    XLS: 'xls',
    XLSX: 'xlsx',
  },
  GZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.bytes !== void 0) return Q.bytes(B.bytes);
    if (B.s3Location !== void 0) return Q.s3Location(B.s3Location);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(GZ1 || (GZ1 = {}));
var Wr4 = { JPEG: 'jpeg', PNG: 'png' },
  DZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.bytes !== void 0) return Q.bytes(B.bytes);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(DZ1 || (DZ1 = {}));
var Fr4 = { GROUNDING_SOURCE: 'grounding_source', GUARD_CONTENT: 'guard_content', QUERY: 'query' },
  ZZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.image !== void 0) return Q.image(B.image);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(ZZ1 || (ZZ1 = {}));
var Jr4 = { GIF: 'gif', JPEG: 'jpeg', PNG: 'png', WEBP: 'webp' },
  YZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.bytes !== void 0) return Q.bytes(B.bytes);
    if (B.s3Location !== void 0) return Q.s3Location(B.s3Location);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(YZ1 || (YZ1 = {}));
var WZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.reasoningText !== void 0) return Q.reasoningText(B.reasoningText);
    if (B.redactedContent !== void 0) return Q.redactedContent(B.redactedContent);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(WZ1 || (WZ1 = {}));
var Cr4 = {
    FLV: 'flv',
    MKV: 'mkv',
    MOV: 'mov',
    MP4: 'mp4',
    MPEG: 'mpeg',
    MPG: 'mpg',
    THREE_GP: 'three_gp',
    WEBM: 'webm',
    WMV: 'wmv',
  },
  FZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.bytes !== void 0) return Q.bytes(B.bytes);
    if (B.s3Location !== void 0) return Q.s3Location(B.s3Location);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(FZ1 || (FZ1 = {}));
var JZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.json !== void 0) return Q.json(B.json);
    if (B.text !== void 0) return Q.text(B.text);
    if (B.image !== void 0) return Q.image(B.image);
    if (B.document !== void 0) return Q.document(B.document);
    if (B.video !== void 0) return Q.video(B.video);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(JZ1 || (JZ1 = {}));
var Xr4 = { ERROR: 'error', SUCCESS: 'success' },
  CZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.image !== void 0) return Q.image(B.image);
    if (B.document !== void 0) return Q.document(B.document);
    if (B.video !== void 0) return Q.video(B.video);
    if (B.toolUse !== void 0) return Q.toolUse(B.toolUse);
    if (B.toolResult !== void 0) return Q.toolResult(B.toolResult);
    if (B.guardContent !== void 0) return Q.guardContent(B.guardContent);
    if (B.cachePoint !== void 0) return Q.cachePoint(B.cachePoint);
    if (B.reasoningContent !== void 0) return Q.reasoningContent(B.reasoningContent);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(CZ1 || (CZ1 = {}));
var Vr4 = { ASSISTANT: 'assistant', USER: 'user' },
  Kr4 = { OPTIMIZED: 'optimized', STANDARD: 'standard' },
  $b1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})($b1 || ($b1 = {}));
var XZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.guardContent !== void 0) return Q.guardContent(B.guardContent);
    if (B.cachePoint !== void 0) return Q.cachePoint(B.cachePoint);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(XZ1 || (XZ1 = {}));
var qb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.auto !== void 0) return Q.auto(B.auto);
    if (B.any !== void 0) return Q.any(B.any);
    if (B.tool !== void 0) return Q.tool(B.tool);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(qb1 || (qb1 = {}));
var VZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.json !== void 0) return Q.json(B.json);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(VZ1 || (VZ1 = {}));
var KZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.toolSpec !== void 0) return Q.toolSpec(B.toolSpec);
    if (B.cachePoint !== void 0) return Q.cachePoint(B.cachePoint);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(KZ1 || (KZ1 = {}));
var Mb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.message !== void 0) return Q.message(B.message);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Mb1 || (Mb1 = {}));
var Hr4 = {
    CONTENT_FILTERED: 'content_filtered',
    END_TURN: 'end_turn',
    GUARDRAIL_INTERVENED: 'guardrail_intervened',
    MAX_TOKENS: 'max_tokens',
    STOP_SEQUENCE: 'stop_sequence',
    TOOL_USE: 'tool_use',
  },
  Wq0 = class A extends UY {
    static {
      q1(this, 'ModelErrorException');
    }
    name = 'ModelErrorException';
    $fault = 'client';
    originalStatusCode;
    resourceName;
    constructor(B) {
      super({ name: 'ModelErrorException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.originalStatusCode = B.originalStatusCode),
        (this.resourceName = B.resourceName));
    }
  },
  Fq0 = class A extends UY {
    static {
      q1(this, 'ModelNotReadyException');
    }
    name = 'ModelNotReadyException';
    $fault = 'client';
    $retryable = {};
    constructor(B) {
      super({ name: 'ModelNotReadyException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Jq0 = class A extends UY {
    static {
      q1(this, 'ModelTimeoutException');
    }
    name = 'ModelTimeoutException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ModelTimeoutException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  zr4 = { ASYNC: 'async', SYNC: 'sync' },
  Lb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.redactedContent !== void 0) return Q.redactedContent(B.redactedContent);
    if (B.signature !== void 0) return Q.signature(B.signature);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Lb1 || (Lb1 = {}));
var Rb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.text !== void 0) return Q.text(B.text);
    if (B.toolUse !== void 0) return Q.toolUse(B.toolUse);
    if (B.reasoningContent !== void 0) return Q.reasoningContent(B.reasoningContent);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Rb1 || (Rb1 = {}));
var Ob1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.toolUse !== void 0) return Q.toolUse(B.toolUse);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Ob1 || (Ob1 = {}));
var Cq0 = class A extends UY {
    static {
      q1(this, 'ModelStreamErrorException');
    }
    name = 'ModelStreamErrorException';
    $fault = 'client';
    originalStatusCode;
    originalMessage;
    constructor(B) {
      super({ name: 'ModelStreamErrorException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.originalStatusCode = B.originalStatusCode),
        (this.originalMessage = B.originalMessage));
    }
  },
  Tb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.messageStart !== void 0) return Q.messageStart(B.messageStart);
    if (B.contentBlockStart !== void 0) return Q.contentBlockStart(B.contentBlockStart);
    if (B.contentBlockDelta !== void 0) return Q.contentBlockDelta(B.contentBlockDelta);
    if (B.contentBlockStop !== void 0) return Q.contentBlockStop(B.contentBlockStop);
    if (B.messageStop !== void 0) return Q.messageStop(B.messageStop);
    if (B.metadata !== void 0) return Q.metadata(B.metadata);
    if (B.internalServerException !== void 0)
      return Q.internalServerException(B.internalServerException);
    if (B.modelStreamErrorException !== void 0)
      return Q.modelStreamErrorException(B.modelStreamErrorException);
    if (B.validationException !== void 0) return Q.validationException(B.validationException);
    if (B.throttlingException !== void 0) return Q.throttlingException(B.throttlingException);
    if (B.serviceUnavailableException !== void 0)
      return Q.serviceUnavailableException(B.serviceUnavailableException);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Tb1 || (Tb1 = {}));
var wr4 = { DISABLED: 'DISABLED', ENABLED: 'ENABLED', ENABLED_FULL: 'ENABLED_FULL' },
  HZ1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.chunk !== void 0) return Q.chunk(B.chunk);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(HZ1 || (HZ1 = {}));
var Pb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.chunk !== void 0) return Q.chunk(B.chunk);
    if (B.internalServerException !== void 0)
      return Q.internalServerException(B.internalServerException);
    if (B.modelStreamErrorException !== void 0)
      return Q.modelStreamErrorException(B.modelStreamErrorException);
    if (B.validationException !== void 0) return Q.validationException(B.validationException);
    if (B.throttlingException !== void 0) return Q.throttlingException(B.throttlingException);
    if (B.modelTimeoutException !== void 0) return Q.modelTimeoutException(B.modelTimeoutException);
    if (B.serviceUnavailableException !== void 0)
      return Q.serviceUnavailableException(B.serviceUnavailableException);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Pb1 || (Pb1 = {}));
var Sb1;
((A) => {
  A.visit = q1((B, Q) => {
    if (B.chunk !== void 0) return Q.chunk(B.chunk);
    if (B.internalServerException !== void 0)
      return Q.internalServerException(B.internalServerException);
    if (B.modelStreamErrorException !== void 0)
      return Q.modelStreamErrorException(B.modelStreamErrorException);
    if (B.validationException !== void 0) return Q.validationException(B.validationException);
    if (B.throttlingException !== void 0) return Q.throttlingException(B.throttlingException);
    if (B.modelTimeoutException !== void 0) return Q.modelTimeoutException(B.modelTimeoutException);
    if (B.serviceUnavailableException !== void 0)
      return Q.serviceUnavailableException(B.serviceUnavailableException);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(Sb1 || (Sb1 = {}));
var Xq0 = q1(
    (A) => ({
      ...A,
      ...(A.failureMessage && { failureMessage: h1.SENSITIVE_STRING }),
      ...(A.outputDataConfig && { outputDataConfig: A.outputDataConfig }),
    }),
    'GetAsyncInvokeResponseFilterSensitiveLog'
  ),
  Vq0 = q1(
    (A) => ({
      ...A,
      ...(A.failureMessage && { failureMessage: h1.SENSITIVE_STRING }),
      ...(A.outputDataConfig && { outputDataConfig: A.outputDataConfig }),
    }),
    'AsyncInvokeSummaryFilterSensitiveLog'
  ),
  Kq0 = q1(
    (A) => ({
      ...A,
      ...(A.asyncInvokeSummaries && {
        asyncInvokeSummaries: A.asyncInvokeSummaries.map((B) => Vq0(B)),
      }),
    }),
    'ListAsyncInvokesResponseFilterSensitiveLog'
  ),
  Hq0 = q1(
    (A) => ({
      ...A,
      ...(A.modelInput && { modelInput: h1.SENSITIVE_STRING }),
      ...(A.outputDataConfig && { outputDataConfig: A.outputDataConfig }),
    }),
    'StartAsyncInvokeRequestFilterSensitiveLog'
  ),
  Er4 = q1((A) => {
    if (A.bytes !== void 0) return { bytes: A.bytes };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'GuardrailImageSourceFilterSensitiveLog'),
  Ur4 = q1(
    (A) => ({ ...A, ...(A.source && { source: h1.SENSITIVE_STRING }) }),
    'GuardrailImageBlockFilterSensitiveLog'
  ),
  zq0 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.image !== void 0) return { image: h1.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'GuardrailContentBlockFilterSensitiveLog'),
  wq0 = q1(
    (A) => ({ ...A, ...(A.content && { content: A.content.map((B) => zq0(B)) }) }),
    'ApplyGuardrailRequestFilterSensitiveLog'
  ),
  Nr4 = q1((A) => {
    if (A.bytes !== void 0) return { bytes: A.bytes };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'GuardrailConverseImageSourceFilterSensitiveLog'),
  $r4 = q1(
    (A) => ({ ...A, ...(A.source && { source: h1.SENSITIVE_STRING }) }),
    'GuardrailConverseImageBlockFilterSensitiveLog'
  ),
  yb1 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.image !== void 0) return { image: h1.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'GuardrailConverseContentBlockFilterSensitiveLog'),
  qr4 = q1((A) => ({ ...A }), 'ReasoningTextBlockFilterSensitiveLog'),
  Mr4 = q1((A) => {
    if (A.reasoningText !== void 0) return { reasoningText: h1.SENSITIVE_STRING };
    if (A.redactedContent !== void 0) return { redactedContent: A.redactedContent };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ReasoningContentBlockFilterSensitiveLog'),
  Eq0 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.image !== void 0) return { image: A.image };
    if (A.document !== void 0) return { document: A.document };
    if (A.video !== void 0) return { video: A.video };
    if (A.toolUse !== void 0) return { toolUse: A.toolUse };
    if (A.toolResult !== void 0) return { toolResult: A.toolResult };
    if (A.guardContent !== void 0) return { guardContent: yb1(A.guardContent) };
    if (A.cachePoint !== void 0) return { cachePoint: A.cachePoint };
    if (A.reasoningContent !== void 0) return { reasoningContent: h1.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ContentBlockFilterSensitiveLog'),
  wZ1 = q1(
    (A) => ({ ...A, ...(A.content && { content: A.content.map((B) => Eq0(B)) }) }),
    'MessageFilterSensitiveLog'
  ),
  kb1 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.guardContent !== void 0) return { guardContent: yb1(A.guardContent) };
    if (A.cachePoint !== void 0) return { cachePoint: A.cachePoint };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'SystemContentBlockFilterSensitiveLog'),
  Uq0 = q1(
    (A) => ({
      ...A,
      ...(A.messages && { messages: A.messages.map((B) => wZ1(B)) }),
      ...(A.system && { system: A.system.map((B) => kb1(B)) }),
      ...(A.toolConfig && { toolConfig: A.toolConfig }),
      ...(A.promptVariables && { promptVariables: h1.SENSITIVE_STRING }),
      ...(A.requestMetadata && { requestMetadata: h1.SENSITIVE_STRING }),
    }),
    'ConverseRequestFilterSensitiveLog'
  ),
  Nq0 = q1((A) => {
    if (A.message !== void 0) return { message: wZ1(A.message) };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ConverseOutputFilterSensitiveLog'),
  $q0 = q1(
    (A) => ({ ...A, ...(A.output && { output: Nq0(A.output) }) }),
    'ConverseResponseFilterSensitiveLog'
  ),
  qq0 = q1(
    (A) => ({
      ...A,
      ...(A.messages && { messages: A.messages.map((B) => wZ1(B)) }),
      ...(A.system && { system: A.system.map((B) => kb1(B)) }),
      ...(A.toolConfig && { toolConfig: A.toolConfig }),
      ...(A.promptVariables && { promptVariables: h1.SENSITIVE_STRING }),
      ...(A.requestMetadata && { requestMetadata: h1.SENSITIVE_STRING }),
    }),
    'ConverseStreamRequestFilterSensitiveLog'
  ),
  Lr4 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.redactedContent !== void 0) return { redactedContent: A.redactedContent };
    if (A.signature !== void 0) return { signature: A.signature };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ReasoningContentBlockDeltaFilterSensitiveLog'),
  Mq0 = q1((A) => {
    if (A.text !== void 0) return { text: A.text };
    if (A.toolUse !== void 0) return { toolUse: A.toolUse };
    if (A.reasoningContent !== void 0) return { reasoningContent: h1.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ContentBlockDeltaFilterSensitiveLog'),
  Lq0 = q1(
    (A) => ({ ...A, ...(A.delta && { delta: Mq0(A.delta) }) }),
    'ContentBlockDeltaEventFilterSensitiveLog'
  ),
  Rr4 = q1((A) => {
    if (A.messageStart !== void 0) return { messageStart: A.messageStart };
    if (A.contentBlockStart !== void 0) return { contentBlockStart: A.contentBlockStart };
    if (A.contentBlockDelta !== void 0) return { contentBlockDelta: Lq0(A.contentBlockDelta) };
    if (A.contentBlockStop !== void 0) return { contentBlockStop: A.contentBlockStop };
    if (A.messageStop !== void 0) return { messageStop: A.messageStop };
    if (A.metadata !== void 0) return { metadata: A.metadata };
    if (A.internalServerException !== void 0)
      return { internalServerException: A.internalServerException };
    if (A.modelStreamErrorException !== void 0)
      return { modelStreamErrorException: A.modelStreamErrorException };
    if (A.validationException !== void 0) return { validationException: A.validationException };
    if (A.throttlingException !== void 0) return { throttlingException: A.throttlingException };
    if (A.serviceUnavailableException !== void 0)
      return { serviceUnavailableException: A.serviceUnavailableException };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ConverseStreamOutputFilterSensitiveLog'),
  Rq0 = q1(
    (A) => ({ ...A, ...(A.stream && { stream: 'STREAMING_CONTENT' }) }),
    'ConverseStreamResponseFilterSensitiveLog'
  ),
  Oq0 = q1(
    (A) => ({ ...A, ...(A.body && { body: h1.SENSITIVE_STRING }) }),
    'InvokeModelRequestFilterSensitiveLog'
  ),
  Tq0 = q1(
    (A) => ({ ...A, ...(A.body && { body: h1.SENSITIVE_STRING }) }),
    'InvokeModelResponseFilterSensitiveLog'
  ),
  Or4 = q1(
    (A) => ({ ...A, ...(A.bytes && { bytes: h1.SENSITIVE_STRING }) }),
    'BidirectionalInputPayloadPartFilterSensitiveLog'
  ),
  Tr4 = q1((A) => {
    if (A.chunk !== void 0) return { chunk: h1.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'InvokeModelWithBidirectionalStreamInputFilterSensitiveLog'),
  Pq0 = q1(
    (A) => ({ ...A, ...(A.body && { body: 'STREAMING_CONTENT' }) }),
    'InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog'
  ),
  Pr4 = q1(
    (A) => ({ ...A, ...(A.bytes && { bytes: h1.SENSITIVE_STRING }) }),
    'BidirectionalOutputPayloadPartFilterSensitiveLog'
  ),
  Sr4 = q1((A) => {
    if (A.chunk !== void 0) return { chunk: h1.SENSITIVE_STRING };
    if (A.internalServerException !== void 0)
      return { internalServerException: A.internalServerException };
    if (A.modelStreamErrorException !== void 0)
      return { modelStreamErrorException: A.modelStreamErrorException };
    if (A.validationException !== void 0) return { validationException: A.validationException };
    if (A.throttlingException !== void 0) return { throttlingException: A.throttlingException };
    if (A.modelTimeoutException !== void 0)
      return { modelTimeoutException: A.modelTimeoutException };
    if (A.serviceUnavailableException !== void 0)
      return { serviceUnavailableException: A.serviceUnavailableException };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog'),
  Sq0 = q1(
    (A) => ({ ...A, ...(A.body && { body: 'STREAMING_CONTENT' }) }),
    'InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog'
  ),
  _q0 = q1(
    (A) => ({ ...A, ...(A.body && { body: h1.SENSITIVE_STRING }) }),
    'InvokeModelWithResponseStreamRequestFilterSensitiveLog'
  ),
  _r4 = q1(
    (A) => ({ ...A, ...(A.bytes && { bytes: h1.SENSITIVE_STRING }) }),
    'PayloadPartFilterSensitiveLog'
  ),
  jr4 = q1((A) => {
    if (A.chunk !== void 0) return { chunk: h1.SENSITIVE_STRING };
    if (A.internalServerException !== void 0)
      return { internalServerException: A.internalServerException };
    if (A.modelStreamErrorException !== void 0)
      return { modelStreamErrorException: A.modelStreamErrorException };
    if (A.validationException !== void 0) return { validationException: A.validationException };
    if (A.throttlingException !== void 0) return { throttlingException: A.throttlingException };
    if (A.modelTimeoutException !== void 0)
      return { modelTimeoutException: A.modelTimeoutException };
    if (A.serviceUnavailableException !== void 0)
      return { serviceUnavailableException: A.serviceUnavailableException };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'ResponseStreamFilterSensitiveLog'),
  jq0 = q1(
    (A) => ({ ...A, ...(A.body && { body: 'STREAMING_CONTENT' }) }),
    'InvokeModelWithResponseStreamResponseFilterSensitiveLog'
  ),
  i6 = c8(),
  yr4 = jl(),
  kr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply'),
      Q.p('guardrailIdentifier', () => A.guardrailIdentifier, '{guardrailIdentifier}', !1),
      Q.p('guardrailVersion', () => A.guardrailVersion, '{guardrailVersion}', !1));
    let G;
    return (
      (G = JSON.stringify(
        h1.take(A, { content: q1((D) => qo4(D, B), 'content'), outputScope: [], source: [] })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_ApplyGuardrailCommand'),
  xr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/model/{modelId}/converse'), Q.p('modelId', () => A.modelId, '{modelId}', !1));
    let G;
    return (
      (G = JSON.stringify(
        h1.take(A, {
          additionalModelRequestFields: q1((D) => la(D, B), 'additionalModelRequestFields'),
          additionalModelResponseFieldPaths: q1(
            (D) => h1._json(D),
            'additionalModelResponseFieldPaths'
          ),
          guardrailConfig: q1((D) => h1._json(D), 'guardrailConfig'),
          inferenceConfig: q1((D) => uq0(D, B), 'inferenceConfig'),
          messages: q1((D) => pq0(D, B), 'messages'),
          performanceConfig: q1((D) => h1._json(D), 'performanceConfig'),
          promptVariables: q1((D) => h1._json(D), 'promptVariables'),
          requestMetadata: q1((D) => h1._json(D), 'requestMetadata'),
          system: q1((D) => cq0(D, B), 'system'),
          toolConfig: q1((D) => lq0(D, B), 'toolConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_ConverseCommand'),
  fr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/model/{modelId}/converse-stream'), Q.p('modelId', () => A.modelId, '{modelId}', !1));
    let G;
    return (
      (G = JSON.stringify(
        h1.take(A, {
          additionalModelRequestFields: q1((D) => la(D, B), 'additionalModelRequestFields'),
          additionalModelResponseFieldPaths: q1(
            (D) => h1._json(D),
            'additionalModelResponseFieldPaths'
          ),
          guardrailConfig: q1((D) => h1._json(D), 'guardrailConfig'),
          inferenceConfig: q1((D) => uq0(D, B), 'inferenceConfig'),
          messages: q1((D) => pq0(D, B), 'messages'),
          performanceConfig: q1((D) => h1._json(D), 'performanceConfig'),
          promptVariables: q1((D) => h1._json(D), 'promptVariables'),
          requestMetadata: q1((D) => h1._json(D), 'requestMetadata'),
          system: q1((D) => cq0(D, B), 'system'),
          toolConfig: q1((D) => lq0(D, B), 'toolConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_ConverseStreamCommand'),
  vr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = {};
    (Q.bp('/async-invoke/{invocationArn}'),
      Q.p('invocationArn', () => A.invocationArn, '{invocationArn}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetAsyncInvokeCommand'),
  br4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = h1.map({}, h1.isSerializableHeaderValue, {
        [hb1]: A[UZ1] || 'application/octet-stream',
        [_b1]: A[_b1],
        [GM0]: A[BM0],
        [QM0]: A[eq0],
        [IM0]: A[AM0],
        [$Z1]: A[NZ1],
      });
    (Q.bp('/model/{modelId}/invoke'), Q.p('modelId', () => A.modelId, '{modelId}', !1));
    let G;
    if (A.body !== void 0) G = A.body;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_InvokeModelCommand'),
  gr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/model/{modelId}/invoke-with-bidirectional-stream'),
      Q.p('modelId', () => A.modelId, '{modelId}', !1));
    let G;
    if (A.body !== void 0) G = Go4(A.body, B);
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_InvokeModelWithBidirectionalStreamCommand'),
  hr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = h1.map({}, h1.isSerializableHeaderValue, {
        [hb1]: A[UZ1] || 'application/octet-stream',
        [Et4]: A[_b1],
        [GM0]: A[BM0],
        [QM0]: A[eq0],
        [IM0]: A[AM0],
        [$Z1]: A[NZ1],
      });
    (Q.bp('/model/{modelId}/invoke-with-response-stream'),
      Q.p('modelId', () => A.modelId, '{modelId}', !1));
    let G;
    if (A.body !== void 0) G = A.body;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_InvokeModelWithResponseStreamCommand'),
  mr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = {};
    Q.bp('/async-invoke');
    let G = h1.map({
        [r$0]: [() => A.submitTimeAfter !== void 0, () => h1.serializeDateTime(A[r$0]).toString()],
        [o$0]: [() => A.submitTimeBefore !== void 0, () => h1.serializeDateTime(A[o$0]).toString()],
        [a$0]: [, A[a$0]],
        [l$0]: [() => A.maxResults !== void 0, () => A[l$0].toString()],
        [i$0]: [, A[i$0]],
        [n$0]: [, A[n$0]],
        [s$0]: [, A[s$0]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListAsyncInvokesCommand'),
  dr4 = q1(async (A, B) => {
    let Q = AF.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/async-invoke');
    let G;
    return (
      (G = JSON.stringify(
        h1.take(A, {
          clientRequestToken: [!0, (D) => D ?? yr4.v4()],
          modelId: [],
          modelInput: q1((D) => So4(D, B), 'modelInput'),
          outputDataConfig: q1((D) => h1._json(D), 'outputDataConfig'),
          tags: q1((D) => h1._json(D), 'tags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_StartAsyncInvokeCommand'),
  ur4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = h1.expectNonNull(h1.expectObject(await i6.parseJsonBody(A.body, B)), 'body'),
      G = h1.take(I, {
        action: h1.expectString,
        actionReason: h1.expectString,
        assessments: q1((D) => sq0(D, B), 'assessments'),
        guardrailCoverage: h1._json,
        outputs: h1._json,
        usage: h1._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ApplyGuardrailCommand'),
  pr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = h1.expectNonNull(h1.expectObject(await i6.parseJsonBody(A.body, B)), 'body'),
      G = h1.take(I, {
        additionalModelResponseFields: q1((D) => EZ1(D, B), 'additionalModelResponseFields'),
        metrics: h1._json,
        output: q1((D) => ao4(i6.awsExpectUnion(D), B), 'output'),
        performanceConfig: h1._json,
        stopReason: h1.expectString,
        trace: q1((D) => oo4(D, B), 'trace'),
        usage: h1._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ConverseCommand'),
  cr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = A.body;
    return ((Q.stream = Zo4(I, B)), Q);
  }, 'de_ConverseStreamCommand'),
  lr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = h1.expectNonNull(h1.expectObject(await i6.parseJsonBody(A.body, B)), 'body'),
      G = h1.take(I, {
        clientRequestToken: h1.expectString,
        endTime: q1((D) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(D)), 'endTime'),
        failureMessage: h1.expectString,
        invocationArn: h1.expectString,
        lastModifiedTime: q1(
          (D) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        modelArn: h1.expectString,
        outputDataConfig: q1((D) => h1._json(i6.awsExpectUnion(D)), 'outputDataConfig'),
        status: h1.expectString,
        submitTime: q1((D) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(D)), 'submitTime'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetAsyncInvokeCommand'),
  ir4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A), [UZ1]: [, A.headers[hb1]], [NZ1]: [, A.headers[$Z1]] }),
      I = await h1.collectBody(A.body, B);
    return ((Q.body = I), Q);
  }, 'de_InvokeModelCommand'),
  nr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = A.body;
    return ((Q.body = Yo4(I, B)), Q);
  }, 'de_InvokeModelWithBidirectionalStreamCommand'),
  ar4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A), [UZ1]: [, A.headers[Ut4]], [NZ1]: [, A.headers[$Z1]] }),
      I = A.body;
    return ((Q.body = Wo4(I, B)), Q);
  }, 'de_InvokeModelWithResponseStreamCommand'),
  sr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = h1.expectNonNull(h1.expectObject(await i6.parseJsonBody(A.body, B)), 'body'),
      G = h1.take(I, {
        asyncInvokeSummaries: q1((D) => do4(D, B), 'asyncInvokeSummaries'),
        nextToken: h1.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListAsyncInvokesCommand'),
  rr4 = q1(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return mU(A, B);
    let Q = h1.map({ $metadata: XQ(A) }),
      I = h1.expectNonNull(h1.expectObject(await i6.parseJsonBody(A.body, B)), 'body'),
      G = h1.take(I, { invocationArn: h1.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_StartAsyncInvokeCommand'),
  mU = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonErrorBody(A.body, B) },
      I = i6.loadRestJsonErrorCode(A, Q.body);
    switch (I) {
      case 'AccessDeniedException':
      case 'com.amazonaws.bedrockruntime#AccessDeniedException':
        throw await tr4(Q, B);
      case 'InternalServerException':
      case 'com.amazonaws.bedrockruntime#InternalServerException':
        throw await yq0(Q, B);
      case 'ResourceNotFoundException':
      case 'com.amazonaws.bedrockruntime#ResourceNotFoundException':
        throw await Qo4(Q, B);
      case 'ServiceQuotaExceededException':
      case 'com.amazonaws.bedrockruntime#ServiceQuotaExceededException':
        throw await Io4(Q, B);
      case 'ThrottlingException':
      case 'com.amazonaws.bedrockruntime#ThrottlingException':
        throw await vq0(Q, B);
      case 'ValidationException':
      case 'com.amazonaws.bedrockruntime#ValidationException':
        throw await bq0(Q, B);
      case 'ModelErrorException':
      case 'com.amazonaws.bedrockruntime#ModelErrorException':
        throw await Ao4(Q, B);
      case 'ModelNotReadyException':
      case 'com.amazonaws.bedrockruntime#ModelNotReadyException':
        throw await Bo4(Q, B);
      case 'ModelTimeoutException':
      case 'com.amazonaws.bedrockruntime#ModelTimeoutException':
        throw await xq0(Q, B);
      case 'ServiceUnavailableException':
      case 'com.amazonaws.bedrockruntime#ServiceUnavailableException':
        throw await fq0(Q, B);
      case 'ModelStreamErrorException':
      case 'com.amazonaws.bedrockruntime#ModelStreamErrorException':
        throw await kq0(Q, B);
      case 'ConflictException':
      case 'com.amazonaws.bedrockruntime#ConflictException':
        throw await er4(Q, B);
      default:
        let G = Q.body;
        return or4({ output: A, parsedBody: G, errorCode: I });
    }
  }, 'de_CommandError'),
  or4 = h1.withBaseException(UY),
  tr4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Aq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_AccessDeniedExceptionRes'),
  er4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Gq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ConflictExceptionRes'),
  yq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Bq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_InternalServerExceptionRes'),
  Ao4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, {
        message: h1.expectString,
        originalStatusCode: h1.expectInt32,
        resourceName: h1.expectString,
      });
    Object.assign(Q, G);
    let D = new Wq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ModelErrorExceptionRes'),
  Bo4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Fq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ModelNotReadyExceptionRes'),
  kq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, {
        message: h1.expectString,
        originalMessage: h1.expectString,
        originalStatusCode: h1.expectInt32,
      });
    Object.assign(Q, G);
    let D = new Cq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ModelStreamErrorExceptionRes'),
  xq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Jq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ModelTimeoutExceptionRes'),
  Qo4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Dq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ResourceNotFoundExceptionRes'),
  Io4 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Zq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ServiceQuotaExceededExceptionRes'),
  fq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Yq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ServiceUnavailableExceptionRes'),
  vq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Qq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ThrottlingExceptionRes'),
  bq0 = q1(async (A, B) => {
    let Q = h1.map({}),
      I = A.body,
      G = h1.take(I, { message: h1.expectString });
    Object.assign(Q, G);
    let D = new Iq0({ $metadata: XQ(A), ...Q });
    return h1.decorateServiceException(D, A.body);
  }, 'de_ValidationExceptionRes'),
  Go4 = q1((A, B) => {
    let Q = q1(
      (I) => HZ1.visit(I, { chunk: q1((G) => Do4(G, B), 'chunk'), _: q1((G) => G, '_') }),
      'eventMarshallingVisitor'
    );
    return B.eventStreamMarshaller.serialize(A, Q);
  }, 'se_InvokeModelWithBidirectionalStreamInput'),
  Do4 = q1((A, B) => {
    let Q = {
        ':event-type': { type: 'string', value: 'chunk' },
        ':message-type': { type: 'string', value: 'event' },
        ':content-type': { type: 'string', value: 'application/json' },
      },
      I = new Uint8Array();
    return ((I = wo4(A, B)), (I = B.utf8Decoder(JSON.stringify(I))), { headers: Q, body: I });
  }, 'se_BidirectionalInputPayloadPart_event'),
  Zo4 = q1((A, B) => {
    return B.eventStreamMarshaller.deserialize(A, async (Q) => {
      if (Q.messageStart != null) return { messageStart: await Ko4(Q.messageStart, B) };
      if (Q.contentBlockStart != null)
        return { contentBlockStart: await Co4(Q.contentBlockStart, B) };
      if (Q.contentBlockDelta != null)
        return { contentBlockDelta: await Jo4(Q.contentBlockDelta, B) };
      if (Q.contentBlockStop != null) return { contentBlockStop: await Xo4(Q.contentBlockStop, B) };
      if (Q.messageStop != null) return { messageStop: await Ho4(Q.messageStop, B) };
      if (Q.metadata != null) return { metadata: await Vo4(Q.metadata, B) };
      if (Q.internalServerException != null)
        return { internalServerException: await xb1(Q.internalServerException, B) };
      if (Q.modelStreamErrorException != null)
        return { modelStreamErrorException: await fb1(Q.modelStreamErrorException, B) };
      if (Q.validationException != null)
        return { validationException: await gb1(Q.validationException, B) };
      if (Q.throttlingException != null)
        return { throttlingException: await bb1(Q.throttlingException, B) };
      if (Q.serviceUnavailableException != null)
        return { serviceUnavailableException: await vb1(Q.serviceUnavailableException, B) };
      return { $unknown: A };
    });
  }, 'de_ConverseStreamOutput'),
  Yo4 = q1((A, B) => {
    return B.eventStreamMarshaller.deserialize(A, async (Q) => {
      if (Q.chunk != null) return { chunk: await Fo4(Q.chunk, B) };
      if (Q.internalServerException != null)
        return { internalServerException: await xb1(Q.internalServerException, B) };
      if (Q.modelStreamErrorException != null)
        return { modelStreamErrorException: await fb1(Q.modelStreamErrorException, B) };
      if (Q.validationException != null)
        return { validationException: await gb1(Q.validationException, B) };
      if (Q.throttlingException != null)
        return { throttlingException: await bb1(Q.throttlingException, B) };
      if (Q.modelTimeoutException != null)
        return { modelTimeoutException: await gq0(Q.modelTimeoutException, B) };
      if (Q.serviceUnavailableException != null)
        return { serviceUnavailableException: await vb1(Q.serviceUnavailableException, B) };
      return { $unknown: A };
    });
  }, 'de_InvokeModelWithBidirectionalStreamOutput'),
  Wo4 = q1((A, B) => {
    return B.eventStreamMarshaller.deserialize(A, async (Q) => {
      if (Q.chunk != null) return { chunk: await zo4(Q.chunk, B) };
      if (Q.internalServerException != null)
        return { internalServerException: await xb1(Q.internalServerException, B) };
      if (Q.modelStreamErrorException != null)
        return { modelStreamErrorException: await fb1(Q.modelStreamErrorException, B) };
      if (Q.validationException != null)
        return { validationException: await gb1(Q.validationException, B) };
      if (Q.throttlingException != null)
        return { throttlingException: await bb1(Q.throttlingException, B) };
      if (Q.modelTimeoutException != null)
        return { modelTimeoutException: await gq0(Q.modelTimeoutException, B) };
      if (Q.serviceUnavailableException != null)
        return { serviceUnavailableException: await vb1(Q.serviceUnavailableException, B) };
      return { $unknown: A };
    });
  }, 'de_ResponseStream'),
  Fo4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, po4(I, B)), Q);
  }, 'de_BidirectionalOutputPayloadPart_event'),
  Jo4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, io4(I, B)), Q);
  }, 'de_ContentBlockDeltaEvent_event'),
  Co4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, h1._json(I)), Q);
  }, 'de_ContentBlockStartEvent_event'),
  Xo4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, h1._json(I)), Q);
  }, 'de_ContentBlockStopEvent_event'),
  Vo4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, so4(I, B)), Q);
  }, 'de_ConverseStreamMetadataEvent_event'),
  xb1 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return yq0(Q, B);
  }, 'de_InternalServerException_event'),
  Ko4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, h1._json(I)), Q);
  }, 'de_MessageStartEvent_event'),
  Ho4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, Ft4(I, B)), Q);
  }, 'de_MessageStopEvent_event'),
  fb1 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return kq0(Q, B);
  }, 'de_ModelStreamErrorException_event'),
  gq0 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return xq0(Q, B);
  }, 'de_ModelTimeoutException_event'),
  zo4 = q1(async (A, B) => {
    let Q = {},
      I = await i6.parseJsonBody(A.body, B);
    return (Object.assign(Q, Jt4(I, B)), Q);
  }, 'de_PayloadPart_event'),
  vb1 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return fq0(Q, B);
  }, 'de_ServiceUnavailableException_event'),
  bb1 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return vq0(Q, B);
  }, 'de_ThrottlingException_event'),
  gb1 = q1(async (A, B) => {
    let Q = { ...A, body: await i6.parseJsonBody(A.body, B) };
    return bq0(Q, B);
  }, 'de_ValidationException_event'),
  wo4 = q1((A, B) => {
    return h1.take(A, { bytes: B.base64Encoder });
  }, 'se_BidirectionalInputPayloadPart'),
  Eo4 = q1((A, B) => {
    return CZ1.visit(A, {
      cachePoint: q1((Q) => ({ cachePoint: h1._json(Q) }), 'cachePoint'),
      document: q1((Q) => ({ document: hq0(Q, B) }), 'document'),
      guardContent: q1((Q) => ({ guardContent: mq0(Q, B) }), 'guardContent'),
      image: q1((Q) => ({ image: dq0(Q, B) }), 'image'),
      reasoningContent: q1((Q) => ({ reasoningContent: _o4(Q, B) }), 'reasoningContent'),
      text: q1((Q) => ({ text: Q }), 'text'),
      toolResult: q1((Q) => ({ toolResult: xo4(Q, B) }), 'toolResult'),
      toolUse: q1((Q) => ({ toolUse: ho4(Q, B) }), 'toolUse'),
      video: q1((Q) => ({ video: iq0(Q, B) }), 'video'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_ContentBlock'),
  Uo4 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return Eo4(Q, B);
    });
  }, 'se_ContentBlocks'),
  hq0 = q1((A, B) => {
    return h1.take(A, { format: [], name: [], source: q1((Q) => No4(Q, B), 'source') });
  }, 'se_DocumentBlock'),
  No4 = q1((A, B) => {
    return GZ1.visit(A, {
      bytes: q1((Q) => ({ bytes: B.base64Encoder(Q) }), 'bytes'),
      s3Location: q1((Q) => ({ s3Location: h1._json(Q) }), 's3Location'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_DocumentSource'),
  $o4 = q1((A, B) => {
    return IZ1.visit(A, {
      image: q1((Q) => ({ image: Ro4(Q, B) }), 'image'),
      text: q1((Q) => ({ text: h1._json(Q) }), 'text'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_GuardrailContentBlock'),
  qo4 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return $o4(Q, B);
    });
  }, 'se_GuardrailContentBlockList'),
  mq0 = q1((A, B) => {
    return ZZ1.visit(A, {
      image: q1((Q) => ({ image: Mo4(Q, B) }), 'image'),
      text: q1((Q) => ({ text: h1._json(Q) }), 'text'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_GuardrailConverseContentBlock'),
  Mo4 = q1((A, B) => {
    return h1.take(A, { format: [], source: q1((Q) => Lo4(Q, B), 'source') });
  }, 'se_GuardrailConverseImageBlock'),
  Lo4 = q1((A, B) => {
    return DZ1.visit(A, {
      bytes: q1((Q) => ({ bytes: B.base64Encoder(Q) }), 'bytes'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_GuardrailConverseImageSource'),
  Ro4 = q1((A, B) => {
    return h1.take(A, { format: [], source: q1((Q) => Oo4(Q, B), 'source') });
  }, 'se_GuardrailImageBlock'),
  Oo4 = q1((A, B) => {
    return QZ1.visit(A, {
      bytes: q1((Q) => ({ bytes: B.base64Encoder(Q) }), 'bytes'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_GuardrailImageSource'),
  dq0 = q1((A, B) => {
    return h1.take(A, { format: [], source: q1((Q) => To4(Q, B), 'source') });
  }, 'se_ImageBlock'),
  To4 = q1((A, B) => {
    return YZ1.visit(A, {
      bytes: q1((Q) => ({ bytes: B.base64Encoder(Q) }), 'bytes'),
      s3Location: q1((Q) => ({ s3Location: h1._json(Q) }), 's3Location'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_ImageSource'),
  uq0 = q1((A, B) => {
    return h1.take(A, {
      maxTokens: [],
      stopSequences: h1._json,
      temperature: h1.serializeFloat,
      topP: h1.serializeFloat,
    });
  }, 'se_InferenceConfiguration'),
  Po4 = q1((A, B) => {
    return h1.take(A, { content: q1((Q) => Uo4(Q, B), 'content'), role: [] });
  }, 'se_Message'),
  pq0 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return Po4(Q, B);
    });
  }, 'se_Messages'),
  So4 = q1((A, B) => {
    return A;
  }, 'se_ModelInputPayload'),
  _o4 = q1((A, B) => {
    return WZ1.visit(A, {
      reasoningText: q1((Q) => ({ reasoningText: h1._json(Q) }), 'reasoningText'),
      redactedContent: q1((Q) => ({ redactedContent: B.base64Encoder(Q) }), 'redactedContent'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_ReasoningContentBlock'),
  jo4 = q1((A, B) => {
    return XZ1.visit(A, {
      cachePoint: q1((Q) => ({ cachePoint: h1._json(Q) }), 'cachePoint'),
      guardContent: q1((Q) => ({ guardContent: mq0(Q, B) }), 'guardContent'),
      text: q1((Q) => ({ text: Q }), 'text'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_SystemContentBlock'),
  cq0 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return jo4(Q, B);
    });
  }, 'se_SystemContentBlocks'),
  yo4 = q1((A, B) => {
    return KZ1.visit(A, {
      cachePoint: q1((Q) => ({ cachePoint: h1._json(Q) }), 'cachePoint'),
      toolSpec: q1((Q) => ({ toolSpec: go4(Q, B) }), 'toolSpec'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_Tool'),
  lq0 = q1((A, B) => {
    return h1.take(A, { toolChoice: h1._json, tools: q1((Q) => bo4(Q, B), 'tools') });
  }, 'se_ToolConfiguration'),
  ko4 = q1((A, B) => {
    return VZ1.visit(A, {
      json: q1((Q) => ({ json: la(Q, B) }), 'json'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_ToolInputSchema'),
  xo4 = q1((A, B) => {
    return h1.take(A, { content: q1((Q) => vo4(Q, B), 'content'), status: [], toolUseId: [] });
  }, 'se_ToolResultBlock'),
  fo4 = q1((A, B) => {
    return JZ1.visit(A, {
      document: q1((Q) => ({ document: hq0(Q, B) }), 'document'),
      image: q1((Q) => ({ image: dq0(Q, B) }), 'image'),
      json: q1((Q) => ({ json: la(Q, B) }), 'json'),
      text: q1((Q) => ({ text: Q }), 'text'),
      video: q1((Q) => ({ video: iq0(Q, B) }), 'video'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_ToolResultContentBlock'),
  vo4 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return fo4(Q, B);
    });
  }, 'se_ToolResultContentBlocks'),
  bo4 = q1((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return yo4(Q, B);
    });
  }, 'se_Tools'),
  go4 = q1((A, B) => {
    return h1.take(A, {
      description: [],
      inputSchema: q1((Q) => ko4(Q, B), 'inputSchema'),
      name: [],
    });
  }, 'se_ToolSpecification'),
  ho4 = q1((A, B) => {
    return h1.take(A, { input: q1((Q) => la(Q, B), 'input'), name: [], toolUseId: [] });
  }, 'se_ToolUseBlock'),
  iq0 = q1((A, B) => {
    return h1.take(A, { format: [], source: q1((Q) => mo4(Q, B), 'source') });
  }, 'se_VideoBlock'),
  mo4 = q1((A, B) => {
    return FZ1.visit(A, {
      bytes: q1((Q) => ({ bytes: B.base64Encoder(Q) }), 'bytes'),
      s3Location: q1((Q) => ({ s3Location: h1._json(Q) }), 's3Location'),
      _: q1((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_VideoSource'),
  la = q1((A, B) => {
    return A;
  }, 'se_Document'),
  do4 = q1((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return uo4(I, B);
      });
  }, 'de_AsyncInvokeSummaries'),
  uo4 = q1((A, B) => {
    return h1.take(A, {
      clientRequestToken: h1.expectString,
      endTime: q1((Q) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(Q)), 'endTime'),
      failureMessage: h1.expectString,
      invocationArn: h1.expectString,
      lastModifiedTime: q1(
        (Q) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(Q)),
        'lastModifiedTime'
      ),
      modelArn: h1.expectString,
      outputDataConfig: q1((Q) => h1._json(i6.awsExpectUnion(Q)), 'outputDataConfig'),
      status: h1.expectString,
      submitTime: q1((Q) => h1.expectNonNull(h1.parseRfc3339DateTimeWithOffset(Q)), 'submitTime'),
    });
  }, 'de_AsyncInvokeSummary'),
  po4 = q1((A, B) => {
    return h1.take(A, { bytes: B.base64Decoder });
  }, 'de_BidirectionalOutputPayloadPart'),
  co4 = q1((A, B) => {
    if (A.cachePoint != null) return { cachePoint: h1._json(A.cachePoint) };
    if (A.document != null) return { document: nq0(A.document, B) };
    if (A.guardContent != null) return { guardContent: Gt4(i6.awsExpectUnion(A.guardContent), B) };
    if (A.image != null) return { image: oq0(A.image, B) };
    if (A.reasoningContent != null)
      return { reasoningContent: Ct4(i6.awsExpectUnion(A.reasoningContent), B) };
    if (h1.expectString(A.text) !== void 0) return { text: h1.expectString(A.text) };
    if (A.toolResult != null) return { toolResult: Vt4(A.toolResult, B) };
    if (A.toolUse != null) return { toolUse: zt4(A.toolUse, B) };
    if (A.video != null) return { video: tq0(A.video, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ContentBlock'),
  lo4 = q1((A, B) => {
    if (A.reasoningContent != null)
      return { reasoningContent: Xt4(i6.awsExpectUnion(A.reasoningContent), B) };
    if (h1.expectString(A.text) !== void 0) return { text: h1.expectString(A.text) };
    if (A.toolUse != null) return { toolUse: h1._json(A.toolUse) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ContentBlockDelta'),
  io4 = q1((A, B) => {
    return h1.take(A, {
      contentBlockIndex: h1.expectInt32,
      delta: q1((Q) => lo4(i6.awsExpectUnion(Q), B), 'delta'),
    });
  }, 'de_ContentBlockDeltaEvent'),
  no4 = q1((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return co4(i6.awsExpectUnion(I), B);
      });
  }, 'de_ContentBlocks'),
  ao4 = q1((A, B) => {
    if (A.message != null) return { message: Wt4(A.message, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ConverseOutput'),
  so4 = q1((A, B) => {
    return h1.take(A, {
      metrics: h1._json,
      performanceConfig: h1._json,
      trace: q1((Q) => ro4(Q, B), 'trace'),
      usage: h1._json,
    });
  }, 'de_ConverseStreamMetadataEvent'),
  ro4 = q1((A, B) => {
    return h1.take(A, { guardrail: q1((Q) => rq0(Q, B), 'guardrail'), promptRouter: h1._json });
  }, 'de_ConverseStreamTrace'),
  oo4 = q1((A, B) => {
    return h1.take(A, { guardrail: q1((Q) => rq0(Q, B), 'guardrail'), promptRouter: h1._json });
  }, 'de_ConverseTrace'),
  nq0 = q1((A, B) => {
    return h1.take(A, {
      format: h1.expectString,
      name: h1.expectString,
      source: q1((Q) => to4(i6.awsExpectUnion(Q), B), 'source'),
    });
  }, 'de_DocumentBlock'),
  to4 = q1((A, B) => {
    if (A.bytes != null) return { bytes: B.base64Decoder(A.bytes) };
    if (A.s3Location != null) return { s3Location: h1._json(A.s3Location) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_DocumentSource'),
  aq0 = q1((A, B) => {
    return h1.take(A, {
      contentPolicy: h1._json,
      contextualGroundingPolicy: q1((Q) => It4(Q, B), 'contextualGroundingPolicy'),
      invocationMetrics: h1._json,
      sensitiveInformationPolicy: h1._json,
      topicPolicy: h1._json,
      wordPolicy: h1._json,
    });
  }, 'de_GuardrailAssessment'),
  sq0 = q1((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return aq0(I, B);
      });
  }, 'de_GuardrailAssessmentList'),
  eo4 = q1((A, B) => {
    return Object.entries(A).reduce((Q, [I, G]) => {
      if (G === null) return Q;
      return ((Q[I] = sq0(G, B)), Q);
    }, {});
  }, 'de_GuardrailAssessmentListMap'),
  At4 = q1((A, B) => {
    return Object.entries(A).reduce((Q, [I, G]) => {
      if (G === null) return Q;
      return ((Q[I] = aq0(G, B)), Q);
    }, {});
  }, 'de_GuardrailAssessmentMap'),
  Bt4 = q1((A, B) => {
    return h1.take(A, {
      action: h1.expectString,
      detected: h1.expectBoolean,
      score: h1.limitedParseDouble,
      threshold: h1.limitedParseDouble,
      type: h1.expectString,
    });
  }, 'de_GuardrailContextualGroundingFilter'),
  Qt4 = q1((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Bt4(I, B);
      });
  }, 'de_GuardrailContextualGroundingFilters'),
  It4 = q1((A, B) => {
    return h1.take(A, { filters: q1((Q) => Qt4(Q, B), 'filters') });
  }, 'de_GuardrailContextualGroundingPolicyAssessment'),
  Gt4 = q1((A, B) => {
    if (A.image != null) return { image: Dt4(A.image, B) };
    if (A.text != null) return { text: h1._json(A.text) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_GuardrailConverseContentBlock'),
  Dt4 = q1((A, B) => {
    return h1.take(A, {
      format: h1.expectString,
      source: q1((Q) => Zt4(i6.awsExpectUnion(Q), B), 'source'),
    });
  }, 'de_GuardrailConverseImageBlock'),
  Zt4 = q1((A, B) => {
    if (A.bytes != null) return { bytes: B.base64Decoder(A.bytes) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_GuardrailConverseImageSource'),
  rq0 = q1((A, B) => {
    return h1.take(A, {
      actionReason: h1.expectString,
      inputAssessment: q1((Q) => At4(Q, B), 'inputAssessment'),
      modelOutput: h1._json,
      outputAssessments: q1((Q) => eo4(Q, B), 'outputAssessments'),
    });
  }, 'de_GuardrailTraceAssessment'),
  oq0 = q1((A, B) => {
    return h1.take(A, {
      format: h1.expectString,
      source: q1((Q) => Yt4(i6.awsExpectUnion(Q), B), 'source'),
    });
  }, 'de_ImageBlock'),
  Yt4 = q1((A, B) => {
    if (A.bytes != null) return { bytes: B.base64Decoder(A.bytes) };
    if (A.s3Location != null) return { s3Location: h1._json(A.s3Location) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ImageSource'),
  Wt4 = q1((A, B) => {
    return h1.take(A, { content: q1((Q) => no4(Q, B), 'content'), role: h1.expectString });
  }, 'de_Message'),
  Ft4 = q1((A, B) => {
    return h1.take(A, {
      additionalModelResponseFields: q1((Q) => EZ1(Q, B), 'additionalModelResponseFields'),
      stopReason: h1.expectString,
    });
  }, 'de_MessageStopEvent'),
  Jt4 = q1((A, B) => {
    return h1.take(A, { bytes: B.base64Decoder });
  }, 'de_PayloadPart'),
  Ct4 = q1((A, B) => {
    if (A.reasoningText != null) return { reasoningText: h1._json(A.reasoningText) };
    if (A.redactedContent != null) return { redactedContent: B.base64Decoder(A.redactedContent) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ReasoningContentBlock'),
  Xt4 = q1((A, B) => {
    if (A.redactedContent != null) return { redactedContent: B.base64Decoder(A.redactedContent) };
    if (h1.expectString(A.signature) !== void 0) return { signature: h1.expectString(A.signature) };
    if (h1.expectString(A.text) !== void 0) return { text: h1.expectString(A.text) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ReasoningContentBlockDelta'),
  Vt4 = q1((A, B) => {
    return h1.take(A, {
      content: q1((Q) => Ht4(Q, B), 'content'),
      status: h1.expectString,
      toolUseId: h1.expectString,
    });
  }, 'de_ToolResultBlock'),
  Kt4 = q1((A, B) => {
    if (A.document != null) return { document: nq0(A.document, B) };
    if (A.image != null) return { image: oq0(A.image, B) };
    if (A.json != null) return { json: EZ1(A.json, B) };
    if (h1.expectString(A.text) !== void 0) return { text: h1.expectString(A.text) };
    if (A.video != null) return { video: tq0(A.video, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_ToolResultContentBlock'),
  Ht4 = q1((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Kt4(i6.awsExpectUnion(I), B);
      });
  }, 'de_ToolResultContentBlocks'),
  zt4 = q1((A, B) => {
    return h1.take(A, {
      input: q1((Q) => EZ1(Q, B), 'input'),
      name: h1.expectString,
      toolUseId: h1.expectString,
    });
  }, 'de_ToolUseBlock'),
  tq0 = q1((A, B) => {
    return h1.take(A, {
      format: h1.expectString,
      source: q1((Q) => wt4(i6.awsExpectUnion(Q), B), 'source'),
    });
  }, 'de_VideoBlock'),
  wt4 = q1((A, B) => {
    if (A.bytes != null) return { bytes: B.base64Decoder(A.bytes) };
    if (A.s3Location != null) return { s3Location: h1._json(A.s3Location) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_VideoSource'),
  EZ1 = q1((A, B) => {
    return A;
  }, 'de_Document'),
  XQ = q1(
    (A) => ({
      httpStatusCode: A.statusCode,
      requestId:
        A.headers['x-amzn-requestid'] ??
        A.headers['x-amzn-request-id'] ??
        A.headers['x-amz-request-id'],
      extendedRequestId: A.headers['x-amz-id-2'],
      cfId: A.headers['x-amz-cf-id'],
    }),
    'deserializeMetadata'
  ),
  _b1 = 'accept',
  UZ1 = 'contentType',
  hb1 = 'content-type',
  eq0 = 'guardrailIdentifier',
  AM0 = 'guardrailVersion',
  l$0 = 'maxResults',
  i$0 = 'nextToken',
  NZ1 = 'performanceConfigLatency',
  n$0 = 'sortBy',
  a$0 = 'statusEquals',
  s$0 = 'sortOrder',
  r$0 = 'submitTimeAfter',
  o$0 = 'submitTimeBefore',
  BM0 = 'trace',
  Et4 = 'x-amzn-bedrock-accept',
  Ut4 = 'x-amzn-bedrock-content-type',
  QM0 = 'x-amzn-bedrock-guardrailidentifier',
  IM0 = 'x-amzn-bedrock-guardrailversion',
  $Z1 = 'x-amzn-bedrock-performanceconfig-latency',
  GM0 = 'x-amzn-bedrock-trace',
  DM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'ApplyGuardrail', {})
    .n('BedrockRuntimeClient', 'ApplyGuardrailCommand')
    .f(wq0, void 0)
    .ser(kr4)
    .de(ur4)
    .build() {
    static {
      q1(this, 'ApplyGuardrailCommand');
    }
  },
  ZM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'Converse', {})
    .n('BedrockRuntimeClient', 'ConverseCommand')
    .f(Uq0, $q0)
    .ser(xr4)
    .de(pr4)
    .build() {
    static {
      q1(this, 'ConverseCommand');
    }
  },
  YM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'ConverseStream', { eventStream: { output: !0 } })
    .n('BedrockRuntimeClient', 'ConverseStreamCommand')
    .f(qq0, Rq0)
    .ser(fr4)
    .de(cr4)
    .build() {
    static {
      q1(this, 'ConverseStreamCommand');
    }
  },
  WM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'GetAsyncInvoke', {})
    .n('BedrockRuntimeClient', 'GetAsyncInvokeCommand')
    .f(void 0, Xq0)
    .ser(vr4)
    .de(lr4)
    .build() {
    static {
      q1(this, 'GetAsyncInvokeCommand');
    }
  },
  FM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'InvokeModel', {})
    .n('BedrockRuntimeClient', 'InvokeModelCommand')
    .f(Oq0, Tq0)
    .ser(br4)
    .de(ir4)
    .build() {
    static {
      q1(this, 'InvokeModelCommand');
    }
  },
  JM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
        e$0.getEventStreamPlugin(Q),
      ];
    })
    .s('AmazonBedrockFrontendService', 'InvokeModelWithBidirectionalStream', {
      eventStream: { input: !0, output: !0 },
    })
    .n('BedrockRuntimeClient', 'InvokeModelWithBidirectionalStreamCommand')
    .f(Pq0, Sq0)
    .ser(gr4)
    .de(nr4)
    .build() {
    static {
      q1(this, 'InvokeModelWithBidirectionalStreamCommand');
    }
  },
  CM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'InvokeModelWithResponseStream', {
      eventStream: { output: !0 },
    })
    .n('BedrockRuntimeClient', 'InvokeModelWithResponseStreamCommand')
    .f(_q0, jq0)
    .ser(hr4)
    .de(ar4)
    .build() {
    static {
      q1(this, 'InvokeModelWithResponseStreamCommand');
    }
  },
  mb1 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'ListAsyncInvokes', {})
    .n('BedrockRuntimeClient', 'ListAsyncInvokesCommand')
    .f(void 0, Kq0)
    .ser(mr4)
    .de(sr4)
    .build() {
    static {
      q1(this, 'ListAsyncInvokesCommand');
    }
  },
  XM0 = class extends h1.Command.classBuilder()
    .ep(gU)
    .m(function (A, B, Q, I) {
      return [
        hU.getSerdePlugin(Q, this.serialize, this.deserialize),
        $z.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockFrontendService', 'StartAsyncInvoke', {})
    .n('BedrockRuntimeClient', 'StartAsyncInvokeCommand')
    .f(Hq0, void 0)
    .ser(dr4)
    .de(rr4)
    .build() {
    static {
      q1(this, 'StartAsyncInvokeCommand');
    }
  },
  Nt4 = {
    ApplyGuardrailCommand: DM0,
    ConverseCommand: ZM0,
    ConverseStreamCommand: YM0,
    GetAsyncInvokeCommand: WM0,
    InvokeModelCommand: FM0,
    InvokeModelWithBidirectionalStreamCommand: JM0,
    InvokeModelWithResponseStreamCommand: CM0,
    ListAsyncInvokesCommand: mb1,
    StartAsyncInvokeCommand: XM0,
  },
  VM0 = class extends jb1 {
    static {
      q1(this, 'BedrockRuntime');
    }
  };
h1.createAggregatedClient(Nt4, VM0);
var $t4 = AF.createPaginator(jb1, mb1, 'nextToken', 'nextToken', 'maxResults');

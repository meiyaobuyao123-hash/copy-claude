// Module: F40
// Params: dc5,W40

var { defineProperty: L31, getOwnPropertyDescriptor: QV4, getOwnPropertyNames: IV4 } = Object,
  GV4 = Object.prototype.hasOwnProperty,
  d = (A, B) => L31(A, 'name', { value: B, configurable: !0 }),
  DV4 = (A, B) => {
    for (var Q in B) L31(A, Q, { get: B[Q], enumerable: !0 });
  },
  ZV4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of IV4(B))
        if (!GV4.call(A, G) && G !== Q)
          L31(A, G, { get: () => B[G], enumerable: !(I = QV4(B, G)) || I.enumerable });
    }
    return A;
  },
  YV4 = (A) => ZV4(L31({}, '__esModule', { value: !0 }), A),
  v00 = {};
DV4(v00, {
  AccessDeniedException: () => b00,
  ApplicationType: () => UV4,
  AutomatedEvaluationConfigFilterSensitiveLog: () => e00,
  AutomatedEvaluationCustomMetricConfigFilterSensitiveLog: () => o00,
  AutomatedEvaluationCustomMetricSource: () => w31,
  AutomatedEvaluationCustomMetricSourceFilterSensitiveLog: () => r00,
  BatchDeleteEvaluationJobCommand: () => K90,
  BatchDeleteEvaluationJobErrorFilterSensitiveLog: () => n00,
  BatchDeleteEvaluationJobItemFilterSensitiveLog: () => a00,
  BatchDeleteEvaluationJobRequestFilterSensitiveLog: () => i00,
  BatchDeleteEvaluationJobResponseFilterSensitiveLog: () => s00,
  Bedrock: () => Y40,
  BedrockClient: () => VY,
  BedrockServiceException: () => nX,
  ByteContentDocFilterSensitiveLog: () => Z20,
  CommitmentDuration: () => QK4,
  ConflictException: () => g00,
  CreateEvaluationJobCommand: () => H90,
  CreateEvaluationJobRequestFilterSensitiveLog: () => A90,
  CreateGuardrailCommand: () => z90,
  CreateGuardrailRequestFilterSensitiveLog: () => w20,
  CreateGuardrailVersionCommand: () => w90,
  CreateGuardrailVersionRequestFilterSensitiveLog: () => E20,
  CreateInferenceProfileCommand: () => E90,
  CreateInferenceProfileRequestFilterSensitiveLog: () => y20,
  CreateMarketplaceModelEndpointCommand: () => U90,
  CreateModelCopyJobCommand: () => N90,
  CreateModelCustomizationJobCommand: () => $90,
  CreateModelCustomizationJobRequestFilterSensitiveLog: () => i20,
  CreateModelImportJobCommand: () => q90,
  CreateModelInvocationJobCommand: () => M90,
  CreatePromptRouterCommand: () => L90,
  CreatePromptRouterRequestFilterSensitiveLog: () => u20,
  CreateProvisionedModelThroughputCommand: () => R90,
  CustomMetricDefinitionFilterSensitiveLog: () => YK4,
  CustomizationConfig: () => i_1,
  CustomizationType: () => sV4,
  DeleteCustomModelCommand: () => O90,
  DeleteGuardrailCommand: () => T90,
  DeleteImportedModelCommand: () => P90,
  DeleteInferenceProfileCommand: () => S90,
  DeleteMarketplaceModelEndpointCommand: () => _90,
  DeleteModelInvocationLoggingConfigurationCommand: () => j90,
  DeletePromptRouterCommand: () => y90,
  DeleteProvisionedModelThroughputCommand: () => k90,
  DeregisterMarketplaceModelEndpointCommand: () => x90,
  EndpointConfig: () => b_1,
  EvaluationBedrockModelFilterSensitiveLog: () => I20,
  EvaluationConfig: () => E31,
  EvaluationConfigFilterSensitiveLog: () => t_1,
  EvaluationDatasetFilterSensitiveLog: () => t00,
  EvaluationDatasetLocation: () => g_1,
  EvaluationDatasetMetricConfigFilterSensitiveLog: () => o_1,
  EvaluationInferenceConfig: () => q31,
  EvaluationInferenceConfigFilterSensitiveLog: () => Dj1,
  EvaluationJobStatus: () => EV4,
  EvaluationJobType: () => OV4,
  EvaluationModelConfig: () => m_1,
  EvaluationModelConfigFilterSensitiveLog: () => G20,
  EvaluationPrecomputedRagSourceConfig: () => d_1,
  EvaluationTaskType: () => NV4,
  EvaluatorModelConfig: () => h_1,
  ExternalSourceFilterSensitiveLog: () => Y20,
  ExternalSourceType: () => qV4,
  ExternalSourcesGenerationConfigurationFilterSensitiveLog: () => D20,
  ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog: () => W20,
  FineTuningJobStatus: () => ZK4,
  FoundationModelLifecycleStatus: () => eV4,
  GenerationConfigurationFilterSensitiveLog: () => F20,
  GetCustomModelCommand: () => f90,
  GetCustomModelResponseFilterSensitiveLog: () => d20,
  GetEvaluationJobCommand: () => v90,
  GetEvaluationJobRequestFilterSensitiveLog: () => J20,
  GetEvaluationJobResponseFilterSensitiveLog: () => B90,
  GetFoundationModelCommand: () => b90,
  GetGuardrailCommand: () => g90,
  GetGuardrailResponseFilterSensitiveLog: () => P20,
  GetImportedModelCommand: () => h90,
  GetInferenceProfileCommand: () => m90,
  GetInferenceProfileResponseFilterSensitiveLog: () => k20,
  GetMarketplaceModelEndpointCommand: () => d90,
  GetModelCopyJobCommand: () => u90,
  GetModelCustomizationJobCommand: () => p90,
  GetModelCustomizationJobResponseFilterSensitiveLog: () => n20,
  GetModelImportJobCommand: () => c90,
  GetModelInvocationJobCommand: () => l90,
  GetModelInvocationJobResponseFilterSensitiveLog: () => v20,
  GetModelInvocationLoggingConfigurationCommand: () => i90,
  GetPromptRouterCommand: () => n90,
  GetPromptRouterResponseFilterSensitiveLog: () => p20,
  GetProvisionedModelThroughputCommand: () => a90,
  GuardrailContentFilterAction: () => SV4,
  GuardrailContentFilterConfigFilterSensitiveLog: () => X20,
  GuardrailContentFilterFilterSensitiveLog: () => U20,
  GuardrailContentFilterType: () => yV4,
  GuardrailContentPolicyConfigFilterSensitiveLog: () => Aj1,
  GuardrailContentPolicyFilterSensitiveLog: () => N20,
  GuardrailContextualGroundingAction: () => kV4,
  GuardrailContextualGroundingFilterConfigFilterSensitiveLog: () => V20,
  GuardrailContextualGroundingFilterFilterSensitiveLog: () => $20,
  GuardrailContextualGroundingFilterType: () => xV4,
  GuardrailContextualGroundingPolicyConfigFilterSensitiveLog: () => Bj1,
  GuardrailContextualGroundingPolicyFilterSensitiveLog: () => q20,
  GuardrailFilterStrength: () => jV4,
  GuardrailManagedWordsConfigFilterSensitiveLog: () => H20,
  GuardrailManagedWordsFilterSensitiveLog: () => R20,
  GuardrailManagedWordsType: () => mV4,
  GuardrailModality: () => _V4,
  GuardrailPiiEntityType: () => vV4,
  GuardrailSensitiveInformationAction: () => fV4,
  GuardrailStatus: () => dV4,
  GuardrailSummaryFilterSensitiveLog: () => S20,
  GuardrailTopicAction: () => bV4,
  GuardrailTopicConfigFilterSensitiveLog: () => K20,
  GuardrailTopicFilterSensitiveLog: () => M20,
  GuardrailTopicPolicyConfigFilterSensitiveLog: () => Qj1,
  GuardrailTopicPolicyFilterSensitiveLog: () => L20,
  GuardrailTopicType: () => gV4,
  GuardrailWordAction: () => hV4,
  GuardrailWordConfigFilterSensitiveLog: () => z20,
  GuardrailWordFilterSensitiveLog: () => O20,
  GuardrailWordPolicyConfigFilterSensitiveLog: () => Ij1,
  GuardrailWordPolicyFilterSensitiveLog: () => T20,
  HumanEvaluationConfigFilterSensitiveLog: () => Q20,
  HumanEvaluationCustomMetricFilterSensitiveLog: () => A20,
  HumanWorkflowConfigFilterSensitiveLog: () => B20,
  InferenceProfileModelSource: () => u_1,
  InferenceProfileStatus: () => uV4,
  InferenceProfileSummaryFilterSensitiveLog: () => x20,
  InferenceProfileType: () => pV4,
  InferenceType: () => oV4,
  InternalServerException: () => h00,
  InvocationLogSource: () => n_1,
  InvocationLogsConfigFilterSensitiveLog: () => m20,
  KnowledgeBaseConfig: () => N31,
  KnowledgeBaseConfigFilterSensitiveLog: () => t20,
  KnowledgeBaseRetrievalConfigurationFilterSensitiveLog: () => Gj1,
  KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog: () => s20,
  KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog: () => a20,
  ListCustomModelsCommand: () => Zj1,
  ListEvaluationJobsCommand: () => Yj1,
  ListFoundationModelsCommand: () => s90,
  ListGuardrailsCommand: () => Wj1,
  ListGuardrailsResponseFilterSensitiveLog: () => _20,
  ListImportedModelsCommand: () => Fj1,
  ListInferenceProfilesCommand: () => Jj1,
  ListInferenceProfilesResponseFilterSensitiveLog: () => f20,
  ListMarketplaceModelEndpointsCommand: () => Cj1,
  ListModelCopyJobsCommand: () => Xj1,
  ListModelCustomizationJobsCommand: () => Vj1,
  ListModelImportJobsCommand: () => Kj1,
  ListModelInvocationJobsCommand: () => Hj1,
  ListModelInvocationJobsResponseFilterSensitiveLog: () => g20,
  ListPromptRoutersCommand: () => zj1,
  ListPromptRoutersResponseFilterSensitiveLog: () => l20,
  ListProvisionedModelThroughputsCommand: () => wj1,
  ListTagsForResourceCommand: () => r90,
  ModelCopyJobStatus: () => cV4,
  ModelCustomization: () => rV4,
  ModelCustomizationJobStatus: () => DK4,
  ModelDataSource: () => p_1,
  ModelImportJobStatus: () => lV4,
  ModelInvocationJobInputDataConfig: () => c_1,
  ModelInvocationJobOutputDataConfig: () => l_1,
  ModelInvocationJobStatus: () => aV4,
  ModelInvocationJobSummaryFilterSensitiveLog: () => b20,
  ModelModality: () => tV4,
  PerformanceConfigLatency: () => $V4,
  PromptRouterStatus: () => AK4,
  PromptRouterSummaryFilterSensitiveLog: () => c20,
  PromptRouterType: () => BK4,
  PromptTemplateFilterSensitiveLog: () => e_1,
  ProvisionedModelStatus: () => IK4,
  PutModelInvocationLoggingConfigurationCommand: () => o90,
  QueryTransformationType: () => MV4,
  RAGConfig: () => $31,
  RAGConfigFilterSensitiveLog: () => e20,
  RatingScaleItemValue: () => z31,
  RegisterMarketplaceModelEndpointCommand: () => t90,
  RequestMetadataBaseFiltersFilterSensitiveLog: () => s_1,
  RequestMetadataFilters: () => a_1,
  RequestMetadataFiltersFilterSensitiveLog: () => h20,
  ResourceNotFoundException: () => m00,
  RetrievalFilter: () => U31,
  RetrievalFilterFilterSensitiveLog: () => WK4,
  RetrieveAndGenerateConfigurationFilterSensitiveLog: () => o20,
  RetrieveAndGenerateType: () => RV4,
  RetrieveConfigFilterSensitiveLog: () => r20,
  S3InputFormat: () => nV4,
  SearchType: () => LV4,
  ServiceQuotaExceededException: () => d00,
  ServiceUnavailableException: () => c00,
  SortByProvisionedModels: () => GK4,
  SortJobsBy: () => TV4,
  SortModelsBy: () => iV4,
  SortOrder: () => PV4,
  Status: () => wV4,
  StopEvaluationJobCommand: () => e90,
  StopEvaluationJobRequestFilterSensitiveLog: () => C20,
  StopModelCustomizationJobCommand: () => A40,
  StopModelInvocationJobCommand: () => B40,
  TagResourceCommand: () => Q40,
  ThrottlingException: () => u00,
  TooManyTagsException: () => l00,
  TrainingDataConfigFilterSensitiveLog: () => R31,
  UntagResourceCommand: () => I40,
  UpdateGuardrailCommand: () => G40,
  UpdateGuardrailRequestFilterSensitiveLog: () => j20,
  UpdateMarketplaceModelEndpointCommand: () => D40,
  UpdateProvisionedModelThroughputCommand: () => Z40,
  ValidationException: () => p00,
  __Client: () => _.Client,
  paginateListCustomModels: () => JE4,
  paginateListEvaluationJobs: () => CE4,
  paginateListGuardrails: () => XE4,
  paginateListImportedModels: () => VE4,
  paginateListInferenceProfiles: () => KE4,
  paginateListMarketplaceModelEndpoints: () => HE4,
  paginateListModelCopyJobs: () => zE4,
  paginateListModelCustomizationJobs: () => wE4,
  paginateListModelImportJobs: () => EE4,
  paginateListModelInvocationJobs: () => UE4,
  paginateListPromptRouters: () => NE4,
  paginateListProvisionedModelThroughputs: () => $E4,
});
W40.exports = YV4(v00);
var K00 = WP(),
  WV4 = FP(),
  FV4 = JP(),
  H00 = FM(),
  JV4 = QZ(),
  W2 = o7(),
  CV4 = zP(),
  A9 = mH(),
  z00 = gW(),
  w00 = QP1(),
  XV4 = d((A) => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      defaultSigningName: 'bedrock',
    });
  }, 'resolveClientEndpointParameters'),
  D9 = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  VV4 = Y00(),
  E00 = OP(),
  U00 = V00(),
  _ = Hi(),
  KV4 = d((A) => {
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
  HV4 = d((A) => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials(),
    };
  }, 'resolveHttpAuthRuntimeConfig'),
  zV4 = d((A, B) => {
    let Q = Object.assign(
      E00.getAwsRegionExtensionConfiguration(A),
      _.getDefaultExtensionConfiguration(A),
      U00.getHttpHandlerExtensionConfiguration(A),
      KV4(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        E00.resolveAwsRegionExtensionConfiguration(Q),
        _.resolveDefaultRuntimeConfig(Q),
        U00.resolveHttpHandlerRuntimeConfig(Q),
        HV4(Q)
      )
    );
  }, 'resolveRuntimeExtensions'),
  VY = class extends _.Client {
    static {
      d(this, 'BedrockClient');
    }
    config;
    constructor(...[A]) {
      let B = VV4.getRuntimeConfig(A || {});
      super(B);
      this.initConfig = B;
      let Q = XV4(B),
        I = H00.resolveUserAgentConfig(Q),
        G = z00.resolveRetryConfig(I),
        D = JV4.resolveRegionConfig(G),
        Z = K00.resolveHostHeaderConfig(D),
        Y = A9.resolveEndpointConfig(Z),
        W = w00.resolveHttpAuthSchemeConfig(Y),
        F = zV4(W, A?.extensions || []);
      ((this.config = F),
        this.middlewareStack.use(H00.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(z00.getRetryPlugin(this.config)),
        this.middlewareStack.use(CV4.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(K00.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(WV4.getLoggerPlugin(this.config)),
        this.middlewareStack.use(FV4.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          W2.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: w00.defaultBedrockHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: d(
              async (J) =>
                new W2.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': J.credentials }),
              'identityProviderConfigProvider'
            ),
          })
        ),
        this.middlewareStack.use(W2.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  },
  Z9 = kH(),
  nX = class A extends _.ServiceException {
    static {
      d(this, 'BedrockServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  b00 = class A extends nX {
    static {
      d(this, 'AccessDeniedException');
    }
    name = 'AccessDeniedException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'AccessDeniedException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  g00 = class A extends nX {
    static {
      d(this, 'ConflictException');
    }
    name = 'ConflictException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ConflictException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  b_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.sageMaker !== void 0) return Q.sageMaker(B.sageMaker);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(b_1 || (b_1 = {}));
var wV4 = { INCOMPATIBLE_ENDPOINT: 'INCOMPATIBLE_ENDPOINT', REGISTERED: 'REGISTERED' },
  h00 = class A extends nX {
    static {
      d(this, 'InternalServerException');
    }
    name = 'InternalServerException';
    $fault = 'server';
    constructor(B) {
      super({ name: 'InternalServerException', $fault: 'server', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  m00 = class A extends nX {
    static {
      d(this, 'ResourceNotFoundException');
    }
    name = 'ResourceNotFoundException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ResourceNotFoundException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  d00 = class A extends nX {
    static {
      d(this, 'ServiceQuotaExceededException');
    }
    name = 'ServiceQuotaExceededException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ServiceQuotaExceededException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  u00 = class A extends nX {
    static {
      d(this, 'ThrottlingException');
    }
    name = 'ThrottlingException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ThrottlingException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  p00 = class A extends nX {
    static {
      d(this, 'ValidationException');
    }
    name = 'ValidationException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ValidationException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  c00 = class A extends nX {
    static {
      d(this, 'ServiceUnavailableException');
    }
    name = 'ServiceUnavailableException';
    $fault = 'server';
    constructor(B) {
      super({ name: 'ServiceUnavailableException', $fault: 'server', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  EV4 = {
    COMPLETED: 'Completed',
    DELETING: 'Deleting',
    FAILED: 'Failed',
    IN_PROGRESS: 'InProgress',
    STOPPED: 'Stopped',
    STOPPING: 'Stopping',
  },
  UV4 = { MODEL_EVALUATION: 'ModelEvaluation', RAG_EVALUATION: 'RagEvaluation' },
  z31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.stringValue !== void 0) return Q.stringValue(B.stringValue);
    if (B.floatValue !== void 0) return Q.floatValue(B.floatValue);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(z31 || (z31 = {}));
var w31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.customMetricDefinition !== void 0)
      return Q.customMetricDefinition(B.customMetricDefinition);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(w31 || (w31 = {}));
var g_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.s3Uri !== void 0) return Q.s3Uri(B.s3Uri);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(g_1 || (g_1 = {}));
var NV4 = {
    CLASSIFICATION: 'Classification',
    CUSTOM: 'Custom',
    GENERATION: 'Generation',
    QUESTION_AND_ANSWER: 'QuestionAndAnswer',
    SUMMARIZATION: 'Summarization',
  },
  h_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.bedrockEvaluatorModels !== void 0)
      return Q.bedrockEvaluatorModels(B.bedrockEvaluatorModels);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(h_1 || (h_1 = {}));
var E31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.automated !== void 0) return Q.automated(B.automated);
    if (B.human !== void 0) return Q.human(B.human);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(E31 || (E31 = {}));
var $V4 = { OPTIMIZED: 'optimized', STANDARD: 'standard' },
  m_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.bedrockModel !== void 0) return Q.bedrockModel(B.bedrockModel);
    if (B.precomputedInferenceSource !== void 0)
      return Q.precomputedInferenceSource(B.precomputedInferenceSource);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(m_1 || (m_1 = {}));
var qV4 = { BYTE_CONTENT: 'BYTE_CONTENT', S3: 'S3' },
  MV4 = { QUERY_DECOMPOSITION: 'QUERY_DECOMPOSITION' },
  LV4 = { HYBRID: 'HYBRID', SEMANTIC: 'SEMANTIC' },
  RV4 = { EXTERNAL_SOURCES: 'EXTERNAL_SOURCES', KNOWLEDGE_BASE: 'KNOWLEDGE_BASE' },
  d_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.retrieveSourceConfig !== void 0) return Q.retrieveSourceConfig(B.retrieveSourceConfig);
    if (B.retrieveAndGenerateSourceConfig !== void 0)
      return Q.retrieveAndGenerateSourceConfig(B.retrieveAndGenerateSourceConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(d_1 || (d_1 = {}));
var OV4 = { AUTOMATED: 'Automated', HUMAN: 'Human' },
  TV4 = { CREATION_TIME: 'CreationTime' },
  PV4 = { ASCENDING: 'Ascending', DESCENDING: 'Descending' },
  SV4 = { BLOCK: 'BLOCK', NONE: 'NONE' },
  _V4 = { IMAGE: 'IMAGE', TEXT: 'TEXT' },
  jV4 = { HIGH: 'HIGH', LOW: 'LOW', MEDIUM: 'MEDIUM', NONE: 'NONE' },
  yV4 = {
    HATE: 'HATE',
    INSULTS: 'INSULTS',
    MISCONDUCT: 'MISCONDUCT',
    PROMPT_ATTACK: 'PROMPT_ATTACK',
    SEXUAL: 'SEXUAL',
    VIOLENCE: 'VIOLENCE',
  },
  kV4 = { BLOCK: 'BLOCK', NONE: 'NONE' },
  xV4 = { GROUNDING: 'GROUNDING', RELEVANCE: 'RELEVANCE' },
  fV4 = { ANONYMIZE: 'ANONYMIZE', BLOCK: 'BLOCK', NONE: 'NONE' },
  vV4 = {
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
  bV4 = { BLOCK: 'BLOCK', NONE: 'NONE' },
  gV4 = { DENY: 'DENY' },
  hV4 = { BLOCK: 'BLOCK', NONE: 'NONE' },
  mV4 = { PROFANITY: 'PROFANITY' },
  l00 = class A extends nX {
    static {
      d(this, 'TooManyTagsException');
    }
    name = 'TooManyTagsException';
    $fault = 'client';
    resourceName;
    constructor(B) {
      super({ name: 'TooManyTagsException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype), (this.resourceName = B.resourceName));
    }
  },
  dV4 = {
    CREATING: 'CREATING',
    DELETING: 'DELETING',
    FAILED: 'FAILED',
    READY: 'READY',
    UPDATING: 'UPDATING',
    VERSIONING: 'VERSIONING',
  },
  u_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.copyFrom !== void 0) return Q.copyFrom(B.copyFrom);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(u_1 || (u_1 = {}));
var uV4 = { ACTIVE: 'ACTIVE' },
  pV4 = { APPLICATION: 'APPLICATION', SYSTEM_DEFINED: 'SYSTEM_DEFINED' },
  cV4 = { COMPLETED: 'Completed', FAILED: 'Failed', IN_PROGRESS: 'InProgress' },
  p_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.s3DataSource !== void 0) return Q.s3DataSource(B.s3DataSource);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(p_1 || (p_1 = {}));
var lV4 = { COMPLETED: 'Completed', FAILED: 'Failed', IN_PROGRESS: 'InProgress' },
  iV4 = { CREATION_TIME: 'CreationTime' },
  nV4 = { JSONL: 'JSONL' },
  c_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.s3InputDataConfig !== void 0) return Q.s3InputDataConfig(B.s3InputDataConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(c_1 || (c_1 = {}));
var l_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.s3OutputDataConfig !== void 0) return Q.s3OutputDataConfig(B.s3OutputDataConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(l_1 || (l_1 = {}));
var aV4 = {
    COMPLETED: 'Completed',
    EXPIRED: 'Expired',
    FAILED: 'Failed',
    IN_PROGRESS: 'InProgress',
    PARTIALLY_COMPLETED: 'PartiallyCompleted',
    SCHEDULED: 'Scheduled',
    STOPPED: 'Stopped',
    STOPPING: 'Stopping',
    SUBMITTED: 'Submitted',
    VALIDATING: 'Validating',
  },
  i_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.distillationConfig !== void 0) return Q.distillationConfig(B.distillationConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(i_1 || (i_1 = {}));
var sV4 = {
    CONTINUED_PRE_TRAINING: 'CONTINUED_PRE_TRAINING',
    DISTILLATION: 'DISTILLATION',
    FINE_TUNING: 'FINE_TUNING',
  },
  n_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.s3Uri !== void 0) return Q.s3Uri(B.s3Uri);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(n_1 || (n_1 = {}));
var a_1;
((A) => {
  A.visit = d((B, Q) => {
    if (B.equals !== void 0) return Q.equals(B.equals);
    if (B.notEquals !== void 0) return Q.notEquals(B.notEquals);
    if (B.andAll !== void 0) return Q.andAll(B.andAll);
    if (B.orAll !== void 0) return Q.orAll(B.orAll);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(a_1 || (a_1 = {}));
var rV4 = {
    CONTINUED_PRE_TRAINING: 'CONTINUED_PRE_TRAINING',
    DISTILLATION: 'DISTILLATION',
    FINE_TUNING: 'FINE_TUNING',
  },
  oV4 = { ON_DEMAND: 'ON_DEMAND', PROVISIONED: 'PROVISIONED' },
  tV4 = { EMBEDDING: 'EMBEDDING', IMAGE: 'IMAGE', TEXT: 'TEXT' },
  eV4 = { ACTIVE: 'ACTIVE', LEGACY: 'LEGACY' },
  AK4 = { AVAILABLE: 'AVAILABLE' },
  BK4 = { CUSTOM: 'custom', DEFAULT: 'default' },
  QK4 = { ONE_MONTH: 'OneMonth', SIX_MONTHS: 'SixMonths' },
  IK4 = { CREATING: 'Creating', FAILED: 'Failed', IN_SERVICE: 'InService', UPDATING: 'Updating' },
  GK4 = { CREATION_TIME: 'CreationTime' },
  DK4 = {
    COMPLETED: 'Completed',
    FAILED: 'Failed',
    IN_PROGRESS: 'InProgress',
    STOPPED: 'Stopped',
    STOPPING: 'Stopping',
  },
  ZK4 = {
    COMPLETED: 'Completed',
    FAILED: 'Failed',
    IN_PROGRESS: 'InProgress',
    STOPPED: 'Stopped',
    STOPPING: 'Stopping',
  },
  U31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.equals !== void 0) return Q.equals(B.equals);
    if (B.notEquals !== void 0) return Q.notEquals(B.notEquals);
    if (B.greaterThan !== void 0) return Q.greaterThan(B.greaterThan);
    if (B.greaterThanOrEquals !== void 0) return Q.greaterThanOrEquals(B.greaterThanOrEquals);
    if (B.lessThan !== void 0) return Q.lessThan(B.lessThan);
    if (B.lessThanOrEquals !== void 0) return Q.lessThanOrEquals(B.lessThanOrEquals);
    if (B.in !== void 0) return Q.in(B.in);
    if (B.notIn !== void 0) return Q.notIn(B.notIn);
    if (B.startsWith !== void 0) return Q.startsWith(B.startsWith);
    if (B.listContains !== void 0) return Q.listContains(B.listContains);
    if (B.stringContains !== void 0) return Q.stringContains(B.stringContains);
    if (B.andAll !== void 0) return Q.andAll(B.andAll);
    if (B.orAll !== void 0) return Q.orAll(B.orAll);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(U31 || (U31 = {}));
var N31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.retrieveConfig !== void 0) return Q.retrieveConfig(B.retrieveConfig);
    if (B.retrieveAndGenerateConfig !== void 0)
      return Q.retrieveAndGenerateConfig(B.retrieveAndGenerateConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(N31 || (N31 = {}));
var $31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.knowledgeBaseConfig !== void 0) return Q.knowledgeBaseConfig(B.knowledgeBaseConfig);
    if (B.precomputedRagSourceConfig !== void 0)
      return Q.precomputedRagSourceConfig(B.precomputedRagSourceConfig);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})($31 || ($31 = {}));
var q31;
((A) => {
  A.visit = d((B, Q) => {
    if (B.models !== void 0) return Q.models(B.models);
    if (B.ragConfigs !== void 0) return Q.ragConfigs(B.ragConfigs);
    return Q._(B.$unknown[0], B.$unknown[1]);
  }, 'visit');
})(q31 || (q31 = {}));
var i00 = d(
    (A) => ({ ...A, ...(A.jobIdentifiers && { jobIdentifiers: _.SENSITIVE_STRING }) }),
    'BatchDeleteEvaluationJobRequestFilterSensitiveLog'
  ),
  n00 = d(
    (A) => ({ ...A, ...(A.jobIdentifier && { jobIdentifier: _.SENSITIVE_STRING }) }),
    'BatchDeleteEvaluationJobErrorFilterSensitiveLog'
  ),
  a00 = d(
    (A) => ({ ...A, ...(A.jobIdentifier && { jobIdentifier: _.SENSITIVE_STRING }) }),
    'BatchDeleteEvaluationJobItemFilterSensitiveLog'
  ),
  s00 = d(
    (A) => ({
      ...A,
      ...(A.errors && { errors: A.errors.map((B) => n00(B)) }),
      ...(A.evaluationJobs && { evaluationJobs: A.evaluationJobs.map((B) => a00(B)) }),
    }),
    'BatchDeleteEvaluationJobResponseFilterSensitiveLog'
  ),
  YK4 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.ratingScale && { ratingScale: A.ratingScale.map((B) => B) }),
    }),
    'CustomMetricDefinitionFilterSensitiveLog'
  ),
  r00 = d((A) => {
    if (A.customMetricDefinition !== void 0) return { customMetricDefinition: _.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'AutomatedEvaluationCustomMetricSourceFilterSensitiveLog'),
  o00 = d(
    (A) => ({
      ...A,
      ...(A.customMetrics && { customMetrics: A.customMetrics.map((B) => r00(B)) }),
    }),
    'AutomatedEvaluationCustomMetricConfigFilterSensitiveLog'
  ),
  t00 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.datasetLocation && { datasetLocation: A.datasetLocation }),
    }),
    'EvaluationDatasetFilterSensitiveLog'
  ),
  o_1 = d(
    (A) => ({
      ...A,
      ...(A.dataset && { dataset: t00(A.dataset) }),
      ...(A.metricNames && { metricNames: _.SENSITIVE_STRING }),
    }),
    'EvaluationDatasetMetricConfigFilterSensitiveLog'
  ),
  e00 = d(
    (A) => ({
      ...A,
      ...(A.datasetMetricConfigs && {
        datasetMetricConfigs: A.datasetMetricConfigs.map((B) => o_1(B)),
      }),
      ...(A.evaluatorModelConfig && { evaluatorModelConfig: A.evaluatorModelConfig }),
      ...(A.customMetricConfig && { customMetricConfig: o00(A.customMetricConfig) }),
    }),
    'AutomatedEvaluationConfigFilterSensitiveLog'
  ),
  A20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.description && { description: _.SENSITIVE_STRING }),
    }),
    'HumanEvaluationCustomMetricFilterSensitiveLog'
  ),
  B20 = d(
    (A) => ({ ...A, ...(A.instructions && { instructions: _.SENSITIVE_STRING }) }),
    'HumanWorkflowConfigFilterSensitiveLog'
  ),
  Q20 = d(
    (A) => ({
      ...A,
      ...(A.humanWorkflowConfig && { humanWorkflowConfig: B20(A.humanWorkflowConfig) }),
      ...(A.customMetrics && { customMetrics: A.customMetrics.map((B) => A20(B)) }),
      ...(A.datasetMetricConfigs && {
        datasetMetricConfigs: A.datasetMetricConfigs.map((B) => o_1(B)),
      }),
    }),
    'HumanEvaluationConfigFilterSensitiveLog'
  ),
  t_1 = d((A) => {
    if (A.automated !== void 0) return { automated: e00(A.automated) };
    if (A.human !== void 0) return { human: Q20(A.human) };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'EvaluationConfigFilterSensitiveLog'),
  I20 = d(
    (A) => ({ ...A, ...(A.inferenceParams && { inferenceParams: _.SENSITIVE_STRING }) }),
    'EvaluationBedrockModelFilterSensitiveLog'
  ),
  G20 = d((A) => {
    if (A.bedrockModel !== void 0) return { bedrockModel: I20(A.bedrockModel) };
    if (A.precomputedInferenceSource !== void 0)
      return { precomputedInferenceSource: A.precomputedInferenceSource };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'EvaluationModelConfigFilterSensitiveLog'),
  e_1 = d(
    (A) => ({ ...A, ...(A.textPromptTemplate && { textPromptTemplate: _.SENSITIVE_STRING }) }),
    'PromptTemplateFilterSensitiveLog'
  ),
  D20 = d(
    (A) => ({ ...A, ...(A.promptTemplate && { promptTemplate: e_1(A.promptTemplate) }) }),
    'ExternalSourcesGenerationConfigurationFilterSensitiveLog'
  ),
  Z20 = d(
    (A) => ({
      ...A,
      ...(A.identifier && { identifier: _.SENSITIVE_STRING }),
      ...(A.data && { data: _.SENSITIVE_STRING }),
    }),
    'ByteContentDocFilterSensitiveLog'
  ),
  Y20 = d(
    (A) => ({ ...A, ...(A.byteContent && { byteContent: Z20(A.byteContent) }) }),
    'ExternalSourceFilterSensitiveLog'
  ),
  W20 = d(
    (A) => ({
      ...A,
      ...(A.sources && { sources: A.sources.map((B) => Y20(B)) }),
      ...(A.generationConfiguration && { generationConfiguration: D20(A.generationConfiguration) }),
    }),
    'ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog'
  ),
  F20 = d(
    (A) => ({ ...A, ...(A.promptTemplate && { promptTemplate: e_1(A.promptTemplate) }) }),
    'GenerationConfigurationFilterSensitiveLog'
  ),
  J20 = d(
    (A) => ({ ...A, ...(A.jobIdentifier && { jobIdentifier: _.SENSITIVE_STRING }) }),
    'GetEvaluationJobRequestFilterSensitiveLog'
  ),
  C20 = d(
    (A) => ({ ...A, ...(A.jobIdentifier && { jobIdentifier: _.SENSITIVE_STRING }) }),
    'StopEvaluationJobRequestFilterSensitiveLog'
  ),
  X20 = d(
    (A) => ({
      ...A,
      ...(A.inputModalities && { inputModalities: _.SENSITIVE_STRING }),
      ...(A.outputModalities && { outputModalities: _.SENSITIVE_STRING }),
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailContentFilterConfigFilterSensitiveLog'
  ),
  Aj1 = d(
    (A) => ({
      ...A,
      ...(A.filtersConfig && { filtersConfig: A.filtersConfig.map((B) => X20(B)) }),
    }),
    'GuardrailContentPolicyConfigFilterSensitiveLog'
  ),
  V20 = d(
    (A) => ({ ...A, ...(A.action && { action: _.SENSITIVE_STRING }) }),
    'GuardrailContextualGroundingFilterConfigFilterSensitiveLog'
  ),
  Bj1 = d(
    (A) => ({
      ...A,
      ...(A.filtersConfig && { filtersConfig: A.filtersConfig.map((B) => V20(B)) }),
    }),
    'GuardrailContextualGroundingPolicyConfigFilterSensitiveLog'
  ),
  K20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.definition && { definition: _.SENSITIVE_STRING }),
      ...(A.examples && { examples: _.SENSITIVE_STRING }),
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailTopicConfigFilterSensitiveLog'
  ),
  Qj1 = d(
    (A) => ({ ...A, ...(A.topicsConfig && { topicsConfig: A.topicsConfig.map((B) => K20(B)) }) }),
    'GuardrailTopicPolicyConfigFilterSensitiveLog'
  ),
  H20 = d(
    (A) => ({
      ...A,
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailManagedWordsConfigFilterSensitiveLog'
  ),
  z20 = d(
    (A) => ({
      ...A,
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailWordConfigFilterSensitiveLog'
  ),
  Ij1 = d(
    (A) => ({
      ...A,
      ...(A.wordsConfig && { wordsConfig: A.wordsConfig.map((B) => z20(B)) }),
      ...(A.managedWordListsConfig && {
        managedWordListsConfig: A.managedWordListsConfig.map((B) => H20(B)),
      }),
    }),
    'GuardrailWordPolicyConfigFilterSensitiveLog'
  ),
  w20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.description && { description: _.SENSITIVE_STRING }),
      ...(A.topicPolicyConfig && { topicPolicyConfig: Qj1(A.topicPolicyConfig) }),
      ...(A.contentPolicyConfig && { contentPolicyConfig: Aj1(A.contentPolicyConfig) }),
      ...(A.wordPolicyConfig && { wordPolicyConfig: Ij1(A.wordPolicyConfig) }),
      ...(A.contextualGroundingPolicyConfig && {
        contextualGroundingPolicyConfig: Bj1(A.contextualGroundingPolicyConfig),
      }),
      ...(A.blockedInputMessaging && { blockedInputMessaging: _.SENSITIVE_STRING }),
      ...(A.blockedOutputsMessaging && { blockedOutputsMessaging: _.SENSITIVE_STRING }),
    }),
    'CreateGuardrailRequestFilterSensitiveLog'
  ),
  E20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'CreateGuardrailVersionRequestFilterSensitiveLog'
  ),
  U20 = d(
    (A) => ({
      ...A,
      ...(A.inputModalities && { inputModalities: _.SENSITIVE_STRING }),
      ...(A.outputModalities && { outputModalities: _.SENSITIVE_STRING }),
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailContentFilterFilterSensitiveLog'
  ),
  N20 = d(
    (A) => ({ ...A, ...(A.filters && { filters: A.filters.map((B) => U20(B)) }) }),
    'GuardrailContentPolicyFilterSensitiveLog'
  ),
  $20 = d(
    (A) => ({ ...A, ...(A.action && { action: _.SENSITIVE_STRING }) }),
    'GuardrailContextualGroundingFilterFilterSensitiveLog'
  ),
  q20 = d(
    (A) => ({ ...A, ...(A.filters && { filters: A.filters.map((B) => $20(B)) }) }),
    'GuardrailContextualGroundingPolicyFilterSensitiveLog'
  ),
  M20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.definition && { definition: _.SENSITIVE_STRING }),
      ...(A.examples && { examples: _.SENSITIVE_STRING }),
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailTopicFilterSensitiveLog'
  ),
  L20 = d(
    (A) => ({ ...A, ...(A.topics && { topics: A.topics.map((B) => M20(B)) }) }),
    'GuardrailTopicPolicyFilterSensitiveLog'
  ),
  R20 = d(
    (A) => ({
      ...A,
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailManagedWordsFilterSensitiveLog'
  ),
  O20 = d(
    (A) => ({
      ...A,
      ...(A.inputAction && { inputAction: _.SENSITIVE_STRING }),
      ...(A.outputAction && { outputAction: _.SENSITIVE_STRING }),
    }),
    'GuardrailWordFilterSensitiveLog'
  ),
  T20 = d(
    (A) => ({
      ...A,
      ...(A.words && { words: A.words.map((B) => O20(B)) }),
      ...(A.managedWordLists && { managedWordLists: A.managedWordLists.map((B) => R20(B)) }),
    }),
    'GuardrailWordPolicyFilterSensitiveLog'
  ),
  P20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.description && { description: _.SENSITIVE_STRING }),
      ...(A.topicPolicy && { topicPolicy: L20(A.topicPolicy) }),
      ...(A.contentPolicy && { contentPolicy: N20(A.contentPolicy) }),
      ...(A.wordPolicy && { wordPolicy: T20(A.wordPolicy) }),
      ...(A.contextualGroundingPolicy && {
        contextualGroundingPolicy: q20(A.contextualGroundingPolicy),
      }),
      ...(A.statusReasons && { statusReasons: _.SENSITIVE_STRING }),
      ...(A.failureRecommendations && { failureRecommendations: _.SENSITIVE_STRING }),
      ...(A.blockedInputMessaging && { blockedInputMessaging: _.SENSITIVE_STRING }),
      ...(A.blockedOutputsMessaging && { blockedOutputsMessaging: _.SENSITIVE_STRING }),
    }),
    'GetGuardrailResponseFilterSensitiveLog'
  ),
  S20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.description && { description: _.SENSITIVE_STRING }),
    }),
    'GuardrailSummaryFilterSensitiveLog'
  ),
  _20 = d(
    (A) => ({ ...A, ...(A.guardrails && { guardrails: A.guardrails.map((B) => S20(B)) }) }),
    'ListGuardrailsResponseFilterSensitiveLog'
  ),
  j20 = d(
    (A) => ({
      ...A,
      ...(A.name && { name: _.SENSITIVE_STRING }),
      ...(A.description && { description: _.SENSITIVE_STRING }),
      ...(A.topicPolicyConfig && { topicPolicyConfig: Qj1(A.topicPolicyConfig) }),
      ...(A.contentPolicyConfig && { contentPolicyConfig: Aj1(A.contentPolicyConfig) }),
      ...(A.wordPolicyConfig && { wordPolicyConfig: Ij1(A.wordPolicyConfig) }),
      ...(A.contextualGroundingPolicyConfig && {
        contextualGroundingPolicyConfig: Bj1(A.contextualGroundingPolicyConfig),
      }),
      ...(A.blockedInputMessaging && { blockedInputMessaging: _.SENSITIVE_STRING }),
      ...(A.blockedOutputsMessaging && { blockedOutputsMessaging: _.SENSITIVE_STRING }),
    }),
    'UpdateGuardrailRequestFilterSensitiveLog'
  ),
  y20 = d(
    (A) => ({
      ...A,
      ...(A.description && { description: _.SENSITIVE_STRING }),
      ...(A.modelSource && { modelSource: A.modelSource }),
    }),
    'CreateInferenceProfileRequestFilterSensitiveLog'
  ),
  k20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'GetInferenceProfileResponseFilterSensitiveLog'
  ),
  x20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'InferenceProfileSummaryFilterSensitiveLog'
  ),
  f20 = d(
    (A) => ({
      ...A,
      ...(A.inferenceProfileSummaries && {
        inferenceProfileSummaries: A.inferenceProfileSummaries.map((B) => x20(B)),
      }),
    }),
    'ListInferenceProfilesResponseFilterSensitiveLog'
  ),
  v20 = d(
    (A) => ({
      ...A,
      ...(A.message && { message: _.SENSITIVE_STRING }),
      ...(A.inputDataConfig && { inputDataConfig: A.inputDataConfig }),
      ...(A.outputDataConfig && { outputDataConfig: A.outputDataConfig }),
    }),
    'GetModelInvocationJobResponseFilterSensitiveLog'
  ),
  b20 = d(
    (A) => ({
      ...A,
      ...(A.message && { message: _.SENSITIVE_STRING }),
      ...(A.inputDataConfig && { inputDataConfig: A.inputDataConfig }),
      ...(A.outputDataConfig && { outputDataConfig: A.outputDataConfig }),
    }),
    'ModelInvocationJobSummaryFilterSensitiveLog'
  ),
  g20 = d(
    (A) => ({
      ...A,
      ...(A.invocationJobSummaries && {
        invocationJobSummaries: A.invocationJobSummaries.map((B) => b20(B)),
      }),
    }),
    'ListModelInvocationJobsResponseFilterSensitiveLog'
  ),
  s_1 = d(
    (A) => ({
      ...A,
      ...(A.equals && { equals: _.SENSITIVE_STRING }),
      ...(A.notEquals && { notEquals: _.SENSITIVE_STRING }),
    }),
    'RequestMetadataBaseFiltersFilterSensitiveLog'
  ),
  h20 = d((A) => {
    if (A.equals !== void 0) return { equals: _.SENSITIVE_STRING };
    if (A.notEquals !== void 0) return { notEquals: _.SENSITIVE_STRING };
    if (A.andAll !== void 0) return { andAll: A.andAll.map((B) => s_1(B)) };
    if (A.orAll !== void 0) return { orAll: A.orAll.map((B) => s_1(B)) };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'RequestMetadataFiltersFilterSensitiveLog'),
  m20 = d(
    (A) => ({
      ...A,
      ...(A.invocationLogSource && { invocationLogSource: A.invocationLogSource }),
      ...(A.requestMetadataFilters && { requestMetadataFilters: h20(A.requestMetadataFilters) }),
    }),
    'InvocationLogsConfigFilterSensitiveLog'
  ),
  R31 = d(
    (A) => ({
      ...A,
      ...(A.invocationLogsConfig && { invocationLogsConfig: m20(A.invocationLogsConfig) }),
    }),
    'TrainingDataConfigFilterSensitiveLog'
  ),
  d20 = d(
    (A) => ({
      ...A,
      ...(A.trainingDataConfig && { trainingDataConfig: R31(A.trainingDataConfig) }),
      ...(A.customizationConfig && { customizationConfig: A.customizationConfig }),
    }),
    'GetCustomModelResponseFilterSensitiveLog'
  ),
  u20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'CreatePromptRouterRequestFilterSensitiveLog'
  ),
  p20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'GetPromptRouterResponseFilterSensitiveLog'
  ),
  c20 = d(
    (A) => ({ ...A, ...(A.description && { description: _.SENSITIVE_STRING }) }),
    'PromptRouterSummaryFilterSensitiveLog'
  ),
  l20 = d(
    (A) => ({
      ...A,
      ...(A.promptRouterSummaries && {
        promptRouterSummaries: A.promptRouterSummaries.map((B) => c20(B)),
      }),
    }),
    'ListPromptRoutersResponseFilterSensitiveLog'
  ),
  i20 = d(
    (A) => ({
      ...A,
      ...(A.trainingDataConfig && { trainingDataConfig: R31(A.trainingDataConfig) }),
      ...(A.customizationConfig && { customizationConfig: A.customizationConfig }),
    }),
    'CreateModelCustomizationJobRequestFilterSensitiveLog'
  ),
  n20 = d(
    (A) => ({
      ...A,
      ...(A.trainingDataConfig && { trainingDataConfig: R31(A.trainingDataConfig) }),
      ...(A.customizationConfig && { customizationConfig: A.customizationConfig }),
    }),
    'GetModelCustomizationJobResponseFilterSensitiveLog'
  ),
  WK4 = d((A) => {
    if (A.equals !== void 0) return { equals: A.equals };
    if (A.notEquals !== void 0) return { notEquals: A.notEquals };
    if (A.greaterThan !== void 0) return { greaterThan: A.greaterThan };
    if (A.greaterThanOrEquals !== void 0) return { greaterThanOrEquals: A.greaterThanOrEquals };
    if (A.lessThan !== void 0) return { lessThan: A.lessThan };
    if (A.lessThanOrEquals !== void 0) return { lessThanOrEquals: A.lessThanOrEquals };
    if (A.in !== void 0) return { in: A.in };
    if (A.notIn !== void 0) return { notIn: A.notIn };
    if (A.startsWith !== void 0) return { startsWith: A.startsWith };
    if (A.listContains !== void 0) return { listContains: A.listContains };
    if (A.stringContains !== void 0) return { stringContains: A.stringContains };
    if (A.andAll !== void 0) return { andAll: _.SENSITIVE_STRING };
    if (A.orAll !== void 0) return { orAll: _.SENSITIVE_STRING };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'RetrievalFilterFilterSensitiveLog'),
  a20 = d(
    (A) => ({ ...A, ...(A.filter && { filter: _.SENSITIVE_STRING }) }),
    'KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog'
  ),
  Gj1 = d(
    (A) => ({
      ...A,
      ...(A.vectorSearchConfiguration && {
        vectorSearchConfiguration: a20(A.vectorSearchConfiguration),
      }),
    }),
    'KnowledgeBaseRetrievalConfigurationFilterSensitiveLog'
  ),
  s20 = d(
    (A) => ({
      ...A,
      ...(A.retrievalConfiguration && { retrievalConfiguration: Gj1(A.retrievalConfiguration) }),
      ...(A.generationConfiguration && { generationConfiguration: F20(A.generationConfiguration) }),
    }),
    'KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog'
  ),
  r20 = d(
    (A) => ({
      ...A,
      ...(A.knowledgeBaseRetrievalConfiguration && {
        knowledgeBaseRetrievalConfiguration: Gj1(A.knowledgeBaseRetrievalConfiguration),
      }),
    }),
    'RetrieveConfigFilterSensitiveLog'
  ),
  o20 = d(
    (A) => ({
      ...A,
      ...(A.knowledgeBaseConfiguration && {
        knowledgeBaseConfiguration: s20(A.knowledgeBaseConfiguration),
      }),
      ...(A.externalSourcesConfiguration && {
        externalSourcesConfiguration: W20(A.externalSourcesConfiguration),
      }),
    }),
    'RetrieveAndGenerateConfigurationFilterSensitiveLog'
  ),
  t20 = d((A) => {
    if (A.retrieveConfig !== void 0) return { retrieveConfig: r20(A.retrieveConfig) };
    if (A.retrieveAndGenerateConfig !== void 0)
      return { retrieveAndGenerateConfig: o20(A.retrieveAndGenerateConfig) };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'KnowledgeBaseConfigFilterSensitiveLog'),
  e20 = d((A) => {
    if (A.knowledgeBaseConfig !== void 0)
      return { knowledgeBaseConfig: t20(A.knowledgeBaseConfig) };
    if (A.precomputedRagSourceConfig !== void 0)
      return { precomputedRagSourceConfig: A.precomputedRagSourceConfig };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'RAGConfigFilterSensitiveLog'),
  Dj1 = d((A) => {
    if (A.models !== void 0) return { models: A.models.map((B) => G20(B)) };
    if (A.ragConfigs !== void 0) return { ragConfigs: A.ragConfigs.map((B) => e20(B)) };
    if (A.$unknown !== void 0) return { [A.$unknown[0]]: 'UNKNOWN' };
  }, 'EvaluationInferenceConfigFilterSensitiveLog'),
  A90 = d(
    (A) => ({
      ...A,
      ...(A.jobDescription && { jobDescription: _.SENSITIVE_STRING }),
      ...(A.evaluationConfig && { evaluationConfig: t_1(A.evaluationConfig) }),
      ...(A.inferenceConfig && { inferenceConfig: Dj1(A.inferenceConfig) }),
    }),
    'CreateEvaluationJobRequestFilterSensitiveLog'
  ),
  B90 = d(
    (A) => ({
      ...A,
      ...(A.jobDescription && { jobDescription: _.SENSITIVE_STRING }),
      ...(A.evaluationConfig && { evaluationConfig: t_1(A.evaluationConfig) }),
      ...(A.inferenceConfig && { inferenceConfig: Dj1(A.inferenceConfig) }),
    }),
    'GetEvaluationJobResponseFilterSensitiveLog'
  ),
  d2 = c8(),
  aX = jl(),
  FK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/evaluation-jobs/batch-delete');
    let G;
    return (
      (G = JSON.stringify(_.take(A, { jobIdentifiers: d((D) => _._json(D), 'jobIdentifiers') }))),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_BatchDeleteEvaluationJobCommand'),
  JK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/evaluation-jobs');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          applicationType: [],
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          customerEncryptionKeyId: [],
          evaluationConfig: d((D) => vz4(D, B), 'evaluationConfig'),
          inferenceConfig: d((D) => bz4(D, B), 'inferenceConfig'),
          jobDescription: [],
          jobName: [],
          jobTags: d((D) => _._json(D), 'jobTags'),
          outputDataConfig: d((D) => _._json(D), 'outputDataConfig'),
          roleArn: [],
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateEvaluationJobCommand'),
  CK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/guardrails');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          blockedInputMessaging: [],
          blockedOutputsMessaging: [],
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          contentPolicyConfig: d((D) => _._json(D), 'contentPolicyConfig'),
          contextualGroundingPolicyConfig: d((D) => I90(D, B), 'contextualGroundingPolicyConfig'),
          description: [],
          kmsKeyId: [],
          name: [],
          sensitiveInformationPolicyConfig: d(
            (D) => _._json(D),
            'sensitiveInformationPolicyConfig'
          ),
          tags: d((D) => _._json(D), 'tags'),
          topicPolicyConfig: d((D) => _._json(D), 'topicPolicyConfig'),
          wordPolicyConfig: d((D) => _._json(D), 'wordPolicyConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateGuardrailCommand'),
  XK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/guardrails/{guardrailIdentifier}'),
      Q.p('guardrailIdentifier', () => A.guardrailIdentifier, '{guardrailIdentifier}', !1));
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, { clientRequestToken: [!0, (D) => D ?? aX.v4()], description: [] })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateGuardrailVersionCommand'),
  VK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/inference-profiles');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          description: [],
          inferenceProfileName: [],
          modelSource: d((D) => _._json(D), 'modelSource'),
          tags: d((D) => _._json(D), 'tags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateInferenceProfileCommand'),
  KK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/marketplace-model/endpoints');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          acceptEula: [],
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          endpointConfig: d((D) => _._json(D), 'endpointConfig'),
          endpointName: [],
          modelSourceIdentifier: [],
          tags: d((D) => _._json(D), 'tags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateMarketplaceModelEndpointCommand'),
  HK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/model-copy-jobs');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          modelKmsKeyId: [],
          sourceModelArn: [],
          targetModelName: [],
          targetModelTags: d((D) => _._json(D), 'targetModelTags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateModelCopyJobCommand'),
  zK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/model-customization-jobs');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          baseModelIdentifier: [],
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          customModelKmsKeyId: [],
          customModelName: [],
          customModelTags: d((D) => _._json(D), 'customModelTags'),
          customizationConfig: d((D) => _._json(D), 'customizationConfig'),
          customizationType: [],
          hyperParameters: d((D) => _._json(D), 'hyperParameters'),
          jobName: [],
          jobTags: d((D) => _._json(D), 'jobTags'),
          outputDataConfig: d((D) => _._json(D), 'outputDataConfig'),
          roleArn: [],
          trainingDataConfig: d((D) => _._json(D), 'trainingDataConfig'),
          validationDataConfig: d((D) => _._json(D), 'validationDataConfig'),
          vpcConfig: d((D) => _._json(D), 'vpcConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateModelCustomizationJobCommand'),
  wK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/model-import-jobs');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [],
          importedModelKmsKeyId: [],
          importedModelName: [],
          importedModelTags: d((D) => _._json(D), 'importedModelTags'),
          jobName: [],
          jobTags: d((D) => _._json(D), 'jobTags'),
          modelDataSource: d((D) => _._json(D), 'modelDataSource'),
          roleArn: [],
          vpcConfig: d((D) => _._json(D), 'vpcConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateModelImportJobCommand'),
  EK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/model-invocation-job');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          inputDataConfig: d((D) => _._json(D), 'inputDataConfig'),
          jobName: [],
          modelId: [],
          outputDataConfig: d((D) => _._json(D), 'outputDataConfig'),
          roleArn: [],
          tags: d((D) => _._json(D), 'tags'),
          timeoutDurationInHours: [],
          vpcConfig: d((D) => _._json(D), 'vpcConfig'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateModelInvocationJobCommand'),
  UK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/prompt-routers');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          description: [],
          fallbackModel: d((D) => _._json(D), 'fallbackModel'),
          models: d((D) => _._json(D), 'models'),
          promptRouterName: [],
          routingCriteria: d((D) => Qw4(D, B), 'routingCriteria'),
          tags: d((D) => _._json(D), 'tags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreatePromptRouterCommand'),
  NK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/provisioned-model-throughput');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          commitmentDuration: [],
          modelId: [],
          modelUnits: [],
          provisionedModelName: [],
          tags: d((D) => _._json(D), 'tags'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateProvisionedModelThroughputCommand'),
  $K4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/custom-models/{modelIdentifier}'),
      Q.p('modelIdentifier', () => A.modelIdentifier, '{modelIdentifier}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteCustomModelCommand'),
  qK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/guardrails/{guardrailIdentifier}'),
      Q.p('guardrailIdentifier', () => A.guardrailIdentifier, '{guardrailIdentifier}', !1));
    let G = _.map({ [M31]: [, A[M31]] }),
      D;
    return (Q.m('DELETE').h(I).q(G).b(D), Q.build());
  }, 'se_DeleteGuardrailCommand'),
  MK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/imported-models/{modelIdentifier}'),
      Q.p('modelIdentifier', () => A.modelIdentifier, '{modelIdentifier}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteImportedModelCommand'),
  LK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/inference-profiles/{inferenceProfileIdentifier}'),
      Q.p(
        'inferenceProfileIdentifier',
        () => A.inferenceProfileIdentifier,
        '{inferenceProfileIdentifier}',
        !1
      ));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteInferenceProfileCommand'),
  RK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/marketplace-model/endpoints/{endpointArn}'),
      Q.p('endpointArn', () => A.endpointArn, '{endpointArn}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteMarketplaceModelEndpointCommand'),
  OK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/logging/modelinvocations');
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteModelInvocationLoggingConfigurationCommand'),
  TK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/prompt-routers/{promptRouterArn}'),
      Q.p('promptRouterArn', () => A.promptRouterArn, '{promptRouterArn}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeletePromptRouterCommand'),
  PK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/provisioned-model-throughput/{provisionedModelId}'),
      Q.p('provisionedModelId', () => A.provisionedModelId, '{provisionedModelId}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeleteProvisionedModelThroughputCommand'),
  SK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/marketplace-model/endpoints/{endpointArn}/registration'),
      Q.p('endpointArn', () => A.endpointArn, '{endpointArn}', !1));
    let G;
    return (Q.m('DELETE').h(I).b(G), Q.build());
  }, 'se_DeregisterMarketplaceModelEndpointCommand'),
  _K4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/custom-models/{modelIdentifier}'),
      Q.p('modelIdentifier', () => A.modelIdentifier, '{modelIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetCustomModelCommand'),
  jK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/evaluation-jobs/{jobIdentifier}'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetEvaluationJobCommand'),
  yK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/foundation-models/{modelIdentifier}'),
      Q.p('modelIdentifier', () => A.modelIdentifier, '{modelIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetFoundationModelCommand'),
  kK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/guardrails/{guardrailIdentifier}'),
      Q.p('guardrailIdentifier', () => A.guardrailIdentifier, '{guardrailIdentifier}', !1));
    let G = _.map({ [M31]: [, A[M31]] }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_GetGuardrailCommand'),
  xK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/imported-models/{modelIdentifier}'),
      Q.p('modelIdentifier', () => A.modelIdentifier, '{modelIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetImportedModelCommand'),
  fK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/inference-profiles/{inferenceProfileIdentifier}'),
      Q.p(
        'inferenceProfileIdentifier',
        () => A.inferenceProfileIdentifier,
        '{inferenceProfileIdentifier}',
        !1
      ));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetInferenceProfileCommand'),
  vK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/marketplace-model/endpoints/{endpointArn}'),
      Q.p('endpointArn', () => A.endpointArn, '{endpointArn}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetMarketplaceModelEndpointCommand'),
  bK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-copy-jobs/{jobArn}'), Q.p('jobArn', () => A.jobArn, '{jobArn}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetModelCopyJobCommand'),
  gK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-customization-jobs/{jobIdentifier}'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetModelCustomizationJobCommand'),
  hK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-import-jobs/{jobIdentifier}'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetModelImportJobCommand'),
  mK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-invocation-job/{jobIdentifier}'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetModelInvocationJobCommand'),
  dK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/logging/modelinvocations');
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetModelInvocationLoggingConfigurationCommand'),
  uK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/prompt-routers/{promptRouterArn}'),
      Q.p('promptRouterArn', () => A.promptRouterArn, '{promptRouterArn}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetPromptRouterCommand'),
  pK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/provisioned-model-throughput/{provisionedModelId}'),
      Q.p('provisionedModelId', () => A.provisionedModelId, '{provisionedModelId}', !1));
    let G;
    return (Q.m('GET').h(I).b(G), Q.build());
  }, 'se_GetProvisionedModelThroughputCommand'),
  cK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/custom-models');
    let G = _.map({
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [XY]: [, A[XY]],
        [R00]: [, A[R00]],
        [P00]: [, A[P00]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
        [_00]: [() => A.isOwned !== void 0, () => A[_00].toString()],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListCustomModelsCommand'),
  lK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/evaluation-jobs');
    let G = _.map({
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [yJ]: [, A[yJ]],
        [q00]: [, A[q00]],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListEvaluationJobsCommand'),
  iK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/foundation-models');
    let G = _.map({ [T00]: [, A[T00]], [M00]: [, A[M00]], [O00]: [, A[O00]], [L00]: [, A[L00]] }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListFoundationModelsCommand'),
  nK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/guardrails');
    let G = _.map({
        [S00]: [, A[S00]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListGuardrailsCommand'),
  aK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/imported-models');
    let G = _.map({
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListImportedModelsCommand'),
  sK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/inference-profiles');
    let G = _.map({
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [r_1]: [, A[YE4]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListInferenceProfilesCommand'),
  rK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/marketplace-model/endpoints');
    let G = _.map({
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [DE4]: [, A[GE4]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListMarketplaceModelEndpointsCommand'),
  oK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/model-copy-jobs');
    let G = _.map({
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [yJ]: [, A[yJ]],
        [y00]: [, A[y00]],
        [k00]: [, A[k00]],
        [ZE4]: [, A[WE4]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListModelCopyJobsCommand'),
  tK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/model-customization-jobs');
    let G = _.map({
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [yJ]: [, A[yJ]],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListModelCustomizationJobsCommand'),
  eK4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/model-import-jobs');
    let G = _.map({
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [yJ]: [, A[yJ]],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListModelImportJobsCommand'),
  AH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/model-invocation-jobs');
    let G = _.map({
        [x00]: [() => A.submitTimeAfter !== void 0, () => _.serializeDateTime(A[x00]).toString()],
        [f00]: [() => A.submitTimeBefore !== void 0, () => _.serializeDateTime(A[f00]).toString()],
        [yJ]: [, A[yJ]],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListModelInvocationJobsCommand'),
  BH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/prompt-routers');
    let G = _.map({
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [r_1]: [, A[r_1]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListPromptRoutersCommand'),
  QH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    Q.bp('/provisioned-model-throughputs');
    let G = _.map({
        [JY]: [() => A.creationTimeAfter !== void 0, () => _.serializeDateTime(A[JY]).toString()],
        [CY]: [() => A.creationTimeBefore !== void 0, () => _.serializeDateTime(A[CY]).toString()],
        [yJ]: [, A[yJ]],
        [j00]: [, A[j00]],
        [XY]: [, A[XY]],
        [xB]: [() => A.maxResults !== void 0, () => A[xB].toString()],
        [fB]: [, A[fB]],
        [nG]: [, A[nG]],
        [aG]: [, A[aG]],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListProvisionedModelThroughputsCommand'),
  IH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/listTagsForResource');
    let G;
    return ((G = JSON.stringify(_.take(A, { resourceARN: [] }))), Q.m('POST').h(I).b(G), Q.build());
  }, 'se_ListTagsForResourceCommand'),
  GH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/logging/modelinvocations');
    let G;
    return (
      (G = JSON.stringify(_.take(A, { loggingConfig: d((D) => _._json(D), 'loggingConfig') }))),
      Q.m('PUT').h(I).b(G),
      Q.build()
    );
  }, 'se_PutModelInvocationLoggingConfigurationCommand'),
  DH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/marketplace-model/endpoints/{endpointIdentifier}/registration'),
      Q.p('endpointIdentifier', () => A.endpointIdentifier, '{endpointIdentifier}', !1));
    let G;
    return (
      (G = JSON.stringify(_.take(A, { modelSourceIdentifier: [] }))),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_RegisterMarketplaceModelEndpointCommand'),
  ZH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/evaluation-job/{jobIdentifier}/stop'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_StopEvaluationJobCommand'),
  YH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-customization-jobs/{jobIdentifier}/stop'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_StopModelCustomizationJobCommand'),
  WH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = {};
    (Q.bp('/model-invocation-job/{jobIdentifier}/stop'),
      Q.p('jobIdentifier', () => A.jobIdentifier, '{jobIdentifier}', !1));
    let G;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_StopModelInvocationJobCommand'),
  FH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/tagResource');
    let G;
    return (
      (G = JSON.stringify(_.take(A, { resourceARN: [], tags: d((D) => _._json(D), 'tags') }))),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_TagResourceCommand'),
  JH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/untagResource');
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, { resourceARN: [], tagKeys: d((D) => _._json(D), 'tagKeys') })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_UntagResourceCommand'),
  CH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/guardrails/{guardrailIdentifier}'),
      Q.p('guardrailIdentifier', () => A.guardrailIdentifier, '{guardrailIdentifier}', !1));
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          blockedInputMessaging: [],
          blockedOutputsMessaging: [],
          contentPolicyConfig: d((D) => _._json(D), 'contentPolicyConfig'),
          contextualGroundingPolicyConfig: d((D) => I90(D, B), 'contextualGroundingPolicyConfig'),
          description: [],
          kmsKeyId: [],
          name: [],
          sensitiveInformationPolicyConfig: d(
            (D) => _._json(D),
            'sensitiveInformationPolicyConfig'
          ),
          topicPolicyConfig: d((D) => _._json(D), 'topicPolicyConfig'),
          wordPolicyConfig: d((D) => _._json(D), 'wordPolicyConfig'),
        })
      )),
      Q.m('PUT').h(I).b(G),
      Q.build()
    );
  }, 'se_UpdateGuardrailCommand'),
  XH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/marketplace-model/endpoints/{endpointArn}'),
      Q.p('endpointArn', () => A.endpointArn, '{endpointArn}', !1));
    let G;
    return (
      (G = JSON.stringify(
        _.take(A, {
          clientRequestToken: [!0, (D) => D ?? aX.v4()],
          endpointConfig: d((D) => _._json(D), 'endpointConfig'),
        })
      )),
      Q.m('PATCH').h(I).b(G),
      Q.build()
    );
  }, 'se_UpdateMarketplaceModelEndpointCommand'),
  VH4 = d(async (A, B) => {
    let Q = W2.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    (Q.bp('/provisioned-model-throughput/{provisionedModelId}'),
      Q.p('provisionedModelId', () => A.provisionedModelId, '{provisionedModelId}', !1));
    let G;
    return (
      (G = JSON.stringify(_.take(A, { desiredModelId: [], desiredProvisionedModelName: [] }))),
      Q.m('PATCH').h(I).b(G),
      Q.build()
    );
  }, 'se_UpdateProvisionedModelThroughputCommand'),
  KH4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { errors: _._json, evaluationJobs: _._json });
    return (Object.assign(Q, G), Q);
  }, 'de_BatchDeleteEvaluationJobCommand'),
  HH4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { jobArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateEvaluationJobCommand'),
  zH4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        createdAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'createdAt'),
        guardrailArn: _.expectString,
        guardrailId: _.expectString,
        version: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateGuardrailCommand'),
  wH4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { guardrailId: _.expectString, version: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateGuardrailVersionCommand'),
  EH4 = d(async (A, B) => {
    if (A.statusCode !== 201 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { inferenceProfileArn: _.expectString, status: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateInferenceProfileCommand'),
  UH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { marketplaceModelEndpoint: d((D) => O31(D, B), 'marketplaceModelEndpoint') });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateMarketplaceModelEndpointCommand'),
  NH4 = d(async (A, B) => {
    if (A.statusCode !== 201 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { jobArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateModelCopyJobCommand'),
  $H4 = d(async (A, B) => {
    if (A.statusCode !== 201 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { jobArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateModelCustomizationJobCommand'),
  qH4 = d(async (A, B) => {
    if (A.statusCode !== 201 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { jobArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateModelImportJobCommand'),
  MH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { jobArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateModelInvocationJobCommand'),
  LH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { promptRouterArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreatePromptRouterCommand'),
  RH4 = d(async (A, B) => {
    if (A.statusCode !== 201 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { provisionedModelArn: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateProvisionedModelThroughputCommand'),
  OH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteCustomModelCommand'),
  TH4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteGuardrailCommand'),
  PH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteImportedModelCommand'),
  SH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteInferenceProfileCommand'),
  _H4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteMarketplaceModelEndpointCommand'),
  jH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteModelInvocationLoggingConfigurationCommand'),
  yH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeletePromptRouterCommand'),
  kH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeleteProvisionedModelThroughputCommand'),
  xH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_DeregisterMarketplaceModelEndpointCommand'),
  fH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        baseModelArn: _.expectString,
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        customizationConfig: d((D) => _._json(d2.awsExpectUnion(D)), 'customizationConfig'),
        customizationType: _.expectString,
        hyperParameters: _._json,
        jobArn: _.expectString,
        jobName: _.expectString,
        modelArn: _.expectString,
        modelKmsKeyArn: _.expectString,
        modelName: _.expectString,
        outputDataConfig: _._json,
        trainingDataConfig: _._json,
        trainingMetrics: d((D) => X90(D, B), 'trainingMetrics'),
        validationDataConfig: _._json,
        validationMetrics: d((D) => V90(D, B), 'validationMetrics'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetCustomModelCommand'),
  vH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        applicationType: _.expectString,
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        customerEncryptionKeyId: _.expectString,
        evaluationConfig: d((D) => Vw4(d2.awsExpectUnion(D), B), 'evaluationConfig'),
        failureMessages: _._json,
        inferenceConfig: d((D) => Kw4(d2.awsExpectUnion(D), B), 'inferenceConfig'),
        jobArn: _.expectString,
        jobDescription: _.expectString,
        jobName: _.expectString,
        jobType: _.expectString,
        lastModifiedTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        outputDataConfig: _._json,
        roleArn: _.expectString,
        status: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetEvaluationJobCommand'),
  bH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { modelDetails: _._json });
    return (Object.assign(Q, G), Q);
  }, 'de_GetFoundationModelCommand'),
  gH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        blockedInputMessaging: _.expectString,
        blockedOutputsMessaging: _.expectString,
        contentPolicy: _._json,
        contextualGroundingPolicy: d((D) => Rw4(D, B), 'contextualGroundingPolicy'),
        createdAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'createdAt'),
        description: _.expectString,
        failureRecommendations: _._json,
        guardrailArn: _.expectString,
        guardrailId: _.expectString,
        kmsKeyArn: _.expectString,
        name: _.expectString,
        sensitiveInformationPolicy: _._json,
        status: _.expectString,
        statusReasons: _._json,
        topicPolicy: _._json,
        updatedAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'updatedAt'),
        version: _.expectString,
        wordPolicy: _._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetGuardrailCommand'),
  hH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        customModelUnits: _._json,
        instructSupported: _.expectBoolean,
        jobArn: _.expectString,
        jobName: _.expectString,
        modelArchitecture: _.expectString,
        modelArn: _.expectString,
        modelDataSource: d((D) => _._json(d2.awsExpectUnion(D)), 'modelDataSource'),
        modelKmsKeyArn: _.expectString,
        modelName: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetImportedModelCommand'),
  mH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        createdAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'createdAt'),
        description: _.expectString,
        inferenceProfileArn: _.expectString,
        inferenceProfileId: _.expectString,
        inferenceProfileName: _.expectString,
        models: _._json,
        status: _.expectString,
        type: _.expectString,
        updatedAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'updatedAt'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetInferenceProfileCommand'),
  dH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { marketplaceModelEndpoint: d((D) => O31(D, B), 'marketplaceModelEndpoint') });
    return (Object.assign(Q, G), Q);
  }, 'de_GetMarketplaceModelEndpointCommand'),
  uH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        failureMessage: _.expectString,
        jobArn: _.expectString,
        sourceAccountId: _.expectString,
        sourceModelArn: _.expectString,
        sourceModelName: _.expectString,
        status: _.expectString,
        targetModelArn: _.expectString,
        targetModelKmsKeyArn: _.expectString,
        targetModelName: _.expectString,
        targetModelTags: _._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetModelCopyJobCommand'),
  pH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        baseModelArn: _.expectString,
        clientRequestToken: _.expectString,
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        customizationConfig: d((D) => _._json(d2.awsExpectUnion(D)), 'customizationConfig'),
        customizationType: _.expectString,
        endTime: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'endTime'),
        failureMessage: _.expectString,
        hyperParameters: _._json,
        jobArn: _.expectString,
        jobName: _.expectString,
        lastModifiedTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        outputDataConfig: _._json,
        outputModelArn: _.expectString,
        outputModelKmsKeyArn: _.expectString,
        outputModelName: _.expectString,
        roleArn: _.expectString,
        status: _.expectString,
        trainingDataConfig: _._json,
        trainingMetrics: d((D) => X90(D, B), 'trainingMetrics'),
        validationDataConfig: _._json,
        validationMetrics: d((D) => V90(D, B), 'validationMetrics'),
        vpcConfig: _._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetModelCustomizationJobCommand'),
  cH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        endTime: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'endTime'),
        failureMessage: _.expectString,
        importedModelArn: _.expectString,
        importedModelKmsKeyArn: _.expectString,
        importedModelName: _.expectString,
        jobArn: _.expectString,
        jobName: _.expectString,
        lastModifiedTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        modelDataSource: d((D) => _._json(d2.awsExpectUnion(D)), 'modelDataSource'),
        roleArn: _.expectString,
        status: _.expectString,
        vpcConfig: _._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetModelImportJobCommand'),
  lH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        clientRequestToken: _.expectString,
        endTime: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'endTime'),
        inputDataConfig: d((D) => _._json(d2.awsExpectUnion(D)), 'inputDataConfig'),
        jobArn: _.expectString,
        jobExpirationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'jobExpirationTime'
        ),
        jobName: _.expectString,
        lastModifiedTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        message: _.expectString,
        modelId: _.expectString,
        outputDataConfig: d((D) => _._json(d2.awsExpectUnion(D)), 'outputDataConfig'),
        roleArn: _.expectString,
        status: _.expectString,
        submitTime: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'submitTime'),
        timeoutDurationInHours: _.expectInt32,
        vpcConfig: _._json,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetModelInvocationJobCommand'),
  iH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { loggingConfig: _._json });
    return (Object.assign(Q, G), Q);
  }, 'de_GetModelInvocationLoggingConfigurationCommand'),
  nH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        createdAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'createdAt'),
        description: _.expectString,
        fallbackModel: _._json,
        models: _._json,
        promptRouterArn: _.expectString,
        promptRouterName: _.expectString,
        routingCriteria: d((D) => C90(D, B), 'routingCriteria'),
        status: _.expectString,
        type: _.expectString,
        updatedAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'updatedAt'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetPromptRouterCommand'),
  aH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        commitmentDuration: _.expectString,
        commitmentExpirationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'commitmentExpirationTime'
        ),
        creationTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'creationTime'
        ),
        desiredModelArn: _.expectString,
        desiredModelUnits: _.expectInt32,
        failureMessage: _.expectString,
        foundationModelArn: _.expectString,
        lastModifiedTime: d(
          (D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)),
          'lastModifiedTime'
        ),
        modelArn: _.expectString,
        modelUnits: _.expectInt32,
        provisionedModelArn: _.expectString,
        provisionedModelName: _.expectString,
        status: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_GetProvisionedModelThroughputCommand'),
  sH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        modelSummaries: d((D) => Xw4(D, B), 'modelSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListCustomModelsCommand'),
  rH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        jobSummaries: d((D) => Hw4(D, B), 'jobSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListEvaluationJobsCommand'),
  oH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { modelSummaries: _._json });
    return (Object.assign(Q, G), Q);
  }, 'de_ListFoundationModelsCommand'),
  tH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { guardrails: d((D) => Ow4(D, B), 'guardrails'), nextToken: _.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_ListGuardrailsCommand'),
  eH4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        modelSummaries: d((D) => Sw4(D, B), 'modelSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListImportedModelsCommand'),
  Az4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        inferenceProfileSummaries: d((D) => _w4(D, B), 'inferenceProfileSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListInferenceProfilesCommand'),
  Bz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        marketplaceModelEndpoints: d((D) => fw4(D, B), 'marketplaceModelEndpoints'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListMarketplaceModelEndpointsCommand'),
  Qz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        modelCopyJobSummaries: d((D) => bw4(D, B), 'modelCopyJobSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListModelCopyJobsCommand'),
  Iz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        modelCustomizationJobSummaries: d((D) => hw4(D, B), 'modelCustomizationJobSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListModelCustomizationJobsCommand'),
  Gz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        modelImportJobSummaries: d((D) => dw4(D, B), 'modelImportJobSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListModelImportJobsCommand'),
  Dz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        invocationJobSummaries: d((D) => pw4(D, B), 'invocationJobSummaries'),
        nextToken: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListModelInvocationJobsCommand'),
  Zz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        nextToken: _.expectString,
        promptRouterSummaries: d((D) => lw4(D, B), 'promptRouterSummaries'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListPromptRoutersCommand'),
  Yz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        nextToken: _.expectString,
        provisionedModelSummaries: d((D) => nw4(D, B), 'provisionedModelSummaries'),
      });
    return (Object.assign(Q, G), Q);
  }, 'de_ListProvisionedModelThroughputsCommand'),
  Wz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { tags: _._json });
    return (Object.assign(Q, G), Q);
  }, 'de_ListTagsForResourceCommand'),
  Fz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_PutModelInvocationLoggingConfigurationCommand'),
  Jz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { marketplaceModelEndpoint: d((D) => O31(D, B), 'marketplaceModelEndpoint') });
    return (Object.assign(Q, G), Q);
  }, 'de_RegisterMarketplaceModelEndpointCommand'),
  Cz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_StopEvaluationJobCommand'),
  Xz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_StopModelCustomizationJobCommand'),
  Vz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_StopModelInvocationJobCommand'),
  Kz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_TagResourceCommand'),
  Hz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_UntagResourceCommand'),
  zz4 = d(async (A, B) => {
    if (A.statusCode !== 202 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, {
        guardrailArn: _.expectString,
        guardrailId: _.expectString,
        updatedAt: d((D) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(D)), 'updatedAt'),
        version: _.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_UpdateGuardrailCommand'),
  wz4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) }),
      I = _.expectNonNull(_.expectObject(await d2.parseJsonBody(A.body, B)), 'body'),
      G = _.take(I, { marketplaceModelEndpoint: d((D) => O31(D, B), 'marketplaceModelEndpoint') });
    return (Object.assign(Q, G), Q);
  }, 'de_UpdateMarketplaceModelEndpointCommand'),
  Ez4 = d(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return Y9(A, B);
    let Q = _.map({ $metadata: L2(A) });
    return (await _.collectBody(A.body, B), Q);
  }, 'de_UpdateProvisionedModelThroughputCommand'),
  Y9 = d(async (A, B) => {
    let Q = { ...A, body: await d2.parseJsonErrorBody(A.body, B) },
      I = d2.loadRestJsonErrorCode(A, Q.body);
    switch (I) {
      case 'AccessDeniedException':
      case 'com.amazonaws.bedrock#AccessDeniedException':
        throw await Nz4(Q, B);
      case 'ConflictException':
      case 'com.amazonaws.bedrock#ConflictException':
        throw await $z4(Q, B);
      case 'InternalServerException':
      case 'com.amazonaws.bedrock#InternalServerException':
        throw await qz4(Q, B);
      case 'ResourceNotFoundException':
      case 'com.amazonaws.bedrock#ResourceNotFoundException':
        throw await Mz4(Q, B);
      case 'ThrottlingException':
      case 'com.amazonaws.bedrock#ThrottlingException':
        throw await Oz4(Q, B);
      case 'ValidationException':
      case 'com.amazonaws.bedrock#ValidationException':
        throw await Pz4(Q, B);
      case 'ServiceQuotaExceededException':
      case 'com.amazonaws.bedrock#ServiceQuotaExceededException':
        throw await Lz4(Q, B);
      case 'TooManyTagsException':
      case 'com.amazonaws.bedrock#TooManyTagsException':
        throw await Tz4(Q, B);
      case 'ServiceUnavailableException':
      case 'com.amazonaws.bedrock#ServiceUnavailableException':
        throw await Rz4(Q, B);
      default:
        let G = Q.body;
        return Uz4({ output: A, parsedBody: G, errorCode: I });
    }
  }, 'de_CommandError'),
  Uz4 = _.withBaseException(nX),
  Nz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new b00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_AccessDeniedExceptionRes'),
  $z4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new g00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ConflictExceptionRes'),
  qz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new h00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_InternalServerExceptionRes'),
  Mz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new m00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ResourceNotFoundExceptionRes'),
  Lz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new d00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ServiceQuotaExceededExceptionRes'),
  Rz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new c00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ServiceUnavailableExceptionRes'),
  Oz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new u00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ThrottlingExceptionRes'),
  Tz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString, resourceName: _.expectString });
    Object.assign(Q, G);
    let D = new l00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_TooManyTagsExceptionRes'),
  Pz4 = d(async (A, B) => {
    let Q = _.map({}),
      I = A.body,
      G = _.take(I, { message: _.expectString });
    Object.assign(Q, G);
    let D = new p00({ $metadata: L2(A), ...Q });
    return _.decorateServiceException(D, A.body);
  }, 'de_ValidationExceptionRes'),
  Q90 = d((A, B) => {
    return Object.entries(A).reduce((Q, [I, G]) => {
      if (G === null) return Q;
      return ((Q[I] = Sz4(G, B)), Q);
    }, {});
  }, 'se_AdditionalModelRequestFields'),
  Sz4 = d((A, B) => {
    return A;
  }, 'se_AdditionalModelRequestFieldsValue'),
  _z4 = d((A, B) => {
    return _.take(A, {
      customMetricConfig: d((Q) => jz4(Q, B), 'customMetricConfig'),
      datasetMetricConfigs: _._json,
      evaluatorModelConfig: _._json,
    });
  }, 'se_AutomatedEvaluationConfig'),
  jz4 = d((A, B) => {
    return _.take(A, {
      customMetrics: d((Q) => yz4(Q, B), 'customMetrics'),
      evaluatorModelConfig: _._json,
    });
  }, 'se_AutomatedEvaluationCustomMetricConfig'),
  yz4 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return kz4(Q, B);
    });
  }, 'se_AutomatedEvaluationCustomMetrics'),
  kz4 = d((A, B) => {
    return w31.visit(A, {
      customMetricDefinition: d(
        (Q) => ({ customMetricDefinition: fz4(Q, B) }),
        'customMetricDefinition'
      ),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_AutomatedEvaluationCustomMetricSource'),
  xz4 = d((A, B) => {
    return _.take(A, { contentType: [], data: B.base64Encoder, identifier: [] });
  }, 'se_ByteContentDoc'),
  fz4 = d((A, B) => {
    return _.take(A, {
      instructions: [],
      name: [],
      ratingScale: d((Q) => oz4(Q, B), 'ratingScale'),
    });
  }, 'se_CustomMetricDefinition'),
  vz4 = d((A, B) => {
    return E31.visit(A, {
      automated: d((Q) => ({ automated: _z4(Q, B) }), 'automated'),
      human: d((Q) => ({ human: _._json(Q) }), 'human'),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_EvaluationConfig'),
  bz4 = d((A, B) => {
    return q31.visit(A, {
      models: d((Q) => ({ models: _._json(Q) }), 'models'),
      ragConfigs: d((Q) => ({ ragConfigs: rz4(Q, B) }), 'ragConfigs'),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_EvaluationInferenceConfig'),
  gz4 = d((A, B) => {
    return _.take(A, {
      byteContent: d((Q) => xz4(Q, B), 'byteContent'),
      s3Location: _._json,
      sourceType: [],
    });
  }, 'se_ExternalSource'),
  hz4 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return gz4(Q, B);
    });
  }, 'se_ExternalSources'),
  mz4 = d((A, B) => {
    return _.take(A, {
      additionalModelRequestFields: d((Q) => Q90(Q, B), 'additionalModelRequestFields'),
      guardrailConfiguration: _._json,
      kbInferenceConfig: d((Q) => G90(Q, B), 'kbInferenceConfig'),
      promptTemplate: _._json,
    });
  }, 'se_ExternalSourcesGenerationConfiguration'),
  dz4 = d((A, B) => {
    return _.take(A, {
      generationConfiguration: d((Q) => mz4(Q, B), 'generationConfiguration'),
      modelArn: [],
      sources: d((Q) => hz4(Q, B), 'sources'),
    });
  }, 'se_ExternalSourcesRetrieveAndGenerateConfiguration'),
  lX = d((A, B) => {
    return _.take(A, { key: [], value: d((Q) => uz4(Q, B), 'value') });
  }, 'se_FilterAttribute'),
  uz4 = d((A, B) => {
    return A;
  }, 'se_FilterValue'),
  pz4 = d((A, B) => {
    return _.take(A, {
      additionalModelRequestFields: d((Q) => Q90(Q, B), 'additionalModelRequestFields'),
      guardrailConfiguration: _._json,
      kbInferenceConfig: d((Q) => G90(Q, B), 'kbInferenceConfig'),
      promptTemplate: _._json,
    });
  }, 'se_GenerationConfiguration'),
  cz4 = d((A, B) => {
    return _.take(A, { action: [], enabled: [], threshold: _.serializeFloat, type: [] });
  }, 'se_GuardrailContextualGroundingFilterConfig'),
  lz4 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return cz4(Q, B);
    });
  }, 'se_GuardrailContextualGroundingFiltersConfig'),
  I90 = d((A, B) => {
    return _.take(A, { filtersConfig: d((Q) => lz4(Q, B), 'filtersConfig') });
  }, 'se_GuardrailContextualGroundingPolicyConfig'),
  G90 = d((A, B) => {
    return _.take(A, { textInferenceConfig: d((Q) => Iw4(Q, B), 'textInferenceConfig') });
  }, 'se_KbInferenceConfig'),
  iz4 = d((A, B) => {
    return N31.visit(A, {
      retrieveAndGenerateConfig: d(
        (Q) => ({ retrieveAndGenerateConfig: Aw4(Q, B) }),
        'retrieveAndGenerateConfig'
      ),
      retrieveConfig: d((Q) => ({ retrieveConfig: Bw4(Q, B) }), 'retrieveConfig'),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_KnowledgeBaseConfig'),
  D90 = d((A, B) => {
    return _.take(A, {
      vectorSearchConfiguration: d((Q) => az4(Q, B), 'vectorSearchConfiguration'),
    });
  }, 'se_KnowledgeBaseRetrievalConfiguration'),
  nz4 = d((A, B) => {
    return _.take(A, {
      generationConfiguration: d((Q) => pz4(Q, B), 'generationConfiguration'),
      knowledgeBaseId: [],
      modelArn: [],
      orchestrationConfiguration: _._json,
      retrievalConfiguration: d((Q) => D90(Q, B), 'retrievalConfiguration'),
    });
  }, 'se_KnowledgeBaseRetrieveAndGenerateConfiguration'),
  az4 = d((A, B) => {
    return _.take(A, {
      filter: d((Q) => Z90(Q, B), 'filter'),
      numberOfResults: [],
      overrideSearchType: [],
    });
  }, 'se_KnowledgeBaseVectorSearchConfiguration'),
  sz4 = d((A, B) => {
    return $31.visit(A, {
      knowledgeBaseConfig: d((Q) => ({ knowledgeBaseConfig: iz4(Q, B) }), 'knowledgeBaseConfig'),
      precomputedRagSourceConfig: d(
        (Q) => ({ precomputedRagSourceConfig: _._json(Q) }),
        'precomputedRagSourceConfig'
      ),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_RAGConfig'),
  rz4 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return sz4(Q, B);
    });
  }, 'se_RagConfigs'),
  oz4 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return tz4(Q, B);
    });
  }, 'se_RatingScale'),
  tz4 = d((A, B) => {
    return _.take(A, { definition: [], value: d((Q) => ez4(Q, B), 'value') });
  }, 'se_RatingScaleItem'),
  ez4 = d((A, B) => {
    return z31.visit(A, {
      floatValue: d((Q) => ({ floatValue: _.serializeFloat(Q) }), 'floatValue'),
      stringValue: d((Q) => ({ stringValue: Q }), 'stringValue'),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_RatingScaleItemValue'),
  Z90 = d((A, B) => {
    return U31.visit(A, {
      andAll: d((Q) => ({ andAll: N00(Q, B) }), 'andAll'),
      equals: d((Q) => ({ equals: lX(Q, B) }), 'equals'),
      greaterThan: d((Q) => ({ greaterThan: lX(Q, B) }), 'greaterThan'),
      greaterThanOrEquals: d((Q) => ({ greaterThanOrEquals: lX(Q, B) }), 'greaterThanOrEquals'),
      in: d((Q) => ({ in: lX(Q, B) }), 'in'),
      lessThan: d((Q) => ({ lessThan: lX(Q, B) }), 'lessThan'),
      lessThanOrEquals: d((Q) => ({ lessThanOrEquals: lX(Q, B) }), 'lessThanOrEquals'),
      listContains: d((Q) => ({ listContains: lX(Q, B) }), 'listContains'),
      notEquals: d((Q) => ({ notEquals: lX(Q, B) }), 'notEquals'),
      notIn: d((Q) => ({ notIn: lX(Q, B) }), 'notIn'),
      orAll: d((Q) => ({ orAll: N00(Q, B) }), 'orAll'),
      startsWith: d((Q) => ({ startsWith: lX(Q, B) }), 'startsWith'),
      stringContains: d((Q) => ({ stringContains: lX(Q, B) }), 'stringContains'),
      _: d((Q, I) => ({ [Q]: I }), '_'),
    });
  }, 'se_RetrievalFilter'),
  N00 = d((A, B) => {
    return A.filter((Q) => Q != null).map((Q) => {
      return Z90(Q, B);
    });
  }, 'se_RetrievalFilterList'),
  Aw4 = d((A, B) => {
    return _.take(A, {
      externalSourcesConfiguration: d((Q) => dz4(Q, B), 'externalSourcesConfiguration'),
      knowledgeBaseConfiguration: d((Q) => nz4(Q, B), 'knowledgeBaseConfiguration'),
      type: [],
    });
  }, 'se_RetrieveAndGenerateConfiguration'),
  Bw4 = d((A, B) => {
    return _.take(A, {
      knowledgeBaseId: [],
      knowledgeBaseRetrievalConfiguration: d(
        (Q) => D90(Q, B),
        'knowledgeBaseRetrievalConfiguration'
      ),
    });
  }, 'se_RetrieveConfig'),
  Qw4 = d((A, B) => {
    return _.take(A, { responseQualityDifference: _.serializeFloat });
  }, 'se_RoutingCriteria'),
  Iw4 = d((A, B) => {
    return _.take(A, {
      maxTokens: [],
      stopSequences: _._json,
      temperature: _.serializeFloat,
      topP: _.serializeFloat,
    });
  }, 'se_TextInferenceConfig'),
  Y90 = d((A, B) => {
    return Object.entries(A).reduce((Q, [I, G]) => {
      if (G === null) return Q;
      return ((Q[I] = Gw4(G, B)), Q);
    }, {});
  }, 'de_AdditionalModelRequestFields'),
  Gw4 = d((A, B) => {
    return A;
  }, 'de_AdditionalModelRequestFieldsValue'),
  Dw4 = d((A, B) => {
    return _.take(A, {
      customMetricConfig: d((Q) => Zw4(Q, B), 'customMetricConfig'),
      datasetMetricConfigs: _._json,
      evaluatorModelConfig: d((Q) => _._json(d2.awsExpectUnion(Q)), 'evaluatorModelConfig'),
    });
  }, 'de_AutomatedEvaluationConfig'),
  Zw4 = d((A, B) => {
    return _.take(A, {
      customMetrics: d((Q) => Yw4(Q, B), 'customMetrics'),
      evaluatorModelConfig: _._json,
    });
  }, 'de_AutomatedEvaluationCustomMetricConfig'),
  Yw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Ww4(d2.awsExpectUnion(I), B);
      });
  }, 'de_AutomatedEvaluationCustomMetrics'),
  Ww4 = d((A, B) => {
    if (A.customMetricDefinition != null)
      return { customMetricDefinition: Jw4(A.customMetricDefinition, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_AutomatedEvaluationCustomMetricSource'),
  Fw4 = d((A, B) => {
    return _.take(A, {
      contentType: _.expectString,
      data: B.base64Decoder,
      identifier: _.expectString,
    });
  }, 'de_ByteContentDoc'),
  Jw4 = d((A, B) => {
    return _.take(A, {
      instructions: _.expectString,
      name: _.expectString,
      ratingScale: d((Q) => ow4(Q, B), 'ratingScale'),
    });
  }, 'de_CustomMetricDefinition'),
  Cw4 = d((A, B) => {
    return _.take(A, {
      baseModelArn: _.expectString,
      baseModelName: _.expectString,
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      customizationType: _.expectString,
      modelArn: _.expectString,
      modelName: _.expectString,
      ownerAccountId: _.expectString,
    });
  }, 'de_CustomModelSummary'),
  Xw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Cw4(I, B);
      });
  }, 'de_CustomModelSummaryList'),
  Vw4 = d((A, B) => {
    if (A.automated != null) return { automated: Dw4(A.automated, B) };
    if (A.human != null) return { human: _._json(A.human) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_EvaluationConfig'),
  Kw4 = d((A, B) => {
    if (A.models != null) return { models: _._json(A.models) };
    if (A.ragConfigs != null) return { ragConfigs: rw4(A.ragConfigs, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_EvaluationInferenceConfig'),
  Hw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return zw4(I, B);
      });
  }, 'de_EvaluationSummaries'),
  zw4 = d((A, B) => {
    return _.take(A, {
      applicationType: _.expectString,
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      customMetricsEvaluatorModelIdentifiers: _._json,
      evaluationTaskTypes: _._json,
      evaluatorModelIdentifiers: _._json,
      inferenceConfigSummary: _._json,
      jobArn: _.expectString,
      jobName: _.expectString,
      jobType: _.expectString,
      modelIdentifiers: _._json,
      ragIdentifiers: _._json,
      status: _.expectString,
    });
  }, 'de_EvaluationSummary'),
  ww4 = d((A, B) => {
    return _.take(A, {
      byteContent: d((Q) => Fw4(Q, B), 'byteContent'),
      s3Location: _._json,
      sourceType: _.expectString,
    });
  }, 'de_ExternalSource'),
  Ew4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return ww4(I, B);
      });
  }, 'de_ExternalSources'),
  Uw4 = d((A, B) => {
    return _.take(A, {
      additionalModelRequestFields: d((Q) => Y90(Q, B), 'additionalModelRequestFields'),
      guardrailConfiguration: _._json,
      kbInferenceConfig: d((Q) => W90(Q, B), 'kbInferenceConfig'),
      promptTemplate: _._json,
    });
  }, 'de_ExternalSourcesGenerationConfiguration'),
  Nw4 = d((A, B) => {
    return _.take(A, {
      generationConfiguration: d((Q) => Uw4(Q, B), 'generationConfiguration'),
      modelArn: _.expectString,
      sources: d((Q) => Ew4(Q, B), 'sources'),
    });
  }, 'de_ExternalSourcesRetrieveAndGenerateConfiguration'),
  iX = d((A, B) => {
    return _.take(A, { key: _.expectString, value: d((Q) => $w4(Q, B), 'value') });
  }, 'de_FilterAttribute'),
  $w4 = d((A, B) => {
    return A;
  }, 'de_FilterValue'),
  qw4 = d((A, B) => {
    return _.take(A, {
      additionalModelRequestFields: d((Q) => Y90(Q, B), 'additionalModelRequestFields'),
      guardrailConfiguration: _._json,
      kbInferenceConfig: d((Q) => W90(Q, B), 'kbInferenceConfig'),
      promptTemplate: _._json,
    });
  }, 'de_GenerationConfiguration'),
  Mw4 = d((A, B) => {
    return _.take(A, {
      action: _.expectString,
      enabled: _.expectBoolean,
      threshold: _.limitedParseDouble,
      type: _.expectString,
    });
  }, 'de_GuardrailContextualGroundingFilter'),
  Lw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Mw4(I, B);
      });
  }, 'de_GuardrailContextualGroundingFilters'),
  Rw4 = d((A, B) => {
    return _.take(A, { filters: d((Q) => Lw4(Q, B), 'filters') });
  }, 'de_GuardrailContextualGroundingPolicy'),
  Ow4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Tw4(I, B);
      });
  }, 'de_GuardrailSummaries'),
  Tw4 = d((A, B) => {
    return _.take(A, {
      arn: _.expectString,
      createdAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'createdAt'),
      description: _.expectString,
      id: _.expectString,
      name: _.expectString,
      status: _.expectString,
      updatedAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'updatedAt'),
      version: _.expectString,
    });
  }, 'de_GuardrailSummary'),
  Pw4 = d((A, B) => {
    return _.take(A, {
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      instructSupported: _.expectBoolean,
      modelArchitecture: _.expectString,
      modelArn: _.expectString,
      modelName: _.expectString,
    });
  }, 'de_ImportedModelSummary'),
  Sw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return Pw4(I, B);
      });
  }, 'de_ImportedModelSummaryList'),
  _w4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return jw4(I, B);
      });
  }, 'de_InferenceProfileSummaries'),
  jw4 = d((A, B) => {
    return _.take(A, {
      createdAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'createdAt'),
      description: _.expectString,
      inferenceProfileArn: _.expectString,
      inferenceProfileId: _.expectString,
      inferenceProfileName: _.expectString,
      models: _._json,
      status: _.expectString,
      type: _.expectString,
      updatedAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'updatedAt'),
    });
  }, 'de_InferenceProfileSummary'),
  W90 = d((A, B) => {
    return _.take(A, { textInferenceConfig: d((Q) => QE4(Q, B), 'textInferenceConfig') });
  }, 'de_KbInferenceConfig'),
  yw4 = d((A, B) => {
    if (A.retrieveAndGenerateConfig != null)
      return { retrieveAndGenerateConfig: AE4(A.retrieveAndGenerateConfig, B) };
    if (A.retrieveConfig != null) return { retrieveConfig: BE4(A.retrieveConfig, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_KnowledgeBaseConfig'),
  F90 = d((A, B) => {
    return _.take(A, {
      vectorSearchConfiguration: d((Q) => xw4(Q, B), 'vectorSearchConfiguration'),
    });
  }, 'de_KnowledgeBaseRetrievalConfiguration'),
  kw4 = d((A, B) => {
    return _.take(A, {
      generationConfiguration: d((Q) => qw4(Q, B), 'generationConfiguration'),
      knowledgeBaseId: _.expectString,
      modelArn: _.expectString,
      orchestrationConfiguration: _._json,
      retrievalConfiguration: d((Q) => F90(Q, B), 'retrievalConfiguration'),
    });
  }, 'de_KnowledgeBaseRetrieveAndGenerateConfiguration'),
  xw4 = d((A, B) => {
    return _.take(A, {
      filter: d((Q) => J90(d2.awsExpectUnion(Q), B), 'filter'),
      numberOfResults: _.expectInt32,
      overrideSearchType: _.expectString,
    });
  }, 'de_KnowledgeBaseVectorSearchConfiguration'),
  O31 = d((A, B) => {
    return _.take(A, {
      createdAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'createdAt'),
      endpointArn: _.expectString,
      endpointConfig: d((Q) => _._json(d2.awsExpectUnion(Q)), 'endpointConfig'),
      endpointStatus: _.expectString,
      endpointStatusMessage: _.expectString,
      modelSourceIdentifier: _.expectString,
      status: _.expectString,
      statusMessage: _.expectString,
      updatedAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'updatedAt'),
    });
  }, 'de_MarketplaceModelEndpoint'),
  fw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return vw4(I, B);
      });
  }, 'de_MarketplaceModelEndpointSummaries'),
  vw4 = d((A, B) => {
    return _.take(A, {
      createdAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'createdAt'),
      endpointArn: _.expectString,
      modelSourceIdentifier: _.expectString,
      status: _.expectString,
      statusMessage: _.expectString,
      updatedAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'updatedAt'),
    });
  }, 'de_MarketplaceModelEndpointSummary'),
  bw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return gw4(I, B);
      });
  }, 'de_ModelCopyJobSummaries'),
  gw4 = d((A, B) => {
    return _.take(A, {
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      failureMessage: _.expectString,
      jobArn: _.expectString,
      sourceAccountId: _.expectString,
      sourceModelArn: _.expectString,
      sourceModelName: _.expectString,
      status: _.expectString,
      targetModelArn: _.expectString,
      targetModelKmsKeyArn: _.expectString,
      targetModelName: _.expectString,
      targetModelTags: _._json,
    });
  }, 'de_ModelCopyJobSummary'),
  hw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return mw4(I, B);
      });
  }, 'de_ModelCustomizationJobSummaries'),
  mw4 = d((A, B) => {
    return _.take(A, {
      baseModelArn: _.expectString,
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      customModelArn: _.expectString,
      customModelName: _.expectString,
      customizationType: _.expectString,
      endTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'endTime'),
      jobArn: _.expectString,
      jobName: _.expectString,
      lastModifiedTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'lastModifiedTime'
      ),
      status: _.expectString,
    });
  }, 'de_ModelCustomizationJobSummary'),
  dw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return uw4(I, B);
      });
  }, 'de_ModelImportJobSummaries'),
  uw4 = d((A, B) => {
    return _.take(A, {
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      endTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'endTime'),
      importedModelArn: _.expectString,
      importedModelName: _.expectString,
      jobArn: _.expectString,
      jobName: _.expectString,
      lastModifiedTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'lastModifiedTime'
      ),
      status: _.expectString,
    });
  }, 'de_ModelImportJobSummary'),
  pw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return cw4(I, B);
      });
  }, 'de_ModelInvocationJobSummaries'),
  cw4 = d((A, B) => {
    return _.take(A, {
      clientRequestToken: _.expectString,
      endTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'endTime'),
      inputDataConfig: d((Q) => _._json(d2.awsExpectUnion(Q)), 'inputDataConfig'),
      jobArn: _.expectString,
      jobExpirationTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'jobExpirationTime'
      ),
      jobName: _.expectString,
      lastModifiedTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'lastModifiedTime'
      ),
      message: _.expectString,
      modelId: _.expectString,
      outputDataConfig: d((Q) => _._json(d2.awsExpectUnion(Q)), 'outputDataConfig'),
      roleArn: _.expectString,
      status: _.expectString,
      submitTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'submitTime'),
      timeoutDurationInHours: _.expectInt32,
      vpcConfig: _._json,
    });
  }, 'de_ModelInvocationJobSummary'),
  lw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return iw4(I, B);
      });
  }, 'de_PromptRouterSummaries'),
  iw4 = d((A, B) => {
    return _.take(A, {
      createdAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'createdAt'),
      description: _.expectString,
      fallbackModel: _._json,
      models: _._json,
      promptRouterArn: _.expectString,
      promptRouterName: _.expectString,
      routingCriteria: d((Q) => C90(Q, B), 'routingCriteria'),
      status: _.expectString,
      type: _.expectString,
      updatedAt: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'updatedAt'),
    });
  }, 'de_PromptRouterSummary'),
  nw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return aw4(I, B);
      });
  }, 'de_ProvisionedModelSummaries'),
  aw4 = d((A, B) => {
    return _.take(A, {
      commitmentDuration: _.expectString,
      commitmentExpirationTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'commitmentExpirationTime'
      ),
      creationTime: d((Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)), 'creationTime'),
      desiredModelArn: _.expectString,
      desiredModelUnits: _.expectInt32,
      foundationModelArn: _.expectString,
      lastModifiedTime: d(
        (Q) => _.expectNonNull(_.parseRfc3339DateTimeWithOffset(Q)),
        'lastModifiedTime'
      ),
      modelArn: _.expectString,
      modelUnits: _.expectInt32,
      provisionedModelArn: _.expectString,
      provisionedModelName: _.expectString,
      status: _.expectString,
    });
  }, 'de_ProvisionedModelSummary'),
  sw4 = d((A, B) => {
    if (A.knowledgeBaseConfig != null)
      return { knowledgeBaseConfig: yw4(d2.awsExpectUnion(A.knowledgeBaseConfig), B) };
    if (A.precomputedRagSourceConfig != null)
      return {
        precomputedRagSourceConfig: _._json(d2.awsExpectUnion(A.precomputedRagSourceConfig)),
      };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_RAGConfig'),
  rw4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return sw4(d2.awsExpectUnion(I), B);
      });
  }, 'de_RagConfigs'),
  ow4 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return tw4(I, B);
      });
  }, 'de_RatingScale'),
  tw4 = d((A, B) => {
    return _.take(A, {
      definition: _.expectString,
      value: d((Q) => ew4(d2.awsExpectUnion(Q), B), 'value'),
    });
  }, 'de_RatingScaleItem'),
  ew4 = d((A, B) => {
    if (_.limitedParseFloat32(A.floatValue) !== void 0)
      return { floatValue: _.limitedParseFloat32(A.floatValue) };
    if (_.expectString(A.stringValue) !== void 0)
      return { stringValue: _.expectString(A.stringValue) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_RatingScaleItemValue'),
  J90 = d((A, B) => {
    if (A.andAll != null) return { andAll: $00(A.andAll, B) };
    if (A.equals != null) return { equals: iX(A.equals, B) };
    if (A.greaterThan != null) return { greaterThan: iX(A.greaterThan, B) };
    if (A.greaterThanOrEquals != null) return { greaterThanOrEquals: iX(A.greaterThanOrEquals, B) };
    if (A.in != null) return { in: iX(A.in, B) };
    if (A.lessThan != null) return { lessThan: iX(A.lessThan, B) };
    if (A.lessThanOrEquals != null) return { lessThanOrEquals: iX(A.lessThanOrEquals, B) };
    if (A.listContains != null) return { listContains: iX(A.listContains, B) };
    if (A.notEquals != null) return { notEquals: iX(A.notEquals, B) };
    if (A.notIn != null) return { notIn: iX(A.notIn, B) };
    if (A.orAll != null) return { orAll: $00(A.orAll, B) };
    if (A.startsWith != null) return { startsWith: iX(A.startsWith, B) };
    if (A.stringContains != null) return { stringContains: iX(A.stringContains, B) };
    return { $unknown: Object.entries(A)[0] };
  }, 'de_RetrievalFilter'),
  $00 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return J90(d2.awsExpectUnion(I), B);
      });
  }, 'de_RetrievalFilterList'),
  AE4 = d((A, B) => {
    return _.take(A, {
      externalSourcesConfiguration: d((Q) => Nw4(Q, B), 'externalSourcesConfiguration'),
      knowledgeBaseConfiguration: d((Q) => kw4(Q, B), 'knowledgeBaseConfiguration'),
      type: _.expectString,
    });
  }, 'de_RetrieveAndGenerateConfiguration'),
  BE4 = d((A, B) => {
    return _.take(A, {
      knowledgeBaseId: _.expectString,
      knowledgeBaseRetrievalConfiguration: d(
        (Q) => F90(Q, B),
        'knowledgeBaseRetrievalConfiguration'
      ),
    });
  }, 'de_RetrieveConfig'),
  C90 = d((A, B) => {
    return _.take(A, { responseQualityDifference: _.limitedParseDouble });
  }, 'de_RoutingCriteria'),
  QE4 = d((A, B) => {
    return _.take(A, {
      maxTokens: _.expectInt32,
      stopSequences: _._json,
      temperature: _.limitedParseFloat32,
      topP: _.limitedParseFloat32,
    });
  }, 'de_TextInferenceConfig'),
  X90 = d((A, B) => {
    return _.take(A, { trainingLoss: _.limitedParseFloat32 });
  }, 'de_TrainingMetrics'),
  V90 = d((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return IE4(I, B);
      });
  }, 'de_ValidationMetrics'),
  IE4 = d((A, B) => {
    return _.take(A, { validationLoss: _.limitedParseFloat32 });
  }, 'de_ValidatorMetric'),
  L2 = d(
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
  q00 = 'applicationTypeEquals',
  M00 = 'byCustomizationType',
  L00 = 'byInferenceType',
  R00 = 'baseModelArnEquals',
  O00 = 'byOutputModality',
  T00 = 'byProvider',
  JY = 'creationTimeAfter',
  CY = 'creationTimeBefore',
  P00 = 'foundationModelArnEquals',
  S00 = 'guardrailIdentifier',
  M31 = 'guardrailVersion',
  _00 = 'isOwned',
  j00 = 'modelArnEquals',
  xB = 'maxResults',
  GE4 = 'modelSourceEquals',
  DE4 = 'modelSourceIdentifier',
  XY = 'nameContains',
  fB = 'nextToken',
  ZE4 = 'outputModelNameContains',
  y00 = 'sourceAccountEquals',
  nG = 'sortBy',
  yJ = 'statusEquals',
  k00 = 'sourceModelArnEquals',
  aG = 'sortOrder',
  x00 = 'submitTimeAfter',
  f00 = 'submitTimeBefore',
  r_1 = 'type',
  YE4 = 'typeEquals',
  WE4 = 'targetModelNameContains',
  K90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'BatchDeleteEvaluationJob', {})
    .n('BedrockClient', 'BatchDeleteEvaluationJobCommand')
    .f(i00, s00)
    .ser(FK4)
    .de(KH4)
    .build() {
    static {
      d(this, 'BatchDeleteEvaluationJobCommand');
    }
  },
  H90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateEvaluationJob', {})
    .n('BedrockClient', 'CreateEvaluationJobCommand')
    .f(A90, void 0)
    .ser(JK4)
    .de(HH4)
    .build() {
    static {
      d(this, 'CreateEvaluationJobCommand');
    }
  },
  z90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateGuardrail', {})
    .n('BedrockClient', 'CreateGuardrailCommand')
    .f(w20, void 0)
    .ser(CK4)
    .de(zH4)
    .build() {
    static {
      d(this, 'CreateGuardrailCommand');
    }
  },
  w90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateGuardrailVersion', {})
    .n('BedrockClient', 'CreateGuardrailVersionCommand')
    .f(E20, void 0)
    .ser(XK4)
    .de(wH4)
    .build() {
    static {
      d(this, 'CreateGuardrailVersionCommand');
    }
  },
  E90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateInferenceProfile', {})
    .n('BedrockClient', 'CreateInferenceProfileCommand')
    .f(y20, void 0)
    .ser(VK4)
    .de(EH4)
    .build() {
    static {
      d(this, 'CreateInferenceProfileCommand');
    }
  },
  U90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'CreateMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(KK4)
    .de(UH4)
    .build() {
    static {
      d(this, 'CreateMarketplaceModelEndpointCommand');
    }
  },
  N90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateModelCopyJob', {})
    .n('BedrockClient', 'CreateModelCopyJobCommand')
    .f(void 0, void 0)
    .ser(HK4)
    .de(NH4)
    .build() {
    static {
      d(this, 'CreateModelCopyJobCommand');
    }
  },
  $90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateModelCustomizationJob', {})
    .n('BedrockClient', 'CreateModelCustomizationJobCommand')
    .f(i20, void 0)
    .ser(zK4)
    .de($H4)
    .build() {
    static {
      d(this, 'CreateModelCustomizationJobCommand');
    }
  },
  q90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateModelImportJob', {})
    .n('BedrockClient', 'CreateModelImportJobCommand')
    .f(void 0, void 0)
    .ser(wK4)
    .de(qH4)
    .build() {
    static {
      d(this, 'CreateModelImportJobCommand');
    }
  },
  M90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateModelInvocationJob', {})
    .n('BedrockClient', 'CreateModelInvocationJobCommand')
    .f(void 0, void 0)
    .ser(EK4)
    .de(MH4)
    .build() {
    static {
      d(this, 'CreateModelInvocationJobCommand');
    }
  },
  L90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreatePromptRouter', {})
    .n('BedrockClient', 'CreatePromptRouterCommand')
    .f(u20, void 0)
    .ser(UK4)
    .de(LH4)
    .build() {
    static {
      d(this, 'CreatePromptRouterCommand');
    }
  },
  R90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'CreateProvisionedModelThroughput', {})
    .n('BedrockClient', 'CreateProvisionedModelThroughputCommand')
    .f(void 0, void 0)
    .ser(NK4)
    .de(RH4)
    .build() {
    static {
      d(this, 'CreateProvisionedModelThroughputCommand');
    }
  },
  O90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteCustomModel', {})
    .n('BedrockClient', 'DeleteCustomModelCommand')
    .f(void 0, void 0)
    .ser($K4)
    .de(OH4)
    .build() {
    static {
      d(this, 'DeleteCustomModelCommand');
    }
  },
  T90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteGuardrail', {})
    .n('BedrockClient', 'DeleteGuardrailCommand')
    .f(void 0, void 0)
    .ser(qK4)
    .de(TH4)
    .build() {
    static {
      d(this, 'DeleteGuardrailCommand');
    }
  },
  P90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteImportedModel', {})
    .n('BedrockClient', 'DeleteImportedModelCommand')
    .f(void 0, void 0)
    .ser(MK4)
    .de(PH4)
    .build() {
    static {
      d(this, 'DeleteImportedModelCommand');
    }
  },
  S90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteInferenceProfile', {})
    .n('BedrockClient', 'DeleteInferenceProfileCommand')
    .f(void 0, void 0)
    .ser(LK4)
    .de(SH4)
    .build() {
    static {
      d(this, 'DeleteInferenceProfileCommand');
    }
  },
  _90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'DeleteMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(RK4)
    .de(_H4)
    .build() {
    static {
      d(this, 'DeleteMarketplaceModelEndpointCommand');
    }
  },
  j90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteModelInvocationLoggingConfiguration', {})
    .n('BedrockClient', 'DeleteModelInvocationLoggingConfigurationCommand')
    .f(void 0, void 0)
    .ser(OK4)
    .de(jH4)
    .build() {
    static {
      d(this, 'DeleteModelInvocationLoggingConfigurationCommand');
    }
  },
  y90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeletePromptRouter', {})
    .n('BedrockClient', 'DeletePromptRouterCommand')
    .f(void 0, void 0)
    .ser(TK4)
    .de(yH4)
    .build() {
    static {
      d(this, 'DeletePromptRouterCommand');
    }
  },
  k90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeleteProvisionedModelThroughput', {})
    .n('BedrockClient', 'DeleteProvisionedModelThroughputCommand')
    .f(void 0, void 0)
    .ser(PK4)
    .de(kH4)
    .build() {
    static {
      d(this, 'DeleteProvisionedModelThroughputCommand');
    }
  },
  x90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'DeregisterMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'DeregisterMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(SK4)
    .de(xH4)
    .build() {
    static {
      d(this, 'DeregisterMarketplaceModelEndpointCommand');
    }
  },
  f90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetCustomModel', {})
    .n('BedrockClient', 'GetCustomModelCommand')
    .f(void 0, d20)
    .ser(_K4)
    .de(fH4)
    .build() {
    static {
      d(this, 'GetCustomModelCommand');
    }
  },
  v90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetEvaluationJob', {})
    .n('BedrockClient', 'GetEvaluationJobCommand')
    .f(J20, B90)
    .ser(jK4)
    .de(vH4)
    .build() {
    static {
      d(this, 'GetEvaluationJobCommand');
    }
  },
  b90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetFoundationModel', {})
    .n('BedrockClient', 'GetFoundationModelCommand')
    .f(void 0, void 0)
    .ser(yK4)
    .de(bH4)
    .build() {
    static {
      d(this, 'GetFoundationModelCommand');
    }
  },
  g90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetGuardrail', {})
    .n('BedrockClient', 'GetGuardrailCommand')
    .f(void 0, P20)
    .ser(kK4)
    .de(gH4)
    .build() {
    static {
      d(this, 'GetGuardrailCommand');
    }
  },
  h90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetImportedModel', {})
    .n('BedrockClient', 'GetImportedModelCommand')
    .f(void 0, void 0)
    .ser(xK4)
    .de(hH4)
    .build() {
    static {
      d(this, 'GetImportedModelCommand');
    }
  },
  m90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetInferenceProfile', {})
    .n('BedrockClient', 'GetInferenceProfileCommand')
    .f(void 0, k20)
    .ser(fK4)
    .de(mH4)
    .build() {
    static {
      d(this, 'GetInferenceProfileCommand');
    }
  },
  d90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'GetMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(vK4)
    .de(dH4)
    .build() {
    static {
      d(this, 'GetMarketplaceModelEndpointCommand');
    }
  },
  u90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetModelCopyJob', {})
    .n('BedrockClient', 'GetModelCopyJobCommand')
    .f(void 0, void 0)
    .ser(bK4)
    .de(uH4)
    .build() {
    static {
      d(this, 'GetModelCopyJobCommand');
    }
  },
  p90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetModelCustomizationJob', {})
    .n('BedrockClient', 'GetModelCustomizationJobCommand')
    .f(void 0, n20)
    .ser(gK4)
    .de(pH4)
    .build() {
    static {
      d(this, 'GetModelCustomizationJobCommand');
    }
  },
  c90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetModelImportJob', {})
    .n('BedrockClient', 'GetModelImportJobCommand')
    .f(void 0, void 0)
    .ser(hK4)
    .de(cH4)
    .build() {
    static {
      d(this, 'GetModelImportJobCommand');
    }
  },
  l90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetModelInvocationJob', {})
    .n('BedrockClient', 'GetModelInvocationJobCommand')
    .f(void 0, v20)
    .ser(mK4)
    .de(lH4)
    .build() {
    static {
      d(this, 'GetModelInvocationJobCommand');
    }
  },
  i90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetModelInvocationLoggingConfiguration', {})
    .n('BedrockClient', 'GetModelInvocationLoggingConfigurationCommand')
    .f(void 0, void 0)
    .ser(dK4)
    .de(iH4)
    .build() {
    static {
      d(this, 'GetModelInvocationLoggingConfigurationCommand');
    }
  },
  n90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetPromptRouter', {})
    .n('BedrockClient', 'GetPromptRouterCommand')
    .f(void 0, p20)
    .ser(uK4)
    .de(nH4)
    .build() {
    static {
      d(this, 'GetPromptRouterCommand');
    }
  },
  a90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'GetProvisionedModelThroughput', {})
    .n('BedrockClient', 'GetProvisionedModelThroughputCommand')
    .f(void 0, void 0)
    .ser(pK4)
    .de(aH4)
    .build() {
    static {
      d(this, 'GetProvisionedModelThroughputCommand');
    }
  },
  Zj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListCustomModels', {})
    .n('BedrockClient', 'ListCustomModelsCommand')
    .f(void 0, void 0)
    .ser(cK4)
    .de(sH4)
    .build() {
    static {
      d(this, 'ListCustomModelsCommand');
    }
  },
  Yj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListEvaluationJobs', {})
    .n('BedrockClient', 'ListEvaluationJobsCommand')
    .f(void 0, void 0)
    .ser(lK4)
    .de(rH4)
    .build() {
    static {
      d(this, 'ListEvaluationJobsCommand');
    }
  },
  s90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListFoundationModels', {})
    .n('BedrockClient', 'ListFoundationModelsCommand')
    .f(void 0, void 0)
    .ser(iK4)
    .de(oH4)
    .build() {
    static {
      d(this, 'ListFoundationModelsCommand');
    }
  },
  Wj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListGuardrails', {})
    .n('BedrockClient', 'ListGuardrailsCommand')
    .f(void 0, _20)
    .ser(nK4)
    .de(tH4)
    .build() {
    static {
      d(this, 'ListGuardrailsCommand');
    }
  },
  Fj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListImportedModels', {})
    .n('BedrockClient', 'ListImportedModelsCommand')
    .f(void 0, void 0)
    .ser(aK4)
    .de(eH4)
    .build() {
    static {
      d(this, 'ListImportedModelsCommand');
    }
  },
  Jj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListInferenceProfiles', {})
    .n('BedrockClient', 'ListInferenceProfilesCommand')
    .f(void 0, f20)
    .ser(sK4)
    .de(Az4)
    .build() {
    static {
      d(this, 'ListInferenceProfilesCommand');
    }
  },
  Cj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListMarketplaceModelEndpoints', {})
    .n('BedrockClient', 'ListMarketplaceModelEndpointsCommand')
    .f(void 0, void 0)
    .ser(rK4)
    .de(Bz4)
    .build() {
    static {
      d(this, 'ListMarketplaceModelEndpointsCommand');
    }
  },
  Xj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListModelCopyJobs', {})
    .n('BedrockClient', 'ListModelCopyJobsCommand')
    .f(void 0, void 0)
    .ser(oK4)
    .de(Qz4)
    .build() {
    static {
      d(this, 'ListModelCopyJobsCommand');
    }
  },
  Vj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListModelCustomizationJobs', {})
    .n('BedrockClient', 'ListModelCustomizationJobsCommand')
    .f(void 0, void 0)
    .ser(tK4)
    .de(Iz4)
    .build() {
    static {
      d(this, 'ListModelCustomizationJobsCommand');
    }
  },
  Kj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListModelImportJobs', {})
    .n('BedrockClient', 'ListModelImportJobsCommand')
    .f(void 0, void 0)
    .ser(eK4)
    .de(Gz4)
    .build() {
    static {
      d(this, 'ListModelImportJobsCommand');
    }
  },
  Hj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListModelInvocationJobs', {})
    .n('BedrockClient', 'ListModelInvocationJobsCommand')
    .f(void 0, g20)
    .ser(AH4)
    .de(Dz4)
    .build() {
    static {
      d(this, 'ListModelInvocationJobsCommand');
    }
  },
  zj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListPromptRouters', {})
    .n('BedrockClient', 'ListPromptRoutersCommand')
    .f(void 0, l20)
    .ser(BH4)
    .de(Zz4)
    .build() {
    static {
      d(this, 'ListPromptRoutersCommand');
    }
  },
  wj1 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListProvisionedModelThroughputs', {})
    .n('BedrockClient', 'ListProvisionedModelThroughputsCommand')
    .f(void 0, void 0)
    .ser(QH4)
    .de(Yz4)
    .build() {
    static {
      d(this, 'ListProvisionedModelThroughputsCommand');
    }
  },
  r90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'ListTagsForResource', {})
    .n('BedrockClient', 'ListTagsForResourceCommand')
    .f(void 0, void 0)
    .ser(IH4)
    .de(Wz4)
    .build() {
    static {
      d(this, 'ListTagsForResourceCommand');
    }
  },
  o90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'PutModelInvocationLoggingConfiguration', {})
    .n('BedrockClient', 'PutModelInvocationLoggingConfigurationCommand')
    .f(void 0, void 0)
    .ser(GH4)
    .de(Fz4)
    .build() {
    static {
      d(this, 'PutModelInvocationLoggingConfigurationCommand');
    }
  },
  t90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'RegisterMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'RegisterMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(DH4)
    .de(Jz4)
    .build() {
    static {
      d(this, 'RegisterMarketplaceModelEndpointCommand');
    }
  },
  e90 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'StopEvaluationJob', {})
    .n('BedrockClient', 'StopEvaluationJobCommand')
    .f(C20, void 0)
    .ser(ZH4)
    .de(Cz4)
    .build() {
    static {
      d(this, 'StopEvaluationJobCommand');
    }
  },
  A40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'StopModelCustomizationJob', {})
    .n('BedrockClient', 'StopModelCustomizationJobCommand')
    .f(void 0, void 0)
    .ser(YH4)
    .de(Xz4)
    .build() {
    static {
      d(this, 'StopModelCustomizationJobCommand');
    }
  },
  B40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'StopModelInvocationJob', {})
    .n('BedrockClient', 'StopModelInvocationJobCommand')
    .f(void 0, void 0)
    .ser(WH4)
    .de(Vz4)
    .build() {
    static {
      d(this, 'StopModelInvocationJobCommand');
    }
  },
  Q40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'TagResource', {})
    .n('BedrockClient', 'TagResourceCommand')
    .f(void 0, void 0)
    .ser(FH4)
    .de(Kz4)
    .build() {
    static {
      d(this, 'TagResourceCommand');
    }
  },
  I40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'UntagResource', {})
    .n('BedrockClient', 'UntagResourceCommand')
    .f(void 0, void 0)
    .ser(JH4)
    .de(Hz4)
    .build() {
    static {
      d(this, 'UntagResourceCommand');
    }
  },
  G40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'UpdateGuardrail', {})
    .n('BedrockClient', 'UpdateGuardrailCommand')
    .f(j20, void 0)
    .ser(CH4)
    .de(zz4)
    .build() {
    static {
      d(this, 'UpdateGuardrailCommand');
    }
  },
  D40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'UpdateMarketplaceModelEndpoint', {})
    .n('BedrockClient', 'UpdateMarketplaceModelEndpointCommand')
    .f(void 0, void 0)
    .ser(XH4)
    .de(wz4)
    .build() {
    static {
      d(this, 'UpdateMarketplaceModelEndpointCommand');
    }
  },
  Z40 = class extends _.Command.classBuilder()
    .ep(D9)
    .m(function (A, B, Q, I) {
      return [
        Z9.getSerdePlugin(Q, this.serialize, this.deserialize),
        A9.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AmazonBedrockControlPlaneService', 'UpdateProvisionedModelThroughput', {})
    .n('BedrockClient', 'UpdateProvisionedModelThroughputCommand')
    .f(void 0, void 0)
    .ser(VH4)
    .de(Ez4)
    .build() {
    static {
      d(this, 'UpdateProvisionedModelThroughputCommand');
    }
  },
  FE4 = {
    BatchDeleteEvaluationJobCommand: K90,
    CreateEvaluationJobCommand: H90,
    CreateGuardrailCommand: z90,
    CreateGuardrailVersionCommand: w90,
    CreateInferenceProfileCommand: E90,
    CreateMarketplaceModelEndpointCommand: U90,
    CreateModelCopyJobCommand: N90,
    CreateModelCustomizationJobCommand: $90,
    CreateModelImportJobCommand: q90,
    CreateModelInvocationJobCommand: M90,
    CreatePromptRouterCommand: L90,
    CreateProvisionedModelThroughputCommand: R90,
    DeleteCustomModelCommand: O90,
    DeleteGuardrailCommand: T90,
    DeleteImportedModelCommand: P90,
    DeleteInferenceProfileCommand: S90,
    DeleteMarketplaceModelEndpointCommand: _90,
    DeleteModelInvocationLoggingConfigurationCommand: j90,
    DeletePromptRouterCommand: y90,
    DeleteProvisionedModelThroughputCommand: k90,
    DeregisterMarketplaceModelEndpointCommand: x90,
    GetCustomModelCommand: f90,
    GetEvaluationJobCommand: v90,
    GetFoundationModelCommand: b90,
    GetGuardrailCommand: g90,
    GetImportedModelCommand: h90,
    GetInferenceProfileCommand: m90,
    GetMarketplaceModelEndpointCommand: d90,
    GetModelCopyJobCommand: u90,
    GetModelCustomizationJobCommand: p90,
    GetModelImportJobCommand: c90,
    GetModelInvocationJobCommand: l90,
    GetModelInvocationLoggingConfigurationCommand: i90,
    GetPromptRouterCommand: n90,
    GetProvisionedModelThroughputCommand: a90,
    ListCustomModelsCommand: Zj1,
    ListEvaluationJobsCommand: Yj1,
    ListFoundationModelsCommand: s90,
    ListGuardrailsCommand: Wj1,
    ListImportedModelsCommand: Fj1,
    ListInferenceProfilesCommand: Jj1,
    ListMarketplaceModelEndpointsCommand: Cj1,
    ListModelCopyJobsCommand: Xj1,
    ListModelCustomizationJobsCommand: Vj1,
    ListModelImportJobsCommand: Kj1,
    ListModelInvocationJobsCommand: Hj1,
    ListPromptRoutersCommand: zj1,
    ListProvisionedModelThroughputsCommand: wj1,
    ListTagsForResourceCommand: r90,
    PutModelInvocationLoggingConfigurationCommand: o90,
    RegisterMarketplaceModelEndpointCommand: t90,
    StopEvaluationJobCommand: e90,
    StopModelCustomizationJobCommand: A40,
    StopModelInvocationJobCommand: B40,
    TagResourceCommand: Q40,
    UntagResourceCommand: I40,
    UpdateGuardrailCommand: G40,
    UpdateMarketplaceModelEndpointCommand: D40,
    UpdateProvisionedModelThroughputCommand: Z40,
  },
  Y40 = class extends VY {
    static {
      d(this, 'Bedrock');
    }
  };
_.createAggregatedClient(FE4, Y40);
var JE4 = W2.createPaginator(VY, Zj1, 'nextToken', 'nextToken', 'maxResults'),
  CE4 = W2.createPaginator(VY, Yj1, 'nextToken', 'nextToken', 'maxResults'),
  XE4 = W2.createPaginator(VY, Wj1, 'nextToken', 'nextToken', 'maxResults'),
  VE4 = W2.createPaginator(VY, Fj1, 'nextToken', 'nextToken', 'maxResults'),
  KE4 = W2.createPaginator(VY, Jj1, 'nextToken', 'nextToken', 'maxResults'),
  HE4 = W2.createPaginator(VY, Cj1, 'nextToken', 'nextToken', 'maxResults'),
  zE4 = W2.createPaginator(VY, Xj1, 'nextToken', 'nextToken', 'maxResults'),
  wE4 = W2.createPaginator(VY, Vj1, 'nextToken', 'nextToken', 'maxResults'),
  EE4 = W2.createPaginator(VY, Kj1, 'nextToken', 'nextToken', 'maxResults'),
  UE4 = W2.createPaginator(VY, Hj1, 'nextToken', 'nextToken', 'maxResults'),
  NE4 = W2.createPaginator(VY, zj1, 'nextToken', 'nextToken', 'maxResults'),
  $E4 = W2.createPaginator(VY, wj1, 'nextToken', 'nextToken', 'maxResults');

// Module: IM
// Params: fm5,gbA

var { defineProperty: c51, getOwnPropertyDescriptor: ca9, getOwnPropertyNames: la9 } = Object,
  ia9 = Object.prototype.hasOwnProperty,
  qf = (A, B) => c51(A, 'name', { value: B, configurable: !0 }),
  na9 = (A, B) => {
    for (var Q in B) c51(A, Q, { get: B[Q], enumerable: !0 });
  },
  aa9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of la9(B))
        if (!ia9.call(A, G) && G !== Q)
          c51(A, G, { get: () => B[G], enumerable: !(I = ca9(B, G)) || I.enumerable });
    }
    return A;
  },
  sa9 = (A) => aa9(c51({}, '__esModule', { value: !0 }), A),
  _bA = {};
na9(_bA, {
  ConditionObject: () => p8.ConditionObject,
  DeprecatedObject: () => p8.DeprecatedObject,
  EndpointError: () => p8.EndpointError,
  EndpointObject: () => p8.EndpointObject,
  EndpointObjectHeaders: () => p8.EndpointObjectHeaders,
  EndpointObjectProperties: () => p8.EndpointObjectProperties,
  EndpointParams: () => p8.EndpointParams,
  EndpointResolverOptions: () => p8.EndpointResolverOptions,
  EndpointRuleObject: () => p8.EndpointRuleObject,
  ErrorRuleObject: () => p8.ErrorRuleObject,
  EvaluateOptions: () => p8.EvaluateOptions,
  Expression: () => p8.Expression,
  FunctionArgv: () => p8.FunctionArgv,
  FunctionObject: () => p8.FunctionObject,
  FunctionReturn: () => p8.FunctionReturn,
  ParameterObject: () => p8.ParameterObject,
  ReferenceObject: () => p8.ReferenceObject,
  ReferenceRecord: () => p8.ReferenceRecord,
  RuleSetObject: () => p8.RuleSetObject,
  RuleSetRules: () => p8.RuleSetRules,
  TreeRuleObject: () => p8.TreeRuleObject,
  awsEndpointFunctions: () => bbA,
  getUserAgentPrefix: () => ea9,
  isIpAddress: () => p8.isIpAddress,
  partition: () => fbA,
  resolveEndpoint: () => p8.resolveEndpoint,
  setPartitionInfo: () => vbA,
  useDefaultPartitionInfo: () => ta9,
});
gbA.exports = sa9(_bA);
var p8 = QM(),
  jbA = qf((A, B = !1) => {
    if (B) {
      for (let Q of A.split('.')) if (!jbA(Q)) return !1;
      return !0;
    }
    if (!p8.isValidHostLabel(A)) return !1;
    if (A.length < 3 || A.length > 63) return !1;
    if (A !== A.toLowerCase()) return !1;
    if (p8.isIpAddress(A)) return !1;
    return !0;
  }, 'isVirtualHostableS3Bucket'),
  SbA = ':',
  ra9 = '/',
  oa9 = qf((A) => {
    let B = A.split(SbA);
    if (B.length < 6) return null;
    let [Q, I, G, D, Z, ...Y] = B;
    if (Q !== 'arn' || I === '' || G === '' || Y.join(SbA) === '') return null;
    let W = Y.map((F) => F.split(ra9)).flat();
    return { partition: I, service: G, region: D, accountId: Z, resourceId: W };
  }, 'parseArn'),
  ybA = {
    partitions: [
      {
        id: 'aws',
        outputs: {
          dnsSuffix: 'amazonaws.com',
          dualStackDnsSuffix: 'api.aws',
          implicitGlobalRegion: 'us-east-1',
          name: 'aws',
          supportsDualStack: !0,
          supportsFIPS: !0,
        },
        regionRegex: '^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$',
        regions: {
          'af-south-1': { description: 'Africa (Cape Town)' },
          'ap-east-1': { description: 'Asia Pacific (Hong Kong)' },
          'ap-northeast-1': { description: 'Asia Pacific (Tokyo)' },
          'ap-northeast-2': { description: 'Asia Pacific (Seoul)' },
          'ap-northeast-3': { description: 'Asia Pacific (Osaka)' },
          'ap-south-1': { description: 'Asia Pacific (Mumbai)' },
          'ap-south-2': { description: 'Asia Pacific (Hyderabad)' },
          'ap-southeast-1': { description: 'Asia Pacific (Singapore)' },
          'ap-southeast-2': { description: 'Asia Pacific (Sydney)' },
          'ap-southeast-3': { description: 'Asia Pacific (Jakarta)' },
          'ap-southeast-4': { description: 'Asia Pacific (Melbourne)' },
          'ap-southeast-5': { description: 'Asia Pacific (Malaysia)' },
          'ap-southeast-7': { description: 'Asia Pacific (Thailand)' },
          'aws-global': { description: 'AWS Standard global region' },
          'ca-central-1': { description: 'Canada (Central)' },
          'ca-west-1': { description: 'Canada West (Calgary)' },
          'eu-central-1': { description: 'Europe (Frankfurt)' },
          'eu-central-2': { description: 'Europe (Zurich)' },
          'eu-north-1': { description: 'Europe (Stockholm)' },
          'eu-south-1': { description: 'Europe (Milan)' },
          'eu-south-2': { description: 'Europe (Spain)' },
          'eu-west-1': { description: 'Europe (Ireland)' },
          'eu-west-2': { description: 'Europe (London)' },
          'eu-west-3': { description: 'Europe (Paris)' },
          'il-central-1': { description: 'Israel (Tel Aviv)' },
          'me-central-1': { description: 'Middle East (UAE)' },
          'me-south-1': { description: 'Middle East (Bahrain)' },
          'mx-central-1': { description: 'Mexico (Central)' },
          'sa-east-1': { description: 'South America (Sao Paulo)' },
          'us-east-1': { description: 'US East (N. Virginia)' },
          'us-east-2': { description: 'US East (Ohio)' },
          'us-west-1': { description: 'US West (N. California)' },
          'us-west-2': { description: 'US West (Oregon)' },
        },
      },
      {
        id: 'aws-cn',
        outputs: {
          dnsSuffix: 'amazonaws.com.cn',
          dualStackDnsSuffix: 'api.amazonwebservices.com.cn',
          implicitGlobalRegion: 'cn-northwest-1',
          name: 'aws-cn',
          supportsDualStack: !0,
          supportsFIPS: !0,
        },
        regionRegex: '^cn\\-\\w+\\-\\d+$',
        regions: {
          'aws-cn-global': { description: 'AWS China global region' },
          'cn-north-1': { description: 'China (Beijing)' },
          'cn-northwest-1': { description: 'China (Ningxia)' },
        },
      },
      {
        id: 'aws-us-gov',
        outputs: {
          dnsSuffix: 'amazonaws.com',
          dualStackDnsSuffix: 'api.aws',
          implicitGlobalRegion: 'us-gov-west-1',
          name: 'aws-us-gov',
          supportsDualStack: !0,
          supportsFIPS: !0,
        },
        regionRegex: '^us\\-gov\\-\\w+\\-\\d+$',
        regions: {
          'aws-us-gov-global': { description: 'AWS GovCloud (US) global region' },
          'us-gov-east-1': { description: 'AWS GovCloud (US-East)' },
          'us-gov-west-1': { description: 'AWS GovCloud (US-West)' },
        },
      },
      {
        id: 'aws-iso',
        outputs: {
          dnsSuffix: 'c2s.ic.gov',
          dualStackDnsSuffix: 'c2s.ic.gov',
          implicitGlobalRegion: 'us-iso-east-1',
          name: 'aws-iso',
          supportsDualStack: !1,
          supportsFIPS: !0,
        },
        regionRegex: '^us\\-iso\\-\\w+\\-\\d+$',
        regions: {
          'aws-iso-global': { description: 'AWS ISO (US) global region' },
          'us-iso-east-1': { description: 'US ISO East' },
          'us-iso-west-1': { description: 'US ISO WEST' },
        },
      },
      {
        id: 'aws-iso-b',
        outputs: {
          dnsSuffix: 'sc2s.sgov.gov',
          dualStackDnsSuffix: 'sc2s.sgov.gov',
          implicitGlobalRegion: 'us-isob-east-1',
          name: 'aws-iso-b',
          supportsDualStack: !1,
          supportsFIPS: !0,
        },
        regionRegex: '^us\\-isob\\-\\w+\\-\\d+$',
        regions: {
          'aws-iso-b-global': { description: 'AWS ISOB (US) global region' },
          'us-isob-east-1': { description: 'US ISOB East (Ohio)' },
        },
      },
      {
        id: 'aws-iso-e',
        outputs: {
          dnsSuffix: 'cloud.adc-e.uk',
          dualStackDnsSuffix: 'cloud.adc-e.uk',
          implicitGlobalRegion: 'eu-isoe-west-1',
          name: 'aws-iso-e',
          supportsDualStack: !1,
          supportsFIPS: !0,
        },
        regionRegex: '^eu\\-isoe\\-\\w+\\-\\d+$',
        regions: {
          'aws-iso-e-global': { description: 'AWS ISOE (Europe) global region' },
          'eu-isoe-west-1': { description: 'EU ISOE West' },
        },
      },
      {
        id: 'aws-iso-f',
        outputs: {
          dnsSuffix: 'csp.hci.ic.gov',
          dualStackDnsSuffix: 'csp.hci.ic.gov',
          implicitGlobalRegion: 'us-isof-south-1',
          name: 'aws-iso-f',
          supportsDualStack: !1,
          supportsFIPS: !0,
        },
        regionRegex: '^us\\-isof\\-\\w+\\-\\d+$',
        regions: {
          'aws-iso-f-global': { description: 'AWS ISOF global region' },
          'us-isof-east-1': { description: 'US ISOF EAST' },
          'us-isof-south-1': { description: 'US ISOF SOUTH' },
        },
      },
      {
        id: 'aws-eusc',
        outputs: {
          dnsSuffix: 'amazonaws.eu',
          dualStackDnsSuffix: 'amazonaws.eu',
          implicitGlobalRegion: 'eusc-de-east-1',
          name: 'aws-eusc',
          supportsDualStack: !1,
          supportsFIPS: !0,
        },
        regionRegex: '^eusc\\-(de)\\-\\w+\\-\\d+$',
        regions: { 'eusc-de-east-1': { description: 'EU (Germany)' } },
      },
    ],
    version: '1.1',
  },
  kbA = ybA,
  xbA = '',
  fbA = qf((A) => {
    let { partitions: B } = kbA;
    for (let I of B) {
      let { regions: G, outputs: D } = I;
      for (let [Z, Y] of Object.entries(G)) if (Z === A) return { ...D, ...Y };
    }
    for (let I of B) {
      let { regionRegex: G, outputs: D } = I;
      if (new RegExp(G).test(A)) return { ...D };
    }
    let Q = B.find((I) => I.id === 'aws');
    if (!Q)
      throw new Error(
        "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
      );
    return { ...Q.outputs };
  }, 'partition'),
  vbA = qf((A, B = '') => {
    ((kbA = A), (xbA = B));
  }, 'setPartitionInfo'),
  ta9 = qf(() => {
    vbA(ybA, '');
  }, 'useDefaultPartitionInfo'),
  ea9 = qf(() => xbA, 'getUserAgentPrefix'),
  bbA = { isVirtualHostableS3Bucket: jbA, parseArn: oa9, partition: fbA };
p8.customEndpointFunctions.aws = bbA;

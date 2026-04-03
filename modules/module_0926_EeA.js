// Module: EeA
// Params: zeA

Object.defineProperty(zeA, '__esModule', { value: !0 });
zeA.ruleSet = void 0;
var ZeA = 'required',
  b4 = 'type',
  H5 = 'fn',
  z5 = 'argv',
  qM = 'ref',
  stA = !1,
  SS1 = !0,
  $M = 'booleanEquals',
  eI = 'stringEquals',
  YeA = 'sigv4',
  WeA = 'sts',
  FeA = 'us-east-1',
  kB = 'endpoint',
  rtA = 'https://sts.{Region}.{PartitionResult#dnsSuffix}',
  nH = 'tree',
  Zv = 'error',
  jS1 = 'getAttr',
  otA = { [ZeA]: !1, [b4]: 'String' },
  _S1 = { [ZeA]: !0, default: !1, [b4]: 'Boolean' },
  JeA = { [qM]: 'Endpoint' },
  ttA = { [H5]: 'isSet', [z5]: [{ [qM]: 'Region' }] },
  AG = { [qM]: 'Region' },
  etA = { [H5]: 'aws.partition', [z5]: [AG], assign: 'PartitionResult' },
  CeA = { [qM]: 'UseFIPS' },
  XeA = { [qM]: 'UseDualStack' },
  iG = {
    url: 'https://sts.amazonaws.com',
    properties: { authSchemes: [{ name: YeA, signingName: WeA, signingRegion: FeA }] },
    headers: {},
  },
  mW = {},
  AeA = { conditions: [{ [H5]: eI, [z5]: [AG, 'aws-global'] }], [kB]: iG, [b4]: kB },
  VeA = { [H5]: $M, [z5]: [CeA, !0] },
  KeA = { [H5]: $M, [z5]: [XeA, !0] },
  BeA = { [H5]: jS1, [z5]: [{ [qM]: 'PartitionResult' }, 'supportsFIPS'] },
  HeA = { [qM]: 'PartitionResult' },
  QeA = { [H5]: $M, [z5]: [!0, { [H5]: jS1, [z5]: [HeA, 'supportsDualStack'] }] },
  IeA = [{ [H5]: 'isSet', [z5]: [JeA] }],
  GeA = [VeA],
  DeA = [KeA],
  DW4 = {
    version: '1.0',
    parameters: {
      Region: otA,
      UseDualStack: _S1,
      UseFIPS: _S1,
      Endpoint: otA,
      UseGlobalEndpoint: _S1,
    },
    rules: [
      {
        conditions: [
          { [H5]: $M, [z5]: [{ [qM]: 'UseGlobalEndpoint' }, SS1] },
          { [H5]: 'not', [z5]: IeA },
          ttA,
          etA,
          { [H5]: $M, [z5]: [CeA, stA] },
          { [H5]: $M, [z5]: [XeA, stA] },
        ],
        rules: [
          { conditions: [{ [H5]: eI, [z5]: [AG, 'ap-northeast-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'ap-south-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'ap-southeast-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'ap-southeast-2'] }], endpoint: iG, [b4]: kB },
          AeA,
          { conditions: [{ [H5]: eI, [z5]: [AG, 'ca-central-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'eu-central-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'eu-north-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'eu-west-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'eu-west-2'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'eu-west-3'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'sa-east-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, FeA] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'us-east-2'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'us-west-1'] }], endpoint: iG, [b4]: kB },
          { conditions: [{ [H5]: eI, [z5]: [AG, 'us-west-2'] }], endpoint: iG, [b4]: kB },
          {
            endpoint: {
              url: rtA,
              properties: {
                authSchemes: [{ name: YeA, signingName: WeA, signingRegion: '{Region}' }],
              },
              headers: mW,
            },
            [b4]: kB,
          },
        ],
        [b4]: nH,
      },
      {
        conditions: IeA,
        rules: [
          {
            conditions: GeA,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            [b4]: Zv,
          },
          {
            conditions: DeA,
            error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
            [b4]: Zv,
          },
          { endpoint: { url: JeA, properties: mW, headers: mW }, [b4]: kB },
        ],
        [b4]: nH,
      },
      {
        conditions: [ttA],
        rules: [
          {
            conditions: [etA],
            rules: [
              {
                conditions: [VeA, KeA],
                rules: [
                  {
                    conditions: [{ [H5]: $M, [z5]: [SS1, BeA] }, QeA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: mW,
                          headers: mW,
                        },
                        [b4]: kB,
                      },
                    ],
                    [b4]: nH,
                  },
                  {
                    error:
                      'FIPS and DualStack are enabled, but this partition does not support one or both',
                    [b4]: Zv,
                  },
                ],
                [b4]: nH,
              },
              {
                conditions: GeA,
                rules: [
                  {
                    conditions: [{ [H5]: $M, [z5]: [BeA, SS1] }],
                    rules: [
                      {
                        conditions: [
                          { [H5]: eI, [z5]: [{ [H5]: jS1, [z5]: [HeA, 'name'] }, 'aws-us-gov'] },
                        ],
                        endpoint: {
                          url: 'https://sts.{Region}.amazonaws.com',
                          properties: mW,
                          headers: mW,
                        },
                        [b4]: kB,
                      },
                      {
                        endpoint: {
                          url: 'https://sts-fips.{Region}.{PartitionResult#dnsSuffix}',
                          properties: mW,
                          headers: mW,
                        },
                        [b4]: kB,
                      },
                    ],
                    [b4]: nH,
                  },
                  { error: 'FIPS is enabled but this partition does not support FIPS', [b4]: Zv },
                ],
                [b4]: nH,
              },
              {
                conditions: DeA,
                rules: [
                  {
                    conditions: [QeA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: mW,
                          headers: mW,
                        },
                        [b4]: kB,
                      },
                    ],
                    [b4]: nH,
                  },
                  {
                    error: 'DualStack is enabled but this partition does not support DualStack',
                    [b4]: Zv,
                  },
                ],
                [b4]: nH,
              },
              AeA,
              { endpoint: { url: rtA, properties: mW, headers: mW }, [b4]: kB },
            ],
            [b4]: nH,
          },
        ],
        [b4]: nH,
      },
      { error: 'Invalid Configuration: Missing Region', [b4]: Zv },
    ],
  };
zeA.ruleSet = DW4;

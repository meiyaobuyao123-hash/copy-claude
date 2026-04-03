// Module: nA0
// Params: lA0

Object.defineProperty(lA0, '__esModule', { value: !0 });
lA0.ruleSet = void 0;
var uA0 = 'required',
  oH = 'fn',
  tH = 'argv',
  $v = 'ref',
  yA0 = !0,
  kA0 = 'isSet',
  wi = 'booleanEquals',
  Nv = 'error',
  zi = 'endpoint',
  IZ = 'tree',
  f_1 = 'PartitionResult',
  xA0 = { [uA0]: !1, type: 'String' },
  fA0 = { [uA0]: !0, default: !1, type: 'Boolean' },
  vA0 = { [$v]: 'Endpoint' },
  pA0 = { [oH]: wi, [tH]: [{ [$v]: 'UseFIPS' }, !0] },
  cA0 = { [oH]: wi, [tH]: [{ [$v]: 'UseDualStack' }, !0] },
  rH = {},
  bA0 = { [oH]: 'getAttr', [tH]: [{ [$v]: f_1 }, 'supportsFIPS'] },
  gA0 = { [oH]: wi, [tH]: [!0, { [oH]: 'getAttr', [tH]: [{ [$v]: f_1 }, 'supportsDualStack'] }] },
  hA0 = [pA0],
  mA0 = [cA0],
  dA0 = [{ [$v]: 'Region' }],
  $X4 = {
    version: '1.0',
    parameters: { Region: xA0, UseDualStack: fA0, UseFIPS: fA0, Endpoint: xA0 },
    rules: [
      {
        conditions: [{ [oH]: kA0, [tH]: [vA0] }],
        rules: [
          {
            conditions: hA0,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: Nv,
          },
          {
            rules: [
              {
                conditions: mA0,
                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                type: Nv,
              },
              { endpoint: { url: vA0, properties: rH, headers: rH }, type: zi },
            ],
            type: IZ,
          },
        ],
        type: IZ,
      },
      {
        rules: [
          {
            conditions: [{ [oH]: kA0, [tH]: dA0 }],
            rules: [
              {
                conditions: [{ [oH]: 'aws.partition', [tH]: dA0, assign: f_1 }],
                rules: [
                  {
                    conditions: [pA0, cA0],
                    rules: [
                      {
                        conditions: [{ [oH]: wi, [tH]: [yA0, bA0] }, gA0],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: rH,
                                  headers: rH,
                                },
                                type: zi,
                              },
                            ],
                            type: IZ,
                          },
                        ],
                        type: IZ,
                      },
                      {
                        error:
                          'FIPS and DualStack are enabled, but this partition does not support one or both',
                        type: Nv,
                      },
                    ],
                    type: IZ,
                  },
                  {
                    conditions: hA0,
                    rules: [
                      {
                        conditions: [{ [oH]: wi, [tH]: [bA0, yA0] }],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}',
                                  properties: rH,
                                  headers: rH,
                                },
                                type: zi,
                              },
                            ],
                            type: IZ,
                          },
                        ],
                        type: IZ,
                      },
                      {
                        error: 'FIPS is enabled but this partition does not support FIPS',
                        type: Nv,
                      },
                    ],
                    type: IZ,
                  },
                  {
                    conditions: mA0,
                    rules: [
                      {
                        conditions: [gA0],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: rH,
                                  headers: rH,
                                },
                                type: zi,
                              },
                            ],
                            type: IZ,
                          },
                        ],
                        type: IZ,
                      },
                      {
                        error: 'DualStack is enabled but this partition does not support DualStack',
                        type: Nv,
                      },
                    ],
                    type: IZ,
                  },
                  {
                    rules: [
                      {
                        endpoint: {
                          url: 'https://bedrock.{Region}.{PartitionResult#dnsSuffix}',
                          properties: rH,
                          headers: rH,
                        },
                        type: zi,
                      },
                    ],
                    type: IZ,
                  },
                ],
                type: IZ,
              },
            ],
            type: IZ,
          },
          { error: 'Invalid Configuration: Missing Region', type: Nv },
        ],
        type: IZ,
      },
    ],
  };
lA0.ruleSet = $X4;

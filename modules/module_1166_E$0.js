// Module: E$0
// Params: z$0

Object.defineProperty(z$0, '__esModule', { value: !0 });
z$0.ruleSet = void 0;
var V$0 = 'required',
  Uz = 'fn',
  Nz = 'argv',
  Qg = 'ref',
  I$0 = !0,
  G$0 = 'isSet',
  ca = 'booleanEquals',
  Bg = 'error',
  pa = 'endpoint',
  WZ = 'tree',
  Eb1 = 'PartitionResult',
  D$0 = { [V$0]: !1, type: 'String' },
  Z$0 = { [V$0]: !0, default: !1, type: 'Boolean' },
  Y$0 = { [Qg]: 'Endpoint' },
  K$0 = { [Uz]: ca, [Nz]: [{ [Qg]: 'UseFIPS' }, !0] },
  H$0 = { [Uz]: ca, [Nz]: [{ [Qg]: 'UseDualStack' }, !0] },
  Ez = {},
  W$0 = { [Uz]: 'getAttr', [Nz]: [{ [Qg]: Eb1 }, 'supportsFIPS'] },
  F$0 = { [Uz]: ca, [Nz]: [!0, { [Uz]: 'getAttr', [Nz]: [{ [Qg]: Eb1 }, 'supportsDualStack'] }] },
  J$0 = [K$0],
  C$0 = [H$0],
  X$0 = [{ [Qg]: 'Region' }],
  ma4 = {
    version: '1.0',
    parameters: { Region: D$0, UseDualStack: Z$0, UseFIPS: Z$0, Endpoint: D$0 },
    rules: [
      {
        conditions: [{ [Uz]: G$0, [Nz]: [Y$0] }],
        rules: [
          {
            conditions: J$0,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: Bg,
          },
          {
            rules: [
              {
                conditions: C$0,
                error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
                type: Bg,
              },
              { endpoint: { url: Y$0, properties: Ez, headers: Ez }, type: pa },
            ],
            type: WZ,
          },
        ],
        type: WZ,
      },
      {
        rules: [
          {
            conditions: [{ [Uz]: G$0, [Nz]: X$0 }],
            rules: [
              {
                conditions: [{ [Uz]: 'aws.partition', [Nz]: X$0, assign: Eb1 }],
                rules: [
                  {
                    conditions: [K$0, H$0],
                    rules: [
                      {
                        conditions: [{ [Uz]: ca, [Nz]: [I$0, W$0] }, F$0],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: Ez,
                                  headers: Ez,
                                },
                                type: pa,
                              },
                            ],
                            type: WZ,
                          },
                        ],
                        type: WZ,
                      },
                      {
                        error:
                          'FIPS and DualStack are enabled, but this partition does not support one or both',
                        type: Bg,
                      },
                    ],
                    type: WZ,
                  },
                  {
                    conditions: J$0,
                    rules: [
                      {
                        conditions: [{ [Uz]: ca, [Nz]: [W$0, I$0] }],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}',
                                  properties: Ez,
                                  headers: Ez,
                                },
                                type: pa,
                              },
                            ],
                            type: WZ,
                          },
                        ],
                        type: WZ,
                      },
                      {
                        error: 'FIPS is enabled but this partition does not support FIPS',
                        type: Bg,
                      },
                    ],
                    type: WZ,
                  },
                  {
                    conditions: C$0,
                    rules: [
                      {
                        conditions: [F$0],
                        rules: [
                          {
                            rules: [
                              {
                                endpoint: {
                                  url: 'https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}',
                                  properties: Ez,
                                  headers: Ez,
                                },
                                type: pa,
                              },
                            ],
                            type: WZ,
                          },
                        ],
                        type: WZ,
                      },
                      {
                        error: 'DualStack is enabled but this partition does not support DualStack',
                        type: Bg,
                      },
                    ],
                    type: WZ,
                  },
                  {
                    rules: [
                      {
                        endpoint: {
                          url: 'https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}',
                          properties: Ez,
                          headers: Ez,
                        },
                        type: pa,
                      },
                    ],
                    type: WZ,
                  },
                ],
                type: WZ,
              },
            ],
            type: WZ,
          },
          { error: 'Invalid Configuration: Missing Region', type: Bg },
        ],
        type: WZ,
      },
    ],
  };
z$0.ruleSet = ma4;

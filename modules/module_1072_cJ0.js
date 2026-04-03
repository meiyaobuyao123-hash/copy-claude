// Module: cJ0
// Params: uJ0

Object.defineProperty(uJ0, '__esModule', { value: !0 });
uJ0.ruleSet = void 0;
var gJ0 = 'required',
  BD = 'fn',
  QD = 'argv',
  bb = 'ref',
  PJ0 = !0,
  SJ0 = 'isSet',
  Pa = 'booleanEquals',
  vb = 'error',
  Kz = 'endpoint',
  fU = 'tree',
  df1 = 'PartitionResult',
  uf1 = 'getAttr',
  Oa = 'stringEquals',
  _J0 = { [gJ0]: !1, type: 'String' },
  jJ0 = { [gJ0]: !0, default: !1, type: 'Boolean' },
  yJ0 = { [bb]: 'Endpoint' },
  hJ0 = { [BD]: Pa, [QD]: [{ [bb]: 'UseFIPS' }, !0] },
  mJ0 = { [BD]: Pa, [QD]: [{ [bb]: 'UseDualStack' }, !0] },
  aQ = {},
  Ta = { [bb]: 'Region' },
  kJ0 = { [BD]: uf1, [QD]: [{ [bb]: df1 }, 'supportsFIPS'] },
  dJ0 = { [bb]: df1 },
  xJ0 = { [BD]: Pa, [QD]: [!0, { [BD]: uf1, [QD]: [dJ0, 'supportsDualStack'] }] },
  fJ0 = [hJ0],
  vJ0 = [mJ0],
  bJ0 = [Ta],
  cf4 = {
    version: '1.0',
    parameters: { Region: _J0, UseDualStack: jJ0, UseFIPS: jJ0, Endpoint: _J0 },
    rules: [
      {
        conditions: [{ [BD]: SJ0, [QD]: [yJ0] }],
        rules: [
          {
            conditions: fJ0,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: vb,
          },
          {
            conditions: vJ0,
            error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
            type: vb,
          },
          { endpoint: { url: yJ0, properties: aQ, headers: aQ }, type: Kz },
        ],
        type: fU,
      },
      {
        conditions: [{ [BD]: SJ0, [QD]: bJ0 }],
        rules: [
          {
            conditions: [{ [BD]: 'aws.partition', [QD]: bJ0, assign: df1 }],
            rules: [
              {
                conditions: [hJ0, mJ0],
                rules: [
                  {
                    conditions: [{ [BD]: Pa, [QD]: [PJ0, kJ0] }, xJ0],
                    rules: [
                      {
                        conditions: [{ [BD]: Oa, [QD]: [Ta, 'us-east-1'] }],
                        endpoint: {
                          url: 'https://cognito-identity-fips.us-east-1.amazonaws.com',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                      {
                        conditions: [{ [BD]: Oa, [QD]: [Ta, 'us-east-2'] }],
                        endpoint: {
                          url: 'https://cognito-identity-fips.us-east-2.amazonaws.com',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                      {
                        conditions: [{ [BD]: Oa, [QD]: [Ta, 'us-west-1'] }],
                        endpoint: {
                          url: 'https://cognito-identity-fips.us-west-1.amazonaws.com',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                      {
                        conditions: [{ [BD]: Oa, [QD]: [Ta, 'us-west-2'] }],
                        endpoint: {
                          url: 'https://cognito-identity-fips.us-west-2.amazonaws.com',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                      {
                        endpoint: {
                          url: 'https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                    ],
                    type: fU,
                  },
                  {
                    error:
                      'FIPS and DualStack are enabled, but this partition does not support one or both',
                    type: vb,
                  },
                ],
                type: fU,
              },
              {
                conditions: fJ0,
                rules: [
                  {
                    conditions: [{ [BD]: Pa, [QD]: [kJ0, PJ0] }],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                    ],
                    type: fU,
                  },
                  { error: 'FIPS is enabled but this partition does not support FIPS', type: vb },
                ],
                type: fU,
              },
              {
                conditions: vJ0,
                rules: [
                  {
                    conditions: [xJ0],
                    rules: [
                      {
                        conditions: [
                          { [BD]: Oa, [QD]: ['aws', { [BD]: uf1, [QD]: [dJ0, 'name'] }] },
                        ],
                        endpoint: {
                          url: 'https://cognito-identity.{Region}.amazonaws.com',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                      {
                        endpoint: {
                          url: 'https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: aQ,
                          headers: aQ,
                        },
                        type: Kz,
                      },
                    ],
                    type: fU,
                  },
                  {
                    error: 'DualStack is enabled but this partition does not support DualStack',
                    type: vb,
                  },
                ],
                type: fU,
              },
              {
                endpoint: {
                  url: 'https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}',
                  properties: aQ,
                  headers: aQ,
                },
                type: Kz,
              },
            ],
            type: fU,
          },
        ],
        type: fU,
      },
      { error: 'Invalid Configuration: Missing Region', type: vb },
    ],
  };
uJ0.ruleSet = cf4;

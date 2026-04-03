// Module: AsA
// Params: taA

Object.defineProperty(taA, '__esModule', { value: !0 });
taA.ruleSet = void 0;
var aaA = 'required',
  OJ = 'fn',
  TJ = 'argv',
  af = 'ref',
  gaA = !0,
  haA = 'isSet',
  il = 'booleanEquals',
  lf = 'error',
  nf = 'endpoint',
  JU = 'tree',
  iP1 = 'PartitionResult',
  nP1 = 'getAttr',
  maA = { [aaA]: !1, type: 'String' },
  daA = { [aaA]: !0, default: !1, type: 'Boolean' },
  uaA = { [af]: 'Endpoint' },
  saA = { [OJ]: il, [TJ]: [{ [af]: 'UseFIPS' }, !0] },
  raA = { [OJ]: il, [TJ]: [{ [af]: 'UseDualStack' }, !0] },
  RJ = {},
  paA = { [OJ]: nP1, [TJ]: [{ [af]: iP1 }, 'supportsFIPS'] },
  oaA = { [af]: iP1 },
  caA = { [OJ]: il, [TJ]: [!0, { [OJ]: nP1, [TJ]: [oaA, 'supportsDualStack'] }] },
  laA = [saA],
  iaA = [raA],
  naA = [{ [af]: 'Region' }],
  T74 = {
    version: '1.0',
    parameters: { Region: maA, UseDualStack: daA, UseFIPS: daA, Endpoint: maA },
    rules: [
      {
        conditions: [{ [OJ]: haA, [TJ]: [uaA] }],
        rules: [
          {
            conditions: laA,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: lf,
          },
          {
            conditions: iaA,
            error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
            type: lf,
          },
          { endpoint: { url: uaA, properties: RJ, headers: RJ }, type: nf },
        ],
        type: JU,
      },
      {
        conditions: [{ [OJ]: haA, [TJ]: naA }],
        rules: [
          {
            conditions: [{ [OJ]: 'aws.partition', [TJ]: naA, assign: iP1 }],
            rules: [
              {
                conditions: [saA, raA],
                rules: [
                  {
                    conditions: [{ [OJ]: il, [TJ]: [gaA, paA] }, caA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: RJ,
                          headers: RJ,
                        },
                        type: nf,
                      },
                    ],
                    type: JU,
                  },
                  {
                    error:
                      'FIPS and DualStack are enabled, but this partition does not support one or both',
                    type: lf,
                  },
                ],
                type: JU,
              },
              {
                conditions: laA,
                rules: [
                  {
                    conditions: [{ [OJ]: il, [TJ]: [paA, gaA] }],
                    rules: [
                      {
                        conditions: [
                          {
                            [OJ]: 'stringEquals',
                            [TJ]: [{ [OJ]: nP1, [TJ]: [oaA, 'name'] }, 'aws-us-gov'],
                          },
                        ],
                        endpoint: {
                          url: 'https://portal.sso.{Region}.amazonaws.com',
                          properties: RJ,
                          headers: RJ,
                        },
                        type: nf,
                      },
                      {
                        endpoint: {
                          url: 'https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}',
                          properties: RJ,
                          headers: RJ,
                        },
                        type: nf,
                      },
                    ],
                    type: JU,
                  },
                  { error: 'FIPS is enabled but this partition does not support FIPS', type: lf },
                ],
                type: JU,
              },
              {
                conditions: iaA,
                rules: [
                  {
                    conditions: [caA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: RJ,
                          headers: RJ,
                        },
                        type: nf,
                      },
                    ],
                    type: JU,
                  },
                  {
                    error: 'DualStack is enabled but this partition does not support DualStack',
                    type: lf,
                  },
                ],
                type: JU,
              },
              {
                endpoint: {
                  url: 'https://portal.sso.{Region}.{PartitionResult#dnsSuffix}',
                  properties: RJ,
                  headers: RJ,
                },
                type: nf,
              },
            ],
            type: JU,
          },
        ],
        type: JU,
      },
      { error: 'Invalid Configuration: Missing Region', type: lf },
    ],
  };
taA.ruleSet = T74;

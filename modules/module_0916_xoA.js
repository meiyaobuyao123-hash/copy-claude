// Module: xoA
// Params: yoA

Object.defineProperty(yoA, '__esModule', { value: !0 });
yoA.ruleSet = void 0;
var PoA = 'required',
  SJ = 'fn',
  _J = 'argv',
  Iv = 'ref',
  EoA = !0,
  UoA = 'isSet',
  Ai = 'booleanEquals',
  Bv = 'error',
  Qv = 'endpoint',
  XU = 'tree',
  US1 = 'PartitionResult',
  NS1 = 'getAttr',
  NoA = { [PoA]: !1, type: 'String' },
  $oA = { [PoA]: !0, default: !1, type: 'Boolean' },
  qoA = { [Iv]: 'Endpoint' },
  SoA = { [SJ]: Ai, [_J]: [{ [Iv]: 'UseFIPS' }, !0] },
  _oA = { [SJ]: Ai, [_J]: [{ [Iv]: 'UseDualStack' }, !0] },
  PJ = {},
  MoA = { [SJ]: NS1, [_J]: [{ [Iv]: US1 }, 'supportsFIPS'] },
  joA = { [Iv]: US1 },
  LoA = { [SJ]: Ai, [_J]: [!0, { [SJ]: NS1, [_J]: [joA, 'supportsDualStack'] }] },
  RoA = [SoA],
  OoA = [_oA],
  ToA = [{ [Iv]: 'Region' }],
  DZ4 = {
    version: '1.0',
    parameters: { Region: NoA, UseDualStack: $oA, UseFIPS: $oA, Endpoint: NoA },
    rules: [
      {
        conditions: [{ [SJ]: UoA, [_J]: [qoA] }],
        rules: [
          {
            conditions: RoA,
            error: 'Invalid Configuration: FIPS and custom endpoint are not supported',
            type: Bv,
          },
          {
            conditions: OoA,
            error: 'Invalid Configuration: Dualstack and custom endpoint are not supported',
            type: Bv,
          },
          { endpoint: { url: qoA, properties: PJ, headers: PJ }, type: Qv },
        ],
        type: XU,
      },
      {
        conditions: [{ [SJ]: UoA, [_J]: ToA }],
        rules: [
          {
            conditions: [{ [SJ]: 'aws.partition', [_J]: ToA, assign: US1 }],
            rules: [
              {
                conditions: [SoA, _oA],
                rules: [
                  {
                    conditions: [{ [SJ]: Ai, [_J]: [EoA, MoA] }, LoA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: PJ,
                          headers: PJ,
                        },
                        type: Qv,
                      },
                    ],
                    type: XU,
                  },
                  {
                    error:
                      'FIPS and DualStack are enabled, but this partition does not support one or both',
                    type: Bv,
                  },
                ],
                type: XU,
              },
              {
                conditions: RoA,
                rules: [
                  {
                    conditions: [{ [SJ]: Ai, [_J]: [MoA, EoA] }],
                    rules: [
                      {
                        conditions: [
                          {
                            [SJ]: 'stringEquals',
                            [_J]: [{ [SJ]: NS1, [_J]: [joA, 'name'] }, 'aws-us-gov'],
                          },
                        ],
                        endpoint: {
                          url: 'https://oidc.{Region}.amazonaws.com',
                          properties: PJ,
                          headers: PJ,
                        },
                        type: Qv,
                      },
                      {
                        endpoint: {
                          url: 'https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}',
                          properties: PJ,
                          headers: PJ,
                        },
                        type: Qv,
                      },
                    ],
                    type: XU,
                  },
                  { error: 'FIPS is enabled but this partition does not support FIPS', type: Bv },
                ],
                type: XU,
              },
              {
                conditions: OoA,
                rules: [
                  {
                    conditions: [LoA],
                    rules: [
                      {
                        endpoint: {
                          url: 'https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}',
                          properties: PJ,
                          headers: PJ,
                        },
                        type: Qv,
                      },
                    ],
                    type: XU,
                  },
                  {
                    error: 'DualStack is enabled but this partition does not support DualStack',
                    type: Bv,
                  },
                ],
                type: XU,
              },
              {
                endpoint: {
                  url: 'https://oidc.{Region}.{PartitionResult#dnsSuffix}',
                  properties: PJ,
                  headers: PJ,
                },
                type: Qv,
              },
            ],
            type: XU,
          },
        ],
        type: XU,
      },
      { error: 'Invalid Configuration: Missing Region', type: Bv },
    ],
  };
yoA.ruleSet = DZ4;

// Module: Bl
// Params: zSA

Object.defineProperty(zSA, '__esModule', { value: !0 });
zSA.NetworkParam = zSA.NetworkDefault = zSA.Endpoint = void 0;
zSA.Endpoint = {
  _initialize: 'initialize',
  _rgstr: 'rgstr',
  _download_config_specs: 'download_config_specs',
};
zSA.NetworkDefault = {
  [zSA.Endpoint._rgstr]: 'https://prodregistryv2.org/v1',
  [zSA.Endpoint._initialize]: 'https://featureassets.org/v1',
  [zSA.Endpoint._download_config_specs]: 'https://api.statsigcdn.com/v1',
};
zSA.NetworkParam = {
  EventCount: 'ec',
  SdkKey: 'k',
  SdkType: 'st',
  SdkVersion: 'sv',
  Time: 't',
  SessionID: 'sid',
  StatsigEncoded: 'se',
  IsGzipped: 'gz',
};

// Module: O01
// Params: E8A

var { _optionalChain: WT } = tA();
Object.defineProperty(E8A, '__esModule', { value: !0 });
var As2 = D1('child_process'),
  J8A = D1('fs'),
  YJ = D1('os'),
  Bs2 = D1('path'),
  C8A = D1('util'),
  X8A = I4(),
  V8A = C8A.promisify(J8A.readFile),
  K8A = C8A.promisify(J8A.readdir),
  H8A = 'Context',
  Qs2 = (A = {}) => {
    let B,
      Q = { app: !0, os: !0, device: !0, culture: !0, cloudResource: !0, ...A };
    async function I(D) {
      if (B === void 0) B = G();
      let Z = Gs2(await B);
      return (
        (D.contexts = {
          ...D.contexts,
          app: {
            ...Z.app,
            ...WT([D, 'access', (Y) => Y.contexts, 'optionalAccess', (Y) => Y.app]),
          },
          os: { ...Z.os, ...WT([D, 'access', (Y) => Y.contexts, 'optionalAccess', (Y) => Y.os]) },
          device: {
            ...Z.device,
            ...WT([D, 'access', (Y) => Y.contexts, 'optionalAccess', (Y) => Y.device]),
          },
          culture: {
            ...Z.culture,
            ...WT([D, 'access', (Y) => Y.contexts, 'optionalAccess', (Y) => Y.culture]),
          },
          cloud_resource: {
            ...Z.cloud_resource,
            ...WT([D, 'access', (Y) => Y.contexts, 'optionalAccess', (Y) => Y.cloud_resource]),
          },
        }),
        D
      );
    }
    async function G() {
      let D = {};
      if (Q.os) D.os = await Ds2();
      if (Q.app) D.app = Ys2();
      if (Q.device) D.device = w8A(Q.device);
      if (Q.culture) {
        let Z = Zs2();
        if (Z) D.culture = Z;
      }
      if (Q.cloudResource) D.cloud_resource = Vs2();
      return D;
    }
    return {
      name: H8A,
      setupOnce() {},
      processEvent(D) {
        return I(D);
      },
    };
  },
  z8A = X8A.defineIntegration(Qs2),
  Is2 = X8A.convertIntegrationFnToClass(H8A, z8A);
function Gs2(A) {
  if (WT([A, 'optionalAccess', (B) => B.app, 'optionalAccess', (B) => B.app_memory]))
    A.app.app_memory = process.memoryUsage().rss;
  if (WT([A, 'optionalAccess', (B) => B.device, 'optionalAccess', (B) => B.free_memory]))
    A.device.free_memory = YJ.freemem();
  return A;
}
async function Ds2() {
  let A = YJ.platform();
  switch (A) {
    case 'darwin':
      return Cs2();
    case 'linux':
      return Xs2();
    default:
      return { name: Ws2[A] || A, version: YJ.release() };
  }
}
function Zs2() {
  try {
    if (typeof process.versions.icu !== 'string') return;
    let A = new Date(900000000);
    if (new Intl.DateTimeFormat('es', { month: 'long' }).format(A) === 'enero') {
      let Q = Intl.DateTimeFormat().resolvedOptions();
      return { locale: Q.locale, timezone: Q.timeZone };
    }
  } catch (A) {}
  return;
}
function Ys2() {
  let A = process.memoryUsage().rss;
  return {
    app_start_time: new Date(Date.now() - process.uptime() * 1000).toISOString(),
    app_memory: A,
  };
}
function w8A(A) {
  let B = {},
    Q;
  try {
    Q = YJ.uptime && YJ.uptime();
  } catch (I) {}
  if (typeof Q === 'number') B.boot_time = new Date(Date.now() - Q * 1000).toISOString();
  if (((B.arch = YJ.arch()), A === !0 || A.memory))
    ((B.memory_size = YJ.totalmem()), (B.free_memory = YJ.freemem()));
  if (A === !0 || A.cpu) {
    let I = YJ.cpus();
    if (I && I.length) {
      let G = I[0];
      ((B.processor_count = I.length),
        (B.cpu_description = G.model),
        (B.processor_frequency = G.speed));
    }
  }
  return B;
}
var Ws2 = {
    aix: 'IBM AIX',
    freebsd: 'FreeBSD',
    openbsd: 'OpenBSD',
    sunos: 'SunOS',
    win32: 'Windows',
  },
  Fs2 = [
    { name: 'fedora-release', distros: ['Fedora'] },
    { name: 'redhat-release', distros: ['Red Hat Linux', 'Centos'] },
    { name: 'redhat_version', distros: ['Red Hat Linux'] },
    { name: 'SuSE-release', distros: ['SUSE Linux'] },
    { name: 'lsb-release', distros: ['Ubuntu Linux', 'Arch Linux'] },
    { name: 'debian_version', distros: ['Debian'] },
    { name: 'debian_release', distros: ['Debian'] },
    { name: 'arch-release', distros: ['Arch Linux'] },
    { name: 'gentoo-release', distros: ['Gentoo Linux'] },
    { name: 'novell-release', distros: ['SUSE Linux'] },
    { name: 'alpine-release', distros: ['Alpine Linux'] },
  ],
  Js2 = {
    alpine: (A) => A,
    arch: (A) => DH(/distrib_release=(.*)/, A),
    centos: (A) => DH(/release ([^ ]+)/, A),
    debian: (A) => A,
    fedora: (A) => DH(/release (..)/, A),
    mint: (A) => DH(/distrib_release=(.*)/, A),
    red: (A) => DH(/release ([^ ]+)/, A),
    suse: (A) => DH(/VERSION = (.*)\n/, A),
    ubuntu: (A) => DH(/distrib_release=(.*)/, A),
  };
function DH(A, B) {
  let Q = A.exec(B);
  return Q ? Q[1] : void 0;
}
async function Cs2() {
  let A = {
    kernel_version: YJ.release(),
    name: 'Mac OS X',
    version: `10.${Number(YJ.release().split('.')[0]) - 4}`,
  };
  try {
    let B = await new Promise((Q, I) => {
      As2.execFile('/usr/bin/sw_vers', (G, D) => {
        if (G) {
          I(G);
          return;
        }
        Q(D);
      });
    });
    ((A.name = DH(/^ProductName:\s+(.*)$/m, B)),
      (A.version = DH(/^ProductVersion:\s+(.*)$/m, B)),
      (A.build = DH(/^BuildVersion:\s+(.*)$/m, B)));
  } catch (B) {}
  return A;
}
function F8A(A) {
  return A.split(' ')[0].toLowerCase();
}
async function Xs2() {
  let A = { kernel_version: YJ.release(), name: 'Linux' };
  try {
    let B = await K8A('/etc'),
      Q = Fs2.find((Y) => B.includes(Y.name));
    if (!Q) return A;
    let I = Bs2.join('/etc', Q.name),
      G = (await V8A(I, { encoding: 'utf-8' })).toLowerCase(),
      { distros: D } = Q;
    A.name = D.find((Y) => G.indexOf(F8A(Y)) >= 0) || D[0];
    let Z = F8A(A.name);
    A.version = Js2[Z](G);
  } catch (B) {}
  return A;
}
function Vs2() {
  if (process.env.VERCEL)
    return { 'cloud.provider': 'vercel', 'cloud.region': process.env.VERCEL_REGION };
  else if (process.env.AWS_REGION)
    return {
      'cloud.provider': 'aws',
      'cloud.region': process.env.AWS_REGION,
      'cloud.platform': process.env.AWS_EXECUTION_ENV,
    };
  else if (process.env.GCP_PROJECT) return { 'cloud.provider': 'gcp' };
  else if (process.env.ALIYUN_REGION_ID)
    return { 'cloud.provider': 'alibaba_cloud', 'cloud.region': process.env.ALIYUN_REGION_ID };
  else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME)
    return { 'cloud.provider': 'azure', 'cloud.region': process.env.REGION_NAME };
  else if (process.env.IBM_CLOUD_REGION)
    return { 'cloud.provider': 'ibm_cloud', 'cloud.region': process.env.IBM_CLOUD_REGION };
  else if (process.env.TENCENTCLOUD_REGION)
    return {
      'cloud.provider': 'tencent_cloud',
      'cloud.region': process.env.TENCENTCLOUD_REGION,
      'cloud.account.id': process.env.TENCENTCLOUD_APPID,
      'cloud.availability_zone': process.env.TENCENTCLOUD_ZONE,
    };
  else if (process.env.NETLIFY) return { 'cloud.provider': 'netlify' };
  else if (process.env.FLY_REGION)
    return { 'cloud.provider': 'fly.io', 'cloud.region': process.env.FLY_REGION };
  else if (process.env.DYNO) return { 'cloud.provider': 'heroku' };
  else return;
}
E8A.Context = Is2;
E8A.getDeviceContext = w8A;
E8A.nodeContextIntegration = z8A;
E8A.readDirAsync = K8A;
E8A.readFileAsync = V8A;

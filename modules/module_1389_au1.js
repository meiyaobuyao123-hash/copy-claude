// Module: au1
// Params: yw8,Ed0

var { spawnSync: NF1 } = D1('node:child_process'),
  { createHash: AH6 } = D1('node:crypto'),
  Xd0 = Gx1(),
  BH6 = rn(),
  QH6 = zb(),
  Fd0 = UF1(),
  { config: IH6, engines: Jd0, optionalDependencies: GH6 } = iu1(),
  DH6 = process.env.npm_package_config_libvips || IH6.libvips,
  Vd0 = Xd0(DH6).version,
  ZH6 = [
    'darwin-arm64',
    'darwin-x64',
    'linux-arm',
    'linux-arm64',
    'linux-s390x',
    'linux-x64',
    'linuxmusl-arm64',
    'linuxmusl-x64',
    'win32-ia32',
    'win32-x64',
  ],
  $F1 = { encoding: 'utf8', shell: !0 },
  YH6 = (A) => {
    if (A instanceof Error) console.error(`sharp: Installation error: ${A.message}`);
    else console.log(`sharp: ${A}`);
  },
  Kd0 = () => (Fd0.isNonGlibcLinuxSync() ? Fd0.familySync() : ''),
  WH6 = () => `${process.platform}${Kd0()}-${process.arch}`,
  mh = () => {
    if (Hd0()) return 'wasm32';
    let { npm_config_arch: A, npm_config_platform: B, npm_config_libc: Q } = process.env,
      I = typeof Q === 'string' ? Q : Kd0();
    return `${B || process.platform}${I}-${A || process.arch}`;
  },
  FH6 = () => {
    try {
      return D1(`@img/sharp-libvips-dev-${mh()}/include`);
    } catch {
      try {
        return (() => {
          throw new Error('Cannot require module ' + '@img/sharp-libvips-dev/include');
        })();
      } catch {}
    }
    return '';
  },
  JH6 = () => {
    try {
      return (() => {
        throw new Error('Cannot require module ' + '@img/sharp-libvips-dev/cplusplus');
      })();
    } catch {}
    return '';
  },
  CH6 = () => {
    try {
      return D1(`@img/sharp-libvips-dev-${mh()}/lib`);
    } catch {
      try {
        return D1(`@img/sharp-libvips-${mh()}/lib`);
      } catch {}
    }
    return '';
  },
  XH6 = () => {
    if (process.release?.name === 'node' && process.versions) {
      if (!QH6(process.versions.node, Jd0.node))
        return { found: process.versions.node, expected: Jd0.node };
    }
  },
  Hd0 = () => {
    let { CC: A } = process.env;
    return Boolean(A && A.endsWith('/emcc'));
  },
  VH6 = () => {
    if (process.platform === 'darwin' && process.arch === 'x64')
      return (
        (NF1('sysctl sysctl.proc_translated', $F1).stdout || '').trim() ===
        'sysctl.proc_translated: 1'
      );
    return !1;
  },
  Cd0 = (A) => AH6('sha512').update(A).digest('hex'),
  KH6 = () => {
    try {
      let A = Cd0(`imgsharp-libvips-${mh()}`),
        B = Xd0(GH6[`@img/sharp-libvips-${mh()}`]).version;
      return Cd0(`${A}npm:${B}`).slice(0, 10);
    } catch {}
    return '';
  },
  HH6 = () =>
    NF1(`node-gyp rebuild --directory=src ${Hd0() ? '--nodedir=emscripten' : ''}`, {
      ...$F1,
      stdio: 'inherit',
    }).status,
  zd0 = () => {
    if (process.platform !== 'win32')
      return (
        NF1('pkg-config --modversion vips-cpp', {
          ...$F1,
          env: { ...process.env, PKG_CONFIG_PATH: wd0() },
        }).stdout || ''
      ).trim();
    else return '';
  },
  wd0 = () => {
    if (process.platform !== 'win32')
      return [
        (
          NF1(
            'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
            $F1
          ).stdout || ''
        ).trim(),
        process.env.PKG_CONFIG_PATH,
        '/usr/local/lib/pkgconfig',
        '/usr/lib/pkgconfig',
        '/usr/local/libdata/pkgconfig',
        '/usr/libdata/pkgconfig',
      ]
        .filter(Boolean)
        .join(':');
    else return '';
  },
  nu1 = (A, B, Q) => {
    if (Q) Q(`Detected ${B}, skipping search for globally-installed libvips`);
    return A;
  },
  zH6 = (A) => {
    if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === !0)
      return nu1(!1, 'SHARP_IGNORE_GLOBAL_LIBVIPS', A);
    if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === !0)
      return nu1(!0, 'SHARP_FORCE_GLOBAL_LIBVIPS', A);
    if (VH6()) return nu1(!1, 'Rosetta', A);
    let B = zd0();
    return !!B && BH6(B, Vd0);
  };
Ed0.exports = {
  minimumLibvipsVersion: Vd0,
  prebuiltPlatforms: ZH6,
  buildPlatformArch: mh,
  buildSharpLibvipsIncludeDir: FH6,
  buildSharpLibvipsCPlusPlusDir: JH6,
  buildSharpLibvipsLibDir: CH6,
  isUnsupportedNodeRuntime: XH6,
  runtimePlatformArch: WH6,
  log: YH6,
  yarnLocator: KH6,
  spawnRebuild: HH6,
  globalLibvipsVersion: zd0,
  pkgConfigPath: wd0,
  useGlobalLibvips: zH6,
};

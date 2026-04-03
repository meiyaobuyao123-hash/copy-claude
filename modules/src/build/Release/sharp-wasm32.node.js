// Module: fr
// Params: xw8,Nd0

var { familySync: wH6, versionSync: EH6 } = UF1(),
  {
    runtimePlatformArch: UH6,
    isUnsupportedNodeRuntime: Ud0,
    prebuiltPlatforms: NH6,
    minimumLibvipsVersion: $H6,
  } = au1(),
  Q_ = UH6(),
  qH6 = [
    `../src/build/Release/sharp-${Q_}.node`,
    '../src/build/Release/sharp-wasm32.node',
    `@img/sharp-${Q_}/sharp.node`,
    '@img/sharp-wasm32/sharp.node',
  ],
  su1,
  qF1 = [];
for (let A of qH6)
  try {
    su1 = D1(A);
    break;
  } catch (B) {
    qF1.push(B);
  }
if (su1) Nd0.exports = su1;
else {
  let [A, B, Q] = ['linux', 'darwin', 'win32'].map((D) => Q_.startsWith(D)),
    I = [`Could not load the "sharp" module using the ${Q_} runtime`];
  qF1.forEach((D) => {
    if (D.code !== 'MODULE_NOT_FOUND') I.push(`${D.code}: ${D.message}`);
  });
  let G = qF1.map((D) => D.message).join(' ');
  if ((I.push('Possible solutions:'), Ud0())) {
    let { found: D, expected: Z } = Ud0();
    I.push('- Please upgrade Node.js:', `    Found ${D}`, `    Requires ${Z}`);
  } else if (NH6.includes(Q_)) {
    let [D, Z] = Q_.split('-'),
      Y = D.endsWith('musl') ? ' --libc=musl' : '';
    I.push(
      '- Ensure optional dependencies can be installed:',
      '    npm install --include=optional sharp',
      '- Ensure your package manager supports multi-platform installation:',
      '    See https://sharp.pixelplumbing.com/install#cross-platform',
      '- Add platform-specific dependencies:',
      `    npm install --os=${D.replace('musl', '')}${Y} --cpu=${Z} sharp`
    );
  } else
    I.push(
      `- Manually install libvips >= ${$H6}`,
      '- Add experimental WebAssembly-based dependencies:',
      '    npm install --cpu=wasm32 sharp',
      '    npm install @img/sharp-wasm32'
    );
  if (A && /(symbol not found|CXXABI_)/i.test(G))
    try {
      let { config: D } = D1(`@img/sharp-libvips-${Q_}/package`),
        Z = `${wH6()} ${EH6()}`,
        Y = `${D.musl ? 'musl' : 'glibc'} ${D.musl || D.glibc}`;
      I.push('- Update your OS:', `    Found ${Z}`, `    Requires ${Y}`);
    } catch (D) {}
  if (A && /\/snap\/core[0-9]{2}/.test(G))
    I.push(
      '- Remove the Node.js Snap, which does not support native modules',
      '    snap remove node'
    );
  if (B && /Incompatible library version/.test(G))
    I.push('- Update Homebrew:', '    brew update && brew upgrade vips');
  if (qF1.some((D) => D.code === 'ERR_DLOPEN_DISABLED'))
    I.push('- Run Node.js without using the --no-addons flag');
  if (Q && /The specified procedure could not be found/.test(G))
    I.push(
      '- Using the canvas package on Windows?',
      '    See https://sharp.pixelplumbing.com/install#canvas-and-windows',
      '- Check for outdated versions of sharp in the dependency tree:',
      '    npm ls sharp'
    );
  throw (
    I.push(
      '- Consult the installation documentation:',
      '    See https://sharp.pixelplumbing.com/install'
    ),
    new Error(
      I.join(`
`)
    )
  );
}

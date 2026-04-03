// Module: UF1
// Params: _w8,Wd0

var am0 = D1('child_process'),
  { isLinux: hh, getReport: sm0 } = pm0(),
  { LDD_PATH: EF1, readFile: rm0, readFileSync: om0 } = im0(),
  nz,
  az,
  eL = '',
  tm0 = () => {
    if (!eL)
      return new Promise((A) => {
        am0.exec('getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true', (B, Q) => {
          ((eL = B ? ' ' : Q), A(eL));
        });
      });
    return eL;
  },
  em0 = () => {
    if (!eL)
      try {
        eL = am0.execSync('getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true', {
          encoding: 'utf8',
        });
      } catch (A) {
        eL = ' ';
      }
    return eL;
  },
  AR = 'glibc',
  Ad0 = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,
  gh = 'musl',
  cK6 = (A) => A.includes('libc.musl-') || A.includes('ld-musl-'),
  Bd0 = () => {
    let A = sm0();
    if (A.header && A.header.glibcVersionRuntime) return AR;
    if (Array.isArray(A.sharedObjects)) {
      if (A.sharedObjects.some(cK6)) return gh;
    }
    return null;
  },
  Qd0 = (A) => {
    let [B, Q] = A.split(/[\r\n]+/);
    if (B && B.includes(AR)) return AR;
    if (Q && Q.includes(gh)) return gh;
    return null;
  },
  Id0 = (A) => {
    if (A.includes('musl')) return gh;
    if (A.includes('GNU C Library')) return AR;
    return null;
  },
  lK6 = async () => {
    if (nz !== void 0) return nz;
    nz = null;
    try {
      let A = await rm0(EF1);
      nz = Id0(A);
    } catch (A) {}
    return nz;
  },
  iK6 = () => {
    if (nz !== void 0) return nz;
    nz = null;
    try {
      let A = om0(EF1);
      nz = Id0(A);
    } catch (A) {}
    return nz;
  },
  Gd0 = async () => {
    let A = null;
    if (hh()) {
      if (((A = await lK6()), !A)) A = Bd0();
      if (!A) {
        let B = await tm0();
        A = Qd0(B);
      }
    }
    return A;
  },
  Dd0 = () => {
    let A = null;
    if (hh()) {
      if (((A = iK6()), !A)) A = Bd0();
      if (!A) {
        let B = em0();
        A = Qd0(B);
      }
    }
    return A;
  },
  nK6 = async () => hh() && (await Gd0()) !== AR,
  aK6 = () => hh() && Dd0() !== AR,
  sK6 = async () => {
    if (az !== void 0) return az;
    az = null;
    try {
      let B = (await rm0(EF1)).match(Ad0);
      if (B) az = B[1];
    } catch (A) {}
    return az;
  },
  rK6 = () => {
    if (az !== void 0) return az;
    az = null;
    try {
      let B = om0(EF1).match(Ad0);
      if (B) az = B[1];
    } catch (A) {}
    return az;
  },
  Zd0 = () => {
    let A = sm0();
    if (A.header && A.header.glibcVersionRuntime) return A.header.glibcVersionRuntime;
    return null;
  },
  nm0 = (A) => A.trim().split(/\s+/)[1],
  Yd0 = (A) => {
    let [B, Q, I] = A.split(/[\r\n]+/);
    if (B && B.includes(AR)) return nm0(B);
    if (Q && I && Q.includes(gh)) return nm0(I);
    return null;
  },
  oK6 = async () => {
    let A = null;
    if (hh()) {
      if (((A = await sK6()), !A)) A = Zd0();
      if (!A) {
        let B = await tm0();
        A = Yd0(B);
      }
    }
    return A;
  },
  tK6 = () => {
    let A = null;
    if (hh()) {
      if (((A = rK6()), !A)) A = Zd0();
      if (!A) {
        let B = em0();
        A = Yd0(B);
      }
    }
    return A;
  };
Wd0.exports = {
  GLIBC: AR,
  MUSL: gh,
  family: Gd0,
  familySync: Dd0,
  isNonGlibcLinux: nK6,
  isNonGlibcLinuxSync: aK6,
  version: oK6,
  versionSync: tK6,
};

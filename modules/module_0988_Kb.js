// Module: Kb
// Params: Fz,NI0

var { MAX_SAFE_COMPONENT_LENGTH: tk1, MAX_SAFE_BUILD_LENGTH: ZO4, MAX_LENGTH: YO4 } = nn(),
  WO4 = an();
Fz = NI0.exports = {};
var FO4 = (Fz.re = []),
  JO4 = (Fz.safeRe = []),
  R2 = (Fz.src = []),
  CO4 = (Fz.safeSrc = []),
  O2 = (Fz.t = {}),
  XO4 = 0,
  ek1 = '[a-zA-Z0-9-]',
  VO4 = [
    ['\\s', 1],
    ['\\d', YO4],
    [ek1, ZO4],
  ],
  KO4 = (A) => {
    for (let [B, Q] of VO4)
      A = A.split(`${B}*`).join(`${B}{0,${Q}}`).split(`${B}+`).join(`${B}{1,${Q}}`);
    return A;
  },
  O4 = (A, B, Q) => {
    let I = KO4(B),
      G = XO4++;
    (WO4(A, G, B),
      (O2[A] = G),
      (R2[G] = B),
      (CO4[G] = I),
      (FO4[G] = new RegExp(B, Q ? 'g' : void 0)),
      (JO4[G] = new RegExp(I, Q ? 'g' : void 0)));
  };
O4('NUMERICIDENTIFIER', '0|[1-9]\\d*');
O4('NUMERICIDENTIFIERLOOSE', '\\d+');
O4('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${ek1}*`);
O4(
  'MAINVERSION',
  `(${R2[O2.NUMERICIDENTIFIER]})\\.(${R2[O2.NUMERICIDENTIFIER]})\\.(${R2[O2.NUMERICIDENTIFIER]})`
);
O4(
  'MAINVERSIONLOOSE',
  `(${R2[O2.NUMERICIDENTIFIERLOOSE]})\\.(${R2[O2.NUMERICIDENTIFIERLOOSE]})\\.(${R2[O2.NUMERICIDENTIFIERLOOSE]})`
);
O4('PRERELEASEIDENTIFIER', `(?:${R2[O2.NUMERICIDENTIFIER]}|${R2[O2.NONNUMERICIDENTIFIER]})`);
O4(
  'PRERELEASEIDENTIFIERLOOSE',
  `(?:${R2[O2.NUMERICIDENTIFIERLOOSE]}|${R2[O2.NONNUMERICIDENTIFIER]})`
);
O4('PRERELEASE', `(?:-(${R2[O2.PRERELEASEIDENTIFIER]}(?:\\.${R2[O2.PRERELEASEIDENTIFIER]})*))`);
O4(
  'PRERELEASELOOSE',
  `(?:-?(${R2[O2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${R2[O2.PRERELEASEIDENTIFIERLOOSE]})*))`
);
O4('BUILDIDENTIFIER', `${ek1}+`);
O4('BUILD', `(?:\\+(${R2[O2.BUILDIDENTIFIER]}(?:\\.${R2[O2.BUILDIDENTIFIER]})*))`);
O4('FULLPLAIN', `v?${R2[O2.MAINVERSION]}${R2[O2.PRERELEASE]}?${R2[O2.BUILD]}?`);
O4('FULL', `^${R2[O2.FULLPLAIN]}$`);
O4('LOOSEPLAIN', `[v=\\s]*${R2[O2.MAINVERSIONLOOSE]}${R2[O2.PRERELEASELOOSE]}?${R2[O2.BUILD]}?`);
O4('LOOSE', `^${R2[O2.LOOSEPLAIN]}$`);
O4('GTLT', '((?:<|>)?=?)');
O4('XRANGEIDENTIFIERLOOSE', `${R2[O2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
O4('XRANGEIDENTIFIER', `${R2[O2.NUMERICIDENTIFIER]}|x|X|\\*`);
O4(
  'XRANGEPLAIN',
  `[v=\\s]*(${R2[O2.XRANGEIDENTIFIER]})(?:\\.(${R2[O2.XRANGEIDENTIFIER]})(?:\\.(${R2[O2.XRANGEIDENTIFIER]})(?:${R2[O2.PRERELEASE]})?${R2[O2.BUILD]}?)?)?`
);
O4(
  'XRANGEPLAINLOOSE',
  `[v=\\s]*(${R2[O2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${R2[O2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${R2[O2.XRANGEIDENTIFIERLOOSE]})(?:${R2[O2.PRERELEASELOOSE]})?${R2[O2.BUILD]}?)?)?`
);
O4('XRANGE', `^${R2[O2.GTLT]}\\s*${R2[O2.XRANGEPLAIN]}$`);
O4('XRANGELOOSE', `^${R2[O2.GTLT]}\\s*${R2[O2.XRANGEPLAINLOOSE]}$`);
O4('COERCEPLAIN', `(^|[^\\d])(\\d{1,${tk1}})(?:\\.(\\d{1,${tk1}}))?(?:\\.(\\d{1,${tk1}}))?`);
O4('COERCE', `${R2[O2.COERCEPLAIN]}(?:$|[^\\d])`);
O4('COERCEFULL', R2[O2.COERCEPLAIN] + `(?:${R2[O2.PRERELEASE]})?(?:${R2[O2.BUILD]})?(?:$|[^\\d])`);
O4('COERCERTL', R2[O2.COERCE], !0);
O4('COERCERTLFULL', R2[O2.COERCEFULL], !0);
O4('LONETILDE', '(?:~>?)');
O4('TILDETRIM', `(\\s*)${R2[O2.LONETILDE]}\\s+`, !0);
Fz.tildeTrimReplace = '$1~';
O4('TILDE', `^${R2[O2.LONETILDE]}${R2[O2.XRANGEPLAIN]}$`);
O4('TILDELOOSE', `^${R2[O2.LONETILDE]}${R2[O2.XRANGEPLAINLOOSE]}$`);
O4('LONECARET', '(?:\\^)');
O4('CARETTRIM', `(\\s*)${R2[O2.LONECARET]}\\s+`, !0);
Fz.caretTrimReplace = '$1^';
O4('CARET', `^${R2[O2.LONECARET]}${R2[O2.XRANGEPLAIN]}$`);
O4('CARETLOOSE', `^${R2[O2.LONECARET]}${R2[O2.XRANGEPLAINLOOSE]}$`);
O4('COMPARATORLOOSE', `^${R2[O2.GTLT]}\\s*(${R2[O2.LOOSEPLAIN]})$|^$`);
O4('COMPARATOR', `^${R2[O2.GTLT]}\\s*(${R2[O2.FULLPLAIN]})$|^$`);
O4('COMPARATORTRIM', `(\\s*)${R2[O2.GTLT]}\\s*(${R2[O2.LOOSEPLAIN]}|${R2[O2.XRANGEPLAIN]})`, !0);
Fz.comparatorTrimReplace = '$1$2$3';
O4('HYPHENRANGE', `^\\s*(${R2[O2.XRANGEPLAIN]})\\s+-\\s+(${R2[O2.XRANGEPLAIN]})\\s*$`);
O4(
  'HYPHENRANGELOOSE',
  `^\\s*(${R2[O2.XRANGEPLAINLOOSE]})\\s+-\\s+(${R2[O2.XRANGEPLAINLOOSE]})\\s*$`
);
O4('STAR', '(<|>)?=?\\s*\\*');
O4('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
O4('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');

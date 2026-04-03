// Module: xV1
// Params: T45

T45.isValidName = R45;
T45.isValidQName = O45;
var U45 = /^[_:A-Za-z][-.:\w]+$/,
  N45 = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/,
  He = '_A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�',
  ze = '-._A-Za-z0-9·À-ÖØ-öø-˿̀-ͽͿ-῿‌‍‿⁀⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�',
  Yj = '[' + He + '][' + ze + ']*',
  jr1 = He + ':',
  yr1 = ze + ':',
  $45 = new RegExp('^[' + jr1 + '][' + yr1 + ']*$'),
  q45 = new RegExp('^(' + Yj + '|' + Yj + ':' + Yj + ')$'),
  eV2 = /[\uD800-\uDB7F\uDC00-\uDFFF]/,
  AK2 = /[\uD800-\uDB7F\uDC00-\uDFFF]/g,
  BK2 = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
He += '\uD800-\uDB7F\uDC00-\uDFFF';
ze += '\uD800-\uDB7F\uDC00-\uDFFF';
Yj = '[' + He + '][' + ze + ']*';
jr1 = He + ':';
yr1 = ze + ':';
var M45 = new RegExp('^[' + jr1 + '][' + yr1 + ']*$'),
  L45 = new RegExp('^(' + Yj + '|' + Yj + ':' + Yj + ')$');
function R45(A) {
  if (U45.test(A)) return !0;
  if ($45.test(A)) return !0;
  if (!eV2.test(A)) return !1;
  if (!M45.test(A)) return !1;
  var B = A.match(AK2),
    Q = A.match(BK2);
  return Q !== null && 2 * Q.length === B.length;
}
function O45(A) {
  if (N45.test(A)) return !0;
  if (q45.test(A)) return !0;
  if (!eV2.test(A)) return !1;
  if (!L45.test(A)) return !1;
  var B = A.match(AK2),
    Q = A.match(BK2);
  return Q !== null && 2 * Q.length === B.length;
}

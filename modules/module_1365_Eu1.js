// Module: Eu1
// Params: MJ6

var { DOCUMENT_MODE: Lh } = iL(),
  Dh0 = [
    '+//silmaril//dtd html pro v0r11 19970101//',
    '-//as//dtd html 3.0 aswedit + extensions//',
    '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
    '-//ietf//dtd html 2.0 level 1//',
    '-//ietf//dtd html 2.0 level 2//',
    '-//ietf//dtd html 2.0 strict level 1//',
    '-//ietf//dtd html 2.0 strict level 2//',
    '-//ietf//dtd html 2.0 strict//',
    '-//ietf//dtd html 2.0//',
    '-//ietf//dtd html 2.1e//',
    '-//ietf//dtd html 3.0//',
    '-//ietf//dtd html 3.2 final//',
    '-//ietf//dtd html 3.2//',
    '-//ietf//dtd html 3//',
    '-//ietf//dtd html level 0//',
    '-//ietf//dtd html level 1//',
    '-//ietf//dtd html level 2//',
    '-//ietf//dtd html level 3//',
    '-//ietf//dtd html strict level 0//',
    '-//ietf//dtd html strict level 1//',
    '-//ietf//dtd html strict level 2//',
    '-//ietf//dtd html strict level 3//',
    '-//ietf//dtd html strict//',
    '-//ietf//dtd html//',
    '-//metrius//dtd metrius presentational//',
    '-//microsoft//dtd internet explorer 2.0 html strict//',
    '-//microsoft//dtd internet explorer 2.0 html//',
    '-//microsoft//dtd internet explorer 2.0 tables//',
    '-//microsoft//dtd internet explorer 3.0 html strict//',
    '-//microsoft//dtd internet explorer 3.0 html//',
    '-//microsoft//dtd internet explorer 3.0 tables//',
    '-//netscape comm. corp.//dtd html//',
    '-//netscape comm. corp.//dtd strict html//',
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    '-//sq//dtd html 2.0 hotmetal + extensions//',
    '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
    '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
    '-//spyglass//dtd html 2.0 extended//',
    '-//sun microsystems corp.//dtd hotjava html//',
    '-//sun microsystems corp.//dtd hotjava strict html//',
    '-//w3c//dtd html 3 1995-03-24//',
    '-//w3c//dtd html 3.2 draft//',
    '-//w3c//dtd html 3.2 final//',
    '-//w3c//dtd html 3.2//',
    '-//w3c//dtd html 3.2s draft//',
    '-//w3c//dtd html 4.0 frameset//',
    '-//w3c//dtd html 4.0 transitional//',
    '-//w3c//dtd html experimental 19960712//',
    '-//w3c//dtd html experimental 970421//',
    '-//w3c//dtd w3 html//',
    '-//w3o//dtd w3 html 3.0//',
    '-//webtechs//dtd mozilla html 2.0//',
    '-//webtechs//dtd mozilla html//',
  ],
  NJ6 = Dh0.concat(['-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']),
  $J6 = ['-//w3o//dtd w3 html strict 3.0//en//', '-/w3c/dtd html 4.0 transitional/en', 'html'],
  Zh0 = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'],
  qJ6 = Zh0.concat(['-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']);
function Ih0(A) {
  let B = A.indexOf('"') !== -1 ? "'" : '"';
  return B + A + B;
}
function Gh0(A, B) {
  for (let Q = 0; Q < B.length; Q++) if (A.indexOf(B[Q]) === 0) return !0;
  return !1;
}
MJ6.isConforming = function (A) {
  return (
    A.name === 'html' &&
    A.publicId === null &&
    (A.systemId === null || A.systemId === 'about:legacy-compat')
  );
};
MJ6.getDocumentMode = function (A) {
  if (A.name !== 'html') return Lh.QUIRKS;
  let B = A.systemId;
  if (B && B.toLowerCase() === 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd')
    return Lh.QUIRKS;
  let Q = A.publicId;
  if (Q !== null) {
    if (((Q = Q.toLowerCase()), $J6.indexOf(Q) > -1)) return Lh.QUIRKS;
    let I = B === null ? NJ6 : Dh0;
    if (Gh0(Q, I)) return Lh.QUIRKS;
    if (((I = B === null ? Zh0 : qJ6), Gh0(Q, I))) return Lh.LIMITED_QUIRKS;
  }
  return Lh.NO_QUIRKS;
};
MJ6.serializeContent = function (A, B, Q) {
  let I = '!DOCTYPE ';
  if (A) I += A;
  if (B) I += ' PUBLIC ' + Ih0(B);
  else if (Q) I += ' SYSTEM';
  if (Q !== null) I += ' ' + Ih0(Q);
  return I;
};

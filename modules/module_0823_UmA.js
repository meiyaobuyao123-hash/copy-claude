// Module: UmA
// Params: Kd5,EmA

class wmA {
  constructor(A) {
    ((this.tagname = A), (this.child = []), (this[':@'] = {}));
  }
  add(A, B) {
    if (A === '__proto__') A = '#__proto__';
    this.child.push({ [A]: B });
  }
  addChild(A) {
    if (A.tagname === '__proto__') A.tagname = '#__proto__';
    if (A[':@'] && Object.keys(A[':@']).length > 0)
      this.child.push({ [A.tagname]: A.child, [':@']: A[':@'] });
    else this.child.push({ [A.tagname]: A.child });
  }
}
EmA.exports = wmA;

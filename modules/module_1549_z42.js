// Module: z42
// Params: K42

Object.defineProperty(K42, '__esModule', { value: !0 });
K42.getConflictResolutionRecipe =
  K42.getDescriptionResolutionRecipe =
  K42.getTypeConflictResolutionRecipe =
  K42.getUnitConflictResolutionRecipe =
  K42.getValueTypeConflictResolutionRecipe =
  K42.getIncompatibilityDetails =
    void 0;
function Xv6(A, B) {
  let Q = '';
  if (A.unit !== B.unit)
    Q += `	- Unit '${A.unit}' does not match '${B.unit}'
`;
  if (A.type !== B.type)
    Q += `	- Type '${A.type}' does not match '${B.type}'
`;
  if (A.valueType !== B.valueType)
    Q += `	- Value Type '${A.valueType}' does not match '${B.valueType}'
`;
  if (A.description !== B.description)
    Q += `	- Description '${A.description}' does not match '${B.description}'
`;
  return Q;
}
K42.getIncompatibilityDetails = Xv6;
function J42(A, B) {
  return `	- use valueType '${A.valueType}' on instrument creation or use an instrument name other than '${B.name}'`;
}
K42.getValueTypeConflictResolutionRecipe = J42;
function C42(A, B) {
  return `	- use unit '${A.unit}' on instrument creation or use an instrument name other than '${B.name}'`;
}
K42.getUnitConflictResolutionRecipe = C42;
function X42(A, B) {
  let Q = { name: B.name, type: B.type, unit: B.unit },
    I = JSON.stringify(Q);
  return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${I}'`;
}
K42.getTypeConflictResolutionRecipe = X42;
function V42(A, B) {
  let Q = { name: B.name, type: B.type, unit: B.unit },
    I = JSON.stringify(Q);
  return `	- create a new view with a name other than '${A.name}' and InstrumentSelector '${I}'
    	- OR - create a new view with the name ${A.name} and description '${A.description}' and InstrumentSelector ${I}
    	- OR - create a new view with the name ${B.name} and description '${A.description}' and InstrumentSelector ${I}`;
}
K42.getDescriptionResolutionRecipe = V42;
function Vv6(A, B) {
  if (A.valueType !== B.valueType) return J42(A, B);
  if (A.unit !== B.unit) return C42(A, B);
  if (A.type !== B.type) return X42(A, B);
  if (A.description !== B.description) return V42(A, B);
  return '';
}
K42.getConflictResolutionRecipe = Vv6;

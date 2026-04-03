// Module: SUA
// Params: TP5,PUA

function XT9(A) {
  return {
    name: 'Golo',
    keywords: {
      keyword:
        'println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array',
      literal: 'true false null',
    },
    contains: [
      A.HASH_COMMENT_MODE,
      A.QUOTE_STRING_MODE,
      A.C_NUMBER_MODE,
      { className: 'meta', begin: '@[A-Za-z]+' },
    ],
  };
}
PUA.exports = XT9;

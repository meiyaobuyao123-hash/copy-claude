// Module: awA
// Params: bT5,nwA

function sR9(A) {
  return {
    name: 'Clean',
    aliases: ['icl', 'dcl'],
    keywords: {
      keyword:
        'if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr',
      built_in: 'Int Real Char Bool',
      literal: 'True False',
    },
    contains: [
      A.C_LINE_COMMENT_MODE,
      A.C_BLOCK_COMMENT_MODE,
      A.APOS_STRING_MODE,
      A.QUOTE_STRING_MODE,
      A.C_NUMBER_MODE,
      { begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>' },
    ],
  };
}
nwA.exports = sR9;

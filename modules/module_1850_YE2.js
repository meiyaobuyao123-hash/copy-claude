// Module: YE2
// Params: ss8,ZE2

ZE2.exports = function A(B, Q) {
  B = B || '   he is here   ';
  var I = {
      up: [
        '̍',
        '̎',
        '̄',
        '̅',
        '̿',
        '̑',
        '̆',
        '̐',
        '͒',
        '͗',
        '͑',
        '̇',
        '̈',
        '̊',
        '͂',
        '̓',
        '̈',
        '͊',
        '͋',
        '͌',
        '̃',
        '̂',
        '̌',
        '͐',
        '̀',
        '́',
        '̋',
        '̏',
        '̒',
        '̓',
        '̔',
        '̽',
        '̉',
        'ͣ',
        'ͤ',
        'ͥ',
        'ͦ',
        'ͧ',
        'ͨ',
        'ͩ',
        'ͪ',
        'ͫ',
        'ͬ',
        'ͭ',
        'ͮ',
        'ͯ',
        '̾',
        '͛',
        '͆',
        '̚',
      ],
      down: [
        '̖',
        '̗',
        '̘',
        '̙',
        '̜',
        '̝',
        '̞',
        '̟',
        '̠',
        '̤',
        '̥',
        '̦',
        '̩',
        '̪',
        '̫',
        '̬',
        '̭',
        '̮',
        '̯',
        '̰',
        '̱',
        '̲',
        '̳',
        '̹',
        '̺',
        '̻',
        '̼',
        'ͅ',
        '͇',
        '͈',
        '͉',
        '͍',
        '͎',
        '͓',
        '͔',
        '͕',
        '͖',
        '͙',
        '͚',
        '̣',
      ],
      mid: [
        '̕',
        '̛',
        '̀',
        '́',
        '͘',
        '̡',
        '̢',
        '̧',
        '̨',
        '̴',
        '̵',
        '̶',
        '͜',
        '͝',
        '͞',
        '͟',
        '͠',
        '͢',
        '̸',
        '̷',
        '͡',
        ' ҉',
      ],
    },
    G = [].concat(I.up, I.down, I.mid);
  function D(W) {
    var F = Math.floor(Math.random() * W);
    return F;
  }
  function Z(W) {
    var F = !1;
    return (
      G.filter(function (J) {
        F = J === W;
      }),
      F
    );
  }
  function Y(W, F) {
    var J = '',
      C,
      X;
    ((F = F || {}),
      (F.up = typeof F.up !== 'undefined' ? F.up : !0),
      (F.mid = typeof F.mid !== 'undefined' ? F.mid : !0),
      (F.down = typeof F.down !== 'undefined' ? F.down : !0),
      (F.size = typeof F.size !== 'undefined' ? F.size : 'maxi'),
      (W = W.split('')));
    for (X in W) {
      if (Z(X)) continue;
      switch (((J = J + W[X]), (C = { up: 0, down: 0, mid: 0 }), F.size)) {
        case 'mini':
          ((C.up = D(8)), (C.mid = D(2)), (C.down = D(8)));
          break;
        case 'maxi':
          ((C.up = D(16) + 3), (C.mid = D(4) + 1), (C.down = D(64) + 3));
          break;
        default:
          ((C.up = D(8) + 1), (C.mid = D(6) / 2), (C.down = D(8) + 1));
          break;
      }
      var V = ['up', 'mid', 'down'];
      for (var K in V) {
        var U = V[K];
        for (var N = 0; N <= C[U]; N++) if (F[U]) J = J + I[U][D(I[U].length)];
      }
    }
    return J;
  }
  return Y(B, Q);
};

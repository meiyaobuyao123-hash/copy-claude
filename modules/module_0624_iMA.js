// Module: iMA
// Params: R_5,lMA

function L_9(A) {
  var B = { className: 'params', begin: '\\(', end: '\\)' },
    Q =
      'attribute block constant cycle date dump include max min parent random range source template_from_string',
    I = { beginKeywords: Q, keywords: { name: Q }, relevance: 0, contains: [B] },
    G = {
      begin: /\|[A-Za-z_]+:?/,
      keywords:
        'abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode',
      contains: [I],
    },
    D =
      'apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with';
  return (
    (D =
      D +
      ' ' +
      D.split(' ')
        .map(function (Z) {
          return 'end' + Z;
        })
        .join(' ')),
    {
      name: 'Twig',
      aliases: ['craftcms'],
      case_insensitive: !0,
      subLanguage: 'xml',
      contains: [
        A.COMMENT(/\{#/, /#\}/),
        {
          className: 'template-tag',
          begin: /\{%/,
          end: /%\}/,
          contains: [
            {
              className: 'name',
              begin: /\w+/,
              keywords: D,
              starts: { endsWithParent: !0, contains: [G, I], relevance: 0 },
            },
          ],
        },
        { className: 'template-variable', begin: /\{\{/, end: /\}\}/, contains: ['self', G, I] },
      ],
    }
  );
}
lMA.exports = L_9;

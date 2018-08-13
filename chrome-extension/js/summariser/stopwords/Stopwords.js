const stopwords = [
  'a',
  'about',
  'above',
  'according',
  'across',
  'actually',
  'adj',
  'after',
  'afterwards',
  'again',
  'all',
  'almost',
  'along',
  'already',
  'also',
  'although',
  'always',
  'among',
  'amongst',
  'an',
  'am',
  'and',
  'another',
  'any',
  'anyhow',
  'anyone',
  'anything',
  'anywhere',
  'are',
  'aren',
  `aren't`,
  'around',
  'as',
  'at',
  'be',
  'became',
  'because',
  'become',
  'becomes',
  'been',
  'beforehand',
  'begin',
  'being',
  'below',
  'beside',
  'besides',
  'between',
  'both',
  'but',
  'by',
  'can',
  'cannot',
  `can't`,
  'caption',
  'co',
  'come',
  'could',
  'couldn',
  `couldn't`,
  'did',
  'didn',
  `didn't`,
  'do',
  'does',
  'doesn',
  `doesn't`,
  'don',
  `don't`,
  'down',
  'during',
  'each',
  'early',
  'eg',
  'either',
  'else',
  'elsewhere',
  'end',
  'ending',
  'enough',
  'etc',
  'even',
  'ever',
  'every',
  'everywhere',
  'except',
  'few',
  'for',
  'found',
  'from',
  'further',
  'had',
  'has',
  'hasn',
  `hasn't`,
  'have',
  'haven',
  `haven't`,
  'he',
  'hence',
  'her',
  'here',
  'hereafter',
  'hereby',
  'herein',
  'hereupon',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'ie',
  'i.e.',
  'if',
  'in',
  'inc',
  'inc.',
  'indeed',
  'instead',
  'into',
  'is',
  'isn',
  `isn't`,
  'it',
  'its',
  'itself',
  'last',
  'late',
  'later',
  'less',
  'let',
  'like',
  'likely',
  'll',
  'ltd',
  'made',
  'make',
  'makes',
  'many',
  'may',
  'maybe',
  'me',
  'meantime',
  'meanwhile',
  'might',
  'miss',
  'more',
  'most',
  'mostly',
  'mr',
  'mrs',
  'much',
  'must',
  'my',
  'myself',
  'namely',
  'near',
  'neither',
  'never',
  'nevertheless',
  'new',
  'next',
  'no',
  'nobody',
  'non',
  'none',
  'nonetheless',
  'noone',
  'nor',
  'not',
  'now',
  'NULL',
  'of',
  'off',
  'often',
  'on',
  'once',
  'only',
  'onto',
  'or',
  'other',
  'others',
  'otherwise',
  'our',
  'ours',
  'ourselves',
  'out',
  'over',
  'own',
  'per',
  'perhaps',
  'rather',
  're',
  'said',
  'same',
  'say',
  'seem',
  'seemed',
  'seeming',
  'seems',
  'several',
  'she',
  'should',
  'shouldn',
  `shouldn't`,
  'since',
  'so',
  'some',
  'still',
  'stop',
  'such',
  'taking',
  'ten',
  'than',
  'that',
  'the',
  'their',
  'them',
  'themselves',
  'then',
  'thence',
  'there',
  'thereafter',
  'thereby',
  'therefore',
  'therein',
  'thereupon',
  'these',
  'they',
  'this',
  'those',
  'though',
  'thousand',
  'through',
  'throughout',
  'thru',
  'thus',
  'to',
  'together',
  'too',
  'toward',
  'towards',
  'under',
  'unless',
  'unlike',
  'unlikely',
  'until',
  'up',
  'upon',
  'us',
  'use',
  'used',
  'using',
  've',
  'very',
  'via',
  'was',
  'wasn',
  'we',
  'well',
  'were',
  'weren',
  `weren't`,
  'what',
  'whatever',
  'when',
  'whence',
  'whenever',
  'where',
  'whereafter',
  'whereas',
  'whereby',
  'wherein',
  'whereupon',
  'wherever',
  'whether',
  'which',
  'while',
  'whither',
  'who',
  'whoever',
  'whole',
  'whom',
  'whomever',
  'whose',
  'why',
  'will',
  'with',
  'within',
  'without',
  'won',
  'would',
  'wouldn',
  `wouldn't`,
  'yes',
  'yet',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
];

module.exports.removeStopwords = function(tokens) {
  return tokens.filter(value => stopwords.indexOf(value.toLowerCase()) === -1)
};
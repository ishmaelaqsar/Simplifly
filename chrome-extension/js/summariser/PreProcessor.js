const STOPWORD = require('./stopwords/Stopwords');
const TAG = require("en-pos").Tag;

function toProcessedArray(sentenceArray) {
  const processedArray = [];
  for (let i = 0; i < sentenceArray.length; i++) {
    let sentence = sentenceArray[i];
    sentence = sentence.replace(/\.+$/, '');
    sentence = sentence.replace(/,/, '');
    sentence = sentence.split(/\s+/);
    sentence = STOPWORD.removeStopwords(sentence); // remove stopwords from text
    sentence = sentence.filter(x => (WORDPOS.isNoun(x) || WORDPOS.isAdjective(x) || WORDPOS.isVerb(x)));
    sentence = sentence.map(x => NATURAL.PorterStemmer.stem(x)); // stem similar words
    let processedSentence = '';
    for (let j = 0; j < sentence.length; j++) {
      if (j === sentence.length - 1) {
        processedSentence += sentence[j] + '. ';
      } else {
        processedSentence += sentence[j] + ' ';
      }
    }
    // console.log(processedSentence);
    processedArray[i] = processedSentence;
  }
  return processedArray;
}

function toWordArray(sentenceArray) {
  const wordArray = [];
  sentenceArray.forEach(x => {
    x = x.replace(/\.+$/, '');
    x = x.replace(/,/, '');
    x = x.split(/\s+/);
    wordArray.push.apply(wordArray, x);
  });
  return wordArray;
}

module.exports.toProcessedArray = toProcessedArray;
module.exports.toWordArray = toWordArray;
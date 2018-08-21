const STOPWORD = require('./stopwords/Stopwords');
const stemmer = require('porter-stemmer').stemmer;

function processArray(sentenceArray) {
  const processedArray = [];
  for (let i = 0; i < sentenceArray.length; i++) {
    let sentence = sentenceArray[i];
    sentence = toWordArray(sentence);
    sentence = STOPWORD.removeStopwords(sentence); // remove stopwords from text
    sentence = sentence.map(x => stemmer(x)); // stem similar words
    sentence.map((x) => {
      return x.toLowerCase();
    });
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

function processTitle(title) {
  title = toWordArray(title);
  title = STOPWORD.removeStopwords(title); // remove stopwords from text
  title = title.map(x => stemmer(x)); // stem similar words
  title.map((x) => {
    return x.toLowerCase();
  });
  let processedTitle = '';
  for (let i = 0; i < title.length; i++) {
    processedTitle += title[i] + ' ';
  }
  return processedTitle;
}

function toWordArray(sentence) {
  sentence = sentence.replace(/\.+$/, '');
  sentence = sentence.replace(/,/, '');
  sentence = sentence.split(/\s+/);
  return sentence;
}

module.exports.processArray = processArray;
module.exports.processTitle = processTitle;
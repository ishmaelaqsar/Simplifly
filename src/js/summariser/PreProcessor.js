const STOPWORD = require("./stopwords/Stopwords");
const STEMMER = require("porter-stemmer").stemmer;

function processArray(sentencesArray) {
  const processedArray = [];
  for (let i = 0; i < sentencesArray.length; i++) {
    const sentence = sentencesArray[i];

    let wordArray = toWordArray(sentence);
    wordArray = STOPWORD.removeStopwords(wordArray); // remove stopwords from text
    wordArray = wordArray
      .map(word => STEMMER(word))
      .map(word => word.toLowerCase()); // stem similar words

    processedArray[i] = wordArray.join(' ') + '.';
  }
  return processedArray;
}

function processTitle(title) {
  title = toWordArray(title);
  title = STOPWORD.removeStopwords(title); // remove stopwords from text
  title = title.map(x => STEMMER(x)); // stem similar words

  return title.join(' ');
}

function toWordArray(sentence) {
  return sentence
    .replace(/\.+$/, "")
    .replace(/,/, "")
    .split(/\s+/);
}

module.exports.processArray = processArray;
module.exports.processTitle = processTitle;

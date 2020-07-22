module.exports = function (topSentences, sentences) {
  // number of vertices to retain for post-processing, set between 5 and 20
  const T = Math.floor(sentences.length / 5) < 5
    ? 5
    : Math.floor(sentences.length) / 4;

  sentences = removeLineBreaks(sentences);

  // filter out one word sentences
  topSentences = topSentences.filter(
    sentence => wordCount(sentences[sentence.vertex]) > 1
  );

  // Order by score
  topSentences.sort((a, b) => b.score - a.score);

  // select top numKeywords keywords
  topSentences = topSentences.slice(0, T);

  // Reorder the sentences by article order
  topSentences.sort((a, b) => a.vertex - b.vertex);

  return topSentences.join("\n\n");
};

function removeLineBreaks(sentenceArray) {
  return sentenceArray.map(x => x.replace(/(\r\n\t|\n|\r\t)/gm, ""));
}

function wordCount(sentence) {
  return sentence.split(/\s+\b/).length;
}

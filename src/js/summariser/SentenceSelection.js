module.exports = function(topSentences, sentences) {
  const T =
    Math.floor(sentences.length / 4) < 5 ? 5 : Math.floor(sentences.length) / 4; // number of vertices to retain for post-processing, set between 5 and 20
  sentences = removeLineBreaks(sentences);
  // filter out one word sentences
  topSentences = topSentences.filter(
    item => countWords(sentences[item.vertex]) > 1
  );
  // Order by score
  topSentences.sort((a, b) => b.score - a.score);
  // console.log(topSentences);
  // select top numKeywords keywords
  topSentences = topSentences.slice(0, T);
  // Reorder the sentences by article order
  topSentences.sort((a, b) => a.vertex - b.vertex);
  let summary = "";
  // topSentences.forEach((item, index) => {
  //   if (index > 0 && index % 2 === 0) {
  //     summary += sentences[item.vertex] + ' \n\n'
  //   } else {
  //     summary += sentences[item.vertex] + ' '
  //   }
  // });
  topSentences.forEach(item => {
    summary += sentences[item.vertex] + " \n\n";
  });
  return summary;
};

function removeLineBreaks(sentenceArray) {
  return sentenceArray.map(x => x.replace(/(\r\n\t|\n|\r\t)/gm, ""));
}

function countWords(word) {
  return word.split(/\s+\b/).length;
}

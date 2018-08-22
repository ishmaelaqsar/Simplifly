module.exports = function (topSentences, sentences) {
  const T = (Math.floor(sentences.length / 3) < 5) ? 5 : (Math.floor(sentences.length) / 3); // number of vertices to retain for post-processing, set between 5 and 20
  topSentences.sort((a, b) => b.score - a.score);
  // console.log(topSentences);
  // select top numKeywords keywords
  topSentences = topSentences.slice(0, T);
  // Reorder the sentences by article order
  topSentences.sort((a, b) => a.vertex - b.vertex);
  let summary = '';
  topSentences.forEach((item, index) => {
    if (index > 0 && index % 2 === 0) {
      summary += sentences[item.vertex] + ' \n\n'
    } else {
      summary += sentences[item.vertex] + ' '
    }
  });
  return summary;
};
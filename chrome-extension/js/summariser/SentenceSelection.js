module.exports = function (graph, sentences) {
  const T = 10; // number of vertices to retain for post-processing, set between 5 and 20
  let topSentences = [];
  for (let key in graph) {
    if (graph.hasOwnProperty(key)) {
      topSentences.push({value: key, score: graph[key].score, vertex: graph[key].position});
    }
  }
  topSentences.sort((a, b) => b.score - a.score);
  // select top numKeywords keywords
  topSentences = topSentences.slice(0, Math.floor(T));
  // Reorder the sentences by article order
  topSentences.sort((a, b) => a.vertex - b.vertex);
  let summary = '';
  topSentences.forEach(item => summary += sentences[item.vertex] + ' ');
  return summary;
};
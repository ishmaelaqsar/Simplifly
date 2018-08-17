module.exports = function (topSentences, sentences) {
  const T = sentences.length/3; // number of vertices to retain for post-processing, set between 5 and 20
  // let topSentences = [];
  // for (let key in graph) {
  //   if (graph.hasOwnProperty(key)) {
  //     topSentences.push({value: key, score: graph[key].score, vertex: graph[key].position});
  //   }
  // }
  topSentences.sort((a, b) => b.score - a.score);
  // console.log(topSentences);
  // select top numKeywords keywords
  topSentences = topSentences.slice(0, Math.floor(T));
  // Reorder the sentences by article order
  topSentences.sort((a, b) => a.vertex - b.vertex);
  let summary = '';
  topSentences.forEach(item => summary += sentences[item.vertex] + ' ');

  // const topSentences = [];
  // for (let key in graph) {
  //     topSentences.push({value: key, score: graph[key]});
  // }
  // topSentences.sort((a, b) => b.score - a.score);
  // // select top numKeywords keywords
  // topSentences = topSentences.slice(0, Math.floor(T));
  // // Reorder the sentences by article order
  // topSentences.sort((a, b) => a.value - b.value);
  // let summary = '';
  // topSentences.forEach(item => summary += sentences[item.value] + ' \n');
  return summary;
};
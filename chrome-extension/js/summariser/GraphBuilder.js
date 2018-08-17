const SIMILARITY = require('compute-cosine-similarity');
const TfIdf = require('node-tfidf');
const TFIDF = new TfIdf();
TFIDF.addFileSync('./corpus/bbc.txt');

function pageRank(wordArray, sentenceArray) {
  TFIDF.addDocument(createStemmedArticle(sentenceArray));
  const N = 2; // search radius, set between 2 and 10
  const graph = require('pagerank.js');
  for (let i = 0; i < sentenceArray.length; i++) {
    const iScore = TFIDF.tfidfs(sentenceArray[i]);
    // adjacent to the next N words
    for (let j = 1; (j <= N) && (i + j < sentenceArray.length); j++) {
      const jScore = TFIDF.tfidfs(sentenceArray[i + j]);
      const similarity = SIMILARITY(iScore, jScore);
      graph.link(i, i + j, similarity);
      graph.link(i + j, i, similarity);
    }
  }
  let top = [];
  graph.rank(0.85, 0.000001, function (node, rank) {
    // console.log("Node " + node + " has a rank of " + rank);
    top.push({vertex: node, score: rank});
  });
  return top;
}

function createStemmedArticle(textArray) {
  let text = '';
  textArray.forEach(x => text += x);
  return text;
}

module.exports = pageRank;
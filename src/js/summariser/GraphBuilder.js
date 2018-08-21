const SIMILARITY = require('compute-cosine-similarity');
const TfIdf = require('node-tfidf');
const tfidf = new TfIdf();
tfidf.addDocument(JSON.parse(JSON.stringify(require('./corpus/bbc.json')))[0]);
const graph = require('pagerank.js');

function pageRank(title, sentenceArray) {
  tfidf.addDocument(createArticle(sentenceArray));
  tfidf.addDocument(title);
  const N = 8; // search radius, set between 2 and 10
  for (let i = 0; i < sentenceArray.length; i++) {
    const iScore = tfidf.tfidfs(sentenceArray[i]);
    // adjacent to the next N words
    for (let j = 1; (j <= N) && (i + j < sentenceArray.length); j++) {
      const jScore = tfidf.tfidfs(sentenceArray[i + j]);
      const similarity = SIMILARITY(iScore, jScore);
      graph.link(i, i + j, similarity);
      graph.link(i + j, i, similarity);
    }
  }
  let top = [];
  graph.rank(0.85, 0.0001, function (node, rank) {
    // console.log("Node " + node + " has a rank of " + rank);
    top.push({vertex: node, score: rank});
  });
  return top;
}

function createArticle(textArray) {
  let text = '';
  textArray.forEach(x => text += x + " ");
  return text;
}

module.exports = pageRank;
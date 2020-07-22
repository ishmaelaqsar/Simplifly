const SIMILARITY = require('compute-cosine-similarity');
const BBC_CORPUS = require('./corpus/bbc.json');
const GRAPH = require('pagerank.js');
const NODE_TFIDF = require('node-tfidf');
const TFIDF = new NODE_TFIDF();

TFIDF.addDocument(JSON.parse(JSON.stringify(BBC_CORPUS))[0]);

function pageRank(title, sentenceArray) {
  TFIDF.addDocument(sentenceArray.join(' '));
  TFIDF.addDocument(title);

  const N = 2; // search radius, set between 2 and 10
  for (let i = 0; i < sentenceArray.length; i++) {
    const iScore = TFIDF.tfidfs(sentenceArray[i]);
    // adjacent to the next N words
    for (let j = 1; (j <= N) && (i + j < sentenceArray.length); j++) {
      const jScore = TFIDF.tfidfs(sentenceArray[i + j]);
      const similarity = SIMILARITY(iScore, jScore);
      GRAPH.link(i, i + j, similarity);
      GRAPH.link(i + j, i, similarity);
    }
  }

  const top = [];
  GRAPH.rank(0.85, 0.0001, function (node, rank) {
    top.push({ vertex: node, score: rank });
  });
  return top;
}

module.exports = pageRank;
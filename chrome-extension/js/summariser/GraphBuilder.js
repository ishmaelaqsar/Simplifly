const NATURAL = require('natural');
const SIMILARITY = require('compute-cosine-similarity');
const TfIdf = NATURAL.TfIdf;
const TFIDF = new TfIdf();
TFIDF.addFileSync('./corpus/bbc.txt');

function createGraph(wordArray, sentenceArray) {
  TFIDF.addDocument(createStemmedArticle(sentenceArray));

  const N = 2; // search radius, set between 2 and 10
  const graph = {};
  // construct the graph
  for (let i = 0; i < sentenceArray.length; i++) {
    const currentVertex = sentenceArray[i];
    const iScore = TFIDF.tfidfs(sentenceArray[i]);
    // adjacent to the next N words
    for (let j = 1; (j <= N) && (i + j < sentenceArray.length); j++) {
      const adjacentVertex = sentenceArray[i + j];
      const jScore = TFIDF.tfidfs(sentenceArray[j]);
      const similarity = SIMILARITY(iScore, jScore);
      // if not already in graph
      if (!graph[currentVertex]) {
        graph[currentVertex] = newVertex(similarity, i);
      }
      // add adjacent word to the graph if it isn't already there
      if (!graph[adjacentVertex]) {
        graph[adjacentVertex] = newVertex(similarity, i + j);
      }
      // add adjacent vertex to the current vertex neighbours if it isn't already there
      if (graph[currentVertex].neighbors.indexOf(adjacentVertex) === -1) {
        graph[currentVertex].neighbors.push(adjacentVertex);
      }
      // add current vertex to the adjacent vertex neighbours if it isn't already there
      if (graph[adjacentVertex].neighbors.indexOf(currentVertex) === -1) {
        graph[adjacentVertex].neighbors.push(currentVertex);
      }
    }
  }
  return graph;
}

function newVertex(similarity, vertex) {
  return {
    neighbors: [],
    score: similarity,
    position: vertex
  }
}

function createStemmedArticle(textArray) {
  let text = '';
  textArray.forEach(x => text += x);
  return text;
}

module.exports = createGraph;
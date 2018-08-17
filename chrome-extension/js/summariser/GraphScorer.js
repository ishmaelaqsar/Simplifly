function scoreGraph(graph) {
  const D = 0.85; // damping factor
  const ITERATIONS = 30; // number of times to run algorithm, set between 20 and 30
  const THRESHOLD = 0.0001; // convergence threshold

  let count = 0;
  let scoreChange = THRESHOLD;
  while (scoreChange >= THRESHOLD || count < ITERATIONS) {
    count++;
    const newGraph = {};
    for (let i in graph) {
      if (graph.hasOwnProperty(i)) {
        newGraph[i] = {
          neighbors: graph[i].neighbors,
          score: (1 - D),
          position: graph[i].position
        };
        for (let j in graph[i].neighbors) {
          newGraph[i].score += D * graph[graph[i].neighbors[j]].score / graph[graph[i].neighbors[j]].neighbors.length;
        }
      }
    }
    scoreChange = scoreDifference(graph, newGraph);
    graph = newGraph;
  }
  return graph;

  // const pageRank = require('ngraph.pagerank');
  // return pageRank(graph, 0.85, 0.0001);

  // const pagerank = require('graphology-pagerank');
  // // console.log(graph.exportEdges());
  // const p = pagerank(graph, {maxIterations: 20, tolerance: 0.0001, weighted: true});
  // console.log(p);
  // return p;
}

function scoreDifference(a, b) {
  let result = 0;
  for (let i in a) {
    if (a.hasOwnProperty(i)) {
      result += Math.abs(a[i].score - b[i].score);
    }
  }
  return result;
}

module.exports = scoreGraph;
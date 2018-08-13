class Summariser {
  constructor(text) {
    this.text = text;
    this.summary = Summariser.summarise(text);
  }

  static summarise(text) {
    const PRE_PROCESSOR = require('./PreProcessor.js');
    const BUILD_GRAPH = require('./GraphBuilder.js');
    const SCORE_GRAPH = require('./GraphScorer.js');
    const BUILD_SUMMARY = require('./SentenceSelection.js');

    // console.log(text);
    const sentenceArray = PRE_PROCESSOR.tokenizer(text);
    // console.log(sentenceArray);
    const processedArray = PRE_PROCESSOR.toProcessedArray(sentenceArray);
    // console.log(processedArray);
    const wordArray = PRE_PROCESSOR.toWordArray(processedArray);
    // console.log(wordArray);
    let graph = BUILD_GRAPH(wordArray, processedArray);
    // console.log(graph);
    graph = SCORE_GRAPH(graph);
    // console.log(graph);
    return BUILD_SUMMARY(graph, sentenceArray);
  }

  get Summary() {
    return this.summary;
  }
}

// export default Summariser;

const FS = require('fs');
const text = FS.readFileSync('./tests/TestArticle1.txt', 'utf8'); // Change Article number from 1-5
const summariser = new Summariser(text);
console.log(summariser.Summary);
class Summariser {
  constructor(sentenceArray) {
    this.summary = Summariser.summarise(sentenceArray);
  }

  static summarise(sentenceArray) {
    const PRE_PROCESSOR = require('./PreProcessor.js');
    const PAGE_RANK = require('./GraphBuilder.js');
    const BUILD_SUMMARY = require('./SentenceSelection.js');

    // console.log(sentenceArray);
    const processedArray = PRE_PROCESSOR.toProcessedArray(sentenceArray);
    // console.log(processedArray);
    const wordArray = PRE_PROCESSOR.toWordArray(processedArray);
    // console.log(wordArray);
    const rankedSentences = PAGE_RANK(wordArray, processedArray);
    // console.log(rankedSentences);
    return BUILD_SUMMARY(rankedSentences, sentenceArray);
  }

  get Summary() {
    return this.summary;
  }
}

export default Summariser;

// const FS = require('fs');
// const text = FS.readFileSync('./tests/news3.txt', 'utf8'); // Change Article number from 1-5
// const summariser = new Summariser(text);
// const summary = summariser.Summary;
// console.log(summary);
// FS.writeFile('./tests/news4_system5.txt', summary, (err) => {
//   // throws an error, you could also catch it here
//   if (err) throw err;
//
//   // success case, the file was saved
//   console.log('summary saved');
// });
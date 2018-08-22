class Summariser {
  constructor(title, sentenceArray) {
    this.summary = Summariser.summarise(title, sentenceArray);
  }

  static summarise(title, sentenceArray) {
    const PRE_PROCESSOR = require('./PreProcessor.js');
    const PAGE_RANK = require('./GraphBuilder.js');
    const BUILD_SUMMARY = require('./SentenceSelection.js');

    // console.log(title);
    // console.log(sentenceArray);
    const processedTitle = PRE_PROCESSOR.processTitle(title);
    const processedArray = PRE_PROCESSOR.processArray(sentenceArray);
    // console.log(processedTitle);
    // console.log(processedArray);
    const rankedSentences = PAGE_RANK(processedTitle, processedArray);
    // console.log(rankedSentences);
    return BUILD_SUMMARY(rankedSentences, sentenceArray);
  }

  get Summary() {
    return this.summary;
  }
}

export default Summariser;

// const FS = require('fs');
// const text = FS.readFileSync('./tests/TestArticle1.txt', 'utf8'); // Change Article number from 1-5
// const array = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
// const summariser = new Summariser('FORTNITE is taking over, but you\'ll be amazed by just how much money the console, PC and mobile game is making.', array);
// const summary = summariser.Summary;
// console.log(summary);
// FS.writeFile('./tests/news4_system5.txt', summary, (err) => {
//   // throws an error, you could also catch it here
//   if (err) throw err;
//
//   // success case, the file was saved
//   console.log('summary saved');
// });
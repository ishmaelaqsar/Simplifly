class Summariser {
  constructor(title, sentenceArray) {
    this.summary = Summariser.summarise(title, sentenceArray);
  }

  static summarise(title, sentenceArray) {
    const PRE_PROCESSOR = require('./PreProcessor.js');
    const PAGE_RANK = require('./GraphBuilder.js');
    const BUILD_SUMMARY = require('./SentenceSelection.js');

    const processedTitle = PRE_PROCESSOR.processTitle(title);
    const processedArray = PRE_PROCESSOR.processArray(sentenceArray);
    const rankedSentences = PAGE_RANK(processedTitle, processedArray);
    return BUILD_SUMMARY(rankedSentences, sentenceArray);
  }

  get Summary() {
    return this.summary;
  }
}

export default Summariser;
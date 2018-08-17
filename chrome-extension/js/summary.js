function summarise(sentenceArray) {
  import Summariser from './summariser/Summariser.js';
  const summariser = new Summariser(sentenceArray);
  return summariser.Summary;
}

function setPage(title, body) {
  document.getElementById('title').innerText = title;
  document.getElementById('content').innerText = body;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  // Read it using the storage API
  chrome.storage.sync.get(['title', 'content'], (items) => {
    setPage(items.title, summarise(items.content));
  });
});


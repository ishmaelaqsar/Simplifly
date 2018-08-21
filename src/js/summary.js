import '../css/summary.css';
import Summariser from '../js/summariser/Summariser.js';

function summarise(title, sentenceArray) {
  const summariser = new Summariser(title, sentenceArray);
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
    setPage(items.title, summarise(items.title, items.content));
  });
});
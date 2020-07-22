import '../css/summary.css';
import Summariser from '../js/summariser/Summariser.js';

function summarise(title, sentenceArray) {
  return new Summariser(title, sentenceArray).Summary;
}

function setPage(title, body) {
  document.getElementById('title').innerText = title;
  document.getElementById('content').innerText = body;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  // Read it using the storage API
  chrome.storage.local.get(['title', 'content'], (items) => {
    setPage(items.title, summarise(items.title, items.content));
  });
  chrome.storage.local.clear();
});
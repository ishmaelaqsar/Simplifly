function summarise() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message: 'getPage'}, (response) => {
      if (chrome.runtime.lastError) {
        // An error occurred
        console.log("ERROR: ", chrome.runtime.lastError);
      } else {
        console.log(response.message);
        window.location.href='../html/summary.html';
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("summarise").addEventListener("click", summarise);
});
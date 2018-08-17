function summarise() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message: 'getPage'}, (response) => {
      if (chrome.runtime.lastError) {
        // An error occurred
        console.log("ERROR: ", chrome.runtime.lastError);
      } else {
        const title = response.title;
        const content = response.content;
        console.log(title);
        console.log(content);
        window.location.href='../html/summary.html';
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("summarise").addEventListener("click", summarise);
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
      "request from a content script:" + sender.tab.url :
      "request from the extension");
  if (request.message === 'getPage') {
    let title = '';
    let content = [];
    if (document.getSelection().toString() !== '') {
      // title = $('h1:first').text();
      title = document.title;
      content = window.getSelection().toString().replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").map(function (x) {
        return $.trim(x);
      });
    } else {
      title = $('h1:first').text();
      // title = document.title;
      content = fixContentArray($('p:not([class])').map(function () {
        return $.trim($(this).text());
      }).get());
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'title': title, 'content': content}, function () {
      console.log('Page contents stored for processing');
    });
    sendResponse({message: 'Page stored'});
  }
  return true; // Indicate that you will eventually call sendResponse
});

function fixContentArray(contentArray) {
  const fixedArray = [];
  contentArray.forEach(element => {
    const sentences = element.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    sentences.forEach(sentence => fixedArray.push(sentence));
  });
  return fixedArray;
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
      "request from a content script:" + sender.tab.url :
      "request from the extension");
  if (request.message === 'getPage') {
    const title = $('h1:first').text();
    const content = $('p:not([class])').map(function () {
      return $.trim($(this).text());
    }).get();
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'title': title, 'content': content}, function () {
      console.log('Page contents stored for processing');
    });
    sendResponse({message: 'Page stored'});
  }
  return true; // Indicate that you will eventually call sendResponse
});
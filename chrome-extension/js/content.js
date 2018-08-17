chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ?
      "request from a content script:" + sender.tab.url :
      "request from the extension");
  if (request.message === 'getPage') {

    sendResponse({
      title: $('h1:first').text(),
      //content: $('p:not([class])')
      content: $('p:not([class])').map(function() {
        return $.trim($(this).text());
      }).get()
    });
  }
  return true; // Indicate that you will eventually call sendResponse
});

function start() {
  alert("started");
}
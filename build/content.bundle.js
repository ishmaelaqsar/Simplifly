!function(n){var e={};function t(c){if(e[c])return e[c].exports;var o=e[c]={i:c,l:!1,exports:{}};return n[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(c,o,function(e){return n[e]}.bind(null,o));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=43)}({43:function(module,exports){eval("chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {\n  console.log(sender.tab ?\n      \"request from a content script:\" + sender.tab.url :\n      \"request from the extension\");\n  if (request.message === 'getPage') {\n    let title = '';\n    let content = [];\n    if (document.getSelection().toString() !== '') {\n      // title = $('h1:first').text();\n      title = document.title;\n      content = window.getSelection().toString().replace(/([.?!])\\s*(?=[A-Z])/g, \"$1|\").split(\"|\").map(function(x) {\n        return $.trim(x);\n      });\n    } else {\n      title = $('h1:first').text();\n      // title = document.title;\n      content = $('p:not([class])').map(function () {\n        return $.trim($(this).text());\n      }).get();\n    }\n    // Save it using the Chrome extension storage API.\n    chrome.storage.sync.set({'title': title, 'content': content}, function () {\n      console.log('Page contents stored for processing');\n    });\n    sendResponse({message: 'Page stored'});\n  }\n  return true; // Indicate that you will eventually call sendResponse\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGVudC5qcz80ZmFjIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coc2VuZGVyLnRhYiA/XG4gICAgICBcInJlcXVlc3QgZnJvbSBhIGNvbnRlbnQgc2NyaXB0OlwiICsgc2VuZGVyLnRhYi51cmwgOlxuICAgICAgXCJyZXF1ZXN0IGZyb20gdGhlIGV4dGVuc2lvblwiKTtcbiAgaWYgKHJlcXVlc3QubWVzc2FnZSA9PT0gJ2dldFBhZ2UnKSB7XG4gICAgbGV0IHRpdGxlID0gJyc7XG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSAhPT0gJycpIHtcbiAgICAgIC8vIHRpdGxlID0gJCgnaDE6Zmlyc3QnKS50ZXh0KCk7XG4gICAgICB0aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgY29udGVudCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnJlcGxhY2UoLyhbLj8hXSlcXHMqKD89W0EtWl0pL2csIFwiJDF8XCIpLnNwbGl0KFwifFwiKS5tYXAoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gJC50cmltKHgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gJCgnaDE6Zmlyc3QnKS50ZXh0KCk7XG4gICAgICAvLyB0aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgY29udGVudCA9ICQoJ3A6bm90KFtjbGFzc10pJykubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQudHJpbSgkKHRoaXMpLnRleHQoKSk7XG4gICAgICB9KS5nZXQoKTtcbiAgICB9XG4gICAgLy8gU2F2ZSBpdCB1c2luZyB0aGUgQ2hyb21lIGV4dGVuc2lvbiBzdG9yYWdlIEFQSS5cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7J3RpdGxlJzogdGl0bGUsICdjb250ZW50JzogY29udGVudH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYWdlIGNvbnRlbnRzIHN0b3JlZCBmb3IgcHJvY2Vzc2luZycpO1xuICAgIH0pO1xuICAgIHNlbmRSZXNwb25zZSh7bWVzc2FnZTogJ1BhZ2Ugc3RvcmVkJ30pO1xuICB9XG4gIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGV2ZW50dWFsbHkgY2FsbCBzZW5kUmVzcG9uc2Vcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n")}});
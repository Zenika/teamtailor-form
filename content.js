var popper = document.createElement('script');
popper.src = chrome.runtime.getURL('libs/popper.min.js');
(document.head || document.documentElement).appendChild(popper);

var tippy = document.createElement('script');
tippy.src = chrome.runtime.getURL('libs/tippy-bundle.umd.js');
(document.head || document.documentElement).appendChild(tippy);

var teamtailor = document.createElement('script');
teamtailor.src = chrome.runtime.getURL('teamtailor.js');
(document.head || document.documentElement).appendChild(teamtailor);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.runtime.getURL("css/style.css");

(document.head || document.documentElement).appendChild(style);

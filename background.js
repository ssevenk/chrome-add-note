let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.contextMenus.create({
    title: "change color",
    contexts: ["all"],
    id: "color"
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log({ info, tab})
  if (info.menuItemId === "color") {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {from: "background.js"}, response => {
          console.log("background -> content script infos have been sended");
     }
    )});
  }
})
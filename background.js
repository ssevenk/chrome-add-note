let Title = 'add note'
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: Title,
    contexts: ["selection"],
    id: Title
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  const { selectionText, menuItemId } = info
  if (menuItemId === Title) {
    chrome.storage.sync.get("myText", ({ myText }) => {
      const newText =  myText + selectionText + '\n'
      console.log({ myText, newText })
      chrome.storage.sync.set({ myText: newText });
    })
  }
})
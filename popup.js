let textDom = document.getElementById("text");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log({ request })
	const { selectionText } = request;
  textDom.innerHTML += '\n' + selectionText
	sendResponse({});
});
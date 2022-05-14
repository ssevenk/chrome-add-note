// chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 发送回传
	sendResponse({number: request.number});

    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    })
}
);
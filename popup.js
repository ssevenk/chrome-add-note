changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); // 获取当前页面
  
    chrome.scripting.executeScript({
      // 对目标网页执行指定函数
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
  }
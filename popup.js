let textDom = document.getElementById("text");
textDom.addEventListener("input", (event)=>{
  const value = event.target.value
  chrome.storage.sync.set({ myText: value });
})
chrome.storage.sync.get("myText", ({ myText = '' }) => {
  textDom.innerHTML = myText
})
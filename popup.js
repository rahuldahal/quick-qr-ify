document.getElementById('QRify').addEventListener('click', function () {
  const inputText = document.getElementById('inputText').value.trim();
  if (inputText !== '') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      chrome.tabs.sendMessage(currentTab.id, {
        action: 'QRify',
        text: inputText,
      });
    });
  }
});

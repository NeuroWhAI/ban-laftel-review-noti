chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.indexOf("://laftel.net/notifications") >= 0) {
        chrome.tabs.sendMessage(tabId, {
            message: "laftel-noti",
            url: changeInfo.url
        });
    }
});

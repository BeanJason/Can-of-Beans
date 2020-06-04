
chrome.browserAction.onClicked.addListener(buttonClicked)


function buttonClicked(tab) {
	
	let msg = {
		txt: "go"
	}
	
	chrome.tabs.sendMessage(tab.id, msg);
}

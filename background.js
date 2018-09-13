chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({events: true}, function() {
		console.log('Events is on');
	});
	
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {urlMatches: "https://www.google.ca/*"},
			})],
			
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
    });
	
	let modes = ["artgallery", "tonechart"];
	chrome.storage.sync.set({["allModes"]: modes});
});

chrome.runtime.onMessage.addListener(function(msg) {		
	let id = msg["id"];
	let active = msg["active"];
	
	chrome.storage.sync.set({[id]: active});
});
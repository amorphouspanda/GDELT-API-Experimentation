$("#options").change(function(e) {
	let id = e.target.id;
	let active = e.target.checked;
	
	chrome.runtime.sendMessage({"id": id, "active": active});
});
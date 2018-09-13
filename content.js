let query = $("#lst-ib").attr("value");

chrome.storage.sync.get(["allModes"], function(result) {
	let modes = result["allModes"];
	
	for (let a = 0; a < modes.length; a++) {
		let id = modes[a];
		chrome.storage.sync.get([id], function(result) {
			alert(id + ' currently is ' + result[id]);
			
			if (result[id]) {
				let url = `https://api.gdeltproject.org/api/v2/doc/doc?query=%22${query}%22&mode=${id}`;
				$("#rso").prepend("<div style='height:320px;'><iframe style='border:none; height:90%; width:100%;' src='" + url + "'></iframe></div>");
			}
		});
	}
});




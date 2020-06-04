console.log("test");

let filenames = [
	//"bean01.jpeg",
	"bean02.jpg",
	"bean03.jpg",
	"bean05.jpg",
	"bean06.jpg",
	"bean07.jpg",
	"bean08.jpg",
	//"bean09.jpg"
	//"bean10.jpg"
];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
	
	if (message.txt === "go"){

	let imgs = document.getElementsByTagName('img');

		for (imgElt of imgs) {
			let r = Math.floor(Math.random() * filenames.length);
			let file = 'beans/' + filenames[r];
			let url = chrome.extension.getURL(file);
			imgElt.src = url;
			console.log(imgElt.src);
		}

	}
	
}



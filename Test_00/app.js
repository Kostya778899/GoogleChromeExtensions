// Name - "Budlby"

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const body = document.querySelector("body");
const logo = document.getElementById("logo");

// setTimeout(function() {
// 	alert("DDF");
// }, 5000);
body.setAttribute("onpageshow", `
	function addScript(script) {
		script.onStart();
	}

	function aass() {
		alert("AASS");
	}
`);

aass();

if (logo) {
	removeAllChildNodes(logo);
	logo.style.alignItems = "center";
	fetch(chrome.runtime.getURL("logo_index.html"))
	.then(response => response.text())
	.then(logoHtml => {
		logo.insertAdjacentHTML("afterbegin", logoHtml);
			//.querySelector(".main_icon").scr = chrome.runtime.getURL("128.png");
		//logo.getElementByClass("main_icon").scr = chrome.runtime.getURL("128.png");
		logo.querySelectorAll("script").forEach(element => body.appendChild(element));
	});
}
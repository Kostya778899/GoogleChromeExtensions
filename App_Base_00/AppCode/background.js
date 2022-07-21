////function unprotectedCodeFunction() {
////	const dynamicallyCodeFileUrl = `https://kostya778899.github.io/
////		GoogleChromeExtensions/App_Base_00/DynamicallyCode/
////		Version_00/main.js`;

////	var i = 0;
////	function tryStartDynamicallyCode(onSuccess) {
////		try {
////			fetch(dynamicallyCodeFileUrl)
////				.then(response => response.text())
////				.then((dynamicallyCode) => eval(dynamicallyCode));
////		}
////		catch(error) {
////			if (i < 10) tryStartDynamicallyCode();
////			i++;
////		}
////		finally {onSuccess();}
////	}

////	tryStartDynamicallyCode(() => {});
////}

////function getInParentheses(str) {
////	const startIndex = str.indexOf("{") + 1;
////	const endIndex = str.lastIndexOf("}") - startIndex;
////	return str.substr(startIndex, endIndex);
////}


////const unprotectedCode = getInParentheses(unprotectedCodeFunction.toString());
////document.body?.setAttribute("onload", unprotectedCode);



console.log("Background worck.");

var div = document.createElement('iframe');
//div.src = 'sandbox.html';
div.src = chrome.runtime.getURL('sandbox.html');
div.id = 'sandbox';
div.style = 'display: none';
//var div = document.createElement('div');
//div.innerHTML = `<script>alert('LOL!');</script>`;
document.body.appendChild(div);

//window.addEventListener('message', async function (event) {
//    event.source.window.postMessage(eval(event.data), event.origin);
//});

////const iframe = document.getElementById('sandbox');
////alert('AA');
////window.addEventListener('message', (event) => {
////    //console.log('EVAL output', event.data);
////    alert('EVAL output' + event.data);
////});
//setTimeout(() => {
//    iframe.contentWindow.postMessage(`alert('LOLV');`, '*');
//}, 100);
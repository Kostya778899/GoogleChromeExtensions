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


var templates = [];
templates['hello'] = `alert("WWWorga!")`;

window.addEventListener('message', function (event) {
    var command = event.data.command;
    var name = event.data.name || 'hello';
    switch (command) {
        case 'render':
            event.source.postMessage({
                name: name,
                html: templates[name](event.data.context)
            }, event.origin);
            break;
        //case 'somethingElse':
    }
});

chrome.browserAction.onClicked.addListener(function () {
    var iframe = document.getElementById('theFrame');
    var message = {
        command: 'render',
        context: { thing: 'world' }
    };
    iframe.contentWindow.postMessage(message, '*');
});
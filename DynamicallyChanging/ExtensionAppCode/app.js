const body = document.querySelector("body");


// fetch("https://kostya778899.github.io/GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/Version_00/main.js")
// 	.then(response => response.text())
// 	.then(code => {
// 		body.setAttribute("onpageshow", code);
// });

body.insertAdjacentHTML("afterbegin", `
	<script src="aAABB.js" type="text/javascript">
		alert("insertAdjacentHTML");
	</script>
`);

body.setAttribute("onpageshow", `
	fetch("https://kostya778899.github.io/GoogleChromeExtensions/DynamicallyChanging/DynamicallyCode/Version_00/main.js")
	.then(response => response.text())
	.then(code => {
		eval(code);
	});
`);
const body = document.querySelector("body");


body.setAttribute("onpageshow", `
	alert("Worck.");
`);
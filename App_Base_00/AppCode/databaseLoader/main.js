console.log('database loader worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function injectHTML(src) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.onload = function () {
        console.log("iframe injected");
        this.remove();
    };

    document.body.appendChild(iframe);
}


fetch(databaseUrl + 'index.html').then(function (response) {
    response.text().then(function (text) {
        //eval(text);
        injectHTML(databaseUrl + 'index.html');
    });
});
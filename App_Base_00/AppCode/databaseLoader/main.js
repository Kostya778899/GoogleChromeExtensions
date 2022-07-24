console.log('database loader worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function injectElement(tag, src) {
    const element = document.createElement(tag);
    element.src = src;
    element.onload = function () {
        console.log(String.prototype.concat(tag, ' injected ', '(', src, ')'));
        this.remove();
    };

    //document.body.appendChild(element);
    while (!document.body) {
        await sleep(0.5);
    }
    document.body.appendChild(element);
}


try {
    injectElement('script', databaseUrl + 'code.js');
    injectElement('iframe', databaseUrl + 'index.html');
} catch (e) {
    console.log('database load error: ' + e);
}
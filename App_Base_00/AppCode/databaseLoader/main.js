console.log('database loader work');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function injectElement(tag, src) {
    const element = document.createElement(tag);
    element.src = src;
    element.onload = function () {
        console.log(String.prototype.concat(tag, ' injected ', '(', src, ')'));
        //this.remove();
    };

    document.body.appendChild(element);
}


try {
    injectElement('script', databaseUrl + 'code.js');

    (async () => {
        while (!document.body) {
            await sleep(0.5);
            alert('aa');
        }
        injectElement('iframe', databaseUrl + 'index.html');
    })();
} catch (e) {
    console.log('database load error: ' + e);
}
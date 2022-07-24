console.log('database loader work');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function injectElement(tag/*, src*/) {
    const element = document.createElement(tag);
    document.body.appendChild(element);
    //element.src = src;
    element.onload = function () {
        console.log(String.prototype.concat(tag, ' injected ', '(', src, ')'));
        //this.remove();
    };
    return element;
}


try {
    (async () => {
        while (!document.body) await sleep(50);
        injectElement('script') = { id: 'custom_extention_database_code', src: databaseUrl + 'code.js' };
        injectElement('iframe') = { id: 'custom_extention_database_index', src: databaseUrl + 'index.html' };
        injectElement('style') = { id: 'custom_extention_database_style', rel: "stylesheet", href: databaseUrl + 'style.css' };
    })();
} catch (e) {
    console.log('database load error: ' + e);
}
console.log('database loader work');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function injectElement(tag, src, id) {
    const element = document.createElement(tag);
    document.body.appendChild(element);
    element.src = src;
    element.id = id;
    element.onload = function () {
        console.log(String.prototype.concat(tag, ' injected ', '(', src, ')'));
        //this.remove();
    };
    return element;
}


try {
    (async () => {
        while (!document.body) await sleep(50);
        injectElement('script', databaseUrl + 'code.js', 'custom_extention_database_code');
        injectElement('iframe', databaseUrl + 'index.html', 'custom_extention_database_index');
    })();
} catch (e) {
    console.log('database load error: ' + e);
}
console.log('database loader work');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function injectElement(tag/*, src*/) {
    const element = document.createElement(tag);
    document.body.appendChild(element);
    //element.src = src;
    element.onload = () => console.log(String.prototype.concat('--  ', tag, ' injected'));
    return element;
}

Object.assign(HTMLElement.prototype, { with(event) { event(this); return this; } });



try {
    (async () => {
        while (!document.body) await sleep(50);
        //injectElement('script') = { id: 'custom_extention_database_code', src: databaseUrl + 'code.js' };
        injectElement('script')
            .with((x) => x.id = 'custom_extention_database_code')
            .with((x) => x.src = databaseUrl + 'code.js');
        injectElement('iframe')
            .with((x) => x.id = 'custom_extention_database_index')
            .with((x) => x.src = databaseUrl + 'index.html');
        injectElement('link')
            .with((x) => x.id = 'custom_extention_database_style')
            .with((x) => x.rel = 'stylesheet')
            .with((x) => x.href = databaseUrl + 'style.css');
    })();
} catch (e) {
    console.log('database load error: ' + e);
}
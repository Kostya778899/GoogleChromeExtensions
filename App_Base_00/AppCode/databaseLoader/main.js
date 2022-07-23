console.log('database loader worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';

const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

function injectCode(src) {
    const script = document.createElement('script');
    // This is why it works!
    script.src = src;
    script.onload = function () {
        console.log("script injected");
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}

function injectHTML(src) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.onload = function () {
        console.log("iframe injected");
        this.remove();
    };

    nullthrows(document.body || document.documentElement).appendChild(iframe);
}

//injectCode(chrome.runtime.getURL('/databaseLoader/unsafe.js'));
injectHTML(databaseUrl + 'index.html');
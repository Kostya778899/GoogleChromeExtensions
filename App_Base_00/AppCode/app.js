console.log("App worck.");


function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }


window.variableInMainContext = "hi";
eval(`alert('hiF')`);

setTimeout(async () => {
    while (true) {
        document.querySelectorAll('img').forEach((element) => element.src = 'https://papik.pro/uploads/posts/2021-10/1634789878_21-papik-pro-p-18-nakleika-23.jpg');
        await sleep(1000);
    }
}, 2000);
const logo = document.getElementById("logo");
const settingsWindow = document.getElementById("settings_window");


function tryReplaceArrayElement(array, oldElement, newElement) {
    const elementIndex = array.indexOf(oldElement);
    return ~elementIndex ? (array[elementIndex] = newElement, true) : false;
}


Object.assign(Object.prototype, { assign(value) { Object.assign(this.prototype, value); } });

String.assign({ toBoolean() { return this.toLowerCase() === "true" } });
HTMLCollection.assign({ forEach(event) { Array.prototype.forEach.call(this, (element) => event(element)); } });
[Document, HTMLElement].forEach((element) => element.assign({
    getElementsByDataAttribute(attributeName) { return this.querySelectorAll(attributeName); }
}));


logo.onclick = () => executeIfEnabled(logo, () => window.open("https://github.com/Kostya778899"));

document.querySelector('.settings_button .icon').contentWindow.postMessage(`
document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">';
text.start.innerHTML = '<i class="bi-airplane-engines-fill"></i>';
text.end.innerHTML = '<i class="bi-archive-fill"></i>';

`, '*');
//document.querySelector('.text .start').classList.add('bi');
//document.querySelector('.text .end').classList.add('bi bi-gear-fill');
//document.getElementsByClassName('settings_button')[0].contents().find("body").on('click', function (event) { alert('test'); });
document.getElementsByClassName('settings_button').forEach((element) => element.onclick = () => {
    if (element.hasAttribute('data-active') && !element.dataset.active.toBoolean()) return;
    settingsWindow.dataset.active = element.dataset.buttonEvent === 'openSettings';
    element.dataset.buttonEvent = settingsWindow.dataset.active.toBoolean() ? 'closeSettings' : 'openSettings';
});
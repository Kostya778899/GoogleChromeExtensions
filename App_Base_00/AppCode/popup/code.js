const logo = document.getElementById("logo");
const settingsWindow = document.getElementById("settings_window");


function tryReplaceArrayElement(array, oldElement, newElement) {
    const elementIndex = array.indexOf(oldElement);
    return ~elementIndex ? (array[elementIndex] = newElement, true) : false;
}

//function getEnabled(element) { return !element.classList.contains("disable"); }
//function setEnabled(element, value) { element.classList.toggle(("enable", "disable"), (value, !value)); }
//function executeIfEnabled(element, event) { return getEnabled(element) ? (event(), true) : false; }


Object.assign(Object.prototype, { assign(value) { Object.assign(this.prototype, value); } });

String.assign({ toBoolean() { return this.toLowerCase() === "true" } });
HTMLCollection.assign({ forEach(event) { Array.prototype.forEach.call(this, (element) => event(element)); } });
[Document, HTMLElement].forEach((element) => element.assign({
    getElementsByDataAttribute(attributeName) { return this.querySelectorAll(attributeName); }
}));


//document.getElementsByClassName("enable").forEach((element) => setEnabled(element, true));
//document.getElementsByClassName("disable").forEach((element) => setEnabled(element, false));

//document.getElementsByDataAttribute("active").forEach((element) => element.);

logo.onclick = () => executeIfEnabled(logo, () => window.open("https://github.com/Kostya778899"));

//document.getElementsByDataAttribute("active").forEach((element) => element.);
document.getElementsByClassName("settings_button").forEach((element) => element.onclick = () => {
    if (element.hasAttribute("data-active") && !element.dataset.active.toBoolean()) return;
    settingsWindow.dataset.active = element.dataset.buttonEvent === "openSettings";
    element.dataset.buttonEvent = settingsWindow.dataset.active.toBoolean() ? "closeSettings" : "openSettings";
});
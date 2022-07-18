const logo = document.getElementById("logo");
const settingsWindow = document.getElementById("settings_window");


function tryReplaceArrayElement(array, oldElement, newElement) {
    const elementIndex = array.indexOf(oldElement);
    return ~elementIndex ? (array[elementIndex] = newElement, true) : false;
}

function getEnabled(element) { return !element.classList.contains("disable"); }
function setEnabled(element, value) { element.classList.toggle(("enable", "disable"), (value, !value)); }
function executeIfEnabled(element, event) { return getEnabled(element) ? (event(), true) : false; }


Object.assign(HTMLCollection.prototype, { forEach(event) { Array.prototype.forEach.call(this, (element) => event(element)); } });
document.getElementsByClassName("enable").forEach((element) => setEnabled(element, true));
document.getElementsByClassName("disable").forEach((element) => setEnabled(element, false));


logo.onclick = () => executeIfEnabled(logo, () => window.open("https://github.com/Kostya778899"));
document.getElementsByClassName("open_settings_button").forEach((element) => element.onclick = () => {
    setEnabled(settingsWindow, true);
    document.getElementsByClassName("open_settings_button").forEach((element) => setEnabled(element, false));
    document.getElementsByClassName("close_settings_button").forEach((element) => setEnabled(element, true));
});
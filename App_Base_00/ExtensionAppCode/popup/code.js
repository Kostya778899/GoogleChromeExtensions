const logo = document.getElementById("logo");
const settingsWindow = document.getElementById("settings_window");


function tryReplaceArrayElement(array, oldElement, newElement) {
    const elementIndex = array.indexOf(oldElement);
    return ~elementIndex ? (array[elementIndex] = newElement, true) : false;
}

function getEnabled(element) { return !element.classList.contains("disable"); }
function setEnabled(element, value) {
    const tags = value ? ("enable", "disable") : ("disable", "enable");
    element.classList.remove(tags[1]);
    element.classList.add(tags[0]);
}
function executeIfEnabled(element, event) { return getEnabled(element) ? (event(), true) : false; }


logo.onclick = () => executeIfEnabled(logo, () => window.open("https://github.com/Kostya778899"));
document.body.querySelectorAll(".open_settings_button").forEach((element) => element.onclick = () => {
    //setElementShow(settingsWindow, true);
    //setElementShow(document.getElementById("navbar_main"), false);
    setEnabled(settingsWindow, true);
});
const settingsWindow = document.getElementById("settings_window");

function setElementShow(element, show) {
    if (show) {
        element.classList.remove("hide");
        element.classList.add("show");
    } else {
        element.classList.remove("show");
        element.classList.add("hide");
    }
}

document.getElementById("logo").onclick = () => window.open("https://github.com/Kostya778899");
//document.getElementsByClassName("open_settings_button").forEach((element) => alert("a"));
document.body.querySelectorAll(".open_settings_button").forEach((element) => element.onclick = () => {
    setElementShow(settingsWindow, true);
    setElementShow(document.getElementById("navbar_main"), false);
});
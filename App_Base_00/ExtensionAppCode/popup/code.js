const appSiteUrl = "https://github.com/Kostya778899";

const settingsWindow = document.getElementById("settings_window");


document.getElementById("logo_main").addEventListener('click', () => window.open(appSiteUrl));
document.getElementsByClassName("button_open_settings").addEventListener('click', () => {
	settings_window.classList.remove("hidden").add("shown");
});
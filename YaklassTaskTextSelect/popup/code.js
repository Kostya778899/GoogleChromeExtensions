const background = document.getElementById('background');
const logo = document.getElementById('logo');
const appActiveToggle = document.querySelector('#app-active-toggle .checkbox');
const myGithubLink = document.getElementsByClassName('my-github-link')[0];


function toggleTopic() { [background, myGithubLink].forEach((element) => element.classList.toggle('dark')); }


chrome.storage.sync.get({ 'appActive': true }, (value) => {
    appActiveToggle.checked = !value.appActive;
    if (!value.appActive) toggleTopic();
});
appActiveToggle.onclick = () => {
    chrome.storage.sync.set({ 'appActive': !appActiveToggle.checked });
    toggleTopic();
};

myGithubLink.onclick = () => open('https://github.com/Kostya778899');
const bodyEl = document.querySelector('[data-theme]');
const switchButton = document.querySelector('#switch-button');

const documentStyle = document.documentElement.style

const darkChar = '&#9789;', lightChar = '&#9788;';
const light = 'white', dark = 'black';

let theme = true; // true = light, false = dark

switchButton.addEventListener('click', () => {
    if(!theme){
        documentStyle.setProperty('--bg-color', dark);
        documentStyle.setProperty('--text-color', light);
        switchButton.innerHTML = lightChar;
        theme = !theme;
    } else{
        documentStyle.setProperty('--bg-color', light);
        documentStyle.setProperty('--text-color', dark);
        switchButton.innerHTML = darkChar;
        theme = !theme;
    }
}); 

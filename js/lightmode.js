var lightmode = 'false';

// Give toggle for switch
const toggle = document.getElementById('lightModeSwitch');
toggle.addEventListener('change', setLightMode, false);

// Give r :root css
const r = document.querySelector(':root');

// Check for local storage key
if (localStorage.getItem('lightmodeKey') === null) {
    lightmode = 'false';
    localStorage.setItem('lightmodeKey', 'false');
} else {
    lightmode = localStorage.getItem('lightmodeKey');
}

// Assign correct lightmode if not null
if (lightmode === 'true') {
    lightmode = 'false';
    setLightMode();
    toggle.checked = true;
}

function setLightMode() {
    if (lightmode == 'false') {
        lightmode = 'true';
        localStorage.setItem("lightmodeKey", lightmode);
        r.style.setProperty('--first-dark-transparent', '#d8dee9CC');
        r.style.setProperty('--first-dark', '#d8dee9CC');
        r.style.setProperty('--second-dark', '#e5e9f0');
        r.style.setProperty('--third-dark', '#e5e9f0');
        r.style.setProperty('--fourth-dark', '#eceff4');
        r.style.setProperty('--first-light', '#2e3440');
        r.style.setProperty('--second-light', '#3b4252');
        r.style.setProperty('--third-light', '#434c5e');
        r.style.setProperty('--background-dark', '#eceff4');
        document.body.style.backgroundImage = "url('media/background2.jpg')";
        document.body.style.backgroundSize = "cover";
    } else if (lightmode == 'true') {
        lightmode = 'false';
        localStorage.setItem("lightmodeKey", lightmode);
        r.style.setProperty('--first-dark-transparent', '#2e3440cc');
        r.style.setProperty('--first-dark', '#2e3440');
        r.style.setProperty('--second-dark', '#3b4252');
        r.style.setProperty('--third-dark', '#434c5e');
        r.style.setProperty('--fourth-dark', '#4c566a');
        r.style.setProperty('--first-light', '#d8dee9');
        r.style.setProperty('--second-light', '#e5e9f0');
        r.style.setProperty('--third-light', '#eceff4');
        r.style.setProperty('--background-dark', '#1a1d24');
        document.body.style.backgroundImage = "url('media/background.jpg')";
        document.body.style.backgroundSize = "auto";
    }
}
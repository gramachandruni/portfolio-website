let theme = localStorage.getItem('theme');

if (theme !== null) {
    setTheme(theme);
} else {
    setTheme('light');
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Selected', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css';
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'themes/blue.css';
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'themes/green.css';
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'themes/purple.css';
    }

    localStorage.setItem('theme', mode);
}

function readAlert() {
    alert('Oops, there\'s more to come in the future. Stay tuned!');
};

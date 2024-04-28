if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
} else {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle').addEventListener("click", () => {
        let theme = localStorage.getItem("theme");
        if (theme == 'dark') {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("theme", "dark");
        }
    }, false);
    // --------------------------------------------------------------- //
    const targetString = 'cryptocurrency';
    let currentIndex = 0;
    const alphabet = 'cryptouen';
    const target = document.getElementById('randomStr');
    function animateString(target) {
        let timer = setInterval(function () {
            let randomString = '';
            for (let i = 0; i < targetString.length; i++) {
                if (i < currentIndex) {
                    randomString += targetString[i];
                } else {
                    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
                }
            }
            target.textContent = randomString;
            if (randomString[currentIndex] === targetString[currentIndex]) {
                currentIndex++;
            }
            if (randomString === targetString) {
                clearInterval(timer);
            }
        }, 50);
    }
    animateString(target);
});

function displayInMenu(id) {
    document.getElementById(id + "InMenu").style.display = "flex";
}

function hideInMenu(id) {
    document.getElementById(id).style.display = "none";
}

function loadHTML(id) {
    const html = `${id}.html`;
    const target = document.getElementById("aricle");
    target.innerHTML = '';
    fetch(html)
        .then(response => response.text())
        .then(content => {
            target.innerHTML = content;
            const script = document.createElement('script');
            script.src = 'register.js';
            script.defer = true;
            document.head.appendChild(script);
        })
}
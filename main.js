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
        }, 60);
    }
    animateString(target);
    // --------------------------------------------------------------- //
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let slideWidth = slides[0].clientWidth;
    let count = 0;
    let intervalId = 0;
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("i");
            dot.className = "fa-solid fa-circle-dot";
            document.querySelector(".indicator-box").appendChild(dot);
        }
    }
    createDots();
    const dots = document.querySelectorAll('.fa-circle-dot');
    dots.forEach(dot => {
        dot.classList.remove("on");
        dots[count].classList.add('on');
    });
    function moveSlide() {
        count++;
        if (count >= slides.length) {
            count = 0;
        }
        let offset = -slideWidth * count;
        slider.style.transform = `translateX(${offset}px)`;
        dots.forEach(dot => {
            dot.classList.remove("on");
            dots[count].classList.add('on');
        });
    }
    function prevSlide() {
        if (count - 1 < 0) {
            count = slides.length - 1;
        } else {
            count -= 1;
        }
        let offset = -slideWidth * count;
        slider.style.transform = `translateX(${offset}px)`;
        dots.forEach(dot => {
            dot.classList.remove("on");
            dots[count].classList.add('on');
        });
    }
    function nextSlide() {
        if (count + 1 >= slides.length) {
            count = 0;
        } else {
            count++;
        }
        let offset = -slideWidth * count;
        slider.style.transform = `translateX(${offset}px)`;
        dots.forEach(dot => {
            dot.classList.remove("on");
            dots[count].classList.add('on');
        });
    }
    function startInterval() {
        intervalId = setInterval(moveSlide, 5000);
    }
    startInterval();
    slider.addEventListener('mouseover', function () {
        clearInterval(intervalId);
    });
    slider.addEventListener('mouseout', function () {
        startInterval();
    });
    prev.addEventListener("click", function () {
        prevSlide();
    });
    next.addEventListener("click", function () {
        nextSlide();
    });
});

function displayInMenu(id) {
    document.getElementById(id + "InMenu").style.display = "flex";
}

function hideInMenu(id) {
    document.getElementById(id).style.display = "none";
}

function loadHTML(id) {
    let otherScript = document.querySelectorAll('script:not([src="main.js"])');
    for (let i = 0; i < otherScript.length; i++) {
        otherScript[i].parentNode.removeChild(otherScript[i]);
    }
    const html = `${id}.html`;
    const target = document.getElementById("article");
    target.innerHTML = '';
    fetch(html)
        .then(response => response.text())
        .then(content => {
            target.innerHTML = content;
            const script = document.createElement('script');
            script.src = `${id}.js`;
            script.defer = true;
            document.head.appendChild(script);
        })
}
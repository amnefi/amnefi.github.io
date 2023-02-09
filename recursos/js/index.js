// NAVBAR RESPONSIVE
const navToggle = document.querySelector('.tog__navbar');
const navMenu = document.querySelector('.navbar__menu');
const navLink = document.querySelectorAll('.link__navbar');

(navToggle).addEventListener('click', () => {
    navMenu.classList.toggle('navbar--visible');
})

function linkAction() {
    navMenu.classList.remove('navbar--visible');
}

(navLink).forEach(n => n.addEventListener('click', linkAction));


// MODO OSCURO
const input = document.querySelector("input");
const body = document.querySelector("body");

const toggleThemeMode = () => {
    body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;

// ACTUALIZAR AÑO
function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
}

// Jednoduchý skript pro rok v patičce
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Funkce pro posun nahoru
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Získání tlačítka pro posun nahoru
const upButton = document.getElementById('upBtn');

// Přidání event listeneru k tlačítku pro posun nahoru
if (upButton) {
    upButton.addEventListener('click', topFunction);
}

// Funkce pro mobilní menu
const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');
const navLinkElements = document.querySelectorAll('#navLinks a');

function toggleMenu() {
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
    if (menuIcon) {
        menuIcon.classList.toggle('active');
    }
}

function closeMenu() {
    if (navLinks) {
        navLinks.classList.remove('active');
    }
    if (menuIcon) {
        menuIcon.classList.remove('active');
    }
}

// Přidání event listeneru k ikoně menu pro zobrazení/skrytí mobilního menu
if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
}

// Přidání event listenerů k odkazům pro zavření menu po kliknutí (pro mobilní zobrazení)
for (const link of navLinkElements) {
    link.addEventListener('click', closeMenu);
}

// Progress bar a tlačítko Nahoru
window.onscroll = () => { scrollIndicator() };

function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
    }

    // Tlačítko Nahoru
    const upBtn = document.getElementById("upBtn");
    if (upBtn) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            upBtn.style.display = "flex";
        } else {
            upBtn.style.display = "none";
        }
    }
}

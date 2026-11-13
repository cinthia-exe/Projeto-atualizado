// darkmode.js - Versão Definitiva

// 1. Aplica o tema imediatamente assim que o elemento é lido no HTML
(function () {
    const savedTheme = localStorage.getItem('ruan_film_theme');
    if (savedTheme === 'light') {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.checked = true;
    }
})();

// 2. Sincroniza e salva o estado ao interagir com o site
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Garante que o estado reflete o localStorage ao carregar a página
    const savedTheme = localStorage.getItem('ruan_film_theme');
    if (savedTheme === 'light') {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }

    // Salva a preferência sempre que o botão for acionado
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            localStorage.setItem('ruan_film_theme', 'light');
        } else {
            localStorage.setItem('ruan_film_theme', 'dark');
        }
    });
});

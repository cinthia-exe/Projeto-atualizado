// 1. Executa imediatamente assim que o script é lido pelo navegador
if (localStorage.getItem('ruan_theme') === 'dark') {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.checked = true;
    }
}

// 2. Configura os eventos de clique e garante o estado ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeButtons = document.querySelectorAll('.theme-button');

    // Reforça o estado caso o elemento tenha demorado um microssegundo a mais para aparecer
    if (localStorage.getItem('ruan_theme') === 'dark' && themeToggle) {
        themeToggle.checked = true;
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 

            if (themeToggle) {
                themeToggle.checked = !themeToggle.checked;

                if (themeToggle.checked) {
                    localStorage.setItem('ruan_theme', 'dark');
                } else {
                    localStorage.setItem('ruan_theme', 'light');
                }

                themeToggle.dispatchEvent(new Event('change'));
            }
        });
    });
});
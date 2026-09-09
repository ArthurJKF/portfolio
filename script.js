// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega apenas o nome do arquivo atual (ex: portfolio.html)
    const currentPage = window.location.pathname.split("/").pop();

    // Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll(".nav-links a");

    // Percorre cada link para checar a página ativa
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        // Se o href do link for igual à página que está aberta no navegador
        if (linkHref === currentPage) {
            link.style.color = "var(--blue-cobalt)";            /* Pinta o texto de Azul Cobalto */
            link.style.borderBottom = "2px solid var(--blue-cobalt)"; /* Adiciona a borda azul abaixo */
        }
    });

    console.log("Script carregado com sucesso!");
});
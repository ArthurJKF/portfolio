// Aguarda todo o documento HTML carregar antes de rodar os scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega o nome do arquivo da página atual (ex: portfolio.html)
    const currentPage = window.location.pathname.split("/").pop();

    // Seleciona os links do menu da direita
    const navLinks = document.querySelectorAll(".nav-links a");

    // Percorre cada link do menu superior
    navLinks.forEach(link => {
        // Se o atributo 'href' do link for exatamente igual à página aberta
        if (link.getAttribute("href") && currentPath.includes(link.getAttribute("href"))) {
            // Aplica a cor Azul Cobalto para avisar o usuário qual página ele está navegando
            link.style.color = "var(--blue-cobalt)";
            link.style.borderBottom = "2px solid var(--blue-cobalt)";
        }
    });

    console.log("Script do Portfólio de Arthur Ferreira carregado com sucesso!");
});
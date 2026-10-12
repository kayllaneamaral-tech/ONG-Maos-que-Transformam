// Menu principal e submenu acessíveis.
const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");
const submenu = document.getElementById("submenu-sobre");

function modoMobile() {
    return menuToggle &&
        window.getComputedStyle(menuToggle).display !== "none";
}

function definirSubmenu(aberto) {
    if (!dropdownToggle || !dropdown || !submenu) return;

    dropdownToggle.setAttribute("aria-expanded", String(aberto));
    dropdown.classList.toggle("dropdown-aberto", aberto);

    submenu.hidden = !aberto;
    submenu.style.setProperty(
        "display",
        aberto ? "block" : "none",
        "important"
    );
}

function definirMenu(aberto) {
    if (!menuToggle || !menuPrincipal) return;

    menuPrincipal.classList.toggle("menu-aberto", aberto);
    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    const ocultar = modoMobile() && !aberto;
    menuPrincipal.hidden = ocultar;

    if (ocultar) {
        menuPrincipal.style.setProperty("display", "none", "important");
    } else {
        menuPrincipal.style.removeProperty("display");
    }

    if (!aberto) definirSubmenu(false);
}

if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener("click", function () {
        const aberto =
            menuToggle.getAttribute("aria-expanded") === "true";

        definirMenu(!aberto);
    });

    window.addEventListener("resize", function () {
        // Evita manter o foco em um link que ficará oculto.
        const focoNoMenu = menuPrincipal.contains(document.activeElement);
        const aberto =
            menuToggle.getAttribute("aria-expanded") === "true";

        definirMenu(aberto);

        if (modoMobile() && !aberto && focoNoMenu) {
            menuToggle.focus();
        }
    });

    definirMenu(false);
}

if (dropdownToggle && dropdown && submenu) {
    definirSubmenu(false);

    dropdownToggle.addEventListener("click", function () {
        const aberto =
            dropdownToggle.getAttribute("aria-expanded") === "true";

        definirSubmenu(!aberto);
    });

    dropdown.addEventListener("focusout", function () {
        // Aguarda o foco chegar ao próximo elemento.
        window.setTimeout(function () {
            if (!dropdown.contains(document.activeElement)) {
                definirSubmenu(false);
            }
        }, 0);
    });
}

document.addEventListener("keydown", function (evento) {
    if (evento.key !== "Escape") return;

    const submenuAberto =
        dropdownToggle?.getAttribute("aria-expanded") === "true";

    const menuAberto =
        menuToggle?.getAttribute("aria-expanded") === "true";

    if (submenuAberto) {
        definirSubmenu(false);
        dropdownToggle.focus();
        evento.preventDefault();
    } else if (menuAberto && modoMobile()) {
        definirMenu(false);
        menuToggle.focus();
        evento.preventDefault();
    }
});

document.addEventListener("click", function (evento) {
    if (dropdown && !dropdown.contains(evento.target)) {
        const focoNoSubmenu = submenu?.contains(document.activeElement);

        definirSubmenu(false);

        if (focoNoSubmenu) dropdownToggle.focus();
    }

    if (
        modoMobile() &&
        menuPrincipal &&
        menuToggle &&
        !menuPrincipal.contains(evento.target) &&
        !menuToggle.contains(evento.target)
    ) {
        const focoNoMenu = menuPrincipal.contains(document.activeElement);

        definirMenu(false);

        if (focoNoMenu) menuToggle.focus();
    }
});

document.querySelectorAll("#menu-principal a").forEach(function (link) {
    link.addEventListener("click", function () {
        definirMenu(false);

        // Mantém o foco no conteúdo mesmo ao clicar na rota atual.
        document.getElementById("conteudo")?.focus({
            preventScroll: true
        });
    });
});
// Botão para ativar ou desativar o alto contraste.
const cabecalho = document.querySelector("header");

if (cabecalho) {
    const botaoContraste = document.createElement("button");

    botaoContraste.type = "button";
    botaoContraste.className = "contraste-toggle";
    botaoContraste.textContent = "Alto contraste";

    function aplicarContraste(ativo) {
        document.body.classList.toggle("alto-contraste", ativo);
        botaoContraste.setAttribute("aria-pressed", String(ativo));
    }

    let contrasteSalvo = null;

    try {
        contrasteSalvo = localStorage.getItem("altoContrasteONG");
    } catch (erro) {
        // O botão continua funcionando sem armazenamento.
    }

    const preferenciaContraste = window.matchMedia(
        "(prefers-contrast: more)"
    );

    aplicarContraste(
        contrasteSalvo === null
            ? preferenciaContraste.matches
            : contrasteSalvo === "true"
    );

    botaoContraste.addEventListener("click", function () {
        const ativo = !document.body.classList.contains("alto-contraste");

        aplicarContraste(ativo);

        try {
            localStorage.setItem("altoContrasteONG", String(ativo));
        } catch (erro) {
            // Mantém a escolha durante a sessão atual.
        }
    });

    cabecalho.appendChild(botaoContraste);
}
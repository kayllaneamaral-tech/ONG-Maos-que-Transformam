
// ==============================
// MÁSCARA DE TELEFONE
// ==============================

const telefone = document.getElementById("telefone");

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length <= 10) {

            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

        } else {

            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        }

        telefone.value = valor;

    });

}


// ==============================
// VALIDAÇÃO DO FORMULÁRIO
// E NOTIFICAÇÃO DE SUCESSO
// ==============================

const formulario = document.querySelector("form");

if (formulario) {

    let temporizadorToast;

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const toast = document.getElementById("toast-sucesso");

        if (toast) {

            clearTimeout(temporizadorToast);

            toast.textContent =
                "✓ Cadastro realizado com sucesso! Obrigado por fazer parte da ONG Mãos que Transformam.";

            toast.classList.add("toast-visivel");

            temporizadorToast = setTimeout(function () {

                toast.classList.remove("toast-visivel");

            }, 6000);

        }

        formulario.reset();

    });

}


// ==============================
// MENU HAMBÚRGUER
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", function () {

        const menuAberto =
            menuPrincipal.classList.toggle("menu-aberto");

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );

        menuToggle.setAttribute(
            "aria-label",
            menuAberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });

}


// ==============================
// DROPDOWN
// ==============================

const dropdownToggle =
    document.querySelector(".dropdown-toggle");

const dropdown =
    document.querySelector(".dropdown");

if (dropdownToggle && dropdown) {

    dropdownToggle.addEventListener("click", function () {

        const dropdownAberto =
            dropdown.classList.toggle("dropdown-aberto");

        dropdownToggle.setAttribute(
            "aria-expanded",
            dropdownAberto
        );

    });

}


// ==============================
// FECHAR MENU AO CLICAR EM LINK
// ==============================

const linksMenu =
    document.querySelectorAll("#menu-principal a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menuPrincipal && menuToggle) {

            menuPrincipal.classList.remove("menu-aberto");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

});
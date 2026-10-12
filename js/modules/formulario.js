export function iniciarFormulario() {
    const formulario = document.getElementById("formulario-voluntario");

    if (!formulario || formulario.dataset.inicializado === "true") return;

    formulario.dataset.inicializado = "true";

    const campos = formulario.elements;
    const telefone = campos.namedItem("telefone");
    const nome = campos.namedItem("nome");
    const mensagem = document.getElementById("mensagem-formulario");

    // Permite apresentar o feedback antes da validação nativa.
    formulario.noValidate = true;

    function mostrarMensagem(texto, erro = false) {
        if (!mensagem) return;

        mensagem.style.color = erro ? "#B00020" : "#12553D";
        mensagem.textContent = texto;
    }

    function validarCampo(campo) {
        if (campo === nome) {
            nome.setCustomValidity(
                nome.value.trim() ? "" : "Informe seu nome completo."
            );
        }

        if (campo === telefone) {
            const numero = telefone.value.replace(/\D/g, "");

            telefone.setCustomValidity(
                numero.length === 10 || numero.length === 11
                    ? ""
                    : "Informe o telefone com DDD, com 10 ou 11 dígitos."
            );
        }

        if (campo.willValidate) {
            if (campo.validity.valid) {
                campo.removeAttribute("aria-invalid");
            } else {
                campo.setAttribute("aria-invalid", "true");
            }
        }
    }

    // Recupera os dados armazenados neste navegador.
    try {
        const dadosSalvos = localStorage.getItem("voluntarioONG");

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);

            if (dados && typeof dados === "object") {
                const nomes = [
                    "nome",
                    "email",
                    "telefone",
                    "idade",
                    "area",
                    "mensagem"
                ];

                nomes.forEach((nomeCampo) => {
                    const campo = campos.namedItem(nomeCampo);
                    const valor = dados[nomeCampo];

                    if (
                        campo &&
                        (typeof valor === "string" ||
                            typeof valor === "number")
                    ) {
                        campo.value = String(valor);
                    }
                });
            }
        }
    } catch (erro) {
        mostrarMensagem(
            "Não foi possível recuperar o cadastro anterior. Você pode preencher o formulário novamente.",
            true
        );
    }

    // Máscara de telefone.
    telefone.addEventListener("input", function () {
        const numero = telefone.value.replace(/\D/g, "").slice(0, 11);

        if (numero.length <= 2) {
            telefone.value = numero;
        } else {
            const ddd = numero.slice(0, 2);
            const restante = numero.slice(2);
            const tamanhoPrefixo = numero.length > 10 ? 5 : 4;

            const prefixo = restante.slice(0, tamanhoPrefixo);
            const final = restante.slice(tamanhoPrefixo);

            telefone.value =
                `(${ddd}) ${prefixo}` + (final ? `-${final}` : "");
        }

        validarCampo(telefone);
    });

    formulario.addEventListener("input", function (evento) {
        const campo = evento.target;

        if (campo === nome || campo.hasAttribute("aria-invalid")) {
            validarCampo(campo);
        }
    });

    formulario.addEventListener("change", function (evento) {
        validarCampo(evento.target);
    });

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        Array.from(campos).forEach(validarCampo);

        if (!formulario.checkValidity()) {
            mostrarMensagem(
                "Confira os campos indicados e preencha os dados obrigatórios.",
                true
            );

            const primeiroInvalido = formulario.querySelector(":invalid");
            primeiroInvalido?.focus();
            formulario.reportValidity();
            return;
        }

        const dados = {
            nome: nome.value.trim(),
            email: campos.namedItem("email").value.trim(),
            telefone: telefone.value.trim(),
            idade: campos.namedItem("idade").value,
            area: campos.namedItem("area").value,
            mensagem: campos.namedItem("mensagem").value.trim()
        };

        try {
            localStorage.setItem("voluntarioONG", JSON.stringify(dados));

            formulario.reset();

            Array.from(campos).forEach((campo) => {
                campo.removeAttribute("aria-invalid");

                if (typeof campo.setCustomValidity === "function") {
                    campo.setCustomValidity("");
                }
            });

            mostrarMensagem(
                "Cadastro salvo neste navegador com sucesso! Esta demonstração não envia os dados à ONG."
            );
        } catch (erro) {
            mostrarMensagem(
                "Não foi possível salvar o cadastro neste navegador. Seus dados continuam no formulário.",
                true
            );
        }
    });
}
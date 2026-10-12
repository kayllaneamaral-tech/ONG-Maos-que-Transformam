export function iniciarFormulario() {
    const formulario = document.getElementById(
        "formulario-voluntario"
    );

    if (!formulario) return;

    const telefone = document.getElementById("telefone");
    const campos = formulario.elements;

    // Recupera os dados salvos anteriormente
    try {
        const dadosSalvos = localStorage.getItem("voluntarioONG");

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);

            campos.namedItem("nome").value = dados.nome || "";
            campos.namedItem("email").value = dados.email || "";
            campos.namedItem("telefone").value = dados.telefone || "";
            campos.namedItem("idade").value = dados.idade || "";
            campos.namedItem("area").value = dados.area || "";
            campos.namedItem("mensagem").value = dados.mensagem || "";
        }
    } catch (erro) {
        console.error("Erro ao recuperar os dados salvos:", erro);
    }

    // Máscara de telefone
    telefone.addEventListener("input", function () {
        let numero = telefone.value.replace(/\D/g, "").slice(0, 11);

        if (numero.length > 10) {
            numero = numero.replace(
                /^(\d{2})(\d{5})(\d{0,4})/,
                "($1) $2-$3"
            );
        } else {
            numero = numero.replace(
                /^(\d{2})(\d{4})(\d{0,4})/,
                "($1) $2-$3"
            );
        }

        telefone.value = numero;
    });

    // Envio do formulário
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const mensagem = document.getElementById(
            "mensagem-formulario"
        );

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = {
            nome: campos.namedItem("nome").value.trim(),
            email: campos.namedItem("email").value.trim(),
            telefone: campos.namedItem("telefone").value.trim(),
            idade: campos.namedItem("idade").value,
            area: campos.namedItem("area").value,
            mensagem: campos.namedItem("mensagem").value.trim()
        };

        try {
            localStorage.setItem(
                "voluntarioONG",
                JSON.stringify(dados)
            );

            mensagem.textContent =
                "Cadastro realizado com sucesso! Obrigado por participar.";

            mensagem.style.color = "green";

            formulario.reset();

        } catch (erro) {
            mensagem.textContent =
                "Não foi possível salvar os dados. Tente novamente.";

            mensagem.style.color = "red";
        }
    });
}
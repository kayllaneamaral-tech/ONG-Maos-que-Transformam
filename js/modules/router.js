const inicio = `
    <section class="destaque" aria-labelledby="titulo-principal">
        <div class="destaque-texto">
            <h1 id="titulo-principal" tabindex="-1">
                Mãos que Transformam
            </h1>
            <p>Juntos podemos transformar vidas e construir um futuro melhor.</p>
            <a href="#projetos">Conheça nossos projetos</a>
        </div>

        <img src="imagens/teste.png"
            alt="Voluntários realizando uma ação social">
    </section>

    <section id="missao" class="missao"
        aria-labelledby="titulo-missao">
        <div>
            <h2 id="titulo-missao" tabindex="-1">Nossa missão</h2>
            <p>Promover ações sociais que contribuam para a melhoria da qualidade de vida e para o desenvolvimento das comunidades.</p>
        </div>

        <img src="imagens/imagem2.png"
            alt="Ação social da ONG Mãos que Transformam">
    </section>

    <section id="projetos" aria-labelledby="titulo-projetos">
        <h2 id="titulo-projetos">Nossos projetos</h2>

        <div class="cards">
            <article>
                <img src="imagens/imagem3.png"
                    alt="Voluntários participando de uma ação social">
                <span class="badge">Voluntariado</span>
                <h3>Seja um voluntário</h3>
                <p>Faça parte da nossa equipe de voluntários e ajude a transformar vidas por meio de ações sociais.</p>
                <a href="#cadastro">Quero participar como voluntário</a>
            </article>

            <article>
                <img src="imagens/imagem4.png"
                    alt="Projeto social da ONG Mãos que Transformam">
                <span class="badge">Projeto social</span>
                <h3>Nossos projetos</h3>
                <p>Conheça as iniciativas desenvolvidas pela ONG para apoiar pessoas e comunidades.</p>
                <a href="#projetos">Conhecer projetos</a>
            </article>

            <article>
                <img src="imagens/imagem5.png"
                    alt="Divulgação das ações da ONG Mãos que Transformam">
                <span class="badge">Divulgação</span>
                <h3>Ajude a transformar</h3>
                <p>Compartilhe nossas ações e ajude a levar o trabalho da ONG para mais pessoas.</p>
                <a href="#contato">Entrar em contato com a ONG</a>
            </article>
        </div>
    </section>

    <section id="voluntariado"
        aria-labelledby="titulo-voluntariado">
        <h2 id="titulo-voluntariado" tabindex="-1">Voluntariado</h2>
        <p>Seu tempo e suas habilidades podem fazer a diferença. Participe das nossas ações e contribua para a transformação da comunidade.</p>
        <a href="#cadastro">Cadastre-se como voluntário</a>
    </section>

    <section id="contato" aria-labelledby="titulo-contato">
        <h2 id="titulo-contato" tabindex="-1">Entre em contato</h2>
        <p>Quer saber mais sobre a ONG Mãos que Transformam? Entre em contato conosco.</p>
        <p>
            E-mail:
            <a href="mailto:contato@maosquetransformam.org">
                contato@maosquetransformam.org
            </a>
        </p>
    </section>
`;

const paginas = {
    inicio,

    projetos: `
        <section aria-labelledby="titulo-pagina-projetos">
            <h1 id="titulo-pagina-projetos" tabindex="-1">
                Nossos projetos
            </h1>
            <p>Conheça as iniciativas solidárias da nossa ONG.</p>
            <a href="#cadastro">Quero ser voluntário</a>
        </section>
    `,

    cadastro: `
        <section class="transformacao"
            aria-labelledby="titulo-cadastro">
            <h1 id="titulo-cadastro" tabindex="-1">
                Seja um voluntário
            </h1>
            <p>
                Faça parte da ONG Mãos que Transformam
                e ajude a transformar vidas através da solidariedade.
            </p>
        </section>

        <form id="formulario-voluntario"
            aria-labelledby="titulo-cadastro"
            aria-describedby="instrucoes-cadastro">

            <p id="instrucoes-cadastro">
                Os campos identificados como obrigatórios devem ser preenchidos.
                Este cadastro é uma demonstração acadêmica.
            </p>

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo (obrigatório):</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    autocomplete="name"
                    placeholder="Digite seu nome completo"
                    required
                >

                <label for="email">E-mail (obrigatório):</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    placeholder="Digite seu e-mail"
                    required
                >

                <label for="telefone">Telefone (obrigatório):</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    autocomplete="tel"
                    placeholder="(00) 00000-0000"
                    aria-describedby="ajuda-telefone"
                    required
                >
                <p id="ajuda-telefone">
                    Informe o DDD e o número do telefone.
                </p>

                <label for="idade">Idade (obrigatório):</label>
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    min="16"
                    max="100"
                    placeholder="Digite sua idade"
                    aria-describedby="ajuda-idade"
                    required
                >
                <p id="ajuda-idade">
                    Informe uma idade entre 16 e 100 anos.
                </p>
            </fieldset>

            <fieldset>
                <legend>Como você pode ajudar?</legend>

                <label for="area">Área de interesse (obrigatório):</label>
                <select id="area" name="area" required>
                    <option value="">Selecione uma opção</option>
                    <option value="eventos">Participação em eventos</option>
                    <option value="alimentos">Arrecadação de alimentos</option>
                    <option value="educacao">Apoio educacional</option>
                    <option value="doacoes">Campanhas e doações</option>
                    <option value="divulgacao">Divulgação dos projetos</option>
                </select>

                <label for="mensagem">
                    Conte um pouco sobre você (opcional):
                </label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="6"
                    placeholder="Conte como você gostaria de contribuir..."
                ></textarea>
            </fieldset>

            <button type="submit">Quero ser voluntário</button>

            <p id="mensagem-formulario"
                role="status"
                aria-atomic="true"></p>
        </form>

        <section class="secao-alertas"
            aria-labelledby="titulo-alertas">
            <h2 id="titulo-alertas">Exemplos de mensagens do sistema</h2>
            <p>Os exemplos abaixo não representam o resultado do seu cadastro.</p>

            <div class="alerta alerta-sucesso">
                <strong>✓ Sucesso!</strong>
                Sua participação faz a diferença.
            </div>

            <div class="alerta alerta-aviso">
                <strong>⚠ Atenção!</strong>
                Confira seus dados antes de enviar o formulário.
            </div>

            <div class="alerta alerta-erro">
                <strong>✕ Erro!</strong>
                Não foi possível concluir a operação.
            </div>
        </section>

        <div id="toast-sucesso" class="toast"></div>
    `
};

const titulos = {
    inicio: "Início",
    projetos: "Nossos projetos",
    cadastro: "Seja um voluntário",
    missao: "Nossa missão",
    voluntariado: "Voluntariado",
    contato: "Contato"
};

let paginaCarregada = false;

export function carregarPagina() {
    const rota = window.location.hash.slice(1) || "inicio";
    const conteudo = document.getElementById("conteudo");

    if (!conteudo) return;

    const ancora = ["missao", "voluntariado", "contato"].includes(rota);

    if (ancora) {
        conteudo.innerHTML = inicio;
    } else {
        conteudo.innerHTML = paginas[rota] || `
            <section aria-labelledby="titulo-nao-encontrada">
                <h1 id="titulo-nao-encontrada" tabindex="-1">
                    Página não encontrada
                </h1>
                <a href="#inicio">Voltar ao início</a>
            </section>
        `;
    }

    document.title =
        (titulos[rota] || "Página não encontrada") +
        " | ONG Mãos que Transformam";

    document.querySelectorAll("#menu-principal a").forEach((link) => {
        if (link.getAttribute("href") === "#" + rota) {
            link.setAttribute("aria-current", ancora ? "location" : "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    const destino = ancora
        ? document.getElementById(rota)?.querySelector("h2")
        : conteudo.querySelector("h1");

    // Na navegação interna, leva o foco ao título do novo conteúdo.
    // Na abertura inicial, preserva o foco do navegador.
    if (paginaCarregada && destino) {
        destino.focus({ preventScroll: true });
    }

    if (ancora && destino) {
        destino.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
        window.scrollTo(0, 0);
    }

    paginaCarregada = true;
}
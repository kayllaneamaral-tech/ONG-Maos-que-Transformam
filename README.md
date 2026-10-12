# ONG Mãos que Transformam

Projeto acadêmico da disciplina de Desenvolvimento Front-end.
O site apresenta a ONG, divulga projetos sociais e permite
preencher um formulário de interesse em voluntariado.

## Tecnologias

- HTML5
- CSS3
- JavaScript com módulos
- Git e GitHub

## Funcionalidades

- Apresentação da ONG e de seus projetos.
- Layout responsivo.
- Navegação entre conteúdos por rotas com hash.
- Formulário de voluntariado com validação.
- Máscara de telefone e mensagens de feedback.

O formulário é uma demonstração acadêmica. Não há servidor
para enviar os cadastros à ONG.

## Organização dos arquivos

- `index.html`: página de entrada da aplicação.
- `css/style.css`: estilos e responsividade.
- `imagens/`: imagens utilizadas no site.
- `js/main.js`: inicialização da aplicação.
- `js/modules/router.js`: roteamento e conteúdo das páginas.
- `js/modules/formulario.js`: lógica do formulário.
- `cadastro.html`, `projetos.html` e `js/script.js`:
  arquivos das etapas anteriores.

## Como executar localmente

### Requisitos

- Navegador atualizado.
- Visual Studio Code.
- Extensão Live Server para executar um servidor local.
- Git para clonar o repositório.

### Instalação

1. Clone o repositório:

   git clone https://github.com/kayllaneamaral-tech/ONG-Maos-que-Transformam.git

2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server, caso ainda não tenha.
4. Clique com o botão direito em `index.html`.
5. Selecione “Open with Live Server”.

Utilize um servidor local para carregar corretamente os
módulos JavaScript.

## Como utilizar

Use o menu para acessar os conteúdos de início, projetos
e cadastro. Na área de voluntariado, preencha os campos
obrigatórios e envie o formulário para visualizar o feedback.

## Versionamento

O projeto utiliza uma organização baseada no GitFlow:

- `main`: versão principal, destinada às entregas.
- `develop`: integração das alterações em desenvolvimento.
- `feature/documentacao`: elaboração do README, separada
  do código principal.

As branches de trabalho devem partir de `develop`.
Após conferir as alterações, a integração será realizada
por pull request.

Para próximas etapas, poderão ser utilizadas:

- `feature/`: novas funcionalidades e melhorias.
- `release/`: preparação de uma versão para lançamento.
- `hotfix/`: correções urgentes da versão publicada.

## Padrão de commits

As mensagens indicam o tipo e o objetivo da alteração:

- `feat:` nova funcionalidade.
- `fix:` correção de problema.
- `docs:` alteração de documentação.
- `style:` formatação do código.
- `perf:` melhoria de desempenho.
- `chore:` configuração e manutenção.

Exemplo: `docs: adiciona README do projeto`.

## Acessibilidade

A revisão desta etapa terá como referência a WCAG 2.1,
nível AA, incluindo:

- Estrutura semântica e hierarquia dos títulos.
- Textos alternativos nas imagens.
- Rótulos e instruções nos campos do formulário.
- Navegação por teclado e foco visível.
- Contraste de cores.
- Anúncio de mensagens para leitores de tela.

A conformidade completa ainda depende da revisão e dos
testes, que serão documentados após sua execução.

## Otimização e publicação

A preparação para produção e o deploy ainda serão
realizados nesta experiência prática. As instruções de
build e o endereço público serão adicionados após a
configuração e verificação.

## Manutenção e contribuição

1. Atualize sua cópia da branch `develop`.
2. Crie uma branch para a alteração.
3. Modifique os arquivos necessários.
4. Teste a navegação, o formulário e a responsividade.
5. Verifique a acessibilidade dos elementos alterados.
6. Registre as alterações com commits claros.
7. Envie a branch e abra um pull request para `develop`.
8. Revise as mudanças antes de integrar.
9. Atualize este README quando houver mudanças na execução
   ou nas funcionalidades.

## Autora

Kayllane Kemilly  
GitHub: https://github.com/kayllaneamaral-tech
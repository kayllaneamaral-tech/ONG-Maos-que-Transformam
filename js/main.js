
import { carregarPagina } from "./modules/router.js";
import { iniciarFormulario } from "./modules/formulario.js";

function atualizarPagina() {
    carregarPagina();
    iniciarFormulario();
}

window.addEventListener("hashchange", atualizarPagina);

window.addEventListener("DOMContentLoaded", atualizarPagina);

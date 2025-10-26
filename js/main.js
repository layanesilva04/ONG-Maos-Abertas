import { paginas } from "./spa.js";
import { validarFormulario } from "./validacao.js";

const main = document.querySelector("main");

function carregarPagina(pagina) {

main.innerHTML = paginas[pagina] || "<h2>Página não encontrada</h2>";


if (pagina === "cadastro") {
validarFormulario();
}
}

function obterNomePagina(link) {
const dataPage = link.getAttribute("data-page");
if (dataPage) return dataPage;

const href = link.getAttribute("href") || "";
return href.replace(".html", "").replace("#", "") || "index";
}

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", (e) => {
e.preventDefault();
const pagina = obterNomePagina(link);
carregarPagina(pagina);

const navUl = document.querySelector("nav ul");
if (navUl.classList.contains("active")) {
navUl.classList.remove("active");
}
});
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
if (menuToggle) {
menuToggle.addEventListener('click', () => {
nav.classList.toggle('active');
});
}

carregarPagina("index");





/*const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav ul');

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });*/
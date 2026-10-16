// menu ativo

const links = document.querySelectorAll(".menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// galeria das poções

const imagens = document.querySelectorAll(".pocao-imagens img");
const galeriaContainer = document.querySelector(".pocao-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

imagens.forEach(eventosGaleria);

// script perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametros) {
  const elemento = document.getElementById(parametros);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

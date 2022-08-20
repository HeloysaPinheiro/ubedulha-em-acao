/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo projeto da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo projeto da lista
    - passo 4 - buscar o projeto que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o projeto anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o projeto anterior da lista
    - passo 4 - buscar o projeto que está selecionado e esconder 
    */

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const projetos = document.querySelectorAll(".projeto");
let projetoAtual = 0;

function esconderProjetoSelecionado(){
    const projetoSelecionado = document.querySelector(".selecionado");
    projetoSelecionado.classList.remove("selecionado");
}

function mostrarProjeto (indiceProjeto) {
   projetos[indiceProjeto].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function(){
    if (projetoAtual === projetos.length - 1) return;

    esconderProjetoSelecionado();
    projetoAtual++;
    mostrarProjeto(projetoAtual);
});

btnVoltar.addEventListener("click", function(){
    if (projetoAtual === 0) return;

    esconderProjetoSelecionado();
    projetoAtual--;
    mostrarProjeto(projetoAtual);
});
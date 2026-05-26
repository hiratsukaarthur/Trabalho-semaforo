let vermelho = document.getElementById("vermelho");
let amarelo = document.getElementById("amarelo");
let verde = document.getElementById("verde");

verde.classList.add("ativo");

setTimeout(() => {
    verde.classList.remove("ativo");
    amarelo.classList.add("ativo");
}, 10000);

setTimeout(() => {
    amarelo.classList.remove("ativo");
    vermelho.classList.add("ativo");
}, 15000);
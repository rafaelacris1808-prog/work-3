// 1. Isso aparece no console do navegador (F12)
console.log("Olá, JavaScript funcionando!");

// 2. Variáveis - onde guardamos informação
let nome = "Seu nome aqui";
let idade = 20;
"oi"

// 3. Função - um bloco que só executa quando chamamos
function dizerOla() {
  alert("Olá " + nome + "! Você tem " + idade + " anos.");
}

// 4. Mexendo no HTML
// Isso pega seu h1 e muda o texto dele
let titulo = document.querySelector("h1");
titulo.textContent = "Agora mudei pelo JavaScript!";
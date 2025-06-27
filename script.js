// script.js

document.getElementById('adicionarCartao').addEventListener('click', () => {
    const pergunta = prompt('Digite a pergunta:');
    const resposta = prompt('Digite a resposta:');
    if (pergunta && resposta) {
        criaCartao(pergunta, resposta);
    } else {
        alert('Por favor, insira ambos pergunta e resposta.');
    }
});

// perguntas.js

// Exemplo de função que cria um cartão com perguntas e respostas
function criaCartao(pergunta, resposta) {
    const cartao = document.createElement('div');
    cartao.className = 'cartao';

    const perguntaEl = document.createElement('div');
    perguntaEl.className = 'pergunta';
    perguntaEl.textContent = pergunta;

    const respostaEl = document.createElement('div');
    respostaEl.className = 'resposta';
    respostaEl.textContent = resposta;

    // Adiciona evento para mostrar/ocultar a resposta ao clicar no cartão
    cartao.addEventListener('click', () => {
        if (respostaEl.style.display === 'none') {
            respostaEl.style.display = 'block';
        } else {
            respostaEl.style.display = 'none';
        }
    });

    cartao.appendChild(perguntaEl);
    cartao.appendChild(respostaEl);

    // Adiciona o cartão ao elemento principal no index.html
    const container = document.getElementById('cartao');
    container.appendChild(cartao);
}

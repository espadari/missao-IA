// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a maior praia do Brasil?",
        alternativas: [
            "praia do cassino",
            "bombinhas"
        ],
        correta: 0 // A primeira alternativa é a corretatg
    },
    {
        enunciado: "Qual comida é típica do brasil?",
        alternativas: [
            "macarrão",
            "feijoada"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual a raça de cachorro mais cara?",
        alternativas: [
            "spitz alemão",
            "Mastim tibetano"
        ],
        correta: 1
    },
    {
        enunciado: "Qual é a maior cidade do Brasil?",
        alternativas: [
            "São Paulo",
            "Rio de Janeiro"
        ],
        correta: 0
    },
    {
        enunciado: "Qual a menor cidade do Paraná?",
        alternativas: [
            "Nova Aliança do Ivaí",
            "Jardim Olinda"
        ],
        correta: 0
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Define o texto do botão como a alternativa
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Esconde a caixa de perguntas
    caixaPrincipal.style.display = "none";
    // Mostra a caixa de resultado
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    // Criar botão de reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    // Adiciona um evento de click ao botão de reiniciar
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();


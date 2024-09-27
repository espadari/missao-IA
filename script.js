const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-pergunta");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");
const caixaPrincipal = document.querySelector(".caixa-resultado");

//Array de objetos contendo as perguntas e alernativas
const perguntas = [
    {
        enunciado: "Qual a marca líder em dispositivos?"
    alternativas: [
            "samsung",
            "apple"
        ],
        correta: 0 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual região do Brasil é mais quente?"
    alternativas: [
            "Norte",
            "Nordeste"
        ],
        correta: 0 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual a comida mais típica do Brasil?"
    alternativas: [
            "açaí",
            "feijoada"
        ],
        correta: 0 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual a região mais fria do Brasil?"
    alternativas: [
            "Sul",
            "Sudeste"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual o país mais populoso?"
    alternativas: [
            "China",
            "japão"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
];

let atual = 0
let perguntaAtual;
let pontuacao = 0;
 function mostrarPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativas,index) => {
          const botao = documento.createElement("button");
          botao.addEventlistener("click", () => verificaResposta (index));
          caixaAlternativas.appendChild(botao);
         });
 }

 //FUNÇÃO VERIFICAR RESPOTA
 function vereficaResposta(Seleciona){
      if (Seleciona === perguntaAtual.correta){
        pontuacao++;
      }
      atual++;

      if(atual < perguntas.lenght){
        mostrarPerguntas();
      } else {
          mostrarPergunta();
      }

 }
 function mostrarResultado(){
    caixaPrincipal.style.display = "none";
    caixaResultado.style.display = "block";

    setTimeout(() =>caixaResultado.classList.add("mostrar"),10);
    textoResultado.textContent = `"Voce acertou $ {pontuacao} de $ {perguntas.lenght} perguntas´;
 }
    
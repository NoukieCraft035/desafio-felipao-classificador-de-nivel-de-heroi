//variável: herói (informações do herói)
let heroi = 
[//matriz de herói com xp (lista com colunas 0 e 1)
    ["Richard", 40],
    ["Ronaldo", 1500],
    ["Alfredo", 3001],
    ["Octavius", 4890],
    ["Sandro", 6200],
    ["Felipe", 15000],
    ["Carlos", 7498],
    ["Tiago", 8675],
    ["Kenedy", 9288],
    ["Sansão", 26000]
];
//herói tá na coluna 0
//xp tá na coluna 1



//variável: vertor de ranks (exibe os ranks existentes)
let rank = 
[
    ["Ferro"],
    ["Bronze"],
    ["Prata"],
    ["Ouro"],
    ["Platina"],
    ["Ascendente"],
    ["Imortal"],
    ["Radiante"]
];


//função para determinar o rank que deriva do vetor "rank" "getRank" com base no XP (xp)
function getRank(xp) {
    if (xp < 1000) return rank[0];  // Ferro
    if (xp < 2000) return rank[1];  // Bronze
    if (xp < 5000) return rank[2];  // Prata
    if (xp < 7000) return rank[3];  // Ouro
    if (xp < 8000) return rank[4];  // Platina
    if (xp < 9000) return rank[5];  // Ascendente
    if (xp < 10000) return rank[6]; // Imortal
    if (xp > 10000) return rank[7]; // Radiante
}


//Saída para cada herói
for (let i = 0; i < heroi.length; i++) { //para cada índice "i" (que é um item na lista), o loop percorre todos os itens "<" até o fim da lista "i++" passa adiante na lista
    let nome = heroi[i][0]; //tá dizendo que na primeira coluna "0" da matriz herói é o nome do herói, convertendo-a na variável "nome"
    let xp = heroi[i][1]; //tá dizendo que na segunda coluna "1" da matriz herói é o xp do herói, convertendo-a na variável "xp"
    let nivel = getRank(xp); //converte a função "getRank(xp)" na variável nível
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
}
//for = operação de loop
//i = índice (variável de índice que começa em 0 e incrementa a cada iteração)
//i++ = incrementar (adiciona 1 ao valor atual de i a cada iteração)

//
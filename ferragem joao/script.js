//MARTELO,PREGO,ALICATE,PARAFUSO
// 19,90  10,00  23,00 

const precos={ //DICIONARIO
    "parafuso": 10.90,
    "martelo":  23.70,
    "chave de fenda": 10.99,
    "serrote": 30.00
};

const estoque={ 
    "parafuso": 100,
    "martelo":  4,
    "chave de fenda": 6,
    "serrote": 1000,

};
//ACESSAR GUARDAR A QUANTIDADE 
//CALCULAR O PREÇO TOTAL 
function calcularpreco(){
    
    let qtd = document.getElementById("quantidade").value; //pega a quantidade atual digitada
    let escolha = document.getElementById("produto").value; //pega o nome do produto selecionado 
    let valortxoal = qtd * precos[escolha] //calcular o valor total multiplicando o preço do produto pela quantidade 
    document.getElementById("resultado").innerHTML = valortxoal // 
}

let qtd = document.getElementById("quantidade").Value;

comsole.log(qtd);


//CALCULAR O PREÇO TOTAL 
function calcularpreco(){
    let qtd = document.getElementById("quantidade").value; //pega a quantidade atual digitada
    let escolha = document.getElementById("produto").value; //pega o nome do produto selecionado 
    let valortxoal = qtd * precos[escolha] //calcular o valor total multiplicando o preço do produto pela quantidade 
    document.getElementById("resultado").innerHTML = valortxoal // 
}



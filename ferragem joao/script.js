//MARTELO,PREGO,ALICATE,PARAFUSO
// 19,90  10,00  23,00 

const precos={
    "parafuso": 10.90,
    "martelo":  23.70,
    "chave de fenda": 10.99,
    "serrote": 30.00
};
//atualizar campo de preço automaticamente ao escolher produto 
document.getElementById("produto").addEventListener("change,fucction()"){
    const produtoSelecionado = this.ariavaluemax;
    const precos =
    precos 
    [produtosselecionados] || "" ;
    document.getElementById("preco").value = precos ? precos.tofixed(2):"";     
}
     


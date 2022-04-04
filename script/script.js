// Carne - 400 gr por pessoa + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml 

// crianças valem por 0,5

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado");




function calcular(){
    

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let refrigerante = refrigerantePP(duracao);


    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalRefrigerante = refrigerante * adultos + (refrigerante /2 * criancas);

    //coloca-se o "+" antes do sinal de "=" para imprimir mais de um innerHTML
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de: </h2>`

    resultado.innerHTML += `
    <div class= "result-block">
    <img class="img-ico" src="./assets/icones-display/steak.png" >
    <p> ${Math.ceil(qtdTotalCarne / 1000)} Kg de carne</p>
    <div>
    `


    resultado.innerHTML += `
    <div class="result-block">
    <img class="img-ico" src="./assets/icones-display/beer.png" >
    <p> ${Math.ceil(qtdTotalCerveja / 350)} Latas de cerveja (350ml)</p>
    </div>
    `


    resultado.innerHTML += `
    <div class="result-block">
    <img class="img-ico" src="./assets/icones-display/bottle.png" >
    <p> ${Math.ceil(qtdTotalRefrigerante / 2000)} Garrafas de refrigerante (2L)</p>
    </div>
    `
    
}

//funções pra  atribuir o valor em 'duracao', PP significa 'Por Pessoa'
function  carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else if (duracao <= 5){
        return 400
    }else{
        return 0
    }

}

function cervejaPP(duracao){
    if(duracao >= 6 ){
        return 2000
    }else if(duracao <= 5){
        return 1200
    }else{
        return 0
    }
}
 
// Nessa função coloquei um alert caso o client não selecionar a quantidade de horas 
function refrigerantePP(duracao){
    if(duracao >= 6){
        return 1500
    }else if (duracao <=5){
        return 1000
    }else{
        return alert ("Informe a duração do churrasco"), 0;
    }
}


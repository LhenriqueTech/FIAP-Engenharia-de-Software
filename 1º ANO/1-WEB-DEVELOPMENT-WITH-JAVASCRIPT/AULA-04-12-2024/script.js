var resultados = document.getElementById("resultado")

function soma (){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    //Processamento
    var soma = n1 + n2;

    //Saída
    resultados.innerText = `O resultado da soma é  ${soma}`
}

function subtracao (){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    //Processamento
    var subtracao = n1 - n2;

    //Saída
    resultados.innerText = `O resultado da subtração é  ${subtracao}`
}

function multi (){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    //Processamento
    var multi = n1 * n2;

    //Saída
    resultados.innerText = `O resultado da multiplicação é  ${multi}`
}

function divisao (){
    //Entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
  
    //Processamento
    var divisao = n1 / n2;

    //Saída
    resultados.innerText = `O resultado da divisão é  ${divisao}`
}
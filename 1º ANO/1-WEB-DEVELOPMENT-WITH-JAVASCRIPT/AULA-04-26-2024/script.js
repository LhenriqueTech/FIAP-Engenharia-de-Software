function calcular(){
    var num = parseInt(document.getElementById("numero").value)
    while (num > 0){
    texto = `O numero é ${num}`;
    console.log(texto)
    num --;
    }
}

for(i=0; i< 10; i++){
    console.log(i)
}

function calcular2(){
    var num = parseInt(document.getElementById("numero2").value)
    for(i= 0; i<=10; i++){
        mute = `${num} x ${i} = ${num*i}`
        console.log(mute)
    }
}

function calcular3(){
    var num = parseInt(document.getElementById("numero3").value)
    for(i=1; i < num; i++){

    if(num % i === 0){
        console.log(i)
    }
}
}

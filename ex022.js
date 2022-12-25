function soma(n1, n2){
    return n1+n2
}

console.log("A soma de 2 e 3 é " + soma(2, 3))

console.log(soma(2))

//----------------------------------------------------

function somar(n1, n2=0){
    return n1+n2
}

console.log(somar(2))
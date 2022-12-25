let valores = [6,2,9,4,10,7]

console.log(valores)

console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for(let pos=0; pos<valores.length; pos++){
    console.log("O indice " + pos + " do array valores, tem o valor de " + valores[pos])
}

for(let pos in valores){
    console.log(valores[pos])
}


console.log(valores.sort())

let pos = valores.indexOf(7)
console.log("O número 7 está no index " + pos) 

console.log(valores.indexOf(5))
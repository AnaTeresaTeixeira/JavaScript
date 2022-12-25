var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log("Agora são exatamente " + hora + " horas e " + minutos + " minutos.")

if(hora<13){
    console.log("Bom dia!")
}

else if(hora>=13 && hora<20){
    console.log("Boa tarde.")
}

else{
    console.log("Boa noite.")
}
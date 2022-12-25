let amigo = {
    nome:'Ana', 
    sexo: 'F',
    peso: 58,
    engordar(p){
        console.log("Engordou")
        this.peso += p
    }
}

amigo.engordar(2)
console.log(amigo.nome + " pesa " + amigo.peso + " quilos.")
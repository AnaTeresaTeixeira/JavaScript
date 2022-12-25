function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()  //testar horas aqui
    var minutos = data.getMinutes()

    msg.innerHTML = "Agora são " + hora + " horas " + " e " + minutos + " minutos."

    if(hora>=0 && hora<12){
        //bom dia
        img.src="manha.png"
        document.body.style.background = "#6b83fa"
    }
    else if(hora>=12 && hora<20){
        //boa tarde
        img.src="tarde.png"
        document.body.style.background = "#b89d6e"
    }
    else{
        //boa noite
        img.src="noite.png"
        document.body.style.background = "#43377a"
    }
}


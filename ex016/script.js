function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")

    if(fano.value.length==0 || fano.value>ano){
        window.alert("Verifique os dados. Erro.")
    }
    else{
        window.alert("Ok")
    }

    var sex = window.document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""

    // o mesmo que ir ao HTMl e
    // <img id="foto">
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    if(sex[0].checked){
        genero = "Masculino"
        if(idade>=0 && idade<=3){
            //bebe
            img.setAttribute("src", "bebeH.png")
        }
        else if(idade>3 && idade<=10){
            //menino
            img.setAttribute("src", "adolH.png")
        }
        else if(idade>10 && idade<=60){
            //homem
            img.setAttribute("src", "homen.png")
        }
        else{
            //idoso
            img.setAttribute("src", "idoso.png")
        }

    }
    else if(sex[1].checked){
        genero = "Feminino"
        if(idade>=0 && idade<=3){
            //bebe
            img.setAttribute("src", "bebeM.png")
        }
        else if(idade>3 && idade<=10){
            //menina
            img.setAttribute("src", "adolM.png")
        }
        else if(idade>10 && idade<=60){
            //mulher
            img.setAttribute("src", "mulher.png")
        }
        else{
            //idosa
            img.setAttribute("src", "idosa.png")
        }
    }

    res.innerHTML = "Tem " + idade + " anos e " + genero + "."
    res.appendChild(img)


}
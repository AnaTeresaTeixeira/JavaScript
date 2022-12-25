
function contar(){

        var a = window.document.getElementById("a").style.visibility = "visible"
        var button = window.document.getElementById("button").style.visibility = "hidden"
        var num = window.document.getElementById("num").style.visibility = "visible"
        

        var reload = document.getElementById("reload")
        var ini = window.document.getElementById("inicio")
        var fi = window.document.getElementById("fim")
        var inter = window.document.getElementById("inter")
        var inicio = Number(ini.value) 
        var fim = Number(fi.value)
        var intervalo = Number(inter.value)

        var div = window.document.getElementById("caixamae")
        var texto = window.document.getElementById("texto")
        var caixa = window.document.getElementById("caixa")
        var num = window.document.getElementById("num")
        
        document.body.style.background = "#c5d9fc"
        reload.style.visibility = "visible"


    if((inicio>=0 && fim>0) || (inicio<0 && fim<0) || (inicio<0 && fim>=0) || (inicio>=0 && fim<0)){

    if(fim>inicio){

        if(intervalo == 0 || intervalo== 1 || intervalo.length==0){
        do{
              num.innerHTML += "  \u{1F4A4}  " + inicio
              inicio++
        }while(inicio != fim)
        num.innerHTML += "  \u{1F49A}  " + fim
        }

        else if(intervalo > 1 || intervalo < 0){
        do{
                num.innerHTML += "  \u{1F64A}  " + inicio
                inicio = inicio + intervalo
        }while(inicio < fim)
        num.innerHTML += "  \u{1F49A}  " + fim
        } 

    }


    if(fim<inicio){

        if(intervalo == 0 || intervalo== 1 || intervalo.length==0){
        do{
              num.innerHTML += "  \u{1F49A}  " + inicio
              inicio--
        }while(inicio != fim)
        num.innerHTML += "  \u{1F49A}  " + fim
        }

        else if(intervalo > 1 || intervalo < 0){
        do{
                num.innerHTML += "  \u{1F603}  " + inicio
                inicio = inicio - intervalo
        }while(inicio > fim)
        num.innerHTML += "  \u{1F49A}  " + fim
        } 

     }
   }


        else{
                var gif = window.document.getElementById("gif").style.visibility = "visible"
                num.innerHTML += "Ui! Tens que ir com calma...<br>Chuta com cuidado!"
                num.style.textAlign = "center"
                num.style.fontSize = "23px"
                num.style.paddingTop = "30px"
                num.style.height = "230px"
                num.style.overflowY = "hidden"

                
        }


}



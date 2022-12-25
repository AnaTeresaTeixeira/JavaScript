function clicar(){

    var box = window.document.getElementById("box")
    var numero = window.document.getElementById("number")
    var num = Number(numero.value)

    for(i=1; i<=10; i++){
        box.innerHTML += i + " x " + num + " = " + (i*num)
        box.innerHTML += "<br>"

    }
    box.innerHTML += "<br>"



}
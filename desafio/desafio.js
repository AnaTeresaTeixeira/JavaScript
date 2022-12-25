let num = window.document.getElementById("number")
let lista = window.document.getElementById("flista")
let res = window.document.getElementById("res")

let valores = []

//se é número entre 1 e 100
function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
      return true
   }
   else{
      return false
   }

}

//vai receber n número e l lista
function inLista(n, l){

   //se o indice de n não existir na lista 
   if(l.indexOf(Number(n)) != -1){
         return true
   }
   else{
      return false
   }
}

function add(){

   
   //se é número entre 1 e 100 e se não existe na lista
   if(isNumero(num.value) && !inLista(num.value, valores)){
      window.alert("Tudo Ok")
      valores.push(Number(num.value))

      //adicionar a entrada do número na lista
      let item = document.createElement('option')
      item.text = "Valor " + num.value + " adicionado."
      lista.appendChild(item)
      res.innerHTML = ''
   }
   else{
      window.alert("Valor inválido ou já encontrado na lista.")
   }

   //limpar caixa
   num.value = ' '

   //colocar o rato na caixa automaticamente
   num.focus()
}


function finalizar(){

   if(valores.length == 0){
      window.alert("Adicione valores antes de finalizar.")
   }
   else{
      let total = valores.length
      res.innerHTML = ''
      res.innerHTML += " + No total foram adicionados " + total + " números ao array."


      let maior = valores[0]
      let menor = valores[0]
      let soma = 0

      for(let pos in valores){
         soma += valores[pos]
         if(valores[pos] > maior){
            maior = valores[pos]
         }
         if(valores[pos] < menor){
            menor = valores[pos]
         }
      }

      res.innerHTML += "<br> + O menor valor é " + menor
      res.innerHTML += "<br> + O maior valor é " + maior
      res.innerHTML += "<br> + A soma dos valores é " + soma

      media = soma/total

      res.innerHTML += "<br> + A média dos valores é " + media

   }

}


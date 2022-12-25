function fatorial(num){
   let m=1

   for(i=num;i>=1;i--){
    m = m*i
   }
   return m
}

console.log(fatorial(5))
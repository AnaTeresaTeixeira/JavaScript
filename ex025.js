/*
5! = 5 x 4 x 3 x 2 x 1
==
5! = 5 x 4!
exeto
1! == 1
*/

//Recursividade
function fatorial(num){
    if(num==1){
        return 1
    }
    else{
        return num*fatorial(num-1)
    }
}

console.log(fatorial(5))
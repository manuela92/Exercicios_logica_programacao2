n=parseInt(prompt("Digite um número inteiro:"));

if(isNaN(n)){
    console.log("Digite um número válido")
}else{
if(n%2==0){
    console.log("O número é par")
}else{
    console.log("O número é ímpar")
}
}
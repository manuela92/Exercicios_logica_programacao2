n1=parseFloat(prompt("Digite um número:"));
n2=parseFloat(prompt("Digite outro número:"));

if(isNaN(n1)||isNaN(n2)){
    console.log("Digite um número válido")
}else{
op=prompt("Qual operação deseja realizar? Digite 1-adição, 2-subtração, 3-multiplicação, 4-divisão");


if(op==1){
    result=n1+n2;
    console.log("O resultado é:",result);
       
}else if(op==2){
    result=n1-n2;
    console.log("O resultado é:",result);
}else if(op==3){
    result=n1*n2;
    console.log("O resultado é:",result);
}else if(op==4){
    result=n1/n2;
    console.log("O resultado é:",result);
}else{
    console.log("Escolha uma opção válida");
}

if(result%2==0){
    console.log("O resultado é par")
}else{
    console.log("O resultado é ímpar")
}

if(result>0){
    console.log("O número é positivo")
}else{
    console.log("O número é negativo")
}

round=Math.round(result);
if(result==round) {
    console.log("O número é inteiro");
} else {
    console.log("O número é decimal");
}
}

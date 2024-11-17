morango=parseFloat(prompt("Quantidade de morangos (kg): "));;
maca=parseFloat(prompt("Quantidade de maçãs (kg): "));;

if(isNaN=[morango,maca]&&[morango,maca]<0){
    console.log("Insira  um valor válido")
}else{
if(morango>=0&&morango<=5){
    precokg=2.5
    total_mor=morango*precokg
}else if(morango>5){
    precokg=2.2
    total_mor=morango*precokg
}

if(maca>=0&&maca<=5){
    precokg=1.8
    total_mac=maca*precokg
}else if(maca>5){
    precokg=1.5
    total_mac=maca*precokg
}

total_frutas=morango+maca;
valor_total=total_mac+total_mor

if(total_frutas>=8){
    desc=valor_total-(valor_total*0.1)
    console.log("O valor a ser pago é: R$", desc)
}else if(total_frutas<8&&valor_total>25){
    desc=valor_total-(valor_total*0.1)
    console.log("O valor a ser pago é: R$", desc)
}else{
    console.log("O valor a ser pago é: R$", valor_total)
}
}
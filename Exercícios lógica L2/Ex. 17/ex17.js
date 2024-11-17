ano=parseInt(prompt("Digite um ano: "));

if(ano>0){
    if(ano%4==0){
        console.log("O ano é bissexto")
    }else{
        console.log("O ano não é bissexto")
    }
    
}else{
    console.log("Ano inválido")
}
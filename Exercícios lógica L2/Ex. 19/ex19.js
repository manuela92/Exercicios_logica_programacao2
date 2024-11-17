numero=parseInt(prompt("Digite um número inteiro menor que 1000:"));

if (isNaN(numero)||numero<0||numero>=1000){
    console.log("Por favor, insira um número válido (inteiro, maior ou igual a 0 e menor que 1000).");
}else{
    centenas = Math.floor(numero / 100);
    dezenas = Math.floor((numero % 100) / 10);
    unidades = numero % 10;

    if(centenas>0){
       console.log(centenas, "centenas");
    }

    if (dezenas>0){
        console.log(dezenas,"dezenas");
    }

    if (unidades>0) {
        console.log(unidades,"unidades");
    }

}
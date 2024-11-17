lado1=parseFloat(prompt("Digite o tamanho do primeiro lado:"));
lado2=parseFloat(prompt("Digite o tamanho do segundo lado:"));
lado3=parseFloat(prompt("Digite o tamanho do terceiro lado:"));

if((lado1+lado2)>lado3||(lado1+lado3)>lado2||(lado2+lado3)>lado1){
    console.log("É um triângulo");
    if(lado1==lado2==lado3){
        console.log("Triângulo equilátero");
    }else if(lado1!=lado2&&lado2!=lado3&&lado1!=lado3){
        console.log("Triângulo escaleno")
    }else{
        console.log("Triângulo isósceles")
    }
}else{
    console.log("Não é um triângulo")
}

n1=parseFloat(prompt("Digite a primeira nota:"));
n2=parseFloat(prompt("Digite a segunda nota:"));
n3=parseFloat(prompt("Digite a terceira nota:"));

media=(n1+n2+n3)/3;

if(media>=7&&media<10){
    console.log("APROVADO, média:",media);
}else if(media<7&&media>=0){
    console.log("REPROVADO, média:", media);
}else if(media==10){
    console.log("Aprovado com distinção, média:", media);
}else{
    console.log("Nota inválida")
}
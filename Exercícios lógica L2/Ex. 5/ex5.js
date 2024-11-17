nota1=parseFloat(prompt("Digite a primeira nota: "));
nota2=parseFloat(prompt("Digite a segunda nota: "));
if(nota1>10 || nota2>10){
    console.log("Nota invalida")
}else{
media=(nota1+nota2)/2;

if(media>=7 && media<10){
    console.log("Aprovado")
}else if(media==10){
    console.log("Aprovado com Distinção")
}else{
    console.log("Reprovado")
}
}
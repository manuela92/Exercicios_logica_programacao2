n1=parseFloat(prompt("Digite a primeira nota:"));
n2=parseFloat(prompt("Digite a segunda nota:"));

media=(n1+n2)/2;

if(media>=9&&media<=10){
    console.log("Primeira nota:",n1,";Segunda nota",n2,";média:",media,"Conteito: Nota A; APROVADO");
}else if(media>=7.5&&media<9){
    console.log("Primeira nota:",n1,";Segunda nota",n2,";média:",media,"Conteito: Nota B; APROVADO");
}else if(media>=6&&media<7.5){
    console.log("Primeira nota:",n1,";Segunda nota",n2,";média:",media,"Conteito: Nota C; APROVADO");
}else if(media>=4&&media<6){
    console.log("Primeira nota:",n1,";Segunda nota",n2,";média:",media,"Conteito: Nota D; REPROVADO");
}else if(media>=0&&media<4){
    console.log("Primeira nota:",n1,";Segunda nota",n2,";média:",media,"Conteito: Nota E; REPROVADO");
}else{
    console.log("Nota inválida")
}